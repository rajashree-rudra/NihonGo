// Reads each kanji's component structure from KanjiVG (https://kanjivg.tagaini.net, CC BY-SA 3.0)
// → src/data/kanji-parts.json: { [kanji]: [[part, name in hiragana, meaning], …] } — the kanji's
// top-level parts in writing order, e.g. 休 → [["亻","にんべん","person"],["木","き","tree"]].
// Names come from src/data/radicals.ts (by position where it matters, e.g. 木 on the left is
// きへん), else from the part's own entry in the kanji books; unnamed rare parts are left out.
//
// Run: npm run data:parts   (re-run after adding kanji)
import { writeFile } from "node:fs/promises";
import { allCharSets } from "../src/data/levels.ts";
import { PART_NAMES, POSITION_NAMES } from "../src/data/radicals.ts";

const kanjiItems = new Map(allCharSets().filter((s) => s.kind === "kanji").flatMap((s) => s.items.map((k) => [k.char, k])));
const hira = (s) => s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));

/** [name, meaning] for a part at a position, or undefined if it has no common name. */
function nameOf(el, pos) {
  const listed = PART_NAMES[el];
  const item = kanjiItems.get(el);
  const meaning = listed?.[1] ?? item?.meaning?.split(/[,;]/)[0].trim();
  const name = POSITION_NAMES[el]?.[pos] ?? listed?.[0] ?? (item && (item.kun?.[0]?.replace(".", "") || (item.on?.[0] && hira(item.on[0]))));
  return name && meaning ? [name, meaning] : undefined;
}

const BASE = "https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/";
const OUT = new URL("../src/data/kanji-parts.json", import.meta.url);

/** Minimal tree of the SVG's <g> elements (KanjiVG is regular enough for this). */
function parseGroups(svg) {
  const root = { attrs: {}, children: [] };
  const stack = [root];
  for (const m of svg.matchAll(/<g\b([^>]*?)(\/?)>|<\/g>/g)) {
    if (m[0] === "</g>") {
      stack.pop();
      continue;
    }
    const attrs = Object.fromEntries([...m[1].matchAll(/([\w:]+)="([^"]*)"/g)].map((a) => [a[1], a[2]]));
    const node = { attrs, children: [] };
    stack[stack.length - 1].children.push(node);
    if (!m[2]) stack.push(node);
  }
  return root;
}

/**
 * Top-level parts: the kanji group's children that name an element. A child without an element
 * (a positional wrapper) is opened up; a kanji with no parts (e.g. 一) yields none.
 */
function partsOf(kanjiGroup) {
  const out = [];
  const visit = (node, inheritedPos) => {
    for (const child of node.children) {
      const el = child.attrs["kvg:element"];
      const pos = child.attrs["kvg:position"] ?? inheritedPos;
      if (el) out.push(pos ? [el, pos] : [el]);
      else visit(child, pos);
    }
  };
  visit(kanjiGroup);
  return out;
}

async function partsFor(char) {
  const hex = char.codePointAt(0).toString(16).padStart(5, "0");
  const res = await fetch(`${BASE}${hex}.svg`);
  if (!res.ok) throw new Error(`${char}: HTTP ${res.status}`);
  const tree = parseGroups(await res.text());
  const strokes = tree.children.find((g) => g.attrs.id?.startsWith("kvg:StrokePaths"));
  const kanjiGroup = strokes?.children.find((g) => g.attrs["kvg:element"] === char);
  return kanjiGroup ? partsOf(kanjiGroup) : [];
}

const kanji = [...new Set(allCharSets().filter((s) => s.kind === "kanji").flatMap((s) => s.items.map((k) => k.char)))];
const result = {};
let next = 0;
let failed = 0;
await Promise.all(
  Array.from({ length: 8 }, async () => {
    while (next < kanji.length) {
      const char = kanji[next++];
      try {
        const seen = new Set();
        const parts = [];
        for (const [el, pos] of await partsFor(char)) {
          if (seen.has(el)) continue; // split parts (団's 囗 is drawn in two pieces) count once
          seen.add(el);
          const named = nameOf(el, pos);
          if (named) parts.push([el, ...named]);
        }
        // A kanji that is itself one part needs no breakdown.
        if (parts.length > 1 || (parts.length === 1 && seen.size > 1)) result[char] = parts;
      } catch (e) {
        failed++;
        console.error(`✗ ${e.message}`);
      }
    }
  }),
);
const sorted = Object.fromEntries(Object.entries(result).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(OUT, JSON.stringify(sorted, null, 0).replace(/\],"/g, '],\n"') + "\n");
console.log(`${kanji.length} kanji, ${Object.keys(sorted).length} with parts, ${failed} failed.`);
