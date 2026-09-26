import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-[13px] font-medium text-muted">
      {items.map((c, i) => (
        <span key={c.label} className="flex items-center gap-1">
          {i > 0 && <ChevronRight className="size-3.5 opacity-50" />}
          {c.href ? (
            <Link href={c.href} className="rounded-md px-1 py-0.5 transition-colors hover:bg-ink/5 hover:text-ink">
              {c.label}
            </Link>
          ) : (
            <span className="px-1 text-ink-soft" aria-current="page">
              {c.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
