"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import meomLogo from "@/assets/meom-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Preloader() {
  const { isLoading } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="clean-minimal-preloader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.35, ease: "easeInOut" },
          }}
          transition={{ duration: 0.25 }}
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center select-none transition-colors duration-300 ${
            isDark ? "bg-[#0B0B0C]" : "bg-white"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            {/* Minimal Logo Mark */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-11 h-11 relative"
            >
              <Image
                src={meomLogo}
                alt="MeoM Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain rounded-xl shadow-sm"
                priority
              />
            </motion.div>

            {/* Clean Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl font-black tracking-tight flex items-center"
            >
              <span className={isDark ? "text-white" : "text-slate-900"}>Me</span>
              <span className={isDark ? "text-[#C6F432]" : "text-[#4d7c0f]"}>oM</span>
              <span className="text-[#C6F432]">.</span>
            </motion.div>

            {/* Deliberate Minimalist Progress Line (Fills smoothly to 100%) */}
            <div
              className={`w-36 h-[2px] rounded-full overflow-hidden mt-1 ${
                isDark ? "bg-white/10" : "bg-slate-100"
              }`}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`h-full w-full rounded-full origin-left ${
                  isDark ? "bg-[#C6F432]" : "bg-[#4d7c0f]"
                }`}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
