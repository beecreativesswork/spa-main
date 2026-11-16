"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, CheckCircle2, MessageSquare, Phone } from "lucide-react";
import { Service } from "@/data/services";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/lib/site";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  const bookingUrl = getWhatsAppBookingUrl(service.name);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1C1512]/70 backdrop-blur-sm"
        />

        {/* Modal Content Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#FAF6EF] border border-[#E6DBCB] shadow-2xl p-6 sm:p-8 z-10 overflow-hidden my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-[#FAF6EF] bg-[#1C1512]/70 hover:bg-[#1C1512] transition-colors rounded-full"
            aria-label="Close details"
          >
            <X size={18} />
          </button>

          {/* AI-Generated Service Photography */}
          <div className="relative w-full h-52 sm:h-64 -mt-6 -mx-6 sm:-mt-8 sm:-mx-8 mb-6 overflow-hidden border-b border-[#E6DBCB]">
            <Image
              src={service.image}
              alt={`${service.name} at Vedic Wellness Center`}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1512]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 sm:left-8 flex items-center space-x-2 text-xs uppercase tracking-widest text-[#FAF6EF]">
              <span className="font-serif text-[#C29B53] font-medium text-sm">{service.number}</span>
              <span>•</span>
              <span className="bg-[#FAF6EF]/20 backdrop-blur-xs px-2.5 py-0.5 border border-[#FAF6EF]/30">
                {service.category}
              </span>
            </div>
          </div>

          {/* Service Title */}
          <div className="mb-4">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1512] font-normal tracking-tight">
              {service.name}
            </h3>
          </div>

          {/* Service Description */}
          <div className="space-y-4 mb-6">
            <p className="text-sm sm:text-base text-[#594D46] font-light leading-relaxed">
              {service.detailedDescription}
            </p>

            {/* Optional Duration & Price */}
            {(service.duration || service.price) && (
              <div className="flex items-center space-x-6 pt-3 border-t border-[#E6DBCB] text-sm text-[#1C1512]">
                {service.duration && (
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-[#B6583B]" />
                    <span>{service.duration}</span>
                  </div>
                )}
                {service.price && (
                  <div className="flex items-center space-x-2 font-semibold">
                    <span>{service.price}</span>
                  </div>
                )}
              </div>
            )}

            {/* Service Highlights */}
            {service.highlights && service.highlights.length > 0 && (
              <div className="pt-3 border-t border-[#E6DBCB]">
                <h4 className="text-xs uppercase tracking-wider text-[#8C7B70] mb-2.5">
                  Treatment Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs text-[#594D46]">
                      <CheckCircle2 size={14} className="text-[#52634F] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#E6DBCB]">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-xs uppercase tracking-widest font-medium text-[#FAF6EF] bg-[#1C1512] hover:bg-[#B6583B] transition-colors shadow-sm"
            >
              <MessageSquare size={16} />
              <span>Book on WhatsApp</span>
            </a>

            <a
              href={SITE_CONFIG.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 text-xs uppercase tracking-widest text-[#1C1512] border border-[#1C1512] hover:bg-[#1C1512] hover:text-[#FAF6EF] transition-colors"
            >
              <Phone size={14} />
              <span>Call: {SITE_CONFIG.phoneFormatted}</span>
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3.5 text-xs uppercase tracking-widest text-[#594D46] hover:text-[#1C1512] border border-[#E6DBCB] hover:border-[#1C1512] transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
