// Words for the multiple-choice quiz (kanji → reading, reading → kanji), collected from a kanji
// book (its example words and "more vocabulary") or from a vocabulary set.
import type { CharSet, VocabSet } from "./types.ts";
import { wordSpeech } from "./speech.ts";

export interface QuizWord {
  word: string;
  /** Reading in kana. */
  reading: string;
  meaning?: string;
  level?: string;
  /** Group / category it belongs to (for choosing what to quiz). */
  group: string;
  /** A sentence using it, shown and played after answering. */
  sentence?: string;
  sentenceEn?: string;
  /** Text whose recorded clip to play (the sentence, or the word itself). */
  say?: string;
}

export interface QuizGroup {
  id: string;
  number?: number;
  label: string;
  note?: string;
}

const HAS_KANJI = /[一-鿿々]/;
const KANA_ONLY = /^[ぁ-ゖァ-ーー]+$/;
const unbold = (s: string) => s.replace(/\*\*/g, "");
const bold = (s?: string) => s?.match(/\*\*(.+?)\*\*/)?.[1];

function usable(word: string, reading: string) {
  return HAS_KANJI.test(word) && KANA_ONLY.test(reading) && word.length <= 8 && reading !== word;
}

/** Example words and vocabulary of a kanji book, one entry per distinct word. */
export function quizFromKanjiBook(set: CharSet): { words: QuizWord[]; groups: QuizGroup[] } {
  const words: QuizWord[] = [];
  const seen = new Set<string>();
  const add = (w: QuizWord) => {
    const key = `${w.word}|${w.reading}`;
    if (!usable(w.word, w.reading) || seen.has(key)) return;
    seen.add(key);
    words.push(w);
  };
  for (const section of set.sections)
    for (const k of section.items) {
      const d = set.details?.[k.char];
      if (!d) continue;
      for (const v of d.vocab)
        add({
          word: v.word,
          reading: v.reading.split("・")[0].replace(/\s+/g, ""),
          meaning: v.meaning,
          level: v.level,
          group: section.id,
          sentence: v.example && unbold(v.example),
          sentenceEn: v.exampleEn,
          say: v.example ? unbold(v.example) : undefined,
        });
      for (const ex of d.examples)
        if (ex.hl && ex.hlKana)
          add({
            word: ex.hl,
            reading: ex.hlKana.replace(/\s+/g, ""),
            level: ex.level,
            group: section.id,
            sentence: ex.ja,
            sentenceEn: ex.en,
            say: ex.ja,
          });
    }
  const groups = set.sections.map((s) => ({ id: s.id, number: s.number, label: s.items.map((k) => k.char).join(" "), note: s.note ?? s.subtitle }));
  return { words, groups };
}

/** Vocabulary words written with kanji. */
export function quizFromVocab(set: VocabSet): { words: QuizWord[]; groups: QuizGroup[] } {
  const words = set.sections.flatMap((s) =>
    s.items
      .filter((e) => usable(e.word, e.reading))
      .map((e) => ({
        word: e.word,
        reading: e.reading,
        meaning: e.meaning,
        group: s.id,
        sentence: e.examples[0]?.ja,
        sentenceEn: e.examples[0]?.en,
        say: wordSpeech(e),
      })),
  );
  const groups = set.sections.map((s) => ({ id: s.id, label: s.title, note: s.jp }));
  return { words, groups };
}

/**
 * Three wrong answers that look plausible: words sharing a kanji with the answer, of similar
 * length, starting with the same kana. Never another word with the same reading (in reading →
 * kanji, homophones would make two answers right) and never the same text twice.
 */
export function quizOptions(answer: QuizWord, pool: QuizWord[], mode: "k2h" | "h2k", random = Math.random): string[] {
  const key = (w: QuizWord) => (mode === "k2h" ? w.reading : w.word);
  const correct = key(answer);
  const kanji = new Set([...answer.word].filter((c) => HAS_KANJI.test(c)));
  const scored = pool
    .filter((w) => key(w) !== correct && w.reading !== answer.reading && w.word !== answer.word)
    .map((w) => {
      const k = key(w);
      let score = random() * 1.5;
      if ([...w.word].some((c) => kanji.has(c))) score += 3;
      if (Math.abs(k.length - correct.length) <= 1) score += 2;
      if (k[0] === correct[0]) score += 1;
      return { k, score };
    })
    .sort((a, b) => b.score - a.score);
  const picked: string[] = [];
  for (const { k } of scored) {
    if (!picked.includes(k)) picked.push(k);
    if (picked.length === 3) break;
  }
  const all = [correct, ...picked];
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all;
}
