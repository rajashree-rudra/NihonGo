// Who may use the site. The admin's decision is stored twice: in the `profiles` table (the record the admin
// panel shows) and in the account's Supabase `app_metadata`, which is inside the sign-in token — so every page
// can check it instantly, without asking the database.

export type Access = "pending" | "approved" | "rejected";
export type Role = "user" | "admin";

/** Pages for signed-out visitors only. */
export const AUTH_PAGES = ["/login", "/register"];
/** Where signed-in accounts wait until they're approved (or see that they weren't). */
export const WAITING_PAGE = "/pending";

/** Reads access and role from a sign-in token's claims. */
export function accessOf(claims: { app_metadata?: Record<string, unknown> } | null | undefined): {
  access: Access;
  role: Role;
} {
  const meta = claims?.app_metadata ?? {};
  const access = meta.access === "approved" || meta.access === "rejected" ? meta.access : "pending";
  return { access, role: meta.role === "admin" ? "admin" : "user" };
}

/**
 * Name, email and role of the signed-in account, for the header's account menu. Pages are static, so the proxy
 * copies these from the verified token into this readable cookie. Display only — never used to decide access.
 */
export const VIEWER_COOKIE = "nihongo-viewer";

export interface ViewerHint {
  name: string;
  email: string;
  role: Role;
}

/** Cookie value (Next URL-encodes it when setting and decodes it when reading). */
export function encodeViewer(v: ViewerHint): string {
  return JSON.stringify(v);
}

/** The viewer cookie for an account (its token claims or Supabase user object). */
export function viewerCookie(
  user: { email?: string; user_metadata?: Record<string, unknown>; app_metadata?: Record<string, unknown> },
  secure: boolean,
) {
  return {
    name: VIEWER_COOKIE,
    value: encodeViewer({ name: String(user.user_metadata?.full_name ?? ""), email: user.email ?? "", role: accessOf(user).role }),
    path: "/",
    sameSite: "lax" as const,
    secure,
    maxAge: 60 * 60 * 24 * 400,
  };
}

/** From `document.cookie` (still URL-encoded). */
export function decodeViewer(raw: string | undefined): ViewerHint | null {
  if (!raw) return null;
  try {
    const v = JSON.parse(decodeURIComponent(raw));
    return typeof v?.email === "string" ? { name: String(v.name ?? ""), email: v.email, role: v.role === "admin" ? "admin" : "user" } : null;
  } catch {
    return null;
  }
}

/** A same-site path to return to after signing in; anything else becomes "/". */
export function safeNext(next: unknown): string {
  if (typeof next !== "string" || !next.startsWith("/") || next.startsWith("//") || next.startsWith("/\\")) return "/";
  if (AUTH_PAGES.some((p) => next === p || next.startsWith(`${p}?`)) || next.startsWith(WAITING_PAGE)) return "/";
  return next;
}
