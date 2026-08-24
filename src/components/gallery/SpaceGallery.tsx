"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SpaceGallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Atmospheric Room Quality",
      category: "Private Therapy Space",
      colSpan: "lg:col-span-7",
      aspect: "aspect-[16/10]",
      bgGradient: "bg-gradient-to-br from-[#E8DEC9] via-[#DFCDB4] to-[#C9B393]",
      quote: "Warm natural lighting & serene privacy",
    },
    {
      id: 2,
      title: "Natural Elements & Linen",
      category: "Material Palette",
      colSpan: "lg:col-span-5",
      aspect: "aspect-[4/5]",
      bgGradient: "bg-gradient-to-br from-[#DCE3D6] via-[#BAC7B3] to-[#8C7B70]/40",
      quote: "Soft linen textures & botanical oils",
    },
    {
      id: 3,
      title: "Grounded Balance",
      category: "Architectural Atmosphere",
      colSpan: "lg:col-span-5",
      aspect: "aspect-[4/5]",
      bgGradient: "bg-gradient-to-br from-[#EAD5C3] via-[#D6B59B] to-[#B6583B]/30",
      quote: "Warm stone, quiet corners",
    },
    {
      id: 4,
      title: "Immaculate Hygiene",
      category: "Pristine Care",
      colSpan: "lg:col-span-7",
      aspect: "aspect-[16/10]",
      bgGradient: "bg-gradient-to-br from-[#E6DDD1] via-[#CFBFAB] to-[#52634F]/30",
      quote: "Spotless preparation before every guest",
    },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#8C7B70] font-sans font-medium block mb-3">
              04 — Visual Atmosphere
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1512] font-normal tracking-tight">
              The Space
            </h2>
          </div>
          <p className="text-base text-[#594D46] font-light max-w-md mt-4 md:mt-0 font-serif italic">
            "A contemporary environment conceived for deep physical comfort."
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
              <div
                className={`${item.aspect} w-full ${item.bgGradient} relative flex flex-col justify-between p-8 transition-transform duration-700 group-hover:scale-[1.02]`}
              >
                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

                {/* Top Category Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-[#1C1512]/80 bg-[#FAF6EF]/85 backdrop-blur-xs px-3 py-1 border border-[#E6DBCB]">
                    {item.category}
                  </span>
                  <Sparkles size={16} className="text-[#1C1512]/50" />
                </div>

                {/* Bottom Title & Quote */}
                <div className="relative z-10 bg-[#FAF6EF]/90 backdrop-blur-md p-6 border border-[#E6DBCB] max-w-md">
                  <h3 className="font-serif text-2xl text-[#1C1512] font-normal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#594D46] font-light italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on Gallery Photos */}
        <div className="mt-12 text-center text-xs text-[#8C7B70]">
          Second Floor, C-Wing, Gaikwad Nagar Rd, Punawale • Open 24 Hours
        </div>
      </div>
    </section>
  );
}
