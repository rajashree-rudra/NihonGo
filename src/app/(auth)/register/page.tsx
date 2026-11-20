import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { safeNext } from "@/lib/access";
import { COMMON_COUNTRIES, countryList } from "@/lib/countries";
import { RegisterForm } from "./RegisterForm";

export const metadata: Metadata = { title: "Create an account" };

export default async function RegisterPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  // Where to go after signing in (e.g. the page whose preview sent them here).
  const next = safeNext((await searchParams).next);
  const back = next === "/" ? "" : `?next=${encodeURIComponent(next)}`;
  return (
    <AuthShell
      wide
      kanji="登録"
      title="Create your account"
      subtitle="Register to learn Japanese with NihonGo — free."
      footer={
        <>
          Already have an account?{" "}
          <Link href={`/login${back}`} className="font-semibold text-shu hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      {/* Names and the year are made here, so the browser shows exactly what the server rendered. */}
      <RegisterForm countries={countryList()} common={COMMON_COUNTRIES} thisYear={new Date().getFullYear()} next={next} />
    </AuthShell>
  );
}
