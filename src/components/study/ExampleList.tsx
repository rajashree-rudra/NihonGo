"use client";

import { Volume2 } from "lucide-react";
import type { Example } from "@/data/types";
import { speak } from "@/lib/audio";
import { romajiStore } from "@/lib/settings";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { cn } from "@/components/ui/cn";
import { Markable } from "@/components/marker/Markable";

/** An example sentence, optionally with its own highlighted word and that word's JLPT level. */
export type ExampleItem = Example & { hl?: string; hlKana?: string; level?: string; reading?: string; readingKind?: "on" | "kun" };

/** Small "ON ラン" / "KUN みだ(れる)" chip naming the reading a sentence demonstrates. */
function ReadingChip({ reading, kind }: { reading: string; kind: "on" | "kun" }) {
  const [stem, okurigana] = reading.split(".");
  return (
    <span
      className={cn(
        "mb-1 inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-bold",
        kind === "on" ? "bg-ai-soft text-ai" : "bg-matcha-soft text-matcha",
      )}
    >
      <span className="uppercase tracking-wider">{kind}</span>
      <span lang="ja" className="font-jp text-[12px]">
        {okurigana ? `${stem}(${okurigana})` : stem}
      </span>
    </span>
  );
}

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
 * `markId`: stable prefix that makes every line highlightable (marks are saved per line).
 */
export function ExampleList({
  examples,
  target,
  emphasis,
  englishOnly,
  markId,
}: {
  examples: ExampleItem[];
  target?: string;
  emphasis?: string;
  englishOnly?: boolean;
  markId?: string;
}) {
  const [showRomaji] = romajiStore.useValue();
  return (
    <ol className="space-y-2.5">
      {examples.map((ex, i) => {
        const line = (part: string) => (markId ? `${markId}:${i}:${part}` : undefined);
        return (
        <li key={i} className="flex gap-3 rounded-2xl bg-paper/70 p-3 sm:p-3.5">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ink/6 text-[11px] font-bold text-muted">{i + 1}</span>
          {englishOnly ? (
          <div className="min-w-0 flex-1">
            <p className="text-[15px] leading-relaxed text-ink">
              <Markable as="span" markId={line("en")}>{ex.en}</Markable>
              {ex.level && <LevelBadge level={ex.level} className="ml-2 align-middle" />}
            </p>
          </div>
          ) : (
          <div className="min-w-0 flex-1">
            {ex.reading && ex.readingKind && <ReadingChip reading={ex.reading} kind={ex.readingKind} />}
            <p lang="ja" className="font-jp text-[16px] leading-relaxed text-ink sm:text-[17px]">
              <Markable as="span" markId={line("ja")}>{highlight(ex.ja, ex.hl ?? target, emphasis)}</Markable>
              {ex.level && <LevelBadge level={ex.level} className="ml-2 align-middle" />}
            </p>
            <Markable lang="ja" markId={line("kana")} className="mt-0.5 font-jp text-[13px] leading-relaxed text-ink-soft">
              {highlight(ex.kana, ex.hlKana)}
            </Markable>
            {showRomaji && (
              <Markable markId={line("ro")} className="mt-0.5 text-[13px] italic leading-relaxed text-muted">
                {ex.romaji}
              </Markable>
            )}
            <Markable markId={line("en")} className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">
              {ex.en}
            </Markable>
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
        );
      })}
    </ol>
  );
}
