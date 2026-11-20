// Word-by-word glosses for example sentences: the format of the gloss files. Plain functions with
// explicit ".ts" imports, so scripts can load them (and small enough for the browser: the word list
// uses the particle notes). Readings: align.ts; kinds of words (noun, verb…): pos.ts.
//
// Gloss files hold one sentence per line, its words separated by spaces:
//   私=I は 学生=student です=am。
//   駅=station で=at 友だち=friend に=with 会います=meet。
// - `word=gloss`, with "_" for a space in the gloss ("every_morning"). A gloss in (brackets) is the
//   word's job in the sentence rather than a translation: "(topic)", "(object)", "(polite)".
// - A common particle may stand alone and gets its usual gloss (DEFAULT_GLOSS below).
// - Japanese punctuation stays on the word before it (or after, for an opening bracket): あ=oh、
// - `word[reading]=gloss` gives a reading when it can't be worked out from the sentence's kana.
// - `=gloss/v` gives the word's kind when the rules in pos.ts get it wrong (n v a d p c e, see WordKind);
//   `=+gloss` is a noun spelled like a particle: は=+tooth, と=+door.
// The words joined together must give the sentence exactly; that's how a sentence finds its glosses.

import type { Word, WordKind } from "../types.ts";

export type { Word, WordKind };

/** The usual job of a particle written without a gloss. */
export const DEFAULT_GLOSS: Record<string, string> = {
  は: "(topic)",
  を: "(object)",
  が: "(subject)",
  の: "'s",
  も: "too",
  か: "(question)",
  ね: "(right?)",
  よ: "(you know)",
  へ: "to",
  や: "and",
};

/** What the most common particles do, shown when one is tapped. */
export const PARTICLE_NOTES: Record<string, string> = {
  は: "Topic marker: what the sentence is about (“as for …”). Said “wa”.",
  が: "Marks who or what does it — and what you like, want, have or can do.",
  を: "Marks the object: the thing the action is done to. Said “o”.",
  に: "A point: a time, where something is, where you go, or who you give to or meet.",
  で: "Where an action happens, or what you use: at, in, by, with.",
  へ: "Direction: toward, to. Said “e”.",
  と: "“And” between nouns, or “with” someone.",
  も: "Too, also — it takes the place of は, が or を.",
  の: "Links two nouns: A の B = A's B, the B of A.",
  か: "Turns the sentence into a question (said with a rising voice).",
  ね: "Asks the listener to agree: …, isn't it? / …, right?",
  よ: "Tells the listener something new: …, you know!",
  や: "“And” for a few examples out of more (A, B and so on).",
  から: "From (a time or place) — or, after a reason, “so / because”.",
  まで: "Until, as far as.",
  より: "Than, when comparing.",
  だけ: "Only, just.",
  には: "に + は: “at / to …” as the topic.",
  では: "で + は: “at / in …” as the topic.",
};

const LEADING = /^[「『（【〈《]+/;
const TRAILING = /[、。！？」』）】〉》…・：]+$/;
export const PUNCTUATION = /^[「『（【〈《」』）】〉》、。！？…・：]+$/;

function pushPunct(words: Word[], marks: string) {
  if (marks) words.push([marks]);
}

/** One line of a gloss file → its words (readings not yet filled in). */
export function parseGlossLine(line: string): { words: Word[]; readings: (string | undefined)[] } {
  const words: Word[] = [];
  const readings: (string | undefined)[] = [];
  for (const raw of line.trim().split(/\s+/)) {
    if (!raw) continue;
    if (PUNCTUATION.test(raw)) {
      pushPunct(words, raw);
      readings.push(undefined);
      continue;
    }
    const lead = raw.match(LEADING)?.[0] ?? "";
    let rest = raw.slice(lead.length);
    const trail = rest.match(TRAILING)?.[0] ?? "";
    rest = rest.slice(0, rest.length - trail.length);
    if (lead) {
      pushPunct(words, lead);
      readings.push(undefined);
    }
    const eq = rest.indexOf("=");
    let surface = eq < 0 ? rest : rest.slice(0, eq);
    let gloss = eq < 0 ? DEFAULT_GLOSS[surface] : rest.slice(eq + 1).replace(/_/g, " ");
    let kind: WordKind | undefined;
    if (gloss?.startsWith("+")) [gloss, kind] = [gloss.slice(1), "n"];
    const tagged = gloss?.match(/^(.*)\/([nvadpce])$/);
    if (tagged) [gloss, kind] = [tagged[1], tagged[2] as WordKind];
    let reading: string | undefined;
    const given = surface.match(/^(.+)\[(.+)\]$/);
    if (given) [, surface, reading] = given;
    words.push(gloss === undefined ? [surface] : kind ? [surface, gloss, undefined, kind] : [surface, gloss]);
    readings.push(reading);
    if (trail) {
      pushPunct(words, trail);
      readings.push(undefined);
    }
  }
  return { words, readings };
}

/** The sentence a list of words spells. */
export const sentenceOf = (words: Word[]) => words.map((w) => w[0]).join("");

const KANA_CHAR = /[ぁ-ゖァ-ヵヷ-ヺー]/;

/** Whether a word has kanji or digits, so it has a reading of its own. */
export const needsReading = (surface: string) => [...surface].some((c) => !KANA_CHAR.test(c)) && !PUNCTUATION.test(surface);
