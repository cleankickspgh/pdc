import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn("text-xs font-bold uppercase tracking-[.2em] text-pdc-green", className)}>
      {children}
    </span>
  );
}
