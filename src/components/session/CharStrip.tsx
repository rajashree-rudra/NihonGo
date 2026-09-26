"use client";

import { useEffect, useRef } from "react";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { CharItem, CharSetKind } from "@/data/types";
import { cn } from "@/components/ui/cn";
import type { Result } from "./types";

interface Props {
  items: CharItem[];
  kind: CharSetKind;
  index: number;
  results: Record<number, Result>;
  /** Test mode hides characters until they are answered. */
  hidden: boolean;
  onSelect: (i: number) => void;
}

/** Horizontally scrollable row showing five characters at a time; the current one stays centred. */
export function CharStrip({ items, kind, index, results, hidden, onSelect }: Props) {
  // Wide items (きゃ …) get three per view, everything else five.
  const perView = items.every((i) => i.char.length > 1) ? 3 : 5;
  const scroller = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useEffect(() => {
    const box = scroller.current;
    const el = box?.children[index] as HTMLElement | undefined;
    if (!box || !el) return;
    box.scrollTo({
      left: el.offsetLeft - (box.clientWidth - el.clientWidth) / 2,
      behavior: first.current ? "instant" : "smooth",
    });
    first.current = false;
  }, [index]);

  const page = (dir: number) => {
    const box = scroller.current;
    box?.scrollBy({ left: dir * box.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center gap-2">
      <button
        type="button"
        onClick={() => page(-1)}
        aria-label="Scroll left"
        className="hidden size-9 shrink-0 place-items-center rounded-full text-muted transition hover:bg-ink/5 hover:text-ink sm:grid"
      >
        <ChevronLeft className="size-5" />
      </button>
      <div
        ref={scroller}
        className="no-scrollbar grid flex-1 snap-x snap-mandatory grid-flow-col gap-2 overflow-x-auto scroll-smooth px-0.5 py-2"
        style={{ gridAutoColumns: `calc((100% - ${(perView - 1) * 0.5}rem) / ${perView})` }}
      >
        {items.map((item, i) => {
          const r = results[i];
          const current = i === index;
          const reveal = !hidden || r;
          return (
            <button
              key={`${item.char}-${i}`}
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Character ${i + 1}${reveal ? `: ${item.char}` : ""}`}
              aria-current={current}
              className={cn(
                "relative flex h-16 snap-center flex-col items-center justify-center rounded-2xl border transition-all duration-200 sm:h-20",
                current
                  ? "border-ink bg-ink text-white shadow-lift"
                  : r === "correct"
                    ? "border-matcha/25 bg-matcha-soft text-matcha hover:border-matcha/50"
                    : r === "miss"
                      ? "border-shu/25 bg-shu-soft text-shu hover:border-shu/50"
                      : "border-line bg-card text-ink hover:border-line-strong hover:shadow-soft",
              )}
            >
              <span
                className={cn(
                  "whitespace-nowrap font-brush leading-none",
                  !reveal
                    ? "text-2xl opacity-40"
                    : item.char.length > 1
                      ? perView === 3 ? "text-3xl sm:text-4xl" : "text-xl sm:text-3xl"
                      : "text-3xl sm:text-4xl",
                )}
              >
                {reveal ? item.char : "?"}
              </span>
              <span
                className={cn(
                  "mt-1 max-w-full truncate px-1 text-[11px] font-semibold",
                  current ? "text-white/70" : "text-muted",
                  kind === "kanji" && "capitalize",
                )}
              >
                {kind === "kanji" ? item.meaning?.split(",")[0] : item.romaji}
              </span>
              {r && !current && (
                <span className={cn("absolute right-1 top-1 grid size-4 place-items-center rounded-full text-white", r === "correct" ? "bg-matcha" : "bg-shu")}>
                  {r === "correct" ? <Check className="size-2.5" strokeWidth={4} /> : <X className="size-2.5" strokeWidth={4} />}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => page(1)}
        aria-label="Scroll right"
        className="hidden size-9 shrink-0 place-items-center rounded-full text-muted transition hover:bg-ink/5 hover:text-ink sm:grid"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
