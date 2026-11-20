"use client";

import { LogIn, UserPlus } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/components/ui/cn";
import { useViewer } from "@/lib/viewer";

/**
 * Register / Sign in for visitors. Shown from the first paint (most visitors here are signed out) and hidden
 * once the page knows someone is signed in.
 */
export function SignedOutCta({ className, band }: { className?: string; band?: boolean }) {
  const viewer = useViewer();
  if (viewer) return null;

  const buttons = (
    <div className="flex flex-col justify-center gap-3 sm:flex-row">
      <ButtonLink href="/register" variant="accent" size="lg" icon={<UserPlus className="size-5" />}>
        Create a free account
      </ButtonLink>
      <ButtonLink href="/login" variant="outline" size="lg" icon={<LogIn className="size-5" />}>
        Sign in
      </ButtonLink>
    </div>
  );

  if (!band) return <div className={className}>{buttons}</div>;
  return (
    <section className={cn("rounded-3xl border border-line bg-card p-6 text-center shadow-soft sm:p-10", className)}>
      <p className="font-brush text-4xl text-shu">はじめよう</p>
      <h2 className="mt-2 text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">Start learning — it&apos;s free</h2>
      <p className="mx-auto mt-2 max-w-lg text-pretty text-ink-soft">
        Look around first: every chart and list shows its first part. With a free account you get everything — all
        the kanji, words and grammar, writing practice, tests and quizzes, and your progress saved.
      </p>
      <div className="mt-6">{buttons}</div>
    </section>
  );
}
