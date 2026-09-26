// Pre-generates natural Japanese pronunciation clips with Microsoft's neural
// "Nanami" voice (free Edge Read Aloud service) into public/audio/<key>.mp3.
// Existing files are skipped, so re-running only fills in what is missing.
//
// Run: npm run data:audio
import { mkdir, rename, rm, stat, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import { allCharSets } from "../src/data/levels.ts";
import { audioKey, speechText } from "../src/data/speech.ts";

const VOICE = process.env.VOICE ?? "ja-JP-NanamiNeural";
const OUT_DIR = fileURLToPath(new URL("../public/audio/", import.meta.url));
const TMP_DIR = path.join(OUT_DIR, ".tmp");

const items = allCharSets().flatMap((s) => s.items);

const exists = (p) => stat(p).then(() => true, () => false);

await mkdir(TMP_DIR, { recursive: true });

let made = 0;
let skipped = 0;
for (const item of items) {
  const target = path.join(OUT_DIR, `${audioKey(item.char)}.mp3`);
  if (await exists(target)) {
    skipped++;
    continue;
  }
  const text = speechText(item);
  for (let attempt = 1; ; attempt++) {
    try {
      // A fresh connection per clip is slower but far more reliable with this service.
      const tts = new MsEdgeTTS();
      await tts.setMetadata(VOICE, OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);
      const { audioFilePath } = await tts.toFile(TMP_DIR, text, { rate: 0.9 });
      tts.close();
      await rename(audioFilePath, target);
      made++;
      console.log(`✓ ${item.char}  →  ${text}`);
      break;
    } catch (e) {
      if (attempt >= 3) {
        console.error(`✗ ${item.char}: ${e?.message ?? e}`);
        process.exitCode = 1;
        break;
      }
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
}

for (const f of await readdir(TMP_DIR)) await rm(path.join(TMP_DIR, f));
await rm(TMP_DIR, { recursive: true, force: true });
console.log(`Done: ${made} generated, ${skipped} already present.`);
