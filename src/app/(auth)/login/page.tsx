import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { CircleCheck } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";
import { safeNext } from "@/lib/access";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = { title: "Sign in" };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string; registered?: string }> }) {
  const { next, registered } = await searchParams;
  // Just registered: greet them and fill in their email.
  const email = registered ? (await cookies()).get("nihongo-registered")?.value : undefined;
  const back = safeNext(next) === "/" ? "" : `?next=${encodeURIComponent(safeNext(next))}`;
  return (
    <AuthShell
      kanji="入"
      title={registered ? "Your account is ready" : "Welcome back"}
      subtitle={registered ? "Sign in with your email and password to start learning." : "Sign in to continue learning Japanese."}
      footer={
        <>
          New to NihonGo?{" "}
          <Link href={`/register${back}`} className="font-semibold text-shu hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      {registered && (
        <p role="status" className="mb-5 flex items-center gap-2.5 rounded-xl bg-matcha-soft px-3.5 py-2.5 text-sm font-medium text-matcha">
          <CircleCheck className="size-[18px] shrink-0" /> Registration complete.
        </p>
      )}
      <LoginForm next={safeNext(next)} email={email} />
    </AuthShell>
  );
}
