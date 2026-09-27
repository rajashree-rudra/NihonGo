"use client";

import type { GrammarPoint, GrammarSet, VocabEntry, VocabSet } from "@/data/types";
import { GrammarCard } from "./GrammarCard";
import { StudyBrowser } from "./StudyBrowser";
import { VocabCard } from "./VocabCard";

const vocabText = (w: VocabEntry) => `${w.word} ${w.reading} ${w.romaji} ${w.meaning} ${w.masu ?? ""}`;
const vocabKey = (w: VocabEntry) => `${w.word}|${w.reading}`;
const renderVocab = (w: VocabEntry) => <VocabCard entry={w} />;

export function VocabBrowser({ set }: { set: VocabSet }) {
  return (
    <StudyBrowser
      sections={set.sections}
      searchText={vocabText}
      itemKey={vocabKey}
      renderItem={renderVocab}
      noun={["word", "words"]}
      placeholder="Search words — English, kana or romaji"
      layout="grid"
    />
  );
}

const grammarText = (p: GrammarPoint) => `${p.pattern} ${p.meaning} ${p.explanation} ${p.structure.join(" ")}`;
const grammarKey = (p: GrammarPoint) => p.id;
const renderGrammar = (p: GrammarPoint, i: number) => <GrammarCard point={p} index={i} />;

export function GrammarBrowser({ set }: { set: GrammarSet }) {
  return (
    <StudyBrowser
      sections={set.sections}
      searchText={grammarText}
      itemKey={grammarKey}
      renderItem={renderGrammar}
      noun={["grammar point", "grammar points"]}
      placeholder="Search grammar — pattern or meaning"
      layout="list"
    />
  );
}
