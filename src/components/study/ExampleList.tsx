"use client";

import { Volume2 } from "lucide-react";
import type { Example } from "@/data/types";
import { speak } from "@/lib/audio";
import { romajiStore } from "@/lib/settings";

/** Wrap the first occurrence of `target` in a highlight. */
function highlight(text: string, target?: string) {
  if (!target) return text;
  const i = text.indexOf(target);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="rounded bg-kin-soft px-0.5 text-ink">{target}</mark>
      {text.slice(i + target.length)}
    </>
  );
}

/** Example sentences with reading, romaji, translation and audio. */
export function ExampleList({ examples, target }: { examples: Example[]; target?: string }) {
  const [showRomaji] = romajiStore.useValue();
  return (
    <ol className="space-y-2.5">
      {examples.map((ex, i) => (
        <li key={i} className="flex gap-3 rounded-2xl bg-paper/70 p-3 sm:p-3.5">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ink/6 text-[11px] font-bold text-muted">{i + 1}</span>
          <div className="min-w-0 flex-1">
            <p className="font-jp text-[16px] leading-relaxed text-ink sm:text-[17px]">{highlight(ex.ja, target)}</p>
            <p className="mt-0.5 font-jp text-[13px] leading-relaxed text-ink-soft">{ex.kana}</p>
            {showRomaji && <p className="mt-0.5 text-[13px] italic leading-relaxed text-muted">{ex.romaji}</p>}
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{ex.en}</p>
          </div>
          <button
            type="button"
            onClick={() => void speak(ex.ja)}
            aria-label="Listen to this sentence"
            className="grid size-9 shrink-0 place-items-center rounded-xl text-ink-soft transition hover:bg-ink hover:text-white active:scale-90"
          >
            <Volume2 className="size-4" />
          </button>
        </li>
      ))}
    </ol>
  );
}
