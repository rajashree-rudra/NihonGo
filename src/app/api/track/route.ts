// Study tracking from the browser (src/lib/tracking.ts): active seconds since the last report, and items answered
// correctly. Stored per account: time per day (Japan time), learned items once each. Shown in the admin panel.
import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";
import { getViewer } from "@/lib/auth";
import { jstDay } from "@/lib/time";

const MAX_SECONDS = 15 * 60; // per report (reports come every 2 minutes)
const MAX_ITEMS = 400;
const SET_ID = /^[a-z0-9-]{1,40}$/;

export async function POST(request: NextRequest) {
  const viewer = await getViewer();
  if (!viewer) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  let body: { seconds?: unknown; learned?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  const seconds = Math.min(MAX_SECONDS, Math.max(0, Math.round(Number(body.seconds) || 0)));
  const learned = (Array.isArray(body.learned) ? body.learned : [])
    .filter((x): x is [string, string] => Array.isArray(x) && typeof x[0] === "string" && SET_ID.test(x[0]) && typeof x[1] === "string" && x[1].length > 0 && x[1].length <= 40)
    .slice(0, MAX_ITEMS);

  try {
    if (seconds > 0) {
      await db().$executeRaw`
        INSERT INTO "activity_days" ("user_id", "day", "seconds") VALUES (${viewer.id}::uuid, ${jstDay()}::date, ${seconds})
        ON CONFLICT ("user_id", "day") DO UPDATE SET "seconds" = LEAST("activity_days"."seconds" + EXCLUDED."seconds", 86400)`;
      await db().profile.update({ where: { id: viewer.id }, data: { lastActiveAt: new Date() } });
    }
    if (learned.length) {
      await db().learnedItem.createMany({ data: learned.map(([setId, item]) => ({ userId: viewer.id, setId, item })), skipDuplicates: true });
    }
  } catch (e) {
    // No profile (e.g. the account was just deleted): nothing to record.
    console.error("track: couldn't record", e);
    return NextResponse.json({ error: "Not recorded" }, { status: 404 });
  }
  return new NextResponse(null, { status: 204 });
}
