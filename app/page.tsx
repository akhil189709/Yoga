"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, Star, Quote, CircleCheck as CheckCircle2,
  Clock, MapPin, Phone, Mail, Calendar, Users, Heart,
  Leaf, Smartphone, Globe, Award, ShieldCheck,
  Zap,
  Target,
  CloudRain,
  UserCheck,
  HeartPulse,
  Sparkles,
  Wifi,
  Video,
  User,
  Instagram,
  Facebook,
  Youtube,
  Moon,
  Sun,
  Wind,
  Flame
} from "lucide-react";
import Link from "next/link";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="bg-[#FDFDFD] text-slate-900 overflow-x-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex flex-col lg:flex-row items-stretch bg-white overflow-hidden">

        {/* LEFT CONTENT - Text & CTA */}
        <div className="flex-1 flex items-start lg:items-center justify-center px-6 md:px-12 lg:px-24 xl:px-32 z-10 h-1/2 lg:h-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-xl w-full mt-20 md:mt-20 lg:mt-42 py-8 lg:py-0"
          >
            <motion.span
              variants={fadeIn}
              className="block text-xs md:text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-2 md:mb-4"
            >
              Online Yoga Classes
            </motion.span>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tighter text-slate-950 leading-[1.05] mb-4 md:mb-6"
            >
              Find Inner Peace <br />
              <span className="text-amber-600">Through Yoga</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-base md:text-lg text-slate-500 mb-6 md:mb-8 leading-relaxed font-medium max-w-md"
            >
              Embark on a transformative journey where yoga invites you to experience profound calmness and mental clarity like never before.
            </motion.p>

            {/* PILL BUTTON */}
            <motion.div variants={fadeIn} className="mb-8 md:mb-10">
              <Link
                href="#demo"
                className="inline-flex items-center gap-3 bg-slate-950 hover:bg-amber-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all group shadow-xl shadow-slate-200"
              >
                Get started for free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* SOCIAL PROOF */}
            <motion.div variants={fadeIn} className="space-y-2 md:space-y-3">
              <p className="text-[10px] md:text-xs font-bold text-slate-400 flex items-center gap-1 uppercase tracking-wider">
                Join 50+ satisfied yogis ✨
              </p>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                    <img
                      src={`https://i.pravatar.cc/150?u=${i + 20}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-slate-950 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                  +50
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE - FULL BLEED */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex-1 relative h-1/2 lg:h-full"
        >
          <div className="absolute inset-0 bg-[#E8E4E1]">
            <img
              src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1920&dpr=2"
              alt="Yoga Practitioner"
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute inset-0 bg-amber-900/5 mix-blend-multiply pointer-events-none" />
        </motion.div>

      </section>

      {/* --- PHILOSOPHY & GOALS --- */}
      <section className="py-24 md:py-32 px-6 bg-[#FCFAF7] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT: TEXT & STAGGERED LIST */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="relative z-10"
            >
              <motion.div variants={fadeIn} className="inline-block px-4 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-6">
                Our Philosophy
              </motion.div>

              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tighter"
              >
                Elevate Your <span className="text-amber-600 italic font-serif font-light">Wellbeing</span>
              </motion.h2>

              <motion.p
                variants={fadeIn}
                className="text-slate-500 mb-10 text-xl border-l-4 border-amber-500 pl-6 italic"
              >
                “Yoga is not exercise, it is a way of life.”
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Flexibility & Strength", icon: <Zap size={20} /> },
                  { title: "Weight Management", icon: <Target size={20} /> },
                  { title: "Stress Relief", icon: <CloudRain size={20} /> },
                  { title: "Better Posture", icon: <UserCheck size={20} /> },
                  { title: "Health Support", icon: <HeartPulse size={20} /> },
                  { title: "Personal Guidance", icon: <Sparkles size={20} /> }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    whileHover={{ y: -5, backgroundColor: "#fff", boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" }}
                    className="group flex items-center gap-4 p-4 bg-white/50 border border-slate-100 rounded-2xl transition-all cursor-default"
                  >
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-tight">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT CONTENT: INTERACTIVE IMAGE COMPOSITION */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Background Elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-200/30 rounded-full blur-[100px]" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-slate-200/50 rounded-full blur-[80px]" />

              {/* Floating Highlight Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 md:left-0 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-amber-50 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white">
                    <Star fill="currentColor" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Success Rate</p>
                    <p className="text-xl font-black text-slate-900">99.9% Positive</p>
                  </div>
                </div>
              </motion.div>

              {/* Main Image with 3D-like Shadow */}
              <div className="relative group">
                <div className="absolute inset-0 bg-amber-600 rounded-[2.5rem] rotate-3 scale-95 opacity-20 group-hover:rotate-6 transition-transform duration-500" />
                <img
                  src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1920&dpr=2"
                  alt="Deep Yoga Practice"
                  className="relative rounded-[2.5rem] shadow-2xl z-10 w-full h-[500px] md:h-[650px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Experience Tag */}
              <div className="absolute bottom-10 right-10 bg-slate-950 text-white p-8 rounded-2xl z-20 shadow-2xl">
                <p className="text-4xl font-bold text-amber-500">10+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Years of <br /> Mastery</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- MEET THE FOUNDER & OUR TEAM --- */}
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Guiding Lights</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-950">
              Mastery Behind <span className="text-amber-600 italic font-serif font-light">Your Journey</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* LEFT: FOUNDER FEATURE (Takes 5 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 sticky top-32"
            >
              <div className="relative group">
                {/* Decorative frame behind image */}
                <div className="absolute -inset-4 border border-amber-200 rounded-[2rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />

                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
                  <img
                    src="https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Aditya Pratap Singh"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Founder Label Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-slate-950">Aditya Pratap Singh</h3>
                    <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Founder & Lead Therapist</p>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex gap-8 mt-10 px-4">
                <div>
                  <p className="text-3xl font-black text-slate-950">8+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years Exp.</p>
                </div>
                <div className="w-px h-10 bg-slate-200 self-center" />
                <div>
                  <p className="text-3xl font-black text-slate-950">M.Sc.</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Yoga Therapy</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: BIO & THE TEAM GRID (Takes 7 columns) */}
            <div className="lg:col-span-7 space-y-16">

              {/* Founder Bio Block */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-[#FCFAF7] p-8 md:p-12 rounded-[2.5rem] border border-amber-100/50"
              >
                <Quote className="text-amber-200 mb-6" size={40} fill="currentColor" />
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium italic mb-8">
                  "With an M.Sc. in Yoga & Therapy and a B.Sc. in Yoga, my mission is to bridge the gap between traditional ancient wisdom and modern holistic health management."
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { label: "Personalized", desc: "Adaptive to your body" },
                    { label: "Traditional", desc: "Ancient Vedic roots" },
                    { label: "Holistic", desc: "Body, Mind & Soul" }
                  ].map((trait, i) => (
                    <div key={i} className="space-y-1">
                      <h4 className="font-bold text-slate-950 text-sm">{trait.label}</h4>
                      <p className="text-xs text-slate-500 font-medium">{trait.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* TEAM GRID SUB-SECTION */}
              <div>
                <h3 className="text-2xl font-bold text-slate-950 mb-8 flex items-center gap-3">
                  Our Specialist Team <span className="h-px flex-1 bg-slate-100" />
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { name: "Support Professionals", role: "Holistic Health Guides", img: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400" },
                    { name: "Therapy Experts", role: "Yoga & Breathwork Specialists", img: "https://images.pexels.com/photos/3759656/pexels-photo-3759656.jpeg?auto=compress&cs=tinysrgb&w=400" }
                  ].map((member, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="group relative rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-5">
                        <h4 className="font-bold text-slate-950">{member.name}</h4>
                        <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mt-1">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES & PRICING --- */}
      <section className="py-24 md:py-32 px-6 bg-[#FCFAF7] overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADER */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              Your Path, Your Choice
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-950"
            >
              Our Services & <span className="text-amber-600 italic font-serif font-light">Pricing</span>
            </motion.h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">
              Premium holistic experiences tailored for both physical presence and digital convenience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* --- OFFLINE SECTION (WARM/GOLD THEME) --- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 pb-4 border-b border-amber-200/50">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Offline Classes</h3>
                  <p className="text-sm text-amber-700 font-semibold uppercase tracking-wider">In-Person Mastery</p>
                </div>
              </div>

              <div className="grid gap-6">
                <PricingTier
                  title="Personal Yoga"
                  subtitle="1-to-1 Specialized Attention"
                  options={["8 Classes: ₹6,000", "12 Classes: ₹8,000", "20 Classes: ₹12,000"]}
                  icon={<User size={22} />}
                  theme="light"
                />
                <PricingTier
                  title="Couple Yoga"
                  subtitle="Harmony for Two"
                  options={["8 Classes: ₹8,000", "12 Classes: ₹10,000", "20 Classes: ₹15,000"]}
                  icon={<Heart size={22} />}
                  theme="light"
                />
                <PricingTier
                  title="Group Yoga"
                  subtitle="Community Practice"
                  options={["12 Classes: ₹2,500", "20 Classes: ₹3,500"]}
                  icon={<Users size={22} />}
                  theme="light"
                />
              </div>
            </motion.div>

            {/* --- ONLINE SECTION (DARK/SLEEK THEME) --- */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-amber-500 shadow-lg">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Online Live</h3>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Global Accessibility</p>
                </div>
              </div>

              <div className="grid gap-6">
                <PricingTier
                  title="Personal Online"
                  subtitle="Digital Private Sessions"
                  options={["8 Classes: ₹4,000", "12 Classes: ₹6,000", "20 Classes: ₹9,000"]}
                  icon={<Smartphone size={22} />}
                  theme="dark"
                />
                <PricingTier
                  title="Couple Online"
                  subtitle="Virtual Connection"
                  options={["8 Classes: ₹5,000", "12 Classes: ₹7,000", "20 Classes: ₹11,000"]}
                  icon={<Wifi size={22} />}
                  theme="dark"
                />
                <PricingTier
                  title="Group Online"
                  subtitle="Live Collective Energy"
                  options={["12 Classes: ₹1,800", "20 Classes: ₹2,800"]}
                  icon={<Video size={22} />}
                  theme="dark"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>



      {/* --- SCHEDULE SECTION --- */}
      <section className="py-24 md:py-32 px-4 md:px-10 bg-[#0A0A0B] overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* HEADER WITH GLOBAL PULSE */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-2xl"
            >
              <span className="flex items-center gap-2 text-amber-500 font-bold tracking-[0.3em] text-xs uppercase mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Global Live Batches
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                Online Group <span className="text-amber-500 italic font-serif font-light">Schedule</span>
              </h2>
              <p className="text-slate-400 mt-6 text-lg leading-relaxed">
                Designed for the modern yogi across India, USA, and UK. Experience the collective energy of a live class, no matter where you are.
              </p>
            </motion.div>

            <div className="flex gap-3">
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">IST (India)</div>
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">EST/PST (USA)</div>
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">GMT (UK)</div>
            </div>
          </div>

          {/* BATCH GRID */}
          <div className="space-y-20">

            {/* MORNING SEGMENT */}
            <motion.div initial="hidden" whileInView="visible" variants={stagger}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Sun size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Morning Vitality Batches</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScheduleCard
                  time="06:00" period="AM IST"
                  title="Gentle Flow Yoga"
                  zones="USA (EST): 7:30 PM | USA (PST): 4:30 PM"
                  category="Healing & Seniors"
                  icon={<Wind className="text-blue-400" />}
                />
                <ScheduleCard
                  time="07:00" period="AM IST"
                  title="Traditional Hatha"
                  zones="USA (EST): 8:30 PM | USA (PST): 5:30 PM"
                  category="Discipline & Asana"
                  featured={true}
                  icon={<Flame className="text-orange-500" />}
                />
                <ScheduleCard
                  time="08:00" period="AM IST"
                  title="Morning Refresh"
                  zones="USA (EST): 9:30 PM | USA (PST): 6:30 PM"
                  category="Energy & Flexibility"
                  icon={<Zap className="text-amber-400" />}
                />
              </div>
            </motion.div>

            {/* EVENING SEGMENT */}
            <motion.div initial="hidden" whileInView="visible" variants={stagger}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <Moon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Daytime & Evening Balance</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ScheduleCard
                  time="11:00" period="AM IST" title="Women's Wellness"
                  zones="UK: 5:30 AM | Perfect for Housewives"
                  category="Hormonal Balance"
                />
                <ScheduleCard
                  time="17:00" period="PM IST" title="Ladies Balance"
                  zones="UK: 11:30 AM | USA: 06:30 AM"
                  category="Core Strength"
                />
                <ScheduleCard
                  time="18:30" period="PM IST" title="Evening Energy"
                  zones="UK: 01:00 PM | USA: 08:00 AM"
                  category="Mobility"
                />
                <ScheduleCard
                  time="19:30" period="PM IST" title="Full Body Relax"
                  zones="UK: 02:00 PM | USA: 09:00 AM"
                  category="Deep Calm"
                  featured={true}
                />
              </div>
            </motion.div>

          </div>

          {/* 1-TO-1 PREMIUM BANNER */}
          <motion.div
            whileHover={{ y: -5 }}
            className="mt-24 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-slate-900 to-black border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] -z-10" />
            <div className="text-center lg:text-left">
              <h4 className="text-3xl font-bold text-white mb-4 italic font-serif">Seeking something more personal?</h4>
              <p className="text-slate-400 max-w-xl text-lg">
                Our **1-to-1 Premium Classes** are appointment-based. Ideal for specialized therapy, chronic pain, and fast-track weight management.
              </p>
            </div>
            <Link
              href="https://wa.me/+919557729533"
              className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 rounded-2xl transition-all font-bold text-lg shadow-xl shadow-amber-900/20 flex items-center gap-3"
            >
              Book Private Session <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>




      {/* --- REVIEWS & TESTIMONIALS --- */}
      <section className="py-24 md:py-32 px-6 bg-[#FCFAF7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8 text-center md:text-left">
            <div>
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-amber-600 font-bold tracking-widest uppercase text-xs">Community Feedback</motion.span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-950 mt-2">
                Student <span className="font-serif italic text-amber-600 font-light">Stories</span>
              </h2>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} className="fill-amber-500 text-amber-500" />)}
              </div>
              <p className="text-slate-950 font-black text-2xl">4.9/5 <span className="text-slate-400 font-medium text-lg">Rating</span></p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ananya Sharma", role: "Corporate Professional", text: "The personalized attention transformed my approach to stress. The traditional methods are deeply impactful." },
              { name: "Vikram Mehta", role: "Athlete", text: "I joined for flexibility, but stayed for mental clarity. The hybrid approach fits perfectly into my busy schedule." },
              { name: "Priya Iyer", role: "Yoga Beginner", text: "As a beginner, I was intimidated, but the atmosphere here is so welcoming. It's truly a way of life now." }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative group"
              >
                <Quote className="absolute top-8 right-8 text-amber-100 group-hover:text-amber-200 transition-colors" size={40} fill="currentColor" />
                <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${testimonial.name}`} alt={testimonial.name} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950">{testimonial.name}</h4>
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT & JOIN FORM --- */}
      <section id="demo" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Decorative background shape */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-50 rounded-full blur-3xl -z-10" />

          <div className="bg-slate-950 rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-12 items-stretch min-h-[700px]">

            {/* LEFT SIDE: INFO (40%) */}
            <div className="lg:col-span-5 p-12 md:p-16 bg-gradient-to-br from-slate-900 to-black text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                  Start Your <br /><span className="text-amber-500 italic font-serif font-light">Journey Today</span>
                </h2>
                <p className="text-slate-400 mb-12 text-lg leading-relaxed">
                  Book your **FREE Demo Class** or reach out to us for a personalized health consultation.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-600 transition-all">
                      <Phone size={20} className="text-amber-500 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Call Us</p>
                      <span className="text-lg font-medium">+91 95577 29533</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-600 transition-all">
                      <Mail size={20} className="text-amber-500 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email</p>
                      <span className="text-lg font-medium">hello@yogichours.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-slate-500 text-sm">Follow the flow</p>
                <div className="flex gap-4 mt-4">
                  {/* Simple Social Icons */}
                  <Instagram size={24} className="text-white hover:text-amber-500 cursor-pointer" />
                  <Facebook size={24} className="text-white hover:text-amber-500 cursor-pointer" />
                  <Youtube size={24} className="text-white hover:text-amber-500 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: FORM (60%) */}
            <div className="lg:col-span-7 p-12 md:p-16 bg-white">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Name</label>
                    <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Phone</label>
                    <input type="tel" placeholder="+91..." className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email</label>
                  <input type="email" placeholder="email@address.com" className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Goal</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-500 appearance-none">
                    <option>Select Interest</option>
                    <option>Personal Online</option>
                    <option>Offline Yoga</option>
                    <option>Therapy Session</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                  <textarea placeholder="Tell us about your health goals..." rows={3} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"></textarea>
                </div>

                <button className="w-full py-5 bg-slate-950 text-white rounded-2xl font-bold text-lg hover:bg-amber-600 transition-all shadow-xl shadow-slate-200 group flex items-center justify-center gap-3">
                  Join the Yoga Journey
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}

// --- HELPER COMPONENTS ---

{/* --- REUSABLE COMPONENT FOR PRICING TIER --- */ }
{/* --- REUSABLE SCHEDULE CARD COMPONENT --- */ }
function ScheduleCard({ time, period, title, zones, category, featured, icon }) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -10, borderColor: 'rgba(245, 158, 11, 0.5)' }}
      className={`relative p-8 rounded-[2rem] border transition-all duration-500 group overflow-hidden ${featured ? 'bg-white/10 border-amber-500/30 shadow-2xl shadow-amber-900/10' : 'bg-white/5 border-white/10'
        }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 bg-amber-600 text-[10px] font-black text-white px-3 py-1 rounded-full uppercase tracking-tighter animate-pulse">
          Popular Batch
        </div>
      )}

      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-black text-white tracking-tighter">{time}</span>
          <span className="text-xs font-bold text-amber-500">{period}</span>
        </div>
        <div className="opacity-40 group-hover:opacity-100 transition-opacity">
          {icon || <Clock size={20} className="text-slate-400" />}
        </div>
      </div>

      <h4 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-amber-500 transition-colors">{title}</h4>
      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">{category}</p>

      <div className="pt-6 border-t border-white/5 mt-auto">
        <p className="text-[11px] font-medium text-slate-400 leading-relaxed italic">
          {zones}
        </p>
      </div>
    </motion.div>
  )
}


function PricingTier({ title, subtitle, options, icon, theme }) {
  const isDark = theme === "dark";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-6 md:p-8 rounded-[2rem] transition-all border ${isDark
        ? "bg-slate-950 border-slate-800 shadow-2xl"
        : "bg-white border-amber-100 shadow-xl shadow-amber-900/5"
        }`}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-4 items-center">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-600"
            }`}>
            {icon}
          </div>
          <div>
            <h4 className={`font-bold text-lg ${isDark ? "text-white" : "text-slate-900"}`}>{title}</h4>
            <p className="text-xs font-medium text-slate-500">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {options.map((price, idx) => (
          <div
            key={idx}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition-colors ${isDark
              ? "border-slate-800 text-slate-300 hover:bg-amber-600 hover:text-white"
              : "border-amber-100 text-amber-700 hover:bg-amber-600 hover:text-white"
              }`}
          >
            {price}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function PriceCard({ title, prices, icon, color = "emerald" }) {
  const isEmerald = color === "emerald";
  return (
    <div className={`p-6 rounded-2xl border ${isEmerald ? "bg-emerald-50/30 border-emerald-100" : "bg-blue-50/30 border-blue-100"}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${isEmerald ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}`}>{icon}</div>
        <h4 className="font-bold text-slate-800">{title}</h4>
      </div>
      <ul className="space-y-2">
        {prices.map((p, idx) => (
          <li key={idx} className="text-slate-600 text-sm flex items-center justify-between">
            {p.split(':')[0]} <span className="font-bold text-slate-900">{p.split(':')[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// function ScheduleCard({ time, title, desc, category, featured }) {
//   return (
//     <div className={`p-8 rounded-3xl border transition-all ${featured ? 'bg-emerald-800 border-emerald-600 shadow-2xl scale-105' : 'bg-slate-800/50 border-slate-700'}`}>
//       <span className="text-xs font-bold uppercase text-emerald-400 mb-2 block">{category}</span>
//       <div className="flex items-center gap-2 text-xl font-mono mb-4">
//         <Clock size={18} className="text-emerald-400" />
//         {time}
//       </div>
//       <h3 className="text-xl font-medium mb-2">{title}</h3>
//       <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
//     </div>
//   );
// }

function TestimonialCard({ name, role, text }) {
  return (
    <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all">
      <Quote className="text-emerald-200 mb-6" size={32} />
      <p className="text-slate-700 italic mb-8 leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">{name.charAt(0)}</div>
        <div>
          <h4 className="font-bold text-slate-900">{name}</h4>
          <p className="text-xs text-slate-500 uppercase tracking-tighter">{role}</p>
        </div>
      </div>
    </div>
  );
}