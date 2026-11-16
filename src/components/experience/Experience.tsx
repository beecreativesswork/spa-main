"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Feather, ShieldCheck } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#F5EFE4] relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8DEC9]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Asymmetrical Layout Header & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Large Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#8C7B70] font-sans font-medium block mb-4">
              01 — The Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.15] text-[#1C1512] mb-8">
              We design every detail so you can{" "}
              <span className="italic font-light text-[#52634F]">pause</span>, release daily noise, and return to center.
            </h2>
            <p className="text-base md:text-lg text-[#594D46] font-light leading-relaxed max-w-2xl mb-6">
              Vedic Wellness Center was conceived as a sanctuary of quiet comfort in Punawale. Grounded in ancient Indian principles of mindful care and contemporary therapy, our space offers personalized bodywork that restores physical ease and inner balance.
            </p>
            <p className="text-sm md:text-base text-[#8C7B70] font-light leading-relaxed max-w-2xl">
              From pure botanical oils warmed in traditional brass vessels to pristine, private suites, our therapies allow tension to dissolve in uninterrupted silence.
            </p>
          </motion.div>

          {/* Right Column: AI-Generated Authentic Atmosphere Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-none overflow-hidden border border-[#D5C6B1] shadow-editorial group">
              <Image
                src="/images/experience/experience-atmosphere.webp"
                alt="Atmospheric massage therapy preparation at Vedic Wellness Center"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Editorial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1512]/85 via-[#1C1512]/20 to-transparent pointer-events-none" />

              {/* Top Header Floating Tag */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                <span className="font-serif text-3xl italic text-[#FAF6EF] drop-shadow-md">वैदिक</span>
                <span className="text-[10px] uppercase tracking-widest text-[#FAF6EF] bg-[#1C1512]/60 backdrop-blur-xs px-2.5 py-1 border border-[#FAF6EF]/20">
                  Punawale Studio
                </span>
              </div>

              {/* Bottom Quote & Info */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-[#FAF6EF]">
                <div className="font-serif text-xl sm:text-2xl font-light italic mb-2">
                  &ldquo;Mindful touch, quiet atmosphere.&rdquo;
                </div>
                <div className="flex items-center justify-between text-xs text-[#D8C8B4] border-t border-[#FAF6EF]/20 pt-3">
                  <span>Pristine Hygiene Standards</span>
                  <span className="font-semibold text-[#A7CCA0]">Open 24 Hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lower Editorial Asymmetrical Text Block & Qualities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#E6DBCB]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col space-y-3"
          >
            <div className="flex items-center space-x-3 text-[#B6583B]">
              <Compass size={18} />
              <h3 className="font-serif text-xl font-medium text-[#1C1512]">Attentive Touch</h3>
            </div>
            <p className="text-sm text-[#594D46] font-light leading-relaxed">
              Every massage session is tailored to your body’s unique comfort, using gentle kneading and pressure techniques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-3"
          >
            <div className="flex items-center space-x-3 text-[#52634F]">
              <Feather size={18} />
              <h3 className="font-serif text-xl font-medium text-[#1C1512]">Restorative Atmosphere</h3>
            </div>
            <p className="text-sm text-[#594D46] font-light leading-relaxed">
              Soft lighting, pristine room hygiene, and quiet organic textures set the stage for profound mental quietude.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col space-y-3"
          >
            <div className="flex items-center space-x-3 text-[#C29B53]">
              <ShieldCheck size={18} />
              <h3 className="font-serif text-xl font-medium text-[#1C1512]">High Standards</h3>
            </div>
            <p className="text-sm text-[#594D46] font-light leading-relaxed">
              Maintained with strict standards of room cleanliness, guest privacy, and professional hospitality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
