"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-8 mx-auto rounded-full" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors duration-300">
              Architecting Enterprise-Grade Digital Infrastructure
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light transition-colors duration-300"
          >
            I deliver high-impact, scalable, and resilient software solutions tailored for enterprise demands. Leveraging modern architectures, I specialize in developing high-availability Next.js applications, robust NestJS microservices, and secure, performant PostgreSQL database systems that drive business growth and operational excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <Link href="/about" className="inline-block group/btn">
              <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform hover:scale-105 duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover/btn:opacity-100 transition duration-500" />
                <div className="relative px-8 py-3.5 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
                  More about my background <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
