/**
 * Shared between the app and scripts/generate-audio.mjs, so it must stay free of runtime imports.
 */

/** File name (without extension) of the pre-generated audio clip for a character. */
export function audioKey(char: string): string {
  return [...char].map((c) => c.codePointAt(0)!.toString(16)).join("-");
}

/**
 * Audio file key for arbitrary spoken text (vocabulary words, example sentences):
 * "t/<fnv1a-hash>" → public/audio/t/<hash>.mp3
 */
export function textAudioKey(text: string): string {
  let h = 0x811c9dc5;
  for (const ch of text.normalize("NFC")) {
    h ^= ch.codePointAt(0)!;
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return `t/${h.toString(16).padStart(8, "0")}`;
}

/** What to say for a vocabulary word: its kana reading, so the voice never misreads the kanji. */
export function wordSpeech(entry: { word: string; reading: string }): string {
  return entry.reading.replace(/[～〜]/g, "");
}

function katakanaToHiragana(s: string): string {
  return s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
}

/**
 * What the voice should say for a character. Kana are spoken as-is; kanji are spoken as
 * their first kun'yomi (full word, okurigana included) followed by their first on'yomi.
 */
export function speechText(item: { char: string; on?: string[]; kun?: string[] }): string {
  if (!item.on && !item.kun) return item.char;
  const parts: string[] = [];
  const kun = item.kun?.[0]?.replace(".", "");
  const on = item.on?.[0] ? katakanaToHiragana(item.on[0]) : undefined;
  if (kun) parts.push(kun);
  if (on && on !== kun) parts.push(on);
  return parts.length ? parts.join("、") : item.char;
}

/**
 * Sentences the voice misreads even with the highlighted word in kana: the whole sentence
 * (as written) → what to say instead. Add an entry whenever a clip is heard reading a kanji wrong,
 * then run `npm run data:audio` and `npm run data:audio:male`.
 */
export const SPEECH_FIXES: Record<string, string> = {
  // 戦い was read おののい (戦く) instead of たたかい.
  "チームが一丸となって戦いました。": "チームがいちがんとなってたたかいました。",
};

/**
 * What the voice should say for a kanji-book sentence. The clip is still looked up by the written
 * sentence; only the spoken text changes. The highlighted word — the reading being taught, often a
 * rare one — is spoken from its kana so the voice can't pick the wrong reading.
 */
export function sentenceSpeech(ja: string, hl?: string, hlKana?: string): string {
  const fixed = SPEECH_FIXES[ja];
  if (fixed) return fixed;
  return hl && hlKana && ja.includes(hl) ? ja.replace(hl, hlKana.replace(/\s+/g, "")) : ja;
}

/** How to say a single reading: kun'yomi without the okurigana dot, on'yomi in hiragana. */
export function readingSpeech(reading: string, kind: "on" | "kun"): string {
  return kind === "on" ? katakanaToHiragana(reading) : reading.replace(".", "");
}

interface ReadingExample {
  ja: string;
  level?: string;
  reading?: string;
  readingKind?: "on" | "kun";
}

/**
 * What to say after a kanji is written well: a kun'yomi and a sentence using it, then an
 * on'yomi and a sentence using it (at most two sentences, taken from the kanji's examples).
 * Sentences at the book's own level come first, then the easiest ones.
 */
export function kanjiSpeechParts(examples: ReadingExample[], targetLevel?: string): string[] {
  const ease = (level?: string) => (level ? 6 - Number(level.slice(1)) : 9); // N5 → 1 … N1 → 5
  const rank = (ex: ReadingExample) => (ex.level === targetLevel ? 0 : ease(ex.level));
  const parts: string[] = [];
  for (const kind of ["kun", "on"] as const) {
    const best = examples
      .map((ex, i) => ({ ex, i }))
      .filter(({ ex }) => ex.readingKind === kind && ex.reading)
      .sort((a, b) => rank(a.ex) - rank(b.ex) || a.i - b.i)[0]?.ex;
    if (best) parts.push(readingSpeech(best.reading!, kind), best.ja);
  }
  return parts;
}

/** "n2-kanji" → "N2" */
export function levelOfSet(setId: string): string | undefined {
  const m = setId.match(/^n(\d)/i);
  return m ? `N${m[1]}` : undefined;
}
