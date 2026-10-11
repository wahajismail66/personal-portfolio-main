"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { siteData } from "@/data/site";

export function CTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#03030a] -z-10 transition-colors duration-300" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[1200px] mx-auto bg-white dark:bg-[#060611] border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-xl dark:shadow-2xl shadow-black/5 dark:shadow-black/50 group transition-colors duration-300"
        >
          {/* Animated Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-blue-600/20" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight relative z-10 text-slate-900 dark:text-white leading-tight transition-colors duration-300">
            Let's architect something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 font-extrabold">extraordinary</span> together.
          </h2>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto relative z-10 leading-relaxed font-light transition-colors duration-300">
            Available for strategic consulting and enterprise software development. If you need a technical partner to scale your digital infrastructure and accelerate growth, let's connect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 relative z-10">
            <Link href="/contact" className="w-full sm:w-auto block group/btn">
              <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform hover:scale-105 duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover/btn:opacity-100 transition duration-500" />
                <div className="relative px-8 py-4 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-semibold text-base flex items-center justify-center gap-3 transition-colors">
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>

            <a href={`mailto:${siteData.email}`} className="w-full sm:w-auto block group/sec">
              <div className="relative px-8 py-4 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-900 dark:text-white font-semibold text-base flex items-center justify-center gap-3 transition-all hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/20">
                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                Email Directly
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
