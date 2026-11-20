import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { MembersGate } from "@/components/auth/MembersGate";
import type { CharSetKind } from "@/data/types";

/** Practice or test on a group that isn't in the preview: the group picker stays, with a Register box. */
export function LockedSection({
  title,
  backHref,
  tabs,
  next,
  mode,
  count,
  kind,
}: {
  title: string;
  backHref: string;
  tabs: ReactNode;
  next: string;
  mode: "practice" | "test";
  count: number;
  kind: CharSetKind;
}) {
  const what = kind === "kanji" ? "kanji" : "characters";
  return (
    <div className="mx-auto max-w-2xl px-4 pt-6 sm:px-5 sm:pt-8">
      <Link href={backHref} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition hover:text-ink">
        <ArrowLeft className="size-4" /> {title} chart
      </Link>
      <div className="mt-4">{tabs}</div>
      <MembersGate title={`Register free to ${mode} this group`} next={next} className="mt-6">
        These {count} {what} open when you register — free. Until then you can {mode} the first groups.
      </MembersGate>
    </div>
  );
}
