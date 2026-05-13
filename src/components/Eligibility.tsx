"use client";

import { motion } from "framer-motion";
import { CheckCircle2, HeartPulse } from "lucide-react";

export default function Eligibility() {
  return (
    <section id="eligibility" className="py-32 relative bg-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Course <span className="text-gradient-purple">Eligibility</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Ensure you meet the basic requirements before embarking on your commercial pilot journey.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-royal-purple/50 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-royal-purple/5 rounded-bl-full -z-10 group-hover:bg-royal-purple/10 transition-colors" />
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
              <CheckCircle2 className="w-7 h-7 text-royal-purple" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Academic Criteria</h3>
            <p className="text-slate-600 leading-relaxed">
              Successful completion of 10+2 (or equivalent) with Physics and Mathematics from a recognized board.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-neon-violet/50 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-violet/5 rounded-bl-full -z-10 group-hover:bg-neon-violet/10 transition-colors" />
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
              <HeartPulse className="w-7 h-7 text-neon-violet" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Medical Fitness</h3>
            <p className="text-slate-600 leading-relaxed">
              Must possess a valid DGCA Class II Medical Fitness Certificate issued by an approved examiner.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
