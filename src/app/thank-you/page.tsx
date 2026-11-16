import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CustomCursor from "@/components/ui/CustomCursor";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { MessageSquare, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Vedic Wellness Center",
  description:
    "Thank you for contacting Vedic Wellness Center in Punawale. Your inquiry has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 selection:bg-[#B6583B] selection:text-[#FAF6EF]">
      <CustomCursor />
      <Header />
      <Breadcrumbs items={[{ name: "Thank You", href: "/thank-you" }]} />

      <section className="py-20 md:py-32 bg-[#FBF9F5] flex-1 flex items-center">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center w-full">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF6EF] border border-[#E6DBCB] flex items-center justify-center text-[#52634F] shadow-sm mb-6">
            <CheckCircle2 size={32} />
          </div>

          <span className="text-xs uppercase tracking-[0.3em] text-[#8C7B70] font-sans font-medium block mb-3">
            Inquiry Received
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1512] font-normal tracking-tight mb-4">
            Thank you.
          </h1>
          <p className="text-lg text-[#B6583B] font-serif italic mb-8">
            &ldquo;Your request has been received.&rdquo;
          </p>

          {/* What Happens Next Card */}
          <div className="bg-[#FAF6EF] border border-[#E6DBCB] p-8 max-w-xl mx-auto text-left shadow-editorial mb-10">
            <h2 className="font-serif text-xl text-[#1C1512] font-medium mb-3">
              What happens next?
            </h2>
            <p className="text-sm text-[#594D46] font-light leading-relaxed mb-4">
              If you submitted an inquiry or messaged our team, our staff in Punawale will assist you with available session slots and answer any questions about our massage services.
            </p>
            <p className="text-xs text-[#8C7B70] italic">
              Note: To finalize exact timing and therapist allocation, direct confirmation via WhatsApp is recommended.
            </p>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="space-y-4 max-w-md mx-auto">
            <p className="text-xs uppercase tracking-widest text-[#8C7B70]">
              Prefer to speak with us directly?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-[#1C1512] hover:bg-[#B6583B] text-[#FAF6EF] text-xs font-medium uppercase tracking-widest transition-colors shadow-md"
              >
                <MessageSquare size={14} />
                <span>Continue on WhatsApp</span>
              </a>

              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 border border-[#1C1512]/30 hover:border-[#1C1512] text-[#1C1512] text-xs font-medium uppercase tracking-widest transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Back to Vedic Wellness Center</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
