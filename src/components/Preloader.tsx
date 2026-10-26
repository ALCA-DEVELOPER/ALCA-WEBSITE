"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Preloader() {
  const { isLoading } = useLanguage();

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
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.35, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden transform-gpu"
        >
          {/* Subtle background glow using radial-gradient for 0-overhead rendering */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(56,189,248,0.18)_0%,transparent_70%)] pointer-events-none" />

          <div className="flex flex-col items-center gap-8 relative z-10">
            {/* Logo Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="transform-gpu"
            >
              <Image
                src="/logo.png"
                alt="Nama Perusahaan Logo"
                width={80}
                height={80}
                className="w-20 h-20 object-contain drop-shadow-[0_4px_16px_rgba(14,165,233,0.35)]"
                priority
              />
            </motion.div>

            {/* Brand Text */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-extrabold tracking-tighter flex items-center transform-gpu"
            >
              <span className="text-gray-900">Nama</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500 ml-2">
                Perusahaan
              </span>
            </motion.div>

            {/* Loading Bar with GPU-accelerated scaleX instead of layout-reflow width */}
            <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden shadow-inner mt-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full origin-left transform-gpu"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
