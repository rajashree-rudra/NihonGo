"use client";

import { RotateCcw, Sparkles, Target } from "lucide-react";
import type { CharItem } from "@/data/types";
import { Button, ButtonLink } from "@/components/ui/Button";
import { cn } from "@/components/ui/cn";
import type { Result, SessionMode } from "./types";

interface Props {
  mode: SessionMode;
  title: string;
  queue: CharItem[];
  results: Record<number, Result>;
  backHref: string;
  onRestart: () => void;
  onRetryMissed?: (items: CharItem[]) => void;
}

export function SessionSummary({ mode, title, queue, results, backHref, onRestart, onRetryMissed }: Props) {
  const answered = Object.keys(results).length;
  const correct = Object.values(results).filter((r) => r === "correct").length;
  const missed = queue.filter((_, i) => results[i] !== "correct");
  const pct = queue.length ? Math.round((correct / queue.length) * 100) : 0;
  const isTest = mode === "test";
  const headline = isTest
    ? pct >= 90 ? "Outstanding!" : pct >= 70 ? "Great work!" : pct >= 40 ? "Good effort!" : "Keep going!"
    : "Practice complete!";

  return (
    <div className="mx-auto max-w-2xl px-5 pt-10">
      <div className="overflow-hidden rounded-[32px] border border-line bg-card shadow-lift animate-fade-up">
        <div className="relative bg-ink px-6 pb-8 pt-10 text-center text-white sm:px-10">
          <div className="pointer-events-none absolute -right-10 -top-16 size-56 rounded-full bg-shu/35 blur-3xl" />
          <span className="relative inline-grid size-14 place-items-center rounded-2xl bg-white/10">
            {isTest ? <Target className="size-7" /> : <Sparkles className="size-7" />}
          </span>
          <h1 className="relative mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{headline}</h1>
          <p className="relative mt-2 text-white/70">
            {title} {isTest ? "test" : "practice"} · {queue.length} characters
          </p>
          {isTest && (
            <div className="relative mt-6 flex items-end justify-center gap-8">
              <Stat value={`${pct}%`} label="Score" big />
              <Stat value={correct} label="Correct" />
              <Stat value={queue.length - correct} label={answered < queue.length ? "Missed / skipped" : "Missed"} />
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(3.25rem,1fr))] gap-2">
            {queue.map((item, i) => (
              <span
                key={`${item.char}-${i}`}
                title={item.romaji}
                className={cn(
                  "grid aspect-square place-items-center whitespace-nowrap rounded-xl font-brush",
                  item.char.length > 1 ? "text-base" : "text-2xl",
                  results[i] === "correct" ? "bg-matcha-soft text-matcha" : results[i] === "miss" ? "bg-shu-soft text-shu" : "bg-ink/5 text-muted",
                )}
              >
                {item.char}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {onRetryMissed && missed.length > 0 && (
              <Button variant="accent" size="lg" className="flex-1" icon={<RotateCcw className="size-4" />} onClick={() => onRetryMissed(missed)}>
                Retry {missed.length} missed
              </Button>
            )}
            <Button variant="primary" size="lg" className="flex-1" onClick={onRestart}>
              {isTest ? "New test" : "Practice again"}
            </Button>
            <ButtonLink href={backHref} variant="outline" size="lg" className="flex-1">
              Back to chart
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label, big }: { value: string | number; label: string; big?: boolean }) {
  return (
    <div>
      <div className={cn("font-extrabold tabular-nums tracking-tight", big ? "text-5xl" : "text-2xl text-white/90")}>{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/55">{label}</div>
    </div>
  );
}
