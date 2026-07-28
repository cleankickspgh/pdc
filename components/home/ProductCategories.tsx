import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productFamilies } from "@/data/productFamilies";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

export function ProductCategories() {
  return (
    <section className="bg-pdc-mist py-20 lg:py-28" aria-labelledby="product-families-heading">
      <Container>
        <SectionHeading
          eyebrow="Product Families"
          title="Flow-control products for demanding systems"
          id="product-families-heading"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productFamilies.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col rounded-2xl border border-pdc-deep/10 bg-white p-6 shadow-sm transition hover:shadow-soft-sm lg:p-8"
            >
              {/* Image placeholder — designed for transparent product PNGs */}
              <div className="relative mb-6 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-pdc-mist">
                <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden />
                <div className="relative flex flex-col items-center gap-2 text-pdc-deep/20">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="24" y1="4" x2="24" y2="44" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span className="font-mono text-[10px] uppercase tracking-wider">
                    Product Image
                  </span>
                </div>
              </div>

              {/* Category number */}
              <TechnicalLabel>
                {product.number} / {product.category}
              </TechnicalLabel>

              <h3 className="mt-3 text-xl font-extrabold tracking-tight text-pdc-deep">
                {product.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-pdc-graphite/60">
                {product.description}
              </p>

              <Link
                href={product.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-pdc-green transition hover:gap-3"
              >
                View Product Family
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
