"use client";

import type { CharItem, CharSet } from "@/data/types";
import { TabBar } from "@/components/ui/TabBar";

export const ALL = "all";

/** Items of one chart section, or of the whole set for "all". */
export function sectionItems(charSet: CharSet, section: string): CharItem[] {
  return charSet.sections.find((s) => s.id === section)?.items ?? charSet.items;
}

export function isSection(charSet: CharSet, section: string | null): section is string {
  return section === ALL || charSet.sections.some((s) => s.id === section);
}

/** All · Basic · Dakuten · Combinations … for a character set. */
export function SectionTabs({ charSet, value, onChange }: { charSet: CharSet; value: string; onChange: (section: string) => void }) {
  const tabs = [
    { id: ALL, label: "All", count: charSet.items.length },
    ...charSet.sections.map((s) => ({ id: s.id, label: s.tab, count: s.items.length })),
  ];
  return <TabBar tabs={tabs} value={value} onChange={onChange} label="Character group" />;
}
