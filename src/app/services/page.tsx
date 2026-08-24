import type { Metadata } from "next";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Services from "@/components/services/Services";
import FAQSection from "@/components/faq/FAQSection";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Massage & Wellness Services | Vedic Wellness Center",
  description:
    "Explore therapeutic massage and body care services at Vedic Wellness Center in Punawale, Pimpri-Chinchwad. Swedish, Deep Tissue, and custom relaxation sessions.",
  openGraph: {
    title: "Massage & Wellness Services | Vedic Wellness Center",
    description:
      "Therapeutic massage sessions tailored for body relief, muscle recovery, and deep relaxation in Punawale.",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 selection:bg-[#B6583B] selection:text-[#FAF6EF]">
      <CustomCursor />
      <Header />
      <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
      <Services />
      <FAQSection />
      <Footer />
    </main>
  );
}
