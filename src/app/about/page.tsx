import type { Metadata } from "next";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Pillars from "@/components/pillars/Pillars";
import SpaceGallery from "@/components/gallery/SpaceGallery";
import Reviews from "@/components/reviews/Reviews";
import CustomCursor from "@/components/ui/CustomCursor";
import { SITE_CONFIG } from "@/lib/site";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { Sparkles, MapPin, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Vedic Wellness Center | Punawale",
  description:
    "Learn about Vedic Wellness Center in Punawale, Pimpri-Chinchwad. A contemporary spa sanctuary offering calm, therapeutic touch, and serene private space.",
  openGraph: {
    title: "About Vedic Wellness Center | Punawale",
    description:
      "A quiet sanctuary away from daily hurry in Punawale, Pimpri-Chinchwad. Mindful massage therapy & peaceful room comfort.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 selection:bg-[#B6583B] selection:text-[#FAF6EF]">
      <CustomCursor />
      <Header />
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

      {/* Hero Intro Header */}
      <section className="py-16 md:py-24 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FAF6EF] border border-[#E6DBCB] text-xs text-[#594D46] mb-6 shadow-sm">
              <Star size={12} className="fill-[#C29B53] text-[#C29B53]" />
              <span>5.0 Google Rating • Punawale Studio</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1512] font-normal leading-tight mb-6">
              About Vedic Wellness Center
            </h1>
            <p className="text-base sm:text-lg text-[#594D46] font-light leading-relaxed mb-8">
              Rooted in peaceful atmosphere, quiet therapy rooms, and attentive massage care, Vedic Wellness Center provides a serene destination in Punawale, Pimpri-Chinchwad for slowing down and regaining physical ease.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#8C7B70] pt-4 border-t border-[#E6DBCB]">
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-[#B6583B]" />
                <span>Gaikwad Nagar Rd, Punawale</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} className="text-[#52634F]" />
                <span>Open 24 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy & Pillars */}
      <Pillars />

      {/* Visual Space Gallery */}
      <SpaceGallery />

      {/* Real Reviews & Ratings */}
      <Reviews />

      {/* CTA Box */}
      <section className="py-16 bg-[#140E0C] text-[#FAF6EF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-normal mb-4">
            Experience Personal Calm in Punawale
          </h2>
          <p className="text-sm text-[#8C7B70] font-light max-w-xl mx-auto mb-8">
            Connect directly with our staff on WhatsApp to schedule your preferred session time.
          </p>
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#B6583B] hover:bg-[#A0482D] text-[#FAF6EF] text-xs font-medium uppercase tracking-widest transition-colors"
          >
            <span>Book a Session</span>
            <Sparkles size={14} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
