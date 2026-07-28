"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { companyStats } from "@/data/companyStats";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EngineeringCapabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="engineering-heading">
      <Container>
        <div ref={ref} className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          {/* Left — heading */}
          <div>
            <SectionHeading
              eyebrow="Engineering Advantage"
              title="More than a product catalog"
              description="PDC combines product engineering, inventory, machining, and assembly capabilities to deliver configured valve and actuator packages from a single source."
              id="engineering-heading"
            />
          </div>

          {/* Right — dark technical panel */}
          <div className="rounded-2xl bg-pdc-deep p-8 lg:p-10">
            <div className="grid gap-px sm:grid-cols-2">
              {companyStats.map((stat, i) => (
                <div key={stat.label} className="flex flex-col gap-3 p-4">
                  <AnimatedCounter
                    label={stat.label}
                    inView={inView}
                    delay={i * 0.1}
                  />
                  <p className="text-sm leading-6 text-white/50">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AnimatedCounter({
  label,
  inView,
  delay,
}: {
  label: string;
  inView: boolean;
  delay: number;
}) {
  // Extract numeric prefix for counter animation
  const match = label.match(/^(\d+)/);
  const numericPart = match ? parseInt(match[1], 10) : null;
  const suffix = numericPart ? label.slice(match![0].length) : "";

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView || numericPart === null) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplayValue(numericPart);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(numericPart * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => requestAnimationFrame(animate), delay * 1000);
    return () => clearTimeout(timer);
  }, [inView, numericPart, delay]);

  return (
    <div className="font-mono text-2xl font-bold text-white">
      {numericPart !== null ? (
        <span>
          {displayValue}
          {suffix}
        </span>
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}
