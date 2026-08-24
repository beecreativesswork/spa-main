"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function StickyMobileCTA() {
  const handleBookingClick = () => {
    trackEvent("whatsapp_click", { location: "sticky_mobile_cta" });
    trackEvent("service_booking_click", { location: "sticky_mobile_cta" });
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-[#1C1512]/95 backdrop-blur-md border-t border-[#3A2D27] shadow-2xl pb-safe"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-serif text-sm text-[#FAF6EF] font-medium leading-tight">
            Vedic Wellness Center
          </span>
          <span className="text-[10px] text-[#C29B53] tracking-widest uppercase font-sans">
            Punawale • Open 24h
          </span>
        </div>

        <a
          href={getWhatsAppBookingUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBookingClick}
          className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 bg-[#B6583B] hover:bg-[#A0482D] text-[#FAF6EF] text-xs font-medium uppercase tracking-wider transition-colors shadow-sm active:scale-[0.98]"
        >
          <MessageSquare size={14} />
          <span>Book on WhatsApp</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}
