"use client";

import { memo } from "react";
import { Volume2 } from "lucide-react";
import type { PartOfSpeech, VocabEntry } from "@/data/types";
import { wordSpeech } from "@/data/speech";
import { speak } from "@/lib/audio";
import { romajiStore } from "@/lib/settings";
import { ExamplesToggle } from "./Collapsible";
import { ExampleList } from "./ExampleList";

const POS_LABEL: Record<PartOfSpeech, string> = {
  noun: "Noun",
  pronoun: "Pronoun",
  "verb-u": "う-verb",
  "verb-ru": "る-verb",
  "verb-irr": "Irregular verb",
  "suru-verb": "する-noun",
  "i-adj": "い-adjective",
  "na-adj": "な-adjective",
  adverb: "Adverb",
  conjunction: "Conjunction",
  expression: "Expression",
  counter: "Counter",
  number: "Number",
  particle: "Particle",
  prefix: "Prefix",
  suffix: "Suffix",
  interjection: "Interjection",
};

const POS_HINT: Partial<Record<PartOfSpeech, string>> = {
  "verb-u": "Godan verb: the last sound changes (う→い) in the ます-form",
  "verb-ru": "Ichidan verb: drop る and add ます",
  "verb-irr": "Irregular verb (する / 来る)",
  "suru-verb": "A noun that becomes a verb with する",
  "i-adj": "Ends in い and conjugates itself",
  "na-adj": "Takes な before a noun",
};

/** What to highlight in example sentences: the word, or its stem for words that conjugate. */
function highlightTarget(e: VocabEntry) {
  const w = e.word.replace(/[～〜]/g, "");
  const conjugates = e.pos.startsWith("verb") || e.pos === "i-adj";
  return conjugates && w.length > 1 ? w.slice(0, -1) : w;
}

export const VocabCard = memo(function VocabCard({ entry }: { entry: VocabEntry }) {
  const [showRomaji] = romajiStore.useValue();
  const showReading = entry.reading !== entry.word;
  return (
    <article className="rounded-3xl border border-line bg-card p-4 shadow-soft [content-visibility:auto] [contain-intrinsic-size:auto_9rem] sm:p-5">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
            <h3 lang="ja" className="font-jp text-2xl font-bold leading-tight text-ink">
              {entry.word}
            </h3>
            {showReading && (
              <span lang="ja" className="font-jp text-[15px] text-ink-soft">
                {entry.reading}
              </span>
            )}
            {showRomaji && <span className="text-sm italic text-muted">{entry.romaji}</span>}
          </div>
          <p className="mt-1.5 text-[15px] font-semibold leading-snug text-ink">{entry.meaning}</p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span title={POS_HINT[entry.pos]} className="rounded-full bg-ai-soft px-2 py-0.5 text-[11px] font-bold text-ai">
              {POS_LABEL[entry.pos]}
            </span>
            {entry.masu && (
              <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[11px] font-semibold text-ink-soft">
                polite: <span className="font-jp">{entry.masu}</span>
              </span>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={() => void speak(wordSpeech(entry))}
          aria-label={`Listen to ${entry.word}`}
          className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink/5 text-ink transition hover:bg-ink hover:text-white active:scale-90"
        >
          <Volume2 className="size-[18px]" />
        </button>
      </div>
      <div className="mt-2 border-t border-line/70 pt-1.5">
        <ExamplesToggle count={entry.examples.length}>
          <ExampleList examples={entry.examples} target={highlightTarget(entry)} markId={`vocab:${entry.word}:${entry.reading}`} />
        </ExamplesToggle>
      </div>
    </article>
  );
});
