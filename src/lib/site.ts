/**
 * Vedic Wellness Center — Site Configuration & Business Metadata
 * Centralized, verified business information.
 */

export const SITE_CONFIG = {
  name: "Vedic Wellness Center",
  hindiName: "वैदिक वेलनेस सेंटर",
  description:
    "A contemporary wellness space rooted in relaxation, therapeutic massage, and mindful care located in Punawale, Pimpri-Chinchwad, Maharashtra.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vedicwellnesscenter.com",
  address: {
    street: "Second Floor, C-Wing, Gaikwad Nagar Rd, above Darshan Plywood",
    locality: "Punawale, Pimpri-Chinchwad",
    region: "Maharashtra",
    postalCode: "411033",
    country: "IN",
    formatted:
      "Second Floor, C-Wing, Gaikwad Nagar Rd, above Darshan Plywood, Punawale, Pimpri-Chinchwad, Maharashtra 411033, India",
  },
  rating: {
    score: "5.0",
    reviewCount: 12,
    display: "5.0 ★ (12 Google reviews)",
  },
  openingHours: "Open 24 hours",
  privacyLastUpdated: "August 24, 2026",
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];
