"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, Search } from "lucide-react";
import { primaryNavigation, utilityBarLinks } from "@/data/navigation";
import { siteConfig } from "@/data/companyStats";
import { cn } from "@/lib/utils";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-pdc-deep text-white/70 lg:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-10 py-2 text-xs">
          <p className="font-mono tracking-wide">
            Engineered Flow-Control Solutions Since 1970
          </p>
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.contact.phone}`} className="transition hover:text-white">
              {siteConfig.contact.phone}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="transition hover:text-white">
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-white/10 bg-pdc-deep text-white backdrop-blur transition-all duration-300",
          scrolled ? "py-2" : "py-3",
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="PDC Valve and Actuators home">
            <span
              className={cn(
                "grid place-items-center rounded-sm bg-white font-black tracking-tighter text-pdc-deep transition-all duration-300",
                scrolled ? "h-9 w-9 text-lg" : "h-11 w-11 text-xl",
              )}
            >
              PDC
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-bold tracking-tight">PDC</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/55">
                Valve &amp; Actuators
              </span>
            </span>
          </Link>

          {/* Desktop nav — structured for future mega menu expansion */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold transition-colors hover:text-pdc-lime"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:bg-white/10"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <Link
              href={utilityBarLinks[0].href}
              className="hidden text-sm font-semibold transition-colors hover:text-pdc-lime xl:inline"
            >
              Find a Distributor
            </Link>
            <Link
              href="/request-a-quote"
              className="hidden items-center gap-2 rounded-full bg-pdc-green px-5 py-3 text-sm font-bold text-white transition hover:bg-pdc-green/90 sm:flex"
            >
              Request a Quote <ArrowUpRight size={16} />
            </Link>
            <button
              className="grid h-11 w-11 place-items-center lg:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
