// Level registry. To add a level: create its character file(s) in ./characters,
// flip its status to "available" and attach the char sets to its modules.
// Routes, charts, practice and test pages are generated from this registry.
import type { CharSet, LearnModule, Level } from "./types.ts";
import { HIRAGANA } from "./characters/hiragana.ts";
import { KATAKANA } from "./characters/katakana.ts";
import { N5_KANJI } from "./characters/n5-kanji.ts";

const soon = (id: string, title: string, jp: string, description: string): LearnModule => ({
  id,
  title,
  jp,
  description,
  status: "soon",
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
        status: "available",
        charSet: HIRAGANA,
      },
      {
        id: "katakana",
        title: "Katakana",
        jp: "カタカナ",
        description: "For loanwords, names and emphasis.",
        status: "available",
        charSet: KATAKANA,
      },
      {
        id: "kanji",
        title: "Kanji",
        jp: "漢字",
        description: `${N5_KANJI.items.length} essential N5 kanji with readings.`,
        status: "available",
        charSet: N5_KANJI,
      },
      soon("vocabulary", "Vocabulary", "語彙", "Everyday words with audio."),
      soon("grammar", "Grammar", "文法", "Core sentence patterns."),
    ],
  },
  {
    id: "n4",
    title: "N4",
    tagline: "Elementary",
    description: "Everyday conversations and ~300 kanji.",
    status: "soon",
    modules: [],
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
    status: "soon",
    modules: [],
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

export function getModule(levelId: string, moduleId: string) {
  const level = getLevel(levelId);
  const mod = level?.modules.find((m) => m.id === moduleId && m.status === "available");
  if (!level || !mod?.charSet) return undefined;
  return { level, module: mod, charSet: mod.charSet };
}

/** Every [level, module] pair that has a character set — used for static route generation. */
export function allCharModules() {
  return LEVELS.filter((l) => l.status === "available").flatMap((level) =>
    level.modules
      .filter((m) => m.status === "available" && m.charSet)
      .map((m) => ({ level, module: m, charSet: m.charSet! })),
  );
}

/** Unique char sets across all levels (a set may be shared by several levels). */
export function allCharSets(): CharSet[] {
  const seen = new Map<string, CharSet>();
  for (const { charSet } of allCharModules()) seen.set(charSet.id, charSet);
  return [...seen.values()];
}
