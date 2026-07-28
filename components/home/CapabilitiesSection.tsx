import Link from "next/link";
import { ChevronRight, Gauge, Layers as Layers3, Settings2, ShieldCheck } from "lucide-react";
import { capabilities } from "@/data/site";

const iconMap = { Gauge, Settings2, Layers3, ShieldCheck } as const;

export function CapabilitiesSection() {
  return (
    <section className="bg-white px-5 py-24 lg:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Engineering advantage</p>
          <h2 className="section-title">Configured beyond the catalog.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-pdc-graphite/65">
            PDC combines a deep casting library, in-house machining, custom brackets, seating options, and application support to solve non-standard flow-control challenges.
          </p>
          <Link href="/company/capabilities" className="mt-8 inline-flex items-center gap-2 font-bold text-pdc-green">
            Explore capabilities <ChevronRight size={18} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((capability) => {
            const Icon = iconMap[capability.icon as keyof typeof iconMap];
            return (
              <div key={capability.title} className="rounded-2xl bg-pdc-mist p-7">
                <Icon className="text-pdc-green" />
                <h3 className="mt-10 text-xl font-black text-pdc-deep">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-pdc-graphite/60">{capability.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
