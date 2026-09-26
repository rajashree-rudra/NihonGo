import { BOX, inkPath, type Pt, type StrokeShape } from "@/lib/geometry";

/** Static rendering of a character — either the model strokes or a learner's freehand drawing. */
export function StrokeFigure({ shapes, drawing, numbered }: { shapes?: StrokeShape[]; drawing?: Pt[][]; numbered?: boolean }) {
  return (
    <svg viewBox={`0 0 ${BOX} ${BOX}`} className="size-full" aria-hidden>
      <g stroke="#eee5d9" strokeWidth={0.4} strokeDasharray="1.6 1.6">
        <line x1={BOX / 2} y1={6} x2={BOX / 2} y2={BOX - 6} />
        <line x1={6} y1={BOX / 2} x2={BOX - 6} y2={BOX / 2} />
      </g>
      <g fill="none" stroke="#1d1a17" strokeWidth={3.6} strokeLinecap="round" strokeLinejoin="round">
        {shapes?.map((s, i) => <path key={i} d={s.d} />)}
        {drawing?.map((s, i) => <path key={i} d={inkPath(s)} />)}
      </g>
      {numbered &&
        shapes?.map((s, i) => (
          <text key={i} x={s.points[0].x - 3.5} y={s.points[0].y - 2} fontSize={5} fontWeight={700} fill="#d8452e">
            {i + 1}
          </text>
        ))}
    </svg>
  );
}
