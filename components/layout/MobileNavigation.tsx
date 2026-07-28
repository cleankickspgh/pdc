"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/companyStats";

type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />
      <nav className="absolute right-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-pdc-deep p-6 text-white shadow-2xl">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-black tracking-tight">PDC</span>
          <button
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:bg-white/10"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-1">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-white/10 py-4 text-lg font-semibold transition hover:text-pdc-lime"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/request-a-quote"
            className="rounded-full bg-pdc-green px-5 py-3.5 text-center text-sm font-bold text-white"
            onClick={onClose}
          >
            Request a Quote
          </Link>
          <Link
            href="/distributors"
            className="rounded-full border border-white/20 px-5 py-3.5 text-center text-sm font-bold"
            onClick={onClose}
          >
            Find a Distributor
          </Link>
        </div>
        <div className="mt-8 space-y-2 text-sm text-white/60">
          <a href={`tel:${siteConfig.contact.phone}`} className="block">
            {siteConfig.contact.phone}
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="block">
            {siteConfig.contact.email}
          </a>
        </div>
      </nav>
    </div>
  );
}
