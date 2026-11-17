"use client";

import { createBrowserClient } from "@supabase/ssr";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./env";

let client: ReturnType<typeof createBrowserClient> | undefined;

/** Supabase in the browser (reads the session the server set in cookies). */
export function supabaseBrowser() {
  return (client ??= createBrowserClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY));
}
