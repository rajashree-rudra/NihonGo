import "server-only";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { accessOf, type Access, type Role } from "@/lib/access";
import type { Area } from "@/lib/supabase/env";
import { supabaseServer, supabaseService } from "@/lib/supabase/server";

export interface Viewer {
  id: string;
  email: string;
  name: string;
  access: Access;
  role: Role;
}

/** The account signed in to the site or to the admin panel (from its verified sign-in token), or null. */
export async function getViewer(area: Area = "site"): Promise<Viewer | null> {
  const supabase = await supabaseServer(area);
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;
  if (!claims) return null;
  return {
    id: claims.sub,
    email: claims.email ?? "",
    name: String(claims.user_metadata?.full_name ?? ""),
    ...accessOf(claims),
  };
}

/** Is this account an approved admin? Checked in the database, not only in the token. */
export async function isAdminAccount(id: string): Promise<boolean> {
  const profile = await db().profile.findUnique({ where: { id }, select: { role: true, status: true } });
  return profile?.role === "admin" && profile.status === "approved";
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

/** Records the admin's decision: in the account's sign-in token first, then in its profile. */
export async function setAccess(userId: string, status: Access): Promise<void> {
  const profile = await db().profile.findUniqueOrThrow({ where: { id: userId }, select: { role: true } });
  const { error } = await supabaseService().auth.admin.updateUserById(userId, {
    app_metadata: { access: status, role: profile.role },
  });
  if (error) throw error;
  await db().profile.update({ where: { id: userId }, data: { status, reviewedAt: new Date() } });
}
