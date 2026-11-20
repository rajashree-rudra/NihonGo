import "server-only";
import { LEVELS } from "@/data/levels";
import { quizFromVocab } from "@/data/quiz";
import type { JlptLevel, Role } from "@/generated/prisma/client";
import { db } from "@/lib/db";
import { supabaseService } from "@/lib/supabase/server";
import { jstDay } from "@/lib/time";

export interface ProgressPart {
  label: string;
  learned: number;
  total: number;
}

export interface LevelProgress {
  level: string;
  learned: number;
  total: number;
  parts: ProgressPart[];
}

export interface UserRow {
  id: string;
  email: string;
  fullName: string;
  role: Role;
  targetLevel: JlptLevel;
  dateOfBirth: Date | null;
  country: string;
  postalCode: string | null;
  region: string | null;
  city: string | null;
  area: string | null;
  createdAt: Date;
  lastSignInAt: Date | null;
  lastActiveAt: Date | null;
  /** Seconds of study: today (Japan time), the last 7 days including today, all time */
  today: number;
  week: number;
  total: number;
  progress: LevelProgress[];
}

/**
 * What progress counts, per open level: its character sets (written correctly) and vocabulary (answered correctly
 * in a quiz — only words the quiz can ask). Grammar has no exercises yet, so it isn't counted.
 */
export function progressPlan() {
  return LEVELS.filter((l) => l.status === "available")
    .map((level) => ({
      level: level.title,
      parts: level.modules
        .filter((m) => m.status === "available")
        .flatMap((m) => {
          if (m.charSet) return [{ setId: m.charSet.id, label: m.title, total: new Set(m.charSet.items.map((i) => i.char)).size }];
          if (m.vocabSet) return [{ setId: m.vocabSet.id, label: m.title, total: new Set(quizFromVocab(m.vocabSet).words.map((w) => w.word)).size }];
          return [];
        }),
    }))
    .filter((l) => l.parts.length);
}

/** Last sign-in of every account, from Supabase Auth. */
async function lastSignIns(): Promise<Map<string, Date>> {
  const auth = supabaseService().auth.admin;
  const map = new Map<string, Date>();
  for (let page = 1; ; page++) {
    const { data, error } = await auth.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    for (const u of data.users) if (u.last_sign_in_at) map.set(u.id, new Date(u.last_sign_in_at));
    if (data.users.length < 1000) return map;
  }
}

export async function loadUsers(): Promise<UserRow[]> {
  const today = jstDay();
  const weekStart = jstDay(new Date(Date.now() - 6 * 86_400_000));
  const [profiles, activity, learned, signIns] = await Promise.all([
    db().profile.findMany(),
    db().$queryRaw<{ user_id: string; total: bigint; today: bigint; week: bigint }[]>`
      SELECT "user_id",
        SUM("seconds")::bigint AS "total",
        COALESCE(SUM("seconds") FILTER (WHERE "day" = ${today}::date), 0)::bigint AS "today",
        COALESCE(SUM("seconds") FILTER (WHERE "day" >= ${weekStart}::date), 0)::bigint AS "week"
      FROM "activity_days" GROUP BY "user_id"`,
    db().learnedItem.groupBy({ by: ["userId", "setId"], _count: { _all: true } }),
    lastSignIns(),
  ]);

  const time = new Map(activity.map((a) => [a.user_id, { today: Number(a.today), week: Number(a.week), total: Number(a.total) }]));
  const learnedBy = new Map<string, Map<string, number>>();
  for (const l of learned) {
    if (!learnedBy.has(l.userId)) learnedBy.set(l.userId, new Map());
    learnedBy.get(l.userId)!.set(l.setId, l._count._all);
  }
  const plan = progressPlan();

  return profiles.map((p) => {
    const sets = learnedBy.get(p.id);
    const progress = plan.map(({ level, parts }) => {
      const counted = parts.map(({ setId, label, total }) => ({ label, total, learned: Math.min(total, sets?.get(setId) ?? 0) }));
      return { level, parts: counted, learned: counted.reduce((n, x) => n + x.learned, 0), total: counted.reduce((n, x) => n + x.total, 0) };
    });
    return {
      id: p.id,
      email: p.email,
      fullName: p.fullName,
      role: p.role,
      targetLevel: p.targetLevel,
      dateOfBirth: p.dateOfBirth,
      country: p.country,
      postalCode: p.postalCode,
      region: p.region,
      city: p.city,
      area: p.area,
      createdAt: p.createdAt,
      lastSignInAt: signIns.get(p.id) ?? null,
      lastActiveAt: p.lastActiveAt,
      ...(time.get(p.id) ?? { today: 0, week: 0, total: 0 }),
      progress,
    };
  });
}
