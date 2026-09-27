"use client";

import { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronsDownUp, ChevronsUpDown, Eye, EyeOff, Layers, Search, SearchX, X } from "lucide-react";
import type { CharSet } from "@/data/types";
import { kanaToRomaji, toHiragana } from "@/data/romaji";
import { warmTextAudio } from "@/lib/audio";
import { kanjiInfoStore, romajiStore } from "@/lib/settings";
import { GroupPicker, type GroupOption } from "@/components/ui/GroupPicker";
import { cn } from "@/components/ui/cn";
import { KanjiGroup } from "./KanjiGroup";

const LEVELS = ["N2", "N3", "N4", "N5"] as const;
const PAGE = 12; // groups rendered per step while scrolling

/**
 * Grouped kanji list: every kanji is a collapsible row; groups can be opened, closed or
 * practised as a whole. Search, level filter and jump-to-group live in a sticky toolbar.
 */
export function KanjiBook({ charSet, basePath }: { charSet: CharSet; basePath: string }) {
  const details = charSet.details ?? {};
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<string>("all");
  const [open, setOpen] = useState<Set<string>>(() => new Set());
  const [limit, setLimit] = useState(PAGE);
  const [romaji, setRomaji] = romajiStore.useValue();
  const deferred = useDeferredValue(query);
  const sentinel = useRef<HTMLDivElement>(null);
  const pendingJump = useRef<string | null>(null);

  useEffect(() => warmTextAudio(), []);

  const indexOf = useMemo(() => new Map(charSet.items.map((k, i) => [k.char, i])), [charSet]);
  const groupIndexOf = useMemo(() => new Map(charSet.sections.flatMap((s) => s.items.map((k, i) => [k.char, i] as const))), [charSet]);
  const [showInfo, setShowInfo] = kanjiInfoStore.useValue();

  // Everything a learner might type: kanji, meaning, readings (kana + romaji), vocabulary.
  const haystack = useMemo(() => {
    const m = new Map<string, string>();
    for (const s of charSet.sections)
      for (const k of s.items) {
        const readings = [...(k.on ?? []), ...(k.kun ?? [])].map((r) => r.replace(".", ""));
        const d = details[k.char];
        m.set(
          k.char,
          [
            k.char,
            k.meaning,
            s.note,
            ...readings,
            ...readings.map(kanaToRomaji),
            ...(d?.vocab ?? []).flatMap((v) => [v.word, v.reading, v.meaning]),
          ]
            .map((t) => toHiragana(t ?? ""))
            .join(" ")
            .toLowerCase(),
        );
      }
    return m;
  }, [charSet, details]);

  // Katakana and hiragana match each other (びん finds the on'yomi ビン).
  const q = toHiragana(deferred.trim().toLowerCase());
  const matches = useMemo(() => {
    if (!q) return null;
    if (/[a-z]/.test(q)) {
      const re = new RegExp(`(^|[^a-z])${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`);
      return (c: string) => re.test(haystack.get(c)!);
    }
    return (c: string) => haystack.get(c)!.includes(q);
  }, [q, haystack]);

  const levelCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const k of charSet.items) counts[k.level ?? ""] = (counts[k.level ?? ""] ?? 0) + 1;
    return counts;
  }, [charSet]);

  const groups = useMemo(
    () =>
      charSet.sections
        .map((s) => ({
          ...s,
          total: s.items.length,
          items: s.items.filter((k) => (level === "all" || k.level === level) && (!matches || matches(k.char))),
        }))
        .filter((g) => g.items.length),
    [charSet, level, matches],
  );
  const mixedLevels = LEVELS.filter((l) => levelCounts[l]).length > 1;
  const groupOptions: GroupOption[] = useMemo(
    () => groups.map((g) => ({ value: g.id, number: g.number, chars: g.items.map((k) => k.char).join(""), note: g.note ?? g.subtitle, count: g.items.length })),
    [groups],
  );
  const shownKanji = groups.reduce((n, g) => n + g.items.length, 0);
  const filtering = !!matches || level !== "all";

  useEffect(() => setLimit(PAGE), [level, q]);
  useEffect(() => {
    const el = sentinel.current;
    if (!el || limit >= groups.length) return;
    const io = new IntersectionObserver((e) => e[0].isIntersecting && setLimit((l) => l + PAGE), { rootMargin: "1200px" });
    io.observe(el);
    return () => io.disconnect();
  }, [limit, groups.length]);

  // Jump to a group: render up to it first, then scroll. Rows above it may still be settling
  // their height (they render lazily), so jump instantly and re-align a few frames later.
  const scrollToGroup = (id: string) => {
    let tries = 0;
    const align = () => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
      if (++tries < 4) setTimeout(() => requestAnimationFrame(align), 120);
    };
    align();
  };
  useEffect(() => {
    const id = pendingJump.current;
    if (id && document.getElementById(id)) {
      pendingJump.current = null;
      scrollToGroup(id);
    }
  });
  const jump = (id: string) => {
    const i = groups.findIndex((g) => g.id === id);
    if (i < 0) return;
    if (document.getElementById(id)) scrollToGroup(id);
    else {
      pendingJump.current = id;
      setLimit((l) => Math.max(l, i + 1));
    }
  };

  const toggle = useCallback((char: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(char)) next.delete(char);
      else next.add(char);
      return next;
    });
  }, []);
  const toggleGroup = useCallback((chars: string[], value: boolean) => {
    setOpen((prev) => {
      const next = new Set(prev);
      for (const c of chars) {
        if (value) next.add(c);
        else next.delete(c);
      }
      return next;
    });
  }, []);

  const visibleChars = groups.slice(0, limit).flatMap((g) => g.items.map((k) => k.char));
  const allOpen = visibleChars.length > 0 && visibleChars.every((c) => open.has(c));
  const pill = (active: boolean) =>
    cn(
      "inline-flex h-10 shrink-0 items-center gap-1.5 rounded-xl border px-3 text-[13px] font-semibold transition active:scale-95",
      active ? "border-ink bg-ink text-white" : "border-line-strong bg-card text-ink-soft hover:border-ink/40 hover:text-ink",
    );

  return (
    <div>
      {/* Toolbar */}
      <div data-kanji-toolbar className="sticky top-14 z-30 -mx-4 space-y-2.5 border-b border-line/60 bg-paper/85 px-4 pb-3 pt-3 backdrop-blur-xl sm:top-16 sm:-mx-5 sm:px-5">
        <div className="flex gap-2">
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">Search kanji</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search kanji, meaning or reading"
              className="h-10 w-full rounded-xl border border-line-strong bg-card pl-10 pr-9 text-[15px] outline-none transition placeholder:text-muted focus:border-ink/50 focus:ring-4 focus:ring-ink/5 [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-lg text-muted hover:bg-ink/5 hover:text-ink"
              >
                <X className="size-4" />
              </button>
            )}
          </label>
          <button
            type="button"
            onClick={() => (allOpen ? setOpen(new Set()) : toggleGroup(visibleChars, true))}
            className={pill(allOpen)}
            title={allOpen ? "Close all kanji" : "Open all kanji shown"}
          >
            {allOpen ? <ChevronsDownUp className="size-4" /> : <ChevronsUpDown className="size-4" />}
            <span className="max-sm:hidden">{allOpen ? "Close all" : "Open all"}</span>
          </button>
          <button
            type="button"
            onClick={() => setShowInfo(!showInfo)}
            aria-pressed={!showInfo}
            aria-label={showInfo ? "Hide meanings and readings" : "Show meanings and readings"}
            title={showInfo ? "Hide meanings and readings (test yourself)" : "Show meanings and readings"}
            className={pill(!showInfo)}
          >
            {showInfo ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
            <span className="max-sm:hidden">{showInfo ? "Hide info" : "Show info"}</span>
          </button>
          <button type="button" onClick={() => setRomaji(!romaji)} aria-pressed={romaji} title="Show romaji" className={pill(romaji)}>
            Aa<span className="max-sm:hidden">Romaji</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Level filter only when the book mixes levels (N2 includes some N5–N3 kanji). */}
          {mixedLevels ? (
            <div role="radiogroup" aria-label="JLPT level" className="no-scrollbar flex min-w-0 flex-1 gap-1 overflow-x-auto">
              {[{ id: "all", label: "All", n: charSet.items.length }, ...LEVELS.filter((l) => levelCounts[l]).map((l) => ({ id: l, label: l, n: levelCounts[l] }))].map((o) => (
                <button
                  key={o.id}
                  type="button"
                  role="radio"
                  aria-checked={level === o.id}
                  onClick={() => setLevel(o.id)}
                  className={cn(
                    "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg px-2.5 text-[13px] font-semibold transition",
                    level === o.id ? "bg-ink text-white" : "bg-ink/5 text-ink-soft hover:bg-ink/10 hover:text-ink",
                  )}
                >
                  {o.label}
                  <span className={cn("text-[11px] tabular-nums", level === o.id ? "text-white/60" : "text-muted")}>{o.n}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex-1" />
          )}
          <div className="shrink-0">
            <GroupPicker
              options={groupOptions}
              value={null}
              onChange={jump}
              label="Jump to group"
              panelClassName="right-0 w-[min(22rem,calc(100vw-2rem))]"
              className="group flex h-8 items-center gap-1.5 rounded-lg border border-kin/40 bg-gradient-to-r from-kin-soft/60 to-kin-soft pl-2.5 pr-2 text-[13px] font-bold text-ink transition hover:border-kin focus-visible:border-kin focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kin/15 aria-expanded:border-kin"
            >
              <Layers className="size-3.5 text-shu" />
              Group
              <ChevronDown className="size-3.5 text-ink-soft transition-transform group-aria-expanded:rotate-180" />
            </GroupPicker>
          </div>
        </div>
        <p className="text-xs font-medium text-muted" aria-live="polite">
          {filtering ? `${shownKanji} kanji in ${groups.length} groups` : `${charSet.items.length} kanji · ${charSet.sections.length} groups`}
        </p>
      </div>

      {/* Groups */}
      {groups.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center text-muted">
          <SearchX className="size-10 opacity-40" />
          <p className="mt-3 font-semibold text-ink-soft">No kanji match “{deferred.trim()}”</p>
          <p className="mt-1 text-sm">Try a meaning (“bottle”), a reading (“びん” / “bin”) or the kanji itself.</p>
        </div>
      ) : (
        <div className="mt-5 space-y-4">
          {groups.slice(0, limit).map((g) => (
            <KanjiGroup
              key={g.id}
              id={g.id}
              number={g.number ?? 0}
              showLevel={mixedLevels}
              note={g.note ?? g.subtitle}
              items={g.items}
              total={g.total}
              details={details}
              openSet={open}
              onToggle={toggle}
              onToggleGroup={toggleGroup}
              setId={charSet.id}
              basePath={basePath}
              indexOf={indexOf}
              groupIndexOf={groupIndexOf}
              showInfo={showInfo}
            />
          ))}
          {limit < groups.length && (
            <div ref={sentinel} className="flex justify-center py-6">
              <button
                type="button"
                onClick={() => setLimit((l) => l + PAGE)}
                className="rounded-xl border border-line-strong bg-card px-4 py-2 text-sm font-semibold text-ink-soft hover:text-ink"
              >
                Show more groups ({groups.length - limit} left)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
