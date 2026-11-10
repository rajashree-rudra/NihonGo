// Pictures for vocabulary words, to help remember a word by seeing it. Each one is a hand-drawn SVG in
// public/vocab-art/, named after the word's code points (医者 → 533b-8005.svg); `npm run data:vocab-art`
// lists them in vocab-art.json. Style: flat colours on a 160×160 rounded tile; in family words the person
// the word means is in colour and the other family member is grey (兄: the tall boy, 弟: the small one).
import WORDS from "./vocab-art.json";

const WORDS_WITH_ART = new Set<string>(WORDS);

const artKey = (word: string) => [...word].map((c) => c.codePointAt(0)!.toString(16)).join("-");

/** URL of the word's picture, if it has one. */
export function vocabArt(word: string): string | undefined {
  return WORDS_WITH_ART.has(word) ? `/vocab-art/${artKey(word)}.svg` : undefined;
}
