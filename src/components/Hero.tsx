"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const metrics = [
  { label: "Cadets Trained", value: "500+" },
  { label: "Success Rate", value: "98%" },
  { label: "Interactive Classes", value: "Live" },
  { label: "Expert Mentors", value: "Industry" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
  const scaleParallax = useTransform(scrollY, [0, 500], [1, 1.1]);
  const opacityParallax = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <section ref={containerRef} id="home" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-aviation-navy pt-20">
      
      {/* --- CINEMATIC BACKGROUND LAYERS --- */}
      
      {/* 1. Base Image Layer */}
      <motion.div 
        style={{ y: yParallax, scale: scaleParallax }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/images/hero_cinematic.png"
          alt="Arcus Aero Cinematic Background"
          fill
          className="object-cover object-center scale-110"
          priority
        />
        <div className="absolute inset-0 bg-aviation-navy/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-aviation-navy/30 via-transparent to-soft-bg" />
      </motion.div>

      {/* 2. Atmospheric Lighting & Radial Glow */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-royal-purple/20 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute top-1/4 right-0 w-[40%] h-[40%] bg-sunset-peach/10 blur-[150px] rounded-full" />
      </div>

      {/* 3. Moving Clouds / Fog Layer */}
      <motion.div 
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-[2] opacity-30 pointer-events-none"
      >
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-[url('https://www.transparenttextures.com/patterns/cloudy-day.png')] opacity-20" />
      </motion.div>

      {/* 4. Film Grain Texture */}
      <div className="absolute inset-0 z-[3] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* 5. Minimal Aviation HUD Elements */}
      <div className="absolute inset-0 z-[4] pointer-events-none hidden md:block">
        <div className="absolute top-1/4 left-10 w-32 h-32 border-l border-t border-white/20 rounded-tl-3xl" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border-r border-b border-white/20 rounded-br-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] border border-white/5 rounded-[4rem]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center">
        
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-[6rem] font-bold leading-[0.9] tracking-tighter text-primary-dark">
            Master the skies. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet via-royal-purple to-neon-violet font-light italic pr-4">Lead the future.</span>
          </h1>
          {/* Headline Glow */}
          <div className="absolute -inset-4 bg-royal-purple/5 blur-3xl -z-10" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button className="group relative px-8 py-3.5 rounded-full overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-royal-purple to-neon-violet transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-white font-semibold text-base tracking-wider flex items-center gap-2">
              Explore Curriculum 
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 blur-sm" />
          </button>
          
          <button className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 text-primary-dark font-semibold text-base hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-xl">
            Discover Arcus
          </button>
        </motion.div>

        {/* Floating Metrics Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 w-full max-w-6xl"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
              className="bg-white/70 backdrop-blur-2xl p-3 md:p-6 rounded-2xl border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center transition-all duration-500"
            >
              <div className="text-3xl md:text-3xl font-heading font-bold text-primary-dark mb-1">{metric.value}</div>
              <div className="text-[10px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-royal-purple/70 text-center leading-tight">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-soft-bg to-transparent z-20" />
    </section>
  );
}
