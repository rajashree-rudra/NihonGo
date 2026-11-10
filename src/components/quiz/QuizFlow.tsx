"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, ListChecks, RotateCcw, Volume2, X } from "lucide-react";
import { quizOptions, type QuizGroup, type QuizWord } from "@/data/quiz";
import { kanaToRomaji } from "@/data/romaji";
import { speak, warmTextAudio } from "@/lib/audio";
import { romajiStore } from "@/lib/settings";
import { Button, ButtonLink } from "@/components/ui/Button";
import { GroupPicker, type GroupOption } from "@/components/ui/GroupPicker";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Segmented } from "@/components/ui/Segmented";
import { cn } from "@/components/ui/cn";

type Mode = "k2h" | "h2k";
type Count = number | "all";
interface Question {
  word: QuizWord;
  options: string[];
}
type Stage =
  | { kind: "setup" }
  | { kind: "run"; questions: Question[]; id: number }
  | { kind: "done"; questions: Question[]; answers: string[] };

const ALL = "all";
const MODES = [
  { value: "k2h" as const, label: "漢字 → かな" },
  { value: "h2k" as const, label: "かな → 漢字" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Multiple-choice quiz: a word in kanji → pick its reading, or a reading → pick the word. */
export function QuizFlow({ words, groups, title, backHref }: { words: QuizWord[]; groups: QuizGroup[]; title: string; backHref: string }) {
  const [stage, setStage] = useState<Stage>({ kind: "setup" });
  const [mode, setMode] = useState<Mode>("k2h");
  const [group, setGroup] = useState(ALL);
  const [count, setCount] = useState<Count>(20);

  useEffect(() => warmTextAudio(), []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage.kind]);

  const pool = useMemo(() => (group === ALL ? words : words.filter((w) => w.group === group)), [words, group]);
  const build = (list: QuizWord[]): Question[] => list.map((word) => ({ word, options: quizOptions(word, words, mode) }));
  const start = (list: QuizWord[]) => setStage({ kind: "run", questions: build(list), id: Date.now() });

  if (stage.kind === "run")
    return (
      <QuizRun
        key={stage.id}
        questions={stage.questions}
        mode={mode}
        title={title}
        backHref={backHref}
        onDone={(answers) => setStage({ kind: "done", questions: stage.questions, answers })}
      />
    );

  if (stage.kind === "done")
    return (
      <QuizSummary
        questions={stage.questions}
        answers={stage.answers}
        mode={mode}
        title={title}
        backHref={backHref}
        onRetryMissed={(missed) => start(shuffle(missed))}
        onRestart={() => setStage({ kind: "setup" })}
      />
    );

  const counts = [10, 20, 50].filter((n) => n < pool.length);
  const size = count === "all" ? pool.length : Math.min(count, pool.length);
  const groupOptions: GroupOption[] = [
    { value: ALL, chars: "All words", note: `${groups.length} groups`, count: words.length },
    ...groups.map((g) => ({ value: g.id, number: g.number, chars: g.label, note: g.note, count: words.filter((w) => w.group === g.id).length })),
  ].filter((o) => o.count > 0);
  const current = groups.find((g) => g.id === group);

  return (
    <div className="mx-auto max-w-2xl px-4 pt-6 sm:px-5 sm:pt-8">
      <Link href={backHref} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition hover:text-ink">
        <ArrowLeft className="size-4" /> {title}
      </Link>
      <div className="mt-4 rounded-[28px] border border-line bg-card p-5 shadow-lift animate-fade-up sm:mt-5 sm:rounded-[32px] sm:p-9">
        <span className="inline-grid size-12 place-items-center rounded-2xl bg-ai-soft text-ai">
          <ListChecks className="size-6" />
        </span>
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">{title} quiz</h1>
        <p className="mt-2 text-ink-soft">Four choices per word. Pick the right reading — or the right kanji — and hear it used in a sentence.</p>

        <fieldset className="mt-7">
          <legend className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-muted">Direction</legend>
          <Segmented label="Direction" value={mode} onChange={setMode} options={MODES} />
          <p className="mt-2 text-sm text-muted">
            {mode === "k2h" ? "See a word in kanji — choose how it is read." : "See a word in hiragana — choose how it is written."}
          </p>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-muted">Words from</legend>
          <GroupPicker
            options={groupOptions}
            value={group}
            onChange={setGroup}
            label="Choose a group"
            className="flex h-12 w-full items-center gap-2 rounded-2xl border border-kin/30 bg-gradient-to-r from-card via-card to-kin-soft/70 px-4 text-left shadow-soft transition hover:border-kin/60 aria-expanded:border-kin"
          >
            <span lang="ja" className="min-w-0 flex-1 truncate font-jp text-[15px] font-bold text-ink">
              {current ? `${current.number ? `${current.number}. ` : ""}${current.label}` : "All words"}
            </span>
            <span className="shrink-0 rounded-full bg-ai-soft px-2 py-0.5 text-[11px] font-bold tabular-nums text-ai">{pool.length} words</span>
          </GroupPicker>
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
                  onClick={() => setCount(n)}
                  className={cn(
                    "h-10 min-w-14 rounded-xl border px-3.5 text-sm font-bold tabular-nums transition",
                    selected ? "border-ai bg-ai text-white" : "border-line-strong bg-card text-ink-soft hover:border-ink/40",
                  )}
                >
                  {n === "all" ? `All ${pool.length}` : n}
                </button>
              );
            })}
          </div>
        </fieldset>

        <Button variant="primary" size="lg" className="mt-8 w-full sm:mt-9" onClick={() => start(shuffle(pool).slice(0, size))} disabled={!pool.length}>
          Start quiz · {size} words
        </Button>
      </div>
    </div>
  );
}

function QuizRun({ questions, mode, title, backHref, onDone }: { questions: Question[]; mode: Mode; title: string; backHref: string; onDone: (answers: string[]) => void }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showRomaji, setShowRomaji] = romajiStore.useValue();
  const q = questions[index];
  const correct = mode === "k2h" ? q.word.reading : q.word.word;
  const chosen = answers[index];
  const right = answers.filter((a, i) => a === (mode === "k2h" ? questions[i].word.reading : questions[i].word.word)).length;

  const choose = useCallback(
    (option: string) => {
      if (chosen !== undefined) return;
      setAnswers((a) => {
        const next = [...a];
        next[index] = option;
        return next;
      });
      if (q.word.say) void speak(q.word.say);
    },
    [chosen, index, q],
  );
  const next = useCallback(() => {
    if (chosen === undefined) return;
    if (index + 1 >= questions.length) onDone(answers);
    else setIndex(index + 1);
  }, [chosen, index, questions.length, answers, onDone]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.closest("input,textarea")) return;
      const n = Number(e.key);
      if (n >= 1 && n <= q.options.length) choose(q.options[n - 1]);
      else if (e.key === "Enter" || e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [q, choose, next]);

  const answered = chosen !== undefined;
  const isRight = chosen === correct;

  return (
    <div className="mx-auto max-w-2xl px-4 pb-10 pt-3 sm:px-5 sm:pt-6">
      <div className="flex items-center justify-between gap-3">
        <Link href={backHref} className="inline-flex h-10 items-center gap-1.5 rounded-xl pl-2 pr-3 text-sm font-semibold text-ink-soft transition hover:bg-ink/5 hover:text-ink">
          <ArrowLeft className="size-4" /> <span className="max-sm:hidden">{title}</span>
        </Link>
        <span className="text-sm font-semibold text-muted">
          <span className="text-matcha">✓ {right}</span> <span className="ml-1 text-shu">✗ {answers.filter(Boolean).length - right}</span>
        </span>
        <div className="flex items-center gap-2">
          {/* Romaji appears once a question is answered — before that it would give the reading away. */}
          <button
            type="button"
            onClick={() => setShowRomaji(!showRomaji)}
            aria-pressed={showRomaji}
            title="Show romaji after answering"
            className={cn(
              "inline-flex h-8 items-center rounded-lg border px-2.5 text-[13px] font-semibold transition active:scale-95",
              showRomaji ? "border-ink bg-ink text-white" : "border-line-strong bg-card text-ink-soft hover:border-ink/40 hover:text-ink",
            )}
          >
            Aa<span className="ml-1 max-sm:hidden">Romaji</span>
          </button>
          <span className="rounded-xl bg-ink px-3 py-1.5 text-sm font-bold tabular-nums text-white" aria-label="Progress">
            {index + 1}
            <span className="text-white/50"> / {questions.length}</span>
          </span>
        </div>
      </div>
      <ProgressBar value={index + (answered ? 1 : 0)} max={questions.length} className="mt-3" tone="bg-ai" />

      <div key={index} className="mt-5 rounded-[28px] border border-line bg-card p-5 text-center shadow-lift animate-fade-up [animation-duration:0.25s] sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{mode === "k2h" ? "How is this read?" : "How is this written?"}</p>
        <p lang="ja" className={cn("mt-3 font-jp font-bold text-ink", mode === "k2h" ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl")}>
          {mode === "k2h" ? q.word.word : q.word.reading}
        </p>
        {mode === "h2k" && q.word.meaning && <p className="mt-2 text-sm text-muted">{q.word.meaning}</p>}
      </div>

      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {q.options.map((o, i) => {
          const state = !answered ? "idle" : o === correct ? "right" : o === chosen ? "wrong" : "dim";
          return (
            <button
              key={o}
              type="button"
              onClick={() => choose(o)}
              disabled={answered}
              className={cn(
                "flex min-h-14 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all active:scale-[0.98]",
                state === "idle" && "border-line-strong bg-card hover:border-ai hover:bg-ai-soft/50",
                state === "right" && "border-matcha bg-matcha-soft",
                state === "wrong" && "border-shu bg-shu-soft",
                state === "dim" && "border-line bg-card opacity-50",
              )}
            >
              <span
                className={cn(
                  "grid size-7 shrink-0 place-items-center rounded-lg text-[12px] font-extrabold",
                  state === "right" ? "bg-matcha text-white" : state === "wrong" ? "bg-shu text-white" : "bg-paper text-muted",
                )}
              >
                {state === "right" ? <Check className="size-4" strokeWidth={3} /> : state === "wrong" ? <X className="size-4" strokeWidth={3} /> : i + 1}
              </span>
              <span lang="ja" className="font-jp text-[20px] font-semibold text-ink">
                {o}
              </span>
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-4 rounded-2xl border border-line bg-paper/70 p-4 animate-fade-up [animation-duration:0.2s]">
          <div className="flex items-start gap-3">
            <div className="min-w-0 flex-1">
              <p className={cn("text-sm font-bold", isRight ? "text-matcha" : "text-shu")}>{isRight ? "Correct!" : "Not quite."}</p>
              <p lang="ja" className="mt-1 font-jp text-lg text-ink">
                <span className="font-bold">{q.word.word}</span> <span className="text-ink-soft">{q.word.reading}</span>
                {showRomaji && <span className="ml-2 font-sans text-sm italic text-muted">{kanaToRomaji(q.word.reading)}</span>}
                {q.word.level && <LevelBadge level={q.word.level} className="ml-2 align-middle" />}
              </p>
              {q.word.meaning && <p className="text-sm text-ink-soft">{q.word.meaning}</p>}
              {q.word.sentence && (
                <>
                  <p lang="ja" className="mt-2 font-jp text-[15px] text-ink">
                    {q.word.sentence}
                  </p>
                  {q.word.sentenceEn && <p className="text-[13px] text-muted">{q.word.sentenceEn}</p>}
                </>
              )}
            </div>
            {q.word.say && (
              <button
                type="button"
                onClick={() => void speak(q.word.say!)}
                aria-label="Listen"
                className="grid size-10 shrink-0 place-items-center rounded-xl text-ink-soft transition hover:bg-ink hover:text-white"
              >
                <Volume2 className="size-[18px]" />
              </button>
            )}
          </div>
          <Button variant="primary" size="lg" className="mt-4 w-full" onClick={next} autoFocus>
            {index + 1 >= questions.length ? "See results" : "Next"} <ArrowRight className="size-4" />
          </Button>
        </div>
      )}
      <p className="mt-4 text-center text-xs text-muted max-sm:hidden">Keys: 1–4 to answer · Enter for next</p>
    </div>
  );
}

function QuizSummary({
  questions,
  answers,
  mode,
  title,
  backHref,
  onRetryMissed,
  onRestart,
}: {
  questions: Question[];
  answers: string[];
  mode: Mode;
  title: string;
  backHref: string;
  onRetryMissed: (missed: QuizWord[]) => void;
  onRestart: () => void;
}) {
  const [showRomaji] = romajiStore.useValue();
  const missed = questions.filter((q, i) => answers[i] !== (mode === "k2h" ? q.word.reading : q.word.word)).map((q) => q.word);
  const score = questions.length - missed.length;
  const pct = Math.round((score / Math.max(1, questions.length)) * 100);
  return (
    <div className="mx-auto max-w-2xl px-4 pt-6 sm:px-5 sm:pt-8">
      <div className="rounded-[28px] border border-line bg-card p-6 text-center shadow-lift animate-fade-up sm:p-9">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{title} quiz</p>
        <p className="mt-3 text-6xl font-extrabold tracking-tight">{pct}%</p>
        <p className="mt-1 text-ink-soft">
          {score} of {questions.length} correct
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {missed.length > 0 && (
            <Button variant="primary" icon={<RotateCcw className="size-4" />} onClick={() => onRetryMissed(missed)}>
              Retry {missed.length} missed
            </Button>
          )}
          <Button variant="outline" onClick={onRestart}>
            New quiz
          </Button>
          <ButtonLink href={backHref} variant="ghost">
            Back to {title}
          </ButtonLink>
        </div>
      </div>
      {missed.length > 0 && (
        <div className="mt-5 rounded-3xl border border-line bg-card p-4 sm:p-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-muted">To review</h2>
          <ul className="mt-3 divide-y divide-line/70">
            {missed.map((w) => (
              <li key={`${w.word}|${w.reading}`} className="flex items-baseline gap-3 py-2.5">
                <span lang="ja" className="font-jp text-lg font-bold text-ink">
                  {w.word}
                </span>
                <span lang="ja" className="font-jp text-ink-soft">
                  {w.reading}
                </span>
                {showRomaji && <span className="text-sm italic text-muted">{kanaToRomaji(w.reading)}</span>}
                {w.meaning && <span className="min-w-0 flex-1 truncate text-sm text-muted">{w.meaning}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
