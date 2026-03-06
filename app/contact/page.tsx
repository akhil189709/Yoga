"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Send,
  ArrowUpRight,
  Globe,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

// Animation settings
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function Contact() {
  return (
    <main className="bg-[#0D0D0D] text-[#F2F2F2] pt-48 pb-32 font-sans antialiased selection:bg-emerald-500/30">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        {/* --- HERO SECTION --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-32 border-b border-white/5 pb-20"
        >
          <motion.span
            variants={fadeUp}
            className="uppercase tracking-[0.6em] text-[10px] font-black text-emerald-500 mb-6 block"
          >
            Exclusive Access
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-7xl md:text-[10rem] font-serif italic tracking-tighter leading-[0.8] mb-12"
          >
            Inquiry <br />
            <span className="not-italic text-white/20">& Application</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-slate-400 font-light text-2xl max-w-2xl leading-relaxed italic opacity-80"
          >
            "Your path to wellness is a private dialogue. We invite you to begin
            yours."
          </motion.p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* --- LEFT: THE CONCIERGE INFO --- */}
          <div className="lg:col-span-4 space-y-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-16"
            >
              <motion.div variants={fadeUp} className="group cursor-pointer">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500 font-black mb-6">
                  Live Support
                </h3>
                <div className="space-y-6">
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-6 text-3xl font-serif italic hover:text-emerald-400 transition-all group"
                  >
                    +91 123 456 7890
                    <ArrowUpRight
                      size={20}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                  <a
                    href="https://wa.me/911234567890"
                    className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold px-6 py-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all w-fit"
                  >
                    <MessageCircle
                      size={14}
                      className="text-[#25D366]"
                      fill="currentColor"
                    />
                    WhatsApp Concierge
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black mb-6">
                  Digital Correspondence
                </h3>
                <a
                  href="mailto:hello@swashthika.com"
                  className="text-2xl font-light border-b border-white/10 pb-2 hover:border-emerald-500 transition-all block w-fit"
                >
                  hello@swashthika.com
                </a>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black mb-6">
                  Global Sanctuary
                </h3>
                <p className="text-2xl font-serif italic text-white/80 leading-snug">
                  123 Wellness Circle, <br />
                  Zen District, Bangalore <br />
                  <span className="text-sm not-italic uppercase tracking-widest text-emerald-500 mt-4 block">
                    Available Worldwide • Online
                  </span>
                </p>
              </motion.div>
            </motion.div>

            {/* Aesthetic Branding Block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-20 border-t border-white/5 flex gap-10"
            >
              {[Instagram, Linkedin, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all text-white/50 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* --- RIGHT: THE APPLICATION FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <div className="relative p-12 md:p-24 rounded-[4rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif italic mb-16">
                  The Application
                </h2>

                <form className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group relative">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-2 block group-focus-within:text-emerald-500 transition-colors">
                        Nom de plume
                      </label>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-emerald-500 transition-colors font-light text-xl placeholder:text-white/10"
                      />
                    </div>
                    <div className="group relative">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-2 block group-focus-within:text-emerald-500 transition-colors">
                        Direct Link
                      </label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-emerald-500 transition-colors font-light text-xl placeholder:text-white/10"
                      />
                    </div>
                  </div>

                  <div className="group relative">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-2 block group-focus-within:text-emerald-500 transition-colors">
                      Primary Objective
                    </label>
                    <select className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-emerald-500 transition-colors font-light text-xl text-white/30 appearance-none cursor-pointer">
                      <option className="bg-black">
                        Select an Interest...
                      </option>
                      <option className="bg-black">
                        Therapeutic Personal Training
                      </option>
                      <option className="bg-black">
                        Weight Management Alchemy
                      </option>
                      <option className="bg-black">
                        Virtual Group Practice
                      </option>
                      <option className="bg-black">Corporate Wellness</option>
                    </select>
                  </div>

                  <div className="group relative">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-2 block group-focus-within:text-emerald-500 transition-colors">
                      Manifesto
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share your health history or soul's goals..."
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-emerald-500 transition-colors font-light text-xl resize-none placeholder:text-white/10"
                    ></textarea>
                  </div>

                  <div className="pt-10">
                    <button
                      type="submit"
                      className="group relative inline-flex items-center gap-6 bg-emerald-500 text-black px-16 py-6 rounded-full overflow-hidden transition-all duration-500 hover:pr-20 shadow-[0_20px_40px_rgba(16,185,129,0.2)]"
                    >
                      <span className="uppercase tracking-[0.3em] text-xs font-black z-10">
                        Request Consultation
                      </span>
                      <div className="absolute right-8 opacity-0 group-hover:opacity-100 group-hover:right-10 transition-all">
                        <Send size={18} />
                      </div>
                      <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    </button>

                    <p className="mt-8 text-[9px] uppercase tracking-widest text-white/20">
                      Average response time: 4-6 Business Hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Text */}
      <div className="fixed bottom-10 -right-20 rotate-90 hidden xl:block pointer-events-none">
        <span className="text-[12rem] font-serif italic text-white/[0.02] select-none uppercase">
          Dialogue
        </span>
      </div>
    </main>
  );
}
