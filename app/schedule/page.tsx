"use client";

import React, { useRef } from "react";
import { scheduleData } from "@/data/schedule";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import {
  Clock,
  Globe,
  Sun,
  Sunrise,
  Sunset,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Command,
} from "lucide-react";

import Link from "next/link";



/* ---------------- CURSOR GLOW ---------------- */

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;

    ref.current.style.background =
      `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(16,185,129,0.15), transparent 40%)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="pointer-events-none fixed inset-0 z-10 transition"
    />
  );
}



/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.12 } },
};



export default function Schedule() {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });



  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-[#FAF9F6] pt-32 pb-40 text-slate-900 overflow-hidden"
    >

      <CursorGlow />


      {/* ---------------- AURORA BACKGROUND ---------------- */}

      <div className="fixed inset-0 -z-50 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute w-[140vw] h-[140vw] -top-[40%] -left-[20%]"
        >
          <div className="absolute w-full h-full bg-[conic-gradient(from_180deg_at_50%_50%,#10b98133,#6366f133,#ec489933,#10b98133)] blur-[140px]" />
        </motion.div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#faf9f6_70%)]" />
      </div>


      {/* ---------------- SCROLL TIMELINE ---------------- */}

      <motion.div
        style={{ scaleY: smoothProgress }}
        className="fixed left-10 top-0 w-[2px] h-full origin-top bg-gradient-to-b from-emerald-500 via-indigo-400 to-transparent z-20"
      />


      {/* ---------------- PARALLAX BACKGROUND BLOBS ---------------- */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <motion.div
          style={{
            scale: useTransform(smoothProgress, [0, 1], [1, 1.5]),
            opacity: useTransform(smoothProgress, [0, 0.5], [0.1, 0]),
          }}
          className="absolute -top-[10%] -right-[10%] w-[70vw] h-[70vw] bg-emerald-100/40 rounded-full blur-[120px]"
        />

        <motion.div
          style={{ y: useTransform(smoothProgress, [0, 1], [0, -200]) }}
          className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-stone-200/50 rounded-full blur-[100px]"
        />

      </div>



      <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative z-10">

        {/* ---------------- HEADER ---------------- */}

        <section className="mb-32">

          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-emerald-800" />
              <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-emerald-800">
                The Rhythm of Practice
              </span>
            </motion.div>


            <motion.h1
              variants={fadeInUp}
              className="text-7xl md:text-9xl font-serif italic tracking-tighter leading-[0.85] mb-12"
            >
              Celestial <br />
              <span className="not-italic font-sans font-extralight text-slate-300">
                Alignment
              </span>
            </motion.h1>


            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8"
            >
              <p className="text-slate-500 font-light text-xl max-w-xl leading-relaxed">
                Our sessions follow the natural circadian rhythm,
                synchronized with
                <span className="text-slate-900 font-medium italic">
                  {" "}Indian Standard Time
                </span>.
                Experience a global sanctuary from anywhere.
              </p>


              <div className="flex items-center gap-4 px-6 py-3 bg-white/50 backdrop-blur-md rounded-full border border-white shadow-sm">
                <Globe size={18} className="text-emerald-700" />
                <span className="text-xs uppercase tracking-widest font-bold text-slate-600">
                  Syncing with GMT+5:30
                </span>
              </div>

            </motion.div>

          </motion.div>

        </section>



        {/* ---------------- SCHEDULE SECTIONS ---------------- */}

        <div className="space-y-48">

          {[
            {
              title: "Morning Radiance",
              subtitle: "AWAKEN & VITALIZE",
              data: scheduleData.morningBatches,
              icon: <Sunrise size={32} strokeWidth={1} />,
              color: "text-orange-500",
              bg: "from-orange-50/50",
            },
            {
              title: "Zenith Flow",
              subtitle: "BALANCE & CLARITY",
              data: scheduleData.daytimeBatches,
              icon: <Sun size={32} strokeWidth={1} />,
              color: "text-emerald-600",
              bg: "from-emerald-50/50",
            },
            {
              title: "Vesper Stillness",
              subtitle: "RESTORE & REFLECT",
              data: scheduleData.eveningBatches,
              icon: <Sunset size={32} strokeWidth={1} />,
              color: "text-indigo-500",
              bg: "from-indigo-50/50",
            },
          ].map((section, sIdx) => (

            <motion.section
              key={sIdx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="relative"
            >


              {/* SECTION TITLE */}

              <div className="sticky top-32 z-20 mb-16 flex items-start">

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-6 group"
                >

                  <div className={`p-5 bg-white rounded-full shadow-xl border border-white group-hover:scale-110 transition ${section.color}`}>
                    {section.icon}
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.4em] font-bold text-slate-400 mb-1">
                      {section.subtitle}
                    </p>

                    <h2 className="text-4xl md:text-5xl font-serif italic">
                      {section.title}
                    </h2>
                  </div>

                </motion.div>

              </div>



              {/* CLASS CARDS */}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {section.data.map((batch, index) => (

                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{
                      y: -14,
                      rotateX: 6,
                      rotateY: -6,
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="group relative overflow-hidden bg-white/30 backdrop-blur-2xl border border-white/40 p-10 md:p-14 rounded-[3rem] shadow-xl"
                  >

                    {/* glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-emerald-200/20 via-transparent to-indigo-200/20 blur-2xl" />


                    <div className="relative z-10">

                      <div className="flex flex-col sm:flex-row justify-between gap-8">

                        <div className="space-y-6">

                          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900 text-white">
                            <Clock size={14} />
                            <span className="text-sm">
                              {batch.time} IST
                            </span>
                          </div>

                          <h3 className="text-3xl md:text-4xl font-serif">
                            {batch.className}
                          </h3>

                          <p className="text-slate-500 text-lg">
                            {batch.description}
                          </p>

                        </div>



                        {/* TIMEZONE */}

                        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-inner min-w-[220px]">

                          <div className="flex items-center gap-2 mb-4 opacity-40">
                            <Command size={12} />
                            <span className="text-[10px] uppercase tracking-widest font-bold">
                              World Clock
                            </span>
                          </div>

                          <div className="space-y-3">

                            {batch.timezones.map((tz, idx) => (
                              <div key={idx} className="flex justify-between">
                                <span className="text-[11px] text-slate-400">
                                  {tz.split(" ")[0]}
                                </span>

                                <span className="text-[11px] font-bold">
                                  {tz.split(" ").slice(1).join(" ")}
                                </span>
                              </div>
                            ))}

                          </div>

                        </div>

                      </div>

                    </div>

                  </motion.div>

                ))}

              </div>

            </motion.section>

          ))}

        </div>
      </div>



      {/* ---------------- FOOTER CTA ---------------- */}

      <footer className="mt-40 text-center px-8">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-8"
        >

          <p className="text-[10px] uppercase tracking-[0.5em] text-slate-400">
            Ready to transform?
          </p>

          <h2 className="text-4xl md:text-6xl font-serif italic text-slate-800">
            Your mat is waiting.
          </h2>

          <div className="flex justify-center gap-8">

            <Link
              href="/contact"
              className="text-xs font-bold uppercase tracking-widest hover:text-emerald-700"
            >
              Instagram
            </Link>

            <Link
              href="/contact"
              className="text-xs font-bold uppercase tracking-widest hover:text-emerald-700"
            >
              WhatsApp
            </Link>

            <Link
              href="/contact"
              className="text-xs font-bold uppercase tracking-widest hover:text-emerald-700"
            >
              Join Community
            </Link>

          </div>

        </motion.div>

      </footer>

    </main>
  );
}