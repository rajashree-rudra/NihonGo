"use client";

import { Volume2 } from "lucide-react";
import type { CharItem, CharSetKind } from "@/data/types";
import { formatKun } from "@/data/builders";
import { kanaToRomaji } from "@/data/romaji";
import { cn } from "@/components/ui/cn";
import { LevelBadge } from "@/components/ui/LevelBadge";
import KANJI_PARTS from "@/data/kanji-parts.json";
import type { SessionMode } from "./types";

interface Props {
  item: CharItem;
  kind: CharSetKind;
  mode: SessionMode;
  /** Hide the character itself (a test, or kanji practice before it is written). */
  hideChar: boolean;
  strokeCount?: number;
  onSpeak: () => void;
}

/** What to write: the character itself, or only its sound/meaning while it is hidden. */
export function PromptCard({ item, kind, mode, hideChar, strokeCount, onSpeak }: Props) {
  const isKanji = kind === "kanji";

  return (
    <div className="flex items-center gap-3.5 rounded-3xl border border-line bg-card p-2.5 shadow-soft sm:gap-5 sm:p-4 lg:flex-col lg:items-stretch lg:p-6">
      <div className="relative grid size-[4.5rem] shrink-0 place-items-center rounded-2xl bg-paper sm:size-24 lg:size-auto lg:aspect-square">
        <span
          key={item.char + String(hideChar)}
          className={cn(
            "whitespace-nowrap font-brush leading-none animate-pop",
            hideChar
              ? "text-5xl text-ink/20 lg:text-8xl"
              : item.char.length > 1
                ? "text-3xl text-ink sm:text-4xl lg:text-8xl"
                : "text-5xl text-ink sm:text-6xl lg:text-[8.5rem]",
          )}
        >
          {hideChar ? "?" : item.char}
        </span>
        {(mode === "test" || hideChar) && (
          <span className="absolute left-2 top-2 rounded-md bg-shu-soft px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-shu">
            Write
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        {isKanji ? (
          <>
            <div className="flex min-w-0 items-center gap-2">
              <p className="truncate text-xl font-extrabold tracking-tight first-letter:uppercase lg:text-2xl">{item.meaning}</p>
              {item.level && <LevelBadge level={item.level} className="shrink-0" />}
            </div>
            <dl className="mt-1 space-y-0.5 text-[13px] sm:mt-2 sm:space-y-1 sm:text-sm">
              {!!item.kun?.length && <Reading label="Kun" values={item.kun.map(formatKun)} raw={item.kun} />}
              {!!item.on?.length && <Reading label="On" values={item.on} raw={item.on} />}
              {/* The parts would give the answer away in a test until it's written. */}
              {!(mode === "test" && hideChar) && <Parts char={item.char} />}
            </dl>
          </>
        ) : (
          <>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted sm:text-xs">Romaji</p>
            <p className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{item.romaji}</p>
          </>
        )}
        <div className="mt-2 flex items-center gap-3 sm:mt-3 lg:mt-5">
          <button
            type="button"
            onClick={onSpeak}
            className="inline-flex h-9 items-center sm:h-10 gap-2 rounded-xl bg-ink/5 px-3.5 text-sm font-semibold transition hover:bg-ink hover:text-white active:scale-95"
          >
            <Volume2 className="size-4" /> Listen
          </button>
          {strokeCount !== undefined && (
            <span className="text-sm font-medium text-muted">
              {strokeCount} stroke{strokeCount === 1 ? "" : "s"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/** The kanji's building blocks, e.g. 休 = 亻 にんべん (person) + 木 き (tree). */
function Parts({ char }: { char: string }) {
  const parts = (KANJI_PARTS as unknown as Record<string, [part: string, name: string, meaning: string][]>)[char];
  if (!parts?.length) return null;
  return (
    <div className="flex gap-2">
      <dt className="w-8 shrink-0 pt-1 text-[11px] font-bold uppercase tracking-wider text-muted">Parts</dt>
      <dd className="flex min-w-0 flex-wrap gap-1">
        {parts.map(([part, name, meaning]) => (
          <span key={part} className="inline-flex items-baseline gap-1 rounded-md bg-paper px-1.5 py-0.5 text-[12px] leading-snug">
            <span lang="ja" className="font-jp text-[14px] font-semibold text-ink">
              {part}
            </span>
            <span lang="ja" className="font-jp text-ink-soft">
              {name}
            </span>
            <span className="text-muted">{meaning}</span>
          </span>
        ))}
      </dd>
    </div>
  );
}

function Reading({ label, values, raw }: { label: string; values: string[]; raw: string[] }) {
  return (
    <div className="flex gap-2">
      <dt className="w-8 shrink-0 pt-0.5 text-[11px] font-bold uppercase tracking-wider text-muted">{label}</dt>
      <dd className="min-w-0">
        <span className="font-jp text-ink">{values.join("、")}</span>
        <span className="ml-2 text-xs text-muted">{raw.map((r) => kanaToRomaji(r.replace(".", ""))).join(", ")}</span>
      </dd>
    </div>
  );
}
