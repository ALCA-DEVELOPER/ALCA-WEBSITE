"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import RotatingText from "@/components/RotatingText";
import DecryptedText from "@/components/DecryptedText";

// Magnetic Button with spring physics for smooth interaction
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
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Handle video autoplay, strict Safari DOM properties, and viewport visibility
  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    };

    playVideo();

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
      className={`relative min-h-[100dvh] flex flex-col items-center justify-center pt-28 pb-16 lg:pt-0 lg:pb-0 overflow-hidden isolate transition-colors duration-300 ${
        isDark ? "bg-[#0B0B0C]" : "bg-[#F8FAFC]"
      }`}
    >
      {/* Video Background with subtle blend */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        className={`absolute inset-0 w-full h-full object-cover -z-20 transform-gpu ${
          isDark ? "opacity-35 mix-blend-screen" : "opacity-20 mix-blend-multiply"
        }`}
      >
        <source src="/background.webm" type="video/webm" />
      </video>

      {/* Cyber Lime Vertical Ambient Light Beam (From reference design) */}
      <div className={`absolute inset-0 -z-10 pointer-events-none ${
        isDark
          ? "bg-[radial-gradient(ellipse_70%_55%_at_50%_72%,rgba(198,244,50,0.18)_0%,rgba(198,244,50,0.05)_45%,transparent_75%)]"
          : "bg-[radial-gradient(ellipse_70%_55%_at_50%_72%,rgba(198,244,50,0.32)_0%,rgba(198,244,50,0.1)_45%,transparent_75%)]"
      }`} />

      {/* Dark/Light Vignette Overlay for edges */}
      <div className={`absolute inset-0 -z-10 pointer-events-none ${
        isDark
          ? "bg-[radial-gradient(circle_at_center,transparent_20%,rgba(11,11,12,0.85)_110%)]"
          : "bg-[radial-gradient(circle_at_center,transparent_20%,rgba(248,250,252,0.85)_110%)]"
      }`} />

      {/* Smooth transition to the next section */}
      <div className={`absolute bottom-0 left-0 right-0 h-40 z-0 pointer-events-none bg-gradient-to-t ${
        isDark ? "from-[#0B0B0C] to-transparent" : "from-[#F8FAFC] to-transparent"
      }`} />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Badge with Lime Green Accent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 md:mb-7 transform-gpu cursor-default ${
            isDark
              ? "bg-[#121214] border border-[#C6F432]/30 text-white shadow-[0_0_15px_rgba(198,244,50,0.12)]"
              : "bg-white border border-lime-300 text-slate-800 shadow-sm"
          }`}
        >
          <Sparkles className="w-4 h-4 text-[#C6F432]" />
          <DecryptedText
            text={t("hero_badge")}
            animateOn="view"
            speed={45}
            maxIterations={10}
            className={`text-sm font-semibold tracking-wide ${isDark ? "text-white" : "text-slate-800"}`}
            encryptedClassName="text-sm font-semibold text-[#C6F432] tracking-wide"
          />
        </motion.div>

        {/* Headline with Serif Italic Lime Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 max-w-4xl leading-[1.15] transform-gpu ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {t("hero_title_prefix")}
          <span className={`italic font-serif ml-2.5 ${isDark ? "text-[#C6F432]" : "text-[#4d7c0f]"}`}>
            MeoM
          </span>
        </motion.h1>

        {/* RotatingText Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6 md:mb-8 text-xs sm:text-sm transform-gpu"
        >
          <span className={`font-medium ${isDark ? "text-gray-300" : "text-slate-600"}`}>
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
            mainClassName={`px-3.5 py-1 font-semibold text-xs sm:text-sm rounded-full ${
              isDark
                ? "bg-[#161618] border border-[#C6F432]/35 text-[#C6F432] shadow-[0_0_18px_rgba(198,244,50,0.15)]"
                : "bg-white border border-lime-300 text-lime-800 shadow-sm"
            }`}
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
          className={`text-base md:text-xl mb-8 md:mb-12 max-w-2xl leading-relaxed transform-gpu ${
            isDark ? "text-gray-300" : "text-slate-600"
          }`}
        >
          {t("hero_description")}
        </motion.p>

        {/* Action Buttons: Solid Lime Green Primary + Glass Secondary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto transform-gpu"
        >
          <MagneticButton
            href="#services"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#C6F432] hover:bg-[#b5e028] text-[#0B0B0C] font-extrabold rounded-full shadow-[0_0_25px_rgba(198,244,50,0.35)] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
          >
            <span>{t("hero_btn_pricing")}</span>
            <ArrowRight className="w-5 h-5 text-[#0B0B0C] group-hover:translate-x-1.5 transition-transform duration-200" />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className={`w-full sm:w-auto px-8 py-3.5 font-semibold rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-[0.98] ${
              isDark
                ? "bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#C6F432]/40 text-white"
                : "bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 shadow-sm"
            }`}
          >
            <span>{t("hero_btn_consult")}</span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
