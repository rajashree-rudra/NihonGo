"use client";

import { useState, type ComponentProps, type ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/components/ui/cn";

export const inputClass =
  "h-11 w-full rounded-xl border border-line-strong bg-card px-3.5 text-[15px] outline-none transition placeholder:text-muted focus:border-ink/50 focus:ring-4 focus:ring-ink/5 aria-invalid:border-shu aria-invalid:focus:ring-shu/10";

/** A labelled form field with its error (or hint) below. The control's id must be `name`. */
export function Field({
  label,
  name,
  error,
  hint,
  optional,
  className,
  children,
}: {
  label: ReactNode;
  name: string;
  error?: string;
  hint?: ReactNode;
  optional?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 flex items-baseline justify-between gap-2 text-[13px] font-semibold text-ink-soft">
        <span>{label}</span>
        {optional && <span className="text-[12px] font-normal text-muted">Optional</span>}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-[13px] font-medium text-shu">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-[12px] text-muted">{hint}</p>
      ) : null}
    </div>
  );
}

/** Props that link a control to its Field (id, error state). */
export function fieldProps(name: string, error?: string) {
  return { id: name, name, "aria-invalid": error ? true : undefined, "aria-describedby": error ? `${name}-error` : undefined };
}

/** Password box with a show/hide button. */
export function PasswordInput({ className, ...props }: Omit<ComponentProps<"input">, "type">) {
  const [shown, setShown] = useState(false);
  return (
    <div className="relative">
      <input type={shown ? "text" : "password"} className={cn(inputClass, "pr-11", className)} {...props} />
      <button
        type="button"
        onClick={() => setShown(!shown)}
        aria-label={shown ? "Hide password" : "Show password"}
        className="absolute inset-y-0 right-0 grid w-11 place-items-center rounded-r-xl text-muted transition hover:text-ink"
      >
        {shown ? <EyeOff className="size-[18px]" /> : <Eye className="size-[18px]" />}
      </button>
    </div>
  );
}

/** Error for the whole form (e.g. wrong password). */
export function FormError({ children }: { children?: ReactNode }) {
  if (!children) return null;
  return (
    <p role="alert" className="rounded-xl bg-shu-soft px-3.5 py-2.5 text-sm font-medium text-shu">
      {children}
    </p>
  );
}
