import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Navigation, MessageSquare, Clock } from "lucide-react";
import { GOOGLE_MAPS_URL } from "@/lib/maps";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#140E0C] text-[#FAF6EF] pt-16 pb-12 border-t border-[#2A201C]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Brand & Emblem Column */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 flex-shrink-0 bg-[#FAF6EF]/5 rounded-full p-1 border border-[#C29B53]/30">
                <Image
                  src="/images/vedic-wellness-logo-transparent.png"
                  alt="Vedic Wellness Center Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-normal text-[#FAF6EF] leading-tight">
                  {SITE_CONFIG.name}
                </h3>
                <div className="text-xs uppercase tracking-widest text-[#C29B53]">
                  {SITE_CONFIG.hindiName}
                </div>
              </div>
            </div>

            <p className="text-xs text-[#A8988B] font-light max-w-md leading-relaxed pt-1">
              A contemporary sanctuary rooted in ancient Vedic wellness principles, mindful touch, and deep physical calm.
            </p>

            {/* Complete Official Address */}
            <div className="pt-2 flex items-start space-x-2.5 text-xs text-[#D8C8B4] leading-relaxed">
              <MapPin size={16} className="text-[#C29B53] flex-shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.address.formatted}</span>
            </div>

            {/* Clickable Phone Number */}
            <div className="flex items-center space-x-2.5 text-xs text-[#D8C8B4]">
              <Phone size={15} className="text-[#C29B53] flex-shrink-0" />
              <a
                href={SITE_CONFIG.phoneTel}
                className="hover:text-[#FAF6EF] text-[#FAF6EF] font-medium transition-colors"
              >
                {SITE_CONFIG.phoneFormatted}
              </a>
              <span className="text-[#8C7B70]">•</span>
              <span className="text-[#8C7B70]">Call Anytime</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#8C7B70] mb-1 font-sans">
              Navigation
            </div>
            <div className="flex flex-col space-y-2 text-xs text-[#D8C8B4]">
              <Link href="/" className="hover:text-[#FAF6EF] transition-colors">
                Home
              </Link>
              <Link href="/services" className="hover:text-[#FAF6EF] transition-colors">
                Massage & Wellness Services
              </Link>
              <Link href="/about" className="hover:text-[#FAF6EF] transition-colors">
                About the Center
              </Link>
              <Link href="/experience" className="hover:text-[#FAF6EF] transition-colors">
                The Wellness Experience
              </Link>
              <Link href="/contact" className="hover:text-[#FAF6EF] transition-colors">
                Location & Contact
              </Link>
              <Link href="/privacy" className="hover:text-[#FAF6EF] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Direct Access & Operations */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#8C7B70] mb-1 font-sans">
              Direct Contact & Visiting
            </div>

            <div className="flex items-center space-x-2 text-xs text-[#52634F] bg-[#52634F]/10 border border-[#52634F]/30 px-3 py-1.5 w-fit">
              <Clock size={13} className="text-[#7EA077]" />
              <span className="text-[#A7CCA0] font-medium">Open 24 Hours • 7 Days a Week</span>
            </div>

            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center space-x-2 text-xs text-[#FAF6EF] hover:text-[#C29B53] transition-colors pt-2"
            >
              <Phone size={14} className="text-[#C29B53]" />
              <span>Call: {SITE_CONFIG.phoneFormatted}</span>
            </a>

            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs text-[#FAF6EF] hover:text-[#C29B53] transition-colors"
            >
              <MessageSquare size={14} className="text-[#25D366]" />
              <span>WhatsApp Booking Available</span>
            </a>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs text-[#FAF6EF] hover:text-[#C29B53] transition-colors"
            >
              <Navigation size={14} className="text-[#C29B53]" />
              <span>Get Google Maps Directions</span>
            </a>

            <div className="text-[11px] text-[#8C7B70] pt-2">
              Second Floor, C-Wing, 18 Longitude Building, Gaikwad Nagar Rd, Above Darshan Plywood, Punawale.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2A201C] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7B70] space-y-3 sm:space-y-0">
          <div>
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="hover:text-[#FAF6EF] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <span>Punawale • Pimpri-Chinchwad • Maharashtra 411033</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
