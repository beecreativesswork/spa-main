import Header from "@/components/navbar/Header";
import Hero from "@/components/hero/Hero";
import Experience from "@/components/experience/Experience";
import Services from "@/components/services/Services";
import Pillars from "@/components/pillars/Pillars";
import SpaceGallery from "@/components/gallery/SpaceGallery";
import Reviews from "@/components/reviews/Reviews";
import Location from "@/components/location/Location";
import FAQSection from "@/components/faq/FAQSection";
import FinalCTA from "@/components/cta/FinalCTA";
import Footer from "@/components/footer/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-[#B6583B] selection:text-[#FAF6EF]">
      {/* Luxury Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* Sticky Header Navigation */}
      <Header />

      {/* Hero Section with Ambient 3D Sculpture */}
      <Hero />

      {/* Philosophy & Experience */}
      <Experience />

      {/* Interactive Massage Services Catalog */}
      <Services />

      {/* Core Pillars: Calm, Care, Tradition */}
      <Pillars />

      {/* Architectural Space Visual Gallery */}
      <SpaceGallery />

      {/* Verified Google Ratings & Review Sentiment */}
      <Reviews />

      {/* Location & Directions */}
      <Location />

      {/* Frequently Asked Questions & FAQ Page JSON-LD */}
      <FAQSection />

      {/* Closing Call to Action */}
      <FinalCTA />

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}
