// What signed-out visitors get before registering: the whole page as members see it — every section, group,
// category and count — but only the first few items can be read, practised or tested. The rest is shown locked.
// Preview pages are built from these sets, in which a locked item keeps only its character (no meaning, readings,
// examples or memory tricks), so the locked content isn't in their HTML.
//   kana chart, kanji book, and their practice and test: the first PREVIEW_GROUPS rows / groups are open
//   word and grammar lists: the first few items of the first few categories are open
import type { CharItem, CharSet, GrammarSet, VocabSet } from "./types.ts";

/** Open kana chart rows or kanji groups, in the list and in practice/test. */
export const PREVIEW_GROUPS = 2;
/** Word and grammar lists: this many items open in each of the first `groups` categories. */
export const PREVIEW_LISTS = { vocabulary: { groups: 3, items: 5 }, grammar: { groups: 3, items: 5 } } as const;

export interface CharPreview {
  /** The full set's structure; locked items have only their character. */
  set: CharSet;
  /** Characters that can be read, practised and tested. */
  open: string[];
}

export function previewCharSet(set: CharSet): CharPreview {
  const first = set.sections[0];
  const openItems = set.details
    ? set.sections.slice(0, PREVIEW_GROUPS).flatMap((s) => s.items) // kanji book: its first groups
    : first.rows
      ? first.rows.slice(0, PREVIEW_GROUPS).flat().filter((c): c is CharItem => c !== null) // kana: first chart rows
      : first.items.slice(0, PREVIEW_GROUPS * 5);
  const open = new Set(openItems.map((i) => i.char));
  const lock = (i: CharItem): CharItem => (open.has(i.char) ? i : { char: i.char, romaji: "", level: i.level });
  const sections = set.sections.map((s) => ({ ...s, items: s.items.map(lock), rows: s.rows?.map((r) => r.map((c) => c && lock(c))) }));
  const details = set.details && Object.fromEntries(Object.entries(set.details).filter(([char]) => open.has(char)));
  return { set: { ...set, sections, items: set.items.map(lock), details }, open: [...open] };
}

/** Keeps every category, with only the open items. */
function previewList<S extends { items: unknown[] }>(sections: S[], { groups, items }: { groups: number; items: number }): S[] {
  return sections.map((s, i) => ({ ...s, items: i < groups ? s.items.slice(0, items) : [] }));
}

export function previewVocabSet(set: VocabSet): VocabSet {
  const sections = previewList(set.sections, PREVIEW_LISTS.vocabulary);
  return { ...set, sections, items: sections.flatMap((s) => s.items) };
}

export function previewGrammarSet(set: GrammarSet): GrammarSet {
  const sections = previewList(set.sections, PREVIEW_LISTS.grammar);
  return { ...set, sections, items: sections.flatMap((s) => s.items) };
}

/** Real item count of each category, for a preview list (its sections hold only the open items). */
export function sectionTotals(set: VocabSet | GrammarSet): Record<string, number> {
  return Object.fromEntries(set.sections.map((s) => [s.id, s.items.length]));
}

/** "… free to …" wording for a preview's Register boxes. */
export function previewText(set: CharSet | VocabSet | GrammarSet, kind: "kana" | "kanji" | "vocabulary" | "grammar") {
  const n = set.items.length;
  switch (kind) {
    case "kana":
      return { all: `all ${n} characters`, shown: `the first ${PREVIEW_GROUPS} rows` };
    case "kanji":
      return { all: `all ${n} kanji in ${set.sections.length} groups`, shown: `the first ${PREVIEW_GROUPS} groups` };
    case "vocabulary":
      return { all: `all ${n} words in ${set.sections.length} categories`, shown: `a few words from the first ${PREVIEW_LISTS.vocabulary.groups} categories` };
    case "grammar":
      return { all: `all ${n} grammar points in ${set.sections.length} categories`, shown: `a few points from the first ${PREVIEW_LISTS.grammar.groups} categories` };
  }
}
