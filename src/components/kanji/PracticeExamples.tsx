"use client";

import { BookOpen, Eye, EyeOff } from "lucide-react";
import type { CharItem, KanjiDetail } from "@/data/types";
import { practiceJapaneseStore, romajiStore } from "@/lib/settings";
import { cn } from "@/components/ui/cn";
import { ExampleList } from "@/components/study/ExampleList";
import { VocabList } from "./KanjiDetails";

/**
 * Examples and extra vocabulary for the kanji being written, shown under the writing box.
 * In a test they stay hidden until the kanji is answered — they would give it away.
 */
export function PracticeExamples({ item, detail, hidden, setId }: { item: CharItem; detail: KanjiDetail; hidden: boolean; setId: string }) {
  const [showJa, setShowJa] = practiceJapaneseStore.useValue();
  const [romaji, setRomaji] = romajiStore.useValue();
  if (!detail.examples.length && !detail.vocab.length) return null;

  return (
    <section aria-label={`Examples for ${item.char}`} className="rounded-3xl border border-line bg-card p-4 shadow-soft sm:p-6">
      <header className="mb-4 flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-paper font-brush text-2xl text-ink">{hidden ? "?" : item.char}</span>
        <div className="min-w-0">
          <h2 className="flex items-center gap-1.5 text-[15px] font-extrabold tracking-tight">
            <BookOpen className="size-4 text-muted" /> Examples & vocabulary
          </h2>
          <p className="text-xs text-muted">
            {detail.examples.length} example{detail.examples.length === 1 ? "" : "s"}
            {!!detail.vocab.length && ` · ${detail.vocab.length} more word${detail.vocab.length === 1 ? "" : "s"}`}
          </p>
        </div>
        {!hidden && (
          <div className="ml-auto flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => setRomaji(!romaji)}
              aria-pressed={romaji}
              title="Show romaji"
              className={cn(
                "inline-flex h-10 items-center rounded-xl border px-3 text-[13px] font-semibold transition active:scale-90",
                romaji ? "border-ink bg-ink text-white" : "border-line-strong bg-card text-ink-soft hover:border-ink/40 hover:text-ink",
              )}
            >
              Aa<span className="ml-1 max-sm:hidden">Romaji</span>
            </button>
            <button
              type="button"
              onClick={() => setShowJa(!showJa)}
              aria-pressed={!showJa}
              aria-label={showJa ? "Hide Japanese (English only)" : "Show Japanese"}
              title={showJa ? "Hide Japanese (English only)" : "Show Japanese"}
              className={cn(
                "grid size-10 shrink-0 place-items-center rounded-xl border transition active:scale-90",
                showJa ? "border-line-strong bg-card text-ink-soft hover:border-ink/40 hover:text-ink" : "border-kin/50 bg-kin-soft text-ink",
              )}
            >
              {showJa ? <Eye className="size-[18px]" /> : <EyeOff className="size-[18px]" />}
            </button>
          </div>
        )}
      </header>

      {hidden ? (
        <p className="flex items-center gap-2 rounded-2xl bg-paper/70 p-4 text-sm text-muted">
          <EyeOff className="size-4 shrink-0" /> They&apos;ll appear once you&apos;ve written this kanji.
        </p>
      ) : (
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {/* With no "more vocabulary" beside them, the sentences use both columns. */}
          {!!detail.examples.length && (
            <div className={cn("min-w-0", !detail.vocab.length && "lg:col-span-2")}>
              <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">Example sentences</h3>
              <ExampleList
                examples={detail.examples}
                emphasis={item.char}
                englishOnly={!showJa}
                markId={`${setId}:${item.char}:ex`}
                twoColumns={!detail.vocab.length}
              />
            </div>
          )}
          {!!detail.vocab.length && (
            <div className="min-w-0">
              <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">More vocabulary</h3>
              <VocabList vocab={detail.vocab} char={item.char} englishOnly={!showJa} markId={`${setId}:${item.char}:v`} />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
