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
  const kun = (item.kun ?? []).map((k) => k.replace(".", ""));
  const on = (item.on ?? []).map(katakanaToHiragana);
  // One kun'yomi + one on'yomi; a kanji with only one kind says its first two (団 → だん、とん).
  const picked = kun.length && on.length ? [kun[0], on[0]] : [...kun, ...on].slice(0, 2);
  const parts = [...new Set(picked.filter(Boolean))];
  return parts.length ? parts.join("、") : item.char;
}

/** What speechText() said before kanji with one kind of reading got two readings (used by the audio script). */
export function legacySpeechText(item: { char: string; on?: string[]; kun?: string[] }): string {
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
 * What to say after a kanji is written well: two readings, each followed by a sentence using it
 * (taken from the kanji's examples). Normally one kun'yomi and one on'yomi; a kanji with only one
 * kind (e.g. 団: ダン, トン) gets two different readings of that kind instead. For each reading
 * the sentence at the book's own level is chosen, else the easiest; and the pair whose sentence
 * is at the book's level is said first.
 */
export function kanjiSpeechParts(examples: ReadingExample[], targetLevel?: string): string[] {
  const ease = (level?: string) => (level ? 6 - Number(level.slice(1)) : 9); // N5 → 1 … N1 → 5
  const rank = (ex: ReadingExample) => (ex.level === targetLevel ? 0 : ease(ex.level));
  // Best sentence for each distinct reading, best first.
  const best = new Map<string, { ex: ReadingExample; i: number }>();
  examples
    .map((ex, i) => ({ ex, i }))
    .filter(({ ex }) => ex.reading && ex.readingKind)
    .sort((a, b) => rank(a.ex) - rank(b.ex) || a.i - b.i)
    .forEach((c) => !best.has(c.ex.reading!) && best.set(c.ex.reading!, c));
  const ranked = [...best.values()];
  const firstOf = (kind: "kun" | "on") => ranked.find((c) => c.ex.readingKind === kind);
  const kun = firstOf("kun");
  const on = firstOf("on");
  // Say the sentence at the book's own level first (then the easier one); kun before on on a tie.
  const picks = (kun && on ? [kun, on] : ranked.slice(0, 2)).sort((a, b) => rank(a.ex) - rank(b.ex));
  return picks.flatMap(({ ex }) => [readingSpeech(ex.reading!, ex.readingKind!), ex.ja]);
}

/** "n2-kanji" → "N2" */
export function levelOfSet(setId: string): string | undefined {
  const m = setId.match(/^n(\d)/i);
  return m ? `N${m[1]}` : undefined;
}
