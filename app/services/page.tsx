"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import { Server, Layout, Database, Cloud, Code, Settings, Smartphone, Zap, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { TiltCard } from "@/components/ui/TiltCard";

// Helper to get an icon based on id
const getIcon = (id: string) => {
  switch (id) {
    case "full-stack": return <Layout className="w-8 h-8 text-indigo-400" />;
    case "saas": return <Cloud className="w-8 h-8 text-blue-400" />;
    case "backend": return <Server className="w-8 h-8 text-emerald-400" />;
    case "api": return <Zap className="w-8 h-8 text-amber-400" />;
    case "erp": return <Settings className="w-8 h-8 text-pink-400" />;
    case "multi-tenant": return <Database className="w-8 h-8 text-purple-400" />;
    case "database": return <Database className="w-8 h-8 text-red-400" />;
    case "integration": return <Code className="w-8 h-8 text-cyan-400" />;
    default: return <Code className="w-8 h-8 text-indigo-400" />;
  }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-24 md:py-32 px-4 relative bg-slate-50/70 dark:bg-[#03030a]/70 backdrop-blur-sm overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-[1200px] relative z-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-24"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-8 rounded-full" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Enterprise Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed font-light transition-colors duration-300">
            I don't just write code. I partner with businesses to solve complex scaling challenges, eliminate downtime, and build resilient digital products that accelerate growth.
          </p>
        </motion.div>

        {/* Services Premium Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <TiltCard maxTilt={5} className="rounded-3xl h-full border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
                <div className="bg-white/90 dark:bg-[#060611]/90 backdrop-blur-md p-8 md:p-12 rounded-3xl h-full group hover:bg-slate-50/90 dark:hover:bg-[#0a0a1a]/90 transition-colors duration-500 relative flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-3xl" />

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] group-hover:scale-110">
                      {getIcon(service.id)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-white mb-4 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Ready to scale your infrastructure?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 transition-colors duration-300">
            Whether you need a complete architecture overhaul, a custom SaaS platform, or an enterprise cloud migration, I'm here to help.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center group/btn">
            <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform hover:scale-105 duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover/btn:opacity-100 transition duration-500" />
              <div className="relative px-8 py-4 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-semibold text-base flex items-center justify-center gap-2 transition-colors">
                Discuss Your Project <Sparkles className="w-4 h-4 text-indigo-500" /> <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
