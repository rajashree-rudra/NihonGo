import { defineKanaSet, type KanaTable } from "../builders.ts";
import { KANA_TABLES } from "./kana-table.ts";

/** Hiragana → katakana is a fixed +0x60 code point offset for every hiragana character in the table. */
const toKatakana = (s: string) =>
  [...s].map((c) => (c >= "ぁ" && c <= "ゖ" ? String.fromCodePoint(c.codePointAt(0)! + 0x60) : c)).join("");

/** Katakana only: sounds Japanese doesn't have, used to write borrowed words (ファイル, パーティー). */
const EXTENDED: KanaTable = {
  id: "extended",
  title: "Extended sounds",
  tab: "Extended",
  subtitle: "外来音 · 19 characters",
  rows: [
    [["ファ", "fa"], ["フィ", "fi"], null, ["フェ", "fe"], ["フォ", "fo"]],
    [null, ["ウィ", "wi"], null, ["ウェ", "we"], ["ウォ", "wo"]],
    [null, ["ティ", "ti"], ["トゥ", "tu"], ["チェ", "che"], null],
    [null, ["ディ", "di"], ["デュ", "dyu"], ["ジェ", "je"], null],
    [null, null, null, ["シェ", "she"], null],
    [["ヴァ", "va"], ["ヴィ", "vi"], ["ヴ", "vu"], ["ヴェ", "ve"], ["ヴォ", "vo"]],
  ],
};

export const KATAKANA = defineKanaSet("katakana", [...KANA_TABLES, EXTENDED], {
  mapChar: toKatakana,
  descriptions: {
    basic:
      "Katakana has the same 46 sounds as hiragana, written in sharper, straighter shapes — ア is “a” just like あ. It's used for words borrowed from other languages (コーヒー kōhī = coffee), foreign names and emphasis. The chart is in the same order as hiragana: ア イ ウ エ オ, then カ キ ク ケ コ …",
    dakuten:
      "Works exactly like in hiragana: two small marks ゛ (dakuten) make the sound voiced — カ ka → ガ ga, サ sa → ザ za, タ ta → ダ da, ハ ha → バ ba. A small circle ゜ (handakuten) on the ハ row makes a p sound: ハ ha → パ pa. You'll see these in words like バス basu (bus).",
    yoon:
      "A character ending in an “i” sound (キ ki, シ shi, チ chi …) followed by a small ャ, ュ or ョ becomes one quick syllable: キ ki + ャ ya → キャ kya. Write the small character about half size, in the lower right. Common in loanwords like シャツ shatsu (shirt) and ジュース jūsu (juice).",
    extended:
      "Sounds that only appear in borrowed words. A character followed by a small ァ ィ ゥ ェ ォ makes one new syllable: フ fu + ァ → ファ fa (ファイル fairu, file), テ te + ィ → ティ ti (パーティー pātī, party), シ shi + ェ → シェ she (シェフ shefu, chef). ヴ (ウ with ゛) writes a “v” sound, though most people say it like “b”.",
  },
});
