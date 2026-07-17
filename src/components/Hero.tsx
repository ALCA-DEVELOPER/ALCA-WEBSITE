"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-28 pb-10 lg:pt-0 lg:pb-0 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/background.webm" type="video/webm" />
      </video>
      
      {/* Dark Vignette Overlay for edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.7)_120%)] -z-10 pointer-events-none" />
      
      {/* Smooth transition to the next section (white) */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-0 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 md:mb-8 backdrop-blur-sm shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-white">Modern Web Development Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-8 max-w-4xl leading-tight text-white"
        >
          Elevate Your Digital Presence with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
            Clealabs
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-xl text-gray-200 mb-8 md:mb-12 max-w-2xl leading-relaxed"
        >
          We build fast, scalable, and stunning websites for businesses and individuals. Turn your vision into reality with our premium digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <Link
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-full shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Lihat Paket Harga
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
          >
            Konsultasi Gratis
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
