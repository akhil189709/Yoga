"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Star,
  Quote,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  Heart,
  Leaf,
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="bg-gradient-to-b from-[#F5F9F7] to-white">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-6 pt-20">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-emerald-100">
              <Leaf className="text-emerald-600" size={18} />
              <span className="text-sm font-medium text-slate-700">
                Transform Your Life Through Yoga
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-slate-900"
            >
              Find Your <br />
              <span className="font-serif italic text-emerald-700">
                Inner Peace
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Experience the transformative power of traditional yoga practices
              designed for modern life. Join our community and discover balance,
              strength, and serenity.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <Link
                href="/join"
                className="group bg-emerald-600 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Your Journey
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/schedule"
                className="group bg-white text-slate-700 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg border border-slate-200"
              >
                <Calendar size={20} />
                View Schedule
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { value: "1000+", label: "Happy Students" },
                { value: "8+", label: "Years Experience" },
                { value: "50+", label: "Classes Weekly" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-light text-emerald-700">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 text-emerald-600 mb-4">
              <div className="w-8 h-[1px] bg-emerald-600" />
              <span className="text-sm uppercase tracking-wider font-medium">
                Our Classes
              </span>
              <div className="w-8 h-[1px] bg-emerald-600" />
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-light text-slate-900 mb-4"
            >
              Explore Our <span className="font-serif italic">Offerings</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-slate-600 max-w-2xl mx-auto">
              From beginner-friendly sessions to advanced practices, find the
              perfect class for your journey
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gentle Flow",
                description: "Perfect for beginners seeking peace and flexibility",
                time: "60 min",
                level: "Beginner",
                icon: <Leaf />,
                color: "emerald",
              },
              {
                title: "Hatha Yoga",
                description: "Traditional practice combining postures and breath",
                time: "75 min",
                level: "All Levels",
                icon: <Heart />,
                color: "blue",
              },
              {
                title: "Power Yoga",
                description: "Dynamic flow building strength and stamina",
                time: "90 min",
                level: "Intermediate",
                icon: <Users />,
                color: "purple",
              },
            ].map((classItem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform`}>
                  {classItem.icon}
                </div>
                <h3 className="text-2xl font-light mb-3 text-slate-900">
                  {classItem.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {classItem.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{classItem.level}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              View Full Schedule
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Instructor Profiles */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 text-emerald-600 mb-4">
              <div className="w-8 h-[1px] bg-emerald-600" />
              <span className="text-sm uppercase tracking-wider font-medium">
                Meet Our Team
              </span>
              <div className="w-8 h-[1px] bg-emerald-600" />
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-light text-slate-900"
            >
              Expert <span className="font-serif italic">Instructors</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aditya Pratap Singh",
                title: "Founder & Lead Instructor",
                credentials: "M.Sc Yoga Therapy, 8+ Years",
                image:
                  "https://images.pexels.com/photos/8401336/pexels-photo-8401336.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                name: "Priya Sharma",
                title: "Hatha Yoga Specialist",
                credentials: "Certified RYT-500",
                image:
                  "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                name: "Rahul Verma",
                title: "Power Yoga Expert",
                credentials: "International Certified",
                image:
                  "https://images.pexels.com/photos/8401220/pexels-photo-8401220.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
            ].map((instructor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-6">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-medium text-slate-900 mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-emerald-600 text-sm mb-2">
                    {instructor.title}
                  </p>
                  <p className="text-slate-500 text-sm">{instructor.credentials}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 text-emerald-600 mb-4">
              <div className="w-8 h-[1px] bg-emerald-600" />
              <span className="text-sm uppercase tracking-wider font-medium">
                Testimonials
              </span>
              <div className="w-8 h-[1px] bg-emerald-600" />
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-light text-slate-900"
            >
              Student <span className="font-serif italic">Stories</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ananya Sharma",
                role: "Corporate Professional",
                text: "The personalized attention transformed my approach to stress. The traditional methods are easy to follow yet deeply impactful.",
                rating: 5,
              },
              {
                name: "Vikram Mehta",
                role: "Athlete",
                text: "I joined for flexibility, but stayed for the mental clarity. The hybrid approach fits perfectly into my busy schedule.",
                rating: 5,
              },
              {
                name: "Priya Iyer",
                role: "Yoga Beginner",
                text: "As someone who was intimidated by yoga, the beginner-friendly atmosphere was a breath of fresh air. It's truly a way of life now.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-500"
              >
                <Quote className="text-emerald-200 mb-4" size={32} />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-emerald-500 text-emerald-500"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 text-emerald-600 mb-4">
              <div className="w-8 h-[1px] bg-emerald-600" />
              <span className="text-sm uppercase tracking-wider font-medium">
                Insights & Wisdom
              </span>
              <div className="w-8 h-[1px] bg-emerald-600" />
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-light text-slate-900"
            >
              Latest from Our <span className="font-serif italic">Blog</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Power of Morning Meditation",
                excerpt:
                  "Discover how a simple 10-minute practice can transform your entire day",
                category: "Mindfulness",
                date: "March 15, 2026",
                image:
                  "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                title: "Yoga for Stress Relief",
                excerpt:
                  "Effective poses and breathing techniques to calm your mind and body",
                category: "Wellness",
                date: "March 10, 2026",
                image:
                  "https://images.pexels.com/photos/3822668/pexels-photo-3822668.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                title: "Building a Home Practice",
                excerpt:
                  "Essential tips for creating your perfect yoga space at home",
                category: "Practice",
                date: "March 5, 2026",
                image:
                  "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
            ].map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium text-slate-700">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-slate-500">{post.date}</div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{post.excerpt}</p>
                  <button className="text-emerald-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <motion.div variants={fadeIn} className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 text-emerald-600 mb-4">
                  <div className="w-8 h-[1px] bg-emerald-600" />
                  <span className="text-sm uppercase tracking-wider font-medium">
                    Get in Touch
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
                  Start Your <span className="font-serif italic">Journey</span>
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Have questions or ready to begin? We're here to guide you every
                  step of the way. Reach out and let's connect.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Phone size={20} />,
                    label: "Call Us",
                    value: "+91 123 456 7890",
                  },
                  {
                    icon: <Mail size={20} />,
                    label: "Email",
                    value: "hello@swashthika.com",
                  },
                  {
                    icon: <MapPin size={20} />,
                    label: "Visit Us",
                    value: "123 Wellness Circle, Bangalore",
                  },
                ].map((contact, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">
                        {contact.label}
                      </div>
                      <div className="text-slate-900 font-medium">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              variants={fadeIn}
              className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="+91 000 000 0000"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                    placeholder="Tell us about your goals..."
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-medium hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Send Message
                <ArrowRight size={20} />
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-emerald-50 text-lg mb-8 leading-relaxed">
            Join our community of mindful practitioners and start your journey to
            wellness today. First class is free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="group bg-white text-emerald-600 px-8 py-4 rounded-full font-medium hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:scale-105"
            >
              Book Free Trial
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/schedule"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              View Schedule
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
