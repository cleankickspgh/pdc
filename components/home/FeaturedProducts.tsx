import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { featuredProducts } from "@/data/productFamilies";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

export function FeaturedProducts() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="featured-products-heading">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured Products"
            title="Configured for your application"
            id="featured-products-heading"
          />
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-pdc-green transition hover:gap-3"
          >
            View all products <ArrowRight size={16} />
          </Link>
        </div>

        {/* Desktop grid */}
        <div className="mt-12 hidden gap-4 lg:grid lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div
          className="mt-12 flex gap-4 overflow-x-auto pb-4 scrollbar-hide lg:hidden"
          role="region"
          aria-label="Featured products"
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="w-72 shrink-0">
              <FeaturedProductCard product={product} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

type ProductCardProps = {
  product: (typeof featuredProducts)[number];
};

function FeaturedProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-pdc-deep/10 bg-white shadow-sm transition hover:shadow-soft-sm">
      {/* Image placeholder */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-t-2xl bg-pdc-mist">
        <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden />
        <div className="relative flex flex-col items-center gap-2 text-pdc-deep/20">
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden>
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.5" />
            <line x1="24" y1="4" x2="24" y2="44" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-wider">
            Product Image
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <TechnicalLabel>{product.series}</TechnicalLabel>
        <h3 className="mt-2 text-lg font-extrabold tracking-tight text-pdc-deep">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-pdc-graphite/45">{product.category}</p>

        <dl className="mt-4 space-y-2">
          {product.specs.map((spec) => (
            <div key={spec.label} className="flex justify-between gap-2 text-sm">
              <dt className="text-pdc-graphite/50">{spec.label}</dt>
              <dd className="text-right font-mono font-medium text-pdc-deep">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-col gap-2 border-t border-pdc-deep/10 pt-4">
          <Link
            href={product.href}
            className="inline-flex items-center gap-2 text-sm font-bold text-pdc-green transition hover:gap-3"
          >
            View Product <ArrowRight size={14} />
          </Link>
          {/* Placeholder: replace href="#" with the real literature PDF URL when available */}
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-pdc-graphite/50 transition hover:text-pdc-deep"
          >
            <Download size={14} /> Download Literature
          </Link>
        </div>
      </div>
    </div>
  );
}
