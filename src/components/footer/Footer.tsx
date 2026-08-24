import Link from "next/link";
import { GOOGLE_MAPS_URL } from "@/lib/maps";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#140E0C] text-[#FAF6EF] pt-16 pb-12 border-t border-[#2A201C]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col space-y-3">
            <h3 className="font-serif text-2xl font-normal text-[#FAF6EF]">
              {SITE_CONFIG.name}
            </h3>
            <div className="text-xs uppercase tracking-widest text-[#C29B53]">
              {SITE_CONFIG.hindiName}
            </div>
            <p className="text-xs text-[#8C7B70] font-light max-w-sm leading-relaxed pt-2">
              {SITE_CONFIG.address.formatted}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#8C7B70] mb-1 font-sans">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#D8C8B4]">
              <Link href="/" className="hover:text-[#FAF6EF] transition-colors">
                Home
              </Link>
              <Link href="/services" className="hover:text-[#FAF6EF] transition-colors">
                Services
              </Link>
              <Link href="/about" className="hover:text-[#FAF6EF] transition-colors">
                About Center
              </Link>
              <Link href="/experience" className="hover:text-[#FAF6EF] transition-colors">
                Wellness Experience
              </Link>
              <Link href="/contact" className="hover:text-[#FAF6EF] transition-colors">
                Contact & Location
              </Link>
              <Link href="/privacy" className="hover:text-[#FAF6EF] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Direct Access Column */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#8C7B70] mb-1 font-sans">
              Direct Access
            </div>
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#FAF6EF] hover:text-[#C29B53] transition-colors"
            >
              • WhatsApp Booking
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#FAF6EF] hover:text-[#C29B53] transition-colors"
            >
              • Google Maps Directions
            </a>
            <div className="text-xs text-[#52634F] font-semibold pt-1">
              Open 24 Hours • 7 Days
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
            <span>Punawale • Pimpri-Chinchwad • Maharashtra</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
