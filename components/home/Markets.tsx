import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { markets } from "@/data/markets";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Markets() {
  return (
    <section className="bg-pdc-navy py-20 text-white lg:py-28" aria-labelledby="markets-heading">
      <Container>
        <SectionHeading
          eyebrow="Markets Served"
          title="Engineered for critical industrial markets"
          description="PDC products operate across a range of demanding industrial environments where reliable flow control is essential."
          dark
          id="markets-heading"
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((market) => (
            <Link
              key={market.slug}
              href={`/markets/${market.slug}`}
              className="group relative flex flex-col justify-end overflow-hidden bg-pdc-navy p-6 transition hover:bg-pdc-deep lg:min-h-[280px] lg:p-8"
            >
              {/* Abstract industrial background placeholder */}
              <div className="absolute inset-0 opacity-20 transition group-hover:opacity-30" aria-hidden>
                <svg className="h-full w-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id={`grad-${market.slug}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#39758A" />
                      <stop offset="100%" stopColor="#073D2B" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="300" fill={`url(#grad-${market.slug})`} />
                  <circle cx="320" cy="80" r="60" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <circle cx="80" cy="220" r="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <line x1="200" y1="0" x2="200" y2="300" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="relative">
                <h3 className="text-xl font-extrabold tracking-tight lg:text-2xl">
                  {market.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  {market.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-pdc-lime">
                  Explore market
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
