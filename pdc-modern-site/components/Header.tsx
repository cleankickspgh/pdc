import Link from "next/link";
import { ArrowUpRight, Menu, Search } from "lucide-react";

export function Header() {
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-pdc-deep/95 text-white backdrop-blur">
    <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-3" aria-label="PDC home">
        <span className="grid h-11 w-11 place-items-center rounded-sm bg-white font-black tracking-tighter text-pdc-deep">PDC</span>
        <span className="hidden text-xs font-semibold uppercase tracking-[.18em] text-white/70 sm:block">Process Development<br/> &amp; Control</span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
        {[["Products","/products"],["Markets","/markets"],["Solutions","/solutions"],["Resources","/resources"],["Company","/company/about"]].map(([label,href])=><Link key={href} href={href} className="transition hover:text-pdc-lime">{label}</Link>)}
      </nav>
      <div className="flex items-center gap-2">
        <button className="grid h-11 w-11 place-items-center rounded-full border border-white/15" aria-label="Search"><Search size={18}/></button>
        <Link href="/request-a-quote" className="hidden items-center gap-2 rounded-full bg-pdc-lime px-5 py-3 text-sm font-bold text-pdc-deep sm:flex">Request a Quote <ArrowUpRight size={16}/></Link>
        <button className="grid h-11 w-11 place-items-center lg:hidden" aria-label="Open menu"><Menu/></button>
      </div>
    </div>
  </header>
}
