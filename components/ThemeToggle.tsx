"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full bg-white dark:bg-[#060611] border border-slate-200 dark:border-white/10 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 dark:hover:border-white/20 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 dark:group-hover:bg-white/5 rounded-full transition-colors" />
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}
