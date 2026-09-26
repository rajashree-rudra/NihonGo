import type { ReactNode } from "react";
import { cn } from "./cn";

type Tone = "neutral" | "shu" | "matcha" | "ai" | "kin";

const tones: Record<Tone, string> = {
  neutral: "bg-ink/6 text-ink-soft",
  shu: "bg-shu-soft text-shu",
  matcha: "bg-matcha-soft text-matcha",
  ai: "bg-ai-soft text-ai",
  kin: "bg-kin-soft text-kin",
};

export function Badge({ tone = "neutral", className, children }: { tone?: Tone; className?: string; children: ReactNode }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider", tones[tone], className)}>
      {children}
    </span>
  );
}
