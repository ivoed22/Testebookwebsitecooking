import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Ebooks } from "@/components/sections/ebooks";
import { Features } from "@/components/sections/features";
import { LeadMagnet } from "@/components/sections/lead-magnet";
import { Testimonials } from "@/components/sections/testimonials";
import { Recipes } from "@/components/sections/recipes";
import { Community } from "@/components/sections/community";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Stats />
      <Ebooks />
      <Features />
      <LeadMagnet />
      <Testimonials />
      <Recipes />
      <Community />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
