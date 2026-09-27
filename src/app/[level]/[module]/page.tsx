import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PenLine, Target } from "lucide-react";
import { allModules, getLearnModule } from "@/data/levels";
import { ButtonLink } from "@/components/ui/Button";
import { CharChart } from "@/components/chart/CharChart";
import { KanjiBook } from "@/components/kanji/KanjiBook";
import { ModuleHeader } from "@/components/modules/ModuleHeader";
import { GrammarBrowser, VocabBrowser } from "@/components/study/Browsers";

export const dynamicParams = false;

export function generateStaticParams() {
  return allModules().map(({ level, module }) => ({ level: level.id, module: module.id }));
}

type Props = { params: Promise<{ level: string; module: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level, module } = await params;
  const found = getLearnModule(level, module);
  if (!found) return {};
  const kind = found.module.charSet ? "chart" : "list";
  return { title: `${found.level.title} ${found.module.title}${kind === "chart" ? " chart" : ""}` };
}

export default async function ModulePage({ params }: Props) {
  const { level: levelId, module: moduleId } = await params;
  const found = getLearnModule(levelId, moduleId);
  if (!found) notFound();
  const { level, module } = found;
  const base = `/${level.id}/${module.id}`;

  if (module.charSet) {
    return (
      <div className="mx-auto max-w-6xl px-5 pt-8">
        <ModuleHeader
          level={level}
          module={module}
          hint={
            module.charSet.details
              ? `${module.charSet.items.length} kanji · open a kanji for examples, or tap the speaker to hear it`
              : `${module.charSet.items.length} characters · tap any character to hear it`
          }
          actions={
            <>
              <ButtonLink href={`${base}/practice`} variant="primary" size="lg" icon={<PenLine className="size-5" />} className="flex-1 lg:flex-none">
                Practice
              </ButtonLink>
              <ButtonLink href={`${base}/test`} variant="accent" size="lg" icon={<Target className="size-5" />} className="flex-1 lg:flex-none">
                Test
              </ButtonLink>
            </>
          }
        />
        {/* Kanji books (grouped, with examples) use the list view; other sets use the chart. */}
        <div className={module.charSet.details ? "mt-6" : "mt-10"}>
          {module.charSet.details ? <KanjiBook charSet={module.charSet} basePath={base} /> : <CharChart charSet={module.charSet} basePath={base} />}
        </div>
      </div>
    );
  }

  const vocab = module.vocabSet;
  const grammar = module.grammarSet;
  if (!vocab && !grammar) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-5">
      <ModuleHeader
        level={level}
        module={module}
        hint={
          vocab
            ? `${vocab.items.length} words · tap the speaker to hear any word or sentence`
            : `${grammar!.items.length} grammar points · tap the speaker to hear any example`
        }
      />
      <div className="mt-6">{vocab ? <VocabBrowser set={vocab} /> : <GrammarBrowser set={grammar!} />}</div>
    </div>
  );
}
