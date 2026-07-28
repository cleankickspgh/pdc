import type { ProductFamily, Market, Stat, Capability } from "@/types";

export const productFamilies: ProductFamily[] = [
  { title: "Butterfly Damper Valves", eyebrow: "CONTROL", description: "High-temperature airflow and process control from compact Econotrol units to large Excel assemblies.", href: "/products/butterfly-damper-valves", metric: "2–60 in", sub: "Up to 1500°F" },
  { title: "Butterfly Valves", eyebrow: "ISOLATION", description: "High-performance and triple-offset designs for dependable shutoff in demanding service.", href: "/products/butterfly-valves", metric: "1½–48 in", sub: "Engineered sealing" },
  { title: "Check Valves", eyebrow: "PROTECTION", description: "ElastoTITE™ hinged check valves designed for low pressure loss and rapid, reliable closure.", href: "/products/check-valves", metric: "1–24 in", sub: "Spring-less options" },
  { title: "Actuation Systems", eyebrow: "AUTOMATION", description: "Pneumatic and electric quarter-turn actuation for repeatable control and fail-safe operation.", href: "/products/actuators", metric: "Quarter-turn", sub: "Configured in-house" },
];

export const markets: Market[] = [
  { name: "Power Generation", slug: "power-generation", description: "Flow control solutions for power generation facilities." },
  { name: "Air Management", slug: "air-management", description: "Dampers and valves for combustion air and flue gas systems." },
  { name: "Oil & Gas", slug: "oil-gas", description: "Reliable isolation and control for upstream and midstream operations." },
  { name: "Chemical", slug: "chemical", description: "Corrosion-resistant valves for aggressive chemical media." },
  { name: "Petrochemical", slug: "petrochemical", description: "High-temperature, high-pressure valves for refining processes." },
  { name: "Water & Wastewater", slug: "water-wastewater", description: "Durable valves for municipal and industrial water systems." },
];

export const stats: Stat[] = [
  { value: "50+", label: "Years of engineering" },
  { value: "300+", label: "Casting patterns" },
  { value: "10", label: "Core product lines" },
  { value: "ISO", label: "9001:2015 certified" },
];

export const capabilities: Capability[] = [
  { icon: "Gauge", title: "Application evaluation", description: "Engineering support from product selection through configured, installation-ready delivery." },
  { icon: "Settings2", title: "In-house machining", description: "Engineering support from product selection through configured, installation-ready delivery." },
  { icon: "Layers3", title: "Integrated assemblies", description: "Engineering support from product selection through configured, installation-ready delivery." },
  { icon: "ShieldCheck", title: "Quality & compliance", description: "Engineering support from product selection through configured, installation-ready delivery." },
];
