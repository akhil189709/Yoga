"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, MessageSquareQuote, ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Feedback() {
  const testimonials = [
    { 
      name: "Ananya Sharma",
      role: "Corporate Professional",
      text: "The personalized attention I received transformed my approach to stress. Aditya's traditional methods are easy to follow yet deeply impactful.",
      rating: 5,
      size: "large" // Bento grid hint
    },
    {
      name: "Vikram Mehta",
      role: "Athlete",
      text: "I joined for flexibility, but I stayed for the mental clarity. The hybrid approach fits my busy schedule perfectly.",
      rating: 5,
      size: "small"
    },
    {
      name: "Priya Iyer",
      role: "Yoga Beginner",
      text: "As someone who was intimidated by yoga, the beginner-friendly atmosphere here was a breath of fresh air.",
      rating: 5,
      size: "small"
    },
    {
      name: "Siddharth Rao",
      role: "Family Session",
      text: "The family yoga sessions have become our weekly ritual. It's rare to find an instructor who can engage kids and adults with equal grace.",
      rating: 5,
      size: "large"
    },
  ];

  return (
    <main className="bg-[#FCFAF7] min-h-screen pt-32 pb-24 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- HERO HEADER --- */}
        <section className="mb-24 relative">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.span variants={fadeIn} className="inline-block px-4 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              Voices of Balance
            </motion.span>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-slate-950 mb-8">
              Real Stories of <br />
              <span className="text-amber-600 italic font-serif font-light">Transformation</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-slate-500 font-medium text-lg md:text-xl leading-relaxed max-w-2xl">
              The true essence of our practice is reflected in the journeys of our students. 
              Discover how traditional yoga is shaping modern lives.
            </motion.p>
          </motion.div>

          {/* Floating Stats Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:flex absolute top-0 right-0 bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-amber-900/10 border border-amber-50 flex-col items-center text-center"
          >
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-amber-500 text-amber-500" />)}
            </div>
            <span className="text-4xl font-black text-slate-950">4.9/5</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Average Rating</span>
          </motion.div>
        </section>

        {/* --- BENTO TESTIMONIAL GRID --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className={`relative p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 border group ${
                item.size === "large" ? "md:col-span-7 bg-slate-950 text-white border-slate-800" : "md:col-span-5 bg-white border-slate-100 shadow-xl shadow-slate-200/40"
              }`}
            >
              <Quote 
                size={60} 
                className={`absolute top-8 right-8 transition-colors ${
                  item.size === "large" ? "text-slate-800 group-hover:text-amber-600/20" : "text-amber-50 group-hover:text-amber-100"
                }`} 
                fill="currentColor" 
              />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="text-amber-500" />
                  ))}
                </div>
                <p className={`text-xl md:text-2xl font-medium leading-relaxed mb-12 ${
                  item.size === "large" ? "text-slate-200" : "text-slate-700"
                }`}>
                  "{item.text}"
                </p>
              </div>

              <div className={`flex items-center gap-4 pt-8 border-t ${
                item.size === "large" ? "border-white/10" : "border-slate-100"
              }`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black shadow-inner ${
                  item.size === "large" ? "bg-amber-600 text-white" : "bg-slate-100 text-slate-900"
                }`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className={`font-bold text-base tracking-tight ${item.size === "large" ? "text-white" : "text-slate-900"}`}>
                    {item.name}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- CALL TO ACTION --- */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-slate-950 rounded-[3.5rem] p-12 md:p-24 text-center text-white shadow-3xl"
        >
          {/* Decorative Mesh Gradient */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-600 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-500 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 border border-white/10 mb-8">
               <MessageSquareQuote size={40} className="text-amber-500" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Share Your <span className="text-amber-500 italic font-serif font-light">Flow</span>
            </h2>
            <p className="text-slate-400 font-medium text-lg mb-10 leading-relaxed">
              Your feedback helps our community grow and inspires others to begin their
              path to holistic wellness.
            </p>
            <button className="group bg-amber-600 text-white px-10 py-5 rounded-2xl text-sm uppercase tracking-widest font-black hover:bg-white hover:text-slate-950 transition-all duration-500 flex items-center gap-3 mx-auto shadow-xl shadow-amber-900/20">
              Submit Your Review
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.section>
      </div>
    </main>
  );
}