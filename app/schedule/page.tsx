"use client";

import React from "react";
import { scheduleData } from "@/data/schedule";
import {
  Clock,
  Globe,
  Sun,
  Sunrise,
  Sunset,
  User,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Schedule() {
  return (
    <main className="bg-[#FAF9F6] pt-32 pb-24 text-slate-900 font-sans antialiased min-h-screen">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        {/* --- HEADER --- */}
        <section className="mb-20">
          <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-emerald-700 mb-4 block">
            The Rhythm of Practice
          </span>
          <h1 className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-none mb-8">
            Class{" "}
            <span className="not-italic font-sans font-light text-slate-400">
              Schedule
            </span>
          </h1>
          <p className="text-slate-500 font-light text-lg max-w-2xl leading-relaxed">
            All group sessions are conducted online. Timings are listed in{" "}
            <span className="font-medium text-slate-800">
              IST (Indian Standard Time)
            </span>{" "}
            with primary global conversions for our international community.
          </p>
        </section>

        <div className="space-y-32">
          {/* --- BATCH GROUPS --- */}
          {[
            {
              title: "Morning Batches",
              data: scheduleData.morningBatches,
              icon: <Sunrise size={24} className="text-orange-400" />,
              accent: "border-orange-100",
            },
            {
              title: "Daytime Special",
              data: scheduleData.daytimeBatches,
              icon: <Sun size={24} className="text-emerald-500" />,
              accent: "border-emerald-100",
            },
            {
              title: "Evening Batches",
              data: scheduleData.eveningBatches,
              icon: <Sunset size={24} className="text-indigo-400" />,
              accent: "border-indigo-100",
            },
          ].map((section, sIdx) => (
            <section key={sIdx} className="relative">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-serif italic">{section.title}</h2>
                <div className="h-[1px] flex-grow bg-slate-200 ml-4 hidden md:block" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {section.data.map((batch, index) => (
                  <div
                    key={index}
                    className={`group bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]`}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-emerald-700">
                          <Clock size={16} />
                          <span className="text-lg font-bold tracking-tight">
                            {batch.time} IST
                          </span>
                        </div>
                        <h3 className="text-2xl font-serif">
                          {batch.className}
                        </h3>
                        <p className="text-slate-500 font-light text-sm leading-relaxed max-w-xs">
                          {batch.description}
                        </p>
                      </div>

                      <div className="bg-slate-50 rounded-2xl p-6 min-w-[200px] group-hover:bg-emerald-50 transition-colors duration-500">
                        <div className="flex items-center gap-2 mb-3 opacity-50">
                          <Globe size={12} />
                          <span className="text-[9px] uppercase tracking-widest font-bold">
                            Global Timings
                          </span>
                        </div>
                        <div className="space-y-2">
                          {batch.timezones.map((tz, idx) => (
                            <p
                              key={idx}
                              className="text-[11px] text-slate-600 font-medium tracking-tight"
                            >
                              {tz}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {batch.note && (
                      <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2 text-xs text-emerald-600 italic">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {batch.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* --- PERSONAL CLASSES (THE VIP SECTION) --- */}
          <section className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white overflow-hidden relative">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full border border-emerald-500/20">
                  <User size={14} />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                    Bespoke Wellness
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
                  Personal 1-to-1 <br />
                  <span className="not-italic text-slate-400">Sanctuary</span>
                </h2>
                <p className="text-slate-400 font-light text-lg leading-relaxed">
                  Fully flexible, appointment-based sessions designed for those
                  seeking therapy, intensive weight management, or a private
                  practice environment.
                </p>
                <Link
                  href="/join"
                  className="inline-flex items-center gap-4 bg-white text-slate-900 px-8 py-4 rounded-full group hover:bg-emerald-500 hover:text-white transition-all duration-500"
                >
                  <span className="text-xs uppercase tracking-widest font-bold">
                    Request Private Slot
                  </span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Gentle Restorative",
                  "Therapeutic Yoga",
                  "Women's Wellness",
                  "Weight Management",
                  "Deep Relaxation",
                  "Advanced Postures",
                ].map((type, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span className="text-sm font-light tracking-wide">
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
          </section>
        </div>
      </div>
    </main>
  );
}
