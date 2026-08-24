"use client";

import { motion } from "framer-motion";
import { Compass, Feather, ShieldCheck } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#F5EFE4] relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8DEC9]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Asymmetrical Layout Header & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
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
            <p className="text-base md:text-lg text-[#594D46] font-light leading-relaxed max-w-2xl">
              Vedic Wellness Center was conceived as a sanctuary of quiet comfort in Punawale. Grounded in ancient Indian principles of mindful care and contemporary therapy, our space offers personalized bodywork that restores physical ease and inner balance.
            </p>
          </motion.div>

          {/* Right Column: Visual Texture Composition (Organic Architecture & Linen Atmosphere) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-none overflow-hidden bg-[#E3D7C5] p-8 flex flex-col justify-between border border-[#D5C6B1] shadow-editorial">
              {/* Soft Linen & Shadow Graphic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1C1512]/10 via-transparent to-[#FAF6EF]/30 pointer-events-none" />
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="font-serif text-4xl italic text-[#52634F]">वैदिक</span>
                <span className="text-[11px] uppercase tracking-widest text-[#8C7B70] border-b border-[#8C7B70]/40 pb-1">
                  Punawale Studio
                </span>
              </div>

              {/* Central Abstract Botanical Shadow Illustration */}
              <div className="my-auto text-center relative z-10 py-12">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#FAF6EF] border border-[#D5C6B1] flex items-center justify-center text-[#52634F] shadow-sm mb-6">
                  <Feather size={32} strokeWidth={1.2} />
                </div>
                <div className="font-serif text-2xl text-[#1C1512] font-light italic">
                  "Mindful touch, quiet atmosphere."
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between text-xs text-[#594D46] border-t border-[#D5C6B1]/60 pt-4">
                <span>Clean & Hygienic Space</span>
                <span className="font-semibold text-[#52634F]">Open 24 Hours</span>
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
