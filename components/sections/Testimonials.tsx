"use client";

import { testimonialsData } from "@/data/testimonials";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  // Duplicate array for seamless infinite scrolling
  const scrollItems = [...testimonialsData, ...testimonialsData];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="mb-20">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-8 rounded-full" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white transition-colors duration-300">
            Client & Partner Feedback
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed transition-colors duration-300">
            I partner with forward-thinking enterprises and fast-growing organizations to engineer scalable, resilient digital infrastructure. Here is what they have to say.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden px-4 md:px-8">
        {/* Fade Out Edges */}
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-slate-50 dark:from-[#03030a] to-transparent z-20 pointer-events-none transition-colors duration-300" />
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-slate-50 dark:from-[#03030a] to-transparent z-20 pointer-events-none transition-colors duration-300" />

        <motion.div 
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear",
            duration: 60,
            repeat: Infinity,
          }}
        >
          {scrollItems.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-[350px] md:w-[450px] p-8 md:p-10 rounded-[2rem] bg-white/90 dark:bg-[#060611]/90 backdrop-blur-md border border-slate-200 dark:border-white/5 relative hover:border-blue-500/30 transition-all duration-500 group shadow-xl dark:shadow-2xl shadow-black/5 dark:shadow-black/50 flex flex-col shrink-0"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2rem]" />
              
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-900/5 dark:text-white/5 group-hover:text-blue-500/10 transition-colors duration-500" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 relative z-10 font-light text-lg flex-1 transition-colors duration-300">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-5 mt-auto">
                <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-slate-300 dark:border-white/10 group-hover:border-blue-500/50 transition-colors duration-500 flex items-center justify-center overflow-hidden shrink-0 relative">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{testimonial.name}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
