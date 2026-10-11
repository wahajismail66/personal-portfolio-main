"use client";

import { experienceData } from "@/data/experience";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TiltCard } from "../ui/TiltCard";

export function ExperiencePreview() {
  return (
    <section className="py-20 md:py-32 bg-slate-100 dark:bg-slate-900/30 transition-colors duration-300 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white transition-colors duration-300">Career Journey</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light transition-colors duration-300">
            My engineering timeline building software solutions and scaling production architectures.
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/50 before:to-transparent">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-end md:justify-start md:even:justify-end group"
            >
              {/* Timeline Dot with Pulse Glow */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-[3px] border-white dark:border-[#060611] bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.3)] z-20 group-hover:scale-125 transition-transform" />

              {/* Massive Shadow Year */}
              <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 group-odd:left-[calc(50%+4rem)] group-even:right-[calc(50%+4rem)] z-0 pointer-events-none">
                <motion.h4
                  className="text-8xl lg:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-300/40 dark:from-white/10 to-transparent group-hover:from-blue-500/20 group-hover:to-transparent transition-colors duration-700 select-none tracking-tighter"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {exp.startDate.split('/').pop()}
                </motion.h4>
              </div>

              {/* Content card with 3D Tilt */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] relative z-10">
                <TiltCard maxTilt={5} className="rounded-3xl border border-slate-200 dark:border-white/10 hover:border-blue-500/40 shadow-xl dark:shadow-2xl">
                  <div className="p-8 bg-white/90 dark:bg-white/5 backdrop-blur-sm rounded-3xl">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">{exp.position}</h3>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</span>
                      </div>
                      <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors duration-300">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed transition-colors duration-300">
                      {exp.description}
                    </p>

                    <ul className="list-disc list-outside ml-4 text-sm text-slate-600 dark:text-slate-300 space-y-2 mb-6 marker:text-blue-500 transition-colors duration-300">
                      {exp.achievements.map((achieve, i) => (
                        <li key={i} className="pl-1">{achieve}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-black/20 px-2 py-1 rounded-md transition-colors duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/experience" className="inline-block group/btn">
            <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform hover:scale-105 duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover/btn:opacity-100 transition duration-500" />
              <div className="relative px-8 py-3.5 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
                View Full Career Timeline <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
