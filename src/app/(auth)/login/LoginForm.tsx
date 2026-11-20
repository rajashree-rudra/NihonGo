"use client";

import { useActionState } from "react";
import { LogIn } from "lucide-react";
import { buttonClass } from "@/components/ui/Button";
import { Field, FormError, PasswordInput, fieldProps, inputClass } from "@/components/auth/Field";
import { signIn } from "../actions";

export function LoginForm({ next, email }: { next: string; email?: string }) {
  const [state, action, pending] = useActionState(signIn, undefined);
  return (
    <form action={action} className="space-y-4">
      <input type="hidden" name="next" value={next} />
      <Field label="Email" name="email">
        <input {...fieldProps("email")} type="email" autoComplete="email" required defaultValue={state?.values?.email ?? email} className={inputClass} />
      </Field>
      <Field label="Password" name="password">
        <PasswordInput {...fieldProps("password")} autoComplete="current-password" required />
      </Field>
      <FormError>{state?.error}</FormError>
      <button type="submit" disabled={pending} className={buttonClass({ variant: "accent", className: "w-full" })}>
        <LogIn className="size-[18px]" />
        {pending ? "Signing in…" : "Sign in"}
      </button>
      <p className="text-center text-[13px] text-muted">Forgot your password? Ask the admin to reset it.</p>
    </form>
  );
}
