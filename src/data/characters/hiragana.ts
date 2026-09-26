import { defineKanaSet } from "../builders.ts";
import { KANA_TABLES } from "./kana-table.ts";

export const HIRAGANA = defineKanaSet("hiragana", KANA_TABLES, {
  descriptions: {
    basic:
      "These are the 46 basic sounds of Japanese. Each character is one syllable: either a vowel (a, i, u, e, o) or a consonant plus a vowel, like か = ka. Read the chart row by row — あ い う え お, then か き く け こ, and so on. Learn these first; everything else builds on them.",
    dakuten:
      "Add two small marks ゛ (called dakuten) to a basic character and its sound becomes softer and “voiced”: か ka → が ga, さ sa → ざ za, た ta → だ da, は ha → ば ba. A small circle ゜ (handakuten) on the は row makes a p sound: は ha → ぱ pa. The shapes are the same — only the mark is new.",
    yoon:
      "A character that ends in an “i” sound (き ki, し shi, ち chi …) followed by a small ゃ, ゅ or ょ merges into one quick syllable: き ki + ゃ ya → きゃ kya. The small character is written about half size, in the lower right. Say it as one sound, not two.",
  },
});
