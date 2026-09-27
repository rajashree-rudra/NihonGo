import type { ReactNode } from "react";
import { Volume2 } from "lucide-react";
import type { LearnModule, Level } from "@/data/types";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { cn } from "@/components/ui/cn";
import { moduleTheme } from "./theme";

/** Breadcrumbs + title card shared by chart, vocabulary and grammar pages. */
export function ModuleHeader({ level, module, hint, actions }: { level: Level; module: LearnModule; hint: string; actions?: ReactNode }) {
  const theme = moduleTheme(module.id);
  return (
    <>
      <Breadcrumbs items={[{ label: "Levels", href: "/" }, { label: `JLPT ${level.title}`, href: `/${level.id}` }, { label: module.title }]} />
      <div className="mt-6 flex flex-col gap-6 rounded-3xl border border-line bg-card p-5 shadow-soft sm:p-8 lg:flex-row lg:items-center">
        <div className="flex-1">
          <div className="flex items-center gap-4 sm:gap-5">
            <span className={cn("grid size-16 shrink-0 place-items-center rounded-2xl font-brush text-4xl font-semibold sm:size-20 sm:text-5xl", theme.soft, theme.text)}>
              {theme.glyph}
            </span>
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{module.title}</h1>
              <span className="font-jp text-lg text-muted">{module.jp}</span>
              <span className="rounded-full bg-ink/6 px-2.5 py-0.5 text-xs font-bold text-ink-soft">{level.title}</span>
            </div>
          </div>
          {module.intro && <p className="mt-4 max-w-3xl text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">{module.intro}</p>}
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
            <Volume2 className="size-4 shrink-0" />
            {hint}
          </p>
        </div>
        {actions && <div className="flex gap-3">{actions}</div>}
      </div>
    </>
  );
}
