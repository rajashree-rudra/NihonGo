// Downloads stroke-order paths from KanjiVG (https://kanjivg.tagaini.net, CC BY-SA 3.0)
// for every character set in the level registry → public/strokes/<charSetId>.json
// ({ [char]: string[] of SVG path data in a 109×109 box }).
//
// Multi-character items (きゃ, ジョ …) are composed from their parts: the main kana is
// scaled into the left of the box and the small kana into the lower right.
//
// Run: npm run data:strokes   (re-run after adding characters)
import { mkdir, writeFile } from "node:fs/promises";
import { allCharSets } from "../src/data/levels.ts";

const BASE = "https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/";
const OUT_DIR = new URL("../public/strokes/", import.meta.url);

const cache = new Map();

function fetchStrokes(char) {
  if (!cache.has(char)) cache.set(char, download(char));
  return cache.get(char);
}

async function download(char) {
  const hex = char.codePointAt(0).toString(16).padStart(5, "0");
  const res = await fetch(`${BASE}${hex}.svg`);
  if (!res.ok) throw new Error(`${char} (${hex}): HTTP ${res.status}`);
  const svg = await res.text();
  // Stroke paths carry ids like kvg:03042-s1 — the number is the stroke order.
  const paths = [...svg.matchAll(/<path\b[^>]*\bid="kvg:[0-9a-f]+-s(\d+)"[^>]*>/g)].map((m) => ({
    n: Number(m[1]),
    d: m[0].match(/\bd="([^"]+)"/)[1],
  }));
  if (!paths.length) throw new Error(`${char} (${hex}): no stroke paths found`);
  return paths.sort((a, b) => a.n - b.n).map((p) => p.d);
}

// ---------- Path transform (uniform scale + translate; KanjiVG uses no arcs) ----------

const ARGS = { M: 2, L: 2, T: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, Z: 0 };

function transformPath(d, k, tx, ty) {
  const f = (n) => +n.toFixed(2);
  let out = "";
  for (const [, cmd, body] of d.matchAll(/([MLHVCSQTZmlhvcsqtz])([^MLHVCSQTZmlhvcsqtz]*)/g)) {
    const upper = cmd.toUpperCase();
    const abs = cmd === upper;
    const nums = (body.match(/-?(?:\d+\.?\d*|\.\d+)(?:e-?\d+)?/gi) ?? []).map(Number);
    const mapped = nums.map((n, i) => {
      if (!abs) return f(n * k);
      if (upper === "H") return f(n * k + tx);
      if (upper === "V") return f(n * k + ty);
      return f(n * k + (i % 2 === 0 ? tx : ty));
    });
    if (ARGS[upper] === undefined) throw new Error(`Unsupported path command ${cmd}`);
    out += cmd + mapped.join(",").replace(/,-/g, "-");
  }
  return out;
}

async function strokesFor(item) {
  const parts = [...item];
  if (parts.length === 1) return fetchStrokes(item);
  if (parts.length !== 2) throw new Error(`${item}: only 1–2 character items are supported`);
  const [main, small] = await Promise.all(parts.map(fetchStrokes));
  return [
    ...main.map((d) => transformPath(d, 0.64, 3, 19)),
    ...small.map((d) => transformPath(d, 0.52, 50, 40)),
  ];
}

// ---------- Main ----------

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: limit }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await fn(items[i]);
      }
    }),
  );
  return out;
}

await mkdir(OUT_DIR, { recursive: true });
let failed = 0;

for (const set of allCharSets()) {
  const chars = set.items.map((i) => i.char);
  const dupes = chars.filter((c, i) => chars.indexOf(c) !== i);
  if (dupes.length) throw new Error(`${set.id}: duplicate characters ${dupes.join(" ")}`);

  const strokes = await mapLimit(chars, 8, (c) =>
    strokesFor(c).catch((e) => {
      failed++;
      console.error("✗", e.message);
      return null;
    }),
  );
  const data = Object.fromEntries(chars.map((c, i) => [c, strokes[i]]).filter(([, s]) => s));
  await writeFile(new URL(`${set.id}.json`, OUT_DIR), JSON.stringify(data));
  console.log(`${set.id}: ${Object.keys(data).length}/${chars.length} characters`);
}

if (failed) process.exitCode = 1;
