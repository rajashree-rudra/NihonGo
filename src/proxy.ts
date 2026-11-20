// Runs before every page and keeps the sign-in sessions fresh (a token refresh writes new cookies; sessions last
// as long as the browser keeps cookies — 400 days, renewed whenever the site is used).
//
// Site:
//   /  and  /n5                        open to everyone (landing page, level page)
//   /n5/kanji, /n5/kanji/practice|test everyone: signed-out visitors get the preview (src/data/preview.ts + Register
//                                      gate); signed-in accounts get the full page, served from /full/n5/kanji/…
//   /n5/kanji/quiz                     signed-in only (others go to /login and come back after)
// Admin panel (/admin): its own, independent sign-in at /admin/login, whatever account the site is signed in as.
// Server Functions and API routes check access again themselves — this is the front door, not the only lock.
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { AUTH_PAGES, PUBLIC_API, VIEWER_COOKIE, roleOf, viewerCookie } from "@/lib/access";
import { ADMIN_SESSION_COOKIE, SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "@/lib/supabase/env";

const ADMIN_LOGIN = "/admin/login";
/** Pages with a preview and a full version: /<level>/<module>, and its practice and test, e.g. /n5/kanji/test */
const PREVIEWED = /^\/n[1-5]\/[a-z-]+(\/(practice|test))?$/;

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (PUBLIC_API.includes(pathname)) return NextResponse.next();
  const adminArea = pathname === "/admin" || pathname.startsWith("/admin/");
  let response = NextResponse.next({ request });

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    ...(adminArea && { cookieOptions: ADMIN_SESSION_COOKIE }),
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll(cookiesToSet, headers) {
        for (const { name, value } of cookiesToSet) request.cookies.set(name, value);
        response = NextResponse.next({ request });
        for (const { name, value, options } of cookiesToSet) response.cookies.set(name, value, options);
        for (const [key, value] of Object.entries(headers)) response.headers.set(key, value);
      },
    },
  });

  // Verifies the token (locally, with the project's public signing key) and refreshes it when it's about to expire.
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;

  /** A redirect or rewrite that keeps the cookies set above (refreshed session, account hint) and their no-cache headers. */
  const withCookies = (res: NextResponse) => {
    for (const cookie of response.cookies.getAll()) res.cookies.set(cookie);
    for (const key of ["Cache-Control", "Expires", "Pragma"]) {
      const value = response.headers.get(key);
      if (value) res.headers.set(key, value);
    }
    return res;
  };
  const redirect = (url: URL) => {
    const res = withCookies(NextResponse.redirect(url));
    res.headers.set("Cache-Control", "private, no-store");
    return res;
  };
  const to = (path: string) => new URL(path, request.url);

  if (adminArea) {
    const admin = claims && roleOf(claims) === "admin";
    if (pathname === ADMIN_LOGIN) return admin ? redirect(to("/admin")) : response;
    return admin ? response : redirect(to(ADMIN_LOGIN));
  }

  const full = pathname.startsWith("/full/");
  const depth = pathname.split("/").filter(Boolean).length;

  if (!claims) {
    if (request.cookies.has(VIEWER_COOKIE)) response.cookies.delete(VIEWER_COOKIE);
    if (pathname.startsWith("/api/")) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
    if (full) return redirect(to(pathname.slice("/full".length) + search)); // the members' copy: back to the preview
    if (depth <= 2 || PREVIEWED.test(pathname)) return response; // landing, levels, previews, /login, /register
    const login = to("/login");
    login.searchParams.set("next", pathname + search);
    return redirect(login);
  }

  const viewer = viewerCookie(claims, request.nextUrl.protocol === "https:");
  if (request.cookies.get(VIEWER_COOKIE)?.value !== viewer.value) response.cookies.set(viewer);

  if (AUTH_PAGES.includes(pathname)) return redirect(to("/"));
  // Signed in: the full page, at its own address.
  if (PREVIEWED.test(pathname)) return withCookies(NextResponse.rewrite(to(`/full${pathname}${search}`), { request }));
  return response;
}

export const config = {
  matcher: [
    // Everything except build files and public assets (pictures, stroke data, audio, icons).
    "/((?!_next/static|_next/image|audio/|strokes/|vocab-art/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp3|json|txt|xml|webmanifest|woff2?)$).*)",
  ],
};
