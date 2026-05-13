"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the course fully online?",
    answer: "Yes, our DGCA ground school is 100% online. You can access live classes, recorded sessions, and mock tests from anywhere in India."
  },
  {
    question: "Are recordings available?",
    answer: "Absolutely. All live sessions are recorded and made available in your student portal for unlimited revisions."
  },
  {
    question: "Do you provide mentorship?",
    answer: "Yes, we offer personalized 1-on-1 mentorship to help you clear doubts, create study plans, and stay on track for your exams."
  },
  {
    question: "How are mock tests conducted?",
    answer: "Our mock tests simulate the actual DGCA exam environment, with timer-based questions and in-depth performance analytics to help you identify weak areas."
  },
  {
    question: "Is the curriculum DGCA-focused?",
    answer: "Our entire curriculum is specifically designed around the latest DGCA syllabus and examination patterns."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Frequently Asked <span className="text-gradient-purple">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-heading font-semibold text-lg text-slate-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-royal-purple transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-5 text-slate-600 border-t border-slate-100 bg-slate-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
