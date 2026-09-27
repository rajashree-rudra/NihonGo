import type { LearnModule, Status } from "@/data/types";

/** Just what a module card needs — keeps whole vocabulary/grammar sets out of the client payload. */
export interface ModuleSummary {
  id: string;
  title: string;
  jp: string;
  description: string;
  status: Status;
  /** Character sets track writing progress. */
  charSetId?: string;
  total: number;
  unit: string;
}

export function summarizeModule(m: LearnModule): ModuleSummary {
  const total = m.charSet?.items.length ?? m.vocabSet?.items.length ?? m.grammarSet?.items.length ?? 0;
  return {
    id: m.id,
    title: m.title,
    jp: m.jp,
    description: m.description,
    status: m.status,
    charSetId: m.charSet?.id,
    total,
    unit: m.charSet ? "characters" : m.vocabSet ? "words" : "grammar points",
  };
}
