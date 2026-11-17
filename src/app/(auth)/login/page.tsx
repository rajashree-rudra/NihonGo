import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { safeNext } from "@/lib/access";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = { title: "Sign in" };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  return (
    <AuthShell
      kanji="入"
      title="Welcome back"
      subtitle="Sign in to continue learning Japanese."
      footer={
        <>
          New to NihonGo?{" "}
          <Link href="/register" className="font-semibold text-shu hover:underline">
            Request access
          </Link>
        </>
      }
    >
      <LoginForm next={safeNext(next)} />
    </AuthShell>
  );
}
