import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

const variantClasses: Record<Variant, string> = {
  primary: "bg-pdc-lime text-pdc-deep hover:bg-pdc-lime/90",
  secondary: "bg-white text-pdc-deep hover:bg-white/90",
  outline: "border border-white/20 text-white hover:bg-white/10",
  ghost: "text-pdc-deep hover:bg-pdc-deep/5",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-4 text-sm",
  lg: "px-7 py-4 text-base",
};

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-bold transition",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
