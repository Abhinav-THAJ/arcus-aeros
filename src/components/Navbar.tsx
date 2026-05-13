"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Curriculum", href: "#courses" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500`}
    >
      <div className={`w-full max-w-5xl flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ${isScrolled ? 'luxury-glass' : 'bg-transparent'}`}>
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo.png"
            alt="Arcus Aero — Fueling Futures Above the Clouds"
            width={240}
            height={80}
            className="h-12 md:h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[13px] font-semibold uppercase tracking-widest transition-colors ${isScrolled ? 'text-secondary-dark hover:text-royal-purple' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#enroll"
            className={`px-6 py-2.5 rounded-full transition-all text-xs font-semibold uppercase tracking-widest shadow-md hover:shadow-xl hover:-translate-y-0.5 duration-300 ${isScrolled ? 'bg-primary-dark text-white' : 'bg-white text-primary-dark'}`}
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className={`md:hidden p-2 rounded-full transition-all duration-300 ${isScrolled ? 'text-primary-dark bg-black/5' : 'text-white bg-white/20 backdrop-blur-md border border-white/30'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Menu — Full-width premium dark overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden absolute top-0 left-0 right-0 min-h-screen bg-aviation-navy/95 backdrop-blur-3xl flex flex-col px-6 pt-28 pb-12 gap-2 z-[-1]"
        >
          {/* Close button at top */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 text-white border border-white/20"
          >
            <X size={20} />
          </button>

          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                href={link.href}
                className="flex items-center justify-between py-5 border-b border-white/10 text-white text-2xl font-heading font-semibold tracking-tight hover:text-neon-violet transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                <span className="text-white/30 text-lg">→</span>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8"
          >
            <Link
              href="#enroll"
              className="w-full block text-center px-6 py-5 rounded-2xl bg-gradient-to-r from-royal-purple to-neon-violet text-white text-lg font-bold shadow-lg shadow-neon-violet/30 tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </motion.div>

          <p className="text-white/20 text-xs text-center mt-auto pt-8 tracking-widest uppercase">Fueling Futures Above the Clouds</p>
        </motion.div>
      )}
    </motion.header>
  );
}
