import type { KanjiMemory } from "../types.ts";
import type { MemoryEntry } from "./define.ts";
import { MEMORY as N5 } from "./n5.ts";
import { MEMORY as N4 } from "./n4.ts";
import { MEMORY as N2A } from "./n2-part-1.ts";
import { MEMORY as N2B } from "./n2-part-2.ts";
import { MEMORY as N2C } from "./n2-part-3.ts";
import { MEMORY as N2D } from "./n2-part-4.ts";

const firstBold = (s: string) => s.match(/\*\*(.+?)\*\*/)?.[1];
const unbold = (s: string) => s.replace(/\*\*/g, "");

const toMemory = ({ story, comic }: MemoryEntry): KanjiMemory => ({
  story: story || undefined,
  comic: comic.map(([scene, ja, kana, en]) => ({
    scene,
    ja: unbold(ja),
    kana: unbold(kana),
    en,
    hl: firstBold(ja),
    hlKana: firstBold(kana),
  })),
});

/** Story and cartoon for each kanji, by kanji. */
export const KANJI_MEMORY: Record<string, KanjiMemory> = Object.fromEntries(
  [...N5, ...N4, ...N2A, ...N2B, ...N2C, ...N2D].map((e) => [e.char, toMemory(e)]),
);
