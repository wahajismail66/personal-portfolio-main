"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, ChevronRight, Sparkles } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-24 md:py-32 px-4 relative bg-slate-50/70 dark:bg-[#03030a]/70 backdrop-blur-sm overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-[1000px] relative z-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20 md:mb-32"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-8 rounded-full" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Professional Experience
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed font-light transition-colors duration-300">
            A proven track record of architecting scalable systems, accelerating engineering velocity, and delivering mission-critical software that drives enterprise value.
          </p>
        </motion.div>

        {/* Experience Timeline with 3D Tilt */}
        <div className="relative border-l border-slate-300 dark:border-white/10 ml-6 md:ml-8 space-y-24 transition-colors duration-300">
          {experienceData.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-21px] top-4 w-10 h-10 rounded-full bg-white dark:bg-[#03030a] border-2 border-slate-300 dark:border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors duration-500 shadow-[0_0_15px_rgba(37,99,235,0)] group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-110">
                <Briefcase className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-500" />
              </div>

              {/* Connecting Line Glow on Hover */}
              <div className="absolute left-[-1px] top-14 w-[2px] h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content Card with 3D Tilt */}
              <TiltCard maxTilt={4} className="rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl">
                <div className="bg-white/90 dark:bg-[#060611]/90 backdrop-blur-md p-8 md:p-12 rounded-[2rem] relative overflow-hidden group/card">

                  {/* Subtle top glow */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-t-[2rem]" />

                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300">
                        {job.position}
                      </h3>
                      <div className="text-xl text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2">
                        {job.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-semibold shrink-0 transition-colors duration-300">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      {job.startDate} - {job.endDate}
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-light transition-colors duration-300">
                    {job.description}
                  </p>

                  {/* Achievements List */}
                  <div className="mb-10 space-y-4">
                    {job.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-300 font-medium">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black/30 border border-slate-200 dark:border-white/5 text-sm font-semibold text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-500/30 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
