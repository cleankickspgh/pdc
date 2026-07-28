import type { Capability, SiteConfig } from "@/types";

export const companyStats: Capability[] = [
  { label: "300+ Casting Patterns", description: "An extensive in-house casting library enables rapid configuration across product lines." },
  { label: "10 Core Product Lines", description: "A focused portfolio of valve and actuator families covering the majority of industrial applications." },
  { label: "In-House Machining", description: "Machining and modification capabilities that reduce lead times and support custom requirements." },
  { label: "Integrated Valve Assemblies", description: "Complete valve-actuator packages assembled, tested, and shipped from a single source." },
  { label: "Application Engineering", description: "Engineering support from product selection through configured, installation-ready delivery." },
  { label: "Short-Lead-Time Inventory", description: "Strategic inventory of core components to support urgent and maintenance-driven demand." },
];

export const qualityFacts: Capability[] = [
  { label: "ISO 9001:2015 Certified", description: "Quality management system certified to the ISO 9001:2015 standard." },
  { label: "AIS Compliance", description: "Adherence to applicable industry standards and specifications." },
  { label: "In-House Machining", description: "Machining capabilities maintained under controlled quality processes." },
  { label: "Application Evaluation", description: "Each application reviewed by PDC engineering before configuration." },
  { label: "Complete Valve and Actuator Assemblies", description: "Full assemblies built, tested, and documented before shipment." },
];

export const siteConfig: SiteConfig = {
  name: "PDC Valve & Actuators",
  legalName: "Process Development & Control LLC",
  tagline: "Engineered Flow Control",
  founded: 1970,
  contact: {
    address: "1075 Montour West Industrial Park",
    city: "Coraopolis",
    state: "PA",
    zip: "15108",
    phone: "724-695-3440",
    tollFree: "888-PDC-4070",
    email: "sales@pdcvalve.com",
  },
  navigation: [],
  footerProducts: [],
  footerMarkets: [],
  footerCompany: [],
};

export const heroTrustIndicators = [
  "Since 1970",
  "ISO 9001:2015",
  "In-House Machining",
  "Custom Assemblies",
];
