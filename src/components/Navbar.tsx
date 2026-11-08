"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { name: t("nav_why_us"), href: "#features" },
    { name: t("nav_process"), href: "#process" },
    { name: t("nav_services"), href: "#services" },
    { name: t("nav_portfolio"), href: "#portfolio" },
    { name: t("nav_team"), href: "#team" },
    { name: t("nav_faq"), href: "#faq" },
  ];

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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-5 px-3 sm:px-4 pointer-events-none">
      <div
        className={`pointer-events-auto transition-all duration-300 ease-out transform-gpu w-[96%] max-w-[1180px] ${
          mobileMenuOpen ? "rounded-3xl" : "rounded-full"
        } ${
          isScrolled || mobileMenuOpen
            ? "bg-white/80 border border-white/60 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-white/10 border border-white/20 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="w-full flex flex-col">
          {/* Top Bar: Brand Logo, Nav Links, Actions */}
          <div
            className={`flex items-center justify-between w-full gap-4 lg:gap-8 transition-all duration-300 ${
              isScrolled || mobileMenuOpen
                ? "py-2.5 pl-5 md:pl-7 pr-3 md:pr-5"
                : "py-3 pl-5 md:pl-8 pr-3 md:pr-6"
            }`}
          >
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="Nama Perusahaan Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain shrink-0 drop-shadow-[0_2px_8px_rgba(56,189,248,0.35)]"
              />
              <div className="text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap flex items-center">
                <span className={isScrolled || mobileMenuOpen ? "text-gray-900" : "text-white"}>
                  Nama
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500 ml-1.5">
                  Perusahaan
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links & Actions */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7 ml-auto shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] lg:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    isScrolled || mobileMenuOpen
                      ? "text-gray-600 hover:text-sky-600"
                      : "text-gray-200 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex items-center gap-2 pl-2">
                <button
                  onClick={() => setLanguage(language === "id" ? "en" : "id")}
                  aria-label="Toggle language"
                  className={`text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer shrink-0 ${
                    isScrolled || mobileMenuOpen
                      ? "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200/80"
                      : "bg-white/15 text-white hover:bg-white/25 border border-white/20 backdrop-blur-sm"
                  }`}
                >
                  {language === "id" ? "ID" : "EN"}
                </button>

                <Link
                  href="#services"
                  className={`text-xs lg:text-sm font-semibold text-white transition-all duration-300 rounded-full flex items-center justify-center active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0 ${
                    isScrolled || mobileMenuOpen
                      ? "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 px-4 lg:px-5 py-2 shadow-sm"
                      : "bg-white/15 hover:bg-white/25 border border-white/25 px-4 lg:px-5 py-2 backdrop-blur-sm shadow-sm"
                  }`}
                >
                  {t("nav_get_started")}
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              className={`md:hidden p-2 focus:outline-none transition-colors duration-200 cursor-pointer shrink-0 ${
                isScrolled || mobileMenuOpen ? "text-gray-700 hover:text-gray-900" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Nav Content inside the glass panel */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden transform-gpu"
              >
                <div className="px-5 pb-5 pt-2 flex flex-col gap-2 relative border-t border-gray-200/40 mt-1">
                  {navLinks.map((link) => (
                    <div key={link.name} className="w-full relative z-10">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between w-full p-3 rounded-2xl text-sm font-medium transition-all duration-200 active:scale-[0.98] ${
                          isScrolled
                            ? "bg-gray-50/80 border border-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                            : "bg-white/10 border border-white/15 text-white hover:bg-white/20"
                        }`}
                      >
                        <span>{link.name}</span>
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                          {">"}
                        </span>
                      </Link>
                    </div>
                  ))}

                  <div className="mt-2 relative z-10 flex gap-2">
                    <button
                      onClick={() => {
                        setLanguage(language === "id" ? "en" : "id");
                      }}
                      className={`flex-shrink-0 w-12 py-3 text-center text-sm font-bold rounded-2xl active:scale-[0.98] transition-transform duration-200 cursor-pointer ${
                        isScrolled
                          ? "text-gray-700 bg-gray-100 border border-gray-200/60"
                          : "text-white bg-white/15 border border-white/20"
                      }`}
                    >
                      {language === "id" ? "ID" : "EN"}
                    </button>
                    <Link
                      href="#services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-grow py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl shadow-[0_0_20px_-5px_rgba(14,165,233,0.5)] active:scale-[0.98] transition-transform duration-200 cursor-pointer"
                    >
                      {t("nav_get_started")}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
