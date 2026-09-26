import { defineKanaSet } from "../builders.ts";
import { KANA_TABLES } from "./kana-table.ts";

/** Hiragana → katakana is a fixed +0x60 code point offset for every character in the table. */
const toKatakana = (s: string) => [...s].map((c) => String.fromCodePoint(c.codePointAt(0)! + 0x60)).join("");

export const KATAKANA = defineKanaSet("katakana", KANA_TABLES, toKatakana);
