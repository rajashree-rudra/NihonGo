"use client";

import Link from "next/link";
import { PenLine } from "lucide-react";
import type { CharItem, CharSetKind } from "@/data/types";
import { formatKun } from "@/data/builders";
import { kanaToRomaji } from "@/data/romaji";
import { cn } from "@/components/ui/cn";

interface Props {
  item: CharItem;
  kind: CharSetKind;
  learned: boolean;
  playing: boolean;
  practiceHref: string;
  onPlay: () => void;
}

export function CharTile({ item, kind, learned, playing, practiceHref, onPlay }: Props) {
  const isKanji = kind === "kanji";
  const wide = item.char.length > 1; // combinations like きゃ
  return (
    <div className="group relative">
      <button
        type="button"
        onClick={onPlay}
        aria-label={`${item.char} — ${isKanji ? item.meaning : item.romaji}. Play sound`}
        className={cn(
          "relative flex w-full flex-col items-center rounded-2xl border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift active:scale-[0.96]",
          isKanji ? "px-3 pb-4 pt-5" : wide ? "h-24 justify-center pt-1 sm:h-32" : "aspect-square justify-center pt-1",
          playing ? "border-shu/50 ring-4 ring-shu/15" : "border-line shadow-soft",
        )}
      >
        {playing && <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-shu animate-ping-once" />}
        <span
          className={cn(
            "whitespace-nowrap font-brush leading-none text-ink",
            isKanji ? "text-5xl sm:text-6xl" : wide ? "text-[1.9rem] min-[400px]:text-[2.2rem] sm:text-5xl" : "text-[2.1rem] sm:text-5xl",
          )}
        >
          {item.char}
        </span>
        {isKanji ? (
          <KanjiInfo item={item} />
        ) : (
          <span className={cn("mt-1.5 text-xs font-semibold tracking-wide sm:mt-2 sm:text-sm", playing ? "text-shu" : "text-muted")}>{item.romaji}</span>
        )}
        {learned && <span className="absolute left-2 top-2 size-1.5 rounded-full bg-matcha sm:left-2.5 sm:top-2.5 sm:size-2" title="Learned" />}
      </button>
      <Link
        href={practiceHref}
        aria-label={`Practice writing ${item.char}`}
        className="absolute right-1.5 top-1.5 grid size-7 place-items-center rounded-lg bg-ink text-white opacity-0 shadow-soft transition-opacity duration-200 focus-visible:opacity-100 group-hover:opacity-100 max-sm:hidden"
      >
        <PenLine className="size-3.5" />
      </Link>
    </div>
  );
}

function KanjiInfo({ item }: { item: CharItem }) {
  const kun = item.kun ?? [];
  const on = item.on ?? [];
  const romaji = [...kun.slice(0, 1).map((k) => k.replace(".", "")), ...on.slice(0, 1)].map(kanaToRomaji);
  return (
    <span className="mt-3 flex w-full flex-col items-center gap-1 text-center">
      <span className="line-clamp-1 text-sm font-bold text-ink first-letter:uppercase">{item.meaning}</span>
      <span className="line-clamp-1 font-jp text-xs text-ink-soft">
        {[...kun.slice(0, 2).map(formatKun), ...on.slice(0, 2)].join("・")}
      </span>
      <span className="line-clamp-1 text-[11px] font-semibold tracking-wide text-muted">{[...new Set(romaji)].join(" · ")}</span>
    </span>
  );
}
