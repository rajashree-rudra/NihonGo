"use client";

import { Volume2 } from "lucide-react";
import type { Example } from "@/data/types";
import { speak } from "@/lib/audio";
import { romajiStore } from "@/lib/settings";
import { LevelBadge } from "@/components/ui/LevelBadge";

/** An example sentence, optionally with its own highlighted word and that word's JLPT level. */
export type ExampleItem = Example & { hl?: string; hlKana?: string; level?: string };

/** Show every occurrence of `char` in semibold. */
export function emphasize(text: string, char?: string) {
  if (!char || !text.includes(char)) return text;
  return text.split(char).flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <b key={i} className="font-semibold">
            {char}
          </b>,
          part,
        ],
  );
}

/** Wrap the first occurrence of `target` in a highlight; `char` is shown in semibold throughout. */
export function highlight(text: string, target?: string, char?: string) {
  const i = target ? text.indexOf(target) : -1;
  if (!target || i < 0) return emphasize(text, char);
  return (
    <>
      {emphasize(text.slice(0, i), char)}
      <mark className="rounded bg-kin-soft px-0.5 text-ink">{emphasize(target, char)}</mark>
      {emphasize(text.slice(i + target.length), char)}
    </>
  );
}

/**
 * Example sentences with reading, romaji, translation and audio.
 * `emphasis`: a kanji to show in semibold wherever it appears (kanji pages).
 * `englishOnly`: show just the translation, so the learner can say it in Japanese first.
 */
export function ExampleList({ examples, target, emphasis, englishOnly }: { examples: ExampleItem[]; target?: string; emphasis?: string; englishOnly?: boolean }) {
  const [showRomaji] = romajiStore.useValue();
  return (
    <ol className="space-y-2.5">
      {examples.map((ex, i) => (
        <li key={i} className="flex gap-3 rounded-2xl bg-paper/70 p-3 sm:p-3.5">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ink/6 text-[11px] font-bold text-muted">{i + 1}</span>
          {englishOnly ? (
          <div className="min-w-0 flex-1">
            <p className="text-[15px] leading-relaxed text-ink">
              {ex.en}
              {ex.level && <LevelBadge level={ex.level} className="ml-2 align-middle" />}
            </p>
          </div>
          ) : (
          <div className="min-w-0 flex-1">
            <p lang="ja" className="font-jp text-[16px] leading-relaxed text-ink sm:text-[17px]">
              {highlight(ex.ja, ex.hl ?? target, emphasis)}
              {ex.level && <LevelBadge level={ex.level} className="ml-2 align-middle" />}
            </p>
            <p lang="ja" className="mt-0.5 font-jp text-[13px] leading-relaxed text-ink-soft">
              {highlight(ex.kana, ex.hlKana)}
            </p>
            {showRomaji && <p className="mt-0.5 text-[13px] italic leading-relaxed text-muted">{ex.romaji}</p>}
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{ex.en}</p>
          </div>
          )}
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
