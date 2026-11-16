/**
 * Vedic Wellness Center — Google Maps Direction & Embed Configuration
 */

export const GOOGLE_MAPS_QUERY =
  "Vedic Wellness Center, C-Wing, 18 Longitude, Second Floor, Gaikwad Nagar Road, Above Darshan Plywood, Punawale, Pimpri-Chinchwad, Maharashtra 411033, India";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(GOOGLE_MAPS_QUERY);

export const GOOGLE_MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(GOOGLE_MAPS_QUERY);

export const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent(GOOGLE_MAPS_QUERY) +
  "&t=m&z=16&output=embed&iwloc=near";
