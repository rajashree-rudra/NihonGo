"use client";

import { createPersistentStore } from "./store";

// ---------- Highlighter marks ----------
// Readers can mark any part of a "markable" line (example sentences, readings, translations)
// in one of a few colours. Marks are stored per line as character offsets into its text and
// painted with the CSS Custom Highlight API, so they never touch React's DOM.

export const MARK_COLORS = [
  { id: "yellow", label: "Yellow", swatch: "#f7d14a", paint: "rgb(247 209 74 / 0.5)" },
  { id: "green", label: "Green", swatch: "#7cc98f", paint: "rgb(124 201 143 / 0.45)" },
  { id: "blue", label: "Blue", swatch: "#7fb0ea", paint: "rgb(127 176 234 / 0.45)" },
  { id: "pink", label: "Pink", swatch: "#f29bb8", paint: "rgb(242 155 184 / 0.5)" },
  { id: "orange", label: "Orange", swatch: "#f5a45b", paint: "rgb(245 164 91 / 0.5)" },
] as const;

// The ::highlight() rules are added from here rather than globals.css: Next's CSS parser
// doesn't know the pseudo-element yet and warns on every build.
if (typeof document !== "undefined" && !document.getElementById("mark-styles")) {
  const style = document.createElement("style");
  style.id = "mark-styles";
  style.textContent = MARK_COLORS.map((c) => `::highlight(mark-${c.id}) { background-color: ${c.paint}; }`).join(" ");
  document.head.appendChild(style);
}
export type MarkColor = (typeof MARK_COLORS)[number]["id"];

/** [start, end, colour, marked text] — the text lets a mark survive small content edits. */
export type Mark = [start: number, end: number, color: MarkColor, text: string];

export const marksStore = createPersistentStore<Record<string, Mark[]>>("nihongo:marks", {});

export const marksSupported = () => typeof CSS !== "undefined" && "highlights" in CSS && typeof Highlight !== "undefined";

// ---------- Offsets <-> DOM ranges ----------

function textNodes(el: Element) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  return nodes;
}

/** Character offset of (node, offset) within el's text. */
export function offsetIn(el: Element, node: Node, offset: number): number {
  if (node.nodeType !== Node.TEXT_NODE) {
    // An element boundary: count the text of the children before `offset`.
    let n = 0;
    for (let i = 0; i < offset && i < node.childNodes.length; i++) n += node.childNodes[i].textContent?.length ?? 0;
    const before = document.createRange();
    before.setStart(el, 0);
    before.setEnd(node, 0);
    return before.toString().length + n;
  }
  let n = 0;
  for (const t of textNodes(el)) {
    if (t === node) return n + offset;
    n += t.length;
  }
  return n;
}

function rangeFor(el: Element, start: number, end: number): Range | null {
  const range = document.createRange();
  let n = 0;
  let started = false;
  for (const t of textNodes(el)) {
    const next = n + t.length;
    if (!started && start < next) {
      range.setStart(t, start - n);
      started = true;
    }
    if (started && end <= next) {
      range.setEnd(t, end - n);
      return range;
    }
    n = next;
  }
  return null;
}

/** Where a stored mark sits now: its offsets if the text still matches, else the nearest copy of its text. */
function locate(text: string, [start, end, , marked]: Mark): [number, number] | null {
  if (text.slice(start, end) === marked) return [start, end];
  let best = -1;
  for (let i = text.indexOf(marked); i >= 0; i = text.indexOf(marked, i + 1)) if (best < 0 || Math.abs(i - start) < Math.abs(best - start)) best = i;
  return best >= 0 ? [best, best + marked.length] : null;
}

// ---------- Registry & painting ----------

const lines = new Map<string, Set<Element>>();
let frame = 0;

export function registerLine(id: string, el: Element) {
  let set = lines.get(id);
  if (!set) lines.set(id, (set = new Set()));
  set.add(el);
  schedulePaint();
  return () => {
    set.delete(el);
    if (!set.size) lines.delete(id);
    schedulePaint();
  };
}

export function schedulePaint() {
  if (typeof window === "undefined" || !marksSupported() || frame) return;
  frame = requestAnimationFrame(() => {
    frame = 0;
    paint();
  });
}

function paint() {
  const all = marksStore.get();
  const byColor = new Map<MarkColor, Range[]>(MARK_COLORS.map((c) => [c.id, []]));
  for (const [id, els] of lines) {
    const marks = all[id];
    if (!marks?.length) continue;
    for (const el of els) {
      const text = el.textContent ?? "";
      for (const m of marks) {
        const at = locate(text, m);
        const r = at && rangeFor(el, at[0], at[1]);
        if (r) byColor.get(m[2])?.push(r);
      }
    }
  }
  for (const [color, ranges] of byColor) CSS.highlights.set(`mark-${color}`, new Highlight(...ranges));
}

if (typeof window !== "undefined") marksStore.subscribe(schedulePaint);

// ---------- Editing ----------

/** Add a mark over [start, end), replacing whatever overlapped it. */
export function addMark(id: string, text: string, start: number, end: number, color: MarkColor) {
  if (end <= start) return;
  const all = { ...marksStore.get() };
  const kept = (all[id] ?? []).filter(([s, e]) => e <= start || s >= end);
  all[id] = [...kept, [start, end, color, text.slice(start, end)] as Mark].sort((a, b) => a[0] - b[0]);
  marksStore.set(all);
}

/** Remove marks overlapping [start, end) (a single point removes the mark under it). */
export function removeMarks(id: string, start: number, end: number) {
  const all = { ...marksStore.get() };
  const point = start === end;
  const kept = (all[id] ?? []).filter(([s, e]) => (point ? !(s <= start && start < e) : e <= start || s >= end));
  if (kept.length) all[id] = kept;
  else delete all[id];
  marksStore.set(all);
}

export function marksAt(id: string, start: number, end: number): Mark[] {
  return (marksStore.get()[id] ?? []).filter(([s, e]) => (start === end ? s <= start && start < e : s < end && e > start));
}
