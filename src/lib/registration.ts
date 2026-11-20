// The registration form's fields and their checks — shared by the form (labels, hints) and the server (validation).
import { isCountryCode } from "./countries";

export const JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const;
export type JlptLevel = (typeof JLPT_LEVELS)[number];

export const PASSWORD_MIN = 8;
export const OLDEST_BIRTH_YEAR = 1920;
export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function daysInMonth(year: number, month: number): number {
  // month is 1–12; without a year, February may have 29 days
  return new Date(Date.UTC(year || 2000, month, 0)).getUTCDate();
}

/** What the address parts are called in a country, with a postcode example. */
export interface AddressLabels {
  postal: string;
  postalExample: string;
  region: string;
  city: string;
  area: string;
}

const LABELS: Record<string, Partial<AddressLabels>> = {
  JP: { postal: "Postal code", postalExample: "530-0001", region: "Prefecture", city: "City / ward", area: "Town" },
  BD: { postalExample: "1207", region: "Division / District" },
  IN: { postal: "PIN code", postalExample: "110001", region: "State", city: "District", area: "Area / post office" },
  PH: { postal: "ZIP code", postalExample: "1000", region: "Province" },
  VN: { postalExample: "100000", region: "Province / City", city: "District", area: "Ward / commune" },
  CN: { postalExample: "100000", region: "Province", city: "City", area: "District" },
  US: { postal: "ZIP code", postalExample: "90210", region: "State" },
  GB: { postal: "Postcode", postalExample: "SW1A 1AA", region: "County", city: "Town / city" },
};

export function addressLabels(country: string): AddressLabels {
  return { postal: "Postcode", postalExample: "", region: "State / Province / Region", city: "City", area: "Area / district", ...LABELS[country] };
}

export interface Registration {
  targetLevel: JlptLevel;
  fullName: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  country: string;
  postalCode: string | null;
  region: string | null;
  city: string | null;
  area: string | null;
}

/** Field values to put back into the form after an error (never the password). */
export type FormValues = Partial<Record<string, string>>;

const EMAIL = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

export const EMAIL_ERROR = "Enter a valid email address, like name@example.com.";

export function isValidEmail(email: string): boolean {
  return email.length <= 254 && EMAIL.test(email);
}

/** Reads and checks the form. Returns the registration, or an error per field. */
export function parseRegistration(form: FormData): { data?: Registration; errors: Record<string, string>; values: FormValues } {
  const get = (k: string) => String(form.get(k) ?? "").trim().replace(/\s+/g, " ");
  const values: FormValues = {};
  for (const k of ["targetLevel", "fullName", "email", "dobYear", "dobMonth", "dobDay", "country", "postalCode", "region", "city", "area"]) {
    values[k] = get(k);
  }
  const errors: Record<string, string> = {};
  const optional = (k: string, max: number) => {
    const v = values[k] ?? "";
    if (v.length > max) errors[k] = `Keep it under ${max} characters.`;
    return v || null;
  };

  const target = values.targetLevel ?? "";
  if (!(JLPT_LEVELS as readonly string[]).includes(target)) errors.targetLevel = "Choose the level you're aiming for.";

  const fullName = values.fullName ?? "";
  if (!fullName) errors.fullName = "Enter your full name.";
  else if (fullName.length > 100) errors.fullName = "Keep it under 100 characters.";

  const email = (values.email ?? "").toLowerCase();
  values.email = email;
  if (!email) errors.email = "Enter your email.";
  else if (!isValidEmail(email)) errors.email = EMAIL_ERROR;

  const password = String(form.get("password") ?? "");
  if (password.length < PASSWORD_MIN) errors.password = `Use at least ${PASSWORD_MIN} characters.`;
  else if (password.length > 72) errors.password = "Use at most 72 characters.";
  else if (password !== String(form.get("confirmPassword") ?? "")) errors.confirmPassword = "The passwords don't match.";

  const [y, m, d] = [Number(values.dobYear), Number(values.dobMonth), Number(values.dobDay)];
  let dateOfBirth: Date | null = null;
  if (!y || !m || !d) errors.dateOfBirth = "Choose your year, month and day of birth.";
  else if (y < OLDEST_BIRTH_YEAR || m < 1 || m > 12 || d < 1 || d > daysInMonth(y, m)) errors.dateOfBirth = "Choose a real date.";
  else {
    dateOfBirth = new Date(Date.UTC(y, m - 1, d));
    if (dateOfBirth > new Date()) errors.dateOfBirth = "Your date of birth can't be in the future.";
  }

  const country = values.country ?? "";
  if (!isCountryCode(country)) errors.country = "Choose your country.";
  const postalCode = optional("postalCode", 16);
  const region = optional("region", 100);
  const city = optional("city", 100);
  const area = optional("area", 100);

  if (Object.keys(errors).length || !dateOfBirth) return { errors, values };
  return {
    errors,
    values,
    data: { targetLevel: target as JlptLevel, fullName, email, password, dateOfBirth, country, postalCode, region, city, area },
  };
}
