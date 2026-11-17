"use client";

import { useActionState, useState } from "react";
import { Check, Copy, KeyRound } from "lucide-react";
import { buttonClass } from "@/components/ui/Button";
import { resetPassword } from "./actions";

/** "Reset password" → shows the new password once, with a copy button. */
export function ResetPassword({ id, name }: { id: string; name: string }) {
  const [state, action, pending] = useActionState(resetPassword.bind(null, id), undefined);
  const [copied, setCopied] = useState(false);

  if (state?.password) {
    return (
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-kin/40 bg-kin-soft px-3 py-2 text-[13px]">
        <span className="text-ink-soft">New password for {name.split(" ")[0]}:</span>
        <code className="rounded-md bg-card px-2 py-0.5 font-mono text-[14px] font-semibold tracking-wide">{state.password}</code>
        <button
          type="button"
          onClick={() => navigator.clipboard.writeText(state.password!).then(() => setCopied(true))}
          className={buttonClass({ variant: "ghost", size: "sm", className: "h-7 px-2" })}
        >
          {copied ? <Check className="size-4 text-matcha" /> : <Copy className="size-4" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    );
  }

  return (
    <form action={action} onSubmit={(e) => !window.confirm(`Give ${name} a new password? Their old one stops working.`) && e.preventDefault()}>
      <button type="submit" disabled={pending} className={buttonClass({ variant: "ghost", size: "sm" })}>
        <KeyRound className="size-4" />
        {pending ? "Resetting…" : state?.error ?? "Reset password"}
      </button>
    </form>
  );
}
