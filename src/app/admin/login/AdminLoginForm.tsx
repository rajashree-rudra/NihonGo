"use client";

import { useActionState } from "react";
import { ShieldCheck } from "lucide-react";
import { buttonClass } from "@/components/ui/Button";
import { Field, FormError, PasswordInput, fieldProps, inputClass } from "@/components/auth/Field";
import { adminSignIn } from "./actions";

export function AdminLoginForm() {
  const [state, action, pending] = useActionState(adminSignIn, undefined);
  return (
    <form action={action} className="space-y-4">
      <Field label="Admin email" name="email">
        <input {...fieldProps("email")} type="email" autoComplete="username" required defaultValue={state?.email} className={inputClass} />
      </Field>
      <Field label="Password" name="password">
        <PasswordInput {...fieldProps("password")} autoComplete="current-password" required />
      </Field>
      <FormError>{state?.error}</FormError>
      <button type="submit" disabled={pending} className={buttonClass({ variant: "primary", className: "w-full" })}>
        <ShieldCheck className="size-[18px]" />
        {pending ? "Signing in…" : "Sign in to admin panel"}
      </button>
    </form>
  );
}
