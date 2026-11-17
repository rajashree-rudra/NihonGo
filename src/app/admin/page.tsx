import type { Metadata } from "next";
import Link from "next/link";
import { Ban, Check, Inbox, LogOut, Trash2, X } from "lucide-react";
import { cn } from "@/components/ui/cn";
import { SubmitButton } from "@/components/auth/SubmitButton";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import type { AccessStatus, Profile } from "@/generated/prisma/client";
import { approve, deleteAccount, reject } from "./actions";
import { ResetPassword } from "./ResetPassword";
import { adminSignOut } from "./login/actions";

export const metadata: Metadata = { title: "Admin" };

const TABS: { id: AccessStatus; label: string; empty: string }[] = [
  { id: "pending", label: "Requests", empty: "No requests waiting. New ones appear here." },
  { id: "approved", label: "Approved", empty: "No approved accounts yet." },
  { id: "rejected", label: "Rejected", empty: "No rejected accounts." },
];

const when = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "Asia/Tokyo" });

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const me = await requireAdmin();
  const { tab } = await searchParams;
  const current = TABS.find((t) => t.id === tab) ?? TABS[0];

  const [groups, accounts] = await Promise.all([
    db().profile.groupBy({ by: ["status"], _count: { _all: true } }),
    db().profile.findMany({
      where: { status: current.id },
      // Oldest request first (first come, first served); otherwise most recent decision first.
      orderBy: current.id === "pending" ? { createdAt: "asc" } : { reviewedAt: { sort: "desc", nulls: "last" } },
    }),
  ]);
  const count = (s: AccessStatus) => groups.find((g) => g.status === s)?._count._all ?? 0;

  return (
    <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-5 sm:pt-12">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">Admin</p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight">Access requests</h1>
        </div>
        <div className="flex items-center gap-2 text-[13px]">
          <span className="text-muted">
            Signed in as <span className="font-semibold text-ink-soft">{me.email}</span>
          </span>
          <form action={adminSignOut}>
            <SubmitButton variant="outline" size="sm" pendingLabel="Signing out…">
              <LogOut className="size-4" /> Sign out
            </SubmitButton>
          </form>
        </div>
      </div>

      <nav aria-label="Account lists" className="mt-6 flex gap-1 overflow-x-auto rounded-2xl bg-ink/5 p-1">
        {TABS.map((t) => {
          const on = t.id === current.id;
          const n = count(t.id);
          return (
            <Link
              key={t.id}
              href={`/admin?tab=${t.id}`}
              aria-current={on ? "page" : undefined}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold transition",
                on ? "bg-card text-ink shadow-soft" : "text-muted hover:text-ink",
              )}
            >
              {t.label}
              <span className={cn("rounded-full px-2 py-px text-[12px] font-bold", t.id === "pending" && n ? "bg-shu text-white" : "bg-ink/8 text-ink-soft")}>{n}</span>
            </Link>
          );
        })}
      </nav>

      {accounts.length === 0 ? (
        <div className="mt-6 grid justify-items-center gap-3 rounded-3xl border border-dashed border-line-strong px-6 py-14 text-center text-ink-soft">
          <Inbox className="size-8 text-muted" strokeWidth={1.75} />
          {current.empty}
        </div>
      ) : (
        <ul className="mt-6 space-y-4">
          {accounts.map((a) => (
            <AccountCard key={a.id} account={a} self={a.id === me.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

function AccountCard({ account: a, self }: { account: Profile; self: boolean }) {
  const address = [a.addressLine1, a.addressLine2, a.city, a.region, `${a.postalCode}`, a.country].filter(Boolean).join(", ");
  return (
    <li className="rounded-3xl border border-line bg-card p-5 shadow-soft sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
        <div className="min-w-0">
          <h2 className="flex flex-wrap items-center gap-2 text-lg font-bold">
            {a.fullName}
            {a.role === "admin" && <span className="rounded-full bg-ai-soft px-2 py-px text-[11px] font-bold uppercase tracking-wider text-ai">Admin</span>}
            {self && <span className="rounded-full bg-ink/8 px-2 py-px text-[11px] font-bold uppercase tracking-wider text-ink-soft">You</span>}
          </h2>
          <a href={`mailto:${a.email}`} className="break-all text-sm text-ink-soft hover:text-shu hover:underline">
            {a.email}
          </a>
        </div>
        <p className="text-[13px] text-muted">
          {a.status === "pending" || !a.reviewedAt ? "Requested" : a.status === "approved" ? "Approved" : "Rejected"}{" "}
          {when.format(a.status === "pending" || !a.reviewedAt ? a.createdAt : a.reviewedAt)} JST
        </p>
      </div>

      <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[auto_1fr]">
        <dt className="text-muted">Occupation</dt>
        <dd className="font-medium">{a.occupation}</dd>
        <dt className="text-muted">JLPT</dt>
        <dd className="font-medium">
          {a.passedLevel ? `Passed ${a.passedLevel}` : "None passed yet"} <span className="text-muted">→</span> target {a.targetLevel}
        </dd>
        <dt className="text-muted">Address</dt>
        <dd className="font-medium">{address}</dd>
        {a.status !== "pending" && (
          <>
            <dt className="text-muted">Requested</dt>
            <dd>{when.format(a.createdAt)} JST</dd>
          </>
        )}
      </dl>

      {!self && (
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-4">
          {a.status !== "approved" && (
            <form action={approve.bind(null, a.id)}>
              <SubmitButton variant="accent" size="sm" pendingLabel="Approving…">
                <Check className="size-4" /> Approve
              </SubmitButton>
            </form>
          )}
          {a.status === "pending" && (
            <form action={reject.bind(null, a.id)}>
              <SubmitButton variant="outline" size="sm" pendingLabel="Rejecting…" confirm={`Reject ${a.fullName}'s request?`}>
                <X className="size-4" /> Reject
              </SubmitButton>
            </form>
          )}
          {a.status === "approved" && (
            <>
              <form action={reject.bind(null, a.id)}>
                <SubmitButton variant="outline" size="sm" pendingLabel="Removing…" confirm={`Remove ${a.fullName}'s access to NihonGo?`}>
                  <Ban className="size-4" /> Remove access
                </SubmitButton>
              </form>
              <ResetPassword id={a.id} name={a.fullName} />
            </>
          )}
          {a.status === "rejected" && (
            <form action={deleteAccount.bind(null, a.id)} className="ml-auto">
              <SubmitButton
                variant="ghost"
                size="sm"
                className="text-shu hover:bg-shu-soft hover:text-shu"
                pendingLabel="Deleting…"
                confirm={`Delete ${a.fullName}'s account and details for good? This can't be undone.`}
              >
                <Trash2 className="size-4" /> Delete account
              </SubmitButton>
            </form>
          )}
        </div>
      )}
    </li>
  );
}
