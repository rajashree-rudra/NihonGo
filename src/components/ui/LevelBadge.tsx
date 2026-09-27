import { cn } from "./cn";

const TONES: Record<string, string> = {
  N1: "bg-ink text-white",
  N2: "bg-shu-soft text-shu",
  N3: "bg-kin-soft text-kin",
  N4: "bg-ai-soft text-ai",
  N5: "bg-matcha-soft text-matcha",
};

/** Small JLPT level pill: N5 green → N2 red. */
export function LevelBadge({ level, className }: { level: string; className?: string }) {
  return (
    <span
      className={cn("inline-flex h-[18px] items-center rounded-md px-1.5 font-sans text-[10px] font-extrabold leading-none tracking-wide", TONES[level] ?? "bg-ink/6 text-ink-soft", className)}
    >
      {level}
    </span>
  );
}
