// Pre-generates natural Japanese audio with Microsoft's neural "Nanami" voice
// (free Edge Read Aloud service).
//
//   characters          → public/audio/<codepoints>.mp3          (one small file each)
//   words and sentences → public/audio/packs/<pack>.<hash>.mp3    (packed, see below)
//                         public/audio/packs/index.json            (clip → pack, offset, length)
//
// Thousands of word/sentence clips would exceed the free hosting plan's per-deploy file
// limits, so they are re-encoded at 32 kbps and concatenated into one pack per section.
// Each clip is a complete MP3 inside its pack; the app fetches just its bytes with an
// HTTP Range request.
//
// Raw clips are cached in .audio-cache/ (git-ignored), so re-running only generates what
// is missing. Run: npm run data:audio
import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { mkdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import ffmpegPath from "ffmpeg-static";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import { allCharSets, allGrammarSets, allVocabSets } from "../src/data/levels.ts";
import { audioKey, speechText, textAudioKey, wordSpeech } from "../src/data/speech.ts";

const VOICE = process.env.VOICE ?? "ja-JP-NanamiNeural";
const WORKERS = Number(process.env.WORKERS ?? 4);
const ROOT = fileURLToPath(new URL("../", import.meta.url));
const PUBLIC_AUDIO = path.join(ROOT, "public/audio");
const PACK_DIR = path.join(PUBLIC_AUDIO, "packs");
const CACHE = path.join(ROOT, ".audio-cache");
const RAW = path.join(CACHE, "raw");
// Speech stays clear at low bitrates; this keeps the whole site under the free hosting
// plan's 100 MB upload limit. Raise TEXT_KBPS (32/48) if hosting allows.
const TEXT_KBPS = process.env.TEXT_KBPS ?? "24";
const SMALL = path.join(CACHE, `${TEXT_KBPS}k`);
const TMP = path.join(CACHE, "tmp");
const run = promisify(execFile);
const exists = (p) => stat(p).then(() => true, () => false);

// ---------- Collect clips ----------

const charJobs = [];
for (const item of allCharSets().flatMap((s) => s.items)) {
  charJobs.push({ file: path.join(PUBLIC_AUDIO, `${audioKey(item.char)}.mp3`), text: speechText(item), format: OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3 });
}

/** hash → { text, pack } — the first section a text appears in owns its clip. */
const textClips = new Map();
function addText(text, pack) {
  const hash = textAudioKey(text).slice(2);
  const prev = textClips.get(hash);
  if (prev && prev.text !== text) throw new Error(`Audio key collision: "${prev.text}" and "${text}" → ${hash}`);
  if (!prev) textClips.set(hash, { text, pack });
}
for (const set of allVocabSets())
  for (const section of set.sections)
    for (const entry of section.items) {
      const pack = `${set.id}-${section.id}`;
      addText(wordSpeech(entry), pack);
      for (const ex of entry.examples) addText(ex.ja, pack);
    }
for (const set of allGrammarSets())
  for (const section of set.sections)
    for (const point of section.items) for (const ex of point.examples) addText(ex.ja, `${set.id}-${section.id}`);
// Kanji books: example sentences and "more vocabulary" sentences, ten groups per pack.
for (const set of allCharSets().filter((s) => s.details))
  for (const section of set.sections) {
    const pack = `${set.id}-${String(Math.ceil((section.number ?? 1) / 10)).padStart(2, "0")}`;
    for (const k of section.items) {
      const d = set.details[k.char];
      for (const ex of d?.examples ?? []) addText(ex.ja, pack);
      for (const v of d?.vocab ?? []) addText(v.example ? v.example.replace(/\*\*/g, "") : v.reading.split("・")[0], pack);
    }
  }

const textJobs = [...textClips].map(([hash, { text }]) => ({
  file: path.join(RAW, `${hash}.mp3`),
  text,
  format: OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3,
}));

// ---------- Generate missing clips ----------

await mkdir(RAW, { recursive: true });
const todo = [];
for (const job of [...charJobs, ...textJobs]) if (!(await exists(job.file))) todo.push(job);
console.log(`${charJobs.length + textJobs.length} clips, ${todo.length} to generate with ${WORKERS} workers.`);

let made = 0;
let failed = 0;
let next = 0;
async function worker(id) {
  // Each worker gets its own temp folder: the library always writes the same file name.
  const tmp = path.join(TMP, String(id));
  await mkdir(tmp, { recursive: true });
  while (next < todo.length) {
    const job = todo[next++];
    for (let attempt = 1; ; attempt++) {
      try {
        // A fresh connection per clip is slower but far more reliable with this service.
        const tts = new MsEdgeTTS();
        await tts.setMetadata(VOICE, job.format);
        const { audioFilePath } = await tts.toFile(tmp, job.text, { rate: 0.9 });
        tts.close();
        await rename(audioFilePath, job.file);
        made++;
        if (made % 50 === 0 || todo.length < 50) console.log(`✓ ${made}/${todo.length}  ${job.text}`);
        break;
      } catch (e) {
        if (attempt >= 4) {
          failed++;
          console.error(`✗ ${job.text}: ${e?.message ?? e}`);
          break;
        }
        await new Promise((r) => setTimeout(r, 1500 * attempt));
      }
    }
  }
}
await Promise.all(Array.from({ length: WORKERS }, (_, i) => worker(i)));
await rm(TMP, { recursive: true, force: true });
console.log(`Generated ${made}, failed ${failed}.`);

// ---------- Re-encode word/sentence clips to 32 kbps ----------

await mkdir(SMALL, { recursive: true });
const hashes = [...textClips.keys()].filter((h) => textClips.has(h));
let encoded = 0;
let enc = 0;
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (enc < hashes.length) {
      const hash = hashes[enc++];
      const src = path.join(RAW, `${hash}.mp3`);
      const dst = path.join(SMALL, `${hash}.mp3`);
      if (!(await exists(src)) || (await exists(dst))) continue;
      await run(ffmpegPath, ["-loglevel", "error", "-y", "-i", src, "-ac", "1", "-ar", "24000", "-b:a", `${TEXT_KBPS}k`, "-codec:a", "libmp3lame", dst]);
      encoded++;
    }
  }),
);
console.log(`Re-encoded ${encoded} clips to ${TEXT_KBPS} kbps.`);

// ---------- Pack ----------

const byPack = new Map();
for (const [hash, { pack }] of textClips) {
  if (!(await exists(path.join(SMALL, `${hash}.mp3`)))) continue; // generation failed: app falls back to the browser voice
  if (!byPack.has(pack)) byPack.set(pack, []);
  byPack.get(pack).push(hash);
}

await rm(PACK_DIR, { recursive: true, force: true });
await mkdir(PACK_DIR, { recursive: true });
const index = { packs: [], clips: {} };
let totalBytes = 0;
for (const [pack, list] of [...byPack].sort(([a], [b]) => a.localeCompare(b))) {
  list.sort();
  const parts = [];
  const entries = [];
  let offset = 0;
  for (const hash of list) {
    const buf = await readFile(path.join(SMALL, `${hash}.mp3`));
    entries.push([hash, offset, buf.length]);
    parts.push(buf);
    offset += buf.length;
  }
  const data = Buffer.concat(parts);
  // Content hash in the name: packs never change in place, so browsers can cache them for good.
  const name = `${pack}.${createHash("sha1").update(data).digest("hex").slice(0, 8)}.mp3`;
  await writeFile(path.join(PACK_DIR, name), data);
  const p = index.packs.push(name) - 1;
  for (const [hash, off, len] of entries) index.clips[hash] = [p, off, len];
  totalBytes += data.length;
}
await writeFile(path.join(PACK_DIR, "index.json"), JSON.stringify(index));
console.log(`Packed ${Object.keys(index.clips).length} clips into ${index.packs.length} packs (${(totalBytes / 1048576).toFixed(1)} MB).`);

// Old per-clip files from before packing are no longer used.
if (await exists(path.join(PUBLIC_AUDIO, "t"))) await rm(path.join(PUBLIC_AUDIO, "t"), { recursive: true, force: true });

if (failed) process.exitCode = 1;
