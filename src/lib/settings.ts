"use client";

import { createPersistentStore } from "./store";

export const soundStore = createPersistentStore("nihongo:sound", true);
export const strictStore = createPersistentStore("nihongo:strict", true);
export const practiceGuideStore = createPersistentStore("nihongo:guide:practice", true);
export const testGuideStore = createPersistentStore("nihongo:guide:test", false);

/** Vocabulary & grammar: whether example sentences start expanded. */
export const examplesOpenStore = createPersistentStore("nihongo:examples-open", false);
/** Vocabulary & grammar: show romaji under Japanese text. */
export const romajiStore = createPersistentStore("nihongo:show-romaji", true);

/** Kanji list: show the meaning and readings next to each kanji (hide them to self-test). */
export const kanjiInfoStore = createPersistentStore("nihongo:kanji-info", true);

/** Characters the learner has written correctly at least once, per char set. */
export const progressStore = createPersistentStore<Record<string, string[]>>("nihongo:progress", {});

export function markLearned(setId: string, char: string) {
  progressStore.set((p) => {
    const list = p[setId] ?? [];
    return list.includes(char) ? p : { ...p, [setId]: [...list, char] };
  });
}
/** Practice examples: show the Japanese (hide it to translate from the English). */
export const practiceJapaneseStore = createPersistentStore("nihongo:practice-japanese", true);
/** Kanji practice: clear the pad by itself after each finished character, ready to write it again. */
export const autoClearStore = createPersistentStore("nihongo:auto-clear", false);
