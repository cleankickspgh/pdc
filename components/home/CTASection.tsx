import Link from "next/link";
import { CircleCheck as CheckCircle2 } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-pdc-green px-5 py-20 text-white lg:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 lg:flex-row lg:items-center">
        <div>
          <div className="mb-4 flex gap-3 text-sm font-bold">
            <CheckCircle2 /> ISO 9001:2015 certified
          </div>
          <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
            Bring us the operating challenge.
          </h2>
        </div>
        <Link href="/request-a-quote" className="shrink-0 rounded-full bg-white px-7 py-4 font-bold text-pdc-deep">
          Start a technical quote
        </Link>
      </div>
    </section>
  );
}
