import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { AdminLoginForm } from "./AdminLoginForm";

export const metadata: Metadata = { title: "Admin sign-in" };

export default function AdminLoginPage() {
  return (
    <AuthShell
      kanji="管理"
      title="Admin panel"
      subtitle="Sign in with your admin account. This doesn't change who is signed in to the site."
    >
      <AdminLoginForm />
    </AuthShell>
  );
}
