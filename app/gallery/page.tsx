"use client";

import React, { useState } from "react";
import { Play, Maximize2, Camera, Video } from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "offline",
      title: "Morning Sanctuary",
      size: "large",
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      type: "video",
      category: "online",
      title: "Virtual Flow",
      size: "small",
      url: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      type: "image",
      category: "event",
      title: "International Yoga Day",
      size: "medium",
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      type: "image",
      category: "offline",
      title: "Deep Meditation",
      size: "small",
      url: "https://images.unsplash.com/photo-1510894347713-fc3ad6cb0322?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      type: "video",
      category: "offline",
      title: "Studio Vibe",
      size: "medium",
      url: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      type: "image",
      category: "event",
      title: "Community Wellness",
      size: "large",
      url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <main className="bg-[#FAF9F6] pt-32 pb-24 text-slate-900 font-sans antialiased">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        {/* --- HEADER SECTION --- */}
        <section className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-emerald-700 mb-4 block">
              Visual Narratives
            </span>
            <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter leading-none">
              The{" "}
              <span className="not-italic font-sans font-light">Gallery</span>
            </h1>
          </div>

          {/* --- FILTER TABS --- */}
          <div className="flex flex-wrap gap-4 md:gap-8 border-b border-slate-200 pb-2">
            {["all", "online", "offline", "event"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all pb-2 relative ${
                  filter === tab
                    ? "text-emerald-700"
                    : "text-slate-400 hover:text-slate-900"
                }`}
              >
                {tab}
                {filter === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-700 transition-all" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* --- BENTO GRID GALLERY --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-[2rem] bg-slate-200 transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-900/10 ${
                item.size === "large" ? "md:row-span-2" : ""
              } ${item.size === "medium" ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Image Content */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.url})` }}
              />

              {/* Overlay Shadows */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="flex justify-between items-start">
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold">
                    {item.category}
                  </span>
                  {item.type === "video" ? (
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      <Play size={16} fill="currentColor" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                      <Camera size={16} />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-white text-2xl font-serif italic">
                    {item.title}
                  </h3>
                  <button className="flex items-center gap-2 text-white/70 text-[10px] uppercase tracking-widest hover:text-white transition-colors">
                    View Full Screen <Maximize2 size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- VIDEO SECTION HIGHLIGHT --- */}
        <section className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative">
          <div className="relative z-10 space-y-8 max-w-xl mx-auto">
            <Video
              className="mx-auto text-emerald-500 mb-6"
              size={48}
              strokeWidth={1}
            />
            <h2 className="text-3xl md:text-5xl font-serif italic text-white">
              Experience the Practice
            </h2>
            <p className="text-slate-400 font-light">
              Step inside our sanctuary through our cinematic studio tour and
              student journey videos.
            </p>
            <button className="bg-emerald-700 text-white px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-emerald-600 transition-all">
              Launch Video Player
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/10 rounded-full blur-[100px]" />
        </section>
      </div>
    </main>
  );
}
