"use client";

import { useState } from "react";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, Sparkles, X } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(blogPosts.map(p => p.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen py-24 md:py-32 px-4 relative bg-slate-50/70 dark:bg-[#03030a]/70 backdrop-blur-sm overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-[800px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-[1200px] relative z-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-8 rounded-full" />
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors duration-300">
              Engineering Insights
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed font-light transition-colors duration-300">
              Insights on leveraging technology for enterprise growth, from scalable software design to high-level technical leadership.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        {/* Futuristic Interactive Filter & Control Center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/90 dark:bg-[#060611]/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[2rem] p-3 md:p-4 mb-20 shadow-xl dark:shadow-2xl flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 transition-colors duration-300 relative overflow-hidden"
        >
          {/* Top Gradient Highlight */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          {/* Categories Pill Switcher (Flex Wrap - No Scroll) */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 max-w-full">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              const count = category === "All" ? blogPosts.length : blogPosts.filter(p => p.category === category).length;
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
                      layoutId="active-blog-filter"
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
              placeholder="Search engineering articles..."
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

        {/* Featured Post (Only show if no search/filter) */}
        {searchQuery === "" && selectedCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <TiltCard maxTilt={4} className="rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl">
                <div className="bg-white/90 dark:bg-[#060611]/90 backdrop-blur-md rounded-[2.5rem] p-4 lg:p-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative overflow-hidden">

                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2.5rem]" />

                  <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-white/10 dark:bg-[#060611]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                    <motion.div className="w-full h-full relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: "easeOut" }}>
                      <Image
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </motion.div>
                  </div>

                  <div className="lg:pr-8 pb-4 lg:pb-0">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center text-slate-500 text-sm font-medium">
                        <Clock className="w-4 h-4 mr-2 text-indigo-400" />
                        {featuredPost.readingTime}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400 transition-all duration-300">
                      {featuredPost.title}
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 transition-colors duration-300 font-light">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-slate-500 text-sm font-semibold">
                        <Calendar className="w-4 h-4 text-indigo-400" />
                        {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </div>

                      <div className="flex items-center text-blue-500 font-bold group-hover:translate-x-2 transition-transform duration-300">
                        Read Article <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </Link>
          </motion.div>
        )}

        {/* Grid Posts with 3D Tilt */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {(searchQuery === "" && selectedCategory === "All" ? filteredPosts.slice(1) : filteredPosts).map((post, index) => (
              <motion.div
                layout
                key={post.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <TiltCard maxTilt={6} className="rounded-[2rem] h-full border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl">
                    <div className="flex flex-col h-full bg-white/90 dark:bg-[#060611]/90 backdrop-blur-md rounded-[2rem] p-6 relative overflow-hidden">

                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2rem]" />

                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-xl">
                        <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/80 dark:bg-[#0d1021]/80 backdrop-blur-md text-slate-900 dark:text-white border border-slate-300 dark:border-white/10 shadow-lg">
                          {post.category}
                        </div>
                        <motion.div className="w-full h-full relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: "easeOut" }}>
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        </motion.div>
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-4 mb-3 text-slate-500 text-xs font-semibold">
                            <span className="flex items-center">
                              <Calendar className="w-3.5 h-3.5 mr-1 text-indigo-400" />
                              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-slate-500" />
                            <span className="flex items-center">
                              <Clock className="w-3.5 h-3.5 mr-1 text-indigo-400" />
                              {post.readingTime}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400 transition-all duration-300 mb-3 line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light flex-1 line-clamp-3 mb-6 transition-colors duration-300">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="flex items-center text-xs text-blue-500 font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors mt-auto pt-4 border-t border-slate-200 dark:border-white/5">
                          Read article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-slate-400 font-medium">
            No articles found matching your criteria.
          </div>
        )}

      </div>
    </div>
  );
}
