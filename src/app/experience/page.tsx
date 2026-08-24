import type { Metadata } from "next";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Experience from "@/components/experience/Experience";
import SpaceGallery from "@/components/gallery/SpaceGallery";
import CustomCursor from "@/components/ui/CustomCursor";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Wellness Experience | Vedic Wellness Center",
  description:
    "Discover the quiet wellness experience at Vedic Wellness Center in Punawale. Clean environment, private room quality, and respectful massage care.",
  openGraph: {
    title: "Wellness Experience | Vedic Wellness Center",
    description:
      "An editorial look into the tranquil atmosphere and thoughtful touch of Vedic Wellness Center in Punawale.",
  },
};

export default function ExperiencePage() {
  const verifiedAspects = [
    {
      title: "Clean & Quiet Atmosphere",
      desc: "Spotless therapy rooms maintained to the highest standards of hygiene and peace.",
    },
    {
      title: "Attentive Massage Touch",
      desc: "Experienced therapists who adjust pressure and technique to your comfort.",
    },
    {
      title: "Private Room Quality",
      desc: "Warmly illuminated, comfortable rooms designed for complete personal quiet.",
    },
    {
      title: "Round-the-Clock Access",
      desc: "Open 24 hours to accommodate your personal schedule without rush.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col pt-20 selection:bg-[#B6583B] selection:text-[#FAF6EF]">
      <CustomCursor />
      <Header />
      <Breadcrumbs items={[{ name: "Experience", href: "/experience" }]} />

      {/* Main Experience Hero */}
      <section className="py-16 md:py-24 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8C7B70] font-sans font-medium block mb-3">
              Editorial Showcase • Atmospheric Sanctuary
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1512] font-normal leading-tight mb-6">
              The Vedic Experience
            </h1>
            <p className="text-base sm:text-lg text-[#594D46] font-light leading-relaxed mb-8">
              Every detail at Vedic Wellness Center is intended to quiet noise and support physical recovery. From soft natural lighting to clean, prepared spaces, we invite you to experience restful touch in Punawale.
            </p>
          </div>

          {/* 4 Verified Experience Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {verifiedAspects.map((aspect) => (
              <div
                key={aspect.title}
                className="bg-[#FAF6EF] border border-[#E6DBCB] p-6 shadow-sm"
              >
                <CheckCircle2 size={20} className="text-[#52634F] mb-4" />
                <h3 className="font-serif text-xl text-[#1C1512] mb-2 font-medium">
                  {aspect.title}
                </h3>
                <p className="text-xs text-[#594D46] font-light leading-relaxed">
                  {aspect.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Experience Component */}
      <Experience />

      {/* Visual Space Gallery */}
      <SpaceGallery />

      {/* Experience Booking Banner */}
      <section className="py-16 bg-[#F5EFE4] border-t border-[#E6DBCB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1512] font-normal mb-3">
            Reserve Your Wellness Session
          </h2>
          <p className="text-sm text-[#594D46] font-light max-w-lg mx-auto mb-8">
            Message our reception team on WhatsApp to reserve your quiet therapy session.
          </p>
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#1C1512] hover:bg-[#B6583B] text-[#FAF6EF] text-xs font-medium uppercase tracking-widest transition-colors shadow-md"
          >
            <span>Book a Session</span>
            <Sparkles size={14} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
