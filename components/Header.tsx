"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Schedule", href: "/schedule" },
    { name: "Gallery", href: "/gallery" },
    { name: "Feedback", href: "/feedback" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-[0.16, 1, 0.3, 1] ${
          isScrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div
            className={`flex justify-between items-center transition-all duration-700 px-8 rounded-full ${
              isScrolled
                ? "bg-black/80 backdrop-blur-2xl py-3 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                : "bg-transparent py-0"
            }`}
          >
            {/* --- LOGO --- */}
            <Link
              href="/"
              className={`text-2xl font-serif italic tracking-tighter transition-colors duration-500 ${
                isScrolled ? "text-white" : "text-slate-900"
              }`}
            >
              Swashthika<span className="text-emerald-500">.</span>
            </Link>

            {/* --- CENTER NAVIGATION (DESKTOP) --- */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-500 ${
                    isScrolled
                      ? "text-white/70 hover:text-white"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* --- ACTION GROUP --- */}
            <div className="flex items-center gap-3">
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/YOUR_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-500"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} fill="currentColor" />
                <span className="absolute -top-12 scale-0 group-hover:scale-100 transition-transform bg-black text-[9px] text-white px-3 py-1 rounded-md uppercase tracking-widest">
                  Connect
                </span>
              </a>

              {/* Call Icon */}
              <a
                href="tel:+YOUR_NUMBER"
                className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-500 hover:scale-110 ${
                  isScrolled
                    ? "border-white/10 text-white bg-white/5 hover:bg-white hover:text-black"
                    : "border-slate-200 text-slate-900 bg-white hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Phone size={16} />
              </a>

              {/* CTA Button */}
              <Link
                href="/join"
                className={`hidden md:flex items-center gap-3 px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-500 ${
                  isScrolled
                    ? "bg-emerald-500 text-white hover:bg-emerald-400"
                    : "bg-slate-900 text-white hover:bg-emerald-800"
                }`}
              >
                Join Now <ArrowUpRight size={14} />
              </Link>

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden flex flex-col gap-1.5 p-2 transition-colors ${
                  isScrolled ? "text-white" : "text-slate-900"
                }`}
              >
                <span className="w-6 h-[1.5px] bg-current" />
                <span className="w-4 h-[1.5px] bg-current self-end" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- FULL SCREEN MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-slate-900 z-[200] flex flex-col"
          >
            <div className="flex justify-between items-center p-10">
              <span className="text-white/20 text-xs uppercase tracking-[0.5em]">
                Menu
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="flex-grow flex flex-col justify-center px-12 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl md:text-7xl font-serif italic text-white hover:text-emerald-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-12 border-t border-white/5 flex flex-wrap gap-8 justify-between items-center">
              <div className="flex gap-6">
                <a
                  href="tel:+123"
                  className="text-emerald-500 text-xs uppercase tracking-widest font-bold underline underline-offset-8"
                >
                  Call Us
                </a>
                <a
                  href="https://wa.me/123"
                  className="text-emerald-500 text-xs uppercase tracking-widest font-bold underline underline-offset-8"
                >
                  WhatsApp
                </a>
              </div>
              <p className="text-white/20 text-[10px] uppercase tracking-widest">
                © 2026 Swashthika
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
