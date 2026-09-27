"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { SearchX } from "lucide-react";
import { warmTextAudio } from "@/lib/audio";
import { TabBar } from "@/components/ui/TabBar";
import { cn } from "@/components/ui/cn";
import { StudyToolbar } from "./StudyToolbar";

const ALL = "all";
const PAGE = 60;

export interface BrowserSection<T> {
  id: string;
  title: string;
  tab: string;
  jp: string;
  items: T[];
}

interface Props<T> {
  sections: BrowserSection<T>[];
  /** Lower-cased text a search query is matched against. */
  searchText: (item: T) => string;
  renderItem: (item: T, index: number) => ReactNode;
  itemKey: (item: T) => string;
  noun: [singular: string, plural: string];
  placeholder: string;
  /** Grid for small cards (vocabulary) or a single column (grammar). */
  layout: "grid" | "list";
}

const normalise = (s: string) => s.toLowerCase().replace(/\s+/g, "");

/**
 * Shared vocabulary/grammar browser: section tabs (All + categories, kept in ?s=), search
 * across everything, and the example/romaji display switches.
 */
export function StudyBrowser<T>({ sections, searchText, renderItem, itemKey, noun, placeholder, layout }: Props<T>) {
  const [section, setSection] = useState(ALL);
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query);

  useEffect(() => warmTextAudio(), []);

  // Restore the tab from the URL after hydration.
  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("s");
    if (s && sections.some((x) => x.id === s)) setSection(s);
  }, [sections]);

  const choose = (s: string) => {
    setSection(s);
    const url = new URL(window.location.href);
    if (s === ALL) url.searchParams.delete("s");
    else url.searchParams.set("s", s);
    window.history.replaceState(null, "", url);
  };

  const total = sections.reduce((n, s) => n + s.items.length, 0);
  const index = useMemo(() => {
    const m = new Map<T, { spaced: string; compact: string }>();
    for (const s of sections)
      for (const it of s.items) {
        const text = searchText(it).toLowerCase();
        m.set(it, { spaced: text, compact: normalise(text) });
      }
    return m;
  }, [sections, searchText]);

  // A search looks through every section; otherwise show the chosen tab.
  const q = normalise(deferred);
  const matches = useMemo(() => {
    const raw = deferred.trim().toLowerCase();
    if (!raw) return null;
    // English/romaji: match from the start of a word ("eat" finds "to eat", not "weather").
    if (/[a-z]/.test(raw)) {
      const re = new RegExp(`(^|[^a-z])${raw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`);
      return (it: T) => re.test(index.get(it)!.spaced);
    }
    return (it: T) => index.get(it)!.compact.includes(q);
  }, [deferred, q, index]);

  const visible = useMemo(() => {
    const pool = matches ? sections : sections.filter((s) => section === ALL || s.id === section);
    return pool.map((s) => ({ ...s, items: matches ? s.items.filter(matches) : s.items })).filter((s) => s.items.length);
  }, [sections, section, matches]);
  const shown = visible.reduce((n, s) => n + s.items.length, 0);

  // Render progressively: the first PAGE cards, then more as the sentinel scrolls into view.
  const [limit, setLimit] = useState(PAGE);
  const sentinel = useRef<HTMLDivElement>(null);
  useEffect(() => setLimit(PAGE), [section, q]);
  useEffect(() => {
    const el = sentinel.current;
    if (!el || limit >= shown) return;
    const io = new IntersectionObserver((entries) => entries[0].isIntersecting && setLimit((l) => l + PAGE), { rootMargin: "800px" });
    io.observe(el);
    return () => io.disconnect();
  }, [limit, shown]);

  let budget = limit;
  const rendered = visible
    .map((s) => {
      const items = s.items.slice(0, Math.max(0, budget));
      budget -= items.length;
      return { ...s, shownItems: items };
    })
    .filter((s) => s.shownItems.length);

  const tabs = [{ id: ALL, label: "All", count: total }, ...sections.map((s) => ({ id: s.id, label: s.tab, count: s.items.length }))];
  const word = (n: number) => (n === 1 ? noun[0] : noun[1]);
  let counter = 0;

  return (
    <div>
      <div className="sticky top-14 z-30 -mx-4 space-y-3 border-b border-line/60 bg-paper/85 px-4 pb-3 pt-3 backdrop-blur-xl sm:top-16 sm:-mx-5 sm:px-5">
        <TabBar tabs={tabs} value={q ? "" : section} onChange={(s) => (setQuery(""), choose(s))} label={`${noun[1]} category`} />
        <StudyToolbar
          query={query}
          onQuery={setQuery}
          placeholder={placeholder}
          summary={q ? `${shown} ${word(shown)} found for “${deferred.trim()}”` : `${shown} ${word(shown)}`}
        />
      </div>

      {visible.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center text-muted">
          <SearchX className="size-10 opacity-40" />
          <p className="mt-3 font-semibold text-ink-soft">No {noun[1]} match “{deferred.trim()}”</p>
          <p className="mt-1 text-sm">Try English, kana or romaji — e.g. “eat”, “たべる” or “taberu”.</p>
        </div>
      ) : (
        <div className="mt-6 space-y-10">
          {rendered.map((s) => (
            <section key={s.id} aria-labelledby={`sec-${s.id}`}>
              <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-line pb-3">
                <h2 id={`sec-${s.id}`} className="text-lg font-extrabold tracking-tight">
                  {s.title}
                </h2>
                <span className="shrink-0 font-jp text-sm text-muted">
                  {s.jp} · {s.items.length}
                </span>
              </div>
              <div className={cn(layout === "grid" ? "grid items-start gap-3 md:grid-cols-2 xl:grid-cols-3" : "mx-auto max-w-3xl space-y-4")}>
                {s.shownItems.map((it) => (
                  <div key={itemKey(it)} className="min-w-0">
                    {renderItem(it, ++counter)}
                  </div>
                ))}
              </div>
            </section>
          ))}
          {limit < shown && (
            <div ref={sentinel} className="flex justify-center py-6">
              <button
                type="button"
                onClick={() => setLimit((l) => l + PAGE)}
                className="rounded-xl border border-line-strong bg-card px-4 py-2 text-sm font-semibold text-ink-soft hover:text-ink"
              >
                Show more ({shown - limit} left)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
