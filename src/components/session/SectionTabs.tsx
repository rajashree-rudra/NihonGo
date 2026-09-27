"use client";

import { ChevronDown, Layers } from "lucide-react";
import type { CharItem, CharSet } from "@/data/types";
import { TabBar } from "@/components/ui/TabBar";
import { GroupPicker, type GroupOption } from "@/components/ui/GroupPicker";

export const ALL = "all";

/** Items of one chart section, or of the whole set for "all". */
export function sectionItems(charSet: CharSet, section: string): CharItem[] {
  return charSet.sections.find((s) => s.id === section)?.items ?? charSet.items;
}

export function isSection(charSet: CharSet, section: string | null): section is string {
  return section === ALL || charSet.sections.some((s) => s.id === section);
}

/** Up to this many sections fit as tabs; more (e.g. 110 kanji groups) use a dropdown. */
const MAX_TABS = 4;

/**
 * Section picker for practice and test: tabs for a few short sections (All · Basic ·
 * Dakuten · Combinations), a dropdown when there are many groups.
 */
export function SectionTabs({ charSet, value, onChange }: { charSet: CharSet; value: string; onChange: (section: string) => void }) {
  if (charSet.sections.length <= MAX_TABS) {
    const tabs = [
      { id: ALL, label: "All", count: charSet.items.length },
      ...charSet.sections.map((s) => ({ id: s.id, label: s.tab, count: s.items.length })),
    ];
    return <TabBar tabs={tabs} value={value} onChange={onChange} label="Character group" />;
  }

  const current = charSet.sections.find((s) => s.id === value);
  const options: GroupOption[] = [
    { value: ALL, chars: "All groups", note: `${charSet.sections.length} groups`, count: charSet.items.length },
    ...charSet.sections.map((s) => ({
      value: s.id,
      number: s.number,
      chars: s.items.map((k) => k.char).join(""),
      note: s.number ? (s.note ?? s.subtitle) : s.title,
      count: s.items.length,
    })),
  ];

  return (
    <GroupPicker
      options={options}
      value={value}
      onChange={onChange}
      label="Choose a group"
      className="group relative flex h-12 w-full items-center rounded-2xl border border-kin/30 bg-gradient-to-r from-card via-card to-kin-soft/70 pl-1.5 pr-2 text-left shadow-soft transition hover:border-kin/60 focus-visible:border-kin focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kin/15 aria-expanded:border-kin"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-shu-soft text-shu transition group-hover:bg-shu group-hover:text-white group-aria-expanded:bg-shu group-aria-expanded:text-white">
        <Layers className="size-[18px]" />
      </span>
      <span lang="ja" className="ml-2.5 min-w-0 flex-1 truncate font-jp text-[15px] font-bold tracking-wide text-ink">
        {current ? `${current.number ? `${current.number}. ` : ""}${current.items.map((k) => k.char).join(" ")}` : `All groups · ${charSet.items.length} kanji`}
      </span>
      <span className="ml-2 shrink-0 rounded-full bg-ai-soft px-2 py-0.5 text-[11px] font-bold tabular-nums text-ai">
        {(current ?? { items: charSet.items }).items.length} kanji
      </span>
      <span className="ml-1.5 grid size-8 shrink-0 place-items-center rounded-lg bg-card/80 text-ink-soft shadow-soft">
        <ChevronDown className="size-4 transition-transform group-aria-expanded:rotate-180" />
      </span>
    </GroupPicker>
  );
}
