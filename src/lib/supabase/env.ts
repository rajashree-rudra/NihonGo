// Public Supabase settings (safe in the browser: Row Level Security protects the data).
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
export const SUPABASE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

/**
 * Two independent sign-ins: the site (learners) and the admin panel. The admin session has its own cookie,
 * sent only to /admin, so an admin can stay signed in to the panel whatever account the site is signed in as.
 */
export type Area = "site" | "admin";
export const ADMIN_SESSION_COOKIE = { name: "sb-nihongo-admin", path: "/admin" };
