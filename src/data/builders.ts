// Helpers that turn compact character tables into CharSets. New levels reuse these —
// a new kanji file is just `defineKanjiSet("n4-kanji", [...groups])`.
import type { CharItem, CharSet, ChartRow, ChartSection, GrammarCategory, GrammarPoint, GrammarSet, VocabEntry, VocabSet } from "./types.ts";
import { VOCAB_CATEGORIES } from "./types.ts";
import { kanaSentenceToRomaji, kanaToRomaji } from "./romaji.ts";

// ---------- Vocabulary ----------

/** Short tab labels for the vocabulary categories. */
const VOCAB_TABS: Record<string, string> = {
  greetings: "Greetings",
  people: "People",
  body: "Body",
  food: "Food",
  home: "Home",
  places: "Places",
  transport: "Transport",
  time: "Time",
  numbers: "Numbers",
  nature: "Nature",
  school: "School",
  shopping: "Shopping",
  hobbies: "Hobbies",
  society: "Society",
  ideas: "Ideas",
  colors: "Colors",
  position: "Position",
  pointing: "Question words",
  verbs: "Verbs",
  "i-adj": "い-adj",
  "na-adj": "な-adj",
  adverbs: "Adverbs",
  grammar: "Grammar words",
  other: "Other",
};

/** Merge vocabulary parts and group them by category, in the category order of VOCAB_CATEGORIES. */
export function defineVocabSet(id: string, parts: VocabEntry[][]): VocabSet {
  const all = parts.flat();
  const sections = (Object.keys(VOCAB_CATEGORIES) as (keyof typeof VOCAB_CATEGORIES)[])
    .map((cat) => ({
      id: cat,
      title: VOCAB_CATEGORIES[cat].title,
      jp: VOCAB_CATEGORIES[cat].jp,
      tab: VOCAB_TABS[cat] ?? VOCAB_CATEGORIES[cat].title,
      items: all.filter((w) => w.category === cat),
    }))
    .filter((s) => s.items.length);
  return { id, sections, items: sections.flatMap((s) => s.items) };
}

// ---------- Grammar ----------

export function defineGrammarSet(id: string, categories: GrammarCategory[], points: GrammarPoint[]): GrammarSet {
  const sections = categories
    .map((c) => ({ id: c.id, title: c.title, jp: c.jp, tab: c.title.split(/,| [&·] /)[0], items: points.filter((p) => p.category === c.id) }))
    .filter((s) => s.items.length);
  return { id, sections, items: sections.flatMap((s) => s.items) };
}

// ---------- Kana ----------

/** [kana, romaji] or null for an empty chart cell. */
export type KanaCell = readonly [string, string] | null;

export interface KanaTable {
  id: string;
  title: string;
  /** Short tab label; defaults to title. */
  tab?: string;
  subtitle: string;
  rows: KanaCell[][];
}

export interface KanaSetOptions {
  /** Convert table characters (hiragana) to this script. */
  mapChar?: (c: string) => string;
  /** Section explanations, keyed by table id. */
  descriptions?: Record<string, string>;
}

export function defineKanaSet(id: string, tables: KanaTable[], { mapChar = (c) => c, descriptions = {} }: KanaSetOptions = {}): CharSet {
  const sections: ChartSection[] = tables.map((t) => {
    const items: CharItem[] = [];
    const rows: ChartRow[] = t.rows.map((row) =>
      row.map((cell) => {
        if (!cell) return null;
        const item: CharItem = { char: mapChar(cell[0]), romaji: cell[1] };
        items.push(item);
        return item;
      }),
    );
    return { id: t.id, title: t.title, tab: t.tab ?? t.title, subtitle: t.subtitle, description: descriptions[t.id], rows, items };
  });
  return { id, kind: "kana", sections, items: sections.flatMap((s) => s.items) };
}

// ---------- Kanji ----------

/** [kanji, meaning, on'yomi (space separated), kun'yomi (space separated, "." before okurigana)] */
export type KanjiRow = readonly [char: string, meaning: string, on: string, kun: string];

export interface KanjiGroup {
  id: string;
  title: string;
  /** Short tab label; defaults to title. */
  tab?: string;
  subtitle: string;
  rows: KanjiRow[];
}

const splitReadings = (s: string) => (s ? s.split(" ") : []);

export function defineKanjiSet(id: string, groups: KanjiGroup[]): CharSet {
  const sections: ChartSection[] = groups.map((g) => ({
    id: g.id,
    title: g.title,
    tab: g.tab ?? g.title,
    subtitle: g.subtitle,
    items: g.rows.map(([char, meaning, on, kun]) => {
      const onList = splitReadings(on);
      const kunList = splitReadings(kun);
      const primary = kunList[0] ?? onList[0] ?? "";
      return {
        char,
        meaning,
        on: onList,
        kun: kunList,
        romaji: kanaToRomaji(primary.replace(".", "")),
      };
    }),
  }));
  return { id, kind: "kanji", sections, items: sections.flatMap((s) => s.items) };
}

// ---------- Kanji books (N2+): grouped kanji with examples and extra vocabulary ----------

/**
 * [ja, kana, en, level of the bold word, romaji override] — wrap the target word in **…**.
 * Romaji is generated from the spaced kana; override it only when a noun looks like a particle (歯 は).
 */
export type BookExample = readonly [ja: string, kana: string, en: string, level?: string, romaji?: string];
/**
 * [word, reading, meaning, level, one Japanese example sentence with the word in **…**, its English translation,
 *  its reading as spaced kana with the same **…** (optional; romaji is generated from it)]
 */
export type BookVocab = readonly [word: string, reading: string, meaning: string, level?: string, example?: string, exampleEn?: string, exampleKana?: string];

export interface BookKanji {
  char: string;
  level: string;
  meaning: string;
  /** On'yomi in katakana, space separated. */
  on: string;
  /** Kun'yomi in hiragana, space separated, "." before okurigana. */
  kun: string;
  examples: BookExample[];
  vocab: BookVocab[];
}

export interface BookGroup {
  n: number;
  /** What the group's kanji have in common, e.g. "small curved strokes". */
  note: string;
  items: BookKanji[];
}

/** Compact constructor for a kanji book entry. */
export function bk(
  char: string,
  level: string,
  meaning: string,
  on: string,
  kun: string,
  examples: BookExample[],
  vocab: BookVocab[] = [],
): BookKanji {
  return { char, level, meaning, on, kun, examples, vocab };
}

const firstBold = (s: string) => s.match(/\*\*(.+?)\*\*/)?.[1];
const unbold = (s: string) => s.replace(/\*\*/g, "");

export function defineKanjiBook(id: string, groups: BookGroup[]): CharSet {
  const details: CharSet["details"] = {};
  const sections: ChartSection[] = groups.map((g) => ({
    id: `g${g.n}`,
    number: g.n,
    title: `Group ${g.n}`,
    tab: g.items.map((k) => k.char).join(""),
    subtitle: g.note,
    note: g.note,
    items: g.items.map((k) => {
      const on = splitReadings(k.on);
      const kun = splitReadings(k.kun);
      details[k.char] = {
        examples: k.examples.map(([ja, kana, en, level, romaji]) => ({
          ja: unbold(ja),
          kana: unbold(kana),
          romaji: romaji ?? kanaSentenceToRomaji(kana),
          en,
          hl: firstBold(ja),
          hlKana: firstBold(kana),
          level,
        })),
        vocab: k.vocab.map(([word, reading, meaning, level, example, exampleEn, exampleKana]) => ({
          word,
          reading,
          meaning,
          level,
          example,
          exampleEn,
          exampleKana,
          exampleRomaji: exampleKana ? kanaSentenceToRomaji(unbold(exampleKana)) : undefined,
        })),
      };
      const primary = kun[0] ?? on[0] ?? "";
      return { char: k.char, meaning: k.meaning, on, kun, level: k.level, romaji: kanaToRomaji(primary.replace(".", "")) };
    }),
  }));
  return { id, kind: "kanji", sections, items: sections.flatMap((s) => s.items), details };
}

/** "た.べる" → "た(べる)" for display. */
export function formatKun(kun: string): string {
  const [stem, okurigana] = kun.split(".");
  return okurigana ? `${stem}(${okurigana})` : stem;
}
