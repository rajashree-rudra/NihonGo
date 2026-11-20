import "server-only";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { roleOf, type Role } from "@/lib/access";
import type { Area } from "@/lib/supabase/env";
import { supabaseServer } from "@/lib/supabase/server";

export interface Viewer {
  id: string;
  email: string;
  name: string;
  role: Role;
}

/** The account signed in to the site or to the admin panel (from its verified sign-in token), or null. */
export async function getViewer(area: Area = "site"): Promise<Viewer | null> {
  const supabase = await supabaseServer(area);
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;
  if (!claims) return null;
  return { id: claims.sub, email: claims.email ?? "", name: String(claims.user_metadata?.full_name ?? ""), role: roleOf(claims) };
}

/** Is this account an admin? Checked in the database, not only in the token. */
export async function isAdminAccount(id: string): Promise<boolean> {
  const profile = await db().profile.findUnique({ where: { id }, select: { role: true } });
  return profile?.role === "admin";
}

/** For admin pages and actions: the admin signed in to the panel. Anyone else goes to the admin sign-in. */
export async function requireAdmin(): Promise<Viewer> {
  const admin = await getViewer("admin");
  if (admin?.role !== "admin" || !(await isAdminAccount(admin.id))) redirect("/admin/login");
  return admin;
}

/** Emails that become admins when they register (ADMIN_EMAILS, comma-separated). */
export function isAdminEmail(email: string): boolean {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .includes(email.toLowerCase());
}
