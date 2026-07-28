import Link from "next/link";
import { footerProducts, footerMarkets, footerCompany } from "@/data/navigation";
import { siteConfig } from "@/data/companyStats";

export function Footer() {
  const year = new Date().getFullYear();
  const { contact, legalName } = siteConfig;

  return (
    <footer className="bg-pdc-deep text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Company info */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-sm bg-white font-black tracking-tighter text-pdc-deep">
                PDC
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-bold">PDC</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/55">
                  Valve &amp; Actuators
                </span>
              </span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/60">
              {legalName}
              <br />
              {contact.address}
              <br />
              {contact.city}, {contact.state} {contact.zip}
              <br />
              {contact.phone}
              <br />
              {contact.email}
            </p>
          </div>

          {/* Products */}
          <nav aria-label="Products">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-pdc-lime">
              Products
            </p>
            <ul className="space-y-2.5 text-sm text-white/65">
              {footerProducts.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Markets */}
          <nav aria-label="Markets">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-pdc-lime">
              Markets
            </p>
            <ul className="space-y-2.5 text-sm text-white/65">
              {footerMarkets.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-pdc-lime">
              Company
            </p>
            <ul className="space-y-2.5 text-sm text-white/65">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <p>&copy; {year} {legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms</Link>
            <Link href="/accessibility" className="transition hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
