"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SlideUp } from "../ui/animations";
import { TiltCard } from "../ui/TiltCard";

function ProjectCardImage({ project }: { project: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full relative"
    >
      <Link href={`/projects/${project.slug}`}>
        <TiltCard maxTilt={7} className="rounded-3xl shadow-xl dark:shadow-2xl shadow-black/10 dark:shadow-black/50 border border-slate-200 dark:border-white/10 group-hover:border-blue-500/40 transition-colors duration-500">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-slate-900 dark:bg-[#03030a]">
            {/* Live Video Preview Badge when Hovered */}
            {project.video && (
              <div
                className={`absolute top-4 right-4 z-30 transition-all duration-300 ${
                  isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl border border-blue-400/40 backdrop-blur-md">
                  <Play className="w-3 h-3 fill-white animate-pulse" />
                  Live Preview
                </div>
              </div>
            )}

            <div className="absolute inset-0 bg-white/5 dark:bg-[#060611]/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              {/* Base Cover Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover object-left-top transition-opacity duration-500 ${
                  isHovered && project.video ? "opacity-0" : "opacity-100"
                }`}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* Hover Video Player */}
              {project.video && (
                <video
                  ref={videoRef}
                  src={project.video}
                  muted
                  loop
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </motion.div>
          </div>
        </TiltCard>
      </Link>
    </div>
  );
}

export function FeaturedProjects() {
  const featured = projects.filter(p => p.featured).slice(0, 3);

  const getBadgeText = (title: string) => {
    if (title.toLowerCase().includes("os") || title.toLowerCase().includes("erp")) return "Enterprise ERP";
    if (title.toLowerCase().includes("saas")) return "B2B SaaS";
    return "Web Platform";
  };

  return (
    <section className="py-20 md:py-32 relative z-10 bg-slate-100/50 dark:bg-slate-900/10 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <SlideUp className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white transition-colors duration-300">Featured Work</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light transition-colors duration-300">
              A selection of mission-critical systems and scalable applications engineered for modern enterprises and fast-growing businesses.
            </p>
          </div>
          <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-slate-900 dark:text-white font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors group pb-4 border-b border-slate-300 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500">
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </SlideUp>

        <div className="space-y-32">
          {featured.map((project, index) => {
            const isEven = index % 2 !== 0;
            return (
              <div key={project.slug} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center group`}>

                {/* Image & Video Side with 3D Tilt */}
                <div className="w-full lg:w-[60%] relative">
                  <ProjectCardImage project={project} />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-[40%] flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {getBadgeText(project.title)}
                    </span>
                    <span className="text-slate-500 text-sm font-medium">0{index + 1}</span>
                  </div>

                  <Link href={`/projects/${project.slug}`} className="inline-block group/title">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100 group-hover/title:text-transparent group-hover/title:bg-clip-text group-hover/title:bg-gradient-to-r group-hover/title:from-blue-600 group-hover/title:to-indigo-600 dark:group-hover/title:from-blue-400 dark:group-hover/title:to-indigo-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover/title:bg-blue-500 group-hover/title:border-blue-500 group-hover/title:text-white text-slate-400 transition-all duration-300 transform group-hover/title:rotate-45 ml-4">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>

                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 transition-colors duration-300">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-black/20 border border-slate-300 dark:border-white/5 text-xs font-medium text-slate-700 dark:text-slate-400 group-hover:border-slate-400 dark:group-hover:border-white/10 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1.5 rounded-xl bg-transparent text-xs font-medium text-slate-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
                    <Link href={`/projects/${project.slug}`} className="block flex-1 group/btn">
                      <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 w-full transition-transform hover:scale-105 duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover/btn:opacity-100 transition duration-500" />
                        <div className="relative px-6 py-3.5 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-semibold text-sm flex items-center justify-center gap-2 w-full transition-colors">
                          Explore Architecture
                        </div>
                      </div>
                    </Link>

                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block flex-1 group/sec">
                        <div className="relative px-6 py-3.5 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-900 dark:text-white font-semibold text-sm flex items-center justify-center gap-2 w-full transition-all hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/20">
                          Visit Site <ArrowUpRight className="w-4 h-4 group-hover/sec:-translate-y-0.5 group-hover/sec:translate-x-0.5 transition-transform" />
                        </div>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link href="/projects" className="inline-block group/btn">
            <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform hover:scale-105 duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover/btn:opacity-100 transition duration-500" />
              <div className="relative px-8 py-3.5 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
                View All Architectures <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
