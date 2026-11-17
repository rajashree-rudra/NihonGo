"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { isAdminEmail } from "@/lib/auth";
import { VIEWER_COOKIE, accessOf, safeNext, viewerCookie } from "@/lib/access";
import { parseRegistration, type FormValues } from "@/lib/registration";
import { supabaseServer, supabaseService } from "@/lib/supabase/server";

export type FormState = { error?: string; fieldErrors?: Record<string, string>; values?: FormValues } | undefined;

/** Updates the header's account cookie right away (a redirect from a Server Function skips the proxy). */
async function rememberViewer(user: Parameters<typeof viewerCookie>[0] | null | undefined) {
  if (user) (await cookies()).set(viewerCookie(user, process.env.NODE_ENV === "production"));
}

export async function signIn(_prev: FormState, form: FormData): Promise<FormState> {
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const password = String(form.get("password") ?? "");
  if (!email || !password) return { error: "Enter your email and password.", values: { email } };

  const supabase = await supabaseServer();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    const wrong = error.code === "invalid_credentials" || error.status === 400;
    return { error: wrong ? "Wrong email or password." : "Couldn't sign in right now. Please try again.", values: { email } };
  }
  await rememberViewer(data.user);
  // An admin signing in to the site is signed in to the admin panel too (its own, independent session).
  if (accessOf(data.user).role === "admin") await (await supabaseServer("admin")).auth.signInWithPassword({ email, password });
  redirect(accessOf(data.user).access === "approved" ? safeNext(form.get("next")) : "/pending");
}

/** Creates the account and its access request, then signs the person in. */
export async function register(_prev: FormState, form: FormData): Promise<FormState> {
  // Bots fill every field, including this hidden one.
  if (String(form.get("website") ?? "")) return { error: "Couldn't create the account. Please try again." };

  const { data: reg, errors, values } = parseRegistration(form);
  if (!reg) return { fieldErrors: errors, values };

  const admin = isAdminEmail(reg.email);
  const auth = supabaseService().auth.admin;
  // Created already confirmed: there's no email check yet — the admin's approval is the check.
  const { data, error } = await auth.createUser({
    email: reg.email,
    password: reg.password,
    email_confirm: true,
    user_metadata: { full_name: reg.fullName },
    app_metadata: { access: admin ? "approved" : "pending", role: admin ? "admin" : "user" },
  });
  if (error || !data.user) {
    if (error?.code === "email_exists" || error?.status === 422) {
      return { fieldErrors: { email: "An account with this email already exists. Sign in instead." }, values };
    }
    if (error?.code === "weak_password") return { fieldErrors: { password: "Choose a stronger password." }, values };
    console.error("register: createUser failed", error);
    return { error: "Couldn't create the account. Please try again.", values };
  }

  const { password: _password, ...details } = reg;
  try {
    await db().profile.create({
      data: { id: data.user.id, ...details, status: admin ? "approved" : "pending", role: admin ? "admin" : "user", reviewedAt: admin ? new Date() : null },
    });
  } catch (e) {
    console.error("register: profile insert failed", e);
    await auth.deleteUser(data.user.id); // don't leave an account without its details
    return { error: "Couldn't create the account. Please try again.", values };
  }

  const supabase = await supabaseServer();
  const { data: session } = await supabase.auth.signInWithPassword({ email: reg.email, password: reg.password });
  await rememberViewer(session.user);
  if (admin) await (await supabaseServer("admin")).auth.signInWithPassword({ email: reg.email, password: reg.password });
  redirect(admin ? "/admin" : "/pending");
}

/** Signs out of the site only (this browser); an admin panel session stays. */
export async function signOut(): Promise<void> {
  const supabase = await supabaseServer();
  await supabase.auth.signOut({ scope: "local" });
  (await cookies()).delete(VIEWER_COOKIE);
  redirect("/login");
}

/** On /pending: fetches a fresh sign-in token (with the admin's latest decision) and goes on if approved. */
export async function refreshAccess(): Promise<void> {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.refreshSession();
  if (!data.session) redirect("/login");
  await rememberViewer(data.user);
  redirect(accessOf(data.user).access === "approved" ? "/" : "/pending");
}
