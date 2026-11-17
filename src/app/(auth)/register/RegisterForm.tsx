"use client";

import { useActionState, useState, type ReactNode } from "react";
import { Send } from "lucide-react";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/components/ui/cn";
import { Field, FormError, PasswordInput, fieldProps, inputClass } from "@/components/auth/Field";
import { ADDRESS_HINTS, COUNTRIES, JLPT_LEVELS, OCCUPATIONS, OTHER_COUNTRY, PASSWORD_MIN } from "@/lib/registration";
import { register, type FormState } from "../actions";

const selectClass = cn(inputClass, "appearance-none bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%238b8279' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E\")] bg-[right_0.85rem_center] bg-no-repeat pr-10");

export function RegisterForm() {
  const [state, action, pending] = useActionState(register, undefined);
  // Remount with the returned values after an error, so every field (and the country hints) starts from them.
  return <Fields key={JSON.stringify(state?.values ?? {})} state={state} action={action} pending={pending} />;
}

function Fields({ state, action, pending }: { state: FormState; action: (form: FormData) => void; pending: boolean }) {
  const v = state?.values ?? {};
  const err = state?.fieldErrors ?? {};
  const [country, setCountry] = useState(v.country ?? "");
  const hints = ADDRESS_HINTS[country] ?? ADDRESS_HINTS[OTHER_COUNTRY];

  const text = (name: string, props: Record<string, unknown> = {}) => (
    <input {...fieldProps(name, err[name])} defaultValue={v[name]} className={inputClass} {...props} />
  );

  return (
    <form action={action} className="space-y-7" noValidate>
      {/* Honeypot: hidden from people, filled by bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] size-px opacity-0" />

      <Section title="Account">
        <Field label="Full name" name="fullName" error={err.fullName} className="sm:col-span-2">
          {text("fullName", { autoComplete: "name", required: true, maxLength: 100 })}
        </Field>
        <Field label="Email" name="email" error={err.email} className="sm:col-span-2">
          {text("email", { type: "email", autoComplete: "email", required: true, maxLength: 254 })}
        </Field>
        <Field label="Password" name="password" error={err.password} hint={`At least ${PASSWORD_MIN} characters.`}>
          <PasswordInput {...fieldProps("password", err.password)} autoComplete="new-password" required minLength={PASSWORD_MIN} maxLength={72} />
        </Field>
        <Field label="Confirm password" name="confirmPassword" error={err.confirmPassword}>
          <PasswordInput {...fieldProps("confirmPassword", err.confirmPassword)} autoComplete="new-password" required maxLength={72} />
        </Field>
      </Section>

      <Section title="Address">
        <Field label="Country" name="country" error={err.country} className={country === OTHER_COUNTRY ? undefined : "sm:col-span-2"}>
          <select
            {...fieldProps("country", err.country)}
            autoComplete="country-name"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={cn(selectClass, !country && "text-muted")}
          >
            <option value="" disabled>
              Choose your country
            </option>
            {COUNTRIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
            <option value={OTHER_COUNTRY}>Other country</option>
          </select>
        </Field>
        {country === OTHER_COUNTRY && (
          <Field label="Country name" name="otherCountry" error={err.otherCountry}>
            {text("otherCountry", { autoComplete: "country-name", required: true, maxLength: 60 })}
          </Field>
        )}
        <Field label={hints.postal} name="postalCode" error={err.postalCode}>
          {text("postalCode", { autoComplete: "postal-code", required: true, maxLength: 16, placeholder: hints.postalExample || undefined })}
        </Field>
        <Field label={hints.region} name="region" error={err.region}>
          {text("region", { autoComplete: "address-level1", required: true, maxLength: 100 })}
        </Field>
        <Field label="City" name="city" error={err.city} className="sm:col-span-2">
          {text("city", { autoComplete: "address-level2", required: true, maxLength: 100 })}
        </Field>
        <Field label="Address" name="addressLine1" error={err.addressLine1} className="sm:col-span-2" hint="Area, street, building and number.">
          {text("addressLine1", { autoComplete: "address-line1", required: true, maxLength: 200 })}
        </Field>
        <Field label="Apartment, room, etc." name="addressLine2" error={err.addressLine2} optional className="sm:col-span-2">
          {text("addressLine2", { autoComplete: "address-line2", maxLength: 200 })}
        </Field>
      </Section>

      <Section title="About you">
        <Field label="Occupation" name="occupation" error={err.occupation} className="sm:col-span-2">
          {text("occupation", { autoComplete: "organization-title", required: true, maxLength: 100, list: "occupations", placeholder: "e.g. Student" })}
          <datalist id="occupations">
            {OCCUPATIONS.map((o) => (
              <option key={o} value={o} />
            ))}
          </datalist>
        </Field>
        <Field label="JLPT passed" name="passedLevel" error={err.passedLevel} hint="The highest level you've passed.">
          <select {...fieldProps("passedLevel", err.passedLevel)} defaultValue={v.passedLevel || "none"} className={selectClass}>
            <option value="none">None yet</option>
            {JLPT_LEVELS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </Field>
        <Field label="Target level" name="targetLevel" error={err.targetLevel} hint="The level you're studying for.">
          <select {...fieldProps("targetLevel", err.targetLevel)} required defaultValue={v.targetLevel || ""} className={selectClass}>
            <option value="" disabled>
              Choose a level
            </option>
            {JLPT_LEVELS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </Field>
      </Section>

      <div className="space-y-3">
        <FormError>{state?.error ?? (Object.keys(err).length ? "Please check the highlighted fields." : undefined)}</FormError>
        <button type="submit" disabled={pending} className={buttonClass({ variant: "accent", className: "w-full" })}>
          <Send className="size-[18px]" />
          {pending ? "Sending request…" : "Request access"}
        </button>
        <p className="text-center text-[13px] text-muted">The admin reviews every request. You can start learning once yours is approved.</p>
      </div>
    </form>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">{title}</legend>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}
