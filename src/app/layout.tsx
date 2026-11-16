import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/site";
import { GOOGLE_MAPS_URL } from "@/lib/maps";
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
    default: "Vedic Wellness Center | Massage & Wellness in Punawale, Pimpri-Chinchwad",
    template: "%s | Vedic Wellness Center",
  },
  description:
    "Vedic Wellness Center in Punawale, Pimpri-Chinchwad, Maharashtra. Authentic Ayurvedic massage, Swedish massage, deep tissue therapy, and serene personal care. Open 24 hours.",
  keywords: [
    "Vedic Wellness Center",
    "Massage Center Punawale",
    "Wellness Spa Pimpri Chinchwad",
    "Ayurvedic Massage Punawale",
    "Therapeutic Massage Punawale",
    "Swedish Massage Punawale",
    "Deep Tissue Massage Punawale",
    "Aromatherapy Punawale",
    "Punawale Spa",
    "18 Longitude Punawale",
    "Gaikwad Nagar Road Massage",
  ],
  authors: [{ name: "Vedic Wellness Center" }],
  creator: "Vedic Wellness Center",
  publisher: "Vedic Wellness Center",
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Vedic Wellness Center | Traditional Wellness. Contemporary Comfort.",
    description:
      "A contemporary wellness sanctuary rooted in Vedic tradition and restorative massage therapy in Punawale, Pimpri-Chinchwad. Open 24 hours.",
    type: "website",
    locale: "en_IN",
    siteName: "Vedic Wellness Center",
    url: SITE_CONFIG.url,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Vedic Wellness Center — Traditional Wellness. Contemporary Comfort. Punawale, Pimpri-Chinchwad",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Wellness Center | Traditional Wellness. Contemporary Comfort.",
    description:
      "Vedic Wellness Center in Punawale, Pimpri-Chinchwad. Authentic Ayurvedic bodywork, restorative massage, and quiet luxury.",
    images: [`${SITE_CONFIG.url}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["DaySpa", "HealthAndBeautyBusiness", "LocalBusiness"],
    "@id": `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.hindiName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    priceRange: "₹₹",
    image: `${SITE_CONFIG.url}/og-image.png`,
    logo: `${SITE_CONFIG.url}/images/vedic-wellness-logo-transparent.png`,
    hasMap: GOOGLE_MAPS_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.locality,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
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
