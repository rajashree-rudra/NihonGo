// Readings of a glossed sentence's words, found by lining the words up with the sentence's kana:
// kana in a word must match the kana exactly; each run of kanji (or digits) takes the kana between.
// When that could split more than one way, the best split is the one that
//   - ends words where the kana has spaces, and puts the sentence's punctuation where the kana's is,
//   - reads each kanji run as the kanji's own readings put together (八月 = はち + がつ),
//   - gives each kanji 1–4 kana and never starts a reading with a small kana or ん.
import type { Word } from "../types.ts";
import { PUNCTUATION, needsReading } from "./words.ts";

/** Kanji → its readings in hiragana (on'yomi, and kun'yomi without okurigana). */
export type KanjiReadings = Map<string, string[]>;

const toHira = (s: string) => s.replace(/[ァ-ヶ]/g, (c) => (c === "ヶ" ? c : String.fromCharCode(c.charCodeAt(0) - 0x60)));
const KANA_CHAR = /[ぁ-ゖァ-ヵヷ-ヺー]/;
const SMALL_START = /^[ゃゅょぁぃぅぇぉっんーゎ]/;
const PUNCT_CHAR = /[「『（【〈《」』）】〉》、。！？…・：]/;

/** Readings of the kanji in `on` (katakana) and `kun` ("た.べる") lists, for a KanjiReadings map. */
export function readingsOf(on: string[] = [], kun: string[] = []): string[] {
  return [...new Set([...on.map(toHira), ...kun.map((k) => k.split(".")[0].replace(/^-|-$/g, ""))].filter(Boolean))];
}

const VOICED: Record<string, string> = {
  か: "が", き: "ぎ", く: "ぐ", け: "げ", こ: "ご", さ: "ざ", し: "じ", す: "ず", せ: "ぜ", そ: "ぞ", た: "だ", ち: "ぢじ",
  つ: "づず", て: "で", と: "ど", は: "ばぱ", ひ: "びぴ", ふ: "ぶぷ", へ: "べぺ", ほ: "ぼぽ",
};

/** A reading as it can sound inside a word: 学 がく → がっ (がっこう), 人 ひと → びと (人々). */
function soundsOf(r: string, inside: boolean): string[] {
  const out = new Set([r]);
  if (r.length > 1 && /[つくちき]$/.test(r)) out.add(r.slice(0, -1) + "っ");
  if (inside) for (const v of [...out]) for (const voiced of VOICED[v[0]] ?? "") out.add(voiced + v.slice(1));
  return [...out];
}

/** Whether `reading` is the readings of `chars` one after another. */
export function composes(chars: string[], reading: string, dict: KanjiReadings): boolean {
  if (!chars.every((c) => dict.has(c))) return false;
  const go = (i: number, pos: number): boolean => {
    if (i === chars.length) return pos === reading.length;
    for (const r of dict.get(chars[i])!) for (const s of soundsOf(r, i > 0)) if (reading.startsWith(s, pos) && go(i + 1, pos + s.length)) return true;
    return false;
  };
  return go(0, 0);
}

type Part = { lit: string } | { chars: string[] };

/** A word as literal kana and runs of characters that need a reading (kanji, digits). */
export function partsOf(surface: string): Part[] {
  const parts: Part[] = [];
  let prev = "";
  for (const ch of surface) {
    const last = parts[parts.length - 1];
    if (KANA_CHAR.test(ch)) {
      const k = toHira(ch);
      if (last && "lit" in last) last.lit += k;
      else parts.push({ lit: k });
    } else {
      const c = ch === "々" ? prev : ch; // 々 repeats the kanji before it
      if (last && "chars" in last) last.chars.push(c);
      else parts.push({ chars: [c] });
    }
    prev = ch === "々" ? prev : ch;
  }
  return parts;
}

/**
 * Each word's reading (undefined for words without kanji), and whether another split fitted the
 * kana just as well (then a reading may be wrong — give it in the gloss file: 田中[たなか]).
 * Undefined when the words don't fit the kana at all.
 */
export function alignReadings(
  words: Word[],
  kana: string,
  given: (string | undefined)[] = [],
  dict: KanjiReadings = new Map(),
): { readings: (string | undefined)[]; ambiguous: boolean } | undefined {
  // The kana without spaces or punctuation, and where its spaces and punctuation were.
  const spaces = new Set<number>();
  const marks = new Set<number>();
  let k = "";
  for (const ch of toHira(kana.replace(/\*\*/g, ""))) {
    if (/\s/.test(ch)) spaces.add(k.length);
    else if (PUNCT_CHAR.test(ch)) marks.add(k.length);
    else if (KANA_CHAR.test(ch) || ch === "ヶ") k += ch;
  }

  const tokens = words.map((w, i) => (PUNCTUATION.test(w[0]) ? null : given[i] ? [{ lit: toHira(given[i]!) }] : partsOf(w[0])));
  let best: { score: number; ends: number[] } | undefined;
  let ambiguous = false;
  let budget = 50000;

  // Depth-first over the words; ends[i] is where word i ends in k.
  const ends: number[] = [];
  let score = 0;
  function walk(t: number, p: number, pos: number) {
    if (--budget < 0) return;
    if (t === tokens.length) {
      if (pos !== k.length) return;
      if (!best || score > best.score) {
        best = { score, ends: [...ends] };
        ambiguous = false;
      } else if (score === best.score && ends.some((e, i) => e !== best!.ends[i])) ambiguous = true;
      return;
    }
    const parts = tokens[t];
    if (!parts || p === parts.length) {
      ends[t] = pos;
      const bonus = !parts ? (marks.has(pos) ? 2 : 0) : pos > 0 && pos < k.length && (spaces.has(pos) || marks.has(pos)) ? 1 : 0;
      score += bonus;
      walk(t + 1, 0, pos);
      score -= bonus;
      return;
    }
    const part = parts[p];
    if ("lit" in part) {
      if (k.startsWith(part.lit, pos)) walk(t, p + 1, pos + part.lit.length);
      return;
    }
    const n = part.chars.length;
    for (let len = 1; pos + len <= k.length; len++) {
      const read = k.slice(pos, pos + len);
      const fit = (len < n ? -3 : 0) + (len > n * 4 ? -2 : 0) + (SMALL_START.test(read) ? -3 : 0) + (composes(part.chars, read, dict) ? 2 : 0);
      score += fit;
      walk(t, p + 1, pos + len);
      score -= fit;
    }
  }
  walk(0, 0, 0);
  if (!best) return undefined;
  const found = best as { ends: number[] };
  const readings = words.map((w, i) => {
    if (!tokens[i] || !needsReading(w[0])) return undefined;
    return k.slice(i === 0 ? 0 : found.ends[i - 1], found.ends[i]);
  });
  return { readings, ambiguous };
}
