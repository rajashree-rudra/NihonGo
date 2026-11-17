"use client";

import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { buttonClass } from "@/components/ui/Button";

type Variant = Parameters<typeof buttonClass>[0]["variant"];

/** Submit button that shows it's working while its form's Server Function runs. Optionally asks first. */
export function SubmitButton({
  children,
  pendingLabel,
  variant = "primary",
  size = "md",
  className,
  confirm,
}: {
  children: ReactNode;
  pendingLabel?: string;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  className?: string;
  confirm?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      onClick={confirm ? (e) => !window.confirm(confirm) && e.preventDefault() : undefined}
      className={buttonClass({ variant, size, className })}
    >
      {pending && pendingLabel ? pendingLabel : children}
    </button>
  );
}
