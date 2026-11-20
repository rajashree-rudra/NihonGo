import Link from "next/link";
import type { ReactNode } from "react";
import { Lock } from "lucide-react";
import { cn } from "@/components/ui/cn";

/** What a preview page needs: which items are open, and the page to come back to after registering. */
export interface PreviewProps {
  open: string[];
  next: string;
}

export const registerHref = (next: string) => `/register?next=${encodeURIComponent(next)}`;

/** "🔒 Unlock … — free": the link on locked parts of a preview. */
export function LockChip({ next, children, className }: { next: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={registerHref(next)}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-shu/30 bg-card px-4 py-2 text-[13px] font-bold text-shu shadow-lift transition hover:-translate-y-0.5 hover:border-shu hover:bg-shu hover:text-white",
        className,
      )}
    >
      <Lock className="size-3.5 shrink-0" />
      <span className="text-pretty">{children}</span>
    </Link>
  );
}

/**
 * Placeholder cards for what's behind the Register box: blank shapes (no real content), faded, with the chip on top.
 * `layout`: cards in a grid (vocabulary) or a column (grammar).
 */
export function LockedCards({ count, layout, next, children }: { count: number; layout: "grid" | "list"; next: string; children: ReactNode }) {
  const cards = layout === "grid" ? Math.min(count, 3) : Math.min(count, 2);
  return (
    <div className="relative">
      <div aria-hidden className={cn("select-none", layout === "grid" ? "grid items-start gap-3 md:grid-cols-2 xl:grid-cols-3" : "mx-auto max-w-3xl space-y-4")}>
        {Array.from({ length: cards }, (_, i) => (
          <div key={i} className={cn("rounded-3xl border border-line bg-card p-4 opacity-60 blur-[1.5px]", i > 0 && "max-md:hidden", i > 1 && "max-xl:hidden")}>
            <div className="flex gap-3">
              {layout === "grid" && <div className="size-20 shrink-0 rounded-2xl bg-ink/8 sm:size-24" />}
              <div className="flex-1 space-y-2.5 pt-1">
                <div className="h-5 w-2/5 rounded-md bg-ink/15" />
                <div className="h-3.5 w-3/5 rounded-md bg-ink/10" />
                <div className="h-3.5 w-1/4 rounded-full bg-ai/15" />
                {layout === "list" && <div className="h-3.5 w-4/5 rounded-md bg-ink/8" />}
              </div>
            </div>
            <div className="mt-4 h-3 w-1/3 rounded-md bg-ink/8" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-paper/0 via-paper/30 to-paper/70 p-3">
        <LockChip next={next}>{children}</LockChip>
      </div>
    </div>
  );
}
