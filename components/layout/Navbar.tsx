"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Experience", href: "/experience" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#060611]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-[1400px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative h-8 w-32 sm:h-10 sm:w-56 flex items-center"
            >
              <Image src="/wahajismaillogo.png" alt="Wahaj Ismail" width={224} height={40} className="object-contain object-left transition-all" priority />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors"
                >
                  <span className={isActive ? "text-blue-600 dark:text-blue-400 font-extrabold" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="active-navbar-pill"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <ThemeToggle />
            <Link href="/contact" className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative px-6 py-2.5 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                  Get in Touch
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="p-2 text-slate-600 dark:text-slate-300 z-50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl md:hidden pt-20 px-4 transition-colors duration-300"
          >
            <div className="flex flex-col space-y-6 pb-20">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-lg font-bold uppercase tracking-[0.1em] py-3 border-b border-slate-200 dark:border-white/5 transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="pt-6 space-y-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block group"
                >
                  <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 w-full transition-transform hover:scale-[1.02] duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover:opacity-100 transition duration-500" />
                    <div className="relative px-8 py-4 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider text-center transition-colors">
                      Get in Touch
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
