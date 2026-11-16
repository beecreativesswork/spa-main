"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, Phone, MessageSquare, ExternalLink } from "lucide-react";
import { GOOGLE_MAPS_URL, GOOGLE_MAPS_SEARCH_URL, GOOGLE_MAPS_EMBED_URL } from "@/lib/maps";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

export default function Location() {
  const handleDirectionsClick = () => {
    trackEvent("directions_click", { location: "location_section" });
  };

  const handlePhoneClick = () => {
    trackEvent("phone_call_click", { location: "location_section" });
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", { location: "location_section" });
    trackEvent("service_booking_click", { location: "location_section" });
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-[#FBF9F5] relative border-t border-[#E6DBCB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Address, Phone & Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#8C7B70] font-sans font-medium block mb-3">
              Location & Contact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1512] font-normal tracking-tight mb-2">
              Visit Our Sanctuary
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#B6583B] font-sans mb-8">
              {SITE_CONFIG.hindiName} • Punawale, Pimpri-Chinchwad
            </p>

            {/* Address & Contact Information Card */}
            <div className="bg-[#FAF6EF] border border-[#E6DBCB] p-6 sm:p-8 space-y-6 shadow-sm mb-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin size={22} className="text-[#B6583B] flex-shrink-0 mt-1" />
                <div className="text-sm sm:text-base text-[#1C1512] font-light leading-relaxed">
                  <div className="font-serif text-xl font-medium text-[#1C1512] mb-1">
                    {SITE_CONFIG.name}
                  </div>
                  <div className="font-medium text-[#1C1512]">
                    C-Wing, 18 Longitude, Second Floor
                  </div>
                  <div className="text-[#594D46]">
                    Gaikwad Nagar Rd, Above Darshan Plywood
                  </div>
                  <div className="text-[#594D46]">
                    Punawale, Pimpri-Chinchwad
                  </div>
                  <div className="text-[#594D46]">
                    Maharashtra 411033, India
                  </div>
                </div>
              </div>

              {/* Direct Phone Number */}
              <div className="flex items-start space-x-4 pt-6 border-t border-[#E6DBCB]">
                <Phone size={20} className="text-[#B6583B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8C7B70] mb-0.5">
                    Direct Phone Line
                  </div>
                  <a
                    href={SITE_CONFIG.phoneTel}
                    onClick={handlePhoneClick}
                    className="font-serif text-xl text-[#1C1512] hover:text-[#B6583B] transition-colors font-medium"
                  >
                    {SITE_CONFIG.phoneFormatted}
                  </a>
                  <div className="text-xs text-[#8C7B70] mt-0.5">
                    Click to call directly from your device
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center space-x-4 pt-6 border-t border-[#E6DBCB]">
                <Clock size={20} className="text-[#52634F] flex-shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8C7B70]">Operating Hours</div>
                  <div className="text-sm font-semibold text-[#52634F]">
                    {SITE_CONFIG.openingHours} • 7 Days a Week
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs: Directions & WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectionsClick}
                className="flex-1 inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest font-medium text-[#FAF6EF] bg-[#1C1512] hover:bg-[#B6583B] transition-colors shadow-sm group"
              >
                <Navigation size={15} className="mr-2 group-hover:scale-110 transition-transform" />
                <span>Get Directions</span>
              </a>

              <a
                href={SITE_CONFIG.phoneTel}
                onClick={handlePhoneClick}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest font-medium text-[#1C1512] border border-[#1C1512] hover:bg-[#1C1512] hover:text-[#FAF6EF] transition-colors"
              >
                <Phone size={14} className="mr-2" />
                <span>Call Now</span>
              </a>

              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest font-medium text-[#FAF6EF] bg-[#52634F] hover:bg-[#435240] transition-colors"
                title="Book via WhatsApp"
              >
                <MessageSquare size={14} className="mr-2" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Responsive Embedded Google Maps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-7 relative flex flex-col"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#E8DEC9] border border-[#D5C6B1] overflow-hidden shadow-sm">
              <iframe
                title="Vedic Wellness Center Location Map"
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
              />
            </div>

            {/* Map Action Banner */}
            <div className="mt-3 bg-[#FAF6EF] border border-[#E6DBCB] px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-2 text-[#594D46]">
                <MapPin size={14} className="text-[#B6583B] flex-shrink-0" />
                <span className="truncate">
                  18 Longitude, 2nd Floor, Above Darshan Plywood, Punawale
                </span>
              </div>
              <a
                href={GOOGLE_MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectionsClick}
                className="inline-flex items-center space-x-1.5 uppercase tracking-wider text-[#1C1512] hover:text-[#B6583B] font-medium transition-colors flex-shrink-0"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
