// Who may use the site: every signed-in account. Admins (role "admin" in the account's Supabase `app_metadata`,
// which is inside the sign-in token) also get the admin panel, which has its own sign-in.

export type Role = "user" | "admin";

/** Pages for signed-out visitors only. */
export const AUTH_PAGES = ["/login", "/register"];
/** API routes that work without signing in (the registration form uses them). */
export const PUBLIC_API = ["/api/postcode"];

/** Reads the role from a sign-in token's claims (or a Supabase user object). */
export function roleOf(claims: { app_metadata?: Record<string, unknown> } | null | undefined): Role {
  return claims?.app_metadata?.role === "admin" ? "admin" : "user";
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

/** The viewer cookie for an account (its token claims or Supabase user object). */
export function viewerCookie(
  user: { email?: string; user_metadata?: Record<string, unknown>; app_metadata?: Record<string, unknown> },
  secure: boolean,
) {
  const hint: ViewerHint = { name: String(user.user_metadata?.full_name ?? ""), email: user.email ?? "", role: roleOf(user) };
  return {
    name: VIEWER_COOKIE,
    value: JSON.stringify(hint), // Next URL-encodes it when setting and decodes it when reading
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
  if (AUTH_PAGES.some((p) => next === p || next.startsWith(`${p}?`)) || next.startsWith("/api/")) return "/";
  return next;
}
