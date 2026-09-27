import type { ReactNode } from "react";
import { cn } from "./cn";

interface Option<T extends string> {
  value: T;
  label: string;
  icon?: ReactNode;
  hint?: string;
}

interface Props<T extends string> {
  value: T;
  options: Option<T>[];
  onChange: (v: T) => void;
  label: string;
  className?: string;
  /**
   * Show only icons on small screens (labels stay available to screen readers):
   * true = below the sm breakpoint, "tiny" = only on the narrowest phones (< 360px).
   */
  compact?: boolean | "tiny";
}

export function Segmented<T extends string>({ value, options, onChange, label, className, compact }: Props<T>) {
  return (
    <div role="radiogroup" aria-label={label} className={cn("inline-flex shrink-0 rounded-xl bg-ink/5 p-1", className)}>
      {options.map((o) => {
        const selected = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={selected}
            title={o.hint}
            onClick={() => onChange(o.value)}
            className={cn(
              "inline-flex h-8 items-center gap-1.5 whitespace-nowrap rounded-lg text-[13px] font-semibold transition-all duration-200",
              compact === "tiny"
                ? "w-8 justify-center min-[360px]:w-auto min-[360px]:px-2.5 sm:px-3"
                : compact
                  ? "w-8 justify-center min-[360px]:w-9 sm:w-auto sm:px-3"
                  : "px-2 min-[360px]:px-2.5 sm:px-3",
              selected ? "bg-card text-ink shadow-soft" : "text-muted hover:text-ink",
            )}
          >
            {o.icon}
            <span className={compact === "tiny" ? "max-[359px]:sr-only" : compact ? "max-sm:sr-only" : undefined}>{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}
