"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { examplesOpenStore } from "@/lib/settings";
import { cn } from "@/components/ui/cn";

/**
 * Example-sentence dropdown. Starts in the global open/closed setting and follows it when the
 * learner flips "open all / close all"; each card can still be toggled on its own.
 */
export function ExamplesToggle({ count, children }: { count: number; children: ReactNode }) {
  const [globalOpen] = examplesOpenStore.useValue();
  const [open, setOpen] = useState(globalOpen);
  const [rendered, setRendered] = useState(globalOpen);

  useEffect(() => {
    setOpen(globalOpen);
    if (globalOpen) setRendered(true);
  }, [globalOpen]);

  const toggle = () => {
    setRendered(true);
    setOpen((o) => !o);
  };

  return (
    <div>
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="group inline-flex h-8 items-center gap-1.5 rounded-lg pl-1 pr-2 text-[13px] font-semibold text-ink-soft transition hover:bg-ink/5 hover:text-ink"
      >
        <ChevronDown className={cn("size-4 transition-transform duration-300", open && "rotate-180")} />
        {open ? "Hide" : "Show"} {count} example{count === 1 ? "" : "s"}
      </button>
      {/* grid-rows 0fr → 1fr animates height without measuring */}
      <div className={cn("grid transition-[grid-template-rows] duration-300 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="min-h-0 overflow-hidden">{rendered && <div className="pt-2">{children}</div>}</div>
      </div>
    </div>
  );
}
