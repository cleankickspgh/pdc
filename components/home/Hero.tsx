import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-pdc-deep text-white">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="orb right-[-8rem] top-[-10rem]" />
      <div className="relative mx-auto grid min-h-[760px] max-w-[1440px] items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-pdc-lime">
            <span className="h-px w-10 bg-pdc-lime" /> Engineered since 1970
          </p>
          <h1 className="text-5xl font-black leading-[.95] tracking-[-.055em] sm:text-7xl lg:text-[92px]">
            Flow control,<br />
            <span className="text-white/45">precisely built.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/68">
            Valves, dampers, and actuation systems configured for demanding industrial applications and built around your operating conditions.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/products" className="rounded-full bg-pdc-lime px-6 py-4 font-bold text-pdc-deep">
              Explore Products
            </Link>
            <Link href="/request-a-quote" className="rounded-full border border-white/20 px-6 py-4 font-bold">
              Talk to Engineering
            </Link>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[590px]">
          <div className="absolute inset-[12%] rounded-full border border-white/10" />
          <div className="absolute inset-[22%] rounded-full border border-dashed border-pdc-lime/35 animate-spin-slow" />
          <div className="absolute inset-[29%] rounded-full bg-gradient-to-br from-pdc-steel to-pdc-green shadow-2xl">
            <div className="absolute inset-[16%] rounded-full border-[18px] border-white/25">
              <div className="absolute inset-[18%] rounded-full bg-pdc-deep" />
            </div>
          </div>
          <div className="tech-chip left-0 top-[20%]">
            <span>CASTING LIBRARY</span>
            <strong>300+</strong>
          </div>
          <div className="tech-chip bottom-[15%] right-0">
            <span>MAX TEMPERATURE</span>
            <strong>1500°F</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
