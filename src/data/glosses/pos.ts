// The kind of each glossed word (noun, verb, adjective…), for the colours of the word-by-word list.
// Worked out, in this order, from:
//   1. the gloss file: "word=gloss/v" (or "=+gloss", a word spelled like a particle: は=+tooth → noun)
//   2. POS_FIXES below: words the rules get wrong
//   3. particles, and grammar words (です, でしょう, words glossed with their job: "(polite)")
//   4. the N5/N4 vocabulary lists (their part of speech) and the kanji books' words ("to …" = verb)
//   5. every conjugated form of those verbs and adjectives (食べませんでした, 高くなかった, しずかな)
//   6. endings (…ます, …します, …くない) — and otherwise a noun.
import type { CharSet, PartOfSpeech, VocabSet, Word, WordKind } from "../types.ts";
import { PUNCTUATION } from "./words.ts";

/** Words whose kind the rules get wrong (checked with: npm run data:glosses -- --kinds). */
const POS_FIXES: Record<string, WordKind> = {
  // Words that point at or describe a noun: この本, どんな人.
  この: "a", その: "a", あの: "a", どの: "a", こんな: "a", そんな: "a", あんな: "a", どんな: "a", いろいろな: "a", 大きな: "a", 小さな: "a",
  // Question words that ask "how / why".
  どう: "d", どうして: "d", なぜ: "d", どうやって: "d", いかが: "d",
  ください: "v", 下さい: "v", お入りください: "v", お待ちください: "v", お読み: "v",
  かぞえて: "v", にあう: "v", まちがっている: "v", よると: "v", わからなかったら: "v", 割って: "v", 勉強し続けたい: "v",
  // Adverbs.
  あとで: "d", 後で: "d", いっしょに: "d", 一緒に: "d", こんなに: "d", ずっと: "d", ほんとうに: "d", もういちど: "d", もう一度: "d",
  もう一ど: "d", もう少し: "d", ゆっくり: "d", 一度も: "d", 久しぶりに: "d", 先に: "d", 少々: "d", 何度も: "d",
  // Set phrases and words that link sentences.
  そして: "e", じゃあ: "e", ただいま: "e", お先に: "e", はじめまして: "e", どういたしまして: "e", ありがとうございます: "e",
  おはようございます: "e", おねがいします: "e", いただきます: "e", すみません: "e",
  どういう: "a", 書きやすい: "a", 食べにくい: "a", 読みにくい: "a", わかりやすい: "a",
  どうか: "c",
  ふえ: "n", はり: "n", 始まり: "n", 買いもの: "n", 食べもの: "n", キロ: "n",
  // Verbs the conjugation lists miss (honorific お…になる / ご覧になる, and verbs not in the word lists).
  おいで: "v", ご覧: "v", お帰り: "v", 映っている: "v", 炊く: "v", 転んで: "v", 重ねて: "v", 閉じて: "v", 問い合わせて: "v",
  守って: "v", 当たった: "v", プレゼントしたい: "v",
  // Adjectives and their forms.
  楽: "a", 温かい: "a", 無い: "a", 無事: "a", 苦手: "a", 親しい: "a", 詳しい: "a", 貴重な: "a", 重要: "a", おもな: "a", 主な: "a",
  すてきな: "a", はげしい: "a", 不思議: "a",
  // More adverbs.
  最後に: "d", 無事に: "d", すぐ: "d", ひさしぶりに: "d", やっぱり: "d", 代わりに: "d", 仲良く: "d", 同時に: "d", 必死に: "d",
  少しずつ: "d",
  ありがとう: "e", 万歳: "e",
  おきに: "c", どおりに: "c",
  // Words whose kind depends on the meaning: "word=gloss" (gloss as in the file, with "_").
  "そう=so": "d", "でも=but": "e", "では=well_then": "e", "じゃ=well_then": "e", "十分=ten_minutes": "n", "くらい=dark": "a",
};

/** Particles. */
const PARTICLES = new Set([
  "は", "が", "を", "に", "で", "へ", "と", "も", "の", "か", "ね", "よ", "や", "から", "まで", "より", "だけ", "しか", "など",
  "には", "では", "とは", "にも", "でも", "とも", "へも", "からも", "までに", "ので", "のに", "けど", "けれど", "けれども", "し",
  "って", "な", "わ", "かな", "かしら", "ばかり", "くらい", "ぐらい", "ほど", "ずつ", "ごろ", "とか", "なら",
]);

/** Grammar words: the polite "is", endings that add a shade of meaning. */
const GRAMMAR = new Set([
  "です", "でした", "だ", "だった", "でしょう", "だろう", "じゃありません", "ではありません", "じゃありませんでした",
  "ではありませんでした", "じゃない", "ではない", "じゃなかった", "ではなかった", "ございます", "でございます",
  "んです", "んだ", "んじゃない", "かもしれません", "かもしれない", "らしい", "そう", "よう", "ように", "ような",
  "みたい", "みたいな", "みたいだ", "はず", "つもり", "ため", "ために",
]);

const KIND_OF: Record<PartOfSpeech, WordKind> = {
  noun: "n", pronoun: "n", counter: "n", number: "n", prefix: "n", suffix: "n", "suru-verb": "n",
  "verb-u": "v", "verb-ru": "v", "verb-irr": "v",
  "i-adj": "a", "na-adj": "a",
  adverb: "d",
  conjunction: "e", expression: "e", interjection: "e",
  particle: "p",
};

const toHira = (s: string) => s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));

// ---------- Conjugation ----------

const GODAN: Record<string, { a: string; i: string; e: string; o: string; te: string; ta: string }> = {
  う: { a: "わ", i: "い", e: "え", o: "お", te: "って", ta: "った" },
  く: { a: "か", i: "き", e: "け", o: "こ", te: "いて", ta: "いた" },
  ぐ: { a: "が", i: "ぎ", e: "げ", o: "ご", te: "いで", ta: "いだ" },
  す: { a: "さ", i: "し", e: "せ", o: "そ", te: "して", ta: "した" },
  つ: { a: "た", i: "ち", e: "て", o: "と", te: "って", ta: "った" },
  ぬ: { a: "な", i: "に", e: "ね", o: "の", te: "んで", ta: "んだ" },
  ぶ: { a: "ば", i: "び", e: "べ", o: "ぼ", te: "んで", ta: "んだ" },
  む: { a: "ま", i: "み", e: "め", o: "も", te: "んで", ta: "んだ" },
  る: { a: "ら", i: "り", e: "れ", o: "ろ", te: "って", ta: "った" },
};

/** Endings after the ます-stem (食べ / 飲み). */
const AFTER_STEM = [
  "", "ます", "ました", "ません", "ませんでした", "ましょう", "ませんか", "ましょうか", "たい", "たく", "たくない", "たかった",
  "たくなかった", "たがる", "たがります", "たがっています", "たがって", "ながら", "すぎ", "すぎる", "すぎます", "すぎました", "すぎて",
  "なさい", "そう",
];
/** Endings after the て-form (て/で is part of it). */
const AFTER_TE = [
  "", "いる", "います", "いました", "いません", "いない", "いた", "いて", "いなかった", "いれば", "おく", "おきます", "おいて",
  "しまう", "しまいます", "しまいました", "しまった", "みる", "みます", "みました", "みたい", "みて", "も", "は", "から",
  "ください", "くれる", "くれます", "くれました", "あげる", "あげます", "あげました", "もらう", "もらいます", "もらいました",
  "いく", "いきます", "くる", "きます", "きました", "ある", "あります",
];
/** Endings after the ない-stem (食べ / 飲ま). */
const AFTER_NAI = ["ない", "なかった", "なくて", "なければ", "なくても", "なきゃ", "なくちゃ", "ないで", "なくては", "ないでください"];

/** Every form of an ichidan verb stem (食べ), and of verbs derived from it. */
function ichidan(stem: string, out: Set<string>, derived = true) {
  for (const e of AFTER_STEM) out.add(stem + e);
  for (const e of AFTER_TE) out.add(stem + "て" + e);
  for (const e of ["た", "たら", "たり", "たら", "ても"]) out.add(stem + e);
  for (const e of AFTER_NAI) out.add(stem + e);
  for (const e of ["る", "るな", "れば", "よう", "ろ", "ようと"]) out.add(stem + e);
  if (derived) for (const d of ["られ", "れ", "させ", "させられ"]) ichidan(stem + d, out, false);
}

/** Every form of a godan verb (飲む), and of verbs derived from it. */
function godan(word: string, out: Set<string>, iku = false) {
  const last = word.slice(-1);
  const row = GODAN[last];
  if (!row) return;
  const s = word.slice(0, -1);
  const te = iku ? s + "って" : s + row.te;
  const ta = iku ? s + "った" : s + row.ta;
  for (const e of AFTER_STEM) out.add(s + row.i + e);
  for (const e of AFTER_TE) out.add(te + e);
  out.add(te.replace(/て$/, "ても").replace(/で$/, "でも"));
  for (const e of ["", "ら", "り"]) out.add(ta + e);
  for (const e of AFTER_NAI) out.add(s + row.a + e);
  for (const e of ["", "な", "ば"]) out.add(word + e);
  out.add(s + row.e);
  out.add(s + row.e + "ば");
  out.add(s + row.o + "う");
  out.add(s + row.o + "うと");
  for (const d of [row.e, row.a + "れ", row.a + "せ", row.a + "され", row.a + "せられ"]) ichidan(s + d, out, false);
}

function suru(prefix: string, out: Set<string>) {
  for (const e of AFTER_STEM) out.add(prefix + "し" + e);
  for (const e of AFTER_TE) out.add(prefix + "して" + e);
  for (const e of ["した", "したら", "したり", "しても"]) out.add(prefix + e);
  for (const e of AFTER_NAI) out.add(prefix + "し" + e);
  for (const e of ["する", "するな", "すれば", "しよう", "しろ", "しようと"]) out.add(prefix + e);
  for (const d of ["でき", "され", "させ", "させられ"]) ichidan(prefix + d, out, false);
}

function kuru(k: string, ki: string, ko: string, out: Set<string>) {
  for (const e of AFTER_STEM) out.add(ki + e);
  for (const e of AFTER_TE) out.add(ki + "て" + e);
  for (const e of ["た", "たら", "たり", "ても"]) out.add(ki + e);
  for (const e of AFTER_NAI) out.add(ko + e);
  for (const e of ["る", "るな", "れば"]) out.add(k + e);
  for (const e of ["よう", "い"]) out.add(ko + e);
  for (const d of ["られ", "させ"]) ichidan(ko + d, out, false);
}

/** Every form of an い-adjective (高い) and a な-adjective (しずか). */
function iAdjective(word: string, out: Set<string>) {
  const s = word.slice(0, -1);
  for (const e of ["い", "く", "くて", "くない", "くなかった", "かった", "ければ", "くても", "そう", "そうな", "さ", "すぎ", "すぎる", "すぎて", "すぎます", "すぎました", "くなる", "くなって", "くなりました"])
    out.add(s + e);
  if (word === "いい") iAdjective("よい", out);
}
function naAdjective(word: string, out: Set<string>) {
  for (const e of ["", "な", "に", "で", "だ", "じゃ", "じゃない", "じゃありません", "そう", "そうな"]) out.add(word + e);
}

// ---------- The word lists ----------

export interface Kinds {
  lexicon: Map<string, WordKind>;
  verbs: Set<string>;
  adjectives: Set<string>;
  verbStems: string[];
}

/** Kinds of the words in the vocabulary lists and kanji books, and every form of their verbs and adjectives. */
export function buildKinds(vocab: VocabSet[], books: CharSet[]): Kinds {
  const lexicon = new Map<string, WordKind>();
  const verbs = new Set<string>();
  const adjectives = new Set<string>();
  const verbStems = new Set<string>();
  const put = (key: string, kind: WordKind) => key && !lexicon.has(key) && lexicon.set(key, kind);

  const addVerb = (word: string, ichidanToo: boolean, godanToo: boolean) => {
    if (word === "する" || word.endsWith("する")) return suru(word.slice(0, -2), verbs);
    if (word === "来る") return kuru("来", "来", "来", verbs);
    if (word === "くる") return kuru("く", "き", "こ", verbs);
    const iku = word === "行く" || word === "いく";
    if (godanToo) godan(word, verbs, iku);
    if (ichidanToo && word.endsWith("る")) ichidan(word.slice(0, -1), verbs);
    // A stem with kanji (飲, 食べ, 起き) starts every form of the verb.
    const stem = word.slice(0, -1);
    if (/[一-鿿]/.test(stem)) verbStems.add(stem);
  };

  for (const set of vocab)
    for (const w of set.items) {
      const kind = KIND_OF[w.pos];
      const spellings = [...new Set([w.word.replace(/[～〜]/g, ""), w.reading.replace(/[～〜]/g, "")])];
      for (const s of spellings) put(s, kind);
      for (const s of spellings) {
        if (w.pos === "verb-ru") addVerb(s, true, false);
        else if (w.pos === "verb-u") addVerb(s, false, true);
        else if (w.pos === "verb-irr") addVerb(s, false, false);
        else if (w.pos === "suru-verb") suru(s, verbs);
        else if (w.pos === "i-adj") iAdjective(s, adjectives);
        else if (w.pos === "na-adj") naAdjective(s, adjectives);
      }
    }
  // The kanji books' words: "to …" is a verb (る-verbs could be either kind: make both), the rest nouns.
  for (const book of books)
    for (const d of Object.values(book.details ?? {}))
      for (const v of d.vocab) {
        const spellings = [v.word, v.reading.split("・")[0].replace(/\s+/g, "")];
        const verb = /^to /.test(v.meaning) && /[うくぐすつぬぶむる]$/.test(v.word);
        for (const s of spellings) {
          if (verb) {
            put(s, "v");
            addVerb(s, true, true);
          } else if (/^[一-鿿]+$/.test(v.word)) put(s, "n");
        }
      }
  return { lexicon, verbs, adjectives, verbStems: [...verbStems].sort((a, b) => b.length - a.length) };
}

/** How a word's kind was decided: "guess" is the fall-back (a noun), to look over. */
export type KindSource = "given" | "fix" | "particle" | "grammar" | "list" | "form" | "ending" | "guess";

const MASU = /(ます|ました|ません|ませんでした|ましょう|ませんか|ましょうか)$/;
const SURU = /.(する|します|しました|しません|しませんでした|しましょう|して|した|しない|しなかった|しよう|しなさい|しなければ|しなくても|しないで|すれば|したら|したり|しても|しています|していました|していません|している|していない|しておきます|してしまいました|してください|しすぎ|させ.*|され.*|できる|できます|できません|できない)$/;

/** The kind of a word, and how it was decided. */
export function kindOf(word: Word, given: WordKind | undefined, kinds: Kinds): [WordKind, KindSource] | undefined {
  const [surface, gloss = ""] = word;
  if (PUNCTUATION.test(surface)) return undefined;
  if (given) return [given, "given"];
  const fixed = POS_FIXES[`${surface}=${gloss.replace(/ /g, "_")}`] ?? POS_FIXES[surface];
  if (fixed) return [fixed, "fix"];
  if (PARTICLES.has(surface) && !/^\((polite|is|explaining)\)$/.test(gloss)) return ["p", "particle"];
  if (GRAMMAR.has(surface) || /^\(.*\)$/.test(gloss)) return ["c", "grammar"];
  // Katakana words are loanwords and names: never a verb form spelled in hiragana (キロ isn't きろ).
  const hira = /^[ァ-ヺー]+$/.test(surface) ? surface : toHira(surface);
  const listed = kinds.lexicon.get(surface) ?? kinds.lexicon.get(hira) ?? kinds.lexicon.get(surface.replace(/^[おご]/, ""));
  if (listed) return [listed, "list"];
  if (/(方|かた)$/.test(surface) && surface.length > 1) return ["n", "ending"]; // 読み方: the way to read
  if (kinds.verbs.has(surface) || kinds.verbs.has(hira)) return ["v", "form"];
  if (kinds.adjectives.has(surface) || kinds.adjectives.has(hira)) return ["a", "form"];
  if (MASU.test(surface) || SURU.test(surface)) return ["v", "ending"];
  if (/(くない|くなかった|くて|[^な]かった|ければ)$/.test(surface)) return ["a", "ending"];
  if (/(ない|なかった|なくて|なければ|なくても|ないで)$/.test(surface) && surface.length > 2) return ["v", "ending"];
  if (/[一-鿿]/.test(surface) && /[ぁ-ゖ]$/.test(surface) && kinds.verbStems.some((s) => surface.startsWith(s) && surface.length > s.length))
    return ["v", "ending"];
  return ["n", "guess"];
}
