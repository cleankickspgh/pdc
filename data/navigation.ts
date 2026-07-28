import type { NavItem } from "@/types";

export const primaryNavigation: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Markets", href: "/markets" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company/about" },
];

export const footerProducts: NavItem[] = [
  { label: "Butterfly Damper Valves", href: "/products/butterfly-damper-valves" },
  { label: "Butterfly Valves", href: "/products/butterfly-valves" },
  { label: "Check Valves", href: "/products/check-valves" },
  { label: "Pneumatic Actuators", href: "/products/pneumatic-actuators" },
  { label: "Electric Actuators", href: "/products/electric-actuators" },
];

export const footerMarkets: NavItem[] = [
  { label: "Power", href: "/markets/power-generation" },
  { label: "Air Management", href: "/markets/air-management" },
  { label: "Oil & Gas", href: "/markets/oil-gas" },
  { label: "Chemical", href: "/markets/chemical" },
  { label: "Petrochemical", href: "/markets/petrochemical" },
  { label: "Water & Wastewater", href: "/markets/water-wastewater" },
];

export const footerCompany: NavItem[] = [
  { label: "About PDC", href: "/company/about" },
  { label: "Capabilities", href: "/company/capabilities" },
  { label: "Quality", href: "/company/quality" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const utilityBarLinks: NavItem[] = [
  { label: "Find a Distributor", href: "/distributors" },
];
