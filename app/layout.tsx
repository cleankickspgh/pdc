import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/companyStats";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pdcvalve.com"),
  title: "PDC Valve & Actuators | Industrial Flow Control Solutions",
  description:
    "PDC engineers butterfly valves, dampers, check valves, pneumatic actuators, and electric actuators for industrial control, automation, and isolation applications.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.pdcvalve.com",
    siteName: "PDC Valve & Actuators",
    title: "PDC Valve & Actuators | Industrial Flow Control Solutions",
    description:
      "PDC engineers butterfly valves, dampers, check valves, pneumatic actuators, and electric actuators for industrial control, automation, and isolation applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDC Valve & Actuators | Industrial Flow Control Solutions",
    description:
      "PDC engineers butterfly valves, dampers, check valves, pneumatic actuators, and electric actuators for industrial control, automation, and isolation applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: "https://www.pdcvalve.com",
  foundingDate: String(siteConfig.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    addressLocality: siteConfig.contact.city,
    addressRegion: siteConfig.contact.state,
    postalCode: siteConfig.contact.zip,
    addressCountry: "US",
  },
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
