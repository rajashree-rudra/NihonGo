import type { ComponentProps, ReactNode } from "react";
import { cn } from "./cn";

interface Props extends Omit<ComponentProps<"button">, "children"> {
  label: string;
  active?: boolean;
  children: ReactNode;
}

/** Square icon button with an accessible label and a hover tooltip. */
export function IconButton({ label, active, className, children, ...rest }: Props) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      className={cn(
        "group relative inline-flex size-10 items-center justify-center rounded-xl transition-all duration-200 active:scale-90 disabled:pointer-events-none disabled:opacity-35",
        active ? "bg-ink text-white shadow-soft" : "text-ink-soft hover:bg-ink/6 hover:text-ink",
        className,
      )}
      {...rest}
    >
      {children}
      <span className="pointer-events-none absolute top-full z-30 mt-2 whitespace-nowrap rounded-lg bg-ink px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-lift transition-opacity delay-300 group-hover:opacity-100 max-sm:hidden">
        {label}
      </span>
    </button>
  );
}
