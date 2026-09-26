"use client";

import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import type { LearnModule } from "@/data/types";
import { progressStore } from "@/lib/settings";
import { cn } from "@/components/ui/cn";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { moduleTheme } from "./theme";

export function ModuleCard({ levelId, module, index }: { levelId: string; module: LearnModule; index: number }) {
  const theme = moduleTheme(module.id);
  const [progress] = progressStore.useValue();
  const open = module.status === "available" && module.charSet;
  const total = module.charSet?.items.length ?? 0;
  const learned = module.charSet ? (progress[module.charSet.id]?.length ?? 0) : 0;

  const content = (
    <>
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "grid size-20 place-items-center rounded-2xl font-brush text-5xl font-semibold transition-transform duration-500",
            theme.soft,
            theme.text,
            open && "group-hover:-rotate-6 group-hover:scale-105",
          )}
        >
          {theme.glyph}
        </span>
        {open ? (
          <span className="grid size-9 place-items-center rounded-full bg-ink/5 text-ink-soft transition-all group-hover:bg-ink group-hover:text-white">
            <ArrowUpRight className="size-4" />
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full bg-ink/6 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-muted">
            <Lock className="size-3" /> Coming soon
          </span>
        )}
      </div>
      <div className="mt-6 flex items-baseline gap-2">
        <h2 className="text-xl font-extrabold tracking-tight">{module.title}</h2>
        <span className="font-jp text-sm text-muted">{module.jp}</span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{module.description}</p>
      {open && (
        <div className="mt-auto pt-6">
          <div className="mb-2 flex justify-between text-xs font-semibold text-muted">
            <span>Learned</span>
            <span className="tabular-nums">
              {learned} / {total}
            </span>
          </div>
          <ProgressBar value={learned} max={total} tone={theme.bar} />
        </div>
      )}
    </>
  );

  const base = "group relative flex min-h-64 flex-col rounded-3xl p-6 animate-fade-up";
  const style = { animationDelay: `${index * 60}ms` };

  return open ? (
    <Link
      href={`/${levelId}/${module.id}`}
      style={style}
      className={cn(base, "border border-line bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-4", theme.ring)}
    >
      {content}
    </Link>
  ) : (
    <div style={style} aria-disabled className={cn(base, "border border-dashed border-line-strong bg-card/50 opacity-80")}>
      {content}
    </div>
  );
}
