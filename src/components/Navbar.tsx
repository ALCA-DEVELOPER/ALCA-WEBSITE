"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ArrowRight, Globe, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import meomLogo from "@/assets/meom-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const navLinks = [
    { name: t("nav_why_us"), href: "#features", number: "01" },
    { name: t("nav_process"), href: "#process", number: "02" },
    { name: t("nav_services"), href: "#services", number: "03" },
    { name: t("nav_portfolio"), href: "#portfolio", number: "04" },
    { name: t("nav_team"), href: "#team", number: "05" },
    { name: t("nav_faq"), href: "#faq", number: "06" },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // RAF-throttled scroll listener with passive event for 120fps scrolling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-5 px-3 sm:px-4 pointer-events-none">
        <div
          className={`pointer-events-auto transition-all duration-300 ease-out transform-gpu w-[96%] max-w-[1180px] rounded-full ${
            isDark
              ? isScrolled
                ? "glass-clear-scrolled text-white"
                : "glass-clear text-white"
              : isScrolled
              ? "glass-clear-light-scrolled text-slate-900 border border-slate-300/80 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.12)]"
              : "glass-clear-light text-slate-900 border border-slate-300/60 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)]"
          }`}
        >
          <div className="w-full flex items-center justify-between gap-4 lg:gap-8 transition-all duration-300 py-2.5 sm:py-3 pl-5 md:pl-8 pr-3 md:pr-6">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src={meomLogo}
                alt="MeoM Logo"
                width={32}
                height={32}
                priority
                className="w-8 h-8 object-contain shrink-0 rounded-lg shadow-sm"
              />
              <div className="text-xl md:text-2xl font-black tracking-tight whitespace-nowrap flex items-center">
                <span className={isDark ? "text-white" : "text-slate-900"}>Me</span>
                <span className={`${isDark ? "text-[#C6F432]" : "text-[#4d7c0f]"} font-black`}>
                  oM
                </span>
                <span className="text-[#C6F432] font-black">.</span>
              </div>
            </Link>

            {/* Desktop Nav Links & Actions */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7 ml-auto shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] lg:text-sm whitespace-nowrap transition-colors duration-200 ${
                    isDark
                      ? "text-gray-300 hover:text-[#C6F432] font-medium"
                      : "text-slate-700 hover:text-black font-semibold"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex items-center gap-2 pl-2">
                {/* Theme Toggle Button (Desktop) */}
                <button
                  onClick={toggleTheme}
                  aria-label={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
                  title={isDark ? (language === "id" ? "Mode Terang" : "Light Mode") : (language === "id" ? "Mode Gelap" : "Dark Mode")}
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer shrink-0 active:scale-95 ${
                    isDark
                      ? "bg-white/5 hover:bg-white/15 border border-white/10 text-yellow-300"
                      : "bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 shadow-sm"
                  }`}
                >
                  {isDark ? (
                    <Sun className="w-4 h-4 fill-yellow-300/30" />
                  ) : (
                    <Moon className="w-4 h-4 text-slate-800 fill-slate-800/20" />
                  )}
                </button>

                {/* Language Switcher Button (Desktop) */}
                <button
                  onClick={() => setLanguage(language === "id" ? "en" : "id")}
                  aria-label="Toggle language"
                  className={`text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer shrink-0 active:scale-95 ${
                    isDark
                      ? "bg-white/5 hover:bg-white/15 border border-white/10 text-white"
                      : "bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 shadow-sm"
                  }`}
                >
                  {language === "id" ? "ID" : "EN"}
                </button>

                {/* Primary CTA Button */}
                <Link
                  href="#services"
                  className={`text-xs lg:text-sm font-extrabold transition-all duration-200 rounded-full flex items-center justify-center active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0 bg-[#C6F432] hover:bg-[#b5e028] text-[#0B0B0C] px-5 py-2 ${
                    isDark
                      ? "shadow-[0_0_20px_rgba(198,244,50,0.3)]"
                      : "border border-[#a8d618] shadow-md shadow-lime-500/20"
                  }`}
                >
                  {t("nav_get_started")}
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              className={`md:hidden p-2 focus:outline-none transition-colors duration-200 cursor-pointer shrink-0 ${
                isDark ? "text-white hover:text-[#C6F432]" : "text-slate-900 hover:text-black"
              }`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Modern Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-0 z-[60] backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto ${
              isDark ? "bg-[#0B0B0C]/98 text-white" : "bg-white/98 text-slate-900"
            }`}
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6F432]/12 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#C6F432]/8 rounded-full blur-3xl pointer-events-none" />

            {/* Top Bar inside Overlay */}
            <div className={`relative z-10 flex items-center justify-between w-full pb-5 border-b ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}>
              <Link
                href="/"
                className="flex items-center gap-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src={meomLogo}
                  alt="MeoM Logo"
                  width={32}
                  height={32}
                  priority
                  className="w-8 h-8 object-contain shrink-0 rounded-lg shadow-sm"
                />
                <div className={`text-xl font-black tracking-tight flex items-center ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  <span>Me</span>
                  <span className={`${isDark ? "text-[#C6F432]" : "text-[#4d7c0f]"} font-black`}>
                    oM
                  </span>
                  <span className="text-[#C6F432] font-black">.</span>
                </div>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center active:scale-95 transition-all cursor-pointer ${
                  isDark
                    ? "bg-white/10 hover:bg-white/20 border-white/15 text-white"
                    : "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800"
                }`}
                aria-label="Close mobile menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links with Stagger Effect */}
            <div className="relative z-10 py-6 sm:py-8 flex flex-col gap-1.5">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.05 + index * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3.5 px-4 rounded-2xl transition-colors group cursor-pointer ${
                      isDark
                        ? "hover:bg-white/5 active:bg-white/10"
                        : "hover:bg-slate-100 active:bg-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-xs font-mono font-bold text-[#C6F432]">
                        {link.number}
                      </span>
                      <span className={`text-xl sm:text-2xl font-bold transition-colors tracking-tight ${
                        isDark ? "text-gray-100 group-hover:text-[#C6F432]" : "text-slate-900 group-hover:text-black"
                      }`}>
                        {link.name}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#C6F432] group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions: Theme Toggle, Language Switcher, & CTA */}
            <div className={`relative z-10 pt-4 border-t flex flex-col gap-3 ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}>
              <div className="grid grid-cols-2 gap-2.5">
                {/* Theme Switcher (Mobile) */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    toggleTheme();
                  }}
                  className={`py-3 px-3 rounded-2xl border flex items-center justify-center gap-2 text-sm font-bold active:scale-[0.98] transition-all cursor-pointer ${
                    isDark
                      ? "bg-white/10 hover:bg-white/15 border-white/15 text-white"
                      : "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-900 shadow-sm"
                  }`}
                >
                  {isDark ? (
                    <>
                      <Sun className="w-4 h-4 text-yellow-300" />
                      <span>{language === "id" ? "Mode Terang" : "Light Mode"}</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-slate-800" />
                      <span>{language === "id" ? "Mode Gelap" : "Dark Mode"}</span>
                    </>
                  )}
                </button>

                {/* Language Switcher (Mobile) */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLanguage(language === "id" ? "en" : "id");
                  }}
                  className={`py-3 px-3 rounded-2xl border flex items-center justify-center gap-2 text-sm font-bold active:scale-[0.98] transition-all cursor-pointer ${
                    isDark
                      ? "bg-white/10 hover:bg-white/15 border-white/15 text-white"
                      : "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-900 shadow-sm"
                  }`}
                >
                  <Globe className="w-4 h-4 text-[#C6F432]" />
                  <span>{language === "id" ? "Bahasa:" : "Lang:"}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-xs font-bold ${
                    isDark
                      ? "bg-[#C6F432]/20 text-[#C6F432] border border-[#C6F432]/40"
                      : "bg-slate-200 text-slate-900 border border-slate-300"
                  }`}>
                    {language === "id" ? "ID" : "EN"}
                  </span>
                </button>
              </div>

              {/* Main CTA (Mobile) */}
              <Link
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-5 text-center text-sm font-extrabold text-[#0B0B0C] bg-[#C6F432] hover:bg-[#b5e028] rounded-2xl shadow-lg shadow-[#C6F432]/25 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>{t("nav_get_started")}</span>
                <ArrowRight className="w-4 h-4 text-[#0B0B0C]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
