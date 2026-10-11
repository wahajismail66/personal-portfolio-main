"use client";

import { ArrowRight, Terminal, Database, Monitor, Server, Cloud } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedBackground, HoverScale } from "../ui/animations";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  return (
    <section className="relative pt-20 pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
      <AnimatedBackground />

      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6 relative z-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for new projects
              </div>
              <h2 className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
                HELLO, I'M <span>👋</span>
              </h2>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 dark:text-white whitespace-nowrap transition-colors duration-300">
                Wahaj Ismail
                <span className="block mt-2 text-gradient pb-2 min-h-[1.2em] text-3xl sm:text-4xl lg:text-5xl">
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      2000,
                      'SaaS Developer',
                      2000,
                      'MERN Stack Developer',
                      2000,
                      'Backend Developer',
                      2000,
                      'Frontend Developer',
                      2000,
                      'Database Expert',
                      2000,
                      'System Design Specialist',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed pt-4 font-medium whitespace-normal transition-colors duration-300">
                I engineer scalable digital infrastructure and enterprise applications that drive business growth, optimize operations, and deliver exceptional user experiences.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/contact" className="w-full sm:w-auto block group/btn">
                <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform hover:scale-105 duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover/btn:opacity-100 transition duration-500" />
                  <div className="relative px-8 py-3.5 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
                    Start a Conversation
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link href="/projects" className="w-full sm:w-auto block group/sec">
                <div className="relative px-8 py-3.5 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-900 dark:text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/20">
                  View My Work <ArrowRight className="w-4 h-4 group-hover/sec:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile & Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0 w-full"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] shrink-0">

              {/* Professional Background Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 shadow-[0_0_80px_rgba(79,70,229,0.15)] flex items-center justify-center z-10 pointer-events-none">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl animate-pulse duration-[4000ms]" />
              </div>

              {/* Minimalist Tech Rings */}
              <div className="absolute inset-2 rounded-full border border-slate-200 dark:border-slate-700/30 border-dashed z-0 pointer-events-none animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-[-15px] rounded-full border border-slate-200 dark:border-slate-800/50 z-0 pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />

              {/* Main Image Container */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute inset-[15%] sm:inset-[12%] rounded-full p-[2px] bg-gradient-to-tr from-blue-500/50 via-transparent to-indigo-500/50 z-20 shadow-2xl"
              >
                <div className="w-full h-full rounded-full bg-slate-50 dark:bg-[#0a0a1a] flex items-center justify-center overflow-hidden relative border-4 border-white dark:border-[#03030a] transition-colors duration-300">
                  <Image
                    src="/myphoto.PNG"
                    alt="Wahaj Ismail"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  {/* Subtle blend gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-[#03030a]/60 via-transparent to-transparent pointer-events-none transition-colors duration-300" />
                </div>
              </motion.div>

              {/* Clean Image Container, no floating icons */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
