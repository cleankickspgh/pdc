export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type ProductFamily = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  metric: string;
  sub: string;
  icon?: string;
};

export type Product = {
  id: string;
  family: string;
  name: string;
  slug: string;
  description: string;
  specs: ProductSpec[];
  features: string[];
  image?: string;
};

export type ProductSpec = {
  label: string;
  value: string;
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

export type Capability = {
  icon: string;
  title: string;
  description: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  founded: number;
  contact: {
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
  };
  navigation: NavItem[];
  footerNavigation: NavItem[];
};

export type CTA = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};
