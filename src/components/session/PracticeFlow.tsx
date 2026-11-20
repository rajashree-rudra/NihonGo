"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { CharSet } from "@/data/types";
import { SessionSummary } from "./SessionSummary";
import { StudySession } from "./StudySession";
import { ALL, SectionTabs, isSection, sectionItems } from "./SectionTabs";
import { LockedSection } from "./LockedSection";
import type { PreviewProps } from "@/components/auth/Locked";
import type { Result } from "./types";

interface Props {
  charSet: CharSet;
  title: string;
  backHref: string;
  /** Signed out: every group is listed, but only the open characters can be practised. */
  preview?: PreviewProps;
  /** Register box shown below the session in a preview */
  gate?: ReactNode;
}

/**
 * Practice: characters in chart order, filtered by section tab (?s=basic).
 * ?c=index starts at that character within the opening section (e.g. ?s=g12&c=1).
 */
export function PracticeFlow({ charSet, title, backHref, preview, gate }: Props) {
  const params = useSearchParams();
  const start = Number(params.get("c")) || 0;
  const [section, setSection] = useState(() => {
    const s = params.get("s");
    return isSection(charSet, s) ? s : ALL;
  });
  const [run, setRun] = useState(0);
  const [startAt, setStartAt] = useState(start);
  const [finished, setFinished] = useState<Record<number, Result> | null>(null);
  const queue = useMemo(() => {
    const items = sectionItems(charSet, section);
    if (!preview) return items;
    const open = new Set(preview.open);
    return items.filter((i) => open.has(i.char));
  }, [charSet, section, preview]);
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
      <>
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
      {gate}
      </>
    );
  }

  const tabs = (current?: Parameters<typeof SectionTabs>[0]["current"]) => (
    <SectionTabs charSet={charSet} value={section} onChange={changeSection} current={current} concealChars={charSet.kind === "kanji"} />
  );

  // A group that isn't in the preview.
  if (preview && queue.length === 0) {
    const group = charSet.sections.find((s) => s.id === section);
    return (
      <LockedSection title={title} backHref={backHref} tabs={tabs()} next={preview.next} mode="practice" count={group?.items.length ?? 0} kind={charSet.kind} />
    );
  }

  return (
    <>
    <StudySession
      key={`${section}-${run}`}
      charSet={charSet}
      queue={queue}
      mode="practice"
      title={title}
      backHref={backHref}
      startIndex={Math.min(startAt, Math.max(0, queue.length - 1))}
      onFinish={setFinished}
      onNextGroup={next ? () => changeSection(next.id) : undefined}
      onPrevGroup={prev ? () => changeSection(prev.id, prev.items.length - 1) : undefined}
      tabs={tabs}
    />
    {gate}
    </>
  );
}
