"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, ExternalLink, MessageSquare } from "lucide-react";
import { GOOGLE_MAPS_URL } from "@/lib/maps";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

export default function Location() {
  const handleDirectionsClick = () => {
    trackEvent("directions_click", { location: "location_section" });
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", { location: "location_section" });
    trackEvent("service_booking_click", { location: "location_section" });
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-[#FBF9F5] relative border-t border-[#E6DBCB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Address & Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#8C7B70] font-sans font-medium block mb-3">
              Punawale Studio Location
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1512] font-normal tracking-tight mb-4">
              {SITE_CONFIG.name}
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#B6583B] font-sans mb-8">
              {SITE_CONFIG.hindiName} • Punawale, Pimpri-Chinchwad
            </p>

            {/* Address Card */}
            <div className="bg-[#FAF6EF] border border-[#E6DBCB] p-8 space-y-6 shadow-editorial mb-8">
              <div className="flex items-start space-x-4">
                <MapPin size={22} className="text-[#B6583B] flex-shrink-0 mt-1" />
                <div className="text-base text-[#1C1512] font-light leading-relaxed">
                  <div className="font-serif text-xl font-medium text-[#1C1512] mb-1">
                    Verified Address
                  </div>
                  <div>{SITE_CONFIG.address.street}</div>
                  <div>{SITE_CONFIG.address.locality}</div>
                  <div>{SITE_CONFIG.address.region} {SITE_CONFIG.address.postalCode}, India</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-6 border-t border-[#E6DBCB]">
                <Clock size={20} className="text-[#52634F] flex-shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8C7B70]">Operating Hours</div>
                  <div className="text-sm font-semibold text-[#52634F]">{SITE_CONFIG.openingHours} • 7 Days a Week</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectionsClick}
                className="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-widest font-medium text-[#FAF6EF] bg-[#1C1512] hover:bg-[#B6583B] transition-colors shadow-md group"
              >
                <Navigation size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                <span>Get Directions</span>
              </a>

              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-widest font-medium text-[#1C1512] border border-[#1C1512] hover:bg-[#1C1512] hover:text-[#FAF6EF] transition-colors"
              >
                <MessageSquare size={16} className="mr-2" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Architectural Map Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-[#E3D7C5] border border-[#D5C6B1] p-8 flex flex-col justify-between overflow-hidden shadow-editorial">
              {/* Subtle Map Outline Motif */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1C1512]/15 via-transparent to-[#FAF6EF]/40 pointer-events-none" />

              <div className="relative z-10 flex justify-between items-start">
                <span className="text-xs uppercase tracking-widest text-[#1C1512] bg-[#FAF6EF]/90 px-3 py-1 border border-[#E6DBCB]">
                  Pimpri-Chinchwad Region
                </span>
                <span className="text-xs text-[#8C7B70]">Pin Code 411033</span>
              </div>

              <div className="relative z-10 text-center my-auto py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF6EF] border border-[#E6DBCB] flex items-center justify-center text-[#B6583B] shadow-md mb-4">
                  <MapPin size={28} />
                </div>
                <h3 className="font-serif text-2xl text-[#1C1512] mb-1">
                  Vedic Wellness Center
                </h3>
                <p className="text-xs text-[#594D46] font-light">
                  Gaikwad Nagar Rd, above Darshan Plywood, Punawale
                </p>
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectionsClick}
                className="relative z-10 w-full flex items-center justify-center space-x-2 py-3 bg-[#FAF6EF]/95 backdrop-blur-xs text-xs uppercase tracking-widest text-[#1C1512] hover:text-[#B6583B] border border-[#E6DBCB] transition-colors"
              >
                <span>Open Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
