import { ShieldCheck, FileCheck, Wrench, ClipboardCheck, Boxes } from "lucide-react";
import { qualityFacts } from "@/data/companyStats";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  ShieldCheck,
  FileCheck,
  Wrench,
  ClipboardCheck,
  Boxes,
} as const;

export function QualitySection() {
  return (
    <section className="bg-pdc-deep py-20 text-white lg:py-28" aria-labelledby="quality-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left — heading and facts */}
          <div>
            <SectionHeading
              eyebrow="Quality & Compliance"
              title="Quality built into every assembly"
              dark
              id="quality-heading"
            />
            <ul className="mt-10 space-y-5">
              {qualityFacts.map((fact, i) => {
                const Icon = iconMap[Object.keys(iconMap)[i] as keyof typeof iconMap];
                return (
                  <li key={fact.label} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-pdc-lime">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-bold text-white">{fact.label}</p>
                      <p className="mt-1 text-sm leading-6 text-white/50">
                        {fact.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right — certification document placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-white/8" aria-hidden />
              <div className="relative rounded-lg border border-white/10 bg-pdc-navy p-8">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                      Certificate
                    </p>
                    <p className="mt-1 font-bold text-white">ISO 9001:2015</p>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-pdc-green/20 text-pdc-lime">
                    <ShieldCheck size={24} />
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-3 rounded-full bg-white/10" />
                  <div className="h-3 w-4/5 rounded-full bg-white/8" />
                  <div className="h-3 w-3/5 rounded-full bg-white/6" />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/30">
                    Quality Management System
                  </span>
                  <span className="font-mono text-[10px] text-white/30">PDC-ISO-9001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
