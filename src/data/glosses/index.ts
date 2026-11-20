// Word-by-word glosses for the N5 and N4 example sentences (vocabulary, grammar, kanji books and
// their memory cartoons), added to the sets in levels.ts. The format is described in words.ts.
import type { CharSet, Example, GrammarSet, VocabSet } from "../types.ts";
import { N5_KANJI } from "../characters/n5-kanji/index.ts";
import { N4_KANJI } from "../characters/n4-kanji/index.ts";
import { N2_KANJI } from "../characters/n2-kanji/index.ts";
import { N5_VOCAB } from "../vocabulary/n5/index.ts";
import { N4_VOCAB } from "../vocabulary/n4/index.ts";
import { buildKinds, kindOf, type KindSource } from "./pos.ts";
import { parseGlossLine, sentenceOf, type Word } from "./words.ts";
import { alignReadings, composes, partsOf, readingsOf, type KanjiReadings } from "./align.ts";
import P01 from "./part-01.ts";
import P02 from "./part-02.ts";
import P03 from "./part-03.ts";
import P04 from "./part-04.ts";
import P05 from "./part-05.ts";
import P06 from "./part-06.ts";
import P07 from "./part-07.ts";
import P08 from "./part-08.ts";
import P09 from "./part-09.ts";
import P10 from "./part-10.ts";
import P11 from "./part-11.ts";
import P12 from "./part-12.ts";
import P13 from "./part-13.ts";
import P14 from "./part-14.ts";
import P15 from "./part-15.ts";
import P16 from "./part-16.ts";
import P17 from "./part-17.ts";
import P18 from "./part-18.ts";
import P19 from "./part-19.ts";
import P20 from "./part-20.ts";
import P21 from "./part-21.ts";
import P22 from "./part-22.ts";
import P23 from "./part-23.ts";
import P24 from "./part-24.ts";
import P25 from "./part-25.ts";
import P26 from "./part-26.ts";

const FILES = [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26];

/** Readings of the kanji in the kanji books, to read a sentence's kanji words right. */
const KANJI: KanjiReadings = new Map();
for (const set of [N5_KANJI, N4_KANJI, N2_KANJI]) for (const k of set.items) KANJI.set(k.char, readingsOf(k.on, k.kun));
// Irregular verb stems the lists don't give: 来ます きます, 来ない こない.
KANJI.set("来", [...(KANJI.get("来") ?? []), "き", "こ"]);

/** Kinds of the vocabulary's words and all their forms. */
const KINDS = buildKinds([N5_VOCAB, N4_VOCAB], [N5_KANJI, N4_KANJI]);

/** Glossed words of every sentence, by sentence. */
const GLOSSES = new Map<string, { words: Word[]; readings: (string | undefined)[] }>();
for (const file of FILES)
  for (const line of file.split("\n")) {
    if (!line.trim()) continue;
    const parsed = parseGlossLine(line);
    GLOSSES.set(sentenceOf(parsed.words), parsed);
  }

/** The sentence's words with glosses and readings, or undefined when it has no glosses. */
export function wordsOf(ja: string, kana: string): Word[] | undefined {
  const g = GLOSSES.get(ja.replace(/\*\*/g, ""));
  if (!g) return undefined;
  const readings = alignReadings(g.words, kana, g.readings, KANJI)?.readings;
  return g.words.map((w, i): Word => {
    const r = readings?.[i];
    const reading = r && r !== w[0] ? r : undefined;
    const kind = kindOf(w, w[3], KINDS)?.[0];
    return kind ? [w[0], w[1] ?? "", reading, kind] : w;
  });
}

/** For checks: each word's kind and how it was decided. */
export function kindsOf(ja: string): [string, string, KindSource][] {
  const g = GLOSSES.get(ja.replace(/\*\*/g, ""));
  return (g?.words ?? []).flatMap((w) => {
    const k = kindOf(w, w[3], KINDS);
    return k ? [[w[0], `${w[1] ?? ""}`, k[1]] as [string, string, KindSource]] : [];
  });
}

/** Every glossed sentence (for checks). */
export const glossedSentences = () => [...GLOSSES.keys()];

/** For checks: whether the sentence's kanji words could be read with another split of its kana. */
export function isAmbiguous(ja: string, kana: string) {
  const g = GLOSSES.get(ja.replace(/\*\*/g, ""));
  return !!g && !!alignReadings(g.words, kana, g.readings, KANJI)?.ambiguous;
}

const glossExample = <E extends Example>(e: E): E => {
  const words = wordsOf(e.ja, e.kana);
  return words ? { ...e, words } : e;
};

export function glossVocabSet(set: VocabSet): VocabSet {
  const sections = set.sections.map((s) => ({ ...s, items: s.items.map((w) => ({ ...w, examples: [glossExample(w.examples[0]), glossExample(w.examples[1])] as [Example, Example] })) }));
  return { ...set, sections, items: sections.flatMap((s) => s.items) };
}

export function glossGrammarSet(set: GrammarSet): GrammarSet {
  const sections = set.sections.map((s) => ({ ...s, items: s.items.map((p) => ({ ...p, examples: [glossExample(p.examples[0]), glossExample(p.examples[1])] as [Example, Example] })) }));
  return { ...set, sections, items: sections.flatMap((s) => s.items) };
}

export function glossCharSet(set: CharSet): CharSet {
  if (!set.details) return set;
  const details = Object.fromEntries(
    Object.entries(set.details).map(([char, d]) => [
      char,
      {
        ...d,
        examples: d.examples.map(glossExample),
        vocab: d.vocab.map((v) => {
          const words = v.example && v.exampleKana ? wordsOf(v.example, v.exampleKana) : undefined;
          return words ? { ...v, exampleWords: words } : v;
        }),
        memory: d.memory && {
          ...d.memory,
          comic: d.memory.comic.map((p) => {
            const words = wordsOf(p.ja, p.kana);
            return words ? { ...p, words } : p;
          }),
        },
      },
    ]),
  );
  return { ...set, details };
}

/**
 * For checks: whether a word's reading is its kanji's usual readings put together. False for words
 * read as a whole (今日 きょう) — and for a reading split in the wrong place.
 */
export function usualReading(surface: string, reading: string) {
  const parts = partsOf(surface);
  if (parts.some((p) => "chars" in p && p.chars.some((c) => !KANJI.has(c)))) return true; // a kanji we don't know: can't tell
  const go = (i: number, pos: number): boolean => {
    if (i === parts.length) return pos === reading.length;
    const part = parts[i];
    if ("lit" in part) return reading.startsWith(part.lit, pos) && go(i + 1, pos + part.lit.length);
    for (let end = pos + 1; end <= reading.length; end++) if (composes(part.chars, reading.slice(pos, end), KANJI) && go(i + 1, end)) return true;
    return false;
  };
  return go(0, 0);
}
