"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Play,
  Star,
  Quote,
  Instagram,
  Twitter,
  Facebook,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  Video,
  Users,
  User,
  Heart,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SwashthikaHolistic() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main
      ref={containerRef}
      className="bg-white text-[#1A1A1A] selection:bg-[#E8F3EE] selection:text-emerald-900 overflow-x-hidden font-sans"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-emerald-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* ================= HERO SECTION (HOME) ================= */}
      <section
        id="home"
        className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6">
            <Heart size={14} /> Welcome to Swashthika
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
            Heal Your Body, <br />
            <span className="text-emerald-700 italic font-serif">
              Calm Your Mind.
            </span>
          </h1>
          <p className="text-neutral-500 text-lg mb-10 max-w-md leading-relaxed">
            Personalized Online & Offline Yoga Classes for all age groups.
            Discover the power of traditional yoga with Aditya Pratap Singh.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white group px-8 py-4 rounded-full flex items-center gap-3 font-bold transition-all hover:bg-emerald-900">
              Book Free Demo{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="border border-neutral-200 px-8 py-4 rounded-full flex items-center gap-3 font-bold hover:bg-neutral-50 transition-all">
              Join Yoga for a Healthy Life
            </button>
          </div>
        </motion.div>
        <div className="relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded-[3rem] overflow-hidden bg-[#F1F9F5] aspect-[4/5] relative"
          >
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000"
              className="w-full h-full object-cover"
              alt="Yoga Session"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
              <p className="text-emerald-900 font-serif italic text-lg text-center">
                "Yoga is not exercise, it is a way of life."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section id="about" className="py-32 bg-[#F9FAF9] px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1000"
              className="rounded-3xl h-64 w-full object-cover mt-12"
              alt="Practice"
            />
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000"
              className="rounded-3xl h-64 w-full object-cover"
              alt="Meditation"
            />
          </div>
          <div>
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
              About Swashthika Holistic Health
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Founded by <strong>Aditya Pratap Singh</strong>, an M.Sc in Yoga &
              Therapy with over 8 years of experience. We provide a space where
              yoga is taught with care, clarity, and purpose.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Certified & Experienced (M.Sc, B.Sc Yoga)",
                "Male & Female Instructors Available",
                "Personalized Attention",
                "Ayurvedic Lifestyle Guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium"
                >
                  <CheckCircle2 className="text-emerald-600" size={18} /> {item}
                </div>
              ))}
            </div>
            <div className="p-8 bg-white rounded-2xl border border-emerald-100 shadow-sm">
              <h4 className="font-bold mb-2">Our Mission</h4>
              <p className="text-sm text-neutral-500 italic">
                "We guide progress — gently and naturally. Creating balance in
                body, mind, and breath."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES & PRICING ================= */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Yoga Services & Pricing
          </h2>
          <p className="text-neutral-400">
            Choose the path that fits your lifestyle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Offline Pricing */}
          <div className="bg-emerald-50/50 p-10 rounded-[3rem] border border-emerald-100">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="text-emerald-700" />
              <h3 className="text-2xl font-bold">
                Offline Classes (Delhi/NCR)
              </h3>
            </div>
            <div className="space-y-6">
              <PricingItem
                title="Personal Yoga (1-to-1)"
                price="₹6,000"
                sub="8 Classes"
                list={["Posture Correction", "Flexible Timing"]}
              />
              <PricingItem
                title="Couple Yoga"
                price="₹8,000"
                sub="8 Classes"
                list={["Bonding & Wellness", "Home Comfort"]}
              />
              <PricingItem
                title="Group Yoga"
                price="₹2,500"
                sub="12 Classes"
                list={["Small Batch Size", "Affordable"]}
              />
            </div>
          </div>

          {/* Online Pricing */}
          <div className="bg-white p-10 rounded-[3rem] border border-neutral-100 shadow-xl shadow-emerald-900/5">
            <div className="flex items-center gap-3 mb-8">
              <Video className="text-emerald-700" />
              <h3 className="text-2xl font-bold">Online Live Sessions</h3>
            </div>
            <div className="space-y-6">
              <PricingItem
                title="Personal Yoga (1-to-1)"
                price="₹4,000"
                sub="8 Classes"
                list={["Live Video", "Global Access"]}
              />
              <PricingItem
                title="Couple Yoga"
                price="₹5,000"
                sub="8 Classes"
                list={["Train Together", "Flexible"]}
              />
              <PricingItem
                title="Group Yoga"
                price="₹1,800"
                sub="12 Classes"
                list={["Live Groups", "Cost-effective"]}
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center p-8 bg-black text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-2xl font-bold">Start with a FREE Demo</h4>
            <p className="text-white/60 text-sm">
              Experience our teaching before you commit.
            </p>
          </div>
          <button className="bg-emerald-500 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Book Your Free Trial
          </button>
        </div>
      </section>

      {/* ================= SCHEDULE ================= */}
      <section
        id="schedule"
        className="py-32 bg-[#1A1A1A] text-white px-6 md:px-12 rounded-[4rem] mx-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
                Global Timings
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mt-4">
                Batch Schedule
              </h2>
            </div>
            <p className="text-neutral-400 max-w-sm">
              Serving clients across India, USA (EST/PST), and UK. Times listed
              in IST.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScheduleCard
              time="06:00 AM"
              title="Gentle Flow"
              zones="USA (EST): 7:30 PM | USA (PST): 4:30 PM"
              tag="Beginner Friendly"
            />
            <ScheduleCard
              time="07:00 AM"
              title="Traditional Hatha"
              zones="USA (EST): 8:30 PM | USA (PST): 5:30 PM"
              tag="Most Popular"
            />
            <ScheduleCard
              time="11:00 AM"
              title="Women's Wellness"
              zones="UK: 05:30 AM | Perfect for Housewives"
              tag="Specialty"
            />
            <ScheduleCard
              time="05:00 PM"
              title="Ladies Balance"
              zones="UK: 11:30 AM | USA (EST): 6:30 AM"
              tag="Strength"
            />
            <ScheduleCard
              time="07:30 PM"
              title="Full Body Relaxation"
              zones="UK: 2:00 PM | USA (EST): 9:00 AM"
              tag="International Gold Batch"
            />
            <div className="p-8 border border-white/10 rounded-3xl flex flex-col justify-center items-center text-center bg-white/5">
              <Clock className="text-emerald-400 mb-4" size={32} />
              <h4 className="font-bold text-xl mb-2">Personal 1-to-1</h4>
              <p className="text-sm text-neutral-400">
                Fully flexible & appointment-based per your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT & FORM ================= */}
      <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-neutral-500 mb-12">
              Start your journey towards a healthier, balanced life. Reach out
              via call, WhatsApp, or the form.
            </p>

            <div className="space-y-8">
              <ContactInfo
                icon={<Phone />}
                title="Call / WhatsApp"
                detail="+91-YOUR-NUMBER"
              />
              <ContactInfo
                icon={<Mail />}
                title="Email Address"
                detail="hello@swashthika.com"
              />
              <div className="flex gap-4 pt-6">
                <div className="p-3 rounded-full border border-neutral-100 hover:bg-emerald-50 cursor-pointer transition-colors">
                  <Instagram />
                </div>
                <div className="p-3 rounded-full border border-neutral-100 hover:bg-emerald-50 cursor-pointer transition-colors">
                  <Facebook />
                </div>
                <div className="p-3 rounded-full border border-neutral-100 hover:bg-emerald-50 cursor-pointer transition-colors">
                  <Twitter />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-neutral-100 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Joining Form</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border-none outline-none focus:ring-2 ring-emerald-200"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border-none outline-none focus:ring-2 ring-emerald-200"
                />
              </div>
              <select className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border-none outline-none focus:ring-2 ring-emerald-200 text-neutral-500">
                <option>Select Class Type</option>
                <option>Online Personal</option>
                <option>Online Group</option>
                <option>Offline Personal</option>
              </select>
              <textarea
                placeholder="Any health concerns or goals?"
                rows={4}
                className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border-none outline-none focus:ring-2 ring-emerald-200"
              ></textarea>
              <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold hover:bg-emerald-700 transition-colors">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

// ================= SUB COMPONENTS =================

function PricingItem({ title, price, sub, list }: any) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-neutral-50 hover:border-emerald-200 transition-colors">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="font-bold text-lg">{title}</h4>
          <span className="text-xs text-emerald-600 font-bold uppercase">
            {sub}
          </span>
        </div>
        <div className="text-2xl font-bold text-neutral-800">{price}</div>
      </div>
      <div className="flex gap-4 flex-wrap">
        {list.map((item: string) => (
          <span
            key={item}
            className="text-[10px] bg-neutral-50 px-3 py-1 rounded-full text-neutral-500 font-bold uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ScheduleCard({ time, title, zones, tag }: any) {
  return (
    <div className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors group">
      <div className="flex justify-between items-start mb-6">
        <span className="text-emerald-400 font-mono text-xl">{time}</span>
        <span className="text-[10px] font-bold uppercase tracking-tighter bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>
      <h4 className="text-2xl font-bold mb-3">{title}</h4>
      <p className="text-sm text-neutral-500 leading-relaxed">{zones}</p>
    </div>
  );
}

function ContactInfo({ icon, title, detail }: any) {
  return (
    <div className="flex gap-6 items-center">
      <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-sm uppercase tracking-widest text-neutral-400">
          {title}
        </h4>
        <p className="text-lg font-medium">{detail}</p>
      </div>
    </div>
  );
}
