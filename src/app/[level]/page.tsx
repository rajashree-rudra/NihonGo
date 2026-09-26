import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LEVELS, getLevel } from "@/data/levels";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ModuleCard } from "@/components/modules/ModuleCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return LEVELS.filter((l) => l.status === "available").map((l) => ({ level: l.id }));
}

type Props = { params: Promise<{ level: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const level = getLevel((await params).level);
  return { title: level ? `JLPT ${level.title}` : undefined };
}

export default async function LevelPage({ params }: Props) {
  const level = getLevel((await params).level);
  if (!level) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 pt-8">
      <Breadcrumbs items={[{ label: "Levels", href: "/" }, { label: `JLPT ${level.title}` }]} />
      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-shu">
            {level.title} · {level.tagline}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">What would you like to learn?</h1>
          <p className="mt-3 max-w-xl text-ink-soft">Start with hiragana, then katakana, then kanji. Each has a chart, practice and test.</p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {level.modules.map((m, i) => (
          <ModuleCard key={m.id} levelId={level.id} module={m} index={i} />
        ))}
      </div>
    </div>
  );
}
