"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export const FAQS = [
  {
    question: "Where is Vedic Wellness Center located?",
    answer:
      "Vedic Wellness Center is located at Second Floor, C-Wing, Gaikwad Nagar Rd, above Darshan Plywood, Punawale, Pimpri-Chinchwad, Maharashtra 411033, India.",
  },
  {
    question: "What are the opening hours?",
    answer:
      "Vedic Wellness Center is open 24 hours a day, 7 days a week for guest appointments and inquiries.",
  },
  {
    question: "How can I book a massage?",
    answer:
      "You can easily reserve a session by sending a direct message via WhatsApp or by reaching out directly to the center staff to check real-time therapist availability.",
  },
  {
    question: "How do I contact the center on WhatsApp?",
    answer:
      "Click any 'Book on WhatsApp' or 'Book a Session' button on our website to launch direct chat with our team. You can discuss service selection, timing, and preferences.",
  },
  {
    question: "What should I know before visiting?",
    answer:
      "We recommend arriving a few minutes early for your scheduled session so our team can prepare your therapy space and ensure a peaceful, uninterrupted wellness experience.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 md:py-28 bg-[#FBF9F5] border-t border-[#E6DBCB]" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8C7B70] font-sans font-medium block mb-3">
            Clear Guidance • Essential Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1512] font-normal tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#594D46] font-light max-w-lg mx-auto">
            Everything you need to know about visiting Vedic Wellness Center in Punawale.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-[#FAF6EF] border border-[#E6DBCB] transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B6583B]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg md:text-xl text-[#1C1512] font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#B6583B] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-[#594D46] font-light leading-relaxed border-t border-[#E6DBCB]/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Response-Time & Helper Promise */}
        <div className="mt-12 p-6 bg-[#FAF6EF] border border-[#E6DBCB] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-serif text-lg text-[#1C1512] font-medium mb-1">
              Need help choosing a service?
            </h3>
            <p className="text-xs text-[#594D46] font-light">
              Message us on WhatsApp and the team can help you with availability and booking.
            </p>
          </div>
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "faq_response_box" })}
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#1C1512] hover:bg-[#B6583B] text-[#FAF6EF] text-xs font-medium uppercase tracking-wider transition-colors flex-shrink-0"
          >
            <MessageSquare size={14} />
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
