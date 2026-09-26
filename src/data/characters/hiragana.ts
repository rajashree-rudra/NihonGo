import { defineKanaSet } from "../builders.ts";
import { KANA_TABLES } from "./kana-table.ts";

export const HIRAGANA = defineKanaSet("hiragana", KANA_TABLES);
