"use client";

import Link from "next/link";
import { memo } from "react";
import { ChevronsDownUp, ChevronsUpDown, Lock, PenLine } from "lucide-react";
import type { CharItem, KanjiDetail } from "@/data/types";
import { LockChip, registerHref } from "@/components/auth/Locked";
import { cn } from "@/components/ui/cn";
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
  /** Show each kanji's JLPT badge (only useful when the book mixes levels). */
  showLevel: boolean;
  isStarred: (char: string) => boolean;
  onStar: (char: string) => void;
  /** Signed out and not in the preview: shown with its kanji, but meanings, readings and examples are locked. */
  locked?: { next: string };
}

/** A look-alike group: header with practice + open/close-all, then the kanji rows. */
export const KanjiGroup = memo(function KanjiGroup(p: Props) {
  const chars = p.items.map((k) => k.char);
  const allOpen = chars.every((c) => p.openSet.has(c));
  const filtered = p.items.length < p.total;
  const practiceHref = `${p.basePath}/practice?s=${p.id}`;

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
          href={p.locked ? registerHref(practiceHref) : practiceHref}
          aria-label={`Practice group ${p.number}`}
          title={p.locked ? "Register free to practice this group" : "Practice this group"}
          className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-xl px-2.5 text-[13px] font-semibold text-ink-soft transition hover:bg-ink hover:text-white"
        >
          {p.locked ? <Lock className="size-4" /> : <PenLine className="size-4" />}
          <span className="max-sm:hidden">Practice</span>
        </Link>
        {!p.locked && (
        <button
          type="button"
          onClick={() => p.onToggleGroup(chars, !allOpen)}
          aria-label={allOpen ? `Close all in group ${p.number}` : `Open all in group ${p.number}`}
          title={allOpen ? "Close all in this group" : "Open all in this group"}
          className="grid size-9 shrink-0 place-items-center rounded-xl text-ink-soft transition hover:bg-ink hover:text-white"
        >
          {allOpen ? <ChevronsDownUp className="size-[18px]" /> : <ChevronsUpDown className="size-[18px]" />}
        </button>
        )}
      </header>
      {p.locked ? (
        <div className="relative">
          <ul aria-hidden className="select-none divide-y divide-line/70 bg-paper">
            {p.items.map((item) => (
              <LockedRow key={item.char} char={item.char} number={(p.indexOf.get(item.char) ?? 0) + 1} />
            ))}
          </ul>
          <div className="absolute inset-0 flex items-center justify-center p-3">
            <LockChip next={p.locked.next}>Unlock these {p.items.length} kanji — register free</LockChip>
          </div>
        </div>
      ) : (
      <ul className="divide-y divide-line/70 bg-paper">
        {p.items.map((item) => (
          <KanjiRow
            key={item.char}
            item={item}
            number={(p.indexOf.get(item.char) ?? 0) + 1}
            showInfo={p.showInfo}
            showLevel={p.showLevel}
            detail={p.details[item.char]}
            open={p.openSet.has(item.char)}
            onToggle={p.onToggle}
            starred={p.isStarred(item.char)}
            onStar={p.onStar}
            setId={p.setId}
            practiceHref={`${p.basePath}/practice?s=${p.id}&c=${p.groupIndexOf.get(item.char) ?? 0}`}
          />
        ))}
      </ul>
      )}
    </section>
  );
});

/** A kanji row behind the Register box: the kanji, with blank lines where its meaning and readings go. */
function LockedRow({ char, number }: { char: string; number: number }) {
  return (
    <li className="flex items-center gap-2.5 bg-card py-2.5 pl-2.5 pr-3 sm:gap-3.5 sm:pl-3">
      <span className="w-8 shrink-0 text-right text-[12px] font-bold tabular-nums text-muted sm:w-9 sm:text-[13px]">{number}.</span>
      <span lang="ja" className="grid size-12 shrink-0 place-items-center rounded-xl bg-paper font-brush text-[1.9rem] leading-none text-ink/45 sm:size-14 sm:text-4xl">
        {char}
      </span>
      <span className={cn("min-w-0 flex-1 space-y-2 blur-[1px]")}>
        <span className="block h-4 w-28 rounded-md bg-ink/12" />
        <span className="block h-3 w-44 max-w-full rounded-md bg-ink/8" />
      </span>
      <Lock className="size-4 shrink-0 text-muted/70" />
    </li>
  );
}
