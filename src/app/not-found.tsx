import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { Sparkles, ArrowLeft, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Vedic Wellness Center",
  description: "The requested space could not be found at Vedic Wellness Center.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col pt-20 selection:bg-[#B6583B] selection:text-[#FAF6EF]">
      <CustomCursor />
      <Header />

      <section className="py-24 md:py-36 bg-[#FBF9F5] flex-1 flex items-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center w-full">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF6EF] border border-[#E6DBCB] flex items-center justify-center text-[#B6583B] shadow-sm mb-6 animate-pulse">
            <Compass size={28} />
          </div>

          <span className="text-xs uppercase tracking-[0.3em] text-[#8C7B70] font-sans font-medium block mb-3">
            404 • Gentle Redirection
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1C1512] font-normal tracking-tight mb-4">
            You&apos;ve wandered a little off the path.
          </h1>

          <p className="text-base sm:text-lg text-[#594D46] font-serif italic max-w-xl mx-auto mb-10">
            &ldquo;The space you&apos;re looking for isn&apos;t here, but your moment of calm can still be.&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#1C1512] hover:bg-[#B6583B] text-[#FAF6EF] text-xs font-medium uppercase tracking-widest transition-colors shadow-md"
            >
              <ArrowLeft size={14} />
              <span>Return Home</span>
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 border border-[#1C1512]/30 hover:border-[#1C1512] text-[#1C1512] text-xs font-medium uppercase tracking-widest transition-colors"
            >
              <span>Explore Services</span>
            </Link>

            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#B6583B] hover:bg-[#A0482D] text-[#FAF6EF] text-xs font-medium uppercase tracking-widest transition-colors shadow-md"
            >
              <Sparkles size={14} />
              <span>Book a Session</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
