import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  dark?: boolean;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  dark = false,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow", dark && "text-pdc-lime")}>{eyebrow}</p>
      )}
      <h2
        id={id}
        className={cn(
          "section-title mt-3",
          dark && "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-lg leading-8",
            dark ? "text-white/65" : "text-pdc-graphite/65",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
