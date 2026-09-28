"use client";

import { useLayoutEffect, useRef, type HTMLAttributes } from "react";
import { registerLine, schedulePaint } from "@/lib/marks";

type Props = HTMLAttributes<HTMLElement> & {
  /** Stable id for this line's marks; leave out to make the line not markable. */
  markId?: string;
  as?: "p" | "span" | "div";
};

/** A line of text the reader can highlight (see MarkerToolbar). Marks are painted, not rendered. */
export function Markable({ markId, as: Tag = "p", children, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (!markId || !ref.current) return;
    return registerLine(markId, ref.current);
  }, [markId]);
  // The text may have changed (romaji on/off, new kanji…): repaint after every render.
  useLayoutEffect(() => {
    if (markId) schedulePaint();
  });
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} data-mark={markId} {...rest}>
      {children}
    </Tag>
  );
}
