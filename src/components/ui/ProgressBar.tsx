import { cn } from "./cn";

export function ProgressBar({ value, max, className, tone = "bg-matcha" }: { value: number; max: number; className?: string; tone?: string }) {
  const pct = max ? Math.min(100, (value / max) * 100) : 0;
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={cn("h-1.5 overflow-hidden rounded-full bg-ink/8", className)}
    >
      <div className={cn("h-full rounded-full transition-[width] duration-700 ease-out", tone)} style={{ width: `${pct}%` }} />
    </div>
  );
}
