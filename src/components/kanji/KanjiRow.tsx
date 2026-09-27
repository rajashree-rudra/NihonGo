"use client";

import { memo, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Volume2 } from "lucide-react";
import type { CharItem, KanjiDetail } from "@/data/types";
import { formatKun } from "@/data/builders";
import { pronounce } from "@/lib/audio";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { cn } from "@/components/ui/cn";
import { KanjiDetails } from "./KanjiDetails";

interface Props {
  item: CharItem;
  /** Position in the whole book (1–445). */
  number: number;
  /** Show the meaning and readings beside the kanji (hidden when self-testing). */
  showInfo: boolean;
  detail?: KanjiDetail;
  open: boolean;
  onToggle: (char: string) => void;
  setId: string;
  practiceHref: string;
}

/** One kanji as a list row; the details slide open underneath. */
export const KanjiRow = memo(function KanjiRow({ item, number, showInfo, detail, open, onToggle, setId, practiceHref }: Props) {
  // Mount the details the first time the row opens, then keep them for a smooth close.
  const [mounted, setMounted] = useState(open);
  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  const readings = [...(item.on ?? []), ...(item.kun ?? []).map(formatKun)].join("・");
  const plural = (n: number, w: string) => `${n} ${w}${n === 1 ? "" : "s"}`;
  const summary = detail
    ? [detail.examples.length && plural(detail.examples.length, "example"), detail.vocab.length && plural(detail.vocab.length, "word")]
        .filter(Boolean)
        .join(" · ")
    : "";
  const id = `k-${item.char}`;

  // Closing from the bottom: if the row's header has scrolled away, bring it back under the
  // sticky toolbar first, so the reader stays at this kanji and the next one follows right below.
  const rowRef = useRef<HTMLLIElement>(null);
  const closeFromBottom = () => {
    const top = rowRef.current?.getBoundingClientRect().top ?? 0;
    const bar = document.querySelector("[data-kanji-toolbar]")?.getBoundingClientRect().bottom ?? 0;
    if (top < bar + 8) {
      window.scrollBy({ top: top - bar - 8, behavior: "instant" });
    }
    onToggle(item.char);
  };

  return (
    <li
      ref={rowRef}
      className={cn(
        "relative bg-card transition-[margin,box-shadow] duration-300 [content-visibility:auto] [contain-intrinsic-size:auto_4.5rem]",
        // Open: lift the kanji out as its own card, with a vermilion spine running its full height
        // and a strip of the paper background above and below, so the end of it is unmistakable.
        open &&
          "z-[1] my-3 shadow-[0_10px_28px_-14px_rgb(29_26_23/0.35)] before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-[2] before:w-1 before:bg-shu first:mt-0 last:mb-0",
      )}
    >
      <div className="flex items-center gap-1 pr-1.5 sm:gap-2 sm:pr-3">
        <button
          type="button"
          onClick={() => onToggle(item.char)}
          aria-expanded={open}
          aria-controls={id}
          className="group flex min-w-0 flex-1 items-center gap-2.5 py-2.5 pl-2.5 text-left sm:gap-3.5 sm:pl-3"
        >
          <span className="w-8 shrink-0 text-right text-[12px] font-bold tabular-nums text-muted sm:w-9 sm:text-[13px]">{number}.</span>
          <span
            lang="ja"
            className={cn(
              "grid size-12 shrink-0 place-items-center rounded-xl font-brush text-[1.9rem] leading-none transition-colors sm:size-14 sm:text-4xl",
              open ? "bg-ink text-white" : "bg-paper text-ink group-hover:bg-ink/8",
            )}
          >
            {item.char}
          </span>
          <span className="min-w-0 flex-1">
            <span className="flex items-center gap-2">
              {showInfo && <span className="truncate text-[15px] font-bold text-ink first-letter:uppercase sm:text-base">{item.meaning}</span>}
              {item.level && <LevelBadge level={item.level} className="shrink-0" />}
            </span>
            {showInfo ? (
              <span lang="ja" className="mt-0.5 block truncate font-jp text-[13px] text-ink-soft">
                {readings}
              </span>
            ) : (
              <span className="mt-1 block text-[12px] italic text-muted">Meaning and reading hidden</span>
            )}
          </span>
          {summary && showInfo && <span className="hidden shrink-0 text-xs font-medium text-muted md:inline">{summary}</span>}
        </button>
        <button
          type="button"
          onClick={() => void pronounce(item)}
          aria-label={`Listen to ${item.char}`}
          className="grid size-10 shrink-0 place-items-center rounded-xl text-ink-soft transition hover:bg-ink hover:text-white active:scale-90"
        >
          <Volume2 className="size-[18px]" />
        </button>
        <button
          type="button"
          onClick={() => onToggle(item.char)}
          aria-label={open ? `Close ${item.char}` : `Open ${item.char}`}
          className="grid size-10 shrink-0 place-items-center rounded-xl text-muted transition hover:bg-ink/5 hover:text-ink"
        >
          <ChevronDown className={cn("size-5 transition-transform duration-300", open && "rotate-180")} />
        </button>
      </div>
      <div id={id} className={cn("grid transition-[grid-template-rows] duration-300 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="min-h-0 overflow-hidden">
          {mounted && detail && (
            <>
              <KanjiDetails item={item} detail={detail} setId={setId} practiceHref={practiceHref} />
              <div className="flex items-center gap-3 border-t border-line bg-paper/80 py-2 pl-4 pr-1.5 sm:pl-5 sm:pr-3">
                <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-muted">
                  End of <span className="tabular-nums">{number}.</span>{" "}
                  <span lang="ja" className="font-jp text-[14px] font-bold text-ink">
                    {item.char}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={closeFromBottom}
                  tabIndex={open ? 0 : -1}
                  aria-label={`Close ${item.char}`}
                  className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-xl border border-line-strong bg-card px-3 text-[13px] font-semibold text-ink-soft transition hover:border-ink hover:bg-ink hover:text-white active:scale-95"
                >
                  <ChevronUp className="size-4" /> Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </li>
  );
});
