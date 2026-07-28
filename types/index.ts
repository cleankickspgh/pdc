export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type ProductFamily = {
  id: string;
  name: string;
  category: string;
  number: string;
  description: string;
  href: string;
  slug: string;
};

export type FeaturedProduct = {
  id: string;
  name: string;
  series: string;
  category: string;
  description: string;
  specs: { label: string; value: string }[];
  href: string;
  slug: string;
};

export type Market = {
  name: string;
  slug: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type OperatingSystem = {
  number: string;
  title: string;
  description: string;
  slug: string;
};

export type Capability = {
  label: string;
  description: string;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  tagline: string;
  founded: number;
  contact: {
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    tollFree: string;
    email: string;
  };
  navigation: NavItem[];
  footerProducts: NavItem[];
  footerMarkets: NavItem[];
  footerCompany: NavItem[];
};

export type CTA = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};
