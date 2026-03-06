"use client";

import React from "react";
import Link from "next/link";
// Importing real icons from Lucide
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: <Instagram size={16} />, href: "#" },
    { name: "Facebook", icon: <Facebook size={16} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={16} />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin size={16} />, href: "#" },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col group w-fit">
              <span className="text-2xl font-serif italic tracking-tighter leading-none">
                Swashthika
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-500 font-medium leading-none mt-1 ml-0.5">
                Holistic Wellness
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-light max-w-xs">
              Preserving the authentic essence of traditional yoga for the
              modern soul. Join us in the journey of self-discovery.
            </p>

            {/* REAL SOCIAL LOGOS */}
            <div className="flex gap-5 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-emerald-500 font-semibold italic">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Schedule", "Gallery"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "")}`}
                      className="text-slate-400 hover:text-white text-sm font-light transition-colors duration-300 flex items-center group"
                    >
                      {item}
                      <ArrowUpRight
                        size={12}
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500"
                      />
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* CONTACT DETAIL */}
          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-emerald-500 font-semibold italic">
              Connect
            </h4>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-bold">
                  Inquiry
                </p>
                <p className="text-sm font-light group-hover:text-emerald-400 transition-colors border-b border-transparent group-hover:border-emerald-400 inline-block pb-1">
                  hello@swashthika.com
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-bold">
                  Studio
                </p>
                <p className="text-sm font-light leading-relaxed text-slate-300">
                  123 Wellness Circle, Zen District <br />
                  Bangalore, KA 560001
                </p>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-emerald-500 font-semibold italic">
              The Journal
            </h4>
            <p className="text-slate-400 text-sm font-light">
              Receive curated mindfulness rituals and studio updates.
            </p>
            <div className="relative group max-w-[240px]">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-slate-700 py-3 text-[11px] tracking-widest focus:outline-none focus:border-emerald-500 transition-colors font-light placeholder:text-slate-600"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.2em] text-emerald-500 font-bold hover:text-white transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-medium">
              &copy; {currentYear} Swashthika. Handcrafted for Wellness.
            </p>
          </div>
          <div className="flex gap-10">
            {["Privacy", "Terms"].map((legal) => (
              <Link
                key={legal}
                href={`/${legal.toLowerCase()}`}
                className="text-[9px] uppercase tracking-[0.3em] text-slate-500 hover:text-emerald-400 transition-colors"
              >
                {legal}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
