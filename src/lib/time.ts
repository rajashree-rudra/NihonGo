// Dates and durations for study tracking. Days are counted in Japan time (the admin's time zone).

export const TIME_ZONE = "Asia/Tokyo";

/** The date in Japan, e.g. "2026-11-20". */
export function jstDay(date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
}

/** 0 → "—", 45 → "<1m", 3720 → "1h 2m", 90000 → "25h 0m". */
export function formatDuration(seconds: number): string {
  if (!seconds) return "—";
  if (seconds < 60) return "<1m";
  const m = Math.floor(seconds / 60);
  return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
}

const dateTime = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: TIME_ZONE });
const dateOnly = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

/** "20 Nov 2026, 14:05" in Japan time. */
export function formatDateTime(date: Date): string {
  return dateTime.format(date);
}

const dayJst = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: TIME_ZONE });

/** The day of a moment, in Japan time: "20 Nov 2026". */
export function formatDayJst(date: Date): string {
  return dayJst.format(date);
}

/** A calendar date stored as UTC midnight (e.g. a date of birth): "3 Feb 1995". */
export function formatDate(date: Date): string {
  return dateOnly.format(date);
}

/** "just now", "5 min ago", "3 h ago", "2 days ago", then the date. */
export function timeAgo(date: Date, now = new Date()): string {
  const s = Math.max(0, (now.getTime() - date.getTime()) / 1000);
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86400) return `${Math.floor(s / 3600)} h ago`;
  if (s < 86400 * 30) return `${Math.floor(s / 86400)} day${s < 86400 * 2 ? "" : "s"} ago`;
  return formatDateTime(date).split(",")[0];
}

/** Whole years between a date of birth and now. */
export function ageOn(dateOfBirth: Date, now = new Date()): number {
  let age = now.getUTCFullYear() - dateOfBirth.getUTCFullYear();
  const beforeBirthday = now.getUTCMonth() < dateOfBirth.getUTCMonth() || (now.getUTCMonth() === dateOfBirth.getUTCMonth() && now.getUTCDate() < dateOfBirth.getUTCDate());
  return beforeBirthday ? age - 1 : age;
}
