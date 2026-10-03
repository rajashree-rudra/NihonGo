"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Eraser, Eye, EyeOff, Feather, Loader2, Play, ShieldCheck, Undo2, Wand2 } from "lucide-react";
import type { CharItem, CharSet } from "@/data/types";
import { EASY_PASS_SCORE, alignDrawing, similarity, toShape, type Pt } from "@/lib/geometry";
import { preloadClips, pronounce, sfx, speakSequence } from "@/lib/audio";
import { kanjiSpeechParts, levelOfSet } from "@/data/speech";
import { autoClearStore, markLearned, practiceGuideStore, strictStore, testGuideStore } from "@/lib/settings";
import { useStrokeSet } from "@/lib/strokes";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Segmented } from "@/components/ui/Segmented";
import { cn } from "@/components/ui/cn";
import { WritingPad, type StrokeFeedback, type WritingPadHandle } from "@/components/writing/WritingPad";
import { ResultBurst } from "@/components/writing/ResultBurst";
import { CompareDialog } from "@/components/writing/CompareDialog";
import { SoundToggle, VoiceToggle } from "@/components/layout/SiteHeader";
import { PracticeExamples } from "@/components/kanji/PracticeExamples";
import { CharStrip } from "./CharStrip";
import { PromptCard } from "./PromptCard";
import type { Result, SessionMode } from "./types";

const TOOL = "size-8 min-[360px]:size-9 sm:size-10";

type Phase =
  | { kind: "writing" }
  | { kind: "burst"; ok: boolean; caption: string }
  /** Practice: the finished character stays on the pad until the learner clears it or moves on. */
  | { kind: "done"; ok: boolean }
  | { kind: "compare"; score: number; passed: boolean; drawing: Pt[][] };

interface Props {
  charSet: CharSet;
  queue: CharItem[];
  mode: SessionMode;
  title: string;
  backHref: string;
  startIndex?: number;
  onFinish: (results: Record<number, Result>) => void;
  /** Practice: step past the last character into the next group / before the first into the previous one. */
  onNextGroup?: () => void;
  onPrevGroup?: () => void;
  /** Section picker shown under the top bar; a function gets the current character. */
  tabs?: ReactNode | ((current: CharItem) => ReactNode);
}

export function StudySession({ charSet, queue, mode, title, backHref, startIndex = 0, onFinish, tabs, onNextGroup, onPrevGroup }: Props) {
  const isTest = mode === "test";
  const [index, setIndex] = useState(() => Math.min(Math.max(0, startIndex), queue.length - 1));
  const [results, setResults] = useState<Record<number, Result>>({});
  const [phase, setPhase] = useState<Phase>({ kind: "writing" });
  const [feedback, setFeedback] = useState<StrokeFeedback | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [demoKey, setDemoKey] = useState(0);
  const [strict, setStrict] = strictStore.useValue();
  const [guide, setGuide] = (isTest ? testGuideStore : practiceGuideStore).useValue();
  const [autoClearSetting, setAutoClear] = autoClearStore.useValue();
  // Kanji practice only: a test moves on by itself anyway.
  const canAutoClear = !isTest && charSet.kind === "kanji";
  // Kanji practice: the current and upcoming kanji stay hidden until written (again after Clear).
  const hideUnwritten = !isTest && charSet.kind === "kanji";
  const autoClear = canAutoClear && autoClearSetting;

  const padRef = useRef<WritingPadHandle>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const resultsRef = useRef(results);
  const hinted = useRef(false);

  const { data, error } = useStrokeSet(charSet.id);
  const item = queue[index];
  /** The current character has been written (tick, result or finished drawing on the pad). */
  const written = phase.kind !== "writing";
  const shapes = useMemo(() => (data?.[item.char] ?? []).map(toShape), [data, item.char]);
  const total = shapes.length;

  // ----- navigation -----
  const goTo = useCallback(
    (i: number) => {
      clearTimeout(timer.current);
      setIndex(Math.min(Math.max(0, i), queue.length - 1));
      setPhase({ kind: "writing" });
      setFeedback(null);
      setAttempt((a) => a + 1);
      setDemoKey(0);
    },
    [queue.length],
  );

  const advance = useCallback(() => {
    if (index >= queue.length - 1) onFinish(resultsRef.current);
    else goTo(index + 1);
  }, [index, queue.length, goTo, onFinish]);

  const isLast = index >= queue.length - 1;
  // No restrictions: next/previous always move on — into the neighbouring group when there is
  // one, otherwise "next" on the last character finishes the session.
  const next = useCallback(() => {
    if (isLast && onNextGroup) onNextGroup();
    else advance();
  }, [isLast, onNextGroup, advance]);
  const prev = useCallback(() => {
    if (index === 0) onPrevGroup?.();
    else goTo(index - 1);
  }, [index, onPrevGroup, goTo]);

  useEffect(() => () => clearTimeout(timer.current), []);

  // Size the writing box to the space between its top edge and the bottom of the screen.
  // Uses the *small* viewport height (100svh): on phones the browser bar shows and hides while
  // scrolling, which changes innerHeight and used to make the box grow and shrink.
  const padSlot = useRef<HTMLDivElement>(null);
  const [padTop, setPadTop] = useState<number | null>(null);
  useLayoutEffect(() => {
    const fit = () => {
      const el = padSlot.current;
      if (!el) return;
      const top = Math.round(el.getBoundingClientRect().top + window.scrollY);
      setPadTop((prev) => (prev !== null && Math.abs(prev - top) < 3 ? prev : top));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(document.body);
    window.addEventListener("resize", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, []);

  // New character: speak it, warm upcoming clips, reset hint tracking.
  useEffect(() => {
    hinted.current = isTest && guide;
    void pronounce(queue[index]);
    preloadClips(queue.slice(index + 1, index + 4));
  }, [index, queue]);

  // In a test, showing the guide or the stroke animation counts as a hint.
  useEffect(() => {
    if (isTest && (guide || demoKey)) hinted.current = true;
  }, [isTest, guide, demoKey]);

  const record = (ok: boolean) => {
    const prev = resultsRef.current;
    if (isTest && prev[index]) return; // only the first attempt counts in a test
    const next = { ...prev, [index]: (ok ? "correct" : "miss") as Result };
    resultsRef.current = next;
    setResults(next);
    if (ok) markLearned(charSet.id, item.char);
  };

  // ----- completion -----
  // After a kanji is written well in practice: its kun'yomi + a sentence, then its on'yomi + a
  // sentence (from its examples, preferring this book's level). Otherwise just say the character.
  const announce = (ok: boolean) => {
    const detail = charSet.details?.[item.char];
    const parts = !isTest && ok && detail ? kanjiSpeechParts(detail.examples, levelOfSet(charSet.id)) : [];
    void (parts.length ? speakSequence(parts) : pronounce(item));
  };

  const onStrictComplete = (mistakes: number) => {
    const ok = !isTest || (mistakes <= 1 && !hinted.current);
    record(ok);
    sfx(ok ? "success" : "fail");
    setTimeout(() => announce(ok), 380);
    const caption = isTest ? (ok ? "Correct!" : "Needs review") : mistakes === 0 ? "Perfect!" : "Well done!";
    setPhase({ kind: "burst", ok, caption });
    clearTimeout(timer.current);
    // A test moves on by itself; practice keeps the character so it can be admired or rewritten.
    timer.current = isTest
      ? setTimeout(advance, ok ? 1350 : 1900)
      : setTimeout(() => (autoClear ? retry() : setPhase({ kind: "done", ok: true })), 650);
  };

  const checkEasy = () => {
    clearTimeout(timer.current);
    const drawing = padRef.current?.drawing() ?? [];
    if (!drawing.length) return;
    const score = similarity(alignDrawing(drawing, shapes), shapes);
    const passed = score >= EASY_PASS_SCORE && !(isTest && hinted.current);
    record(passed);
    sfx(passed ? "success" : "fail");
    announce(passed);
    setPhase({ kind: "compare", score, passed, drawing });
  };

  const onFeedback = (f: StrokeFeedback) => {
    setFeedback(f);
    // Easy mode: check automatically once the expected number of strokes is drawn.
    if (f.kind === "drawn" && f.count >= f.total) {
      clearTimeout(timer.current);
      timer.current = setTimeout(checkEasy, 550);
    }
  };

  const retry = () => {
    clearTimeout(timer.current);
    setPhase({ kind: "writing" });
    setFeedback(null);
    setAttempt((a) => a + 1);
    setDemoKey(0);
  };

  const switchMode = (s: boolean) => {
    setStrict(s);
    retry();
  };

  // ----- keyboard -----
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (phase.kind === "compare" || (e.target as HTMLElement)?.closest("input,textarea")) return;
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        e.preventDefault();
        padRef.current?.undo();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, next, prev, index, phase.kind]);

  const done = Object.keys(results).length;
  const correct = Object.values(results).filter((r) => r === "correct").length;
  const status =
    phase.kind === "done"
      ? {
          text: `${phase.ok ? "Written!" : "Not quite."} Clear to write it again, or ${isLast && !onNextGroup ? "finish" : "go to the next"} →`,
          tone: phase.ok ? "text-matcha" : "text-shu",
        }
      : statusText(feedback, strict, total, guide);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-6 pt-2 sm:px-5 sm:pt-5">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3">
        <Link
          href={backHref}
          className="inline-flex h-10 items-center gap-1.5 rounded-xl pl-2 pr-3 text-sm font-semibold text-ink-soft transition hover:bg-ink/5 hover:text-ink"
        >
          <ArrowLeft className="size-4" /> <span className="max-sm:hidden">{title} chart</span>
        </Link>
        <div className="flex items-center gap-2">
          <h1 className="text-base font-extrabold tracking-tight sm:text-lg">{title}</h1>
          <Badge tone={isTest ? "shu" : "ai"} className="max-[359px]:hidden">
            {isTest ? "Test" : "Practice"}
          </Badge>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-3">
          <VoiceToggle compact className="max-[359px]:hidden sm:hidden" />
          <SoundToggle size="size-9" className="sm:hidden" />
          {isTest && (
            <span className="hidden text-sm font-semibold text-muted sm:inline" aria-label={`${correct} correct of ${done} answered`}>
              <span className="text-matcha">✓ {correct}</span> <span className="ml-1 text-shu">✗ {done - correct}</span>
            </span>
          )}
          <span className="whitespace-nowrap rounded-xl bg-ink px-2.5 py-1.5 text-sm font-bold tabular-nums text-white sm:px-3" aria-label="Progress">
            {index + 1}
            <span className="text-white/50"> / {queue.length}</span>
          </span>
        </div>
      </div>
      {tabs && <div className="mt-2 sm:mt-4">{typeof tabs === "function" ? tabs(item) : tabs}</div>}
      <ProgressBar value={index + 1} max={queue.length} className="mt-3 sm:mt-4" tone={isTest ? "bg-shu" : "bg-ai"} />

      <div className="mt-1 sm:mt-3">
        <CharStrip
          items={queue}
          kind={charSet.kind}
          index={index}
          results={results}
          isRevealed={(i) => (isTest ? !!results[i] : !hideUnwritten || i < index || (i === index && written))}
          onSelect={goTo}
        />
      </div>

      {/* minmax(0,1fr): let columns shrink below their content's min width so nothing overflows on phones */}
      <div className="mt-2 grid grid-cols-[minmax(0,1fr)] gap-3 sm:mt-4 sm:gap-5 lg:mt-6 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-10">
        <aside className="min-w-0 space-y-4">
          <PromptCard
            item={item}
            kind={charSet.kind}
            mode={mode}
            hideChar={(isTest || hideUnwritten) && !written}
            strokeCount={data ? total : undefined}
            onSpeak={() => void pronounce(item)}
          />
          <Tips strict={strict} isTest={isTest} />
        </aside>

        {/* Width is also capped by the space left below the box's top edge, so the whole box stays on screen. */}
        <section className="mx-auto w-full min-w-0 max-w-[30rem] sm:max-w-[35.5rem]">
          {/* Toolbar */}
          <div className="mb-2 flex items-center gap-1 min-[360px]:gap-1.5 sm:mb-3 sm:gap-2">
            <Segmented
              compact={canAutoClear ? "tiny" : undefined}
              label="Writing mode"
              value={strict ? "strict" : "easy"}
              onChange={(v) => switchMode(v === "strict")}
              options={[
                { value: "strict", label: "Strict", icon: <ShieldCheck className="size-3.5" />, hint: "Stroke order and direction are checked" },
                { value: "easy", label: "Easy", icon: <Feather className="size-3.5" />, hint: "Write freely; compare the result" },
              ]}
            />
            <div className="ml-auto flex shrink-0 items-center">
              <IconButton size={TOOL} label={guide ? "Hide guide" : "Show guide"} active={guide} onClick={() => setGuide(!guide)}>
                {guide ? <Eye className="size-[18px]" /> : <EyeOff className="size-[18px]" />}
              </IconButton>
              <IconButton size={TOOL} label="Show stroke order" onClick={() => setDemoKey((k) => k + 1)} disabled={!total}>
                <Play className="size-[18px]" />
              </IconButton>
              <IconButton size={TOOL} label="Undo (Ctrl+Z)" onClick={() => padRef.current?.undo()}>
                <Undo2 className="size-[18px]" />
              </IconButton>
              {canAutoClear && (
                <IconButton
                  size={TOOL}
                  label={autoClear ? "Auto-clear on" : "Auto-clear off"}
                  active={autoClear}
                  onClick={() => {
                    setAutoClear(!autoClear);
                    if (!autoClear && phase.kind === "done") retry();
                  }}
                >
                  <span className="relative">
                    <Eraser className="size-[18px]" />
                    <span
                      className={cn(
                        "absolute -right-2 -top-1.5 rounded-[4px] px-[3px] text-[8px] font-extrabold leading-[11px]",
                        autoClear ? "bg-white text-ink" : "bg-ink text-white",
                      )}
                    >
                      A
                    </span>
                  </span>
                </IconButton>
              )}
              <IconButton
                size={TOOL}
                label="Clear"
                onClick={retry}
                attention={phase.kind === "done"}
              >
                <Eraser className="size-[18px]" />
              </IconButton>
            </div>
          </div>

          {/* Pad, flanked by slim previous / next rails. On phones the rails sit in the page gutter so the pad keeps its width. */}
          <div className="-mx-3 flex justify-center gap-1 sm:mx-0 sm:gap-2.5">
          <SideNav
            dir="prev"
            label={index === 0 && onPrevGroup ? "Previous group (←)" : "Previous (←)"}
            onClick={prev}
            disabled={index === 0 && !onPrevGroup}
          />
          <div ref={padSlot} className="min-w-0 flex-1" style={{ maxWidth: padTop !== null ? `clamp(15rem, calc(100svh - ${padTop + 12}px), 30rem)` : undefined }}>
          {error ? (
            <div className="grid aspect-square place-items-center rounded-[28px] border border-dashed border-line-strong bg-card p-8 text-center text-sm text-muted">
              Couldn&apos;t load stroke data. Run <code className="rounded bg-ink/5 px-1">npm run data:strokes</code>.
            </div>
          ) : !data ? (
            <div className="grid aspect-square place-items-center rounded-[28px] border border-line bg-white shadow-lift">
              <Loader2 className="size-6 animate-spin text-muted" />
            </div>
          ) : !total ? (
            <div className="grid aspect-square place-items-center rounded-[28px] border border-dashed border-line-strong bg-card p-8 text-center text-sm text-muted">
              No stroke data for {item.char} yet.
            </div>
          ) : (
            <WritingPad
              key={`${index}-${attempt}-${strict}`}
              ref={padRef}
              shapes={shapes}
              strict={strict}
              showGuide={guide}
              demoKey={demoKey}
              disabled={phase.kind !== "writing"}
              onFeedback={onFeedback}
              onComplete={onStrictComplete}
              overlay={phase.kind === "burst" ? <ResultBurst ok={phase.ok} caption={phase.caption} /> : null}
            />
          )}
          </div>
          <SideNav
            dir="next"
            label={isLast ? (onNextGroup ? "Next group (→)" : "Finish (→)") : isTest ? "Skip (→)" : "Next (→)"}
            onClick={next}
            highlight={phase.kind === "done"}
          />
          </div>

          {/* Status */}
          <div className="mt-2 flex min-h-11 items-center justify-between gap-3 sm:mt-4">
            <p key={status.text} role="status" className={cn("text-sm font-semibold animate-fade-up [animation-duration:0.25s]", status.tone)}>
              {status.text}
            </p>
            {!strict && (
              <Button
                variant="primary"
                size="sm"
                icon={<Wand2 className="size-4" />}
                onClick={checkEasy}
                disabled={feedback?.kind !== "drawn" || phase.kind !== "writing"}
              >
                Check
              </Button>
            )}
          </div>
        </section>
      </div>

      {/* Kanji books: this kanji's example sentences and extra vocabulary */}
      {charSet.details?.[item.char] && (
        <div className="mt-6 lg:mt-10">
          <PracticeExamples setId={charSet.id} item={item} detail={charSet.details[item.char]} hidden={isTest && !written && !results[index]} />
        </div>
      )}

      {phase.kind === "compare" && (
        <CompareDialog shapes={shapes} drawing={phase.drawing} score={phase.score} passed={phase.passed} onRetry={retry} onNext={advance} onClose={() => (autoClear ? retry() : setPhase({ kind: "done", ok: phase.passed }))} />
      )}
    </div>
  );
}

/** Tall, slim previous/next rail beside the writing pad. */
function SideNav({ dir, label, onClick, disabled, highlight }: { dir: "prev" | "next"; label: string; onClick: () => void; disabled?: boolean; highlight?: boolean }) {
  const Icon = dir === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "group flex w-6 shrink-0 items-center justify-center rounded-2xl transition-all duration-200 active:scale-95 disabled:pointer-events-none disabled:opacity-25 sm:w-10",
        highlight ? "bg-ink/[0.06] text-ink hover:bg-ink hover:text-white" : "bg-ink/[0.035] text-ink-soft hover:bg-ink hover:text-white",
      )}
    >
      <Icon className={cn("size-5 transition-transform sm:size-6", dir === "prev" ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5")} />
    </button>
  );
}

function statusText(f: StrokeFeedback | null, strict: boolean, total: number, guide: boolean): { text: string; tone: string } {
  const muted = "text-muted";
  if (!total) return { text: "", tone: muted };
  if (!f) {
    if (!strict) return { text: `Write the character freely — ${total} stroke${total === 1 ? "" : "s"}, any order.`, tone: muted };
    return { text: guide ? `Stroke 1 of ${total} — start at the red dot.` : `Write stroke 1 of ${total}.`, tone: muted };
  }
  switch (f.kind) {
    case "ok":
      return f.done >= f.total
        ? { text: "All strokes correct!", tone: "text-matcha" }
        : { text: `Nice! Now stroke ${f.done + 1} of ${f.total}.`, tone: "text-matcha" };
    case "reversed":
      return { text: `Right shape, wrong direction — start from the other end of stroke ${f.done + 1}.`, tone: "text-shu" };
    case "order":
      return { text: `That's stroke ${f.matched}. Write stroke ${f.done + 1} first.`, tone: "text-shu" };
    case "wrong":
      return { text: `Not quite — try stroke ${f.done + 1} again.`, tone: "text-shu" };
    case "drawn":
      return { text: `${f.count} of ${f.total} strokes drawn${f.count >= f.total ? " — checking…" : ""}`, tone: "text-ink-soft" };
  }
}

function Tips({ strict, isTest }: { strict: boolean; isTest: boolean }) {
  return (
    <div className="hidden rounded-2xl border border-line bg-card/60 p-4 text-[13px] leading-relaxed text-ink-soft lg:block">
      <p className="mb-1.5 font-bold text-ink">{strict ? "Strict mode" : "Easy mode"}</p>
      {strict
        ? "Write each stroke in the correct order and direction. Correct strokes snap into place; a wrong one fades away so you can retry."
        : "Stroke order doesn't matter. When you finish, your writing is compared side by side with the correct form."}
      {isTest && <p className="mt-2 text-muted">Showing the guide or stroke animation counts as a hint.</p>}
      <p className="mt-2 text-muted">Keys: ← → to move, Ctrl+Z to undo.</p>
    </div>
  );
}
