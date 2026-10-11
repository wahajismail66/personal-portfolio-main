"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { Mail, MapPin, ArrowRight, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";
import { TiltCard } from "@/components/ui/TiltCard";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred");
    }
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 md:pb-32 relative bg-slate-50/70 dark:bg-[#03030a]/70 backdrop-blur-sm transition-colors duration-300 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1200px] relative z-20">

        {/* Header */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-8 mx-auto rounded-full" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 dark:text-slate-100 transition-colors duration-300">
              Let's Architect Your Next Solution
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light transition-colors duration-300">
              Available for strategic consulting and enterprise software development. If you need a technical partner to scale your digital infrastructure, let's connect.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column: Contact Info with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            <TiltCard maxTilt={4} className="rounded-[2.5rem] h-full border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl">
              <div className="bg-white/90 dark:bg-[#060611]/90 backdrop-blur-md p-10 lg:p-12 rounded-[2.5rem] h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2.5rem]" />

                <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-10 transition-colors duration-300">Contact Details</h3>

                <div className="space-y-8">
                  <a href={`mailto:${siteData.email}`} className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-[#0a0a1a] border border-slate-200 dark:border-white/5 rounded-2xl flex items-center justify-center mr-6 group-hover/link:border-blue-500/30 transition-colors shrink-0">
                      <Mail className="w-6 h-6 text-slate-500 dark:text-slate-300 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Direct Email</div>
                      <div className="text-lg font-medium text-slate-900 dark:text-slate-200 transition-colors duration-300">{siteData.email}</div>
                    </div>
                  </a>

                  <a href={`https://maps.google.com/?q=${siteData.location}`} target="_blank" rel="noreferrer" className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link cursor-pointer">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-[#0a0a1a] border border-slate-200 dark:border-white/5 rounded-2xl flex items-center justify-center mr-6 shrink-0 group-hover/link:border-blue-500/30 transition-colors">
                      <MapPin className="w-6 h-6 text-slate-500 dark:text-slate-300 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Location</div>
                      <div className="text-lg font-medium text-slate-900 dark:text-slate-200 transition-colors duration-300">{siteData.location}</div>
                    </div>
                  </a>
                </div>

                <div className="mt-12 pt-10 border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Professional Networks</h4>
                  <div className="flex gap-4">
                    <a href={siteData.socialLinks.github} target="_blank" rel="noreferrer" className="w-14 h-14 bg-slate-50 dark:bg-[#0a0a1a] hover:bg-slate-200 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all hover:border-slate-300 dark:hover:border-white/20 shadow-sm dark:shadow-none hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href={siteData.socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-14 h-14 bg-slate-50 dark:bg-[#0a0a1a] hover:bg-slate-200 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#0077b5] transition-all hover:border-[#0077b5]/50 shadow-sm dark:shadow-none hover:scale-110">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Contact Form with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <TiltCard maxTilt={3} className="rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl">
              <form className="bg-white/90 dark:bg-[#060611]/90 backdrop-blur-md p-10 lg:p-14 rounded-[2.5rem] relative overflow-hidden group" onSubmit={handleSubmit}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2.5rem]" />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-10 transition-colors duration-300">Request a Consultation</h3>

                {status === "success" ? (
                  <div className="bg-blue-500/10 border border-blue-500/20 p-10 rounded-2xl flex flex-col items-center justify-center text-center space-y-6">
                    <CheckCircle2 className="w-16 h-16 text-blue-400 animate-bounce" />
                    <div className="text-slate-900 dark:text-slate-100 font-bold text-2xl transition-colors duration-300">Transmission Successful</div>
                    <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors duration-300">Your message has been securely sent. I will review it and respond promptly.</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 group"
                    >
                      <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform hover:scale-105 duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover:opacity-100 transition duration-500" />
                        <div className="relative px-8 py-3 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-semibold flex items-center justify-center transition-colors duration-300">
                          Send another transmission
                        </div>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {status === "error" && (
                      <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full bg-slate-50 dark:bg-[#0a0a1a] border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/5 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 text-lg shadow-inner"
                          placeholder="e.g. Alan Turing"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full bg-slate-50 dark:bg-[#0a0a1a] border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/5 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 text-lg shadow-inner"
                          placeholder="alan@enigma.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Project Details</label>
                      <textarea
                        id="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full bg-slate-50 dark:bg-[#0a0a1a] border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/5 transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600 text-lg shadow-inner"
                        placeholder="Describe your architectural requirements or project scope..."
                      />
                    </div>

                    <button
                      disabled={status === "loading"}
                      className="w-full group disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                    >
                      <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 w-full transition-transform group-hover:scale-[1.02] duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover:opacity-100 transition duration-500" />
                        <div className="relative px-6 py-5 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-bold text-lg flex items-center justify-center transition-colors duration-300">
                          {status === "loading" ? (
                            <Loader2 className="w-6 h-6 animate-spin text-indigo-400" />
                          ) : (
                            <>
                              Request Consultation
                              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                            </>
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                )}
              </form>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
