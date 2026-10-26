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
    { name: t("nav_services"), href: "#pricing" },
    { name: t("nav_portfolio"), href: "#portfolio" },
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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <div
        className={`pointer-events-auto overflow-hidden transition-all duration-300 ease-out transform-gpu ${
          isScrolled || mobileMenuOpen
            ? "w-[95%] md:w-[950px] bg-white/85 backdrop-blur-md border border-gray-200/80 shadow-lg shadow-black/5"
            : "w-full md:w-[1200px] bg-transparent border border-transparent"
        } ${mobileMenuOpen ? "rounded-3xl" : "rounded-full"}`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled || mobileMenuOpen ? "py-3 px-6" : "py-4 px-2 md:px-8"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Nama Perusahaan Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <div className="text-xl md:text-2xl font-bold tracking-tighter flex items-center translate-y-[2px]">
                <span className={isScrolled || mobileMenuOpen ? "text-gray-900" : "text-white"}>
                  Nama
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500 ml-1.5">
                  Perusahaan
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  isScrolled || mobileMenuOpen
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage(language === "id" ? "en" : "id")}
                aria-label="Toggle language"
                className={`text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
                  isScrolled || mobileMenuOpen
                    ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {language === "id" ? "ID" : "EN"}
              </button>
              <Link
                href="#pricing"
                className={`text-sm font-semibold text-white transition-all duration-300 rounded-full flex items-center justify-center active:scale-[0.98] ${
                  isScrolled
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 px-4 py-2"
                    : "bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-5 py-2.5"
                }`}
              >
                {t("nav_get_started")}
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 focus:outline-none transition-colors duration-200 ${
              isScrolled || mobileMenuOpen ? "text-gray-600 hover:text-gray-900" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Content inside the pill */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden transform-gpu"
            >
              <div className="px-6 pb-6 pt-2 flex flex-col gap-3 relative">
                {/* Decorative orbs inside the expanded menu with fast radial gradients */}
                <div className="absolute top-10 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute bottom-10 left-0 w-32 h-32 bg-[radial-gradient(circle,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />

                {navLinks.map((link) => (
                  <div key={link.name} className="w-full relative z-10">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 active:scale-[0.98]"
                    >
                      <span>{link.name}</span>
                      <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                        {">"}
                      </span>
                    </Link>
                  </div>
                ))}

                <div className="mt-3 relative z-10 flex gap-2">
                  <button
                    onClick={() => {
                      setLanguage(language === "id" ? "en" : "id");
                    }}
                    className="flex-shrink-0 w-12 py-4 text-center text-sm font-bold text-gray-700 bg-gray-100 rounded-2xl active:scale-[0.98] transition-transform duration-200"
                  >
                    {language === "id" ? "ID" : "EN"}
                  </button>
                  <Link
                    href="#pricing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-grow py-4 text-center text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl shadow-[0_0_20px_-5px_rgba(14,165,233,0.5)] active:scale-[0.98] transition-transform duration-200"
                  >
                    {t("nav_get_started")}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
