"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Phone } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { SITE_CONFIG } from "@/lib/site";

export default function StickyMobileCTA() {
  const handleBookingClick = () => {
    trackEvent("whatsapp_click", { location: "sticky_mobile_cta" });
    trackEvent("service_booking_click", { location: "sticky_mobile_cta" });
  };

  const handlePhoneClick = () => {
    trackEvent("phone_call_click", { location: "sticky_mobile_cta" });
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-2.5 sm:p-3 bg-[#1C1512]/95 backdrop-blur-md border-t border-[#3A2D27] shadow-2xl pb-safe"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-2.5">
        <div className="flex flex-col">
          <span className="font-serif text-xs sm:text-sm text-[#FAF6EF] font-medium leading-tight truncate">
            {SITE_CONFIG.name}
          </span>
          <span className="text-[10px] text-[#C29B53] tracking-widest uppercase font-sans">
            Punawale • Open 24h
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={SITE_CONFIG.phoneTel}
            onClick={handlePhoneClick}
            className="flex items-center justify-center p-2.5 bg-[#FAF6EF]/10 hover:bg-[#FAF6EF]/20 border border-[#FAF6EF]/30 text-[#FAF6EF] text-xs font-medium transition-colors active:scale-95"
            title="Call Vedic Wellness Center"
            aria-label="Call Vedic Wellness Center"
          >
            <Phone size={15} className="text-[#C29B53]" />
          </a>

          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBookingClick}
            className="flex items-center justify-center space-x-1.5 py-2.5 px-3.5 sm:px-4 bg-[#B6583B] hover:bg-[#A0482D] text-[#FAF6EF] text-xs font-medium uppercase tracking-wider transition-colors shadow-xs active:scale-[0.98]"
          >
            <MessageSquare size={14} />
            <span>Book</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
