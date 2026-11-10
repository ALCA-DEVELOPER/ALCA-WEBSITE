"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const waUrl = `https://wa.me/6285700654110?text=${encodeURIComponent(
    language === "id"
      ? "Halo MeoM, saya ingin bertanya dan konsultasi mengenai pembuatan website."
      : "Hello MeoM, I would like to inquire and consult about website development."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 pointer-events-none">
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label={language === "id" ? "Kembali ke atas" : "Scroll to top"}
            className={`pointer-events-auto w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer border ${
              isDark
                ? "bg-[#161618] text-white hover:text-[#C6F432] border-white/15 hover:border-[#C6F432]/50"
                : "bg-white text-slate-700 hover:text-black border-slate-200 hover:border-slate-400"
            }`}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Quick Action with Pulse */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="pointer-events-auto relative group flex items-center"
      >
        {/* Tooltip on hover */}
        <span className={`absolute right-full mr-3 px-3 py-1.5 rounded-xl border text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md ${
          isDark
            ? "bg-[#161618] border-white/10 text-white"
            : "bg-slate-900 border-slate-800 text-white"
        }`}>
          {language === "id" ? "Chat WhatsApp" : "Chat on WhatsApp"}
        </span>

        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#C6F432] opacity-35 group-hover:opacity-65 animate-ping pointer-events-none" />

        {/* Button */}
        <div className="relative w-13 h-13 rounded-full bg-[#C6F432] hover:bg-[#b5e028] text-[#0B0B0C] shadow-[0_0_25px_rgba(198,244,50,0.4)] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 active:scale-95">
          <MessageCircle className="w-7 h-7 text-[#0B0B0C] stroke-[2.2]" />
        </div>
      </a>
    </div>
  );
}
