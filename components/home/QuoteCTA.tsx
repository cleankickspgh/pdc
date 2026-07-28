import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/data/companyStats";
import { Container } from "@/components/ui/Container";

export function QuoteCTA() {
  const { contact } = siteConfig;

  return (
    <section className="bg-pdc-green py-20 text-white lg:py-28" aria-labelledby="quote-cta-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          {/* Left — heading and buttons */}
          <div>
            <h2
              id="quote-cta-heading"
              className="text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Bring us the application.
              <br />
              <span className="text-white/70">We&apos;ll help configure the solution.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 lg:text-lg">
              Share your operating conditions, media, pressure, temperature, size, and
              actuation requirements with PDC&apos;s sales and engineering team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-pdc-deep transition hover:bg-white/90"
              >
                Start a Quote <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold transition hover:bg-white/10"
              >
                Contact Engineering
              </Link>
            </div>
          </div>

          {/* Right — contact details */}
          <div className="rounded-2xl border border-white/15 bg-pdc-deep/30 p-8">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
              Direct Contact
            </p>
            <div className="space-y-4">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 transition hover:text-white/90"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-xs text-white/50">Office</p>
                  <p className="font-mono font-medium">{contact.phone}</p>
                </div>
              </a>
              <a
                href={`tel:${contact.tollFree}`}
                className="flex items-center gap-3 transition hover:text-white/90"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-xs text-white/50">Toll Free</p>
                  <p className="font-mono font-medium">{contact.tollFree}</p>
                </div>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 transition hover:text-white/90"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs text-white/50">Email</p>
                  <p className="font-mono font-medium">{contact.email}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
