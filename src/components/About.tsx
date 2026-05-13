"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 relative w-full overflow-hidden bg-surface">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-[0.95] tracking-tighter text-primary-dark">
              A new standard in <br />
              <span className="text-neon-violet font-light italic">aviation training.</span>
            </h2>
            
            <div className="space-y-8 text-secondary-dark/80 text-lg md:text-xl font-light leading-relaxed">
              <p>
                Arcus Aero is Kerala’s first fully-integrated online pilot ground school, meticulously crafted to bring world-class DGCA instruction directly to aspiring aviators across India.
              </p>
              <p>
                The path to becoming a commercial pilot demands unyielding discipline and profound theoretical mastery. We recognized a critical gap: premium, structured, and exam-focused guidance was largely confined to metropolitan hubs.
              </p>
              <p>
                We engineered Arcus Aero to eliminate those boundaries. Our platform delivers unparalleled, expert-led training with a singular focus—your success in the cockpit.
              </p>
            </div>
            
            <div className="mt-12">
              <div className="h-[1px] w-full bg-black/[0.05] mb-8" />
              <div className="flex items-center gap-8">
                <div>
                  <span className="block font-heading text-4xl font-bold text-primary-dark">100%</span>
                  <span className="text-sm uppercase tracking-widest font-semibold text-secondary-dark/50 mt-1">Digital Access</span>
                </div>
                <div className="w-[1px] h-12 bg-black/[0.05]" />
                <div>
                  <span className="block font-heading text-4xl font-bold text-primary-dark">24/7</span>
                  <span className="text-sm uppercase tracking-widest font-semibold text-secondary-dark/50 mt-1">Expert Support</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-soft-bg shadow-[0_20px_80px_rgba(0,0,0,0.06)] group">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 bg-[url('/images/about_pilot_in_1778671443989.png')] bg-cover bg-center" 
              />
              <div className="absolute inset-0 bg-black/[0.02]" />
            </div>

            {/* Subtle Label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-10 -right-4 md:-right-8 bg-white/90 backdrop-blur-md py-3 px-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white"
            >
              <span className="text-sm font-semibold tracking-wide text-primary-dark">Focused Excellence.</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
