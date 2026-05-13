"use client";

import { motion } from "framer-motion";
import { Compass, CloudRain, Scale, Settings, Radio } from "lucide-react";

const subjects = [
  {
    id: "nav",
    title: "Air Navigation",
    description: "Master the principles of flight routing, chart reading, and modern navigation systems.",
    icon: Compass,
  },
  {
    id: "met",
    title: "Meteorology",
    description: "Understand aviation weather patterns, forecasting, and atmospheric conditions.",
    icon: CloudRain,
  },
  {
    id: "law",
    title: "Air Law",
    description: "Comprehensive coverage of national and international aviation regulations.",
    icon: Scale,
  },
  {
    id: "tech",
    title: "Technical General",
    description: "Deep dive into aircraft systems, aerodynamics, powerplants, and flight principles.",
    icon: Settings,
  },
  {
    id: "rtr",
    title: "Radio Telephony",
    description: "Professional radio communication techniques for seamless ATC interaction.",
    icon: Radio,
  },
];

export default function Subjects() {
  return (
    <section id="courses" className="py-32 md:py-48 relative z-10 w-full bg-soft-bg">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark leading-[1.1] tracking-tight">
              The DGCA <br />
              <span className="text-secondary-dark font-light">Curriculum.</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary-dark/70 text-lg md:text-xl font-light max-w-lg"
          >
            A meticulously structured syllabus covering all mandatory subjects with profound depth and clarity.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="luxury-card p-10 flex flex-col justify-between min-h-[320px] group cursor-pointer w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div>
                <div className="mb-8">
                  <subject.icon strokeWidth={1} className="w-10 h-10 text-primary-dark group-hover:scale-110 transition-transform duration-500 ease-out" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4 text-primary-dark tracking-tight">
                  {subject.title}
                </h3>
                <p className="text-secondary-dark/70 leading-relaxed font-light text-[15px]">
                  {subject.description}
                </p>
              </div>
              
              <div className="mt-8 overflow-hidden">
                <div className="flex items-center gap-2 text-[13px] font-semibold tracking-wider uppercase text-primary-dark opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                    <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
