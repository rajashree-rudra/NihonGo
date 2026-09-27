// JLPT grammar sets. Explanations and example sentences written for NihonGo.
import { defineGrammarSet } from "../builders.ts";
import * as N5 from "./n5.ts";
import * as N4 from "./n4.ts";

export const N5_GRAMMAR = defineGrammarSet("n5-grammar", N5.CATEGORIES, N5.POINTS);
export const N4_GRAMMAR = defineGrammarSet("n4-grammar", N4.CATEGORIES, N4.POINTS);
