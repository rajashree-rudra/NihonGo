import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { RegisterForm } from "./RegisterForm";

export const metadata: Metadata = { title: "Request access" };

export default function RegisterPage() {
  return (
    <AuthShell
      wide
      kanji="登録"
      title="Request access"
      subtitle="Tell us a little about yourself. Once the admin approves your request, you can use NihonGo."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-shu hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  );
}
