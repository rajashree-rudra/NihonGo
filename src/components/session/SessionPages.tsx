// Practice and test pages, in two versions built ahead of time (like module pages, see ModulePage.tsx):
//   preview — /n5/kanji/practice etc. for signed-out visitors: every group listed, only the first rows / groups open
//   full    — /full/n5/kanji/practice, served by src/proxy.ts at the same address to signed-in accounts
import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allCharModules, getModule } from "@/data/levels";
import { previewCharSet, previewText } from "@/data/preview";
import { MembersGate } from "@/components/auth/MembersGate";
import { PracticeFlow } from "./PracticeFlow";
import { TestFlow } from "./TestFlow";

export type SessionParams = { params: Promise<{ level: string; module: string }> };
type Mode = "practice" | "test";

export function sessionStaticParams() {
  return allCharModules().map(({ level, module }) => ({ level: level.id, module: module.id }));
}

export async function sessionMetadata({ params }: SessionParams, mode: Mode): Promise<Metadata> {
  const { level, module } = await params;
  const found = getModule(level, module);
  if (!found) return {};
  return { title: `${found.module.title} ${mode} · ${found.level.title}`, alternates: { canonical: `/${level}/${module}/${mode}` } };
}

export async function SessionPage({ params, mode, preview }: SessionParams & { mode: Mode; preview: boolean }) {
  const { level, module } = await params;
  const found = getModule(level, module);
  if (!found) notFound();
  const backHref = `/${level}/${module}`;
  const p = preview ? previewCharSet(found.charSet) : null;
  const set = p?.set ?? found.charSet;
  const lock = p ? { open: p.open, next: `${backHref}/${mode}` } : undefined;
  const text = previewText(found.charSet, found.charSet.details ? "kanji" : "kana");

  // Shown below the session (a locked group shows its own box instead).
  const gate = preview && (
    <div key="gate" className="mx-auto max-w-6xl px-4 pt-10 sm:px-5">
      <MembersGate title={`Register free to ${mode} everything`} next={`${backHref}/${mode}`}>
        You can {mode} {text.shown} for free. Create a free account to {mode} {text.all} — and to keep your progress.
      </MembersGate>
    </div>
  );

  return mode === "practice" ? (
    <Suspense>
      <PracticeFlow charSet={set} title={found.module.title} backHref={backHref} preview={lock} gate={gate} />
    </Suspense>
  ) : (
    <TestFlow charSet={set} title={found.module.title} backHref={backHref} preview={lock} gate={gate} />
  );
}
