// A module's page (kana chart, kanji book, word or grammar list), in two versions built ahead of time:
//   preview — /n5/kanji etc. for signed-out visitors: everything members see (sections, groups, counts), but only
//             the first items open; the rest locked (src/data/preview.ts), with Register boxes
//   full    — /full/n5/kanji, which src/proxy.ts serves at the same address (/n5/kanji) to signed-in accounts
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ListChecks, PenLine, Target } from "lucide-react";
import { allModules, getLearnModule } from "@/data/levels";
import { previewCharSet, previewGrammarSet, previewText, previewVocabSet, sectionTotals } from "@/data/preview";
import { ButtonLink } from "@/components/ui/Button";
import { MembersGate } from "@/components/auth/MembersGate";
import { CharChart } from "@/components/chart/CharChart";
import { KanjiBook } from "@/components/kanji/KanjiBook";
import { ModuleHeader } from "@/components/modules/ModuleHeader";
import { GrammarBrowser, VocabBrowser } from "@/components/study/Browsers";

export type ModuleParams = { params: Promise<{ level: string; module: string }> };

export function moduleStaticParams() {
  return allModules().map(({ level, module }) => ({ level: level.id, module: module.id }));
}

export async function moduleMetadata({ params }: ModuleParams): Promise<Metadata> {
  const { level, module } = await params;
  const found = getLearnModule(level, module);
  if (!found) return {};
  const kind = found.module.charSet ? "chart" : "list";
  return {
    title: `${found.level.title} ${found.module.title}${kind === "chart" ? " chart" : ""}`,
    alternates: { canonical: `/${level}/${module}` },
  };
}

export async function ModulePage({ params, preview }: ModuleParams & { preview: boolean }) {
  const { level: levelId, module: moduleId } = await params;
  const found = getLearnModule(levelId, moduleId);
  if (!found) notFound();
  const { level, module } = found;
  const base = `/${level.id}/${module.id}`;

  if (module.charSet) {
    const set = module.charSet;
    const kind = set.details ? "kanji" : "kana";
    const p = preview ? previewCharSet(set) : null;
    const shownSet = p?.set ?? set;
    const lock = p ? { open: p.open, next: base } : undefined;
    return (
      <div className="mx-auto max-w-6xl px-5 pt-8">
        <ModuleHeader
          level={level}
          module={module}
          hint={
            set.details
              ? `${set.items.length} kanji · open a kanji for examples, or tap the speaker to hear it`
              : `${set.items.length} characters · tap any character to hear it`
          }
          actions={
            <>
              <ButtonLink href={`${base}/practice`} variant="primary" size="lg" icon={<PenLine className="size-5" />} className="flex-1 lg:flex-none">
                Practice
              </ButtonLink>
              <ButtonLink href={`${base}/test`} variant="accent" size="lg" icon={<Target className="size-5" />} className="flex-1 lg:flex-none">
                Test
              </ButtonLink>
              {set.details && (
                <ButtonLink href={`${base}/quiz`} variant="outline" size="lg" icon={<ListChecks className="size-5" />} className="flex-1 lg:flex-none">
                  Quiz
                </ButtonLink>
              )}
            </>
          }
        />
        {/* Kanji books (grouped, with examples) use the list view; other sets use the chart. */}
        <div className={set.details ? "mt-6" : "mt-10"}>
          {set.details ? <KanjiBook charSet={shownSet} basePath={base} preview={lock} /> : <CharChart charSet={shownSet} basePath={base} preview={lock} />}
        </div>
        {preview && (
          <MembersGate next={base} title="Register free to see everything" className="mt-10">
            Create a free account to see {previewText(set, kind).all}
            {kind === "kanji" ? " with their meanings, readings, examples and memory tricks" : ", hear them and learn to write them"} — and to
            practice, test yourself and track your progress.
          </MembersGate>
        )}
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
        actions={
          vocab && (
            <ButtonLink href={`${base}/quiz`} variant="primary" size="lg" icon={<ListChecks className="size-5" />} className="flex-1 lg:flex-none">
              Quiz
            </ButtonLink>
          )
        }
      />
      <div className="mt-6">
        {vocab ? (
          <VocabBrowser
            set={preview ? previewVocabSet(vocab) : vocab}
            preview={preview ? { totals: sectionTotals(vocab), all: previewText(vocab, "vocabulary").all, next: base } : undefined}
          />
        ) : (
          <GrammarBrowser
            set={preview ? previewGrammarSet(grammar!) : grammar!}
            preview={preview ? { totals: sectionTotals(grammar!), all: previewText(grammar!, "grammar").all, next: base } : undefined}
          />
        )}
      </div>
    </div>
  );
}
