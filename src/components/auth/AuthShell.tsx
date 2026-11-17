import type { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

/** Centred page for sign-in, registration and the waiting page. */
export function AuthShell({
  kanji,
  title,
  subtitle,
  wide,
  children,
  footer,
}: {
  kanji: string;
  title: string;
  subtitle?: ReactNode;
  wide?: boolean;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className={cn("mx-auto px-4 pt-10 sm:px-5 sm:pt-16", wide ? "max-w-2xl" : "max-w-md")}>
      <div className="relative text-center">
        <p aria-hidden className="pointer-events-none absolute inset-x-0 -top-8 select-none font-brush text-[7rem] leading-none text-ink/[0.045]">
          {kanji}
        </p>
        <h1 className="relative text-balance text-3xl font-extrabold tracking-tight">{title}</h1>
        {subtitle && <p className="relative mx-auto mt-2 max-w-md text-pretty text-ink-soft">{subtitle}</p>}
      </div>
      <div className="mt-8 rounded-3xl border border-line bg-card p-5 shadow-soft sm:p-7">{children}</div>
      {footer && <div className="mt-6 text-center text-sm text-ink-soft">{footer}</div>}
    </div>
  );
}
