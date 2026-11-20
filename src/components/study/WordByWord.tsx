"use client";

// Example sentences, word by word. With the "Word by word" switch on (the default), a sentence's
// words are coloured by kind — every verb green, every particle red… — and set out under it as
// small cards in the sentence's order, side by side (so a sentence takes a row or two, not a page):
//   ┌──────┐┌─────────┐┌───────────────┐
//   │ みず  ││         ││               │   reading (furigana)
//   │ 水    ││ を      ││ ください       │
//   │ mizu  ││ o       ││ kudasai       │   romaji (with the Romaji switch)
//   │ water ││ object  ││ please give me│
//   │ NOUN  ││ PARTICLE││ VERB          │
// with a line under them on what its particles do. Seeing the same colour for the same kind of
// word, sentence after sentence, makes the pattern of a Japanese sentence (…noun + particle … verb)
// easy to spot and to remember.
// The colours only wrap the sentence's own text, so the highlighter's character offsets don't move.

import type { ReactNode } from "react";
import { WholeWord } from "lucide-react";
import type { Word, WordKind } from "@/data/types";
import { PARTICLE_NOTES } from "@/data/glosses/words";
import { kanaToRomaji } from "@/data/romaji";
import { romajiStore, wordByWordStore } from "@/lib/settings";
import { cn } from "@/components/ui/cn";

// ---------- Highlighting a word / a kanji (also used without word lists) ----------

/** Show every occurrence of `char` in semibold. */
export function emphasize(text: string, char?: string) {
  if (!char || !text.includes(char)) return text;
  return text.split(char).flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <b key={i} className="font-semibold">
            {char}
          </b>,
          part,
        ],
  );
}

/** Wrap the first occurrence of `target` in a highlight; `char` is shown in semibold throughout. */
export function highlight(text: string, target?: string, char?: string) {
  const i = target ? text.indexOf(target) : -1;
  if (!target || i < 0) return emphasize(text, char);
  return (
    <>
      {emphasize(text.slice(0, i), char)}
      <mark className="rounded bg-kin-soft px-0.5 text-ink">{emphasize(target, char)}</mark>
      {emphasize(text.slice(i + target.length), char)}
    </>
  );
}

/** Part of the sentence starting at `from`, with the highlighted range marked and the kanji in bold. */
function styled(text: string, from: number, hl: readonly [number, number] | null, char?: string): ReactNode {
  const start = hl ? Math.max(hl[0] - from, 0) : 0;
  const end = hl ? Math.min(hl[1] - from, text.length) : 0;
  if (!hl || start >= end) return emphasize(text, char);
  return (
    <>
      {emphasize(text.slice(0, start), char)}
      {/* text-inherit: the browser's own <mark> colour would hide the word's kind colour. */}
      <mark className="rounded-sm bg-kin-soft text-inherit">{emphasize(text.slice(start, end), char)}</mark>
      {emphasize(text.slice(end), char)}
    </>
  );
}

// ---------- Kinds of words ----------

export const KIND_LABEL: Record<WordKind, string> = {
  n: "noun",
  v: "verb",
  a: "adjective",
  d: "adverb",
  p: "particle",
  c: "grammar",
  e: "expression",
};

/** "(topic)" → "topic": a grammar word's job, written without the brackets. */
const meaningOf = (gloss = "") => gloss.replace(/^\((.*)\)$/, "$1");

/** The word in romaji, as it's said: は "wa" and へ "e" as particles, では "dewa", じゃありません "ja arimasen". */
function romajiOf([surface, , reading, kind]: Word) {
  const kana = reading ?? surface;
  if (kind === "p" && kana === "へ") return "e";
  if ((kind === "p" || kind === "e") && kana.endsWith("は")) return kanaToRomaji(kana.slice(0, -1)) + "wa";
  const lead = kana.match(/^(では|じゃ)(.+)$/);
  if (kind === "c" && lead) return `${lead[1] === "では" ? "dewa" : "ja"} ${kanaToRomaji(lead[2])}`;
  return kanaToRomaji(kana);
}

/**
 * A sentence for the inside of a line of text: with the word list on, its words coloured by kind;
 * otherwise plain. `target` is highlighted, `emphasis` (a kanji) in bold.
 */
export function Sentence({ text, words, target, emphasis }: { text: string; words?: Word[]; target?: string; emphasis?: string }) {
  const [on] = wordByWordStore.useValue();
  if (!on || !words?.length) return <>{highlight(text, target, emphasis)}</>;
  const start = target ? text.indexOf(target) : -1;
  const hl = target && start >= 0 ? ([start, start + target.length] as const) : null;
  let offset = 0;
  return (
    <>
      {words.map((w, i) => {
        const from = offset;
        offset += w[0].length;
        return w[3] ? (
          <span key={i} data-kind={w[3]} className="kind-text">
            {styled(w[0], from, hl, emphasis)}
          </span>
        ) : (
          <span key={i}>{styled(w[0], from, hl, emphasis)}</span>
        );
      })}
    </>
  );
}

/**
 * The sentence's words in order, as small cards side by side that wrap like the sentence itself:
 * the word, its reading and romaji, its meaning and what kind of word it is — in the kind's colour.
 * Under them, one flowing line on what the sentence's particles do.
 */
export function WordList({ words, className }: { words?: Word[]; className?: string }) {
  const [on] = wordByWordStore.useValue();
  const [showRomaji] = romajiStore.useValue();
  const list = words?.filter((w) => w[3] && w[1]);
  if (!on || !list?.length) return null;
  const particles = [...new Set(list.filter((w) => w[3] === "p" && PARTICLE_NOTES[w[0]]).map((w) => w[0]))];
  return (
    <div className={className}>
      <ol aria-label="Word by word" className="flex flex-wrap gap-1.5">
        {list.map((w, i) => {
          const [surface, gloss, reading, kind] = w;
          return (
            <li
              key={i}
              data-kind={kind}
              className="flex min-w-[2.75rem] max-w-[11rem] grow flex-col rounded-xl border-t-[3px] border-[var(--kind)] bg-[color-mix(in_srgb,var(--kind)_8%,transparent)] px-2 pb-1.5 pt-0.5 leading-tight"
            >
              {/* The reading as furigana above the word; kana words keep the same space so the words line up. */}
              <ruby lang="ja" className="font-jp text-[17px] font-bold text-[color:var(--kind)] [ruby-position:over]">
                {surface}
                <rt className="text-[10px] font-medium text-ink-soft">{reading ?? " "}</rt>
              </ruby>
              {showRomaji && <span className="text-[11px] italic text-muted">{romajiOf(w)}</span>}
              <span className={cn("mt-0.5 text-[13px] font-semibold leading-snug text-[color:var(--kind)]", kind === "c" && "italic")}>{meaningOf(gloss)}</span>
              <span className="mt-auto pt-0.5 text-[8.5px] font-bold uppercase tracking-[0.06em] text-[color:var(--kind)] opacity-70">{KIND_LABEL[kind!]}</span>
            </li>
          );
        })}
        {/* Takes up what's left of the last row, so only the full rows stretch their cards edge to edge. */}
        <li aria-hidden className="grow-[999]" />
      </ol>
      {!!particles.length && (
        <p className="mt-1.5 text-[12px] leading-relaxed text-ink-soft">
          {particles.map((p) => (
            <span key={p} className="mr-3 last:mr-0">
              <b lang="ja" data-kind="p" className="font-jp font-bold text-[color:var(--kind)]">
                {p}
              </b>{" "}
              {PARTICLE_NOTES[p]}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

/** The "Word by word" switch for a toolbar; `pill` gives the toolbar's button style. */
export function WordByWordToggle({ pill, label = "sm" }: { pill: (active: boolean) => string; label?: "always" | "sm" }) {
  const [on, setOn] = wordByWordStore.useValue();
  return (
    <button
      type="button"
      onClick={() => setOn(!on)}
      aria-pressed={on}
      title={on ? "Hide the word-by-word meanings" : "Show each word's meaning, coloured by kind of word"}
      className={pill(on)}
    >
      <WholeWord className="size-4 shrink-0" />
      <span className={label === "sm" ? "max-sm:hidden" : undefined}>Word by word</span>
    </button>
  );
}

/** Small "Word by word" switch for the heading above a list of sentences. */
export function WordByWordChip() {
  return (
    <WordByWordToggle
      label="always"
      pill={(active) =>
        cn(
          "inline-flex h-7 shrink-0 items-center gap-1 rounded-lg border px-2 text-[11px] font-bold transition active:scale-95 [&_svg]:size-3.5",
          active ? "border-ink bg-ink text-white" : "border-line-strong bg-card text-ink-soft hover:border-ink/40 hover:text-ink",
        )
      }
    />
  );
}
