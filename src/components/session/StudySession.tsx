"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Eraser, Eye, EyeOff, Feather, Loader2, Play, ShieldCheck, Undo2, Wand2 } from "lucide-react";
import type { CharItem, CharSet } from "@/data/types";
import { EASY_PASS_SCORE, alignDrawing, similarity, toShape, type Pt } from "@/lib/geometry";
import { preloadClips, pronounce, sfx } from "@/lib/audio";
import { markLearned, practiceGuideStore, strictStore, testGuideStore } from "@/lib/settings";
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
import { SoundToggle } from "@/components/layout/SiteHeader";
import { CharStrip } from "./CharStrip";
import { PromptCard } from "./PromptCard";
import type { Result, SessionMode } from "./types";

const TOOL = "size-8 min-[360px]:size-9 sm:size-10";

type Phase =
  | { kind: "writing" }
  | { kind: "burst"; ok: boolean; caption: string }
  | { kind: "compare"; score: number; passed: boolean; drawing: Pt[][] };

interface Props {
  charSet: CharSet;
  queue: CharItem[];
  mode: SessionMode;
  title: string;
  backHref: string;
  startIndex?: number;
  onFinish: (results: Record<number, Result>) => void;
  /** Section tabs shown under the top bar. */
  tabs?: ReactNode;
}

export function StudySession({ charSet, queue, mode, title, backHref, startIndex = 0, onFinish, tabs }: Props) {
  const isTest = mode === "test";
  const [index, setIndex] = useState(() => Math.min(Math.max(0, startIndex), queue.length - 1));
  const [results, setResults] = useState<Record<number, Result>>({});
  const [phase, setPhase] = useState<Phase>({ kind: "writing" });
  const [feedback, setFeedback] = useState<StrokeFeedback | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [demoKey, setDemoKey] = useState(0);
  const [strict, setStrict] = strictStore.useValue();
  const [guide, setGuide] = (isTest ? testGuideStore : practiceGuideStore).useValue();

  const padRef = useRef<WritingPadHandle>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const resultsRef = useRef(results);
  const hinted = useRef(false);

  const { data, error } = useStrokeSet(charSet.id);
  const item = queue[index];
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

  useEffect(() => () => clearTimeout(timer.current), []);

  // Size the writing box to the space between its top edge and the bottom of the screen.
  const padSlot = useRef<HTMLDivElement>(null);
  const [fitSize, setFitSize] = useState<number | null>(null);
  useLayoutEffect(() => {
    const fit = () => {
      const el = padSlot.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      setFitSize(Math.round(window.innerHeight - top - 12));
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
  const onStrictComplete = (mistakes: number) => {
    const ok = !isTest || (mistakes <= 1 && !hinted.current);
    record(ok);
    sfx(ok ? "success" : "fail");
    setTimeout(() => void pronounce(item), 380);
    const caption = isTest ? (ok ? "Correct!" : "Needs review") : mistakes === 0 ? "Perfect!" : "Well done!";
    setPhase({ kind: "burst", ok, caption });
    clearTimeout(timer.current);
    timer.current = setTimeout(advance, ok ? 1350 : 1900);
  };

  const checkEasy = () => {
    clearTimeout(timer.current);
    const drawing = padRef.current?.drawing() ?? [];
    if (!drawing.length) return;
    const score = similarity(alignDrawing(drawing, shapes), shapes);
    const passed = score >= EASY_PASS_SCORE && !(isTest && hinted.current);
    record(passed);
    sfx(passed ? "success" : "fail");
    void pronounce(item);
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
      if (e.key === "ArrowRight") goTo(index + 1);
      else if (e.key === "ArrowLeft") goTo(index - 1);
      else if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        e.preventDefault();
        padRef.current?.undo();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, index, phase.kind]);

  const done = Object.keys(results).length;
  const correct = Object.values(results).filter((r) => r === "correct").length;
  const status = statusText(feedback, strict, total, guide);

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
          <SoundToggle className="size-9 sm:hidden" />
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
      {tabs && <div className="mt-2 sm:mt-4">{tabs}</div>}
      <ProgressBar value={index + 1} max={queue.length} className="mt-3 sm:mt-4" tone={isTest ? "bg-shu" : "bg-ai"} />

      <div className="mt-1 sm:mt-3">
        <CharStrip items={queue} kind={charSet.kind} index={index} results={results} hidden={isTest} onSelect={goTo} />
      </div>

      {/* minmax(0,1fr): let columns shrink below their content's min width so nothing overflows on phones */}
      <div className="mt-2 grid grid-cols-[minmax(0,1fr)] gap-3 sm:mt-4 sm:gap-5 lg:mt-6 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-10">
        <aside className="min-w-0 space-y-4">
          <PromptCard
            item={item}
            kind={charSet.kind}
            mode={mode}
            revealed={phase.kind !== "writing"}
            strokeCount={data ? total : undefined}
            onSpeak={() => void pronounce(item)}
          />
          <div className="hidden gap-2 lg:flex">
            <Button variant="outline" className="flex-1" onClick={() => goTo(index - 1)} disabled={index === 0} icon={<ChevronLeft className="size-4" />}>
              Previous
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => goTo(index + 1)} disabled={index === queue.length - 1}>
              Next <ChevronRight className="size-4" />
            </Button>
          </div>
          <Tips strict={strict} isTest={isTest} />
        </aside>

        {/* Width is also capped by the space left below the box's top edge, so the whole box stays on screen. */}
        <section className="mx-auto w-full min-w-0 max-w-[30rem]">
          {/* Toolbar */}
          <div className="mb-2 flex items-center justify-between gap-1 sm:mb-3 sm:gap-2">
            <Segmented
              label="Writing mode"
              value={strict ? "strict" : "easy"}
              onChange={(v) => switchMode(v === "strict")}
              options={[
                { value: "strict", label: "Strict", icon: <ShieldCheck className="size-3.5" />, hint: "Stroke order and direction are checked" },
                { value: "easy", label: "Easy", icon: <Feather className="size-3.5" />, hint: "Write freely; compare the result" },
              ]}
            />
            <div className="flex shrink-0 items-center">
              <IconButton className={TOOL} label={guide ? "Hide guide" : "Show guide"} active={guide} onClick={() => setGuide(!guide)}>
                {guide ? <Eye className="size-[18px]" /> : <EyeOff className="size-[18px]" />}
              </IconButton>
              <IconButton className={TOOL} label="Show stroke order" onClick={() => setDemoKey((k) => k + 1)} disabled={!total}>
                <Play className="size-[18px]" />
              </IconButton>
              <IconButton className={TOOL} label="Undo (Ctrl+Z)" onClick={() => padRef.current?.undo()}>
                <Undo2 className="size-[18px]" />
              </IconButton>
              <IconButton className={TOOL} label="Clear" onClick={retry}>
                <Eraser className="size-[18px]" />
              </IconButton>
            </div>
          </div>

          {/* Pad */}
          <div ref={padSlot} className="mx-auto" style={{ maxWidth: fitSize ? `clamp(15rem, ${fitSize}px, 30rem)` : undefined }}>
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

          <div className="mt-2 flex gap-2 lg:hidden">
            <Button variant="outline" className="flex-1" onClick={() => goTo(index - 1)} disabled={index === 0} icon={<ChevronLeft className="size-4" />}>
              Previous
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => goTo(index + 1)} disabled={index === queue.length - 1}>
              {isTest ? "Skip" : "Next"} <ChevronRight className="size-4" />
            </Button>
          </div>
        </section>
      </div>

      {phase.kind === "compare" && (
        <CompareDialog shapes={shapes} drawing={phase.drawing} score={phase.score} passed={phase.passed} onRetry={retry} onNext={advance} />
      )}
    </div>
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
