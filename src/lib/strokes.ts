"use client";

import { useEffect, useState } from "react";

export type StrokeSetData = Record<string, string[]>;

const cache = new Map<string, Promise<StrokeSetData>>();

function loadStrokeSet(setId: string): Promise<StrokeSetData> {
  let p = cache.get(setId);
  if (!p) {
    p = fetch(`/strokes/${setId}.json`).then((r) => {
      if (!r.ok) throw new Error(`Stroke data for "${setId}" not found`);
      return r.json() as Promise<StrokeSetData>;
    });
    p.catch(() => cache.delete(setId));
    cache.set(setId, p);
  }
  return p;
}

/** Stroke paths for every character of a char set (KanjiVG data from public/strokes). */
export function useStrokeSet(setId: string) {
  const [state, setState] = useState<{ data: StrokeSetData | null; error: string | null }>({
    data: null,
    error: null,
  });
  useEffect(() => {
    let alive = true;
    loadStrokeSet(setId).then(
      (data) => alive && setState({ data, error: null }),
      (e: Error) => alive && setState({ data: null, error: e.message }),
    );
    return () => {
      alive = false;
    };
  }, [setId]);
  return state;
}
