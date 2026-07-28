"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { heroTrustIndicators } from "@/data/companyStats";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-pdc-deep text-white"
      aria-labelledby="hero-heading"
    >
      {/* Technical grid texture */}
      <div
        className="grid-bg absolute inset-0 opacity-30"
        aria-hidden="true"
      />

      {/* Background illumination */}
      <div
        className="orb absolute right-[-10rem] top-[-8rem] h-[36rem] w-[36rem]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
        {/* Left content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-5 flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-pdc-lime"
          >
            <span className="h-px w-10 bg-pdc-lime" />
            Process Development &amp; Control
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={fadeInUp}
            className="text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
          >
            Engineered flow control.
            <br />
            <span className="text-white/50">
              Built around your application.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-base leading-7 text-white/70 lg:text-lg lg:leading-8"
          >
            Industrial valves, dampers, and actuation systems engineered for
            reliable control, automation, and isolation in demanding operating
            environments.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/products"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-pdc-green px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-pdc-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pdc-lime focus-visible:ring-offset-2 focus-visible:ring-offset-pdc-deep"
            >
              Explore Products
              <ArrowRight aria-hidden="true" size={16} />
            </Link>

            <Link
              href="/request-a-quote"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pdc-lime focus-visible:ring-offset-2 focus-visible:ring-offset-pdc-deep"
            >
              Request Engineering Support
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.ul
            variants={fadeInUp}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            aria-label="Company credentials"
          >
            {heroTrustIndicators.map((indicator) => (
              <li
                key={indicator}
                className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-white/60"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-pdc-lime"
                  aria-hidden="true"
                />
                {indicator}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right technical illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto aspect-square w-full max-w-[520px]"
          aria-hidden="true"
        >
          <ValveIllustration />
        </motion.div>
      </div>
    </section>
  );
}

function ValveIllustration() {
  return (
    <div className="relative h-full w-full">
      {/* Concentric technical rings */}
      <div className="absolute inset-[8%] rounded-full border border-white/10" />

      <div className="absolute inset-[18%] rounded-full border border-white/10" />

      <div className="animate-spin-slow absolute inset-[26%] rounded-full border border-dashed border-pdc-lime/30" />

      {/* Main valve body */}
      <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-pdc-steel to-pdc-green shadow-2xl">
        <div className="absolute inset-[14%] rounded-full border-[14px] border-white/20">
          <div className="absolute inset-[16%] rounded-full bg-pdc-deep">
            <div className="absolute left-1/2 top-[10%] h-[80%] w-[3px] -translate-x-1/2 rounded-full bg-white/25" />
          </div>
        </div>
      </div>

      {/* Dimension lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="0.3"
        aria-hidden="true"
      >
        <line x1="50" y1="2" x2="50" y2="8" />
        <line x1="50" y1="92" x2="50" y2="98" />
        <line x1="2" y1="50" x2="8" y2="50" />
        <line x1="92" y1="50" x2="98" y2="50" />
      </svg>

      {/* Technical labels */}
      <div className="tech-chip absolute left-0 top-[18%]">
        <span>Control</span>
        <strong>Dampers</strong>
      </div>

      <div className="tech-chip absolute right-0 top-[42%]">
        <span>Automation</span>
        <strong>Actuators</strong>
      </div>

      <div className="tech-chip absolute bottom-[14%] left-[8%]">
        <span>Isolation</span>
        <strong>Valves</strong>
      </div>
    </div>
  );
}