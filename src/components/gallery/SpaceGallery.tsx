"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

export default function SpaceGallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Atmospheric Room Quality",
      category: "Private Therapy Space",
      colSpan: "lg:col-span-7",
      aspect: "aspect-[16/10]",
      image: "/images/gallery/gallery-private-room.webp",
      alt: "Private luxury therapy room in Vedic Wellness Center Punawale",
      quote: "Warm natural lighting & serene privacy",
    },
    {
      id: 2,
      title: "Natural Elements & Linen",
      category: "Material Palette & Oils",
      colSpan: "lg:col-span-5",
      aspect: "aspect-[4/5]",
      image: "/images/gallery/gallery-botanical-oils.webp",
      alt: "Authentic Ayurvedic massage oils in brass bowl with herbs",
      quote: "Handcrafted brass vessels & pure botanicals",
    },
    {
      id: 3,
      title: "Grounded Balance",
      category: "Architectural Atmosphere",
      colSpan: "lg:col-span-5",
      aspect: "aspect-[4/5]",
      image: "/images/gallery/gallery-lounge.webp",
      alt: "Contemporary Vedic wellness relaxation lounge in Punawale",
      quote: "Warm sandstone, quiet lounge corners",
    },
    {
      id: 4,
      title: "Immaculate Hygiene",
      category: "Pristine Care",
      colSpan: "lg:col-span-7",
      aspect: "aspect-[16/10]",
      image: "/images/gallery/gallery-hygiene-spa.webp",
      alt: "Immaculate massage suite preparation with crisp linen",
      quote: "Spotless preparation before every guest session",
    },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#E6DBCB]">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#8C7B70] font-sans font-medium block mb-3">
              04 — Visual Atmosphere
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1512] font-normal tracking-tight">
              The Space
            </h2>
          </div>
          <p className="text-base text-[#594D46] font-light max-w-md mt-4 md:mt-0 font-serif italic">
            &ldquo;A contemporary environment conceived for deep physical comfort.&rdquo;
          </p>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className={`${item.colSpan} relative rounded-none overflow-hidden group shadow-editorial border border-[#E6DBCB]`}
            >
              <div className={`${item.aspect} w-full relative flex flex-col justify-between p-6 sm:p-8 overflow-hidden`}>
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1512]/80 via-transparent to-[#1C1512]/30 pointer-events-none" />

                {/* Top Category Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-[#1C1512] bg-[#FAF6EF]/90 backdrop-blur-xs px-3 py-1 border border-[#E6DBCB]">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EF]/80 backdrop-blur-xs flex items-center justify-center text-[#1C1512]">
                    <Sparkles size={14} />
                  </div>
                </div>

                {/* Bottom Title & Quote */}
                <div className="relative z-10 bg-[#FAF6EF]/95 backdrop-blur-md p-5 sm:p-6 border border-[#E6DBCB] max-w-md shadow-xs">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1C1512] font-normal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#594D46] font-light italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on Gallery Location & Hours */}
        <div className="mt-12 text-center text-xs text-[#8C7B70]">
          {SITE_CONFIG.address.shortFormatted} • {SITE_CONFIG.openingHours}
        </div>
      </div>
    </section>
  );
}
