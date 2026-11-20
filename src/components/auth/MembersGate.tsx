import type { ReactNode } from "react";
import { Lock, LogIn, UserPlus } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/components/ui/cn";

/**
 * Where a preview stops: what's behind it, and Register / Sign in that come back to `next`.
 * `fade`: the content above fades out into it (end of a list).
 */
export function MembersGate({
  title = "Register free to see the rest",
  children,
  next,
  fade,
  className,
}: {
  title?: string;
  children: ReactNode;
  next: string;
  fade?: boolean;
  className?: string;
}) {
  const back = encodeURIComponent(next);
  return (
    <div className={cn("relative", className)}>
      {fade && <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-28 h-28 bg-gradient-to-b from-transparent to-paper" />}
      <section className="relative mx-auto max-w-2xl rounded-3xl border border-line bg-card p-6 text-center shadow-lift sm:p-8">
        <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-shu-soft text-shu">
          <Lock className="size-5" />
        </span>
        <h2 className="mt-4 text-balance text-xl font-extrabold tracking-tight sm:text-2xl">{title}</h2>
        <p className="mx-auto mt-2 max-w-md text-pretty text-ink-soft">{children}</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={`/register?next=${back}`} variant="accent" size="lg" icon={<UserPlus className="size-5" />}>
            Create a free account
          </ButtonLink>
          <ButtonLink href={`/login?next=${back}`} variant="outline" size="lg" icon={<LogIn className="size-5" />}>
            Sign in
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
