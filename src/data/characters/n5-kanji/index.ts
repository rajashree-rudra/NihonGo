// N5 kanji book: the JLPT N5 kanji in small themed groups (numbers, time, nature, people…),
// each with example sentences and extra vocabulary.
import { defineKanjiBook } from "../../builders.ts";
import { GROUPS as P1 } from "./part-1.ts";
import { GROUPS as P2 } from "./part-2.ts";

export const N5_KANJI = defineKanjiBook("n5-kanji", [...P1, ...P2]);
