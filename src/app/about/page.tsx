import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Pillars from "@/components/pillars/Pillars";
import SpaceGallery from "@/components/gallery/SpaceGallery";
import Reviews from "@/components/reviews/Reviews";
import CustomCursor from "@/components/ui/CustomCursor";
import { SITE_CONFIG } from "@/lib/site";
import { GOOGLE_MAPS_URL } from "@/lib/maps";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { Sparkles, MapPin, Clock, Star, Phone, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "About Vedic Wellness Center | Punawale, Pimpri-Chinchwad",
  description:
    "Learn about Vedic Wellness Center located at 18 Longitude, Punawale, Pimpri-Chinchwad. Rooted in traditional Indian wellness practices, herbal oils, and mindful massage care.",
  openGraph: {
    title: "About Vedic Wellness Center | Punawale",
    description:
      "A quiet sanctuary away from daily hurry in Punawale, Pimpri-Chinchwad. Mindful massage therapy, Ayurvedic botanicals, and peaceful room comfort.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 selection:bg-[#B6583B] selection:text-[#FAF6EF]">
      <CustomCursor />
      <Header />
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

      {/* Hero Intro Header */}
      <section className="py-16 md:py-20 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FAF6EF] border border-[#E6DBCB] text-xs text-[#594D46] mb-6 shadow-xs">
                <Star size={12} className="fill-[#C29B53] text-[#C29B53]" />
                <span>5.0 Google Rating • Punawale Studio</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1512] font-normal leading-tight mb-6">
                Rooted in Tradition. Designed for Modern Rest.
              </h1>
              <p className="text-base sm:text-lg text-[#594D46] font-light leading-relaxed mb-6">
                At Vedic Wellness Center, we bring centuries of Indian holistic wellness into a peaceful contemporary setting. Located at 18 Longitude on Gaikwad Nagar Road in Punawale, our center is a deliberate retreat from the hurried pace of modern life.
              </p>
              <p className="text-sm sm:text-base text-[#8C7B70] font-light leading-relaxed mb-8">
                Our treatments blend rhythmic touch, warm cold-pressed herbal oils, and fragrant botanicals to ease deep muscular tension, quiet mental fatigue, and restore physical ease.
              </p>

              {/* Verified Contact & Location Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#594D46] pt-6 border-t border-[#E6DBCB]">
                <div className="flex items-start space-x-2.5">
                  <MapPin size={16} className="text-[#B6583B] flex-shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.address.shortFormatted}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Clock size={16} className="text-[#52634F] flex-shrink-0" />
                  <span className="font-medium text-[#52634F]">{SITE_CONFIG.openingHours} • 7 Days</span>
                </div>
                <div className="flex items-center space-x-2.5 sm:col-span-2">
                  <Phone size={16} className="text-[#B6583B] flex-shrink-0" />
                  <a href={SITE_CONFIG.phoneTel} className="font-medium text-[#1C1512] hover:text-[#B6583B]">
                    Call: {SITE_CONFIG.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: AI-Generated About Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] overflow-hidden border border-[#D5C6B1] shadow-editorial group">
                <Image
                  src="/images/about/about-sanctuary.webp"
                  alt="Vedic Wellness Center Ayurvedic apothecary herbs and welcoming sanctuary"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1512]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF6EF]">
                  <div className="text-[10px] uppercase tracking-widest text-[#C29B53] mb-1">
                    Authentic Botanic Care
                  </div>
                  <div className="font-serif text-xl sm:text-2xl font-light italic">
                    &ldquo;Natural herbs, warm oils &amp; quiet therapy rooms.&rdquo;
                  </div>
                </div>
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
      <section className="py-20 bg-[#140E0C] text-[#FAF6EF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C29B53] font-sans font-medium block mb-3">
            {SITE_CONFIG.hindiName} • Punawale
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal mb-4">
            Experience Personal Calm in Punawale
          </h2>
          <p className="text-sm text-[#8C7B70] font-light max-w-xl mx-auto mb-8">
            Connect directly with our staff by phone or WhatsApp to schedule your preferred session time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#B6583B] hover:bg-[#A0482D] text-[#FAF6EF] text-xs font-medium uppercase tracking-widest transition-colors shadow-md"
            >
              <span>Book a Session</span>
              <Sparkles size={14} />
            </a>

            <a
              href={SITE_CONFIG.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border border-[#FAF6EF]/30 hover:border-[#FAF6EF] text-[#FAF6EF] text-xs font-medium uppercase tracking-widest transition-colors"
            >
              <Phone size={14} />
              <span>Call: {SITE_CONFIG.phoneFormatted}</span>
            </a>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border border-[#FAF6EF]/30 hover:border-[#FAF6EF] text-[#FAF6EF] text-xs font-medium uppercase tracking-widest transition-colors"
            >
              <Navigation size={14} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
