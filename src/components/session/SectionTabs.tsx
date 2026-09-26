"use client";

import { useEffect, useRef, useState } from "react";
import type { CharItem, CharSet } from "@/data/types";
import { cn } from "@/components/ui/cn";

export const ALL = "all";

/** Items of one chart section, or of the whole set for "all". */
export function sectionItems(charSet: CharSet, section: string): CharItem[] {
  return charSet.sections.find((s) => s.id === section)?.items ?? charSet.items;
}

export function isSection(charSet: CharSet, section: string | null): section is string {
  return section === ALL || charSet.sections.some((s) => s.id === section);
}

interface Props {
  charSet: CharSet;
  value: string;
  onChange: (section: string) => void;
  className?: string;
}

/**
 * Section filter (All · Basic · Dakuten · Combinations …). Always a single line:
 * tabs share the width when they fit and scroll sideways when they don't.
 */
export function SectionTabs({ charSet, value, onChange, className }: Props) {
  const bar = useRef<HTMLDivElement>(null);
  const tabs = [{ id: ALL, tab: "All", count: charSet.items.length }, ...charSet.sections.map((s) => ({ id: s.id, tab: s.tab, count: s.items.length }))];

  // Fade the edge that has more tabs hidden behind it.
  const [edges, setEdges] = useState({ left: false, right: false });
  const updateEdges = () => {
    const box = bar.current;
    if (!box) return;
    setEdges({ left: box.scrollLeft > 2, right: box.scrollLeft + box.clientWidth < box.scrollWidth - 2 });
  };
  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

  // Keep the selected tab visible when the bar scrolls.
  useEffect(() => {
    const box = bar.current;
    const el = box?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (!box || !el) return;
    const left = el.offsetLeft - box.offsetLeft;
    if (left < box.scrollLeft || left + el.offsetWidth > box.scrollLeft + box.clientWidth) {
      box.scrollTo({ left: left - (box.clientWidth - el.offsetWidth) / 2, behavior: "smooth" });
    }
  }, [value]);

  return (
    <div
      ref={bar}
      role="tablist"
      aria-label="Character group"
      onScroll={updateEdges}
      className={cn("no-scrollbar flex gap-1 overflow-x-auto rounded-2xl bg-ink/5 p-1", className)}
      style={{
        maskImage: edges.left || edges.right
          ? `linear-gradient(to right, ${edges.left ? "transparent, black 2.5rem" : "black"}, ${edges.right ? "black calc(100% - 2.5rem), transparent" : "black"})`
          : undefined,
      }}
    >
      {tabs.map((t) => {
        const selected = t.id === value;
        return (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(t.id)}
            className={cn(
              "flex h-9 min-w-fit flex-1 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl px-2 text-[13px] min-[360px]:px-2.5 font-semibold transition-all duration-200 sm:px-4 sm:text-sm",
              selected ? "bg-ink text-white shadow-soft" : "text-ink-soft hover:bg-card hover:text-ink",
            )}
          >
            {t.tab}
            <span className={cn("hidden text-[11px] font-bold tabular-nums min-[400px]:inline", selected ? "text-white/60" : "text-muted")}>{t.count}</span>
          </button>
        );
      })}
    </div>
  );
}
