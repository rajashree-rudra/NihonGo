"use client";

import { ChevronDown, EyeOff, Lightbulb, Volume2 } from "lucide-react";
import type { KanjiMemory } from "@/data/types";
import { kanaSentenceToRomaji } from "@/data/romaji";
import { speak } from "@/lib/audio";
import { memoryTrickStore, romajiStore } from "@/lib/settings";
import { cn } from "@/components/ui/cn";
import { emphasize, highlight } from "@/components/study/ExampleList";

const PANEL_COLORS = ["bg-ai-soft", "bg-matcha-soft", "bg-kin-soft", "bg-shu-soft"];
const JAPANESE = /[぀-ヿ㐀-鿿⺀-⿟]/;
const TITLE = "Memory trick";

/** The story with each "(日)" shown as a small Japanese chip and the kanji itself in red. */
function Story({ text, char }: { text: string; char: string }) {
  return (
    <>
      {text.split(/\(([^()]+)\)/).map((part, i) =>
        i % 2 && JAPANESE.test(part) ? (
          <span key={i} lang="ja" className="mx-0.5 inline-block rounded-md bg-card px-1 font-jp text-[15px] font-bold leading-snug text-ink [&_b]:text-shu">
            {emphasize(part, char)}
          </span>
        ) : (
          <span key={i}>{i % 2 ? `(${part})` : part}</span>
        ),
      )}
    </>
  );
}

/**
 * Memory trick: an easy story from the kanji's parts and a two-panel emoji cartoon whose speech
 * bubbles say a very short sentence (tap a panel to hear it).
 */
export function MemoryTip({
  memory,
  char,
  heading: Heading = "h4",
}: {
  memory: KanjiMemory;
  char: string;
  /** Heading element, or false when the surrounding box already names it. */
  heading?: "h2" | "h3" | "h4" | false;
}) {
  const [showRomaji] = romajiStore.useValue();
  const first = char.charCodeAt(0) % PANEL_COLORS.length;

  return (
    <section className="space-y-2.5">
      {Heading && <Heading className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">{TITLE}</Heading>}
      {memory.story && (
        <p className="flex gap-2.5 rounded-2xl bg-kin-soft/70 p-3 text-[14px] leading-relaxed text-ink">
          <Lightbulb className="mt-1 size-4 shrink-0 text-kin" />
          <span>
            <Story text={memory.story} char={char} />
          </span>
        </p>
      )}
      {!!memory.comic.length && (
        // Sized by the room the cartoon gets (a container query), not the screen: it sits in narrow
        // columns (phones, the practice sidebar) and wide ones (the kanji list on a computer).
        <div className={cn("@container grid gap-2.5", memory.comic.length > 1 && "grid-cols-2")}>
          {memory.comic.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => void speak(p.ja)}
              aria-label={`Listen: ${p.ja}`}
              className={cn(
                "relative flex min-w-0 flex-col items-center gap-2.5 rounded-2xl border-2 border-ink/80 p-2 pt-3 text-center @min-[26rem]:p-2.5 @min-[26rem]:pt-3",
                "shadow-[3px_3px_0_0_var(--color-ink)] transition active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
                PANEL_COLORS[(first + i) % PANEL_COLORS.length],
              )}
            >
              <span aria-hidden className="whitespace-nowrap text-[2.1rem] leading-none @min-[26rem]:text-5xl @min-[26rem]:tracking-wide">
                {p.scene}
              </span>
              <span className="relative w-full rounded-xl border-2 border-ink/80 bg-card px-1.5 py-1.5 @min-[26rem]:px-2">
                {/* Bubble tail, pointing up at the scene. */}
                <span className="absolute -top-[7px] left-1/2 size-3 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-ink/80 bg-card" />
                <span lang="ja" className="relative block font-jp text-[14px] font-medium leading-snug text-ink @min-[26rem]:text-[15px]">
                  {highlight(p.ja, p.hl, char)}
                </span>
                <span lang="ja" className="relative block font-jp text-[11px] leading-snug text-ink-soft">
                  {highlight(p.kana, p.hlKana)}
                </span>
                {showRomaji && <span className="relative block text-[11px] italic leading-snug text-muted">{kanaSentenceToRomaji(p.kana)}</span>}
              </span>
              <span className="text-[12px] leading-snug text-ink-soft">
                {p.en}
                <Volume2 className="mb-0.5 ml-1 inline size-3.5 text-ink/40" />
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

/**
 * The memory trick under the writing box in practice: open until the learner closes it, and then
 * closed for every kanji after (remembered on this device). In practice it's a hint for writing;
 * in a test it stays in place but locked until the kanji is answered.
 */
export function PracticeMemory({ memory, char, hidden }: { memory: KanjiMemory; char: string; hidden: boolean }) {
  const [open, setOpen] = memoryTrickStore.useValue();

  return (
    <div className="rounded-3xl border border-line bg-card shadow-soft">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        disabled={hidden}
        aria-expanded={!hidden && open}
        aria-label={hidden ? `${TITLE} (shown once you've written the kanji)` : undefined}
        className="flex h-11 w-full items-center gap-2 px-3.5 text-left disabled:cursor-default lg:px-4"
      >
        <Lightbulb className="size-4 shrink-0 text-kin" />
        <span className="flex-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">{TITLE}</span>
        {hidden ? <EyeOff className="size-4 shrink-0 text-muted" /> : <ChevronDown className={cn("size-4 shrink-0 text-muted transition", open && "rotate-180")} />}
      </button>
      {!hidden && open && (
        <div className="px-3 pb-3 lg:px-4 lg:pb-4">
          <MemoryTip memory={memory} char={char} heading={false} />
        </div>
      )}
    </div>
  );
}
