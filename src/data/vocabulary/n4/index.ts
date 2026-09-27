// JLPT N4 vocabulary: word list from elzup/jlpt-word-list (MIT); meanings, categories and example sentences written for NihonGo.
import { defineVocabSet } from "../../builders.ts";
import { WORDS as P1 } from "./part-1.ts";
import { WORDS as P2 } from "./part-2.ts";
import { WORDS as P3 } from "./part-3.ts";
import { WORDS as P4 } from "./part-4.ts";
import { WORDS as P5 } from "./part-5.ts";
import { WORDS as P6 } from "./part-6.ts";

export const N4_VOCAB = defineVocabSet("n4-vocab", [P1, P2, P3, P4, P5, P6]);
