"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Clock, CheckCircle2, MessageSquare } from "lucide-react";
import { Service } from "@/data/services";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  const bookingUrl = getWhatsAppBookingUrl(service.name);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#1C1512]/60 backdrop-blur-sm"
        />

        {/* Modal Content Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#FAF6EF] border border-[#E6DBCB] shadow-2xl p-6 sm:p-10 z-10 overflow-hidden"
        >
          {/* Subtle Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8DEC9]/40 rounded-bl-full pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#594D46] hover:text-[#1C1512] transition-colors rounded-full hover:bg-[#E8DEC9]/50"
            aria-label="Close details"
          >
            <X size={22} />
          </button>

          {/* Service Header */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#8C7B70] mb-2 font-sans">
              <span className="font-serif text-[#B6583B] font-medium">{service.number}</span>
              <span>•</span>
              <span>{service.category}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1512] font-normal tracking-tight">
              {service.name}
            </h3>
          </div>

          {/* Service Description */}
          <div className="space-y-4 mb-8">
            <p className="text-base text-[#594D46] font-light leading-relaxed">
              {service.detailedDescription}
            </p>

            {/* Optional Duration & Price */}
            {(service.duration || service.price) && (
              <div className="flex items-center space-x-6 pt-4 border-t border-[#E6DBCB] text-sm text-[#1C1512]">
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
              <div className="pt-4 border-t border-[#E6DBCB]">
                <h4 className="text-xs uppercase tracking-wider text-[#8C7B70] mb-3">
                  Key Experience Elements
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
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-[#E6DBCB]">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-xs uppercase tracking-widest font-medium text-[#FAF6EF] bg-[#1C1512] hover:bg-[#B6583B] transition-colors shadow-md"
            >
              <MessageSquare size={16} />
              <span>Book this massage on WhatsApp</span>
            </a>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-widest text-[#594D46] hover:text-[#1C1512] border border-[#E6DBCB] hover:border-[#1C1512] transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
