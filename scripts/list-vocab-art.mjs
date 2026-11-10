// Lists the vocabulary pictures in public/vocab-art (named after the word's code points, 医者 → 533b-8005.svg)
// into src/data/vocab-art.json, so a word card knows whether it has a picture. Run after adding pictures:
//   npm run data:vocab-art
import { readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const files = (await readdir(`${ROOT}public/vocab-art`)).filter((f) => /^[0-9a-f]+(-[0-9a-f]+)*\.svg$/.test(f));
const words = files
  .map((f) => f.slice(0, -4).split("-").map((h) => String.fromCodePoint(parseInt(h, 16))).join(""))
  .sort((a, b) => a.localeCompare(b, "ja"));
await writeFile(`${ROOT}src/data/vocab-art.json`, JSON.stringify(words, null, 0) + "\n");
console.log(`${words.length} vocabulary pictures listed in src/data/vocab-art.json`);
