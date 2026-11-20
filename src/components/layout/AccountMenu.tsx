"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LogOut, ShieldCheck } from "lucide-react";
import type { ViewerHint } from "@/lib/access";
import { safeNext } from "@/lib/access";
import { signOut } from "@/app/(auth)/actions";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/components/ui/cn";

/** Signed out: Sign in (+ Register from small tablets up). Both come back to this page. */
export function SignedOutActions() {
  const next = encodeURIComponent(safeNext(usePathname()));
  return (
    <>
      <Link href={`/login?next=${next}`} className={buttonClass({ variant: "ghost", size: "sm" })}>
        Sign in
      </Link>
      <Link href={`/register?next=${next}`} className={buttonClass({ variant: "accent", size: "sm", className: "max-sm:hidden" })}>
        Register
      </Link>
    </>
  );
}

/** The signed-in account's initial; opens name, email, admin panel (for admins) and sign out. */
export function AccountMenu({ viewer }: { viewer: ViewerHint }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  const initial = (viewer.name || viewer.email).trim().charAt(0).toUpperCase();

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account"
        className={cn(
          "grid size-9 place-items-center rounded-full bg-ai text-[15px] font-bold text-white transition hover:brightness-110 active:scale-95 dark:text-paper",
          open && "ring-4 ring-ai/20",
        )}
      >
        {initial}
      </button>
      {open && (
        <div role="menu" className="absolute right-0 top-full z-50 mt-2 w-64 animate-fade-up rounded-2xl border border-line bg-card p-1.5 shadow-lift">
          <div className="px-3 py-2.5">
            <p className="truncate font-semibold">{viewer.name || "Your account"}</p>
            <p className="truncate text-[13px] text-muted">{viewer.email}</p>
          </div>
          <div className="my-1 h-px bg-line" />
          {viewer.role === "admin" && (
            <Link role="menuitem" href="/admin" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5 hover:text-ink">
              <ShieldCheck className="size-[18px]" /> Admin panel
            </Link>
          )}
          <form action={signOut}>
            <button type="submit" role="menuitem" className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5 hover:text-ink">
              <LogOut className="size-[18px]" /> Sign out
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
