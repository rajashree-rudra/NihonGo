"use client";

import { createMemoryStore, createPersistentStore } from "./store";
import { queueLearned } from "./tracking";

export const soundStore = createPersistentStore("nihongo:sound", true);
export const strictStore = createPersistentStore("nihongo:strict", true);
export const practiceGuideStore = createPersistentStore("nihongo:guide:practice", true);
export const testGuideStore = createPersistentStore("nihongo:guide:test", false);

/** Vocabulary & grammar: whether example sentences start expanded. */
export const examplesOpenStore = createPersistentStore("nihongo:examples-open", false);
/** Vocabulary & grammar: show romaji under Japanese text. */
export const romajiStore = createPersistentStore("nihongo:show-romaji", true);
/** Example sentences: colour the words by kind and list each word with its meaning (see WordByWord.tsx). */
export const wordByWordStore = createPersistentStore("nihongo:word-list", true);

/** Kanji list: show the meaning and readings next to each kanji (hide them to self-test). */
export const kanjiInfoStore = createPersistentStore("nihongo:kanji-info", true);

/**
 * What the learner has learned, per set: characters written correctly and vocabulary answered correctly
 * in a quiz, at least once. New items are also sent to the account (admin panel progress).
 */
export const progressStore = createPersistentStore<Record<string, string[]>>("nihongo:progress", {});

export function markLearned(setId: string, item: string) {
  // Always sent: this device's list may be another account's (a shared computer).
  queueLearned(setId, item);
  if (!progressStore.get()[setId]?.includes(item)) progressStore.set((p) => ({ ...p, [setId]: [...(p[setId] ?? []), item] }));
}
/** Practice examples: show the Japanese (hide it to translate from the English). */
export const practiceJapaneseStore = createPersistentStore("nihongo:practice-japanese", true);
/**
 * Kanji practice: clear the pad by itself after each finished character, ready to write it again.
 * Always starts off (not remembered between visits).
 */
export const autoClearStore = createMemoryStore(false);
/** Voice for all pre-generated audio, everywhere in the app. */
export type Voice = "female" | "male";
export const voiceStore = createPersistentStore<Voice>("nihongo:voice", "female");
/** Colour theme: light (normal) by default; dark only when the reader switches it on. */
export type Theme = "light" | "dark";
export const themeStore = createPersistentStore<Theme>("nihongo:theme", "light");

/** Starred kanji, as "<set id>:<kanji>" (e.g. "n2-kanji:乱"); the list can show only these. */
export const starStore = createPersistentStore<string[]>("nihongo:stars", []);

/** The memory trick at the top of practice: open until the learner closes it, then stays closed. */
export const memoryTrickStore = createPersistentStore("nihongo:memory-trick-open", true);
