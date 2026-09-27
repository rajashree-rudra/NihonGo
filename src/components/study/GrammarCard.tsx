"use client";

import { memo } from "react";
import { Lightbulb } from "lucide-react";
import type { GrammarPoint } from "@/data/types";
import { ExamplesToggle } from "./Collapsible";
import { ExampleList } from "./ExampleList";

export const GrammarCard = memo(function GrammarCard({ point, index }: { point: GrammarPoint; index: number }) {
  return (
    <article
      id={point.id}
      className="scroll-mt-24 rounded-3xl border border-line bg-card p-4 shadow-soft [content-visibility:auto] [contain-intrinsic-size:auto_14rem] sm:p-6"
    >
      <div className="flex items-start gap-3">
        <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-lg bg-ink/5 text-xs font-bold tabular-nums text-muted">{index}</span>
        <div className="min-w-0 flex-1">
          <h3 lang="ja" className="font-jp text-xl font-bold leading-snug text-ink sm:text-2xl">
            {point.pattern}
          </h3>
          <p className="mt-1 text-[15px] font-semibold text-shu">{point.meaning}</p>
        </div>
      </div>

      <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ink-soft">{point.explanation}</p>

      <div className="mt-3">
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">How to make it</p>
        <div className="flex flex-wrap gap-2">
          {point.structure.map((s) => (
            <code key={s} className="rounded-xl border border-ai/15 bg-ai-soft px-3 py-1.5 font-jp text-[14px] font-medium text-ai">
              {s}
            </code>
          ))}
        </div>
      </div>

      {point.notes && (
        <p className="mt-3 flex gap-2.5 rounded-2xl bg-kin-soft/60 p-3 text-[14px] leading-relaxed text-ink-soft">
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-kin" aria-hidden />
          <span className="text-pretty">{point.notes}</span>
        </p>
      )}

      <div className="mt-3 border-t border-line/70 pt-1.5">
        <ExamplesToggle count={point.examples.length}>
          <ExampleList examples={point.examples} />
        </ExamplesToggle>
      </div>
    </article>
  );
});
