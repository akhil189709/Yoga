"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Award,
  BookOpen,
  Heart,
  Sparkles,
  MoveRight,
  Leaf,
  ShieldCheck,
  Compass,
  Zap,
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const revealVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <main
      ref={containerRef}
      className="bg-[#F4F1EE] text-[#1A1A1A] font-sans antialiased"
    >
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-[#0D1B15]">
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
            scale: useTransform(scrollYProgress, [0, 0.2], [1, 1.1]),
          }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80"
            className="w-full h-full object-cover"
            alt="Zen Background"
          />
        </motion.div>

        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5 }}
            className="text-emerald-400 text-xs font-bold uppercase mb-6"
          >
            Est. 2016 — Swashthika
          </motion.div>
          <h1 className="text-7xl md:text-[12rem] font-serif italic text-white leading-none tracking-tighter">
            Pure <br />
            <span className="not-italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
              Essence.
            </span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 1, duration: 1 }}
            className="h-[1px] bg-emerald-500 mx-auto mt-12"
          />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-[10px] uppercase tracking-[0.3em] animate-bounce">
          Scroll to explore
        </div>
      </section>

      {/* --- THE MANIFESTO (TEXT REVEAL) --- */}
      <section className="py-40 px-6 md:px-12 bg-[#F4F1EE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">
              We believe yoga is <br />
              <span className="italic text-emerald-800">
                unspoken poetry
              </span>{" "}
              <br />
              of the body.
            </h2>
            <div className="space-y-8">
              <p className="text-2xl font-light text-slate-700 leading-relaxed">
                Swashthika isn't a gym. It's an architectural study of the human
                spirit. We move beyond the "pose" to find the stillness within
                the movement.
              </p>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                  <MoveRight />
                </div>
                <span className="uppercase tracking-widest text-sm font-bold">
                  Our Philosophy
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- THE FOUNDER: ULTRA-MODERN EDITORIAL --- */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="relative">
            {/* Massive Background Text */}
            <div className="absolute top-0 left-0 text-[15rem] font-serif italic text-slate-50 opacity-[0.03] select-none leading-none -translate-x-20 transition-transform">
              Visionary
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <motion.div
                className="lg:col-span-6"
                style={{
                  y: useTransform(scrollYProgress, [0.2, 0.5], [0, -100]),
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1552196564-972b2c9f7272?auto=format&fit=crop&w=800&q=80"
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                    alt="Aditya Pratap Singh"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-10 left-10 text-white">
                    <p className="text-sm uppercase tracking-widest mb-2 opacity-80">
                      Founder & Lead
                    </p>
                    <h3 className="text-4xl font-serif">Aditya Pratap Singh</h3>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-6 lg:pl-20 space-y-12"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
              >
                <motion.div variants={revealVariant}>
                  <h4 className="text-emerald-700 font-bold uppercase tracking-[0.3em] text-xs mb-6">
                    Credentialed Excellence
                  </h4>
                  <p className="text-4xl font-serif italic leading-snug mb-8">
                    "Blending the clinical precision of therapy with the
                    ancestral wisdom of Hatha."
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    {
                      icon: <Award />,
                      title: "M.Sc. Yoga Therapy",
                      desc: "Clinical excellence in healing.",
                    },
                    {
                      icon: <ShieldCheck />,
                      title: "8+ Years Experience",
                      desc: "A decade of deep practice.",
                    },
                    {
                      icon: <Compass />,
                      title: "Holistic Health",
                      desc: "Beyond physical boundaries.",
                    },
                    {
                      icon: <Zap />,
                      title: "Modern Science",
                      desc: "Evidence-based movement.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={revealVariant}
                      className="group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-500">
                        {item.icon}
                      </div>
                      <h5 className="font-bold text-sm uppercase tracking-wider mb-2">
                        {item.title}
                      </h5>
                      <p className="text-slate-500 text-sm font-light">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENTO LUXURY GRID --- */}
      <section className="py-40 px-6 md:px-12 bg-[#0D1B15] text-white rounded-t-[5rem] -mt-20 relative z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-serif">
              The Core <br />
              <span className="italic text-emerald-400">Principles</span>
            </h2>
            <p className="max-w-xs text-slate-400 font-light">
              Designing experiences that reconnect the disconnected soul to its
              natural biological rhythm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-4 bg-[#162921] p-12 rounded-[3rem] border border-white/5 flex flex-col justify-between h-[450px]"
            >
              <Sparkles className="text-emerald-400" size={40} />
              <div>
                <h3 className="text-4xl font-serif mb-6 italic">
                  Radical Personalization
                </h3>
                <p className="text-slate-400 text-xl font-light leading-relaxed max-w-lg">
                  We don't teach "a class." We teach <u>you</u>. Your bone
                  structure, your history, and your breath dictate the flow.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-2 bg-emerald-800 p-12 rounded-[3rem] h-[450px] flex flex-col justify-between"
            >
              <div className="text-6xl font-serif opacity-20 italic">01</div>
              <div>
                <h3 className="text-3xl font-serif mb-4">Integrity</h3>
                <p className="text-emerald-100/70 font-light text-sm">
                  No shortcuts. No gimmicks. Only pure, transformative practice.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-3 bg-white text-slate-900 p-12 rounded-[3rem] h-[400px] flex flex-col justify-between"
            >
              <Heart className="text-emerald-600" size={40} />
              <div>
                <h3 className="text-3xl font-serif mb-4 italic">
                  Sustainable Living
                </h3>
                <p className="text-slate-500 font-light">
                  Creating habits that last decades, not just a 6-week
                  challenge.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-3 bg-[#1A1A1A] p-12 rounded-[3rem] border border-white/10 h-[400px] overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <Leaf className="text-emerald-500" size={40} />
                <h3 className="text-3xl font-serif italic text-white">
                  Environmental Harmony
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: THE "IMMERSIVE" WRAP --- */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <motion.div style={{ scale: scaleProgress }} className="max-w-4xl">
          <span className="text-emerald-700 font-bold tracking-widest text-xs uppercase mb-8 block">
            Start Your Evolution
          </span>
          <h2 className="text-6xl md:text-9xl font-serif italic tracking-tighter mb-12">
            Return to <span className="not-italic">You.</span>
          </h2>
          <button className="relative overflow-hidden group bg-slate-900 text-white px-16 py-8 rounded-full transition-all duration-500 shadow-2xl">
            <span className="relative z-10 text-lg font-bold">
              Secure Your Sanctuary
            </span>
            <div className="absolute inset-0 bg-emerald-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>
      </section>

      {/* --- LUXURY FOOTER MINI --- */}
      <footer className="py-12 border-t border-slate-200 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-slate-400">
          © 2026 Swashthika Holistic Health. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
