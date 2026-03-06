"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Check,
  MapPin,
  Monitor,
  Zap,
  ArrowUpRight,
  Infinity as InfinityIcon,
  Compass,
  Wind,
} from "lucide-react";
import Link from "next/link";

// Animation Variants - Silk Smooth
const silkFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Services() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <main className="bg-[#FAF9F6] text-[#121212] font-sans antialiased overflow-hidden selection:bg-emerald-200">
      {/* --- HERO: MINIMALIST EDITORIAL --- */}
      <section className="relative min-h-[80vh] flex items-center px-6 md:px-24 overflow-hidden border-b border-black/5">
        <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span
              variants={silkFadeUp}
              className="uppercase tracking-[0.8em] text-[9px] font-black text-emerald-800 mb-8 block"
            >
              Curated Alchemy
            </motion.span>

            <motion.h1
              variants={silkFadeUp}
              className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-none mb-12 max-w-4xl"
            >
              Elevated{" "}
              <span className="not-italic text-black/10">
                Practices for the
              </span>{" "}
              <br />
              Modern Soul<span className="text-emerald-600">.</span>
            </motion.h1>

            <motion.div
              variants={silkFadeUp}
              className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12"
            >
              <p className="text-slate-500 font-light text-xl md:text-2xl max-w-xl leading-relaxed italic border-l border-emerald-200 pl-8">
                "Precision in movement. Stillness in mind. We facilitate the
                return to your essential architecture."
              </p>

              <div className="flex gap-4 items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <Wind size={18} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">
                  Discover More
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Parallax Floating Element */}
        <motion.div
          style={{ y }}
          className="absolute right-[-5%] top-[20%] text-[25vw] font-serif italic text-black/[0.02] -z-0 select-none whitespace-nowrap"
        >
          The Method
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        {/* --- SECTION 1: THE PRIVÉ COLLECTION --- */}
        <section className="mb-60">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-600" />
                <span className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-400">
                  Offline Privé
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif italic tracking-tight">
                The Physical Presence
              </h2>
            </div>
            <p className="text-slate-400 text-xs uppercase tracking-[0.2em] max-w-[200px] leading-loose">
              At-home sanctuaries & studio mastery in Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                name: "Therapeutic Personal Training",
                prices: ["₹12,000 / 12 Sessions", "₹1,500 / Trial"],
              },
              {
                name: "Home-Studio Synthesis",
                prices: ["₹10,000 / 12 Sessions", "₹8,000 / 8 Sessions"],
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-white border border-black/[0.03] p-10 md:p-16 rounded-[3rem] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-700"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-16">
                    <h3 className="text-3xl font-serif italic max-w-[200px] leading-tight group-hover:text-emerald-800 transition-colors">
                      {service.name}
                    </h3>
                    <div className="text-right">
                      {service.prices.map((p, idx) => (
                        <p
                          key={idx}
                          className="text-lg font-serif italic text-slate-400 group-hover:text-emerald-600 transition-colors"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-12 flex-grow">
                    {[
                      "Biometric Assessment",
                      "Anatomical Correction",
                      "Private Concierge",
                    ].map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-slate-400 font-bold border-b border-black/[0.03] pb-4"
                      >
                        <Check size={12} className="text-emerald-500" /> {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/join"
                    className="group/btn flex items-center justify-between w-full bg-black text-white px-8 py-6 rounded-full overflow-hidden relative"
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black z-10">
                      Request Invitation
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                    />
                    <div className="absolute inset-0 bg-emerald-700 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- SECTION 2: DIGITAL BENTO --- */}
        <section className="mb-60">
          <div className="bg-black text-white rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-8">
                  <Monitor
                    className="text-emerald-400"
                    size={20}
                    strokeWidth={1}
                  />
                  <span className="text-[10px] uppercase tracking-[0.6em] text-emerald-400 font-bold">
                    Virtual Studio
                  </span>
                </div>
                <h2 className="text-5xl font-serif italic mb-8 leading-[1.1]">
                  The Digital <br /> Collective.
                </h2>
                <p className="text-slate-400 text-lg font-light leading-relaxed mb-12">
                  High-fidelity 4K streaming that bridges the gap between our
                  sanctuary and your home. Bi-directional feedback for real-time
                  correction.
                </p>
                <button className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-emerald-500 pb-2 hover:text-emerald-400 transition-all">
                  View Online Schedule
                </button>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Global Group",
                    price: "₹1,800",
                    sub: "Mixed-level harmony",
                  },
                  {
                    name: "Private Virtual",
                    price: "₹2,800",
                    sub: "1:1 Digital Intensive",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group"
                  >
                    <h4 className="text-2xl font-serif italic mb-2">
                      {item.name}
                    </h4>
                    <div className="text-emerald-400 text-xl font-serif mb-6">
                      {item.price}
                    </div>
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-10">
                      {item.sub}
                    </p>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: THE TRANSFORMATION --- */}
        <section className="relative h-[80vh] flex items-center justify-center text-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1545208393-2165596273f2?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover rounded-[4rem] grayscale opacity-20"
              alt="Aesthetic Yoga"
            />
          </div>

          <div className="relative z-10 space-y-12 px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <Compass
                className="mx-auto mb-8 text-emerald-900"
                size={40}
                strokeWidth={1}
              />
              <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter mb-8">
                Ready to evolve?
              </h2>
              <p className="text-slate-500 text-lg uppercase tracking-[0.4em] font-light max-w-xl mx-auto mb-12">
                Applications now open for <br /> the 2026 private cohort.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-black text-white px-12 py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-black hover:bg-emerald-800 transition-all"
                >
                  Start Application
                </Link>
                <button className="bg-white text-black border border-black/10 px-12 py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-black hover:bg-slate-50 transition-all">
                  Request Catalog
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <footer className="py-20 border-t border-black/[0.03] text-center">
        <p className="text-[9px] uppercase tracking-[0.8em] text-slate-300 font-black">
          Swashthika • Private & Confidential • Bangalore
        </p>
      </footer>
    </main>
  );
}
