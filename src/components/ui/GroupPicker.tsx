"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Check, Layers, Search } from "lucide-react";
import { toHiragana } from "@/data/romaji";
import { cn } from "./cn";

export interface GroupOption {
  value: string;
  /** Group number shown in the badge ("All" rows leave it out). */
  number?: number;
  /** The group's characters, e.g. "乱乳乾札礼". */
  chars: string;
  /** Short hint under the characters (look-alike note or section title). */
  note?: string;
  count: number;
}

interface Props {
  options: GroupOption[];
  value: string | null;
  onChange: (value: string) => void;
  label: string;
  /** Contents of the closed button. */
  children: ReactNode;
  className?: string;
  /** Width/alignment of the open list (default: full width of the button, left aligned). */
  panelClassName?: string;
  /** A row to flag as "Now" (e.g. the group of the kanji being practised in "All groups"). */
  marked?: string | null;
}

/**
 * Designed dropdown for long group lists. A native <select> can't style its open list,
 * so this renders its own listbox: number badges, brush-font kanji, notes, counts and a
 * quick filter, with arrow keys / Enter / Escape support.
 */
export function GroupPicker({ options, value, onChange, label, children, className, panelClassName, marked }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const id = useId();

  const shown = useMemo(() => {
    const q = toHiragana(query.trim().toLowerCase());
    if (!q) return options;
    return options.filter((o) => String(o.number ?? "") === q || o.chars.includes(q) || toHiragana((o.note ?? "").toLowerCase()).includes(q));
  }, [options, query]);

  // Open on the current choice; the filter only takes focus where it won't pop up a phone keyboard.
  // (Options are often rebuilt each render, so read them through a ref instead of re-running this.)
  const latest = useRef({ options, value, marked });
  latest.current = { options, value, marked };
  useEffect(() => {
    if (!open) return;
    setQuery("");
    const { options: opts, value: v, marked: m } = latest.current;
    const at = (x: string | null | undefined) => opts.findIndex((o) => o.value === x);
    setActive(Math.max(0, at(m) >= 0 ? at(m) : at(v)));
    if (window.matchMedia("(pointer: fine)").matches) input.current?.focus({ preventScroll: true });
    else list.current?.focus({ preventScroll: true });
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  useEffect(() => {
    if (query) setActive(0);
  }, [query]);

  // Keep the highlighted row visible.
  useEffect(() => {
    if (open) {
      list.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
    }
  }, [open, active, shown]);

  const choose = (v: string) => {
    onChange(v);
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const step = e.key === "ArrowDown" ? 1 : -1;
      setActive((a) => Math.min(Math.max(0, a + step), shown.length - 1));
    } else if (e.key === "Enter" && shown[active]) {
      e.preventDefault();
      choose(shown[active].value);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      trigger.current?.focus({ preventScroll: true });
    }
  };

  return (
    <div ref={root} className="relative">
      <button
        ref={trigger}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? `${id}-list` : undefined}
        aria-label={label}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className={className}
      >
        {children}
      </button>

      {open && (
        <div
          onKeyDown={onKey}
          className={cn(
            "absolute top-full z-50 mt-2 flex max-h-[min(62vh,28rem)] flex-col overflow-hidden rounded-2xl border border-kin/30 bg-card shadow-lift animate-fade-up [animation-duration:0.18s]",
            panelClassName ?? "inset-x-0",
          )}
        >
          <div className="flex items-center gap-2 border-b border-line bg-gradient-to-r from-kin-soft/70 to-card px-3 py-2">
            <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-shu-soft text-shu">
              <Layers className="size-4" />
            </span>
            <label className="relative flex-1">
              <span className="sr-only">Filter groups</span>
              <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted" />
              <input
                ref={input}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Number, kanji or note…"
                className="h-8 w-full rounded-lg border border-line bg-card pl-8 pr-2 font-jp text-[13px] text-ink outline-none placeholder:text-muted focus:border-kin"
              />
            </label>
          </div>

          <ul ref={list} id={`${id}-list`} role="listbox" aria-label={label} tabIndex={-1} className="flex-1 overflow-y-auto overscroll-contain p-1.5 outline-none">
            {shown.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">No group matches “{query}”.</li>}
            {shown.map((o, i) => {
              const selected = o.value === value;
              return (
                <li key={o.value} role="option" aria-selected={selected} data-index={i}>
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => choose(o.value)}
                    onPointerMove={() => setActive(i)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-2 py-1.5 text-left transition-colors",
                      i === active && !selected && "bg-kin-soft/70",
                      selected && "bg-ink text-white",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-8 min-w-8 shrink-0 place-items-center rounded-lg px-1 text-[12px] font-extrabold tabular-nums",
                        selected ? "bg-shu text-white" : o.number ? "bg-paper text-ink-soft" : "bg-shu-soft text-shu",
                      )}
                    >
                      {o.number ?? <Layers className="size-4" />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        lang="ja"
                        className={cn(
                          "block truncate leading-tight",
                          o.number ? "font-brush text-[19px] tracking-[0.14em]" : "py-0.5 text-[15px] font-bold",
                          selected ? "text-white" : "text-ink",
                        )}
                      >
                        {o.chars}
                      </span>
                      {o.note && <span className={cn("block truncate text-[11px]", selected ? "text-white/60" : "text-muted")}>{o.note}</span>}
                    </span>
                    {o.value === marked && !selected && (
                      <span className="shrink-0 rounded-full bg-shu px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">Now</span>
                    )}
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-bold tabular-nums",
                        selected ? "bg-white/15 text-white" : "bg-ai-soft text-ai",
                      )}
                    >
                      {o.count}
                    </span>
                    <Check className={cn("size-4 shrink-0", selected ? "text-white" : "invisible")} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
