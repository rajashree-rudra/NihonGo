"use client";

import { useEffect, useRef, useState } from "react";
import { Eraser, Highlighter } from "lucide-react";
import { MARK_COLORS, addMark, marksAt, marksSupported, offsetIn, removeMarks, type MarkColor } from "@/lib/marks";
import { cn } from "@/components/ui/cn";

interface Target {
  id: string;
  el: Element;
  start: number;
  end: number;
  /** Viewport rect to place the toolbar next to. */
  rect: DOMRect;
  /** A tap on an existing mark (nothing selected). */
  onMark: boolean;
}

const lineOf = (n: Node | null) => (n?.nodeType === Node.ELEMENT_NODE ? (n as Element) : n?.parentElement)?.closest("[data-mark]") ?? null;

function caretAt(x: number, y: number): { node: Node; offset: number } | null {
  const d = document as Document & { caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null };
  if (d.caretPositionFromPoint) {
    const p = d.caretPositionFromPoint(x, y);
    return p ? { node: p.offsetNode, offset: p.offset } : null;
  }
  const r = document.caretRangeFromPoint?.(x, y);
  return r ? { node: r.startContainer, offset: r.startOffset } : null;
}

/**
 * Highlighter: select text in any markable line (or tap an existing mark) and a small
 * palette appears to colour it or erase it. Marks are saved on this device.
 */
export function MarkerToolbar() {
  const [target, setTarget] = useState<Target | null>(null);
  const [coarse, setCoarse] = useState(false);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marksSupported()) return;
    setCoarse(window.matchMedia("(pointer: coarse)").matches);

    const fromSelection = (): Target | null => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) return null;
      const range = sel.getRangeAt(0);
      const el = lineOf(range.startContainer);
      if (!el || el !== lineOf(range.endContainer)) return null;
      const a = offsetIn(el, range.startContainer, range.startOffset);
      const b = offsetIn(el, range.endContainer, range.endOffset);
      const text = el.textContent ?? "";
      // Trim spaces so a mark hugs the words.
      let start = Math.min(a, b);
      let end = Math.max(a, b);
      while (start < end && /\s/.test(text[start])) start++;
      while (end > start && /\s/.test(text[end - 1])) end--;
      if (end <= start) return null;
      return { id: el.getAttribute("data-mark")!, el, start, end, rect: range.getBoundingClientRect(), onMark: false };
    };

    let timer = 0;
    const onSelection = () => {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        const t = fromSelection();
        if (t) setTarget(t);
        else setTarget((cur) => (cur && !cur.onMark ? null : cur));
      }, 120);
    };

    // A plain tap/click on a mark offers to recolour or erase it.
    const onClick = (e: MouseEvent) => {
      if (bar.current?.contains(e.target as Node)) return;
      const sel = window.getSelection();
      if (sel && !sel.isCollapsed) return;
      const el = lineOf(e.target as Node);
      const caret = el && caretAt(e.clientX, e.clientY);
      if (!el || !caret || !el.contains(caret.node)) return setTarget(null);
      const id = el.getAttribute("data-mark")!;
      const off = offsetIn(el, caret.node, caret.offset);
      const hit = marksAt(id, off, off)[0];
      if (!hit) return setTarget(null);
      setTarget({ id, el, start: hit[0], end: hit[1], rect: new DOMRect(e.clientX - 1, e.clientY - 10, 2, 20), onMark: true });
    };

    const close = () => setTarget(null);
    document.addEventListener("selectionchange", onSelection);
    document.addEventListener("click", onClick);
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("selectionchange", onSelection);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
    };
  }, []);

  if (!target) return null;

  const paint = (color: MarkColor) => {
    addMark(target.id, target.el.textContent ?? "", target.start, target.end, color);
    window.getSelection()?.removeAllRanges();
    setTarget(null);
  };
  const erase = () => {
    removeMarks(target.id, target.start, target.end);
    window.getSelection()?.removeAllRanges();
    setTarget(null);
  };
  const hasMarks = marksAt(target.id, target.start, target.end).length > 0;

  // Above the selection with a mouse; below it on touch screens, where the phone's own
  // copy/paste menu sits above.
  const W = 232;
  const left = Math.min(Math.max(8, target.rect.left + target.rect.width / 2 - W / 2), window.innerWidth - W - 8);
  const below = coarse || target.rect.top < 64;
  const top = below ? target.rect.bottom + 12 : target.rect.top - 52;

  return (
    <div
      ref={bar}
      role="toolbar"
      aria-label="Highlighter"
      onPointerDown={(e) => e.preventDefault()} // keep the text selection while choosing
      style={{ left, top, width: W }}
      className="fixed z-[60] flex items-center gap-1 rounded-2xl border border-line bg-card/95 p-1.5 shadow-lift backdrop-blur animate-fade-up [animation-duration:0.15s]"
    >
      <span className="grid size-8 shrink-0 place-items-center text-muted" aria-hidden>
        <Highlighter className="size-4" />
      </span>
      {MARK_COLORS.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => paint(c.id)}
          aria-label={`Mark ${c.label.toLowerCase()}`}
          title={c.label}
          className="grid size-8 shrink-0 place-items-center rounded-xl transition hover:bg-ink/5 active:scale-90"
        >
          <span className="size-5 rounded-full ring-2 ring-white shadow-soft" style={{ background: c.swatch }} />
        </button>
      ))}
      <button
        type="button"
        onClick={erase}
        disabled={!hasMarks}
        aria-label="Remove mark"
        title="Remove mark"
        className={cn("ml-auto grid size-8 shrink-0 place-items-center rounded-xl text-ink-soft transition hover:bg-ink hover:text-white active:scale-90 disabled:opacity-30")}
      >
        <Eraser className="size-4" />
      </button>
    </div>
  );
}
