import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { markets } from "@/data/site";

export function MarketsList() {
  return (
    <div className="grid gap-2 lg:grid-cols-2">
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
  );
}
