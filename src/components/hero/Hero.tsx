"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowDownRight, Sparkles, Phone } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { SITE_CONFIG } from "@/lib/site";

// Dynamic import with SSR disabled to prevent hydration mismatch for WebGL
const SculpturalCanvas = dynamic(() => import("./SculpturalCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center p-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/vedic-wellness-logo-transparent.png"
        alt="Vedic Wellness Center Emblem logo in Punawale"
        className="w-64 h-64 md:w-72 md:h-72 object-contain drop-shadow-xl"
      />
    </div>
  ),
});

export default function Hero() {
  const handleBookingClick = () => {
    trackEvent("whatsapp_click", { location: "hero_primary" });
    trackEvent("service_booking_click", { location: "hero_primary" });
  };

  const handlePhoneClick = () => {
    trackEvent("phone_call_click", { location: "hero_phone" });
  };

  const handleServicesClick = () => {
    trackEvent("service_view", { location: "hero_secondary" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 md:pt-24 pb-12 overflow-hidden bg-ambient-light"
    >
      {/* Background Soft Sunlight & Organic Shadows */}
      <div className="absolute top-1/4 right-5 md:right-1/6 w-72 md:w-[500px] h-72 md:h-[500px] bg-radial from-[#F5EFE6] via-[#E8DED1]/40 to-transparent blur-3xl pointer-events-none opacity-70" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-radial from-[#52634F]/5 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
        {/* Left Column: Editorial Copy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Rating Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FAF6EF] border border-[#E6DBCB] text-xs text-[#594D46] w-fit mb-4 md:mb-6 shadow-xs">
            <div className="flex items-center text-[#C29B53]">
              <Star size={12} className="fill-[#C29B53]" />
              <span className="ml-1 font-semibold">5.0</span>
            </div>
            <span className="text-[#8C7B70]">•</span>
            <span className="tracking-wide">12 Google Reviews • Punawale</span>
          </div>

          {/* Hindi Title Subheading */}
          <span className="text-xs uppercase tracking-[0.3em] text-[#8C7B70] font-sans font-medium mb-2 md:mb-3">
            {SITE_CONFIG.hindiName} • Contemporary Vedic Sanctuary
          </span>

          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#1C1512] tracking-tight mb-4 md:mb-6">
            A contemporary wellness space rooted in{" "}
            <span className="italic font-light text-[#B6583B]">relaxation</span>,{" "}
            therapeutic massage, and mindful care.
          </h1>

          {/* Editorial Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-[#594D46] max-w-xl font-light leading-relaxed mb-6 md:mb-8">
            Located in Punawale, Pimpri-Chinchwad. We offer a quiet sanctuary away from daily hurry — inviting you to restore equilibrium through traditional touch, herbal oils, and modern comfort.
          </p>

          {/* CTAs - Optimized for immediate above-the-fold visibility on both mobile & desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleBookingClick}
              className="inline-flex items-center justify-center px-7 py-3.5 md:py-4 text-xs uppercase tracking-widest font-medium text-[#FAF6EF] bg-[#1C1512] hover:bg-[#B6583B] transition-all duration-300 shadow-sm group"
            >
              <span>Book a Session</span>
              <Sparkles size={14} className="ml-2 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href={SITE_CONFIG.phoneTel}
              onClick={handlePhoneClick}
              className="inline-flex items-center justify-center px-6 py-3.5 md:py-4 text-xs uppercase tracking-widest font-medium text-[#1C1512] border border-[#1C1512]/30 hover:border-[#1C1512] bg-[#FAF6EF]/60 hover:bg-[#FAF6EF] transition-all duration-300 group"
            >
              <Phone size={14} className="mr-2 text-[#B6583B]" />
              <span>{SITE_CONFIG.phoneFormatted}</span>
            </a>

            <Link
              href="#services"
              onClick={handleServicesClick}
              className="inline-flex items-center justify-center px-6 py-3.5 md:py-4 text-xs uppercase tracking-widest font-medium text-[#594D46] hover:text-[#1C1512] bg-transparent transition-all duration-300 group"
            >
              <span>Services</span>
              <ArrowDownRight size={15} className="ml-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Open 24 Hours & Location Tag */}
          <div className="mt-8 md:mt-10 pt-5 border-t border-[#E6DBCB]/70 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#8C7B70]">
            <div>
              <span className="font-semibold text-[#52634F]">Open 24 Hours</span>
            </div>
            <span>•</span>
            <div>{SITE_CONFIG.address.shortFormatted}</div>
          </div>
        </motion.div>

        {/* Right Column: 3D Sculpture & Architectural Atmosphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 h-[300px] sm:h-[400px] lg:h-[500px] relative flex items-center justify-center"
        >
          {/* 3D Canvas Container */}
          <div className="w-full h-full relative z-10">
            <SculpturalCanvas />
          </div>

          {/* Caption Tag */}
          <div className="absolute bottom-4 right-4 bg-[#FAF6EF]/90 backdrop-blur-xs border border-[#E6DBCB] px-3 py-1 text-[10px] md:text-[11px] text-[#8C7B70] tracking-wider uppercase z-20">
            18 Longitude • Punawale Studio
          </div>
        </motion.div>
      </div>
    </section>
  );
}
