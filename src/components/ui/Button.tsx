import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "./cn";

type Variant = "primary" | "accent" | "outline" | "ghost" | "soft";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink-soft shadow-soft",
  accent: "bg-shu text-white hover:brightness-110 shadow-[0_8px_24px_-10px_rgb(216_69_46/0.7)]",
  outline: "border border-line-strong bg-card text-ink hover:border-ink/40 hover:bg-white",
  ghost: "text-ink-soft hover:bg-ink/5 hover:text-ink",
  soft: "bg-ink/5 text-ink hover:bg-ink/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5 rounded-xl",
  md: "h-11 px-5 text-[15px] gap-2 rounded-2xl",
  lg: "h-14 px-7 text-base gap-2.5 rounded-2xl",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export function buttonClass({ variant = "primary", size = "md", className }: BaseProps) {
  return cn(
    "inline-flex select-none items-center justify-center font-semibold transition-all duration-200 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({ variant, size, icon, className, children, ...rest }: BaseProps & ComponentProps<"button">) {
  return (
    <button type="button" className={buttonClass({ variant, size, className })} {...rest}>
      {icon}
      {children}
    </button>
  );
}

export function ButtonLink({ variant, size, icon, className, children, ...rest }: BaseProps & ComponentProps<typeof Link>) {
  return (
    <Link className={buttonClass({ variant, size, className })} {...rest}>
      {icon}
      {children}
    </Link>
  );
}
