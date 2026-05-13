"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Plane } from "lucide-react";

const steps = [
  { id: 1, title: "Enroll", desc: "Join Arcus Aero and gain access to our premium learning portal." },
  { id: 2, title: "Attend Live Classes", desc: "Participate in interactive sessions led by expert aviation instructors." },
  { id: 3, title: "Practice Mock Tests", desc: "Evaluate your knowledge with DGCA-standard mock examinations." },
  { id: 4, title: "Personal Mentorship", desc: "Get dedicated 1-on-1 guidance to overcome weak points." },
  { id: 5, title: "Crack DGCA Exams", desc: "Clear your examinations with confidence and proceed to flight training." },
];

const StepItem = ({ step, index }: { step: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  // Triggers when the element's top edge crosses the exact center of the viewport
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50% 0px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center relative ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Center Node */}
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isInView ? "#3A1C9A" : "#FFFFFF",
          borderColor: isInView ? "#3A1C9A" : "#3A1C9A",
          boxShadow: isInView ? "0 0 25px rgba(58,28,154,0.6)" : "0 0 10px rgba(58,28,154,0.1)",
          scale: isInView ? 1.2 : 1
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[15px] md:left-1/2 w-6 h-6 rounded-full border-2 md:-translate-x-1/2 flex items-center justify-center z-10 mt-1 md:mt-0"
      >
        <motion.div
          animate={{ scale: isInView ? 0 : 1, opacity: isInView ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="w-1.5 h-1.5 rounded-full bg-neon-violet"
        />
        <motion.div
          animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute w-2 h-2 rounded-full bg-white"
        />
      </motion.div>

      {/* Content */}
      <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${index % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 text-left md:text-right"}`}>
        <motion.div
          initial={false}
          animate={{
            borderColor: isInView ? "rgba(58,28,154,0.3)" : "rgba(0,0,0,0.04)",
            backgroundColor: isInView ? "#FFFFFF" : "rgba(255,255,255,0.4)",
            scale: isInView ? 1 : 0.96,
            opacity: isInView ? 1 : 0.4,
            boxShadow: isInView ? "0 20px 60px rgba(0,0,0,0.06)" : "0 4px 20px rgba(0,0,0,0.02)"
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border p-6 md:p-8"
        >
          <motion.div 
            animate={{ color: isInView ? "#3A1C9A" : "rgba(58,28,154,0.4)" }}
            className="text-[10px] font-bold tracking-[0.2em] mb-2 uppercase"
          >
            Phase 0{step.id}
          </motion.div>
          <motion.h3 
            animate={{ color: isInView ? "#1D1D1F" : "rgba(29,29,31,0.5)" }}
            className="font-heading text-xl md:text-2xl font-bold mb-2 tracking-tight"
          >
            {step.title}
          </motion.h3>
          <motion.p 
            animate={{ color: isInView ? "rgba(66,66,69,0.8)" : "rgba(66,66,69,0.4)" }}
            className="text-[14px] font-light leading-relaxed"
          >
            {step.desc}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="py-24 md:py-32 relative bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] mix-blend-multiply" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full border border-royal-purple/20 bg-white shadow-sm mb-6"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-royal-purple uppercase">Roadmap</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4 text-primary-dark tracking-tight leading-[1.1]"
          >
            Your Flight Path to <span className="text-gradient-purple">Success</span>
          </motion.h2>
        </div>

        <div ref={containerRef} className="max-w-4xl mx-auto relative pb-10">
          {/* Animated Flight Path Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-black/[0.04] md:-translate-x-1/2">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-neon-violet via-royal-purple to-neon-violet relative shadow-[0_0_15px_rgba(110,59,255,0.4)]"
            >
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-white bg-royal-purple p-2 md:p-3 rounded-full shadow-lg z-20"
              >
                <Plane className="w-4 h-4 md:w-5 md:h-5 rotate-180" />
              </div>
            </motion.div>
          </div>

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <StepItem key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
