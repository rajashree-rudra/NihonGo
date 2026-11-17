import "server-only";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { ADMIN_SESSION_COOKIE, SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL, type Area } from "./env";

/** Supabase for the signed-in visitor of the site or of the admin panel (session in cookies). One per request. */
export async function supabaseServer(area: Area = "site") {
  const cookieStore = await cookies();
  return createServerClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    ...(area === "admin" && { cookieOptions: ADMIN_SESSION_COOKIE }),
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) cookieStore.set(name, value, options);
        } catch {
          // Server Components can't set cookies; the proxy keeps the session fresh instead.
        }
      },
    },
  });
}

/** Supabase with the secret key: creates accounts and changes access. Never import from client code. */
export function supabaseService() {
  const secret = process.env.SUPABASE_SECRET_KEY;
  if (!secret) throw new Error("SUPABASE_SECRET_KEY is not set (see .env.local)");
  return createClient(SUPABASE_URL, secret, { auth: { persistSession: false, autoRefreshToken: false } });
}
