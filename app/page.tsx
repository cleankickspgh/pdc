import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { OperatingSystems } from "@/components/home/OperatingSystems";
import { ProductCategories } from "@/components/home/ProductCategories";
import { EngineeringCapabilities } from "@/components/home/EngineeringCapabilities";
import { Markets } from "@/components/home/Markets";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { QualitySection } from "@/components/home/QualitySection";
import { QuoteCTA } from "@/components/home/QuoteCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OperatingSystems />
        <ProductCategories />
        <EngineeringCapabilities />
        <Markets />
        <FeaturedProducts />
        <QualitySection />
        <QuoteCTA />
      </main>
      <Footer />
    </>
  );
}
