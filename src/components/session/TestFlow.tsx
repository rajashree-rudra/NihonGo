"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Feather, ShieldCheck, Shuffle } from "lucide-react";
import type { CharItem, CharSet } from "@/data/types";
import { strictStore } from "@/lib/settings";
import { Button } from "@/components/ui/Button";
import { Segmented } from "@/components/ui/Segmented";
import { cn } from "@/components/ui/cn";
import { SessionSummary } from "./SessionSummary";
import { StudySession } from "./StudySession";
import { ALL, SectionTabs, sectionItems } from "./SectionTabs";
import type { Result } from "./types";

interface Props {
  charSet: CharSet;
  title: string;
  backHref: string;
}

type Count = number | "all";

type Stage =
  | { kind: "setup" }
  | { kind: "run"; queue: CharItem[]; id: number }
  | { kind: "done"; queue: CharItem[]; results: Record<number, Result> };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const pick = (pool: CharItem[], count: Count) => shuffle(pool).slice(0, count === "all" ? pool.length : count);

/** Test: characters of the chosen section in random order, answer hidden; setup → session → summary. */
export function TestFlow({ charSet, title, backHref }: Props) {
  const [stage, setStage] = useState<Stage>({ kind: "setup" });
  const [section, setSection] = useState(ALL);
  const [count, setCount] = useState<Count>(20);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  const run = (items: CharItem[]) => setStage({ kind: "run", queue: items, id: Date.now() });
  const tabs = (onChange: (s: string) => void) => <SectionTabs charSet={charSet} value={section} onChange={onChange} />;

  if (stage.kind === "setup") {
    return (
      <TestSetup
        charSet={charSet}
        title={title}
        backHref={backHref}
        tabs={tabs(setSection)}
        pool={sectionItems(charSet, section)}
        count={count}
        onCount={setCount}
        onStart={() => run(pick(sectionItems(charSet, section), count))}
      />
    );
  }

  if (stage.kind === "done") {
    return (
      <SessionSummary
        mode="test"
        title={title}
        queue={stage.queue}
        results={stage.results}
        backHref={backHref}
        onRestart={() => setStage({ kind: "setup" })}
        onRetryMissed={(items) => run(shuffle(items))}
      />
    );
  }

  return (
    <StudySession
      key={stage.id}
      charSet={charSet}
      queue={stage.queue}
      mode="test"
      title={title}
      backHref={backHref}
      onFinish={(results) => setStage({ kind: "done", queue: stage.queue, results })}
      tabs={tabs((s) => {
        // Switching group mid-test starts a fresh test on that group.
        setSection(s);
        run(pick(sectionItems(charSet, s), count));
      })}
    />
  );
}

interface SetupProps extends Props {
  tabs: React.ReactNode;
  pool: CharItem[];
  count: Count;
  onCount: (c: Count) => void;
  onStart: () => void;
}

function TestSetup({ charSet, title, backHref, tabs, pool, count, onCount, onStart }: SetupProps) {
  const [strict, setStrict] = strictStore.useValue();
  const counts = [10, 20, 50].filter((n) => n < pool.length);
  const size = count === "all" ? pool.length : Math.min(count, pool.length);

  return (
    <div className="mx-auto max-w-2xl px-4 pt-6 sm:px-5 sm:pt-8">
      <Link href={backHref} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition hover:text-ink">
        <ArrowLeft className="size-4" /> {title} chart
      </Link>
      <div className="mt-4 rounded-[28px] border border-line bg-card p-5 shadow-lift animate-fade-up sm:mt-5 sm:rounded-[32px] sm:p-9">
        <span className="inline-grid size-12 place-items-center rounded-2xl bg-shu-soft text-shu">
          <Shuffle className="size-6" />
        </span>
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">{title} test</h1>
        <p className="mt-2 text-ink-soft">
          Characters appear in random order. You&apos;ll see the {charSet.kind === "kanji" ? "meaning and reading" : "romaji"} and hear
          the sound — write the character from memory.
        </p>

        <fieldset className="mt-7">
          <legend className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-muted">Characters</legend>
          {tabs}
        </fieldset>

        <fieldset className="mt-7">
          <legend className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Questions</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {[...counts, "all" as const].map((n) => {
              const selected = n === "all" ? size === pool.length : count === n;
              return (
                <button
                  key={n}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => onCount(n)}
                  className={cn(
                    "h-10 min-w-14 rounded-xl border px-3.5 text-sm font-bold tabular-nums transition",
                    selected ? "border-shu bg-shu text-white" : "border-line-strong bg-card text-ink-soft hover:border-ink/40",
                  )}
                >
                  {n === "all" ? `All ${pool.length}` : n}
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Writing mode</legend>
          <Segmented
            className="mt-3"
            label="Writing mode"
            value={strict ? "strict" : "easy"}
            onChange={(v) => setStrict(v === "strict")}
            options={[
              { value: "strict", label: "Strict", icon: <ShieldCheck className="size-3.5" /> },
              { value: "easy", label: "Easy", icon: <Feather className="size-3.5" /> },
            ]}
          />
          <p className="mt-2 text-sm text-muted">
            {strict ? "Stroke order and direction are checked." : "Any stroke order — only the final shape is compared."}
          </p>
        </fieldset>

        <Button variant="accent" size="lg" className="mt-8 w-full sm:mt-9" onClick={onStart}>
          Start test · {size} characters
        </Button>
      </div>
    </div>
  );
}
