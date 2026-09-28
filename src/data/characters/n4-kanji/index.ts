// N4 kanji book: the JLPT N4 kanji in small themed groups (people, time, study, travel…),
// every reading with an example sentence, plus extra vocabulary.
import { defineKanjiBook } from "../../builders.ts";
import { GROUPS as P1 } from "./part-1.ts";
import { GROUPS as P2 } from "./part-2.ts";

export const N4_KANJI = defineKanjiBook("n4-kanji", [...P1, ...P2]);
