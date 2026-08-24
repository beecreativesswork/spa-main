import type { Metadata } from "next";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CustomCursor from "@/components/ui/CustomCursor";
import { SITE_CONFIG } from "@/lib/site";
import { ShieldCheck, Cookie, Lock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Vedic Wellness Center",
  description:
    "Read the Privacy Policy for Vedic Wellness Center. Information on website analytics, cookies, WhatsApp links, and third-party map services.",
  openGraph: {
    title: "Privacy Policy | Vedic Wellness Center",
    description:
      "Website privacy statement for Vedic Wellness Center in Punawale, Pimpri-Chinchwad.",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 selection:bg-[#B6583B] selection:text-[#FAF6EF]">
      <CustomCursor />
      <Header />
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy" }]} />

      <section className="py-16 md:py-24 bg-[#FBF9F5]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Page Header */}
          <div className="border-b border-[#E6DBCB] pb-10 mb-12">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#B6583B] mb-3">
              <ShieldCheck size={16} />
              <span>Transparency & Privacy</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1512] font-normal tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#8C7B70] uppercase tracking-wider">
              Last updated: {SITE_CONFIG.privacyLastUpdated}
            </p>
          </div>

          {/* Privacy Content Sections */}
          <div className="space-y-10 text-sm text-[#594D46] font-light leading-relaxed">
            {/* Intro */}
            <div className="bg-[#FAF6EF] border border-[#E6DBCB] p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-[#1C1512] font-medium mb-3">
                Overview
              </h2>
              <p>
                This Privacy Policy explains how website-level information is processed when you visit the official website for {SITE_CONFIG.name} ({SITE_CONFIG.hindiName}) located in Punawale, Pimpri-Chinchwad, Maharashtra. We respect your personal privacy and prioritize honest, minimal data collection.
              </p>
            </div>

            {/* Analytics & Tracking */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[#1C1512]">
                <Cookie size={20} className="text-[#B6583B]" />
                <h2 className="font-serif text-2xl font-medium">Website Analytics & Cookies</h2>
              </div>
              <p>
                When configured, our website uses Google Analytics (GA4) to measure general aggregate traffic patterns (such as page views and button interactions like booking clicks or direction requests). Google Analytics uses cookies to collect anonymous technical statistics.
              </p>
              <p>
                We do not collect or transmit personally identifiable information (PII) like names, phone numbers, or private message content through analytics events.
              </p>
            </div>

            {/* WhatsApp Booking */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[#1C1512]">
                <Lock size={20} className="text-[#52634F]" />
                <h2 className="font-serif text-2xl font-medium">WhatsApp Booking & Direct Inquiries</h2>
              </div>
              <p>
                Booking buttons on our website redirect you directly to WhatsApp. Any conversation, appointment inquiry, or contact detail you share via WhatsApp occurs directly on WhatsApp’s platform subject to WhatsApp’s privacy terms. We do not store or process your WhatsApp messages on our web servers.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[#1C1512]">
                <ExternalLink size={20} className="text-[#C29B53]" />
                <h2 className="font-serif text-2xl font-medium">External Services & Maps</h2>
              </div>
              <p>
                Our site provides direct links to Google Maps for location directions. Interacting with map links will direct you to Google services, which operate under Google’s privacy policies.
              </p>
            </div>

            {/* Updates */}
            <div className="pt-6 border-t border-[#E6DBCB] text-xs text-[#8C7B70]">
              <p>
                {SITE_CONFIG.name} • Second Floor, C-Wing, Gaikwad Nagar Rd, above Darshan Plywood, Punawale, Pimpri-Chinchwad, Maharashtra 411033
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
