"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AmbientGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{
        x: mousePosition.x - 250,
        y: mousePosition.y - 250,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-[100px] pointer-events-none z-0 opacity-60 dark:opacity-80 transition-opacity duration-300"
    />
  );
}
