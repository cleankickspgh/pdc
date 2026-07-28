import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type TechnicalLabelProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export function TechnicalLabel({ children, className, dark = false }: TechnicalLabelProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[11px] font-medium uppercase tracking-[0.18em]",
        dark ? "text-white/45" : "text-pdc-graphite/45",
        className,
      )}
    >
      {children}
    </span>
  );
}
