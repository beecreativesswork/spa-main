"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquare, MapPin } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: isHome ? "#services" : "/services" },
    { name: "About", href: isHome ? "#pillars" : "/about" },
    { name: "Experience", href: isHome ? "#experience" : "/experience" },
    { name: "Location & Contact", href: isHome ? "#location" : "/contact" },
  ];

  const handleWhatsAppClick = (location: string) => {
    trackEvent("whatsapp_click", { location });
    trackEvent("service_booking_click", { location });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E6DBCB]/60 py-3 shadow-sm"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Brand Identity */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-medium tracking-tight text-[#1C1512] group-hover:text-[#B6583B] transition-colors duration-300">
              Vedic Wellness Center
            </span>
            <span className="text-[10px] md:text-[11px] tracking-widest uppercase text-[#8C7B70] font-sans">
              वैदिक वेलनेस सेंटर • Punawale
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-[#594D46] hover:text-[#1C1512] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B6583B] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Primary CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("header_desktop")}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-widest font-medium text-[#FAF6EF] bg-[#1C1512] hover:bg-[#B6583B] transition-colors duration-300 rounded-none shadow-sm"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1C1512] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B6583B]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-30 bg-[#FBF9F5] flex flex-col px-8 py-10 lg:hidden border-t border-[#E6DBCB]"
          >
            <nav className="flex flex-col space-y-6 my-auto" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-[#1C1512] hover:text-[#B6583B] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-8 border-t border-[#E6DBCB] flex flex-col space-y-4">
              <div className="flex items-center text-xs text-[#8C7B70] space-x-2">
                <MapPin size={14} className="text-[#B6583B]" />
                <span>Punawale, Pimpri-Chinchwad, Maharashtra</span>
              </div>
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleWhatsAppClick("header_mobile");
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 text-xs uppercase tracking-widest font-medium text-[#FAF6EF] bg-[#1C1512] hover:bg-[#B6583B] transition-colors"
              >
                <MessageSquare size={16} />
                <span>Book via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
