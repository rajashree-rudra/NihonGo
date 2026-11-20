"use client";

import { useActionState, useEffect, useRef, useState, type ReactNode } from "react";
import { CircleCheck, Loader2, MapPin, UserPlus } from "lucide-react";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/components/ui/cn";
import { Field, FormError, PasswordInput, fieldProps, inputClass } from "@/components/auth/Field";
import type { Country } from "@/lib/countries";
import { EMAIL_ERROR, JLPT_LEVELS, MONTHS, OLDEST_BIRTH_YEAR, PASSWORD_MIN, addressLabels, daysInMonth, isValidEmail } from "@/lib/registration";
import type { PostcodeResult } from "@/app/api/postcode/route";
import { register, type FormState } from "../actions";

const selectClass = cn(
  inputClass,
  "appearance-none bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%238b8279' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E\")] bg-[right_0.85rem_center] bg-no-repeat pr-10",
);

interface Props {
  countries: Country[];
  common: string[];
  thisYear: number;
  /** Where to go after signing in */
  next: string;
}

export function RegisterForm(props: Props) {
  const [state, action, pending] = useActionState(register, undefined);
  // Remount with the returned values after an error, so every field starts from them.
  return <Fields key={JSON.stringify(state?.values ?? {})} {...props} state={state} action={action} pending={pending} />;
}

type Lookup = "idle" | "looking" | "found" | "missing";

function Fields({ countries, common, thisYear, next, state, action, pending }: Props & { state: FormState; action: (form: FormData) => void; pending: boolean }) {
  const v = state?.values ?? {};
  const serverErr = state?.fieldErrors ?? {};
  const [emailErr, setEmailErr] = useState<string | undefined>();
  const err = { ...serverErr, ...(emailErr !== undefined && { email: emailErr || undefined }) } as Record<string, string | undefined>;

  const [year, setYear] = useState(v.dobYear ?? "");
  const [month, setMonth] = useState(v.dobMonth ?? "");
  const [day, setDay] = useState(v.dobDay ?? "");
  const maxDay = month ? daysInMonth(Number(year), Number(month)) : 31;
  useEffect(() => {
    if (Number(day) > maxDay) setDay("");
  }, [day, maxDay]);

  const [country, setCountry] = useState(v.country ?? "");
  const [postal, setPostal] = useState(v.postalCode ?? "");
  const [region, setRegion] = useState(v.region ?? "");
  const [city, setCity] = useState(v.city ?? "");
  const [area, setArea] = useState(v.area ?? "");
  const [lookup, setLookup] = useState<Lookup>("idle");
  const [options, setOptions] = useState<{ city?: string[]; area?: string[] }>({});
  const labels = addressLabels(country);
  // The country + postcode last looked up. Starts as the values put back after an error, which stay as they were.
  const looked = useRef(`${v.country ?? ""}|${v.postalCode ?? ""}`);

  // Postcode (or country) changed: look the address up after a short pause and fill in what it covers.
  useEffect(() => {
    const code = postal.trim();
    const key = `${country}|${code}`;
    if (key === looked.current) return;
    if (!country || code.replace(/[\s-]/g, "").length < 3) {
      setLookup("idle");
      return;
    }
    const ctrl = new AbortController();
    const timer = setTimeout(async () => {
      looked.current = key;
      setLookup("looking");
      try {
        const res = await fetch(`/api/postcode?country=${country}&code=${encodeURIComponent(code)}`, { signal: ctrl.signal });
        const r = (await res.json()) as PostcodeResult;
        if (!r.found) return setLookup("missing");
        setRegion(r.region ?? "");
        setCity(r.city ?? "");
        setArea(r.area ?? "");
        setOptions({ city: r.cityOptions, area: r.areaOptions });
        setLookup("found");
      } catch {
        if (!ctrl.signal.aborted) setLookup("missing");
      }
    }, 450);
    return () => {
      clearTimeout(timer);
      ctrl.abort();
    };
  }, [country, postal]);

  const commonSet = new Set(common);
  const others = countries.filter((c) => !commonSet.has(c.code));
  const commonList = common.map((code) => countries.find((c) => c.code === code)).filter((c): c is Country => !!c);

  return (
    <form action={action} className="space-y-7" noValidate>
      <input type="hidden" name="next" value={next} />
      {/* Honeypot: hidden from people, filled by bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] size-px opacity-0" />

      <Section title="Account">
        <Field label="JLPT target" name="targetLevel" required error={err.targetLevel} hint="The level you're studying for." className="sm:col-span-2">
          <select {...fieldProps("targetLevel", err.targetLevel)} required defaultValue={v.targetLevel || ""} className={selectClass}>
            <option value="" disabled>
              Choose a level
            </option>
            {JLPT_LEVELS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </Field>
        <Field label="Full name" name="fullName" required error={err.fullName} className="sm:col-span-2">
          <input {...fieldProps("fullName", err.fullName)} defaultValue={v.fullName} autoComplete="name" required maxLength={100} className={inputClass} />
        </Field>
        <Field label="Email" name="email" required error={err.email} className="sm:col-span-2">
          <input
            {...fieldProps("email", err.email)}
            type="email"
            defaultValue={v.email}
            autoComplete="email"
            required
            maxLength={254}
            className={inputClass}
            onBlur={(e) => {
              const value = e.target.value.trim();
              setEmailErr(value && !isValidEmail(value) ? EMAIL_ERROR : "");
            }}
            onChange={(e) => emailErr && isValidEmail(e.target.value.trim()) && setEmailErr("")}
          />
        </Field>
        <Field label="Password" name="password" required error={err.password} hint={`At least ${PASSWORD_MIN} characters.`}>
          <PasswordInput {...fieldProps("password", err.password)} autoComplete="new-password" required minLength={PASSWORD_MIN} maxLength={72} />
        </Field>
        <Field label="Confirm password" name="confirmPassword" required error={err.confirmPassword}>
          <PasswordInput {...fieldProps("confirmPassword", err.confirmPassword)} autoComplete="new-password" required maxLength={72} />
        </Field>
      </Section>

      <fieldset aria-describedby={err.dateOfBirth ? "dateOfBirth-error" : undefined}>
        <legend className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          Date of birth<span className="ml-0.5 text-shu">*</span>
        </legend>
        <div className="grid grid-cols-[1fr_1.4fr_0.9fr] gap-3">
          <select name="dobYear" aria-label="Year" value={year} onChange={(e) => setYear(e.target.value)} autoComplete="bday-year" aria-invalid={err.dateOfBirth ? true : undefined} className={cn(selectClass, !year && "text-muted")}>
            <option value="">Year</option>
            {Array.from({ length: thisYear - OLDEST_BIRTH_YEAR + 1 }, (_, i) => thisYear - i).map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <select name="dobMonth" aria-label="Month" value={month} onChange={(e) => setMonth(e.target.value)} autoComplete="bday-month" aria-invalid={err.dateOfBirth ? true : undefined} className={cn(selectClass, !month && "text-muted")}>
            <option value="">Month</option>
            {MONTHS.map((name, i) => (
              <option key={name} value={i + 1}>
                {name}
              </option>
            ))}
          </select>
          <select name="dobDay" aria-label="Day" value={day} onChange={(e) => setDay(e.target.value)} autoComplete="bday-day" aria-invalid={err.dateOfBirth ? true : undefined} className={cn(selectClass, !day && "text-muted")}>
            <option value="">Day</option>
            {Array.from({ length: maxDay }, (_, i) => i + 1).map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        {err.dateOfBirth && (
          <p id="dateOfBirth-error" className="mt-1.5 text-[13px] font-medium text-shu">
            {err.dateOfBirth}
          </p>
        )}
      </fieldset>

      <Section title="Address">
        <Field label="Country" name="country" required error={err.country} className="sm:col-span-2">
          <select {...fieldProps("country", err.country)} autoComplete="country" required value={country} onChange={(e) => setCountry(e.target.value)} className={cn(selectClass, !country && "text-muted")}>
            <option value="" disabled>
              Choose your country
            </option>
            <optgroup label="Common">
              {commonList.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="All countries">
              {others.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </optgroup>
          </select>
        </Field>
        <Field
          label={labels.postal}
          name="postalCode"
          optional
          error={err.postalCode}
          className="sm:col-span-2"
          hint={<LookupHint state={lookup} hasCountry={!!country} />}
        >
          <input
            {...fieldProps("postalCode", err.postalCode)}
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
            autoComplete="postal-code"
            inputMode={country === "JP" || country === "IN" ? "numeric" : undefined}
            maxLength={16}
            placeholder={labels.postalExample || undefined}
            className={inputClass}
          />
        </Field>
        <Field label={labels.region} name="region" optional error={err.region}>
          <input {...fieldProps("region", err.region)} value={region} onChange={(e) => setRegion(e.target.value)} autoComplete="address-level1" maxLength={100} className={inputClass} />
        </Field>
        <Field label={labels.city} name="city" optional error={err.city}>
          <input {...fieldProps("city", err.city)} value={city} onChange={(e) => setCity(e.target.value)} autoComplete="address-level2" maxLength={100} list={options.city ? "city-options" : undefined} className={inputClass} />
          {options.city && <Options id="city-options" values={options.city} />}
        </Field>
        <Field label={labels.area} name="area" optional error={err.area} className="sm:col-span-2" hint={options.area ? `This postcode covers ${options.area.length} places — pick yours.` : undefined}>
          <input {...fieldProps("area", err.area)} value={area} onChange={(e) => setArea(e.target.value)} autoComplete="address-level3" maxLength={100} list={options.area ? "area-options" : undefined} className={inputClass} />
          {options.area && <Options id="area-options" values={options.area} />}
        </Field>
      </Section>

      <div className="space-y-3">
        <FormError>{state?.error ?? (Object.keys(serverErr).length ? "Please check the highlighted fields." : undefined)}</FormError>
        <button type="submit" disabled={pending} className={buttonClass({ variant: "accent", className: "w-full" })}>
          <UserPlus className="size-[18px]" />
          {pending ? "Creating your account…" : "Create account"}
        </button>
        <p className="text-center text-[13px] text-muted">
          <span className="text-shu">*</span> Required. After registering, sign in with your email and password.
        </p>
      </div>
    </form>
  );
}

function LookupHint({ state, hasCountry }: { state: Lookup; hasCountry: boolean }) {
  if (state === "looking")
    return (
      <span className="inline-flex items-center gap-1.5">
        <Loader2 className="size-3.5 animate-spin" /> Looking up the address…
      </span>
    );
  if (state === "found")
    return (
      <span className="inline-flex items-center gap-1.5 text-matcha">
        <CircleCheck className="size-3.5" /> Address filled in — check it and change anything that's wrong.
      </span>
    );
  if (state === "missing") return <span>We couldn&apos;t find this postcode — please type your address below.</span>;
  return (
    <span className="inline-flex items-center gap-1.5">
      <MapPin className="size-3.5" /> {hasCountry ? "Enter it and the address fills itself in." : "Choose your country first."}
    </span>
  );
}

function Options({ id, values }: { id: string; values: string[] }) {
  return (
    <datalist id={id}>
      {values.map((o) => (
        <option key={o} value={o} />
      ))}
    </datalist>
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
