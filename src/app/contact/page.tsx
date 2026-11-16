import type { Metadata } from "next";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Location from "@/components/location/Location";
import FAQSection from "@/components/faq/FAQSection";
import CustomCursor from "@/components/ui/CustomCursor";
import { SITE_CONFIG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Location | Vedic Wellness Center Punawale",
  description:
    `Contact Vedic Wellness Center in Punawale, Pimpri-Chinchwad. Located at ${SITE_CONFIG.address.shortFormatted}. Open 24 hours for massage & wellness reservations. Call ${SITE_CONFIG.phoneFormatted}.`,
  openGraph: {
    title: "Contact & Location | Vedic Wellness Center Punawale",
    description:
      `Get directions, verified address at 18 Longitude Punawale, direct phone ${SITE_CONFIG.phoneFormatted}, and instant WhatsApp booking for Vedic Wellness Center.`,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 selection:bg-[#B6583B] selection:text-[#FAF6EF]">
      <CustomCursor />
      <Header />
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <Location />
      <FAQSection />
      <Footer />
    </main>
  );
}
