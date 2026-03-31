"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Star, Instagram, Linkedin, Quote } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function InstructorSection() {
  return (
    <section className="py-32 px-6 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: IMAGE COLUMN (6 cols) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10" />
            
            <div className="relative group overflow-hidden rounded-[2rem] aspect-[4/5] shadow-2xl">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src="https://images.pexels.com/photos/8401336/pexels-photo-8401336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Aditya Pratap Singh"
                className="w-full h-full object-cover"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center text-emerald-50">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Experience</p>
                    <p className="text-stone-900 font-serif italic text-lg">8+ Years Mastery</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: CONTENT COLUMN (6 cols) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="lg:col-span-6 space-y-10"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-emerald-800 text-xs uppercase tracking-[0.4em] font-bold block mb-4">
                The Architect of Your Practice
              </span>
              <h2 className="text-6xl md:text-7xl font-light tracking-tighter leading-none mb-6">
                Aditya Pratap <br />
                <span className="font-serif italic text-emerald-900">Singh</span>
              </h2>
              <p className="text-stone-500 text-xl font-light leading-relaxed max-w-lg">
                Founder and Lead Instructor, specializing in restorative yoga therapy and breath-led movement.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-emerald-700 mt-1"><BookOpen size={20} /></div>
                <div>
                  <h4 className="font-medium text-stone-900 mb-1">Elite Credentials</h4>
                  <p className="text-stone-500 text-sm font-light">M.Sc in Yoga Therapy from S-VYASA. Internationally certified RYT-500 instructor.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-emerald-700 mt-1"><Star size={20} /></div>
                <div>
                  <h4 className="font-medium text-stone-900 mb-1">Philosophy</h4>
                  <p className="text-stone-500 text-sm font-light italic leading-relaxed">
                    "Yoga is not just a posture, but a return to the natural state of equilibrium."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-6 flex items-center gap-8">
              <button className="bg-stone-900 text-stone-50 px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-emerald-900 transition-colors duration-500">
                Read Full Story
              </button>
              
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-white hover:border-emerald-700 hover:text-emerald-700 transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-white hover:border-emerald-700 hover:text-emerald-700 transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>

            {/* Subtle Testimonial Clip */}
            <motion.div variants={fadeInUp} className="pt-10 border-t border-stone-200">
              <Quote className="text-emerald-200 mb-4" size={32} />
              <p className="text-stone-400 text-sm italic font-light leading-relaxed">
                "Training with Aditya transformed my chronic back pain into strength. His clinical approach to yoga therapy is truly world-class."
              </p>
              <p className="text-stone-600 text-[10px] uppercase tracking-widest font-bold mt-4">— Dr. Ananya R., Health Practitioner</p>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}