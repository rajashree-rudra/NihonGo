import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CircleCheck, CircleX, Clock, LogOut, RefreshCw } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";
import { SubmitButton } from "@/components/auth/SubmitButton";
import { db } from "@/lib/db";
import { getViewer } from "@/lib/auth";
import { refreshAccess, signOut } from "../actions";

export const metadata: Metadata = { title: "Waiting for approval" };

export default async function PendingPage() {
  const viewer = await getViewer();
  if (!viewer) redirect("/login");
  const profile = await db().profile.findUnique({ where: { id: viewer.id } });
  const firstName = (profile?.fullName ?? viewer.name).split(" ")[0];

  const signOutButton = (
    <form action={signOut}>
      <SubmitButton variant="outline" className="w-full" pendingLabel="Signing out…">
        <LogOut className="size-[18px]" /> Sign out
      </SubmitButton>
    </form>
  );

  // The admin approved, but this sign-in token is from before: get a fresh one.
  if (profile?.status === "approved") {
    return (
      <AuthShell kanji="合格" title="You're approved!" subtitle={`Welcome to NihonGo, ${firstName}.`}>
        <div className="grid justify-items-center gap-5 text-center">
          <CircleCheck className="size-12 text-matcha" strokeWidth={1.75} />
          <form action={refreshAccess} className="w-full">
            <SubmitButton variant="accent" className="w-full" pendingLabel="Opening…">
              Start learning
            </SubmitButton>
          </form>
        </div>
      </AuthShell>
    );
  }

  if (profile?.status === "rejected") {
    return (
      <AuthShell kanji="残念" title="Request not approved" subtitle="Sorry — your request to use NihonGo wasn't approved.">
        <div className="grid justify-items-center gap-5 text-center">
          <CircleX className="size-12 text-shu" strokeWidth={1.75} />
          {signOutButton}
        </div>
      </AuthShell>
    );
  }

  if (!profile) {
    return (
      <AuthShell kanji="？" title="Registration not found" subtitle="We couldn't find the details for this account. Please sign out and register again.">
        {signOutButton}
      </AuthShell>
    );
  }

  return (
    <AuthShell
      kanji="待"
      title="Your request has been sent"
      subtitle={`Thanks, ${firstName}! The admin will review it soon. Once it's approved, you can use NihonGo.`}
    >
      <div className="grid gap-5">
        <div className="flex items-center gap-3 rounded-2xl bg-kin-soft px-4 py-3 text-sm font-medium text-ink">
          <Clock className="size-5 shrink-0 text-kin" />
          Waiting for approval
        </div>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
          <dt className="text-muted">Name</dt>
          <dd className="font-medium">{profile.fullName}</dd>
          <dt className="text-muted">Email</dt>
          <dd className="break-all font-medium">{profile.email}</dd>
          <dt className="text-muted">Country</dt>
          <dd className="font-medium">{profile.country}</dd>
          <dt className="text-muted">Target</dt>
          <dd className="font-medium">JLPT {profile.targetLevel}</dd>
        </dl>
        <div className="grid gap-3 sm:grid-cols-2">
          <form action={refreshAccess}>
            <SubmitButton variant="accent" className="w-full" pendingLabel="Checking…">
              <RefreshCw className="size-[18px]" /> Check again
            </SubmitButton>
          </form>
          {signOutButton}
        </div>
      </div>
    </AuthShell>
  );
}
