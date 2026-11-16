/**
 * Vedic Wellness Center — Site Configuration & Business Metadata
 * Centralized, verified official business information.
 */

export const SITE_CONFIG = {
  name: "Vedic Wellness Center",
  hindiName: "वैदिक वेलनेस सेंटर",
  tagline: "Traditional Wellness. Contemporary Comfort.",
  description:
    "A contemporary Vedic wellness space rooted in relaxation, therapeutic massage, and mindful care located in Punawale, Pimpri-Chinchwad, Maharashtra.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bee-spa-nine.vercel.app",
  phone: "+91 9623115557",
  phoneFormatted: "+91 96231 15557",
  phoneTel: "tel:+919623115557",
  location: "Punawale, Pimpri-Chinchwad, Maharashtra, India",
  address: {
    building: "18 Longitude",
    wing: "C-Wing",
    floor: "Second Floor",
    landmark: "Above Darshan Plywood",
    street: "C-Wing, 18 Longitude, Second Floor, Gaikwad Nagar Rd, Above Darshan Plywood",
    locality: "Punawale, Pimpri-Chinchwad",
    region: "Maharashtra",
    postalCode: "411033",
    country: "IN",
    formatted:
      "Vedic Wellness Center, C-Wing, 18 Longitude, Second Floor, Building, Gaikwad Nagar Rd, Above Darshan Plywood, Punawale, Pimpri-Chinchwad, Maharashtra 411033, India",
    shortFormatted:
      "C-Wing, 18 Longitude, 2nd Floor, Above Darshan Plywood, Gaikwad Nagar Rd, Punawale, Pimpri-Chinchwad, Maharashtra 411033",
  },
  geo: {
    latitude: 18.6369,
    longitude: 73.7438,
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
