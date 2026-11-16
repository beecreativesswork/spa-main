"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquare, MapPin, Phone } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { SITE_CONFIG } from "@/lib/site";

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

  const handlePhoneClick = (location: string) => {
    trackEvent("phone_call_click", { location });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E6DBCB]/70 py-3 shadow-xs"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Brand Identity with Circular Logo Emblem */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative w-10 h-10 md:w-11 md:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/vedic-wellness-logo-transparent.png"
                alt="Vedic Wellness Center Logo"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-medium tracking-tight text-[#1C1512] group-hover:text-[#B6583B] transition-colors duration-300 leading-tight">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[10px] md:text-[11px] tracking-widest uppercase text-[#8C7B70] font-sans">
                {SITE_CONFIG.hindiName} • Punawale
              </span>
            </div>
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

          {/* Right: Primary CTAs (Phone & WhatsApp) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={SITE_CONFIG.phoneTel}
              onClick={() => handlePhoneClick("header_desktop")}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs uppercase tracking-wider font-medium text-[#1C1512] border border-[#1C1512]/20 hover:border-[#1C1512] bg-[#FAF6EF]/60 hover:bg-[#FAF6EF] transition-all duration-300"
              title="Call Vedic Wellness Center"
            >
              <Phone size={13} className="text-[#B6583B]" />
              <span className="hidden xl:inline">{SITE_CONFIG.phoneFormatted}</span>
              <span className="xl:hidden">Call</span>
            </a>

            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("header_desktop")}
              className="inline-flex items-center justify-center px-5 py-2 text-xs uppercase tracking-widest font-medium text-[#FAF6EF] bg-[#1C1512] hover:bg-[#B6583B] transition-colors duration-300 rounded-none shadow-xs"
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
            className="fixed inset-0 top-[60px] z-30 bg-[#FBF9F5] flex flex-col px-8 py-8 lg:hidden border-t border-[#E6DBCB] overflow-y-auto"
          >
            <div className="flex items-center space-x-3 pb-6 border-b border-[#E6DBCB]">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/vedic-wellness-logo-transparent.png"
                  alt="Vedic Wellness Center Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-serif text-lg font-medium text-[#1C1512]">
                  {SITE_CONFIG.name}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#8C7B70]">
                  {SITE_CONFIG.hindiName}
                </div>
              </div>
            </div>

            <nav className="flex flex-col space-y-5 my-6" aria-label="Mobile Navigation">
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

            <div className="pt-6 border-t border-[#E6DBCB] flex flex-col space-y-3">
              <div className="flex items-center text-xs text-[#8C7B70] space-x-2">
                <MapPin size={14} className="text-[#B6583B] flex-shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </div>

              <a
                href={SITE_CONFIG.phoneTel}
                onClick={() => {
                  handlePhoneClick("header_mobile");
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 text-xs uppercase tracking-widest font-medium text-[#1C1512] border border-[#1C1512] bg-[#FAF6EF] hover:bg-[#1C1512] hover:text-[#FAF6EF] transition-colors"
              >
                <Phone size={15} className="text-[#B6583B]" />
                <span>Call: {SITE_CONFIG.phoneFormatted}</span>
              </a>

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
