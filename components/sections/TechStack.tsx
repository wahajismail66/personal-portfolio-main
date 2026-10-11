"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiReact,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

export function TechStack() {
  const technologies = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "NestJS", icon: SiNestjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Docker", icon: SiDocker },
  ];

  return (
    <section className="py-16 border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-[#060611]/50 relative z-10 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 mb-12">
        <p className="text-center text-[13px] font-bold tracking-[0.3em] text-slate-500 uppercase">
          Powered By Modern Technologies
        </p>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden relative w-full">
        {/* Left/Right Gradients for smooth fade effect */}
        <div className="absolute left-0 top-0 w-24 sm:w-48 h-full bg-gradient-to-r from-slate-50 dark:from-[#060611] to-transparent z-10 pointer-events-none transition-colors duration-300" />
        <div className="absolute right-0 top-0 w-24 sm:w-48 h-full bg-gradient-to-l from-slate-50 dark:from-[#060611] to-transparent z-10 pointer-events-none transition-colors duration-300" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex whitespace-nowrap items-center w-max opacity-60 hover:opacity-100 transition-opacity duration-500"
        >
          {/* Double the list to create a seamless infinite loop */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mx-8 sm:mx-12 group cursor-default"
            >
              <tech.icon className="text-3xl sm:text-4xl text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
              <span className="font-semibold text-lg sm:text-xl text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
