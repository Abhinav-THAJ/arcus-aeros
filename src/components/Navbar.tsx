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
          className="md:hidden text-primary-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:hidden absolute top-20 left-4 right-4 bg-white/90 backdrop-blur-3xl rounded-3xl p-6 flex flex-col gap-6 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-primary-dark border-b border-black/5 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#enroll"
            className="w-full text-center px-6 py-4 rounded-xl bg-primary-dark text-white font-semibold shadow-md mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply Now
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
