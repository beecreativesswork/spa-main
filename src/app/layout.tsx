import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/site";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Vedic Wellness Center | Massage & Wellness in Punawale",
    template: "%s | Vedic Wellness Center",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Vedic Wellness Center",
    "Massage Center Punawale",
    "Wellness Spa Pimpri Chinchwad",
    "Therapeutic Massage Punawale",
    "Swedish Massage",
    "Deep Tissue Massage",
    "Ayurvedic Massage",
    "Punawale Spa",
  ],
  authors: [{ name: "Vedic Wellness Center" }],
  openGraph: {
    title: "Vedic Wellness Center | Massage & Wellness in Punawale",
    description: SITE_CONFIG.description,
    type: "website",
    locale: "en_IN",
    siteName: "Vedic Wellness Center",
    url: SITE_CONFIG.url,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vedic Wellness Center — Vedic Massage & Wellness in Punawale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Wellness Center | Massage & Wellness in Punawale",
    description: SITE_CONFIG.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.hindiName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.locality,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.rating.score,
      reviewCount: SITE_CONFIG.rating.reviewCount.toString(),
    },
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FBF9F5] text-[#1C1512] antialiased selection:bg-[#B6583B] selection:text-[#FAF6EF] relative">
        <GoogleAnalytics />
        <div className="fixed inset-0 pointer-events-none z-50 bg-noise opacity-[0.03]" />
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
