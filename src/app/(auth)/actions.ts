"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { isAdminEmail } from "@/lib/auth";
import { VIEWER_COOKIE, roleOf, safeNext, viewerCookie } from "@/lib/access";
import { parseRegistration, type FormValues } from "@/lib/registration";
import { supabaseServer, supabaseService } from "@/lib/supabase/server";

export type FormState = { error?: string; fieldErrors?: Record<string, string>; values?: FormValues } | undefined;

/** Set after registering, read by /login. */
const REGISTERED_COOKIE = "nihongo-registered";

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
  // Update the header's account cookie now: a redirect from a Server Function skips the proxy.
  (await cookies()).set(viewerCookie(data.user, process.env.NODE_ENV === "production"));
  // An admin signing in to the site is signed in to the admin panel too (its own, independent session).
  if (roleOf(data.user) === "admin") await (await supabaseServer("admin")).auth.signInWithPassword({ email, password });
  redirect(safeNext(form.get("next")));
}

/** Creates the account. The person then signs in on /login (registering doesn't sign them in). */
export async function register(_prev: FormState, form: FormData): Promise<FormState> {
  // Bots fill every field, including this hidden one.
  if (String(form.get("website") ?? "")) return { error: "Couldn't create the account. Please try again." };

  const { data: reg, errors, values } = parseRegistration(form);
  if (!reg) return { fieldErrors: errors, values };

  const role = isAdminEmail(reg.email) ? "admin" : "user";
  const auth = supabaseService().auth.admin;
  // Created already confirmed: there's no email check.
  const { data, error } = await auth.createUser({
    email: reg.email,
    password: reg.password,
    email_confirm: true,
    user_metadata: { full_name: reg.fullName },
    app_metadata: { role },
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
    await db().profile.create({ data: { id: data.user.id, ...details, role } });
  } catch (e) {
    console.error("register: profile insert failed", e);
    await auth.deleteUser(data.user.id); // don't leave an account without its details
    return { error: "Couldn't create the account. Please try again.", values };
  }

  // The sign-in page greets them and fills in their email (kept out of the URL).
  (await cookies()).set(REGISTERED_COOKIE, reg.email, { path: "/login", maxAge: 600, httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" });
  const next = safeNext(form.get("next"));
  redirect(`/login?registered=1${next === "/" ? "" : `&next=${encodeURIComponent(next)}`}`);
}

/** Signs out of the site only (this browser); an admin panel session stays. */
export async function signOut(): Promise<void> {
  const supabase = await supabaseServer();
  await supabase.auth.signOut({ scope: "local" });
  (await cookies()).delete(VIEWER_COOKIE);
  redirect("/login");
}
