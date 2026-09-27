// N2 kanji book: 445 kanji in 110 groups ordered by visual similarity. Kanji from N5–N3 are
// included where they are easily confused with an N2 kanji. Examples and vocabulary are the
// book's; meanings and readings added for the chart and practice pages.
import { defineKanjiBook } from "../../builders.ts";
import { GROUPS as P1 } from "./part-1.ts";
import { GROUPS as P2 } from "./part-2.ts";
import { GROUPS as P3 } from "./part-3.ts";
import { GROUPS as P4 } from "./part-4.ts";

export const N2_KANJI = defineKanjiBook("n2-kanji", [...P1, ...P2, ...P3, ...P4]);
