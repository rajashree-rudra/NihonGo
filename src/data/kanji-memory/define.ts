// Memory help for kanji, shared by every book a kanji appears in (keyed by the kanji).

/**
 * [emoji scene, very short Japanese sentence with the word in **…**, the same sentence as spaced kana
 * with the same **…**, English]
 */
export type ComicTuple = readonly [scene: string, ja: string, kana: string, en: string];

export interface MemoryEntry {
  char: string;
  story: string;
  comic: readonly ComicTuple[];
}

/**
 * km(kanji, story, [panel, panel])
 * - story: one or two easy English sentences built from the kanji's parts, each part named with its
 *   character in brackets, ending on the meaning: "When the sun (日) and the moon (月) shine together,
 *   it's very bright (明るい)." Use "" when there is no easy way to remember it.
 * - comic: two panels; the first uses a word with this kanji, the second may use it again or its
 *   partner/opposite (浅い → 深い).
 */
export function km(char: string, story: string, comic: readonly ComicTuple[]): MemoryEntry {
  return { char, story, comic };
}
