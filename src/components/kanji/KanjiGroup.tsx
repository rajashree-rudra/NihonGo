"use client";

import Link from "next/link";
import { memo } from "react";
import { ChevronsDownUp, ChevronsUpDown, PenLine } from "lucide-react";
import type { CharItem, KanjiDetail } from "@/data/types";
import { KanjiRow } from "./KanjiRow";

interface Props {
  id: string;
  number: number;
  note: string;
  items: CharItem[];
  /** How many kanji the group has before filtering. */
  total: number;
  details: Record<string, KanjiDetail>;
  openSet: ReadonlySet<string>;
  onToggle: (char: string) => void;
  onToggleGroup: (chars: string[], open: boolean) => void;
  setId: string;
  basePath: string;
  /** Position of each kanji in the whole book. */
  indexOf: Map<string, number>;
  /** Position of each kanji inside its own group (practice starts there). */
  groupIndexOf: Map<string, number>;
  showInfo: boolean;
}

/** A look-alike group: header with practice + open/close-all, then the kanji rows. */
export const KanjiGroup = memo(function KanjiGroup(p: Props) {
  const chars = p.items.map((k) => k.char);
  const allOpen = chars.every((c) => p.openSet.has(c));
  const filtered = p.items.length < p.total;

  return (
    <section id={p.id} aria-labelledby={`${p.id}-title`} className="scroll-mt-40 overflow-hidden rounded-3xl border border-line bg-card/80 shadow-soft sm:scroll-mt-44">
      <header className="flex items-center gap-3 border-b border-line bg-paper/70 py-2.5 pl-3 pr-2 sm:gap-4 sm:pl-4 sm:pr-3">
        <span className="grid h-8 min-w-8 shrink-0 place-items-center rounded-lg bg-ink px-1.5 text-[13px] font-extrabold tabular-nums text-white">{p.number}</span>
        <div className="min-w-0 flex-1">
          <h2 id={`${p.id}-title`} lang="ja" className="truncate font-brush text-xl leading-tight tracking-[0.12em] text-ink sm:text-2xl">
            {chars.join(" ")}
          </h2>
          <p className="truncate text-[12px] text-muted">
            {p.note}
            {filtered && ` · ${p.items.length} of ${p.total} shown`}
          </p>
        </div>
        <Link
          href={`${p.basePath}/practice?s=${p.id}`}
          aria-label={`Practice group ${p.number}`}
          title="Practice this group"
          className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-xl px-2.5 text-[13px] font-semibold text-ink-soft transition hover:bg-ink hover:text-white"
        >
          <PenLine className="size-4" />
          <span className="max-sm:hidden">Practice</span>
        </Link>
        <button
          type="button"
          onClick={() => p.onToggleGroup(chars, !allOpen)}
          aria-label={allOpen ? `Close all in group ${p.number}` : `Open all in group ${p.number}`}
          title={allOpen ? "Close all in this group" : "Open all in this group"}
          className="grid size-9 shrink-0 place-items-center rounded-xl text-ink-soft transition hover:bg-ink hover:text-white"
        >
          {allOpen ? <ChevronsDownUp className="size-[18px]" /> : <ChevronsUpDown className="size-[18px]" />}
        </button>
      </header>
      <ul className="divide-y divide-line/70 bg-paper">
        {p.items.map((item) => (
          <KanjiRow
            key={item.char}
            item={item}
            number={(p.indexOf.get(item.char) ?? 0) + 1}
            showInfo={p.showInfo}
            detail={p.details[item.char]}
            open={p.openSet.has(item.char)}
            onToggle={p.onToggle}
            setId={p.setId}
            practiceHref={`${p.basePath}/practice?s=${p.id}&c=${p.groupIndexOf.get(item.char) ?? 0}`}
          />
        ))}
      </ul>
    </section>
  );
});
