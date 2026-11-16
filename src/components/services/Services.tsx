"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MessageSquare, Phone } from "lucide-react";
import { SERVICES_DATA, Service } from "@/data/services";
import ServiceModal from "./ServiceModal";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/lib/site";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#E6DBCB]">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#8C7B70] font-sans font-medium block mb-3">
              02 — Massage & Holistic Therapy
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1512] font-normal tracking-tight">
              Our Services
            </h2>
          </div>
          <p className="text-base text-[#594D46] font-light max-w-md mt-4 md:mt-0 font-serif italic">
            &ldquo;Authentic Ayurvedic bodywork, restorative full-body care, and mindful relaxation.&rdquo;
          </p>
        </div>

        {/* Editorial Interactive Service List */}
        <div className="divide-y divide-[#E6DBCB]">
          {SERVICES_DATA.map((service, index) => {
            const isHovered = hoveredServiceId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
                onClick={() => setSelectedService(service)}
                className="group relative py-7 md:py-8 px-4 md:px-6 cursor-pointer transition-all duration-300 hover:bg-[#FAF6EF]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                  {/* Service Number & Category */}
                  <div className="lg:col-span-2 flex items-center space-x-3 text-xs uppercase tracking-widest text-[#8C7B70]">
                    <span className="font-serif text-lg text-[#B6583B] group-hover:scale-110 transition-transform">
                      {service.number}
                    </span>
                    <span>—</span>
                    <span className="font-medium">{service.category}</span>
                  </div>

                  {/* Thumbnail Image Preview */}
                  <div className="lg:col-span-2 hidden sm:block">
                    <div className="relative w-full h-20 md:h-22 overflow-hidden border border-[#E6DBCB] shadow-xs">
                      <Image
                        src={service.image}
                        alt={`${service.name} thumbnail`}
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Service Title */}
                  <div className="lg:col-span-3">
                    <h3 className="font-serif text-2xl sm:text-2xl md:text-3xl text-[#1C1512] group-hover:text-[#B6583B] transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <div className="lg:col-span-3">
                    <p className="text-sm text-[#594D46] font-light leading-relaxed group-hover:text-[#1C1512] transition-colors line-clamp-2 sm:line-clamp-none">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Actions & Arrow */}
                  <div className="lg:col-span-2 flex items-center justify-end space-x-3">
                    <a
                      href={getWhatsAppBookingUrl(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hidden sm:inline-flex items-center text-xs uppercase tracking-wider text-[#594D46] hover:text-[#B6583B] transition-colors font-medium"
                      title={`Book ${service.name} directly on WhatsApp`}
                    >
                      <MessageSquare size={14} className="mr-1 text-[#25D366]" />
                      <span>Book</span>
                    </a>

                    <div className="w-10 h-10 rounded-full border border-[#E6DBCB] group-hover:border-[#1C1512] group-hover:bg-[#1C1512] group-hover:text-[#FAF6EF] flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight
                        size={17}
                        className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </div>

                {/* Subtle Hover Accent Bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-[#B6583B] transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Note on Customized Sessions & Phone Booking */}
        <div className="mt-14 pt-8 border-t border-[#E6DBCB] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7B70] gap-4">
          <div className="flex items-center space-x-2">
            <Sparkles size={14} className="text-[#C29B53]" />
            <span>All sessions are personalized based on your individual comfort level.</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center space-x-1.5 text-[#1C1512] hover:text-[#B6583B] font-medium uppercase tracking-wider"
            >
              <Phone size={13} className="text-[#B6583B]" />
              <span>Call: {SITE_CONFIG.phoneFormatted}</span>
            </a>
            <span>•</span>
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C1512] hover:text-[#B6583B] font-medium underline underline-offset-4 uppercase tracking-wider"
            >
              Inquire on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
