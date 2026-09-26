// Helpers that turn compact character tables into CharSets. New levels reuse these —
// a new kanji file is just `defineKanjiSet("n4-kanji", [...groups])`.
import type { CharItem, CharSet, ChartRow, ChartSection } from "./types.ts";
import { kanaToRomaji } from "./romaji.ts";

// ---------- Kana ----------

/** [kana, romaji] or null for an empty chart cell. */
export type KanaCell = readonly [string, string] | null;

export interface KanaTable {
  id: string;
  title: string;
  /** Short tab label; defaults to title. */
  tab?: string;
  subtitle: string;
  rows: KanaCell[][];
}

export function defineKanaSet(
  id: string,
  tables: KanaTable[],
  mapChar: (c: string) => string = (c) => c,
): CharSet {
  const sections: ChartSection[] = tables.map((t) => {
    const items: CharItem[] = [];
    const rows: ChartRow[] = t.rows.map((row) =>
      row.map((cell) => {
        if (!cell) return null;
        const item: CharItem = { char: mapChar(cell[0]), romaji: cell[1] };
        items.push(item);
        return item;
      }),
    );
    return { id: t.id, title: t.title, tab: t.tab ?? t.title, subtitle: t.subtitle, rows, items };
  });
  return { id, kind: "kana", sections, items: sections.flatMap((s) => s.items) };
}

// ---------- Kanji ----------

/** [kanji, meaning, on'yomi (space separated), kun'yomi (space separated, "." before okurigana)] */
export type KanjiRow = readonly [char: string, meaning: string, on: string, kun: string];

export interface KanjiGroup {
  id: string;
  title: string;
  /** Short tab label; defaults to title. */
  tab?: string;
  subtitle: string;
  rows: KanjiRow[];
}

const splitReadings = (s: string) => (s ? s.split(" ") : []);

export function defineKanjiSet(id: string, groups: KanjiGroup[]): CharSet {
  const sections: ChartSection[] = groups.map((g) => ({
    id: g.id,
    title: g.title,
    tab: g.tab ?? g.title,
    subtitle: g.subtitle,
    items: g.rows.map(([char, meaning, on, kun]) => {
      const onList = splitReadings(on);
      const kunList = splitReadings(kun);
      const primary = kunList[0] ?? onList[0] ?? "";
      return {
        char,
        meaning,
        on: onList,
        kun: kunList,
        romaji: kanaToRomaji(primary.replace(".", "")),
      };
    }),
  }));
  return { id, kind: "kanji", sections, items: sections.flatMap((s) => s.items) };
}

/** "た.べる" → "た(べる)" for display. */
export function formatKun(kun: string): string {
  const [stem, okurigana] = kun.split(".");
  return okurigana ? `${stem}(${okurigana})` : stem;
}
