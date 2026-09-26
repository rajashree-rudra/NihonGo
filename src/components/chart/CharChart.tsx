"use client";

import { useRef, useState } from "react";
import { Lightbulb } from "lucide-react";
import type { CharItem, CharSet } from "@/data/types";
import { pronounce } from "@/lib/audio";
import { progressStore } from "@/lib/settings";
import { CharTile } from "./CharTile";

export function CharChart({ charSet, basePath }: { charSet: CharSet; basePath: string }) {
  const [playing, setPlaying] = useState<string | null>(null);
  const [progress] = progressStore.useValue();
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const learned = new Set(progress[charSet.id] ?? []);
  const indexOf = new Map(charSet.items.map((it, i) => [it.char, i]));

  const play = (item: CharItem) => {
    void pronounce(item);
    setPlaying(item.char);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setPlaying(null), 900);
  };

  const tile = (item: CharItem) => (
    <CharTile
      key={item.char}
      item={item}
      kind={charSet.kind}
      learned={learned.has(item.char)}
      playing={playing === item.char}
      practiceHref={`${basePath}/practice?c=${indexOf.get(item.char)}`}
      onPlay={() => play(item)}
    />
  );

  return (
    <div className="space-y-12">
      {charSet.sections.map((section) => (
        <section key={section.id} aria-labelledby={`sec-${section.id}`}>
          <div className={`mb-4 flex items-baseline justify-between gap-4 border-b border-line pb-3 ${section.rows ? "mx-auto max-w-3xl" : ""}`}>
            <h2 id={`sec-${section.id}`} className="text-lg font-extrabold tracking-tight">
              {section.title}
            </h2>
            <span className="font-jp text-sm text-muted">{section.subtitle}</span>
          </div>
          {section.description && (
            <p
              className={`mb-5 flex gap-3 rounded-2xl border border-line bg-card/70 p-4 text-[14px] leading-relaxed text-ink-soft sm:text-[15px] ${section.rows ? "mx-auto max-w-3xl" : ""}`}
            >
              <Lightbulb className="mt-0.5 size-[18px] shrink-0 text-kin" aria-hidden />
              <span className="text-pretty">{section.description}</span>
            </p>
          )}
          {section.rows ? (
            <div
              className="mx-auto grid max-w-3xl gap-2 sm:gap-3"
              style={{ gridTemplateColumns: `repeat(${section.rows[0].length}, minmax(0, 1fr))` }}
            >
              {section.rows.flatMap((row, r) =>
                row.map((cell, c) => (cell ? tile(cell) : <div key={`gap-${r}-${c}`} aria-hidden />)),
              )}
            </div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))] gap-3">{section.items.map(tile)}</div>
          )}
        </section>
      ))}
    </div>
  );
}
