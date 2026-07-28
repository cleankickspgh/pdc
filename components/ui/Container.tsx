import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

const sizeClasses = {
  narrow: "max-w-5xl",
  default: "max-w-[1440px]",
  wide: "max-w-[1600px]",
};

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div className={cn("mx-auto px-5 lg:px-10", sizeClasses[size], className)}>
      {children}
    </div>
  );
}
