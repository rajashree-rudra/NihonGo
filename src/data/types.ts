// Everything under src/data is plain data + pure functions with explicit ".ts" imports,
// so the Node scripts in /scripts can load it directly (node --experimental-strip-types).

export interface CharItem {
  char: string;
  /** Romaji for kana; romaji of the primary reading for kanji. */
  romaji: string;
  /** English meaning (kanji only). */
  meaning?: string;
  /** On'yomi in katakana (kanji only). */
  on?: string[];
  /** Kun'yomi in hiragana, okurigana separated by "." (kanji only). */
  kun?: string[];
}

/** A chart row in gojūon position; null marks an empty cell. */
export type ChartRow = (CharItem | null)[];

export interface ChartSection {
  id: string;
  title: string;
  /** Short label for the practice/test section tabs. */
  tab: string;
  subtitle: string;
  /** Beginner-friendly explanation shown at the start of the section. */
  description?: string;
  /** Present for kana (fixed 5-column grid); kanji sections are a flowing grid of items. */
  rows?: ChartRow[];
  items: CharItem[];
}

export type CharSetKind = "kana" | "kanji";

export interface CharSet {
  /** Globally unique id; also the file name of its stroke data (public/strokes/<id>.json). */
  id: string;
  kind: CharSetKind;
  sections: ChartSection[];
  /** All items in study order (flattened sections). */
  items: CharItem[];
}

export type Status = "available" | "soon";

export interface LearnModule {
  /** URL segment, e.g. "hiragana" → /n5/hiragana */
  id: string;
  title: string;
  jp: string;
  description: string;
  /** "What is this?" intro shown on the chart page. */
  intro?: string;
  status: Status;
  charSet?: CharSet;
}

export interface Level {
  /** URL segment, e.g. "n5" */
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: Status;
  modules: LearnModule[];
}
