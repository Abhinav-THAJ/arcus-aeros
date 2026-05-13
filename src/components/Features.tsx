"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Video, FileText, UserCheck, Users, GraduationCap } from "lucide-react";

const features = [
  { icon: MonitorPlay, title: "Immersive Platform", desc: "Experience ground school through our state-of-the-art digital learning environment." },
  { icon: Video, title: "Live & On-Demand", desc: "Engage in real-time interactive masterclasses, instantly archived for unlimited review." },
  { icon: FileText, title: "Precision Mock Tests", desc: "Evaluate readiness with highly calibrated DGCA-standard simulation exams." },
  { icon: UserCheck, title: "Bespoke Mentorship", desc: "Receive tailored 1-on-1 strategic guidance to target and eliminate weak points." },
  { icon: Users, title: "Exclusive Batches", desc: "We maintain highly restricted batch sizes to ensure uncompromising attention." },
  { icon: GraduationCap, title: "Elite Instructors", desc: "Master the curriculum directly under the guidance of seasoned aviation veterans." },
];

export default function Features() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-surface">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] lg:aspect-auto lg:h-[800px] rounded-[2.5rem] overflow-hidden bg-soft-bg shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="absolute inset-0 bg-[url('/images/features_in_1778671504326.png')] bg-cover bg-center" />
          </motion.div>

          {/* Features Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-primary-dark leading-[1.1] tracking-tight">
                Engineered for <br />
                <span className="text-secondary-dark font-light">absolute precision.</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="mb-4 text-primary-dark">
                    <feature.icon strokeWidth={1.5} className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-semibold text-xl mb-2 text-primary-dark tracking-tight">{feature.title}</h4>
                  <p className="text-[15px] text-secondary-dark/70 leading-relaxed font-light">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
