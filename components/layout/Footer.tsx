import { siteData } from "@/data/site";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#03030a] pt-24 pb-12 relative overflow-hidden transition-colors duration-300">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[400px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center mb-6 md:mb-8 group">
              <div className="relative h-8 w-40 sm:h-10 sm:w-56 transform group-hover:scale-105 transition-transform flex items-center">
                <Image src="/wahajismaillogo.png" alt="Wahaj Ismail" width={224} height={40} className="object-contain object-left transition-all" />
              </div>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mb-8 font-light text-lg transition-colors duration-300">
              {siteData.shortBio}
            </p>
            <div className="flex items-center gap-4 text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500/70" />
                <span className="text-sm font-medium tracking-wide">{siteData.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-8">Connect</h4>
            <div className="flex gap-4">
              <a href={siteData.socialLinks.github} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white dark:bg-[#060611] hover:bg-blue-500/10 dark:hover:bg-blue-600/10 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-lg hover:shadow-blue-500/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href={siteData.socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white dark:bg-[#060611] hover:bg-blue-500/10 dark:hover:bg-blue-600/10 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-lg hover:shadow-blue-500/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
            
            <a href={`mailto:${siteData.email}`} className="inline-flex items-center gap-3 mt-8 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white dark:bg-white/5 px-6 py-3 rounded-full border border-slate-200 dark:border-white/5 hover:border-blue-500/30 group shadow-sm dark:shadow-none">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{siteData.email}</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500">
          <div className="text-sm font-medium">
            © {new Date().getFullYear()} {siteData.name}. Engineered for Scale.
          </div>
          <div className="flex gap-8 text-[11px] uppercase tracking-[0.1em] font-bold">
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
