"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Check,
  Monitor,
  ArrowUpRight,
  Compass,
  Wind,
  Plus,
} from "lucide-react";
import Link from "next/link";

// Animation Variants - High End Reveal
const revealUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Services() {
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <main className="bg-[#FCFAF7] text-slate-950 font-sans antialiased selection:bg-amber-100">
      
      {/* --- HERO: THE EDITORIAL HEADER --- */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-24 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={revealUp} className="flex items-center gap-4 mb-10">
              <span className="w-12 h-[1px] bg-amber-600" />
              <span className="uppercase tracking-[0.6em] text-[10px] font-black text-amber-700">
                The Curriculum
              </span>
            </motion.div>

            <motion.h1
              variants={revealUp}
              className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-16"
            >
              Elevated <br />
              <span className="font-serif italic font-light text-amber-600">Practices.</span>
            </motion.h1>

            <motion.div
              variants={revealUp}
              className="flex flex-col md:flex-row items-start justify-between gap-12"
            >
              <div className="max-w-xl">
                 <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">Our Philosophy</p>
                 <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium">
                  We blend biometric precision with ancient stillness to help you 
                  return to your <span className="text-slate-950 underline decoration-amber-500 underline-offset-8">essential architecture</span>.
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer flex items-center gap-6 bg-slate-950 text-white pl-8 pr-4 py-4 rounded-full">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black">Scroll to Explore</span>
                <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={18} />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Large Decorative Parallax Text */}
        <motion.div
          style={{ y: titleY }}
          className="absolute right-[-10%] top-[30%] text-[20vw] font-black text-slate-900/[0.03] -z-0 select-none whitespace-nowrap pointer-events-none"
        >
          CURATED
        </motion.div>
      </section>

      {/* --- SECTION 1: OFFLINE PRIVÉ --- */}
      <section className="py-32 md:py-48 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-4 sticky top-32">
            <span className="text-amber-600 font-black text-6xl opacity-10 font-serif">01</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-4 mb-8">
              Offline <span className="italic font-serif font-light text-amber-600">Privé</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Personalized sanctuaries in the heart of Bangalore. Our instructors come to your space, transforming it into a vessel for growth.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <Plus size={16} className="text-amber-500" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Available in Bangalore & Mumbai</span>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {[
              { 
                title: "Therapeutic Personal Training", 
                price: "₹12,000", 
                tag: "12 Sessions",
                desc: "Focused on structural correction and injury recovery." 
              },
              { 
                title: "Home-Studio Synthesis", 
                price: "₹10,000", 
                tag: "12 Sessions",
                desc: "A rhythmic flow designed for daily lifestyle integration." 
              },
              { 
                title: "Trial Consultation", 
                price: "₹1,500", 
                tag: "One Session",
                desc: "Initial biometric assessment and practice mapping." 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
              >
                <div>
                  <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-2 block">{item.tag}</span>
                  <h3 className="text-2xl font-bold tracking-tight mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm max-w-xs">{item.desc}</p>
                </div>
                <div className="flex items-center gap-10">
                   <div className="text-3xl font-light italic font-serif text-slate-950">{item.price}</div>
                   <button className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                      <ArrowUpRight size={20} />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE DIGITAL BENTO --- */}
      <section className="px-6 pb-48">
        <div className="max-w-7xl mx-auto bg-slate-950 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          {/* Gold Glow */}
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-amber-600/10 blur-[120px] rounded-full" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <Monitor className="text-amber-500" size={16} />
                <span className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">Virtual Studio</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
                The Digital <br /> <span className="italic font-serif font-light text-amber-500">Collective.</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12 max-w-md">
                Experience high-fidelity 4K streaming that bridges the gap between our sanctuary and your home.
              </p>
              <button className="flex items-center gap-4 text-white group">
                <span className="text-xs font-black uppercase tracking-widest border-b-2 border-amber-600 pb-2">View Schedule</span>
                <ArrowUpRight size={20} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {[
                 { name: "Global Group", price: "₹1,800", sessions: "Per Month", icon: <Compass /> },
                 { name: "Private Virtual", price: "₹2,800", sessions: "1:1 Intensive", icon: <Wind /> }
               ].map((card, i) => (
                 <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="text-amber-500 mb-20 group-hover:scale-110 transition-transform origin-left">
                      {React.cloneElement(card.icon as React.ReactElement, { size: 32, strokeWidth: 1 })}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">{card.name}</h4>
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-6">{card.sessions}</p>
                    <div className="text-2xl font-serif italic text-amber-500">{card.price}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: FINAL CALL --- */}
      <section className="py-32 text-center relative">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">
              Ready to <span className="italic font-serif font-light text-amber-600">Evolve?</span>
            </h2>
            <p className="text-slate-500 text-lg uppercase tracking-[0.4em] font-bold max-w-xl mx-auto">
              Applications now open for <br /> the 2026 private cohort.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="bg-slate-950 text-white px-12 py-6 rounded-2xl text-[10px] uppercase tracking-[0.4em] font-black hover:bg-amber-600 transition-all shadow-2xl shadow-slate-200"
              >
                Start Application
              </Link>
              <button className="text-slate-950 text-[10px] uppercase tracking-[0.4em] font-black hover:text-amber-600 transition-colors">
                Request Catalog →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 border-t border-slate-100 text-center">
        <p className="text-[10px] uppercase tracking-[0.6em] text-slate-300 font-black">
          Swashthika • Private & Confidential • Bangalore
        </p>
      </footer>
    </main>
  );
}