"use client";

import React from "react";
import { Quote, Star, MessageSquareQuote } from "lucide-react";

export default function Feedback() {
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Corporate Professional",
      text: "The personalized attention I received at Swashthika transformed my approach to stress. Aditya's traditional methods are easy to follow yet deeply impactful.",
      rating: 5,
    },
    {
      name: "Vikram Mehta",
      role: "Athlete",
      text: "I joined for flexibility, but I stayed for the mental clarity. The hybrid approach of online and offline sessions fits perfectly into my busy schedule.",
      rating: 5,
    },
    {
      name: "Priya Iyer",
      role: "Yoga Beginner",
      text: "As someone who was intimidated by yoga, the beginner-friendly atmosphere here was a breath of fresh air. It's truly a way of life now.",
      rating: 5,
    },
    {
      name: "Siddharth Rao",
      role: "Family Session",
      text: "The family yoga sessions have become our weekly ritual. It's rare to find an instructor who can engage kids and adults with equal grace.",
      rating: 5,
    },
  ];

  return (
    <main className="bg-[#FAF9F6] pt-32 pb-24 text-slate-900 font-sans antialiased">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        {/* --- HEADER SECTION --- */}
        <section className="mb-24 text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-emerald-700 mb-4 block">
            Voices of Balance
          </span>
          <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter leading-tight mb-8">
            Student <span className="not-italic">Experiences</span>
          </h1>
          <p className="text-slate-500 font-light text-lg leading-relaxed">
            The true essence of Swashthika is reflected in the journeys of our
            students. Discover how traditional yoga is shaping modern lives.
          </p>
        </section>

        {/* --- TESTIMONIAL GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`p-10 md:p-14 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${
                i % 2 === 0
                  ? "bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)]"
                  : "bg-emerald-900 text-white"
              }`}
            >
              <div className="mb-10">
                <Quote
                  size={40}
                  className={
                    i % 2 === 0 ? "text-emerald-100" : "text-emerald-700/50"
                  }
                  strokeWidth={1}
                />
                <div className="flex gap-1 mt-6 mb-8">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill="currentColor"
                      className="text-emerald-500 border-none"
                    />
                  ))}
                </div>
                <p
                  className={`text-xl md:text-2xl font-light leading-relaxed italic font-serif`}
                >
                  &quot;{item.text}&quot;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-slate-100/10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold ${
                    i % 2 === 0
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-sm tracking-wide">
                    {item.name}
                  </h4>
                  <p
                    className={`text-[10px] uppercase tracking-widest ${
                      i % 2 === 0 ? "text-slate-400" : "text-emerald-300/60"
                    }`}
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CALL TO ACTION: LEAVE FEEDBACK --- */}
        <section className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white">
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <MessageSquareQuote
              size={48}
              className="mx-auto text-emerald-500 opacity-50"
            />
            <h2 className="text-3xl md:text-5xl font-serif italic">
              Share your journey
            </h2>
            <p className="text-slate-400 font-light text-lg">
              Your feedback helps us grow and inspires others to begin their
              path to wellness.
            </p>
            <button className="bg-white text-slate-900 px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-emerald-500 hover:text-white transition-all duration-500">
              Submit Your Review
            </button>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </section>
      </div>
    </main>
  );
}
