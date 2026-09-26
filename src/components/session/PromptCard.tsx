"use client";

import { Volume2 } from "lucide-react";
import type { CharItem, CharSetKind } from "@/data/types";
import { formatKun } from "@/data/builders";
import { kanaToRomaji } from "@/data/romaji";
import { cn } from "@/components/ui/cn";
import type { SessionMode } from "./types";

interface Props {
  item: CharItem;
  kind: CharSetKind;
  mode: SessionMode;
  /** Test mode: whether the answer may be shown yet. */
  revealed: boolean;
  strokeCount?: number;
  onSpeak: () => void;
}

/** What to write: the character itself in practice, only its sound/meaning in a test. */
export function PromptCard({ item, kind, mode, revealed, strokeCount, onSpeak }: Props) {
  const isKanji = kind === "kanji";
  const hideChar = mode === "test" && !revealed;

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
        {mode === "test" && (
          <span className="absolute left-2 top-2 rounded-md bg-shu-soft px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-shu">
            Write
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        {isKanji ? (
          <>
            <p className="truncate text-xl font-extrabold tracking-tight first-letter:uppercase lg:text-2xl">{item.meaning}</p>
            <dl className="mt-1 space-y-0.5 text-[13px] sm:mt-2 sm:space-y-1 sm:text-sm">
              {!!item.kun?.length && <Reading label="Kun" values={item.kun.map(formatKun)} raw={item.kun} />}
              {!!item.on?.length && <Reading label="On" values={item.on} raw={item.on} />}
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
