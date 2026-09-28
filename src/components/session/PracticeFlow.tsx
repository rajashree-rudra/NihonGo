"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { CharSet } from "@/data/types";
import { SessionSummary } from "./SessionSummary";
import { StudySession } from "./StudySession";
import { ALL, SectionTabs, isSection, sectionItems } from "./SectionTabs";
import type { Result } from "./types";

interface Props {
  charSet: CharSet;
  title: string;
  backHref: string;
}

/**
 * Practice: characters in chart order, filtered by section tab (?s=basic).
 * ?c=index starts at that character within the opening section (e.g. ?s=g12&c=1).
 */
export function PracticeFlow({ charSet, title, backHref }: Props) {
  const params = useSearchParams();
  const start = Number(params.get("c")) || 0;
  const [section, setSection] = useState(() => {
    const s = params.get("s");
    return isSection(charSet, s) ? s : ALL;
  });
  const [run, setRun] = useState(0);
  const [startAt, setStartAt] = useState(start);
  const [finished, setFinished] = useState<Record<number, Result> | null>(null);
  const queue = useMemo(() => sectionItems(charSet, section), [charSet, section]);
  // Neighbouring groups, for stepping past either end of a group ("All" has none).
  const at = charSet.sections.findIndex((s) => s.id === section);
  const next = at >= 0 ? charSet.sections[at + 1] : undefined;
  const prev = at > 0 ? charSet.sections[at - 1] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [finished, run]);

  const changeSection = (s: string, at = 0) => {
    if (s === section) return;
    setSection(s);
    setStartAt(at);
    setFinished(null);
    setRun((r) => r + 1);
    const url = new URL(window.location.href);
    url.searchParams.delete("c");
    if (s === ALL) url.searchParams.delete("s");
    else url.searchParams.set("s", s);
    window.history.replaceState(null, "", url);
  };

  if (finished) {
    return (
      <SessionSummary
        mode="practice"
        title={title}
        queue={queue}
        results={finished}
        backHref={backHref}
        onRestart={() => {
          setFinished(null);
          setStartAt(0);
          setRun((r) => r + 1);
        }}
      />
    );
  }

  return (
    <StudySession
      key={`${section}-${run}`}
      charSet={charSet}
      queue={queue}
      mode="practice"
      title={title}
      backHref={backHref}
      startIndex={startAt}
      onFinish={setFinished}
      onNextGroup={next ? () => changeSection(next.id) : undefined}
      onPrevGroup={prev ? () => changeSection(prev.id, prev.items.length - 1) : undefined}
      tabs={(current) => (
        <SectionTabs charSet={charSet} value={section} onChange={changeSection} current={current} concealChars={charSet.kind === "kanji"} />
      )}
    />
  );
}
