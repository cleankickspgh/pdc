import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { operatingSystems } from "@/data/productFamilies";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OperatingSystems() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="operating-systems-heading">
      <Container>
        <SectionHeading
          eyebrow="Operating Systems"
          title="Three disciplines. One source."
          description="PDC products are organized around the three fundamental flow-control disciplines that define industrial operations."
          id="operating-systems-heading"
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-pdc-deep/10 bg-pdc-deep/10 lg:grid-cols-3">
          {operatingSystems.map((system) => (
            <Link
              key={system.slug}
              href={`/solutions/${system.slug}`}
              className="group relative flex flex-col bg-white p-8 transition hover:bg-pdc-mist lg:p-10"
            >
              {/* Large number */}
              <span className="font-mono text-5xl font-bold text-pdc-deep/15 transition group-hover:text-pdc-green/30">
                {system.number}
              </span>

              {/* Technical line */}
              <div className="mt-6 h-px w-12 bg-pdc-green transition-all duration-300 group-hover:w-20" />

              <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-pdc-deep">
                {system.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-6 text-pdc-graphite/60">
                {system.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-pdc-green">
                Learn more
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
