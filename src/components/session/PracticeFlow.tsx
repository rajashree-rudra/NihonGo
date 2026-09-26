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
 * ?c=index (from the chart) starts at that character within "All".
 */
export function PracticeFlow({ charSet, title, backHref }: Props) {
  const params = useSearchParams();
  const start = Number(params.get("c")) || 0;
  const [section, setSection] = useState(() => {
    const s = params.get("s");
    return isSection(charSet, s) ? s : ALL;
  });
  const [run, setRun] = useState(0);
  const [finished, setFinished] = useState<Record<number, Result> | null>(null);
  const queue = useMemo(() => sectionItems(charSet, section), [charSet, section]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [finished, run]);

  const changeSection = (s: string) => {
    if (s === section) return;
    setSection(s);
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
      startIndex={run === 0 && section === ALL ? start : 0}
      onFinish={setFinished}
      tabs={<SectionTabs charSet={charSet} value={section} onChange={changeSection} />}
    />
  );
}
