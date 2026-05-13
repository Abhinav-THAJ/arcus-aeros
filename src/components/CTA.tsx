"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section id="enroll" className="py-32 relative flex items-center justify-center overflow-hidden min-h-[80svh] bg-primary-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-dark/80 z-10" />
        <div className="absolute inset-0 bg-[url('/images/cta_cockpit_in_1778671462351.png')] bg-cover bg-center mix-blend-luminosity opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-white/50 mb-8">
            The Journey Begins
          </span>

          {/* Logo in white context */}
          <div className="flex justify-center mb-10">
            <Image
              src="/images/logo.png"
              alt="Arcus Aero"
              width={220}
              height={74}
              className="h-16 w-auto object-contain brightness-0 invert opacity-80"
            />
          </div>
          
          <h2 className="font-heading text-6xl md:text-8xl font-bold mb-8 text-white tracking-tighter leading-[0.95] drop-shadow-2xl">
            Take command of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 font-light italic">your future.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/60 mx-auto mb-12 font-light max-w-2xl">
            Enroll in Arcus Aero's premium ground school program and receive the highest caliber of instruction available online.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-4 rounded-full bg-white text-primary-dark font-medium text-[15px] shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
              Enroll Application
            </button>
            <a href="#contact" className="px-10 py-4 rounded-full border border-white/30 text-white font-medium text-[15px] hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
              Contact Admissions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
