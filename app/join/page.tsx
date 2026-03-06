"use client";

import { useState } from "react";
import { Check, Leaf, Heart, Sparkles, Send } from "lucide-react";

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
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <main className="bg-[#FAF9F6] pt-32 pb-24 text-slate-900 font-sans antialiased min-h-screen">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* --- LEFT SIDE: THE PROMISE --- */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-emerald-700 mb-6 block">
                Begin Your Evolution
              </span>
              <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter leading-tight mb-8">
                Your path to <br />
                <span className="not-italic">well-being.</span>
              </h1>
              <p className="text-slate-500 font-light text-lg leading-relaxed max-w-md">
                Complete this short inquiry, and let us design a personalized
                practice that honors your unique body and goals.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-slate-200">
              {[
                {
                  icon: <Leaf size={20} />,
                  title: "Personalized Assessment",
                  desc: "Every journey begins with understanding your specific needs.",
                },
                {
                  icon: <Heart size={20} />,
                  title: "Certified Guidance",
                  desc: "Learn from experts with over 8 years of therapeutic experience.",
                },
                {
                  icon: <Sparkles size={20} />,
                  title: "Holistic Approach",
                  desc: "Beyond poses—integrating breath, mind, and lifestyle.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-emerald-700 shadow-sm group-hover:bg-emerald-700 group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: THE FORM --- */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-slate-50">
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Name Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group relative">
                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold group-focus-within:text-emerald-600 transition-colors">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Aditya"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors font-light placeholder:text-slate-200"
                      required
                    />
                  </div>
                  <div className="group relative">
                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold group-focus-within:text-emerald-600 transition-colors">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Singh"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors font-light placeholder:text-slate-200"
                      required
                    />
                  </div>
                </div>

                {/* Contact Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group relative">
                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold group-focus-within:text-emerald-600 transition-colors">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="hello@swashthika.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors font-light placeholder:text-slate-200"
                      required
                    />
                  </div>
                  <div className="group relative">
                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold group-focus-within:text-emerald-600 transition-colors">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors font-light placeholder:text-slate-200"
                      required
                    />
                  </div>
                </div>

                {/* Experience & Age */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group relative">
                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors font-light"
                    />
                  </div>
                  <div className="group relative">
                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                      Experience Level *
                    </label>
                    <select
                      name="yogaExperience"
                      value={formData.yogaExperience}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors font-light appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select Level</option>
                      <option value="beginner">
                        Beginner - Never practiced
                      </option>
                      <option value="intermediate">
                        Intermediate - Some experience
                      </option>
                      <option value="advanced">
                        Advanced - Regular practitioner
                      </option>
                    </select>
                  </div>
                </div>

                {/* Class Type */}
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Preferred Class Structure *
                  </label>
                  <select
                    name="classType"
                    value={formData.classType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors font-light appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Choose a path...</option>
                    <option value="personal-online">
                      Personal - Online 1-to-1
                    </option>
                    <option value="personal-offline">
                      Personal - Offline 1-to-1
                    </option>
                    <option value="group-online">Group - Online</option>
                    <option value="group-offline">Group - Offline</option>
                    <option value="couple">Couple / Family Session</option>
                  </select>
                </div>

                {/* Goals */}
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    What are your health goals?
                  </label>
                  <textarea
                    name="healthGoals"
                    value={formData.healthGoals}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Stress relief, physical strength, flexibility..."
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors font-light resize-none"
                  ></textarea>
                </div>

                {/* Agreement & Submit */}
                <div className="space-y-6 pt-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        required
                        className="peer appearance-none w-5 h-5 border border-slate-200 rounded-md checked:bg-emerald-600 checked:border-emerald-600 transition-all"
                      />
                      <Check
                        size={12}
                        className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="text-xs text-slate-400 font-light group-hover:text-slate-600 transition-colors">
                      I agree to receive communications from Swashthika Yoga
                      Studio.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 text-white py-5 rounded-full flex items-center justify-center gap-3 group hover:bg-emerald-800 transition-all duration-500 shadow-xl shadow-slate-900/10"
                  >
                    <span className="uppercase tracking-[0.3em] text-[11px] font-bold">
                      Book Your Free Demo
                    </span>
                    <Send
                      size={14}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
