import type { ProductFamily, FeaturedProduct, OperatingSystem } from "@/types";

export const productFamilies: ProductFamily[] = [
  {
    id: "bf-damper",
    name: "Butterfly Damper Valves",
    category: "Control",
    number: "01",
    description:
      "Low-pressure and high-temperature flow-control solutions for air, gas, combustion, and industrial process applications.",
    href: "/products/butterfly-damper-valves",
    slug: "butterfly-damper-valves",
  },
  {
    id: "bf-valve",
    name: "Butterfly Valves",
    category: "Isolation",
    number: "02",
    description:
      "High-performance and triple-offset designs for control and dependable isolation.",
    href: "/products/butterfly-valves",
    slug: "butterfly-valves",
  },
  {
    id: "check-valve",
    name: "Check Valves",
    category: "Protection",
    number: "03",
    description:
      "ElastoTITE configurations engineered for reliable backflow prevention.",
    href: "/products/check-valves",
    slug: "check-valves",
  },
  {
    id: "pneumatic",
    name: "Pneumatic Actuators",
    category: "Automation",
    number: "04",
    description:
      "Rack-and-pinion actuation with double-acting and spring-return configurations.",
    href: "/products/pneumatic-actuators",
    slug: "pneumatic-actuators",
  },
  {
    id: "electric",
    name: "Electric Actuators",
    category: "Automation",
    number: "05",
    description:
      "Quarter-turn electric actuation for valves and dampers, including fail-safe options.",
    href: "/products/electric-actuators",
    slug: "electric-actuators",
  },
  {
    id: "choke",
    name: "Choke Valves",
    category: "Control",
    number: "06",
    description:
      "Engineered flow-control solutions for demanding pressure-control applications.",
    href: "/products/choke-valves",
    slug: "choke-valves",
  },
];

export const operatingSystems: OperatingSystem[] = [
  {
    number: "01",
    title: "Control",
    description:
      "High-performance dampers and control valves engineered for high-temperature, corrosive, and pressure-sensitive applications.",
    slug: "control",
  },
  {
    number: "02",
    title: "Automation",
    description:
      "Quarter-turn pneumatic, electric, and spring-return actuators designed for repeatable motion and fail-safe performance.",
    slug: "automation",
  },
  {
    number: "03",
    title: "Isolation",
    description:
      "Manual and automated valve systems designed for dependable shutdown, maintenance safety, and flow isolation.",
    slug: "isolation",
  },
];

export const featuredProducts: FeaturedProduct[] = [
  {
    id: "medium-duty-01",
    name: "Medium Duty",
    series: "Series 01",
    category: "Butterfly Damper Valve",
    description: "Versatile flow-control damper for general industrial air and gas applications.",
    specs: [
      { label: "Sizes", value: '2" – 24"' },
      { label: "Max Temp (Standard)", value: "450°F" },
      { label: "Optional Temp", value: "Up to 900°F" },
    ],
    href: "/products/butterfly-damper-valves/medium-duty-series-01",
    slug: "medium-duty-series-01",
  },
  {
    id: "flanged-end-39",
    name: "Flanged End",
    series: "Series 39",
    category: "Butterfly Damper Valve",
    description: "Flanged damper valve for process air and gas isolation.",
    specs: [
      { label: "Sizes", value: '4" – 14"' },
      { label: "Flanging", value: "125/150 lb" },
      { label: "Max Containment", value: "25 psi" },
    ],
    href: "/products/butterfly-damper-valves/flanged-end-series-39",
    slug: "flanged-end-series-39",
  },
  {
    id: "combustion-22",
    name: "Combustion Valve",
    series: "Series 22",
    category: "Butterfly Valve",
    description: "Manual wafer-style butterfly valve for low-pressure, low-cycle applications.",
    specs: [
      { label: "Style", value: "Manual wafer" },
      { label: "Max Temp", value: "900°F" },
      { label: "Max Differential", value: "1 PSIG" },
    ],
    href: "/products/butterfly-valves/combustion-valve-series-22",
    slug: "combustion-valve-series-22",
  },
  {
    id: "pdcq",
    name: "PDCQ",
    series: "Electric Actuator",
    category: "Electric Actuation",
    description: "Quarter-turn electric actuator for valves and dampers.",
    specs: [
      { label: "Torque", value: "6 – 3,500 N·m" },
      { label: "Equivalent", value: "53 – 31,000 in·lbs" },
    ],
    href: "/products/electric-actuators/pdcq",
    slug: "pdcq",
  },
  {
    id: "pdcs",
    name: "PDCS",
    series: "Spring-Return Electric",
    category: "Electric Actuation",
    description: "Spring-return quarter-turn electric actuator with fail-safe positioning.",
    specs: [
      { label: "Torque", value: "50 – 260 N·m" },
      { label: "Fail Mode", value: "Loss of power → fail position" },
    ],
    href: "/products/electric-actuators/pdcs",
    slug: "pdcs",
  },
  {
    id: "magnus-force",
    name: "Magnus Force",
    series: "Pneumatic Actuator",
    category: "Pneumatic Actuation",
    description: "Rack-and-pinion pneumatic actuator for demanding quarter-turn applications.",
    specs: [
      { label: "Configuration", value: "Double-acting & spring-return" },
      { label: "Mounting", value: "ISO 5211 / DIN 3337" },
      { label: "Accessory", value: "NAMUR mounting" },
    ],
    href: "/products/pneumatic-actuators/magnus-force",
    slug: "magnus-force",
  },
];
