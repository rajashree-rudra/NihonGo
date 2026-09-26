import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PenLine, Target, Volume2 } from "lucide-react";
import { allCharModules, getModule } from "@/data/levels";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { CharChart } from "@/components/chart/CharChart";
import { moduleTheme } from "@/components/modules/theme";
import { cn } from "@/components/ui/cn";

export const dynamicParams = false;

export function generateStaticParams() {
  return allCharModules().map(({ level, module }) => ({ level: level.id, module: module.id }));
}

type Props = { params: Promise<{ level: string; module: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level, module } = await params;
  const found = getModule(level, module);
  return { title: found ? `${found.module.title} chart · ${found.level.title}` : undefined };
}

export default async function ChartPage({ params }: Props) {
  const { level: levelId, module: moduleId } = await params;
  const found = getModule(levelId, moduleId);
  if (!found) notFound();
  const { level, module, charSet } = found;
  const theme = moduleTheme(module.id);
  const base = `/${level.id}/${module.id}`;

  return (
    <div className="mx-auto max-w-6xl px-5 pt-8">
      <Breadcrumbs items={[{ label: "Levels", href: "/" }, { label: `JLPT ${level.title}`, href: `/${level.id}` }, { label: module.title }]} />

      <div className="mt-6 flex flex-col gap-6 rounded-3xl border border-line bg-card p-6 shadow-soft sm:flex-row sm:items-center sm:p-8">
        <span className={cn("grid size-20 shrink-0 place-items-center rounded-2xl font-brush text-5xl font-semibold", theme.soft, theme.text)}>
          {theme.glyph}
        </span>
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{module.title}</h1>
            <span className="font-jp text-lg text-muted">{module.jp}</span>
          </div>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-soft">
            <Volume2 className="size-4 shrink-0" />
            {charSet.items.length} characters · tap any character to hear it
          </p>
        </div>
        <div className="flex gap-3">
          <ButtonLink href={`${base}/practice`} variant="primary" size="lg" icon={<PenLine className="size-5" />} className="flex-1 sm:flex-none">
            Practice
          </ButtonLink>
          <ButtonLink href={`${base}/test`} variant="accent" size="lg" icon={<Target className="size-5" />} className="flex-1 sm:flex-none">
            Test
          </ButtonLink>
        </div>
      </div>

      <div className="mt-10">
        <CharChart charSet={charSet} basePath={base} />
      </div>
    </div>
  );
}
