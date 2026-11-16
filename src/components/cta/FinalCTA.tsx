"use client";

import { motion } from "framer-motion";
import { Sparkles, Phone, Navigation } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/lib/site";
import { GOOGLE_MAPS_URL } from "@/lib/maps";

export default function FinalCTA() {
  return (
    <section className="py-28 md:py-36 bg-[#1C1512] text-[#FAF6EF] relative overflow-hidden">
      {/* Soft Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#C29B53]/15 via-[#B6583B]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#C29B53] font-sans font-medium block mb-4">
            {SITE_CONFIG.hindiName} • Punawale
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight mb-6 leading-tight">
            Make time for yourself.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#D8C8B4] font-light max-w-xl mx-auto mb-10 leading-relaxed font-serif italic">
            &ldquo;Your next moment of relaxation is only a phone call or message away.&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 text-xs uppercase tracking-widest font-medium text-[#1C1512] bg-[#FAF6EF] hover:bg-[#C29B53] hover:text-[#1C1512] transition-colors duration-300 shadow-lg"
            >
              <Sparkles size={15} />
              <span>Book a Massage</span>
            </a>

            <a
              href={SITE_CONFIG.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 text-xs uppercase tracking-widest font-medium text-[#FAF6EF] bg-[#B6583B] hover:bg-[#A0482D] transition-colors duration-300 shadow-md"
            >
              <Phone size={15} />
              <span>Call: {SITE_CONFIG.phoneFormatted}</span>
            </a>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 text-xs uppercase tracking-widest font-medium text-[#FAF6EF] border border-[#FAF6EF]/30 hover:border-[#FAF6EF] bg-transparent transition-colors duration-300"
            >
              <Navigation size={15} />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="mt-12 text-xs text-[#A8988B] tracking-wider uppercase">
            {SITE_CONFIG.openingHours} • {SITE_CONFIG.address.shortFormatted}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
