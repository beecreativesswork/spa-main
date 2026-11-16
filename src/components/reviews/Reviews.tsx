"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, ExternalLink } from "lucide-react";
import { GOOGLE_RATING_INFO, REVIEWS_SENTIMENT_THEMES } from "@/data/reviews";
import { GOOGLE_MAPS_URL } from "@/lib/maps";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#F5EFE4] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Rating Score Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 pb-16 border-b border-[#E6DBCB]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#8C7B70] font-sans font-medium block mb-3">
              05 — Google Maps Feedback
            </span>
            <div className="flex items-baseline space-x-4 mb-4">
              <span className="font-serif text-6xl md:text-7xl text-[#1C1512] font-normal">
                {GOOGLE_RATING_INFO.rating}
              </span>
              <div className="flex flex-col">
                <div className="flex text-[#C29B53] space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#C29B53]" />
                  ))}
                </div>
                <span className="text-xs text-[#8C7B70] mt-1 font-sans">
                  Based on verified Google Maps reviews
                </span>
              </div>
            </div>
            <p className="text-sm text-[#594D46] font-light leading-relaxed">
              Vedic Wellness Center holds a 5.0-star Google rating in Punawale, reflecting consistent guest appreciation for hygiene, room comfort, and attentive massage therapy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 bg-[#FAF6EF] border border-[#E6DBCB] p-8 md:p-10 shadow-editorial"
          >
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#B6583B] mb-4">
              <ShieldCheck size={16} />
              <span>Verified Review Sentiments</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GOOGLE_RATING_INFO.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-sm text-[#1C1512] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52634F]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-[#E6DBCB] flex justify-between items-center">
              <span className="text-xs text-[#8C7B70]">Punawale, Pimpri-Chinchwad</span>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs uppercase tracking-wider text-[#1C1512] hover:text-[#B6583B] font-medium"
              >
                <span>View on Google Maps</span>
                <ExternalLink size={14} className="ml-1.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Sentiment Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_SENTIMENT_THEMES.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#FAF6EF] border border-[#E6DBCB] p-6 flex flex-col justify-between shadow-sm hover:border-[#1C1512]/30 transition-colors"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#52634F] font-semibold block mb-3">
                  {theme.tag}
                </span>
                <h3 className="font-serif text-xl text-[#1C1512] mb-3 font-medium">
                  {theme.title}
                </h3>
                <p className="text-xs text-[#594D46] font-light leading-relaxed">
                  {theme.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6DBCB]/60 flex items-center text-[#C29B53] space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#C29B53]" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
