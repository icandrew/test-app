'use client'

import { TestimonialMarquee } from "@/components/testimonial-marquee";
import { FeaturesGrid } from "@/components/features-grid";
import { EquipmentSearch } from "@/components/equipment-search";
import { NavigationBar } from "@/components/navigation-bar";
import { BentoGrid } from "@/components/bento-grid";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/product-grid";

export default function Page() {
  return (
    <>
      <NavigationBar />
      <main className="px-6 sm:px-8 lg:px-12 xl:px-0">
        <EquipmentSearch />
        <BentoGrid />
        <ProductGrid />
        <FeaturesGrid />
        <TestimonialMarquee />
        
      </main>
      <Footer />
    </>
  )
}
