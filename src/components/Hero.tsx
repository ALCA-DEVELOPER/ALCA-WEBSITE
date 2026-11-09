"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import RotatingText from "@/components/RotatingText";
import DecryptedText from "@/components/DecryptedText";

// Magnetic Button with spring physics for that smooth "Awwwards" feel
function MagneticButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 160, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.25);
    y.set((clientY - centerY) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const { t, language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Handle video autoplay, strict Safari DOM properties, and viewport visibility
  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video) return;

    // Strict Safari / iOS autoplay requirements:
    // Safari requires DOM properties video.muted and video.defaultMuted to be true
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handled gracefully if browser holds video until user interaction
        });
      }
    };

    playVideo();

    // Fallback: If browser policy blocks autoplay before gesture, kick it off on first tap/scroll
    const handleInteraction = () => {
      playVideo();
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };

    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("click", handleInteraction, { passive: true });
    window.addEventListener("scroll", handleInteraction, { passive: true });

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-28 pb-16 lg:pt-0 lg:pb-0 overflow-hidden bg-slate-950 isolate"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover -z-20 transform-gpu"
      >
        <source src="/background.webm" type="video/webm" />
      </video>

      {/* Dark Vignette Overlay for edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.72)_120%)] -z-10 pointer-events-none" />

      {/* Smooth transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-50 to-transparent z-0 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Single Badge: Agensi Web Modern with DecryptedText */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-clear mb-6 md:mb-7 transform-gpu cursor-default text-white"
        >
          <Sparkles className="w-4 h-4 text-sky-400" />
          <DecryptedText
            text={t("hero_badge")}
            animateOn="view"
            speed={45}
            maxIterations={10}
            className="text-sm font-semibold text-white tracking-wide"
            encryptedClassName="text-sm font-semibold text-sky-400 tracking-wide"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 max-w-4xl leading-[1.15] text-white transform-gpu"
        >
          {t("hero_title_prefix")}
          <span className="text-sky-400 font-extrabold ml-2">
            Nama Perusahaan
          </span>
        </motion.h1>

        {/* React Bits RotatingText: Clean Crystal Glass Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6 md:mb-8 text-xs sm:text-sm transform-gpu"
        >
          <span className="text-white/80 font-medium">
            {language === "id" ? "Spesialis Solusi:" : "Core Expertise:"}
          </span>
          <RotatingText
            texts={
              language === "id"
                ? [
                    "Website Super Cepat & Ringan",
                    "Desain Standar Awwwards UI/UX",
                    "100% Core Web Vitals & SEO",
                    "Web App & SaaS Skalabilitas Tinggi",
                    "Dashboard & Point of Sale Modern",
                  ]
                : [
                    "Ultra-Fast & Lightweight Web",
                    "Awwwards-Grade UI/UX Design",
                    "100% Core Web Vitals & SEO",
                    "High-Scale Web Apps & SaaS",
                    "Next-Gen Dashboard & POS",
                  ]
            }
            mainClassName="px-3.5 py-1 glass-clear text-white font-semibold text-xs sm:text-sm rounded-full"
            staggerFrom="last"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.02}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            rotationInterval={2600}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-xl text-gray-200 mb-8 md:mb-12 max-w-2xl leading-relaxed transform-gpu"
        >
          {t("hero_description")}
        </motion.p>

        {/* Magnetic CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto transform-gpu"
        >
          <MagneticButton
            href="#services"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold rounded-full shadow-lg shadow-sky-500/25 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
          >
            <span>{t("hero_btn_pricing")}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 glass-clear text-white font-semibold rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-[0.98]"
          >
            <span>{t("hero_btn_consult")}</span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
