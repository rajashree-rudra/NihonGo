// Validates vocabulary / grammar content files against the schema in src/data/types.ts.
//
// Run: node --experimental-strip-types --no-warnings scripts/validate-content.mjs <file.ts> [...]
//   vocabulary files export `WORDS: VocabEntry[]`
//   grammar files export `CATEGORIES: GrammarCategory[]` and `POINTS: GrammarPoint[]`
import path from "node:path";
import { pathToFileURL } from "node:url";
import { VOCAB_CATEGORIES } from "../src/data/types.ts";

const POS = new Set([
  "noun", "pronoun", "verb-u", "verb-ru", "verb-irr", "suru-verb", "i-adj", "na-adj", "adverb",
  "conjunction", "expression", "counter", "number", "particle", "prefix", "suffix", "interjection",
]);
const VERBS = new Set(["verb-u", "verb-ru", "verb-irr", "suru-verb"]);
// Kana, long-vowel mark, Japanese/ASCII punctuation, spaces and the ～ placeholder.
const KANA = /^[\p{Script=Hiragana}\p{Script=Katakana}ー～〜・、。？！「」『』（）()…：:,.!?\s　]+$/u;
const JAPANESE = /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u;
const ROMAJI = /^[A-Za-z0-9 .,!?'"’\-~:;()…āīūēōĀĪŪĒŌ/]+$/;

let errors = 0;
const fail = (file, where, msg) => {
  errors++;
  console.error(`✗ ${path.basename(file)} ${where}: ${msg}`);
};

function checkExample(file, where, ex, i) {
  const w = `${where} example ${i + 1}`;
  if (!ex || typeof ex !== "object") return fail(file, w, "missing");
  for (const k of ["ja", "kana", "romaji", "en"]) if (typeof ex[k] !== "string" || !ex[k].trim()) fail(file, w, `"${k}" missing`);
  if (ex.ja && !JAPANESE.test(ex.ja)) fail(file, w, `"ja" has no Japanese: ${ex.ja}`);
  if (ex.kana && !KANA.test(ex.kana)) fail(file, w, `"kana" must be kana only (no kanji/digits): ${ex.kana}`);
  if (ex.romaji && !ROMAJI.test(ex.romaji)) fail(file, w, `"romaji" has non-romaji characters: ${ex.romaji}`);
  if (ex.romaji && /\bha\b/.test(ex.romaji) && /は/.test(ex.kana ?? "")) {
    // Possibly the topic particle romanised as "ha" (should be "wa") — a warning, since 歯 "ha" exists.
    console.warn(`⚠ ${path.basename(file)} ${w}: check は romanisation (topic particle is "wa"): ${ex.romaji}`);
  }
}

function checkExamples(file, where, examples) {
  if (!Array.isArray(examples) || examples.length !== 2) return fail(file, where, "needs exactly 2 examples");
  examples.forEach((ex, i) => checkExample(file, where, ex, i));
  if (examples[0]?.ja && examples[0].ja === examples[1]?.ja) fail(file, where, "the two examples are identical");
}

function validateVocab(file, words) {
  if (!Array.isArray(words) || !words.length) return fail(file, "WORDS", "must be a non-empty array");
  const seen = new Set();
  words.forEach((e, i) => {
    const where = `#${i + 1} ${e?.word ?? "?"}`;
    for (const k of ["word", "reading", "romaji", "meaning", "pos", "category"])
      if (typeof e[k] !== "string" || !e[k].trim()) fail(file, where, `"${k}" missing`);
    if (e.reading && !KANA.test(e.reading)) fail(file, where, `"reading" must be kana: ${e.reading}`);
    if (e.romaji && !ROMAJI.test(e.romaji)) fail(file, where, `"romaji" invalid: ${e.romaji}`);
    if (e.pos && !POS.has(e.pos)) fail(file, where, `unknown pos "${e.pos}"`);
    if (e.category && !(e.category in VOCAB_CATEGORIES)) fail(file, where, `unknown category "${e.category}"`);
    if (VERBS.has(e.pos) && !e.masu) fail(file, where, `verbs need "masu" (polite form in kana)`);
    if (e.masu && !KANA.test(e.masu)) fail(file, where, `"masu" must be kana: ${e.masu}`);
    const key = `${e.word}|${e.reading}`;
    if (seen.has(key)) fail(file, where, "duplicate entry");
    seen.add(key);
    checkExamples(file, where, e.examples);
  });
  return words.length;
}

function validateGrammar(file, categories, points) {
  if (!Array.isArray(categories) || !categories.length) return fail(file, "CATEGORIES", "must be a non-empty array");
  if (!Array.isArray(points) || !points.length) return fail(file, "POINTS", "must be a non-empty array");
  const cats = new Set(categories.map((c) => c.id));
  categories.forEach((c) => {
    for (const k of ["id", "title", "jp"]) if (typeof c[k] !== "string" || !c[k]) fail(file, `category ${c.id}`, `"${k}" missing`);
  });
  const ids = new Set();
  points.forEach((p, i) => {
    const where = `#${i + 1} ${p?.pattern ?? "?"}`;
    for (const k of ["id", "pattern", "meaning", "category", "explanation"])
      if (typeof p[k] !== "string" || !p[k].trim()) fail(file, where, `"${k}" missing`);
    if (p.id && !/^[a-z0-9-]+$/.test(p.id)) fail(file, where, `id must be kebab-case ascii: ${p.id}`);
    if (ids.has(p.id)) fail(file, where, `duplicate id "${p.id}"`);
    ids.add(p.id);
    if (p.category && !cats.has(p.category)) fail(file, where, `unknown category "${p.category}"`);
    if (!Array.isArray(p.structure) || !p.structure.length) fail(file, where, `"structure" must be a non-empty array`);
    checkExamples(file, where, p.examples);
  });
  const unused = [...cats].filter((c) => !points.some((p) => p.category === c));
  if (unused.length) fail(file, "CATEGORIES", `unused categories: ${unused.join(", ")}`);
  return points.length;
}

const files = process.argv.slice(2);
if (!files.length) {
  console.error("Usage: validate-content.mjs <file.ts> [...]");
  process.exit(2);
}
for (const f of files) {
  const abs = path.resolve(f);
  let mod;
  try {
    mod = await import(pathToFileURL(abs).href);
  } catch (e) {
    fail(abs, "import", e.message);
    continue;
  }
  const before = errors;
  const n = mod.WORDS ? validateVocab(abs, mod.WORDS) : mod.POINTS ? validateGrammar(abs, mod.CATEGORIES, mod.POINTS) : fail(abs, "exports", "expected WORDS or POINTS");
  if (errors === before) console.log(`✓ ${path.basename(abs)}: ${n} entries OK`);
}
process.exit(errors ? 1 : 0);
