'use client'

import { TestimonialMarquee } from "@/components/testimonial-marquee";
import { FeaturesGrid } from "@/components/features-grid";
import { EquipmentSearch } from "@/components/equipment-search";
import { NavigationBar } from "@/components/navigation-bar";
import { BentoGrid } from "@/components/bento-grid";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <main className="max-w-full mx-auto px-4 md:px-6 lg:px-8">
        <EquipmentSearch />
        <BentoGrid />
        <FeaturesGrid />
        <TestimonialMarquee />
      </main>
      <Footer />
    </div>
  );
}
