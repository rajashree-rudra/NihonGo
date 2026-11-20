// Checks the word-by-word glosses (src/data/glosses) against the N5 and N4 example sentences:
// every sentence glossed, every word's reading found, no unknown bare words, no unused lines.
//
// Run: npm run data:glosses            (summary + problems)
//      npm run data:glosses -- --list  (also print every sentence still without glosses)
//      npm run data:glosses -- --kinds     (also list words whose kind was guessed (noun), to look over;
//                                          --kinds=all lists every word with how its kind was decided)
//      npm run data:glosses -- --readings  (also list kanji words read in an unusual way, to look over:
//                                          words read as a whole like 今日 きょう, or a reading split wrongly)
import { N5_KANJI } from "../src/data/characters/n5-kanji/index.ts";
import { N4_KANJI } from "../src/data/characters/n4-kanji/index.ts";
import { N5_VOCAB } from "../src/data/vocabulary/n5/index.ts";
import { N4_VOCAB } from "../src/data/vocabulary/n4/index.ts";
import { N5_GRAMMAR, N4_GRAMMAR } from "../src/data/grammar/index.ts";
import { glossedSentences, isAmbiguous, kindsOf, usualReading, wordsOf } from "../src/data/glosses/index.ts";
import { needsReading } from "../src/data/glosses/words.ts";

const unbold = (s) => s.replace(/\*\*/g, "");
const sentences = new Map(); // ja → kana
const add = (ja, kana) => ja && kana && !sentences.has(unbold(ja)) && sentences.set(unbold(ja), unbold(kana));
for (const g of [N5_GRAMMAR, N4_GRAMMAR]) for (const p of g.items) for (const e of p.examples) add(e.ja, e.kana);
for (const v of [N5_VOCAB, N4_VOCAB]) for (const w of v.items) for (const e of w.examples) add(e.ja, e.kana);
for (const k of [N5_KANJI, N4_KANJI])
  for (const d of Object.values(k.details)) {
    for (const e of d.examples) add(e.ja, e.kana);
    for (const v of d.vocab) add(v.example, v.exampleKana);
    for (const p of d.memory?.comic ?? []) add(p.ja, p.kana);
  }

const list = process.argv.includes("--list");
const review = process.argv.includes("--readings");
const unusual = new Map();
const kindArg = process.argv.find((a) => a.startsWith("--kinds"));
const kindList = new Map(); // "word=gloss source" → count
let missing = 0;
let problems = 0;
const problem = (ja, msg) => {
  problems++;
  console.log(`✗ ${ja}\n    ${msg}`);
};
for (const [ja, kana] of sentences) {
  const words = wordsOf(ja, kana);
  if (!words) {
    missing++;
    if (list) console.log(`· ${ja}`);
    continue;
  }
  const bare = words.filter((w) => w.length === 1 && !/^[「『（【〈《」』）】〉》、。！？…・：]+$/.test(w[0]));
  if (bare.length) problem(ja, `no gloss for: ${bare.map((w) => w[0]).join(" ")}`);
  const unread = words.filter((w) => needsReading(w[0]) && !w[2]);
  if (unread.length) problem(ja, `no reading for: ${unread.map((w) => w[0]).join(" ")} (kana: ${kana})`);
  // A kanji word read with fewer kana than it has kanji is almost surely split in the wrong place.
  const odd = words.filter((w) => w[2] && w[2].length < [...w[0]].filter((c) => !/[ぁ-ゖァ-ヺー]/.test(c)).length);
  if (kindArg)
    for (const [w, g, how] of kindsOf(ja))
      if (how === "guess" || kindArg === "--kinds=all") kindList.set(`${w}=${g.replace(/ /g, "_")}  ${how}`, (kindList.get(`${w}=${g.replace(/ /g, "_")}  ${how}`) ?? 0) + 1);
  if (review) for (const w of words) if (w[2] && !/[0-9０-９]/.test(w[0]) && !usualReading(w[0], w[2])) unusual.set(`${w[0]}=${w[2]}`, ja);
  if (odd.length) problem(ja, `reading looks wrong: ${odd.map((w) => `${w[0]}=${w[2]}`).join(" ")}`);
  else if (isAmbiguous(ja, kana))
    problem(ja, `kanji words could split another way — give a reading, 田中[たなか]: ${words.filter((w) => w[2]).map((w) => `${w[0]}=${w[2]}`).join(" ")}`);
}
const unused = glossedSentences().filter((s) => !sentences.has(s));
for (const s of unused) problem(s, "glossed, but no such sentence (typo?)");
if (review) for (const [w, ja] of [...unusual].sort()) console.log(`? ${w}    (${ja})`);
if (kindArg) for (const k of [...kindList.keys()].sort()) console.log(k);

console.log(`\n${sentences.size - missing}/${sentences.size} sentences glossed · ${problems} problem${problems === 1 ? "" : "s"}`);
process.exit(problems ? 1 : 0);
