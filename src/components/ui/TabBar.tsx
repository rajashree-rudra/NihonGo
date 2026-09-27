"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "./cn";

export interface Tab {
  id: string;
  label: string;
  count?: number;
}

interface Props {
  tabs: Tab[];
  value: string;
  onChange: (id: string) => void;
  label: string;
  className?: string;
}

/**
 * Single-line tab bar: tabs share the width when they fit and scroll sideways when they
 * don't, with a fade on whichever edge hides more tabs.
 */
export function TabBar({ tabs, value, onChange, label, className }: Props) {
  const bar = useRef<HTMLDivElement>(null);
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
      aria-label={label}
      onScroll={updateEdges}
      className={cn("no-scrollbar flex gap-1 overflow-x-auto rounded-2xl bg-ink/5 p-1", className)}
      style={{
        maskImage:
          edges.left || edges.right
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
              "flex h-9 min-w-fit flex-1 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl px-2 text-[13px] font-semibold transition-all duration-200 min-[360px]:px-2.5 sm:px-4 sm:text-sm",
              selected ? "bg-ink text-white shadow-soft" : "text-ink-soft hover:bg-card hover:text-ink",
            )}
          >
            {t.label}
            {t.count !== undefined && (
              <span className={cn("hidden text-[11px] font-bold tabular-nums min-[400px]:inline", selected ? "text-white/60" : "text-muted")}>
                {t.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
