import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUp, LogOut, MoreHorizontal, Search, Trash2, Users } from "lucide-react";
import { cn } from "@/components/ui/cn";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SubmitButton } from "@/components/auth/SubmitButton";
import { requireAdmin } from "@/lib/auth";
import { countryName } from "@/lib/countries";
import { ageOn, formatDate, formatDateTime, formatDayJst, formatDuration, timeAgo } from "@/lib/time";
import { deleteAccount } from "./actions";
import { adminSignOut } from "./login/actions";
import { ResetPassword } from "./ResetPassword";
import { loadUsers, type LevelProgress, type UserRow } from "./users";

export const metadata: Metadata = { title: "Admin · Users" };

type SortKey = "name" | "registered" | "signin" | "active" | "today" | "week" | "total" | `level:${string}`;

const pct = (p: LevelProgress) => (p.total ? p.learned / p.total : 0);

function sortValue(u: UserRow, key: SortKey): string | number {
  switch (key) {
    case "name":
      return u.fullName.toLowerCase();
    case "registered":
      return u.createdAt.getTime();
    case "signin":
      return u.lastSignInAt?.getTime() ?? 0;
    case "active":
      return u.lastActiveAt?.getTime() ?? 0;
    case "today":
    case "week":
    case "total":
      return u[key];
    default: {
      const level = u.progress.find((p) => `level:${p.level}` === key);
      return level ? pct(level) : 0;
    }
  }
}

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ q?: string; sort?: string; dir?: string }> }) {
  const me = await requireAdmin();
  const params = await searchParams;
  const users = await loadUsers();
  const levels = users[0]?.progress.map((p) => p.level) ?? [];

  const q = (params.q ?? "").trim().toLowerCase();
  const sort = (params.sort ?? "active") as SortKey;
  const dir = params.dir === "asc" ? 1 : -1;
  const shown = users
    .filter((u) => !q || u.fullName.toLowerCase().includes(q) || u.email.includes(q))
    .sort((a, b) => {
      const x = sortValue(a, sort);
      const y = sortValue(b, sort);
      return (x < y ? -1 : x > y ? 1 : 0) * dir || a.fullName.localeCompare(b.fullName);
    });

  const sum = (f: (u: UserRow) => number) => users.reduce((n, u) => n + f(u), 0);
  const stats = [
    { label: "Users", value: String(users.length) },
    { label: "Studied today", value: String(users.filter((u) => u.today > 0).length) },
    { label: "Studied in 7 days", value: String(users.filter((u) => u.week > 0).length) },
    { label: "Study time today", value: formatDuration(sum((u) => u.today)) },
    { label: "Study time, all", value: formatDuration(sum((u) => u.total)) },
  ];

  const header = (key: SortKey, label: string, align: "left" | "right" = "right") => {
    const on = sort === key;
    const next = new URLSearchParams({ ...(q && { q }), sort: key, dir: on && dir === -1 ? "asc" : "desc" });
    return (
      <th key={key} scope="col" aria-sort={on ? (dir === 1 ? "ascending" : "descending") : undefined} className={cn("whitespace-nowrap px-3 py-2.5 font-semibold", align === "right" ? "text-right" : "text-left")}>
        <Link href={`/admin?${next}`} className={cn("inline-flex items-center gap-1 hover:text-ink", on ? "text-ink" : "text-muted")}>
          {label}
          {on && (dir === 1 ? <ArrowUp className="size-3.5" /> : <ArrowDown className="size-3.5" />)}
        </Link>
      </th>
    );
  };

  return (
    <div className="mx-auto max-w-[96rem] px-4 pt-8 sm:px-5 sm:pt-12">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">Admin</p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight">Users</h1>
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

      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-line bg-card px-4 py-3 shadow-soft">
            <dt className="text-[12px] font-semibold text-muted">{s.label}</dt>
            <dd className="mt-0.5 text-2xl font-extrabold tabular-nums tracking-tight">{s.value}</dd>
          </div>
        ))}
      </dl>

      <form action="/admin" className="mt-6 flex max-w-md items-center gap-2">
        <input type="hidden" name="sort" value={sort} />
        <input type="hidden" name="dir" value={dir === 1 ? "asc" : "desc"} />
        <label className="relative flex-1">
          <span className="sr-only">Search users</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            name="q"
            defaultValue={params.q}
            placeholder="Search by name or email"
            className="h-10 w-full rounded-xl border border-line-strong bg-card pl-9 pr-3 text-sm outline-none transition placeholder:text-muted focus:border-ink/50 focus:ring-4 focus:ring-ink/5"
          />
        </label>
      </form>

      <p className="mt-4 text-[12px] text-muted">
        Study time counts while the site is open, in front and used in the last 2 minutes. Days are Japan time; “7 days” includes today.
        Progress = characters written correctly and vocabulary answered correctly at least once — hover a level for the details.
      </p>

      {shown.length === 0 ? (
        <div className="mt-4 grid justify-items-center gap-3 rounded-3xl border border-dashed border-line-strong px-6 py-14 text-center text-ink-soft">
          <Users className="size-8 text-muted" strokeWidth={1.75} />
          {q ? "No one matches your search." : "No one has registered yet."}
        </div>
      ) : (
        <div className="mt-3 overflow-x-auto rounded-3xl border border-line bg-card shadow-soft">
          <table className="w-full border-collapse text-[13px]">
            <thead className="border-b border-line bg-ink/[0.025]">
              <tr>
                {header("name", "User", "left")}
                <th scope="col" className="px-3 py-2.5 text-left font-semibold text-muted">
                  Country
                </th>
                <th scope="col" className="px-3 py-2.5 text-left font-semibold text-muted">
                  Target
                </th>
                {header("registered", "Registered", "left")}
                {header("signin", "Last sign-in", "left")}
                {header("active", "Last active", "left")}
                {header("today", "Today")}
                {header("week", "7 days")}
                {header("total", "Total")}
                {levels.map((l) => header(`level:${l}`, l))}
                <th scope="col" className="px-3 py-2.5">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {shown.map((u) => (
                <UserRowView key={u.id} user={u} self={u.id === me.id} />
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="mt-3 text-right text-[12px] text-muted">
        {shown.length} of {users.length} users · times in Japan time (JST)
      </p>
    </div>
  );
}

function When({ date }: { date: Date | null }) {
  if (!date) return <span className="text-muted">—</span>;
  return (
    <time dateTime={date.toISOString()} title={`${formatDateTime(date)} JST`} className="whitespace-nowrap">
      {timeAgo(date)}
    </time>
  );
}

function UserRowView({ user: u, self }: { user: UserRow; self: boolean }) {
  const address = [u.area, u.city, u.region, u.postalCode].filter(Boolean).join(", ");
  return (
    <tr className="border-b border-line align-top last:border-0 hover:bg-ink/[0.02]">
      <td className="min-w-56 px-3 py-3">
        <details className="group">
          <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <span className="flex flex-wrap items-center gap-1.5 font-semibold text-ink group-open:text-shu">
              {u.fullName}
              {u.role === "admin" && <span className="rounded-full bg-ai-soft px-1.5 py-px text-[10px] font-bold uppercase tracking-wider text-ai">Admin</span>}
              {self && <span className="rounded-full bg-ink/8 px-1.5 py-px text-[10px] font-bold uppercase tracking-wider text-ink-soft">You</span>}
            </span>
            <span className="block break-all text-muted">{u.email}</span>
          </summary>
          <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-xl bg-ink/[0.03] p-2.5 text-[12px]">
            <dt className="text-muted">Born</dt>
            <dd>{u.dateOfBirth ? `${formatDate(u.dateOfBirth)} (age ${ageOn(u.dateOfBirth)})` : "—"}</dd>
            <dt className="text-muted">Address</dt>
            <dd>{address || "—"}</dd>
            <dt className="text-muted">Registered</dt>
            <dd>{formatDateTime(u.createdAt)} JST</dd>
            {u.progress.map((p) => (
              <ProgressDetail key={p.level} progress={p} />
            ))}
          </dl>
        </details>
      </td>
      <td className="whitespace-nowrap px-3 py-3">{countryName(u.country)}</td>
      <td className="px-3 py-3 font-semibold">{u.targetLevel}</td>
      <td className="whitespace-nowrap px-3 py-3">{formatDayJst(u.createdAt)}</td>
      <td className="px-3 py-3">
        <When date={u.lastSignInAt} />
      </td>
      <td className="px-3 py-3">
        <When date={u.lastActiveAt} />
      </td>
      <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums">{formatDuration(u.today)}</td>
      <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums">{formatDuration(u.week)}</td>
      <td className="whitespace-nowrap px-3 py-3 text-right font-semibold tabular-nums">{formatDuration(u.total)}</td>
      {u.progress.map((p) => (
        <td key={p.level} className="min-w-24 px-3 py-3 text-right" title={p.parts.map((x) => `${x.label} ${x.learned}/${x.total}`).join(" · ")}>
          <span className="font-semibold tabular-nums">{Math.round(pct(p) * 100)}%</span>
          <ProgressBar value={p.learned} max={p.total} className="ml-auto mt-1 w-16" />
        </td>
      ))}
      <td className="px-2 py-2 text-right">{!self && <RowActions user={u} />}</td>
    </tr>
  );
}

function ProgressDetail({ progress: p }: { progress: LevelProgress }) {
  return (
    <>
      <dt className="text-muted">{p.level}</dt>
      <dd>
        {p.parts.map((x) => `${x.label} ${x.learned}/${x.total}`).join(" · ")}
      </dd>
    </>
  );
}

function RowActions({ user: u }: { user: UserRow }) {
  return (
    <details className="relative inline-block text-left">
      <summary aria-label={`Actions for ${u.fullName}`} className="grid size-8 cursor-pointer list-none place-items-center rounded-lg text-muted hover:bg-ink/5 hover:text-ink [&::-webkit-details-marker]:hidden">
        <MoreHorizontal className="size-4" />
      </summary>
      <div className="absolute right-0 z-20 mt-1 grid w-max min-w-48 gap-1 rounded-2xl border border-line bg-card p-1.5 shadow-lift">
        <ResetPassword id={u.id} name={u.fullName} />
        <form action={deleteAccount.bind(null, u.id)}>
          <SubmitButton
            variant="ghost"
            size="sm"
            className="w-full justify-start text-shu hover:bg-shu-soft hover:text-shu"
            pendingLabel="Deleting…"
            confirm={`Delete ${u.fullName}'s account, details and study history for good? This can't be undone.`}
          >
            <Trash2 className="size-4" /> Delete account
          </SubmitButton>
        </form>
      </div>
    </details>
  );
}
