// Runs before every page and keeps the sign-in sessions fresh (a token refresh writes new cookies).
// - Site: signed-out visitors go to /login, accounts that aren't approved yet go to /pending.
// - Admin panel (/admin): its own, independent sign-in at /admin/login, whatever account the site is signed in as.
// Server Functions check access again themselves — this is the front door, not the only lock.
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { AUTH_PAGES, VIEWER_COOKIE, WAITING_PAGE, accessOf, viewerCookie } from "@/lib/access";
import { ADMIN_SESSION_COOKIE, SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "@/lib/supabase/env";

const ADMIN_LOGIN = "/admin/login";

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
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

  const redirect = (url: URL) => {
    const res = NextResponse.redirect(url);
    for (const cookie of response.cookies.getAll()) res.cookies.set(cookie);
    res.headers.set("Cache-Control", "private, no-store");
    return res;
  };
  const to = (path: string) => new URL(path, request.url);

  if (adminArea) {
    const admin = claims && accessOf(claims).role === "admin";
    if (pathname === ADMIN_LOGIN) return admin ? redirect(to("/admin")) : response;
    return admin ? response : redirect(to(ADMIN_LOGIN));
  }

  if (!claims) {
    if (request.cookies.has(VIEWER_COOKIE)) response.cookies.delete(VIEWER_COOKIE);
    if (AUTH_PAGES.includes(pathname)) return response;
    const login = to("/login");
    if (pathname !== "/") login.searchParams.set("next", pathname + search);
    return redirect(login);
  }

  const viewer = viewerCookie(claims, request.nextUrl.protocol === "https:");
  if (request.cookies.get(VIEWER_COOKIE)?.value !== viewer.value) response.cookies.set(viewer);

  if (accessOf(claims).access !== "approved") return pathname === WAITING_PAGE ? response : redirect(to(WAITING_PAGE));
  if (AUTH_PAGES.includes(pathname) || pathname === WAITING_PAGE) return redirect(to("/"));
  return response;
}

export const config = {
  matcher: [
    // Everything except build files and public assets (pictures, stroke data, audio, icons).
    "/((?!_next/static|_next/image|audio/|strokes/|vocab-art/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp3|json|txt|xml|webmanifest|woff2?)$).*)",
  ],
};
