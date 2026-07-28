import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productFamilies } from "@/data/site";

export function ProductFamilies() {
  return (
    <section className="bg-pdc-mist px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Product systems</p>
            <h2 className="section-title">
              One source.<br />
              Complete control.
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-8 text-pdc-graphite/65">
            From valve body to actuator package, PDC configures complete assemblies around pressure, temperature, media, torque, and installation requirements.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {productFamilies.map((product, i) => (
            <Link
              key={product.title}
              href={product.href}
              className="group rounded-2xl border border-pdc-deep/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft lg:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold tracking-[.18em] text-pdc-green">
                  0{i + 1} / {product.eyebrow}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-pdc-deep/10 transition group-hover:bg-pdc-deep group-hover:text-white">
                  <ArrowRight size={18} />
                </span>
              </div>
              <h3 className="mt-12 text-3xl font-black tracking-tight text-pdc-deep">{product.title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-pdc-graphite/60">{product.description}</p>
              <div className="mt-8 flex gap-8 border-t border-pdc-deep/10 pt-5">
                <div>
                  <strong>{product.metric}</strong>
                  <span className="block text-xs text-pdc-graphite/45">Range</span>
                </div>
                <div>
                  <strong>{product.sub}</strong>
                  <span className="block text-xs text-pdc-graphite/45">Capability</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
