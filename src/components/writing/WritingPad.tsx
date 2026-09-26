"use client";

import { useEffect, useImperativeHandle, useRef, useState, type ReactNode, type Ref } from "react";
import { BOX, inkPath, judgeNextStroke, polylineLength, type Pt, type StrokeShape } from "@/lib/geometry";
import { sfx } from "@/lib/audio";
import { cn } from "@/components/ui/cn";

export type StrokeFeedback =
  | { kind: "ok"; done: number; total: number }
  | { kind: "reversed" | "wrong"; done: number; total: number }
  | { kind: "order"; done: number; total: number; matched: number }
  | { kind: "drawn"; count: number; total: number };

export interface WritingPadHandle {
  clear: () => void;
  undo: () => void;
  /** Freehand strokes drawn so far (easy mode). */
  drawing: () => Pt[][];
}

interface Props {
  shapes: StrokeShape[];
  /** Strict: strokes must be written in order and direction; each correct one snaps into place. */
  strict: boolean;
  showGuide: boolean;
  disabled?: boolean;
  /** Increment to play the stroke-order animation. */
  demoKey?: number;
  onFeedback?: (f: StrokeFeedback) => void;
  /** Strict mode: all strokes written. */
  onComplete?: (mistakes: number) => void;
  overlay?: ReactNode;
  ref?: Ref<WritingPadHandle>;
}

const INK = "#1d1a17";
const SHU = "#d8452e";

const demoTiming = (shapes: StrokeShape[]) => {
  let t = 0.15;
  return shapes.map((s) => {
    const dur = 0.25 + s.length / 120;
    const timing = { delay: t, dur };
    t += dur + 0.12;
    return timing;
  });
};

export function WritingPad({ shapes, strict, showGuide, disabled, demoKey = 0, onFeedback, onComplete, overlay, ref }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const liveRef = useRef<SVGPathElement>(null);
  const current = useRef<{ id: number; pts: Pt[] } | null>(null);
  const mistakes = useRef(0);

  const [done, setDone] = useState(0); // strict: strokes placed
  const [free, setFree] = useState<Pt[][]>([]); // easy: user strokes
  const [miss, setMiss] = useState<{ d: string; n: number } | null>(null);
  const [missesHere, setMissesHere] = useState(0);
  const [demo, setDemo] = useState(false);

  const total = shapes.length;
  const complete = strict && done >= total;

  const reset = () => {
    setDone(0);
    setFree([]);
    setMiss(null);
    setMissesHere(0);
    mistakes.current = 0;
  };

  useImperativeHandle(ref, () => ({
    clear: reset,
    undo: () => {
      if (strict) {
        setDone((d) => Math.max(0, d - 1));
        setMissesHere(0);
      } else setFree((f) => f.slice(0, -1));
    },
    drawing: () => free,
  }));

  // Stroke-order demo
  useEffect(() => {
    if (!demoKey) return;
    setDemo(true);
    const t = demoTiming(shapes);
    const end = t.length ? t[t.length - 1].delay + t[t.length - 1].dur + 0.6 : 0;
    const id = setTimeout(() => setDemo(false), end * 1000);
    return () => clearTimeout(id);
  }, [demoKey, shapes]);

  const toLocal = (e: { clientX: number; clientY: number }): Pt => {
    const r = svgRef.current!.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * BOX, y: ((e.clientY - r.top) / r.height) * BOX };
  };

  const locked = disabled || demo || complete;

  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (locked || current.current || (e.pointerType === "mouse" && e.button !== 0)) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    current.current = { id: e.pointerId, pts: [toLocal(e)] };
    liveRef.current?.setAttribute("d", inkPath(current.current.pts));
  };

  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const c = current.current;
    if (!c || c.id !== e.pointerId) return;
    const events = e.nativeEvent.getCoalescedEvents?.() ?? [e.nativeEvent];
    for (const ev of events.length ? events : [e.nativeEvent]) {
      const p = toLocal(ev);
      const last = c.pts[c.pts.length - 1];
      if (Math.hypot(p.x - last.x, p.y - last.y) > 0.35) c.pts.push(p);
    }
    liveRef.current?.setAttribute("d", inkPath(c.pts));
  };

  const onPointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    const c = current.current;
    if (!c || c.id !== e.pointerId) return;
    current.current = null;
    liveRef.current?.setAttribute("d", "");
    const pts = c.pts;
    if (polylineLength(pts) < 1.2) return; // a tap, not a stroke
    if (strict) judge(pts);
    else {
      const next = [...free, pts];
      setFree(next);
      onFeedback?.({ kind: "drawn", count: next.length, total });
    }
  };

  const judge = (pts: Pt[]) => {
    if (done >= total) return;
    const verdict = judgeNextStroke(pts, shapes, done);
    if (verdict.kind === "ok") {
      const n = done + 1;
      setDone(n);
      setMissesHere(0);
      setMiss(null);
      if (n >= total) onComplete?.(mistakes.current);
      else sfx("stroke");
      onFeedback?.({ kind: "ok", done: n, total });
      return;
    }
    mistakes.current++;
    setMissesHere((m) => m + 1);
    setMiss((m) => ({ d: inkPath(pts), n: (m?.n ?? 0) + 1 }));
    sfx("wrong");
    onFeedback?.(
      verdict.kind === "order" ? { kind: "order", done, total, matched: verdict.matched + 1 } : { kind: verdict.kind, done, total },
    );
  };

  // After two misses on the same stroke, reveal it even with the guide hidden.
  const showNext = strict && !complete && !demo && (showGuide || missesHere >= 2);
  const next = shapes[done];
  const timing = demo ? demoTiming(shapes) : [];

  return (
    <div className="relative aspect-square w-full select-none">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${BOX} ${BOX}`}
        className={cn(
          "size-full touch-none rounded-[28px] border border-line bg-white shadow-lift",
          locked ? "cursor-default" : "cursor-crosshair",
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onLostPointerCapture={onPointerUp}
        role="img"
        aria-label="Writing area"
      >
        {/* Practice grid */}
        <g stroke="#eadfd1" strokeWidth={0.4} strokeDasharray="1.6 1.6" fill="none">
          <line x1={BOX / 2} y1={6} x2={BOX / 2} y2={BOX - 6} />
          <line x1={6} y1={BOX / 2} x2={BOX - 6} y2={BOX / 2} />
        </g>
        <rect x={6} y={6} width={BOX - 12} height={BOX - 12} rx={6} fill="none" stroke="#f1e9de" strokeWidth={0.5} />

        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Model character */}
          {(showGuide || demo) &&
            shapes.map((s, i) => <path key={i} d={s.d} stroke={demo ? "#f1ebe2" : "#ebe4da"} strokeWidth={3.4} />)}

          {/* Strict: strokes already written correctly, snapped to the model */}
          {strict &&
            !demo &&
            shapes.slice(0, done).map((s, i) => (
              <path
                key={i}
                d={s.d}
                pathLength={1}
                stroke={complete ? "#2f7a4c" : INK}
                strokeWidth={3.6}
                className={cn(i === done - 1 && "stroke-draw", "transition-[stroke] duration-500")}
                style={{ ["--dur" as string]: "0.28s" }}
              />
            ))}

          {/* Strict: the next stroke to write */}
          {showNext && next && (
            <g key={`next-${done}`}>
              <path d={next.d} stroke={SHU} strokeOpacity={0.22} strokeWidth={3.6} />
              <path d={next.d} pathLength={1} stroke={SHU} strokeWidth={3.6} className="hint-trace" />
              <circle cx={next.points[0].x} cy={next.points[0].y} fill={SHU} className="dot-pulse" r={3} />
              <text
                x={next.points[0].x}
                y={next.points[0].y}
                dy={1.3}
                textAnchor="middle"
                fontSize={3.6}
                fontWeight={700}
                fill="#fff"
                stroke="none"
                className="pointer-events-none"
              >
                {done + 1}
              </text>
            </g>
          )}

          {/* Easy: the learner's own strokes */}
          {!strict && !demo && free.map((s, i) => <path key={i} d={inkPath(s)} stroke={INK} strokeWidth={3.6} />)}

          {/* Rejected stroke fades out */}
          {miss && !demo && <path key={miss.n} d={miss.d} stroke={SHU} strokeWidth={3.6} className="ink-fade" />}

          {/* Stroke-order demo */}
          {demo &&
            shapes.map((s, i) => (
              <path
                key={`${demoKey}-${i}`}
                d={s.d}
                pathLength={1}
                stroke={INK}
                strokeWidth={3.6}
                className="stroke-draw"
                style={{ ["--delay" as string]: `${timing[i].delay}s`, ["--dur" as string]: `${timing[i].dur}s` }}
              />
            ))}

          {/* Stroke being drawn right now */}
          <path ref={liveRef} stroke={INK} strokeWidth={3.6} />
        </g>
      </svg>
      {overlay}
    </div>
  );
}
