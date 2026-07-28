import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { markets } from "@/data/site";

export function MarketsSection() {
  return (
    <section className="bg-pdc-navy px-5 py-24 text-white lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow text-pdc-lime">Markets served</p>
        <div className="mt-5 grid gap-2 lg:grid-cols-2">
          {markets.map((market, i) => (
            <Link
              key={market.slug}
              href={`/markets/${market.slug}`}
              className="group flex items-center justify-between border-b border-white/15 py-6 text-2xl font-bold sm:text-3xl"
            >
              <span>
                <small className="mr-5 text-xs text-white/35">0{i + 1}</small>
                {market.name}
              </span>
              <ArrowRight className="transition group-hover:translate-x-2" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
