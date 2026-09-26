import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allCharModules, getModule } from "@/data/levels";
import { TestFlow } from "@/components/session/TestFlow";

export const dynamicParams = false;

export function generateStaticParams() {
  return allCharModules().map(({ level, module }) => ({ level: level.id, module: module.id }));
}

type Props = { params: Promise<{ level: string; module: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level, module } = await params;
  const found = getModule(level, module);
  return { title: found ? `${found.module.title} test · ${found.level.title}` : undefined };
}

export default async function TestPage({ params }: Props) {
  const { level, module } = await params;
  const found = getModule(level, module);
  if (!found) notFound();
  return <TestFlow charSet={found.charSet} title={found.module.title} backHref={`/${level}/${module}`} />;
}
