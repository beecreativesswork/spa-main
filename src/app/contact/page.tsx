import type { Metadata } from "next";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Location from "@/components/location/Location";
import FAQSection from "@/components/faq/FAQSection";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Contact Vedic Wellness Center | Punawale",
  description:
    "Contact Vedic Wellness Center in Punawale, Pimpri-Chinchwad. Located on Gaikwad Nagar Rd above Darshan Plywood. Open 24 hours for massage & wellness bookings.",
  openGraph: {
    title: "Contact Vedic Wellness Center | Punawale",
    description:
      "Get directions, opening hours, and direct WhatsApp booking for Vedic Wellness Center in Punawale.",
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
