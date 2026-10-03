// Pre-generates natural Japanese audio with Microsoft's neural voices (free Edge Read Aloud
// service): "Nanami" (female, default) and "Keita" (male, --voice=male).
//
//   characters          → public/audio[/male]/<codepoints>.mp3          (one small file each)
//   words and sentences → public/audio[/male]/packs/<pack>.<hash>.mp3    (packed, see below)
//                         public/audio[/male]/packs/index.json            (clip → pack, offset, length)
//
// In production the audio is served from GitHub Pages (see .github/workflows/deploy.yml),
// not from Vercel, so both voices fit comfortably in free hosting.
//
// Thousands of word/sentence clips would exceed the free hosting plan's per-deploy file
// limits, so they are re-encoded at 32 kbps and concatenated into one pack per section.
// Each clip is a complete MP3 inside its pack; the app fetches just its bytes with an
// HTTP Range request.
//
// Raw clips are cached in .audio-cache/ (git-ignored), so re-running only generates what
// is missing. Run: npm run data:audio (female) and npm run data:audio:male
import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { mkdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import ffmpegPath from "ffmpeg-static";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import { allCharSets, allGrammarSets, allVocabSets } from "../src/data/levels.ts";
import { audioKey, kanjiSpeechParts, legacySpeechText, levelOfSet, sentenceSpeech, speechText, textAudioKey, wordSpeech } from "../src/data/speech.ts";

const VOICES = { female: "ja-JP-NanamiNeural", male: "ja-JP-KeitaNeural" };
const VOICE_ID = process.argv.find((a) => a.startsWith("--voice="))?.slice(8) ?? process.env.VOICE_ID ?? "female";
if (!VOICES[VOICE_ID]) throw new Error(`VOICE_ID must be one of: ${Object.keys(VOICES).join(", ")}`);
const VOICE = process.env.VOICE ?? VOICES[VOICE_ID];
// The female voice lives at the root of public/audio (its original place); others in a subfolder.
const SUB = VOICE_ID === "female" ? "" : VOICE_ID;
const WORKERS = Number(process.env.WORKERS ?? 4);
const ROOT = fileURLToPath(new URL("../", import.meta.url));
const PUBLIC_AUDIO = path.join(ROOT, "public/audio", SUB);
const PACK_DIR = path.join(PUBLIC_AUDIO, "packs");
const CACHE = path.join(ROOT, ".audio-cache", SUB);
const RAW = path.join(CACHE, "raw");
// Speech stays clear at low bitrates; this keeps the whole site under the free hosting
// plan's 100 MB upload limit. Raise TEXT_KBPS (32/48) if hosting allows.
const TEXT_KBPS = process.env.TEXT_KBPS ?? "24";
// "-trim": the voice service leaves ~0.25 s of silence before and ~1 s after every clip; it is
// cut down to a short natural edge so clips played back to back don't keep the learner waiting.
const SMALL = path.join(CACHE, `${TEXT_KBPS}k-trim`);
const TRIM = [
  "silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.03",
  "areverse",
  "silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.08",
  "areverse",
].join(",");
const TMP = path.join(CACHE, "tmp");
const run = promisify(execFile);
const exists = (p) => stat(p).then(() => true, () => false);

// ---------- Collect clips ----------

const charJobs = [];
for (const item of allCharSets().flatMap((s) => s.items)) {
  charJobs.push({
    key: audioKey(item.char),
    file: path.join(PUBLIC_AUDIO, `${audioKey(item.char)}.mp3`),
    text: speechText(item),
    legacy: legacySpeechText(item),
    format: OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3,
  });
}

/**
 * hash of the written text (what the app looks up) → { text, speech, pack, file }.
 * `speech` is what the voice actually says (may differ, see sentenceSpeech); cached files are
 * named after the hash of `speech`, so changing what is said regenerates the clip.
 * The first section a text appears in owns its clip.
 */
const textClips = new Map();
function addText(text, pack, speech = text) {
  const hash = textAudioKey(text).slice(2);
  const prev = textClips.get(hash);
  if (prev && prev.text !== text) throw new Error(`Audio key collision: "${prev.text}" and "${text}" → ${hash}`);
  if (!prev) textClips.set(hash, { text, speech, pack, file: textAudioKey(speech).slice(2) });
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
      // The readings said after the kanji is written in practice (sentences are added below).
      if (d) kanjiSpeechParts(d.examples, levelOfSet(set.id)).forEach((part, i) => i % 2 === 0 && addText(part, pack));
      for (const ex of d?.examples ?? []) addText(ex.ja, pack, sentenceSpeech(ex.ja, ex.hl, ex.hlKana));
      for (const v of d?.vocab ?? []) {
        if (!v.example) {
          addText(v.reading.split("・")[0], pack);
          continue;
        }
        const ja = v.example.replace(/\*\*/g, "");
        const bold = (s) => s?.match(/\*\*(.+?)\*\*/)?.[1];
        addText(ja, pack, sentenceSpeech(ja, bold(v.example), bold(v.exampleKana)));
      }
    }
  }

const speechFiles = new Map([...textClips.values()].map(({ file, speech }) => [file, speech]));
const textJobs = [...speechFiles].map(([file, text]) => ({
  file: path.join(RAW, `${file}.mp3`),
  text,
  format: OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3,
}));

// ---------- Generate missing clips ----------

await mkdir(RAW, { recursive: true });
await mkdir(PUBLIC_AUDIO, { recursive: true });
// Character clips keep a fixed file name, so remember what each one says: when the spoken text
// changes (e.g. 団 now says "だん、とん"), the clip is regenerated. Clips made before this record
// existed said legacySpeechText().
const SAID = path.join(CACHE, "chars-said.json");
const said = (await exists(SAID)) ? JSON.parse(await readFile(SAID, "utf8")) : {};
const todo = [];
for (const job of charJobs) if (!(await exists(job.file)) || (said[job.key] ?? job.legacy) !== job.text) todo.push(job);
for (const job of textJobs) if (!(await exists(job.file))) todo.push(job);
console.log(`${VOICE}: ${charJobs.length + textJobs.length} clips, ${todo.length} to generate with ${WORKERS} workers.`);

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
          job.failed = true;
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

// Record what each character clip says, and publish a version per clip (content hash) so the app
// can ask for ?v=<hash> — browsers and CDNs then never replay an outdated clip.
const failedFiles = new Set(todo.filter((j) => j.failed).map((j) => j.file));
for (const job of charJobs) if (!failedFiles.has(job.file) && (await exists(job.file))) said[job.key] = job.text;
await writeFile(SAID, JSON.stringify(said));
const versions = {};
for (const job of charJobs)
  if (await exists(job.file)) versions[job.key] = createHash("sha1").update(await readFile(job.file)).digest("hex").slice(0, 8);
await writeFile(path.join(PUBLIC_AUDIO, "chars.json"), JSON.stringify(versions));

// ---------- Re-encode word/sentence clips to 32 kbps ----------

await mkdir(SMALL, { recursive: true });
const hashes = [...speechFiles.keys()];
let encoded = 0;
let enc = 0;
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (enc < hashes.length) {
      const hash = hashes[enc++];
      const src = path.join(RAW, `${hash}.mp3`);
      const dst = path.join(SMALL, `${hash}.mp3`);
      if (!(await exists(src)) || (await exists(dst))) continue;
      await run(ffmpegPath, ["-loglevel", "error", "-y", "-i", src, "-af", TRIM, "-ac", "1", "-ar", "24000", "-b:a", `${TEXT_KBPS}k`, "-codec:a", "libmp3lame", dst]);
      encoded++;
    }
  }),
);
console.log(`Re-encoded ${encoded} clips to ${TEXT_KBPS} kbps.`);

// ---------- Pack ----------

const byPack = new Map();
for (const [hash, { pack, file }] of textClips) {
  if (!(await exists(path.join(SMALL, `${file}.mp3`)))) continue; // generation failed: app falls back to the browser voice
  if (!byPack.has(pack)) byPack.set(pack, []);
  byPack.get(pack).push([hash, file]);
}

await rm(PACK_DIR, { recursive: true, force: true });
await mkdir(PACK_DIR, { recursive: true });
const index = { packs: [], clips: {} };
let totalBytes = 0;
for (const [pack, list] of [...byPack].sort(([a], [b]) => a.localeCompare(b))) {
  list.sort(([a], [b]) => a.localeCompare(b));
  const parts = [];
  const entries = [];
  let offset = 0;
  for (const [hash, file] of list) {
    const buf = await readFile(path.join(SMALL, `${file}.mp3`));
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
