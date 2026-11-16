/**
 * Vedic Wellness Center — Analytics Event Tracking Utility
 * Safe, privacy-preserving client event dispatcher for Google Analytics.
 */

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

export type AnalyticsEvent =
  | "whatsapp_click"
  | "service_view"
  | "service_booking_click"
  | "directions_click"
  | "phone_call_click";

export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params || {});
  }
}
