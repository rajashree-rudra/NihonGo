"use client";

// Study tracking for the admin panel: active study time and learned items, sent to /api/track in small batches
// (every 2 minutes, and when the page is hidden or closed). Started by <ActivityTracker /> in the root layout.

/** [set id, character or word] */
type Learned = [string, string];

const BATCH = 400;
let queue: Learned[] = [];
let seconds = 0;
let sending = false;

const queuedThisVisit = new Set<string>();

/** A character or word was answered correctly (called by markLearned). The server ignores repeats. */
export function queueLearned(setId: string, item: string) {
  const key = `${setId}\u0000${item}`;
  if (queuedThisVisit.has(key)) return;
  queuedThisVisit.add(key);
  queue.push([setId, item]);
}

export function addActiveSeconds(s: number) {
  seconds += s;
}

export function hasPending() {
  return seconds > 0 || queue.length > 0;
}

/** Sends what's waiting. `leaving`: the page is being hidden or closed — use a beacon, don't wait. */
export async function flush(leaving = false): Promise<boolean> {
  if (sending && !leaving) return false;
  let ok = true;
  sending = true;
  try {
    while (hasPending()) {
      const batch = { seconds: Math.round(seconds), learned: queue.slice(0, BATCH) };
      seconds = 0;
      queue = queue.slice(BATCH);
      const body = JSON.stringify(batch);
      if (leaving && navigator.sendBeacon?.("/api/track", new Blob([body], { type: "application/json" }))) continue;
      try {
        const res = await fetch("/api/track", { method: "POST", body, headers: { "Content-Type": "application/json" }, keepalive: true });
        if (res.ok) continue;
        if (res.status === 401) return false; // signed out: drop it
        throw new Error(String(res.status));
      } catch {
        // Try again next time.
        seconds += batch.seconds;
        queue = [...batch.learned, ...queue];
        ok = false;
        break;
      }
    }
  } finally {
    sending = false;
  }
  return ok;
}
