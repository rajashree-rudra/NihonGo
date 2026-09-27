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

// ---------- Vocabulary & grammar ----------

export interface Example {
  /** Sentence as normally written (kanji + kana). */
  ja: string;
  /** Full reading in kana, spaces between words. */
  kana: string;
  romaji: string;
  en: string;
}

export type PartOfSpeech =
  | "noun"
  | "pronoun"
  | "verb-u"
  | "verb-ru"
  | "verb-irr"
  | "suru-verb"
  | "i-adj"
  | "na-adj"
  | "adverb"
  | "conjunction"
  | "expression"
  | "counter"
  | "number"
  | "particle"
  | "prefix"
  | "suffix"
  | "interjection";

export const VOCAB_CATEGORIES = {
  greetings: { title: "Greetings & Expressions", jp: "あいさつ" },
  people: { title: "People & Family", jp: "人・家族" },
  body: { title: "Body & Health", jp: "体・健康" },
  food: { title: "Food & Drink", jp: "食べ物" },
  home: { title: "Home & Everyday Things", jp: "家・物" },
  places: { title: "Places & Buildings", jp: "場所" },
  transport: { title: "Transport & Travel", jp: "交通" },
  time: { title: "Time & Calendar", jp: "時間" },
  numbers: { title: "Numbers & Counters", jp: "数" },
  nature: { title: "Nature, Weather & Animals", jp: "自然" },
  school: { title: "School & Work", jp: "学校・仕事" },
  shopping: { title: "Shopping, Money & Clothes", jp: "買い物" },
  hobbies: { title: "Hobbies & Culture", jp: "趣味" },
  society: { title: "Society & the World", jp: "社会" },
  ideas: { title: "Ideas, Feelings & Plans", jp: "気持ち・考え" },
  colors: { title: "Colors & Shapes", jp: "色・形" },
  position: { title: "Position & Direction", jp: "位置・方向" },
  pointing: { title: "Question & Pointing Words", jp: "こそあど" },
  verbs: { title: "Verbs", jp: "動詞" },
  "i-adj": { title: "い-Adjectives", jp: "い形容詞" },
  "na-adj": { title: "な-Adjectives", jp: "な形容詞" },
  adverbs: { title: "Adverbs & Connectors", jp: "副詞" },
  grammar: { title: "Grammar Words & Endings", jp: "文法の言葉" },
  other: { title: "Other Words", jp: "その他" },
} as const;

export type VocabCategory = keyof typeof VOCAB_CATEGORIES;

export interface VocabEntry {
  /** As usually written (kanji where normal at this level, otherwise kana). */
  word: string;
  /** Reading in kana. */
  reading: string;
  romaji: string;
  meaning: string;
  pos: PartOfSpeech;
  category: VocabCategory;
  /** Polite ます-form reading, for verbs. */
  masu?: string;
  examples: [Example, Example];
}

export interface GrammarPoint {
  id: string;
  /** e.g. "〜てもいいです" */
  pattern: string;
  /** Short English gloss, e.g. "may, it's OK to ~". */
  meaning: string;
  /** Category id within its grammar set. */
  category: string;
  /** How to build it, e.g. ["Verb て-form + もいいです"]. */
  structure: string[];
  /** 1–3 plain-English sentences for a beginner. */
  explanation: string;
  /** Optional nuance, common mistakes, polite/casual difference. */
  notes?: string;
  examples: [Example, Example];
}

export interface GrammarCategory {
  id: string;
  title: string;
  jp: string;
}

export interface VocabSet {
  id: string;
  sections: { id: VocabCategory; title: string; tab: string; jp: string; items: VocabEntry[] }[];
  items: VocabEntry[];
}

export interface GrammarSet {
  id: string;
  sections: { id: string; title: string; tab: string; jp: string; items: GrammarPoint[] }[];
  items: GrammarPoint[];
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
  /** Exactly one of these is set for an available module. */
  charSet?: CharSet;
  vocabSet?: VocabSet;
  grammarSet?: GrammarSet;
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
