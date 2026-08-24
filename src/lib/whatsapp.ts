/**
 * Vedic Wellness Center — WhatsApp Configuration
 * 
 * Replace WHATSAPP_NUMBER with the actual phone number (country code + number, e.g. "919876543210")
 * Do not include '+', spaces, or hyphens in this string.
 */
export const WHATSAPP_NUMBER = "919623115557"; // Centralized configuration variable

export function getWhatsAppBookingUrl(serviceName?: string): string {
  const message = serviceName
    ? `Hi, I would like to book a ${serviceName} at Vedic Wellness Center.`
    : `Hi, I would like to inquire about booking a massage session at Vedic Wellness Center.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
