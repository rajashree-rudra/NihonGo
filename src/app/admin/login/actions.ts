"use server";

import { redirect } from "next/navigation";
import { accessOf } from "@/lib/access";
import { isAdminAccount } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";

export type AdminLoginState = { error?: string; email?: string } | undefined;

/** Signs in to the admin panel only — the site's own sign-in (if any) is left as it is. */
export async function adminSignIn(_prev: AdminLoginState, form: FormData): Promise<AdminLoginState> {
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const password = String(form.get("password") ?? "");
  if (!email || !password) return { error: "Enter your email and password.", email };

  const supabase = await supabaseServer("admin");
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    const wrong = error.code === "invalid_credentials" || error.status === 400;
    return { error: wrong ? "Wrong email or password." : "Couldn't sign in right now. Please try again.", email };
  }
  if (accessOf(data.user).role !== "admin" || !(await isAdminAccount(data.user.id))) {
    await supabase.auth.signOut({ scope: "local" });
    return { error: "This account doesn't have admin access.", email };
  }
  redirect("/admin");
}

/** Signs out of the admin panel only (this browser); the site stays signed in. */
export async function adminSignOut(): Promise<void> {
  const supabase = await supabaseServer("admin");
  await supabase.auth.signOut({ scope: "local" });
  redirect("/admin/login");
}
