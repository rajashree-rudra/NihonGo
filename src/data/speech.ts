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
