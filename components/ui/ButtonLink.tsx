import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

const variantClasses: Record<Variant, string> = {
  primary: "bg-pdc-lime text-pdc-deep hover:bg-pdc-lime/90",
  secondary: "bg-white text-pdc-deep hover:bg-white/90",
  outline: "border border-white/20 text-white hover:bg-white/10",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-4 text-sm",
  lg: "px-7 py-4 text-base",
};

export function ButtonLink({ href, variant = "primary", size = "md", className, children }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-bold transition",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}
