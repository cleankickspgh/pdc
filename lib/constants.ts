import type { SiteConfig, NavItem } from "@/types";

export const SITE_CONFIG: SiteConfig = {
  name: "PDC Valve",
  tagline: "Engineered Flow Control",
  founded: 1970,
  contact: {
    address: "1075 Montour West Industrial Park",
    city: "Coraopolis",
    state: "PA",
    zip: "15108",
    phone: "724-695-3440",
    email: "sales@pdcvalve.com",
  },
  navigation: [
    { label: "Products", href: "/products" },
    { label: "Markets", href: "/markets" },
    { label: "Solutions", href: "/solutions" },
    { label: "Resources", href: "/resources" },
    { label: "Company", href: "/company/about" },
  ],
  footerNavigation: [
    { label: "Products", href: "/products" },
    { label: "Markets", href: "/markets" },
    { label: "Resources", href: "/resources" },
    { label: "Request a Quote", href: "/request-a-quote" },
  ],
};

export const STATS = [
  { value: "50+", label: "Years of engineering" },
  { value: "300+", label: "Casting patterns" },
  { value: "10", label: "Core product lines" },
  { value: "ISO", label: "9001:2015 certified" },
];

export const CAPABILITIES = [
  { icon: "Gauge", title: "Application evaluation", description: "Engineering support from product selection through configured, installation-ready delivery." },
  { icon: "Settings2", title: "In-house machining", description: "Engineering support from product selection through configured, installation-ready delivery." },
  { icon: "Layers3", title: "Integrated assemblies", description: "Engineering support from product selection through configured, installation-ready delivery." },
  { icon: "ShieldCheck", title: "Quality & compliance", description: "Engineering support from product selection through configured, installation-ready delivery." },
];

export const NAV_ITEMS: NavItem[] = SITE_CONFIG.navigation;
