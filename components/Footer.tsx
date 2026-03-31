"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: <Instagram size={18} />, href: "#" },
    { name: "Facebook", icon: <Facebook size={18} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={18} />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, href: "#" },
  ];

  return (
    <footer className="relative bg-[#0A0A0B] text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* BACKGROUND TEXT DECORATION */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none tracking-tighter italic font-serif">
        Yogic Hours
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* BRAND COLUMN (4 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex flex-col group w-fit">
              <span className="text-3xl font-bold tracking-tighter leading-none group-hover:text-amber-500 transition-colors">
                Yogic Hours
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold leading-none mt-2">
                Holistic Wellness
              </span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-sm">
              Preserving the authentic essence of traditional yoga for the
              modern soul. Join us in the journey of self-discovery.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-amber-600 hover:border-amber-600 transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS GRID (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            
            {/* NAVIGATION */}
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-black">
                Navigation
              </h4>
              <ul className="space-y-4">
                {["Home", "About Us", "Services", "Schedule", "Gallery"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "")}`}
                      className="text-slate-400 hover:text-white text-sm font-bold transition-all duration-300 flex items-center group"
                    >
                      {item}
                      <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all text-amber-500" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-black">
                Connect
              </h4>
              <div className="space-y-4">
                <a href="mailto:hello@swashthika.com" className="group block">
                  <p className="text-[10px] uppercase tracking-widest text-slate-600 font-bold mb-1">Inquiry</p>
                  <p className="text-sm font-bold text-slate-300 group-hover:text-amber-500 transition-colors">hello@swashthika.com</p>
                </a>
                <div className="group block">
                  <p className="text-[10px] uppercase tracking-widest text-slate-600 font-bold mb-1">Studio</p>
                  <p className="text-sm font-bold text-slate-300 leading-relaxed">
                    123 Wellness Circle,<br />Bangalore, KA 560001
                  </p>
                </div>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-black">
                Newsletter
              </h4>
              <p className="text-slate-400 text-xs font-bold leading-relaxed">
                Rituals & updates directly to your inbox.
              </p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[10px] tracking-widest focus:outline-none focus:border-amber-500 transition-all font-bold placeholder:text-slate-600"
                />
                <button className="mt-3 w-full py-3 bg-amber-600 hover:bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
              &copy; {currentYear} Swashthika. Design by Aditya.
            </p>
          </div>
          
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((legal) => (
              <Link
                key={legal}
                href={`/${legal.toLowerCase().replace(/ /g, "-")}`}
                className="text-[10px] uppercase tracking-[0.2em] text-slate-500 hover:text-white font-bold transition-colors"
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