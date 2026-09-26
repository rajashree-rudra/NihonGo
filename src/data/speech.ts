/**
 * Shared between the app and scripts/generate-audio.mjs, so it must stay free of runtime imports.
 */

/** File name (without extension) of the pre-generated audio clip for a character. */
export function audioKey(char: string): string {
  return [...char].map((c) => c.codePointAt(0)!.toString(16)).join("-");
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
