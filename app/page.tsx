import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { ProductFamilies } from "@/components/home/ProductFamilies";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { MarketsSection } from "@/components/home/MarketsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <ProductFamilies />
        <CapabilitiesSection />
        <MarketsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
