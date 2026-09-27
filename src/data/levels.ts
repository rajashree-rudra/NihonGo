// Level registry. To add a level: create its content files (characters/, vocabulary/,
// grammar/), flip its status to "available" and attach the sets to its modules.
// Routes, charts, lists, practice and test pages are generated from this registry.
import type { CharSet, GrammarSet, LearnModule, Level, VocabSet } from "./types.ts";
import { HIRAGANA } from "./characters/hiragana.ts";
import { KATAKANA } from "./characters/katakana.ts";
import { N5_KANJI } from "./characters/n5-kanji/index.ts";
import { N4_KANJI } from "./characters/n4-kanji.ts";
import { N2_KANJI } from "./characters/n2-kanji/index.ts";
import { N5_VOCAB } from "./vocabulary/n5/index.ts";
import { N4_VOCAB } from "./vocabulary/n4/index.ts";
import { N5_GRAMMAR, N4_GRAMMAR } from "./grammar/index.ts";

const KANJI_INTRO =
  "Kanji are characters that carry a meaning, like 山 = mountain. Most have more than one reading: kun'yomi, the native Japanese reading, and on'yomi, which came from Chinese.";

const vocabModule = (set: VocabSet, level: string, intro: string): LearnModule => ({
  id: "vocabulary",
  title: "Vocabulary",
  jp: "語彙",
  description: `${set.items.length} ${level} words, each with 2 example sentences.`,
  intro,
  status: "available",
  vocabSet: set,
});

const grammarModule = (set: GrammarSet, level: string, intro: string): LearnModule => ({
  id: "grammar",
  title: "Grammar",
  jp: "文法",
  description: `${set.items.length} ${level} grammar points explained simply.`,
  intro,
  status: "available",
  grammarSet: set,
});

export const LEVELS: Level[] = [
  {
    id: "n5",
    title: "N5",
    tagline: "Beginner",
    description: "Kana, first kanji and everyday basics.",
    status: "available",
    modules: [
      {
        id: "hiragana",
        title: "Hiragana",
        jp: "ひらがな",
        description: "The core phonetic script — start here.",
        intro:
          "Hiragana is the main Japanese alphabet. Each character stands for one sound, and any Japanese word can be written with it — it's the first script Japanese children learn.",
        status: "available",
        charSet: HIRAGANA,
      },
      {
        id: "katakana",
        title: "Katakana",
        jp: "カタカナ",
        description: "For loanwords, names and emphasis.",
        intro:
          "Katakana is the second Japanese alphabet. It has the same sounds as hiragana but different, more angular shapes, and is mainly used for foreign words and names.",
        status: "available",
        charSet: KATAKANA,
      },
      {
        id: "kanji",
        title: "Kanji",
        jp: "漢字",
        description: `${N5_KANJI.items.length} essential kanji in ${N5_KANJI.sections.length} themed groups.`,
        intro: `${KANJI_INTRO} The N5 kanji come in small themed groups — numbers, time, nature, people and more. Open any kanji for its readings, stroke order, example sentences and more vocabulary.`,
        status: "available",
        charSet: N5_KANJI,
      },
      vocabModule(
        N5_VOCAB,
        "N5",
        "The words you need for JLPT N5 — greetings, family, food, time, everyday verbs and adjectives. Tap a word to hear it, and open its examples to see how it's used in a real sentence.",
      ),
      grammarModule(
        N5_GRAMMAR,
        "N5",
        "Grammar is how words fit together into sentences. These are the basic patterns for JLPT N5, from “A is B” to asking, wanting and inviting — each explained in plain English with two examples.",
      ),
    ],
  },
  {
    id: "n4",
    title: "N4",
    tagline: "Elementary",
    description: "Everyday conversations, more kanji and grammar.",
    lead: "Build on N5: new kanji to write, plus the words and grammar you need for this level.",
    status: "available",
    modules: [
      {
        id: "kanji",
        title: "Kanji",
        jp: "漢字",
        description: `${N4_KANJI.items.length} new N4 kanji with readings.`,
        intro: `${KANJI_INTRO} These are the kanji added at N4 — learn the N5 kanji first.`,
        status: "available",
        charSet: N4_KANJI,
      },
      vocabModule(
        N4_VOCAB,
        "N4",
        "The next set of everyday words for JLPT N4 — work, travel, feelings, more verbs and describing words. Build on your N5 vocabulary with two example sentences for every word.",
      ),
      grammarModule(
        N4_GRAMMAR,
        "N4",
        "N4 grammar lets you say much more: conditions (if/when), giving and receiving, possibility, plans, guesses and polite speech. Each pattern comes with a simple explanation and two examples.",
      ),
    ],
  },
  {
    id: "n3",
    title: "N3",
    tagline: "Intermediate",
    description: "Bridge to real-world Japanese.",
    status: "soon",
    modules: [],
  },
  {
    id: "n2",
    title: "N2",
    tagline: "Upper intermediate",
    description: "News, articles and business settings.",
    lead: "445 kanji grouped by look-alike shapes, so you learn to tell them apart — each with example sentences, extra vocabulary and writing practice.",
    status: "available",
    modules: [
      {
        id: "kanji",
        title: "Kanji",
        jp: "漢字",
        description: `${N2_KANJI.items.length} kanji in ${N2_KANJI.sections.length} look-alike groups.`,
        intro:
          "The N2 kanji, grouped by visual similarity so easily confused characters sit side by side. A few N5–N3 kanji are included where they look like an N2 one. Open any kanji for its readings, stroke order, example sentences and more vocabulary.",
        status: "available",
        charSet: N2_KANJI,
      },
      {
        id: "vocabulary",
        title: "Vocabulary",
        jp: "語彙",
        description: "N2 words with example sentences.",
        status: "soon",
      },
      {
        id: "grammar",
        title: "Grammar",
        jp: "文法",
        description: "N2 grammar patterns explained.",
        status: "soon",
      },
    ],
  },
  {
    id: "n1",
    title: "N1",
    tagline: "Advanced",
    description: "Complex texts and native-speed speech.",
    status: "soon",
    modules: [],
  },
];

export function getLevel(levelId: string): Level | undefined {
  return LEVELS.find((l) => l.id === levelId && l.status === "available");
}

/** Any available module (characters, vocabulary or grammar). */
export function getLearnModule(levelId: string, moduleId: string) {
  const level = getLevel(levelId);
  const mod = level?.modules.find((m) => m.id === moduleId && m.status === "available");
  return level && mod ? { level, module: mod } : undefined;
}

/** A character module (the only kind with practice and test pages). */
export function getModule(levelId: string, moduleId: string) {
  const found = getLearnModule(levelId, moduleId);
  if (!found?.module.charSet) return undefined;
  return { ...found, charSet: found.module.charSet };
}

/** Every available [level, module] pair — used for static route generation. */
export function allModules() {
  return LEVELS.filter((l) => l.status === "available").flatMap((level) =>
    level.modules.filter((m) => m.status === "available").map((m) => ({ level, module: m })),
  );
}

/** Every [level, module] pair that has a character set. */
export function allCharModules() {
  return allModules()
    .filter(({ module }) => module.charSet)
    .map(({ level, module }) => ({ level, module, charSet: module.charSet! }));
}

/** Unique char sets across all levels (a set may be shared by several levels). */
export function allCharSets(): CharSet[] {
  const seen = new Map<string, CharSet>();
  for (const { charSet } of allCharModules()) seen.set(charSet.id, charSet);
  return [...seen.values()];
}

export function allVocabSets(): VocabSet[] {
  return allModules().flatMap(({ module }) => (module.vocabSet ? [module.vocabSet] : []));
}

export function allGrammarSets(): GrammarSet[] {
  return allModules().flatMap(({ module }) => (module.grammarSet ? [module.grammarSet] : []));
}
