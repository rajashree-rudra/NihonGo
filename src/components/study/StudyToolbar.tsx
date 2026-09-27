"use client";

import { ChevronsDownUp, ChevronsUpDown, Search, X } from "lucide-react";
import { examplesOpenStore, romajiStore } from "@/lib/settings";
import { cn } from "@/components/ui/cn";

interface Props {
  query: string;
  onQuery: (q: string) => void;
  placeholder: string;
  /** e.g. "Showing 12 of 717 words" */
  summary: string;
}

/** Search + the two display switches shared by the vocabulary and grammar pages. */
export function StudyToolbar({ query, onQuery, placeholder, summary }: Props) {
  const [examplesOpen, setExamplesOpen] = examplesOpenStore.useValue();
  const [romaji, setRomaji] = romajiStore.useValue();

  const pill = (active: boolean) =>
    cn(
      "inline-flex h-11 shrink-0 items-center gap-1.5 rounded-xl border px-3 text-[13px] font-semibold transition active:scale-95",
      active ? "border-ink bg-ink text-white" : "border-line-strong bg-card text-ink-soft hover:border-ink/40 hover:text-ink",
    );

  return (
    <div>
      <div className="flex gap-2">
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Search</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder={placeholder}
            className="h-11 w-full rounded-xl border border-line-strong bg-card pl-10 pr-9 text-[15px] outline-none transition placeholder:text-muted focus:border-ink/50 focus:ring-4 focus:ring-ink/5 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-lg text-muted hover:bg-ink/5 hover:text-ink"
            >
              <X className="size-4" />
            </button>
          )}
        </label>
        <button
          type="button"
          onClick={() => setExamplesOpen(!examplesOpen)}
          aria-pressed={examplesOpen}
          title={examplesOpen ? "Close all examples" : "Open all examples"}
          className={pill(examplesOpen)}
        >
          {examplesOpen ? <ChevronsDownUp className="size-4" /> : <ChevronsUpDown className="size-4" />}
          <span className="max-sm:hidden">{examplesOpen ? "Close all" : "Open all"}</span>
        </button>
        <button type="button" onClick={() => setRomaji(!romaji)} aria-pressed={romaji} title="Show romaji" className={pill(romaji)}>
          Aa<span className="max-sm:hidden">Romaji</span>
        </button>
      </div>
      <p className="mt-2 text-xs font-medium text-muted" aria-live="polite">
        {summary}
      </p>
    </div>
  );
}
