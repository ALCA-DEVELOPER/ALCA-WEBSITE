"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#features" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 30,
          mass: 0.8,
        }}
        className={`pointer-events-auto overflow-hidden transition-colors duration-300 ${
          isScrolled || mobileMenuOpen
            ? "w-[95%] md:w-[700px] bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "w-full md:w-[1200px] bg-transparent border-transparent"
        } ${mobileMenuOpen ? "rounded-3xl" : "rounded-full"}`}
      >
        <div className={`flex items-center justify-between ${isScrolled || mobileMenuOpen ? "py-3 px-6" : "py-4 px-2 md:px-8"}`}>
          <Link href="/" className="flex items-center gap-2 group shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <motion.div layout className="flex items-center gap-3">
              <Image src="/logo.png" alt="Clealabs Logo" width={32} height={32} className="w-8 h-8 object-contain" />
              <div className="text-xl md:text-2xl font-bold tracking-tighter flex items-center translate-y-[2px]">
                <span className="text-white">Clea</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  labs
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <motion.nav layout className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#pricing"
              className={`text-sm font-semibold text-white transition-all duration-300 rounded-full flex items-center justify-center ${
                isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-4 py-2"
                  : "bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2.5"
              }`}
            >
              Get Started
            </Link>
          </motion.nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            layout
            className="md:hidden text-gray-300 hover:text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Nav Content inside the pill */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="px-6 pb-6 pt-2 flex flex-col gap-3 relative"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { 
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 } 
                  },
                  closed: { 
                    transition: { staggerChildren: 0.02, staggerDirection: -1 } 
                  }
                }}
              >
                {/* Decorative orbs inside the expanded menu */}
                <div className="absolute top-10 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute bottom-10 left-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />
                
                {navLinks.map((link) => (
                  <motion.div 
                    key={link.name} 
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -10 }
                    }}
                    className="w-full relative z-10"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/[0.04] border border-white/5 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all active:scale-[0.98]"
                    >
                      <span>{link.name}</span>
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{">"}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 10 }
                  }}
                  className="mt-3 relative z-10"
                >
                  <Link
                    href="#pricing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full py-4 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)] active:scale-[0.98] transition-transform"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
