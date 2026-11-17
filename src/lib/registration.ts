// The registration form's fields and their checks — shared by the form (labels, hints) and the server (validation).

export const COUNTRIES = ["Japan", "Bangladesh", "India", "Philippines", "Vietnam", "China"] as const;
export const OTHER_COUNTRY = "Other";

/** What the region and postal code are called in each country, with an example. */
export const ADDRESS_HINTS: Record<string, { region: string; postal: string; postalExample: string }> = {
  Japan: { region: "Prefecture", postal: "Postal code", postalExample: "123-4567" },
  Bangladesh: { region: "Division / District", postal: "Postal code", postalExample: "1207" },
  India: { region: "State", postal: "PIN code", postalExample: "110001" },
  Philippines: { region: "Province", postal: "ZIP code", postalExample: "1000" },
  Vietnam: { region: "Province / City", postal: "Postal code", postalExample: "100000" },
  China: { region: "Province", postal: "Postal code", postalExample: "100000" },
  [OTHER_COUNTRY]: { region: "State / Province / Region", postal: "Postal code", postalExample: "" },
};

export const JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const;
export type JlptLevel = (typeof JLPT_LEVELS)[number];

export const OCCUPATIONS = ["Student", "Office worker", "Engineer / IT", "Teacher", "Nurse / Caregiver", "Self-employed", "Job seeker"];

export const PASSWORD_MIN = 8;

export interface Registration {
  fullName: string;
  email: string;
  password: string;
  country: string;
  postalCode: string;
  region: string;
  city: string;
  addressLine1: string;
  addressLine2: string | null;
  occupation: string;
  passedLevel: JlptLevel | null;
  targetLevel: JlptLevel;
}

/** Field values to put back into the form after an error (never the password). */
export type FormValues = Partial<Record<string, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Reads and checks the form. Returns the registration, or an error per field. */
export function parseRegistration(form: FormData): { data?: Registration; errors: Record<string, string>; values: FormValues } {
  const get = (k: string) => String(form.get(k) ?? "").trim().replace(/\s+/g, " ");
  const values: FormValues = {};
  for (const k of ["fullName", "email", "country", "otherCountry", "postalCode", "region", "city", "addressLine1", "addressLine2", "occupation", "passedLevel", "targetLevel"]) {
    values[k] = get(k);
  }
  const errors: Record<string, string> = {};
  const need = (k: string, label: string, max = 120) => {
    const v = values[k] ?? "";
    if (!v) errors[k] = `Enter your ${label}.`;
    else if (v.length > max) errors[k] = `Keep it under ${max} characters.`;
    return v;
  };

  const fullName = need("fullName", "full name", 100);
  const email = need("email", "email", 254).toLowerCase();
  if (email && !errors.email && !EMAIL.test(email)) errors.email = "Enter a valid email address.";

  const password = String(form.get("password") ?? "");
  if (password.length < PASSWORD_MIN) errors.password = `Use at least ${PASSWORD_MIN} characters.`;
  else if (password.length > 72) errors.password = "Use at most 72 characters.";
  else if (password !== String(form.get("confirmPassword") ?? "")) errors.confirmPassword = "The passwords don't match.";

  let country = values.country ?? "";
  if (country === OTHER_COUNTRY) country = need("otherCountry", "country", 60);
  else if (!(COUNTRIES as readonly string[]).includes(country)) errors.country = "Choose your country.";

  const postalCode = need("postalCode", "postal code", 16);
  const region = need("region", "prefecture / state", 100);
  const city = need("city", "city", 100);
  const addressLine1 = need("addressLine1", "address", 200);
  const addressLine2 = values.addressLine2 ?? "";
  if (addressLine2.length > 200) errors.addressLine2 = "Keep it under 200 characters.";
  const occupation = need("occupation", "occupation", 100);

  const passed = values.passedLevel ?? "";
  const passedLevel = (JLPT_LEVELS as readonly string[]).includes(passed) ? (passed as JlptLevel) : null;
  if (passed && passed !== "none" && !passedLevel) errors.passedLevel = "Choose a level.";
  const target = values.targetLevel ?? "";
  if (!(JLPT_LEVELS as readonly string[]).includes(target)) errors.targetLevel = "Choose the level you're aiming for.";

  if (Object.keys(errors).length) return { errors, values };
  return {
    errors,
    values,
    data: {
      fullName,
      email,
      password,
      country,
      postalCode,
      region,
      city,
      addressLine1,
      addressLine2: addressLine2 || null,
      occupation,
      passedLevel,
      targetLevel: target as JlptLevel,
    },
  };
}
