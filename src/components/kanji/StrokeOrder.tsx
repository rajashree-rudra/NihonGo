"use client";

import { useMemo, useState } from "react";
import { Loader2, Play } from "lucide-react";
import { BOX, toShape } from "@/lib/geometry";
import { useStrokeSet } from "@/lib/strokes";

/** Stroke-order figure: numbered strokes, with a button that draws them one by one. */
export function StrokeOrder({ setId, char }: { setId: string; char: string }) {
  const { data } = useStrokeSet(setId);
  const shapes = useMemo(() => (data?.[char] ?? []).map(toShape), [data, char]);
  const [run, setRun] = useState(0);

  let t = 0.1;
  const timing = shapes.map((s) => {
    const dur = 0.2 + s.length / 140;
    const out = { delay: t, dur };
    t += dur + 0.08;
    return out;
  });

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-line bg-white">
      {!data ? (
        <div className="grid size-full place-items-center">
          <Loader2 className="size-5 animate-spin text-muted" />
        </div>
      ) : (
        <svg viewBox={`0 0 ${BOX} ${BOX}`} className="size-full" role="img" aria-label={`Stroke order of ${char}, ${shapes.length} strokes`}>
          <g stroke="#eee5d9" strokeWidth={0.4} strokeDasharray="1.6 1.6">
            <line x1={BOX / 2} y1={6} x2={BOX / 2} y2={BOX - 6} />
            <line x1={6} y1={BOX / 2} x2={BOX - 6} y2={BOX / 2} />
          </g>
          <g key={run} fill="none" stroke="#1d1a17" strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round">
            {shapes.map((s, i) =>
              run ? (
                <path
                  key={i}
                  d={s.d}
                  pathLength={1}
                  className="stroke-draw"
                  style={{ ["--delay" as string]: `${timing[i].delay}s`, ["--dur" as string]: `${timing[i].dur}s` }}
                />
              ) : (
                <path key={i} d={s.d} />
              ),
            )}
          </g>
          {shapes.map((s, i) => (
            <text key={i} x={s.points[0].x - 3.2} y={s.points[0].y - 1.6} fontSize={5} fontWeight={800} fill="#d8452e">
              {i + 1}
            </text>
          ))}
        </svg>
      )}
      {!!shapes.length && (
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          aria-label="Play stroke order"
          className="absolute bottom-2 right-2 inline-flex h-8 items-center gap-1 rounded-lg bg-ink/85 px-2.5 text-[12px] font-semibold text-white backdrop-blur transition hover:bg-ink active:scale-95"
        >
          <Play className="size-3.5" /> {shapes.length}
        </button>
      )}
    </div>
  );
}
