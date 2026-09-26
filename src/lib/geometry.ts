// Stroke geometry + recognition. All coordinates live in KanjiVG's 109×109 box.
import { svgPathProperties } from "svg-path-properties";

export interface Pt {
  x: number;
  y: number;
}

export interface StrokeShape {
  d: string;
  length: number;
  /** Evenly spaced samples along the stroke, start → end. */
  points: Pt[];
}

export const BOX = 109;
const SAMPLES = 32;

const dist = (a: Pt, b: Pt) => Math.hypot(a.x - b.x, a.y - b.y);

export function polylineLength(pts: Pt[]): number {
  let len = 0;
  for (let i = 1; i < pts.length; i++) len += dist(pts[i - 1], pts[i]);
  return len;
}

/** Resample a polyline to n evenly spaced points. */
export function resample(pts: Pt[], n = SAMPLES): Pt[] {
  if (pts.length === 0) return [];
  if (pts.length === 1) return Array.from({ length: n }, () => ({ ...pts[0] }));
  const total = polylineLength(pts);
  if (total === 0) return Array.from({ length: n }, () => ({ ...pts[0] }));
  const step = total / (n - 1);
  const out: Pt[] = [{ ...pts[0] }];
  let acc = 0;
  let prev = pts[0];
  for (let i = 1; i < pts.length && out.length < n; i++) {
    let cur = pts[i];
    let seg = dist(prev, cur);
    while (acc + seg >= step && out.length < n) {
      const t = (step - acc) / seg;
      const p = { x: prev.x + t * (cur.x - prev.x), y: prev.y + t * (cur.y - prev.y) };
      out.push(p);
      prev = p;
      seg = dist(prev, cur);
      acc = 0;
    }
    acc += seg;
    prev = cur;
  }
  while (out.length < n) out.push({ ...pts[pts.length - 1] });
  return out;
}

const shapeCache = new Map<string, StrokeShape>();

export function toShape(d: string): StrokeShape {
  let shape = shapeCache.get(d);
  if (!shape) {
    const props = new svgPathProperties(d);
    const length = props.getTotalLength();
    const points = Array.from({ length: SAMPLES }, (_, i) => {
      const p = props.getPointAtLength((length * i) / (SAMPLES - 1));
      return { x: p.x, y: p.y };
    });
    shape = { d, length, points };
    shapeCache.set(d, shape);
  }
  return shape;
}

function meanDistance(a: Pt[], b: Pt[]): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += dist(a[i], b[i]);
  return sum / a.length;
}

export type StrokeVerdict = "ok" | "reversed" | "wrong";

/** Start→end direction agrees (ignored for strokes that loop back near their start). */
function sameDirection(u: Pt[], e: Pt[]): boolean {
  const ex = e[e.length - 1].x - e[0].x, ey = e[e.length - 1].y - e[0].y;
  const ux = u[u.length - 1].x - u[0].x, uy = u[u.length - 1].y - u[0].y;
  if (Math.hypot(ex, ey) < 5 || Math.hypot(ux, uy) < 3) return true;
  return ex * ux + ey * uy > 0;
}

function assess(user: Pt[], expected: StrokeShape): { verdict: StrokeVerdict; distance: number } {
  const u = resample(user);
  const e = expected.points;
  // Short strokes (dots, dakuten) get tighter absolute tolerance; long ones a bit more room.
  const tol = Math.min(18, Math.max(10, 7 + expected.length * 0.14));
  const forward = meanDistance(u, e);
  const endsOk = dist(u[0], e[0]) < tol * 1.5 && dist(u[u.length - 1], e[e.length - 1]) < tol * 1.5;
  if (forward < tol && endsOk && sameDirection(u, e)) return { verdict: "ok", distance: forward };
  const reversed = meanDistance(u, [...e].reverse());
  return { verdict: reversed < tol ? "reversed" : "wrong", distance: forward };
}

/** Does the user's stroke trace the expected stroke, in the right direction? */
export function judgeStroke(user: Pt[], expected: StrokeShape): StrokeVerdict {
  return assess(user, expected).verdict;
}

export type NextStrokeVerdict = { kind: "ok" } | { kind: "reversed" | "wrong" } | { kind: "order"; matched: number };

/**
 * Strict mode: judge a stroke against stroke `index` of the character. A stroke that fits the
 * expected one but fits a later stroke much better (e.g. the second of two dakuten ticks) is
 * reported as out of order rather than accepted.
 */
export function judgeNextStroke(user: Pt[], shapes: StrokeShape[], index: number): NextStrokeVerdict {
  const current = assess(user, shapes[index]);
  let best = -1;
  let bestDistance = Infinity;
  for (let j = index + 1; j < shapes.length; j++) {
    const a = assess(user, shapes[j]);
    if (a.verdict === "ok" && a.distance < bestDistance) {
      best = j;
      bestDistance = a.distance;
    }
  }
  if (current.verdict === "ok") {
    return best >= 0 && bestDistance < current.distance * 0.55 ? { kind: "order", matched: best } : { kind: "ok" };
  }
  if (best >= 0) return { kind: "order", matched: best };
  return { kind: current.verdict };
}

/** Smooth SVG path through freehand points (quadratic curves via midpoints). */
export function inkPath(pts: Pt[]): string {
  if (pts.length === 0) return "";
  const f = (n: number) => n.toFixed(2);
  if (pts.length < 3) {
    const a = pts[0];
    const b = pts[pts.length - 1];
    return `M${f(a.x)} ${f(a.y)}L${f(b.x + 0.01)} ${f(b.y)}`;
  }
  let d = `M${f(pts[0].x)} ${f(pts[0].y)}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i].x + pts[i + 1].x) / 2;
    const my = (pts[i].y + pts[i + 1].y) / 2;
    d += `Q${f(pts[i].x)} ${f(pts[i].y)} ${f(mx)} ${f(my)}`;
  }
  const last = pts[pts.length - 1];
  return d + `L${f(last.x)} ${f(last.y)}`;
}

// ---------- Easy mode: order-free visual similarity ----------

function bbox(pts: Pt[]) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const p of pts) {
    minX = Math.min(minX, p.x); minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y);
  }
  return { minX, minY, maxX, maxY, cx: (minX + maxX) / 2, cy: (minY + maxY) / 2, size: Math.max(maxX - minX, maxY - minY, 1) };
}

/**
 * Normalise the user's drawing onto the model's position and scale, so that writing a
 * little off-centre or larger/smaller is not penalised.
 */
export function alignDrawing(user: Pt[][], shapes: StrokeShape[]): Pt[][] {
  const all = user.flat();
  if (all.length === 0) return user;
  const ub = bbox(all);
  const eb = bbox(shapes.flatMap((s) => s.points));
  const k = Math.min(1.6, Math.max(0.6, eb.size / ub.size));
  return user.map((s) => s.map((p) => ({ x: eb.cx + (p.x - ub.cx) * k, y: eb.cy + (p.y - ub.cy) * k })));
}

const RES = 96;

function rasterise(draw: (ctx: CanvasRenderingContext2D) => void, width: number): Uint8Array {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = RES;
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  ctx.scale(RES / BOX, RES / BOX);
  ctx.lineCap = ctx.lineJoin = "round";
  ctx.lineWidth = width;
  ctx.strokeStyle = "#000";
  draw(ctx);
  const data = ctx.getImageData(0, 0, RES, RES).data;
  const out = new Uint8Array(RES * RES);
  for (let i = 0; i < out.length; i++) out[i] = data[i * 4 + 3] > 40 ? 1 : 0;
  return out;
}

/** 0–100 score: how closely the (aligned) freehand drawing covers the model character. */
export function similarity(user: Pt[][], shapes: StrokeShape[]): number {
  if (!user.length || !shapes.length) return 0;
  const drawModel = (ctx: CanvasRenderingContext2D) => {
    for (const s of shapes) ctx.stroke(new Path2D(s.d));
  };
  const drawUser = (ctx: CanvasRenderingContext2D) => {
    for (const s of user) ctx.stroke(new Path2D(inkPath(s)));
  };
  const model = rasterise(drawModel, 4);
  const modelZone = rasterise(drawModel, 13);
  const mine = rasterise(drawUser, 4);
  const mineZone = rasterise(drawUser, 13);

  let m = 0, mHit = 0, u = 0, uHit = 0;
  for (let i = 0; i < model.length; i++) {
    if (model[i]) { m++; if (mineZone[i]) mHit++; }
    if (mine[i]) { u++; if (modelZone[i]) uHit++; }
  }
  if (!m || !u) return 0;
  const recall = mHit / m;
  const precision = uHit / u;
  const f1 = (2 * recall * precision) / (recall + precision || 1);
  const countPenalty = Math.max(0.75, 1 - 0.06 * Math.abs(user.length - shapes.length));
  return Math.round(f1 * countPenalty * 100);
}

export const EASY_PASS_SCORE = 65;
