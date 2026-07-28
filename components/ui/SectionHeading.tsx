import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, className, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className={cn("mt-6 text-lg leading-8 text-pdc-graphite/65", align === "center" && "mx-auto max-w-2xl")}>
          {description}
        </p>
      )}
    </div>
  );
}
