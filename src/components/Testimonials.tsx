"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Menon",
    role: "Aspiring Commercial Pilot",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    quote: "Arcus Aero transformed my preparation. Being from Kerala, it was hard to find quality ground classes locally. The online interactive sessions are phenomenal.",
  },
  {
    name: "Sarah Varghese",
    role: "Cadet Pilot Program",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    quote: "The mock tests and 1-on-1 mentorship helped me clear my Navigation and Meteorology exams in the very first attempt. Highly recommended!",
  },
  {
    name: "Rahul Krishna",
    role: "Aviation Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    quote: "The way the instructors break down complex aerodynamics concepts into simple, visual lessons is amazing. The platform feels very premium and easy to use.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative bg-slate-50">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-purple/5 blur-[150px] rounded-full" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full border border-royal-purple/20 bg-white mb-6 shadow-sm"
          >
            <span className="text-sm font-semibold tracking-wider text-royal-purple uppercase">Success Stories</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Hear from our <span className="text-gradient-purple">Cadets</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 relative group shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neon-violet text-neon-violet" />
                ))}
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8 text-lg italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-heading font-bold text-slate-900 group-hover:text-royal-purple transition-colors">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
