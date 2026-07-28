import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const { contact, footerNavigation } = SITE_CONFIG;

  return (
    <footer className="bg-pdc-deep text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <div className="mb-5 text-3xl font-black">PDC</div>
          <p className="max-w-md text-white/65">
            Customized flow-control components and complete valve-actuator assemblies, engineered since 1970.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-pdc-lime">Contact</p>
          <p className="text-white/70">
            {contact.address}<br />
            {contact.city}, {contact.state} {contact.zip}<br />
            {contact.phone}<br />
            {contact.email}
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-pdc-lime">Navigate</p>
          <div className="grid gap-2 text-white/70">
            {footerNavigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45">
        © 2026 Process Development &amp; Control LLC
      </div>
    </footer>
  );
}
