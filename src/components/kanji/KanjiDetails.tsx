"use client";

import Link from "next/link";
import { PenLine, Volume2 } from "lucide-react";
import type { CharItem, KanjiDetail, KanjiVocab } from "@/data/types";
import { formatKun } from "@/data/builders";
import { kanaToRomaji } from "@/data/romaji";
import { speak } from "@/lib/audio";
import { romajiStore } from "@/lib/settings";
import { ExampleList, emphasize } from "@/components/study/ExampleList";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { StrokeOrder } from "./StrokeOrder";

const unbold = (s: string) => s.replace(/\*\*/g, "");

/** Render "…**word**…" with the word highlighted and the kanji in semibold. */
function Marked({ text, char }: { text: string; char: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 ? (
          <mark key={i} className="rounded bg-kin-soft px-0.5 text-ink">
            {emphasize(p, char)}
          </mark>
        ) : (
          <span key={i}>{emphasize(p, char)}</span>
        ),
      )}
    </>
  );
}

function Readings({ label, list, display }: { label: string; list: string[]; display: (r: string) => string }) {
  if (!list.length) return null;
  return (
    <div className="flex items-start gap-3">
      <dt className="w-9 shrink-0 pt-1 text-[11px] font-bold uppercase tracking-wider text-muted">{label}</dt>
      <dd className="flex flex-wrap gap-1.5">
        {list.map((r) => (
          <span key={r} className="inline-flex items-baseline gap-1.5 rounded-lg bg-paper px-2 py-1">
            <span lang="ja" className="font-jp text-[15px] text-ink">
              {display(r)}
            </span>
            <span className="text-[11px] text-muted">{kanaToRomaji(r.replace(".", ""))}</span>
          </span>
        ))}
      </dd>
    </div>
  );
}

function VocabRow({ v, char, englishOnly }: { v: KanjiVocab; char: string; englishOnly?: boolean }) {
  const [showRomaji] = romajiStore.useValue();
  return (
    <li className="flex gap-3 py-3">
      {englishOnly ? (
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="text-[15px] font-bold text-ink first-letter:uppercase">{v.meaning}</span>
            {v.level && <LevelBadge level={v.level} />}
          </div>
          {v.exampleEn && <p className="mt-0.5 text-[14px] text-ink-soft">{v.exampleEn}</p>}
        </div>
      ) : (
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span lang="ja" className="font-jp text-[17px] font-bold text-ink">
            {v.word}
          </span>
          <span lang="ja" className="font-jp text-[14px] text-ink-soft">
            {v.reading}
          </span>
          {showRomaji && <span className="text-[12px] italic text-muted">{kanaToRomaji(v.reading.split("・")[0])}</span>}
          {v.level && <LevelBadge level={v.level} />}
        </div>
        <p className="mt-0.5 text-[14px] text-ink-soft">{v.meaning}</p>
        {v.example && (
          <p lang="ja" className="mt-1 font-jp text-[14px] text-ink">
            <Marked text={v.example} char={char} />
          </p>
        )}
        {v.exampleEn && <p className="mt-0.5 text-[13px] text-muted">{v.exampleEn}</p>}
      </div>
      )}
      <button
        type="button"
        onClick={() => void speak(v.example ? unbold(v.example) : v.reading.split("・")[0])}
        aria-label={`Listen: ${v.word}`}
        className="grid size-9 shrink-0 place-items-center self-center rounded-xl text-ink-soft transition hover:bg-ink hover:text-white active:scale-90"
      >
        <Volume2 className="size-4" />
      </button>
    </li>
  );
}

/** "More vocabulary" words with meaning, level, example and audio. */
export function VocabList({ vocab, char, englishOnly }: { vocab: KanjiVocab[]; char: string; englishOnly?: boolean }) {
  return (
    <ul className="divide-y divide-line/70 rounded-2xl border border-line bg-card px-3 sm:px-4">
      {vocab.map((v) => (
        <VocabRow key={v.word} v={v} char={char} englishOnly={englishOnly} />
      ))}
    </ul>
  );
}

interface Props {
  item: CharItem;
  detail: KanjiDetail;
  setId: string;
  practiceHref: string;
}

export function KanjiDetails({ item, detail, setId, practiceHref }: Props) {
  return (
    <div className="grid gap-5 border-t border-line/70 bg-paper/40 px-3 pb-5 pt-4 sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:px-5 lg:gap-7">
      <div className="flex gap-3 sm:flex-col">
        <div className="w-32 shrink-0 sm:w-full">
          <StrokeOrder setId={setId} char={item.char} />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <dl className="space-y-2 sm:hidden">
            <Readings label="On" list={item.on ?? []} display={(r) => r} />
            <Readings label="Kun" list={item.kun ?? []} display={formatKun} />
          </dl>
          <Link
            href={practiceHref}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-ink px-3 text-sm font-semibold text-white transition hover:bg-ink-soft active:scale-95"
          >
            <PenLine className="size-4" /> Practice writing
          </Link>
        </div>
      </div>

      <div className="min-w-0 space-y-5">
        <dl className="hidden space-y-2 sm:block">
          <Readings label="On" list={item.on ?? []} display={(r) => r} />
          <Readings label="Kun" list={item.kun ?? []} display={formatKun} />
        </dl>

        {!!detail.examples.length && (
          <section>
            <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">Examples</h4>
            <ExampleList examples={detail.examples} emphasis={item.char} />
          </section>
        )}

        {!!detail.vocab.length && (
          <section>
            <h4 className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
              More vocabulary <span className="text-muted/70">· {detail.vocab.length}</span>
            </h4>
            <VocabList vocab={detail.vocab} char={item.char} />
          </section>
        )}
      </div>
    </div>
  );
}
