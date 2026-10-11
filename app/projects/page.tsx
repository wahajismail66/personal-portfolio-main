"use client";

import { useState, useRef } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, SlidersHorizontal, X, Play } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

function ProjectGridCardImage({ project }: { project: any }) {
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
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-8 shadow-xl border border-slate-200 dark:border-white/5 group-hover:border-blue-500/20 transition-colors duration-500 bg-slate-900 dark:bg-[#03030a]">
          <div className="absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/80 dark:bg-[#0d1021]/80 backdrop-blur-md text-slate-900 dark:text-white border border-slate-300 dark:border-white/10 shadow-lg">
            {project.category}
          </div>

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

          <motion.div
            className="w-full h-full relative"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Base Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`object-cover object-left-top transition-opacity duration-500 ${
                isHovered && project.video ? "opacity-0" : "opacity-100"
              }`}
              sizes="(max-width: 1024px) 100vw, 50vw"
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
      </Link>
    </div>
  );
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 md:pb-32 relative bg-slate-50/70 dark:bg-[#03030a]/70 backdrop-blur-sm transition-colors duration-300 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1200px] relative z-20">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-8 rounded-full" />
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white transition-colors duration-300">
              Enterprise Portfolio
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed font-light transition-colors duration-300">
              A comprehensive index of mission-critical systems and scalable architectures engineered to solve complex business challenges and drive measurable ROI.
            </p>
          </motion.div>
        </div>

        {/* Futuristic Interactive Filter & Control Center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/90 dark:bg-[#060611]/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[2rem] p-3 md:p-4 mb-16 shadow-xl dark:shadow-2xl flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 transition-colors duration-300 relative overflow-hidden"
        >
          {/* Top Gradient Highlight */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          {/* Categories Pill Switcher (Flex Wrap - No Scroll) */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 max-w-full">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              const count = category === "All" ? projects.length : projects.filter(p => p.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 z-10 ${
                    isSelected
                      ? "text-white shadow-lg"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-project-filter"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl -z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>{category}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold font-mono transition-colors ${
                      isSelected
                        ? "bg-white/25 text-white"
                        : "bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-white/10"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input with High Light Mode Contrast */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-600 dark:text-indigo-400" />
            <input
              type="text"
              placeholder="Search architecture & case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-[#0a0a1a] border border-slate-300 dark:border-white/10 rounded-2xl pl-11 pr-10 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all shadow-sm placeholder:text-slate-500 dark:placeholder:text-slate-400 text-xs font-semibold"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Premium 2-Column Project Grid with 3D Tilt */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <TiltCard maxTilt={5} className="rounded-[2.5rem] h-full border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl hover:border-blue-500/30 transition-all duration-500">
                    <div className="flex flex-col h-full bg-white/90 dark:bg-[#060611]/90 backdrop-blur-md rounded-[2.5rem] p-6 lg:p-8 relative overflow-hidden group">
                      
                      {/* Top Gradient Highlight */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2.5rem]" />
                      
                      <ProjectGridCardImage project={project} />
                      
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <Link href={`/projects/${project.slug}`} className="group/title block mb-4">
                            <div className="flex justify-between items-start">
                              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 group-hover/title:text-transparent group-hover/title:bg-clip-text group-hover/title:bg-gradient-to-r group-hover/title:from-blue-600 group-hover/title:to-indigo-600 dark:group-hover/title:from-blue-400 dark:group-hover/title:to-indigo-400 transition-all duration-300 flex items-center gap-3">
                                {project.title}
                              </h3>
                              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover/title:bg-blue-500 group-hover/title:border-blue-500 group-hover/title:text-white text-slate-400 transition-all duration-300 transform group-hover/title:rotate-45 ml-4">
                                <ArrowUpRight className="w-5 h-5" />
                              </div>
                            </div>
                          </Link>
                          
                          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 font-light flex-1 transition-colors duration-300">
                            {project.shortDescription}
                          </p>
                        </div>
                        
                        <div>
                          <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-white/5 mb-6 transition-colors duration-300">
                            {project.technologies.slice(0, 4).map(tech => (
                              <span key={tech} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-black/20 border border-slate-200 dark:border-white/5 text-xs font-semibold text-slate-700 dark:text-slate-400 group-hover:border-indigo-500/30 transition-colors cursor-default">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="px-3 py-1.5 rounded-xl bg-transparent text-xs font-medium text-slate-400">
                                +{project.technologies.length - 4}
                              </span>
                            )}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Link href={`/projects/${project.slug}`} className="block flex-1 group/btn">
                              <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 w-full transition-transform hover:scale-105 duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover/btn:opacity-100 transition duration-500" />
                                <div className="relative px-4 py-3 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white text-sm font-semibold flex items-center justify-center gap-2 w-full transition-colors">
                                  Architecture Showcase
                                </div>
                              </div>
                            </Link>
                            
                            {project.liveUrl && project.liveUrl !== '#' && (
                              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block flex-1 group/sec">
                                <div className="relative px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-900 dark:text-white text-sm font-semibold flex items-center justify-center gap-2 w-full transition-all hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/20">
                                  Visit Site <ArrowUpRight className="w-4 h-4 group-hover/sec:-translate-y-0.5 group-hover/sec:translate-x-0.5 transition-transform" />
                                </div>
                              </a>
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 border border-slate-200 dark:border-white/10 transition-colors duration-300">
                  <Search className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">No matching architectures found</h3>
                <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">Adjust your filters or search terms to find what you're looking for.</p>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
