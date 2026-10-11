"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Server, Database, Layers, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TiltCard } from "../ui/TiltCard";

export function Services() {
  const services = [
    {
      id: "web",
      title: "Enterprise Web Platforms",
      description: "Increase conversion rates and user retention with lightning-fast, accessible web interfaces engineered for scale and seamless customer experiences.",
      icon: <LayoutGrid className="w-7 h-7" />
    },
    {
      id: "backend",
      title: "Microservices & APIs",
      description: "Future-proof your business logic with robust, high-throughput microservices. Reduce downtime and handle enterprise-level traffic spikes effortlessly.",
      icon: <Server className="w-7 h-7" />
    },
    {
      id: "database",
      title: "Database Architecture",
      description: "Design hyper-optimized schemas and high-performance queries across SQL and NoSQL engines for maximum data throughput and reliability.",
      icon: <Database className="w-7 h-7" />
    },
    {
      id: "saas",
      title: "B2B SaaS Architectures",
      description: "Accelerate your time-to-market. I design and scale complex multi-tenant SaaS platforms and ERPs from MVP to global enterprise adoption.",
      icon: <Layers className="w-7 h-7" />
    }
  ];

  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Left Column - Sticky Header */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white transition-colors duration-300">
                  Core Competencies
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-8 rounded-full" />
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-md transition-colors duration-300">
                  I don't just write code; I architect systems. By combining deep technical expertise with strategic business alignment, I deliver resilient digital infrastructure designed to scale with your enterprise.
                </p>
                <div className="mt-10">
                  <Link href="/contact" className="inline-block group/btn">
                    <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform hover:scale-105 duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover/btn:opacity-100 transition duration-500" />
                      <div className="relative px-6 py-3.5 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
                        Discuss a project <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Premium 3D Tilt Grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TiltCard maxTilt={5} className="rounded-[2rem] h-full border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl">
                    <div className="group p-8 rounded-[2rem] bg-white/90 dark:bg-[#060611]/90 backdrop-blur-md hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-between">
                      {/* Decorative glow on hover */}
                      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 blur-[50px] rounded-full group-hover:bg-blue-500/40 transition-colors duration-500 pointer-events-none" />

                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#0a0a1a] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all duration-500 mb-6 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.3)]">
                        {service.icon}
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-white transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors duration-300 font-light">
                          {service.description}
                        </p>
                      </div>

                      <Link href="/services" className="inline-flex items-center text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors group/link mt-auto">
                        Explore Capability <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
