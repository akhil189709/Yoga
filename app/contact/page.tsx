"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Send,
  ArrowUpRight,
  Globe,
  Instagram,
  Linkedin,
  Phone,
} from "lucide-react";

// Professional Animation Variants
const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  return (
    <main className="bg-[#080809] text-white pt-48 pb-32 font-sans antialiased selection:bg-amber-500/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- HEADER SECTION --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-24 border-b border-white/5 pb-20"
        >
          <motion.div variants={revealUp} className="flex items-center gap-4 mb-8">
   
             
          </motion.div>
          
          <motion.h1
            variants={revealUp}
            className="text-3xl md:text-[8rem] font-bold tracking-tighter leading-[0.8] mb-12"
          >
            Contac Us <br />
            <span className="font-serif font-light text-white/10">& Application</span>
          </motion.h1>
          
          <motion.p
            variants={revealUp}
            className="text-slate-400 font-medium text-2xl max-w-2xl leading-relaxed italic"
          >
            "Your path to wellness is a private dialogue. We invite you to begin
            the conversation."
          </motion.p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* --- LEFT: CONCIERGE INFO --- */}
          <div className="lg:col-span-4 space-y-16">
            <motion.div initial="hidden" whileInView="visible" variants={stagger} className="space-y-16">
              
              <motion.div variants={revealUp}>
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-black mb-6">Live Channels</h3>
                <div className="space-y-4">
                  <a href="tel:+911234567890" className="text-3xl font-bold tracking-tighter hover:text-amber-500 transition-colors block">
                    +91 123 456 7890
                  </a>
                  <a href="#" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-amber-600 transition-all group">
                    <MessageCircle size={14} className="group-hover:scale-110 transition-transform" />
                    WhatsApp Concierge
                  </a>
                </div>
              </motion.div>

              <motion.div variants={revealUp}>
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-black mb-6">Email Inquiry</h3>
                <a href="mailto:hello@swashthika.com" className="text-2xl font-medium border-b border-amber-600 pb-2 hover:text-amber-500 transition-all">
                  hello@swashthika.com
                </a>
              </motion.div>

              <motion.div variants={revealUp}>
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-black mb-6">The Studio</h3>
                <p className="text-xl font-serif italic text-slate-300 leading-relaxed">
                  123 Wellness Circle, <br />
                  Zen District, Bangalore
                </p>
              </motion.div>
            </motion.div>

            {/* Social Group */}
            <motion.div variants={revealUp} className="pt-12 border-t border-white/5 flex gap-6">
              {[Instagram, Linkedin, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-all text-slate-400 hover:text-white">
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* --- RIGHT: THE APPLICATION FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-8"
          >
            <div className="relative p-10 md:p-20 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden shadow-2xl">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-[100px] -mr-40 -mt-40" />

              <div className="relative z-10">
                <h2 className="text-4xl font-bold tracking-tight mb-12">The <span className="font-serif italic font-light text-amber-500">Application</span></h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-black">Nom De Plume</label>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-amber-600 transition-all font-medium text-lg placeholder:text-white/5"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-black">Direct Link</label>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-amber-600 transition-all font-medium text-lg placeholder:text-white/5"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-black">Service of Interest</label>
                    <select className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-amber-600 transition-all font-medium text-lg text-white/20 appearance-none cursor-pointer">
                      <option className="bg-[#080809]">Therapeutic Personal Training</option>
                      <option className="bg-[#080809]">Home-Studio Synthesis</option>
                      <option className="bg-[#080809]">Global Virtual Collective</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-black">Manifesto</label>
                    <textarea 
                      rows={3} 
                      placeholder="Tell us about your soul's goals..." 
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-amber-600 transition-all font-medium text-lg resize-none placeholder:text-white/5"
                    />
                  </div>

                  <div className="md:col-span-2 pt-8">
                    <button className="w-full md:w-auto px-12 py-5 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl flex items-center justify-center gap-4 group transition-all shadow-xl shadow-amber-600/20">
                      <span className="text-xs font-black uppercase tracking-widest">Submit Application</span>
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="mt-6 text-[9px] uppercase tracking-widest text-white/20 italic">
                      Typical response window: 4 — 6 Business Hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BACKGROUND DECORATIVE ELEMENT */}
      <div className="fixed bottom-0 right-[-5%] translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
        <h1 className="text-[25vw] font-black tracking-tighter italic font-serif">Contact</h1>
      </div>
    </main>
  );
}