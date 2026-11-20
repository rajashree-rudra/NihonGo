"use client";

import { useRef, useState } from "react";
import { Lightbulb } from "lucide-react";
import type { CharItem, CharSet } from "@/data/types";
import { pronounce } from "@/lib/audio";
import { progressStore } from "@/lib/settings";
import { LockChip, type PreviewProps } from "@/components/auth/Locked";
import { cn } from "@/components/ui/cn";
import { CharTile } from "./CharTile";

/** `preview` (signed out): the whole chart, but only the open rows can be heard and practised; the rest is locked. */
export function CharChart({ charSet, basePath, preview }: { charSet: CharSet; basePath: string; preview?: PreviewProps }) {
  const open = preview ? new Set(preview.open) : null;
  const isOpen = (c: CharItem | null) => !open || !c || open.has(c.char);
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
            (() => {
              const cols = { gridTemplateColumns: `repeat(${section.rows[0].length}, minmax(0, 1fr))` };
              const openRows = section.rows.filter((row) => row.every(isOpen));
              const lockedRows = section.rows.filter((row) => !row.every(isOpen));
              const lockedCount = lockedRows.flat().filter(Boolean).length;
              return (
                <>
                  {openRows.length > 0 && (
                    <div className="mx-auto grid max-w-3xl gap-2 sm:gap-3" style={cols}>
                      {openRows.flatMap((row, r) => row.map((cell, c) => (cell ? tile(cell) : <div key={`gap-${r}-${c}`} aria-hidden />)))}
                    </div>
                  )}
                  {lockedRows.length > 0 && preview && (
                    <div className={cn("relative mx-auto max-w-3xl", openRows.length > 0 && "mt-2 sm:mt-3")}>
                      <div aria-hidden className="grid select-none gap-2 sm:gap-3" style={cols}>
                        {lockedRows.flatMap((row, r) => row.map((cell, c) => (cell ? <LockedTile key={cell.char} char={cell.char} /> : <div key={`lgap-${r}-${c}`} />)))}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-3">
                        <LockChip next={preview.next}>
                          {openRows.length ? `${lockedCount} more ${section.tab.toLowerCase()} characters` : `All ${lockedCount} ${section.tab.toLowerCase()}`} — register free to
                          hear and write them
                        </LockChip>
                      </div>
                    </div>
                  )}
                </>
              );
            })()
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))] gap-3">{section.items.map(tile)}</div>
          )}
        </section>
      ))}
    </div>
  );
}

/** A character behind the Register box: faint, no reading, can't be played. */
function LockedTile({ char }: { char: string }) {
  const wide = char.length > 1;
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center rounded-2xl border border-dashed border-line-strong bg-card/50",
        wide ? "h-24 sm:h-32" : "aspect-square",
      )}
    >
      <span className={cn("whitespace-nowrap font-brush leading-none text-ink/20 blur-[0.6px]", wide ? "text-[1.9rem] min-[400px]:text-[2.2rem] sm:text-5xl" : "text-[2.1rem] sm:text-5xl")}>
        {char}
      </span>
      <span className="mt-1.5 h-2 w-6 rounded-full bg-ink/8 sm:mt-2" />
    </div>
  );
}
