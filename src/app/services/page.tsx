import type { Metadata } from "next";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Services from "@/components/services/Services";
import FAQSection from "@/components/faq/FAQSection";
import CustomCursor from "@/components/ui/CustomCursor";
import { SITE_CONFIG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Massage & Wellness Services | Vedic Wellness Center Punawale",
  description:
    "Explore authentic massage and wellness services at Vedic Wellness Center in Punawale, Pimpri-Chinchwad. Ayurvedic Abhyanga, Swedish, Deep Tissue, Aromatherapy, Head & Shoulder, and Foot reflexology.",
  openGraph: {
    title: "Massage & Wellness Services | Vedic Wellness Center Punawale",
    description:
      "Therapeutic massage and Ayurvedic bodywork tailored for muscle relief, tension release, and deep relaxation in Punawale, Pimpri-Chinchwad.",
    url: `${SITE_CONFIG.url}/services`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
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
