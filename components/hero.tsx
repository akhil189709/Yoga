"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Leaf } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden px-6 pt-20">

      {/* 🌌 Animated Background */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="absolute inset-0 -z-10"
      >
        {/* gradient glow */}
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-400/30 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[150px]" />

        {/* animated grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(16,185,129,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* floating shapes */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute left-20 top-40 h-20 w-20 rounded-full bg-emerald-400/20 blur-xl"
        />

        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
          className="absolute right-20 bottom-40 h-24 w-24 rounded-full bg-blue-400/20 blur-xl"
        />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-emerald-100"
        >
          <Leaf className="text-emerald-600" size={18} />
          <span className="text-sm font-medium text-slate-700">
            Transform Your Life Through Yoga
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-slate-900 leading-tight"
        >
          Find Your
          <br />
          <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400">
            Inner Peace
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Experience the transformative power of traditional yoga practices
          designed for modern life. Join our community and discover balance,
          strength, and serenity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-10"
        >
          <Link
            href="/join"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium bg-emerald-600 overflow-hidden shadow-xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition duration-500" />
            <span className="relative flex items-center gap-2">
              Start Your Journey
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </Link>

          <Link
            href="/schedule"
            className="group bg-white text-slate-700 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg border border-slate-200 hover:scale-105"
          >
            <Calendar size={20} />
            View Schedule
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-16 grid grid-cols-3 gap-10 max-w-2xl mx-auto"
        >
          {[
            { value: "1000+", label: "Happy Students" },
            { value: "8+", label: "Years Experience" },
            { value: "50+", label: "Classes Weekly" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-light text-emerald-700">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}