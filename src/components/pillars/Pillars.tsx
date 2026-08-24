"use client";

import { motion } from "framer-motion";

export default function Pillars() {
  const pillars = [
    {
      number: "01",
      title: "Calm",
      subtitle: "A peaceful space to slow down",
      description:
        "Designed away from urban noise. From soft ambient warmth to pristine, quiet rooms, every aspect encourages your nervous system to rest.",
      accent: "#52634F",
    },
    {
      number: "02",
      title: "Care",
      subtitle: "Personalized & respectful attention",
      description:
        "Every guest is welcomed with attentive hospitality. Touch, pace, and pressure are tuned exclusively to your preference for absolute comfort.",
      accent: "#B6583B",
    },
    {
      number: "03",
      title: "Tradition",
      subtitle: "Ancient heritage, contemporary space",
      description:
        "Inspired by timeless Indian wellness and massage traditions, executed in a clean, modern aesthetic that feels serene and grounded.",
      accent: "#C29B53",
    },
  ];

  return (
    <section id="pillars" className="py-24 md:py-32 bg-[#F3ECE1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8C7B70] font-sans font-medium block mb-3">
            03 — Core Philosophy
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1512] font-normal tracking-tight mb-6">
            Why Vedic Wellness
          </h2>
          <p className="text-base md:text-lg text-[#594D46] font-light leading-relaxed">
            We believe true wellness is not complicated — it is the quiet practice of making time for yourself in an atmosphere of warmth and hospitality.
          </p>
        </div>

        {/* Editorial Pillars Composition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="bg-[#FAF6EF] border border-[#E6DBCB] p-8 md:p-10 flex flex-col justify-between shadow-editorial shadow-editorial-hover relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="font-serif text-3xl font-light italic"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#8C7B70] border border-[#E6DBCB] px-2.5 py-1">
                    Vedic Pillar
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1512] font-normal mb-2 group-hover:text-[#B6583B] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#8C7B70] mb-6">
                  {pillar.subtitle}
                </p>

                <p className="text-sm md:text-base text-[#594D46] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div
                className="w-12 h-[2px] mt-10 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: pillar.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
