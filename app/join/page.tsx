"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Leaf, Heart, Sparkles, Send, ChevronRight } from "lucide-react";

export default function JoinForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    yogaExperience: "",
    healthGoals: "",
    classType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="bg-[#F8F7F2] pt-32 pb-24 text-slate-900 font-sans antialiased min-h-screen overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-emerald-50/50 -z-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/4" />
      
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
          
          {/* --- LEFT SIDE: THE PROMISE --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 lg:sticky lg:top-32 space-y-16"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="h-[1px] w-8 bg-emerald-700/30" />
                <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-emerald-800">
                  Begin Your Evolution
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif italic tracking-tight leading-[0.9] text-slate-800">
                The art of <br />
                <span className="not-italic text-emerald-900/90">Self-Care.</span>
              </h1>
              <p className="text-slate-500 font-light text-xl leading-relaxed max-w-md">
                A sanctuary for therapeutic practice. Share your intent, and let us curate a journey tailored to your rhythm.
              </p>
            </div>

            <div className="space-y-10">
              {[
                { icon: <Leaf size={18} />, title: "Personalized Assessment", desc: "Consultations designed to honor your unique anatomy." },
                { icon: <Heart size={18} />, title: "Therapeutic Mastery", desc: "Expert guidance rooted in 8+ years of clinical wellness." },
                { icon: <Sparkles size={18} />, title: "Mind-Body Synergy", desc: "A holistic integration of breathwork and alignment." },
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  key={i} 
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-emerald-100 bg-white flex items-center justify-center text-emerald-700 transition-all duration-500 group-hover:bg-emerald-800 group-hover:text-white group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm tracking-tight text-slate-800 uppercase italic">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed max-w-[280px]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: THE FORM --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/70 backdrop-blur-xl p-8 md:p-20 rounded-[4rem] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.06)] border border-white relative overflow-hidden">
              <form className="space-y-12 relative z-10">
                
                {/* Visual Section Divider */}
                <div className="space-y-12">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-emerald-800/60 pb-2 border-b border-slate-100 w-full">
                    01. Basic Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    <InputField label="First Name" name="firstName" placeholder="Aditya" value={formData.firstName} onChange={handleChange} required />
                    <InputField label="Last Name" name="lastName" placeholder="Singh" value={formData.lastName} onChange={handleChange} required />
                    <InputField label="Email" name="email" type="email" placeholder="hello@swashthika.com" value={formData.email} onChange={handleChange} required />
                    <InputField label="WhatsApp / Phone" name="phone" type="tel" placeholder="+91" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-12">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-emerald-800/60 pb-2 border-b border-slate-100 w-full">
                    02. Your Practice
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    <SelectField label="Experience" name="yogaExperience" value={formData.yogaExperience} onChange={handleChange} options={[
                      { value: "beginner", label: "Beginner - New to Yoga" },
                      { value: "intermediate", label: "Intermediate - Regular" },
                      { value: "advanced", label: "Advanced - Seasoned" }
                    ]} />
                    <SelectField label="Preferred Path" name="classType" value={formData.classType} onChange={handleChange} options={[
                      { value: "personal", label: "1-on-1 Personalized" },
                      { value: "group", label: "Community Group" },
                      { value: "couple", label: "Couple/Family" }
                    ]} />
                  </div>
                  <div className="group relative">
                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2 block group-focus-within:text-emerald-700 transition-colors">
                      Intentions & Goals
                    </label>
                    <textarea
                      name="healthGoals"
                      rows={1}
                      placeholder="e.g. Mobility, stress management, spinal health..."
                      className="w-full bg-transparent border-b border-slate-200 py-4 text-sm focus:outline-none focus:border-emerald-700 transition-all font-light resize-none placeholder:text-slate-300 italic"
                    />
                  </div>
                </div>

                {/* Agreement & Submit */}
                <div className="pt-8 space-y-8">
                  <label className="flex items-start gap-4 cursor-pointer group max-w-sm">
                    <div className="relative mt-0.5">
                      <input type="checkbox" required className="peer appearance-none w-5 h-5 border border-slate-200 rounded-full checked:bg-emerald-800 checked:border-emerald-800 transition-all cursor-pointer" />
                      <Check size={10} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                    </div>
                    <span className="text-[11px] leading-relaxed text-slate-400 font-light group-hover:text-slate-600 transition-colors uppercase tracking-tight">
                      I agree to the privacy policy and consent to a wellness consultation.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 text-white py-6 rounded-full flex items-center justify-between px-10 group hover:bg-emerald-900 transition-all duration-700 shadow-2xl shadow-slate-900/20"
                  >
                    <span className="uppercase tracking-[0.4em] text-[11px] font-bold">
                      Book Your Free Demo
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 transition-all duration-500" />
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

/* Reusable Components for Cleanliness */

const InputField = ({ label, ...props }: any) => (
  <div className="group relative">
    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 block group-focus-within:text-emerald-700 transition-colors">
      {label} {props.required && "*"}
    </label>
    <input
      {...props}
      className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-emerald-700 transition-all font-light placeholder:text-slate-200"
    />
  </div>
);

const SelectField = ({ label, options, ...props }: any) => (
  <div className="group relative">
    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 block group-focus-within:text-emerald-700 transition-colors">
      {label}
    </label>
    <select
      {...props}
      className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-emerald-700 transition-all font-light appearance-none cursor-pointer"
    >
      <option value="">Select Option</option>
      {options.map((opt: any) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);