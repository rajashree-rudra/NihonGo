"use client";

import { createPersistentStore } from "./store";

export const soundStore = createPersistentStore("nihongo:sound", true);
export const strictStore = createPersistentStore("nihongo:strict", true);
export const practiceGuideStore = createPersistentStore("nihongo:guide:practice", true);
export const testGuideStore = createPersistentStore("nihongo:guide:test", false);

/** Characters the learner has written correctly at least once, per char set. */
export const progressStore = createPersistentStore<Record<string, string[]>>("nihongo:progress", {});

export function markLearned(setId: string, char: string) {
  progressStore.set((p) => {
    const list = p[setId] ?? [];
    return list.includes(char) ? p : { ...p, [setId]: [...list, char] };
  });
}
