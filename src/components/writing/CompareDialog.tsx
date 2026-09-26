"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import type { Pt, StrokeShape } from "@/lib/geometry";
import { Button } from "@/components/ui/Button";
import { cn } from "@/components/ui/cn";
import { StrokeFigure } from "./StrokeFigure";

interface Props {
  shapes: StrokeShape[];
  drawing: Pt[][];
  score: number;
  passed: boolean;
  onRetry: () => void;
  onNext: () => void;
}

function verdict(score: number, passed: boolean) {
  if (!passed) return { title: "Keep practicing", jp: "もう一度", tone: "text-shu", ring: "#d8452e" };
  if (score >= 82) return { title: "Excellent!", jp: "すばらしい", tone: "text-matcha", ring: "#3f8a5a" };
  return { title: "Good job!", jp: "いいね", tone: "text-matcha", ring: "#3f8a5a" };
}

/** Easy-mode result: the model character and the learner's drawing side by side. */
export function CompareDialog({ shapes, drawing, score, passed, onRetry, onNext }: Props) {
  const v = verdict(score, passed);
  const nextRef = useRef<HTMLButtonElement>(null);
  const C = 2 * Math.PI * 26;

  useEffect(() => {
    nextRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onRetry();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onRetry]);

  return (
    <div className="fixed inset-0 z-50 grid place-items-end bg-ink/30 p-3 backdrop-blur-sm animate-fade-up [animation-duration:0.2s] sm:place-items-center">
      <div role="dialog" aria-modal aria-labelledby="compare-title" className="w-full max-w-lg rounded-[28px] bg-card p-5 shadow-lift sm:p-7">
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 60 60" className="size-16 shrink-0 -rotate-90">
            <circle cx="30" cy="30" r="26" fill="none" stroke="#efe7dc" strokeWidth="6" />
            <circle
              cx="30"
              cy="30"
              r="26"
              fill="none"
              stroke={v.ring}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={C * (1 - score / 100)}
              className="transition-[stroke-dashoffset] duration-1000 ease-out"
            />
            <text x="30" y="30" dy="5" textAnchor="middle" fontSize="15" fontWeight="800" fill="#1d1a17" transform="rotate(90 30 30)">
              {score}
            </text>
          </svg>
          <div>
            <h2 id="compare-title" className={cn("text-2xl font-extrabold tracking-tight", v.tone)}>
              {v.title}
            </h2>
            <p className="text-sm text-muted">
              <span className="font-jp">{v.jp}</span> · similarity {score}%
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            { label: "Correct", node: <StrokeFigure shapes={shapes} numbered /> },
            { label: "Yours", node: <StrokeFigure drawing={drawing} /> },
          ].map((b) => (
            <figure key={b.label} className="overflow-hidden rounded-2xl border border-line bg-white">
              <div className="aspect-square p-1">{b.node}</div>
              <figcaption className="border-t border-line bg-paper/60 py-2 text-center text-xs font-bold uppercase tracking-wider text-muted">
                {b.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <Button variant="outline" size="lg" className="flex-1" icon={<RotateCcw className="size-4" />} onClick={onRetry}>
            Try again
          </Button>
          <Button ref={nextRef} variant="primary" size="lg" className="flex-1" onClick={onNext}>
            Next <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
