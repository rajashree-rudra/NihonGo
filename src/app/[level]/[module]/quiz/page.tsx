import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allModules, getLearnModule } from "@/data/levels";
import { quizFromKanjiBook, quizFromVocab } from "@/data/quiz";
import { QuizFlow } from "@/components/quiz/QuizFlow";

export const dynamicParams = false;

/** Kanji books (their words) and vocabulary sets have a multiple-choice quiz. */
export function generateStaticParams() {
  return allModules()
    .filter(({ module }) => module.charSet?.details || module.vocabSet)
    .map(({ level, module }) => ({ level: level.id, module: module.id }));
}

type Props = { params: Promise<{ level: string; module: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level, module } = await params;
  const found = getLearnModule(level, module);
  return { title: found ? `${found.module.title} quiz · ${found.level.title}` : undefined };
}

export default async function QuizPage({ params }: Props) {
  const { level, module } = await params;
  const found = getLearnModule(level, module);
  const m = found?.module;
  const quiz = m?.charSet?.details ? quizFromKanjiBook(m.charSet) : m?.vocabSet ? quizFromVocab(m.vocabSet) : null;
  if (!found || !quiz) notFound();
  return <QuizFlow words={quiz.words} groups={quiz.groups} title={found.module.title} backHref={`/${level}/${module}`} />;
}
