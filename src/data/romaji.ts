// Hepburn romanisation of kana readings (used for kanji readings).

const BASE: Record<string, string> = {
  あ: "a", い: "i", う: "u", え: "e", お: "o",
  か: "ka", き: "ki", く: "ku", け: "ke", こ: "ko",
  さ: "sa", し: "shi", す: "su", せ: "se", そ: "so",
  た: "ta", ち: "chi", つ: "tsu", て: "te", と: "to",
  な: "na", に: "ni", ぬ: "nu", ね: "ne", の: "no",
  は: "ha", ひ: "hi", ふ: "fu", へ: "he", ほ: "ho",
  ま: "ma", み: "mi", む: "mu", め: "me", も: "mo",
  や: "ya", ゆ: "yu", よ: "yo",
  ら: "ra", り: "ri", る: "ru", れ: "re", ろ: "ro",
  わ: "wa", ゐ: "i", ゑ: "e", を: "o", ん: "n",
  が: "ga", ぎ: "gi", ぐ: "gu", げ: "ge", ご: "go",
  ざ: "za", じ: "ji", ず: "zu", ぜ: "ze", ぞ: "zo",
  だ: "da", ぢ: "ji", づ: "zu", で: "de", ど: "do",
  ば: "ba", び: "bi", ぶ: "bu", べ: "be", ぼ: "bo",
  ぱ: "pa", ぴ: "pi", ぷ: "pu", ぺ: "pe", ぽ: "po",
  ぁ: "a", ぃ: "i", ぅ: "u", ぇ: "e", ぉ: "o",
};

const SMALL_Y: Record<string, string> = { ゃ: "a", ゅ: "u", ょ: "o" };

export function toHiragana(s: string): string {
  return s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
}

const PARTICLE: Record<string, string> = { は: "wa", へ: "e", を: "o" };
const TOPIC_COMPOUNDS = ["には", "では", "とは", "からは", "までは", "へは", "のは", "とこは"];

/**
 * Romanise a spaced kana sentence ("ちきゅう は まるい です。" → "Chikyuu wa marui desu.").
 * Words must be separated by spaces so particles can be recognised.
 */
export function kanaSentenceToRomaji(sentence: string): string {
  const words = sentence
    .replace(/\*\*/g, "")
    .replace(/[、，]/g, " , ")
    .replace(/[。．]/g, " . ")
    .replace(/[？]/g, " ? ")
    .replace(/[！]/g, " ! ")
    .replace(/[「『]/g, ' "')
    .replace(/[」』]/g, '" ')
    .split(/[\s　]+/)
    .filter(Boolean)
    .map((w) => {
      if (/^[,.?!"]+$/.test(w)) return w;
      if (PARTICLE[w]) return PARTICLE[w];
      const compound = TOPIC_COMPOUNDS.find((c) => w === c || (w.endsWith(c) && c.length > 2));
      if (compound && w.endsWith("は")) return kanaToRomaji(w.slice(0, -1)) + "wa";
      return kanaToRomaji(w);
    });
  const text = words.join(" ").replace(/ ([,.?!])/g, "$1").replace(/\s+/g, " ").trim();
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function kanaToRomaji(input: string): string {
  const s = toHiragana(input);
  let out = "";
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const next = s[i + 1];
    if (c === "っ") {
      const r = next ? kanaToRomaji(next) : "";
      out += r.startsWith("ch") ? "t" : (r[0] ?? "");
      continue;
    }
    if (c === "ー") {
      out += out.slice(-1);
      continue;
    }
    if (next && SMALL_Y[next]) {
      const r = BASE[c] ?? c;
      // き+ゃ → kya, し+ゃ → sha, ち+ゃ → cha, じ+ゃ → ja
      const stem = r === "shi" || r === "chi" || r === "ji" ? r.slice(0, -1) : r.slice(0, -1) + "y";
      out += stem + SMALL_Y[next];
      i++;
      continue;
    }
    out += BASE[c] ?? c;
  }
  return out;
}
