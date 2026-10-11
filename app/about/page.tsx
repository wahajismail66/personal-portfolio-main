"use client";

import { siteData } from "@/data/site";
import { motion } from "framer-motion";
import { Mail, MapPin, Calendar as CalendarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TiltCard } from "@/components/ui/TiltCard";
import { StatCounter } from "@/components/ui/StatCounter";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 relative bg-slate-50/70 dark:bg-[#03030a]/70 backdrop-blur-sm transition-colors duration-300 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1200px] relative z-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-20"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-8 rounded-full" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light transition-colors duration-300">
            {siteData.shortBio}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Professional Background Card */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TiltCard maxTilt={4} className="rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
                <div className="p-8 md:p-10 bg-white/90 dark:bg-[#060611]/90 backdrop-blur-md rounded-[2.5rem] relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h2 className="text-xs font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-6">Professional Background</h2>
                  <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl font-light leading-relaxed whitespace-pre-wrap transition-colors duration-300">
                    {siteData.fullBio}
                  </p>
                </div>
              </TiltCard>
            </motion.section>

            {/* Development Philosophy Card */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <TiltCard maxTilt={4} className="rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
                <div className="p-8 md:p-10 bg-white/90 dark:bg-[#060611]/90 backdrop-blur-md rounded-[2.5rem] relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h2 className="text-xs font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-6">Development Philosophy</h2>
                  <div className="p-8 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600" />
                    <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl font-light italic leading-relaxed transition-colors duration-300">
                      "{siteData.developmentPhilosophy}"
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.section>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {siteData.stats.map((stat, i) => {
                const numericVal = parseInt(stat.value.replace(/\D/g, ""), 10) || 0;
                const suffix = stat.value.replace(/[0-9]/g, "");
                return (
                  <TiltCard key={i} maxTilt={4} className="rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
                    <div className="p-6 md:p-8 rounded-[2rem] bg-white/90 dark:bg-[#060611]/90 backdrop-blur-md text-center group hover:border-blue-500/30 transition-colors duration-500 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-105 transition-transform duration-500 font-mono">
                        <StatCounter value={numericVal} suffix={suffix} />
                      </div>
                      <div className="text-xs font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  </TiltCard>
                );
              })}
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4"
          >
            <TiltCard maxTilt={4} className="rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/90 dark:bg-[#060611]/90 backdrop-blur-md sticky top-32 group hover:border-blue-500/30 transition-colors duration-500 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-40 h-40 rounded-full bg-slate-200 dark:bg-slate-800 mx-auto mb-8 border-4 border-white dark:border-[#03030a] shadow-[0_0_0_2px_rgba(59,130,246,0.5)] overflow-hidden relative group-hover:shadow-[0_0_0_2px_rgba(59,130,246,1)] transition-all duration-500">
                  <Image
                    src="/myphoto.PNG"
                    alt={siteData.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                
                <h3 className="text-3xl font-bold text-center mb-3 text-slate-900 dark:text-white transition-colors duration-300">{siteData.name}</h3>
                <p className="text-xs font-bold text-indigo-500 dark:text-indigo-400 text-center uppercase tracking-widest mb-10 transition-colors duration-300">{siteData.professionalTitle}</p>

                <div className="space-y-6">
                  <div className="flex items-center text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mr-4 shrink-0 transition-colors duration-300">
                      <MapPin className="w-4 h-4 text-indigo-500" />
                    </div>
                    {siteData.location}
                  </div>
                  <div className="flex items-center text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mr-4 shrink-0 transition-colors duration-300">
                      <Mail className="w-4 h-4 text-indigo-500" />
                    </div>
                    {siteData.email}
                  </div>
                  <div className="flex items-center text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mr-4 shrink-0 transition-colors duration-300">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                    </div>
                    {siteData.availability}
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/10 space-y-4 transition-colors duration-300">
                  <Link
                    href="/contact"
                    className="w-full block group/btn"
                  >
                    <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 w-full transition-transform hover:scale-105 duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover/btn:opacity-100 transition duration-500" />
                      <div className="relative flex items-center justify-center px-4 py-3.5 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-semibold text-sm transition-colors duration-300 gap-2">
                        <CalendarIcon className="w-4 h-4 text-indigo-500 shrink-0" />
                        Schedule a Meeting
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
