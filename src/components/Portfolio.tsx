"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Briefcase,
  Building2,
  CalendarCheck,
  LayoutDashboard,
  ExternalLink,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const Folder = dynamic(() => import("@/components/Folder/Folder"), {
  ssr: false,
  loading: () => (
    <div className="w-[220px] h-[170px] rounded-2xl bg-[#121214] border border-white/10 flex items-center justify-center animate-pulse">
      <div className="w-10 h-10 rounded-xl bg-white/5" />
    </div>
  ),
});

const FlexCarousel = dynamic(
  () => import("@/components/FlexCarousel/FlexCarousel"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] sm:h-[460px] rounded-3xl bg-[#121214] border border-white/10 flex items-center justify-center animate-pulse">
        <div className="w-12 h-12 rounded-full bg-white/5" />
      </div>
    ),
  }
);

const LogoLoop = dynamic(() => import("@/components/LogoLoop/LogoLoop"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[165px] rounded-2xl bg-[#121214] border border-white/10 flex items-center justify-center animate-pulse">
      <div className="w-10 h-10 rounded-full bg-white/5" />
    </div>
  ),
});

export default function Portfolio() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Carousel showcase items featuring live web projects
  const carouselItems = [
    {
      src: "/personal-branding.webp",
      alt: "Al-Fakhri Portfolio Website",
      title: "Al-Fakhri Portfolio",
      subtitle: "Personal Branding & Portfolio Web",
      url: "https://al-fakhri.netlify.app",
    },
    {
      src: "/jp-co.webp",
      alt: "JP & Co. Corporate Advisory Website",
      title: "JP & Co.",
      subtitle: "Corporate & Strategic Advisory Profile",
      url: "https://www.jpandco.id/",
    },
    {
      src: "/ecotani.webp",
      alt: "Eco-Tani Precision Agriculture SaaS Platform",
      title: "Eco-Tani SaaS",
      subtitle: "Precision Agriculture & Farming Platform",
      url: "https://eco-tani.vercel.app",
    },
    {
      src: "/data-salyer.webp",
      alt: "Data Slayer Tech Event Website",
      title: "Data Slayer",
      subtitle: "Tech & Data Hackathon Event Platform",
      url: "https://data-slayer.com/",
    },
    {
      src: "/finwise.webp",
      alt: "Finwise FinTech Landing Page Template",
      title: "Finwise",
      subtitle: "FinTech & SaaS Product Landing Page",
      url: "https://landinggabut.vercel.app/",
    },
    {
      src: "/tirto.webp",
      alt: "Rumah Makan Tirto Mulyo Website",
      title: "RM Tirto Mulyo",
      subtitle: "Authentic Indonesian Dining & Culinary",
      url: "https://tirto-mulyo.netlify.app/",
    },
    {
      src: "/finora.webp",
      alt: "Finora Money Management SaaS Platform",
      title: "Finora",
      subtitle: "Smart Financial & Money Management SaaS",
      url: "https://finora-management-money.vercel.app/",
    },
    {
      src: "/cycling-analitics.webp",
      alt: "Cycling Analytics Performance Dashboard",
      title: "Cycling Analytics",
      subtitle: "Athletic Performance & Telemetry Dashboard",
      url: "https://cycling-analytics-omega.vercel.app/",
    },
  ];

  // Pure image items for mobile infinite auto-scrolling loop (Zero text, interactive touch draggable)
  const mobileProjectLogos = carouselItems.map((item) => ({
    node: (
      <div
        key={item.title}
        onClick={() => {
          if (item.url) window.open(item.url, "_blank");
        }}
        className={`w-[250px] sm:w-[270px] h-[156px] sm:h-[168px] rounded-2xl overflow-hidden flex-shrink-0 relative select-none cursor-grab active:cursor-grabbing transition-colors ${
          isDark
            ? "bg-[#121214] border border-white/10 hover:border-[#C6F432]/50 shadow-lg"
            : "bg-white border border-slate-200 hover:border-lime-400 shadow-md"
        }`}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover object-top pointer-events-none select-none"
          draggable={false}
          loading="lazy"
        />
      </div>
    ),
    href: item.url,
  }));

  // 4 Dedicated Folders with categorized web projects
  const folderCategories = [
    {
      id: "portfolio",
      name: t("port_folder_tab_portfolio"), // "Portofolio"
      label: t("port_folder_tab_portfolio"),
      color: "#C6F432", // Lime accent
      icon: Briefcase,
      badge: "Creative & Showcase",
      items: [
        {
          title: "Al-Fakhri Portfolio",
          tag: "Personal Branding",
          image: "/personal-branding.webp",
          url: "https://al-fakhri.netlify.app",
          isUpcoming: false,
        },
        {
          title: "Seabiru UPI",
          tag: "Marine Ecosystem & Edu",
          image: "/seabiru.webp",
          url: "https://seabiru.netlify.app/",
          isUpcoming: false,
        },
        {
          title: "Finwise",
          tag: "FinTech Landing Page",
          image: "/finwise.webp",
          url: "https://landinggabut.vercel.app/",
          isUpcoming: false,
        },
      ],
    },
    {
      id: "company",
      name: t("port_folder_tab_company"), // "Company Profil"
      label: t("port_folder_tab_company"),
      color: "#C6F432", // Lime accent
      icon: Building2,
      badge: "Corporate & Business",
      items: [
        {
          title: "JP & Co.",
          tag: "Corporate Advisory",
          image: "/jp-co.webp",
          url: "https://www.jpandco.id/",
          isUpcoming: false,
        },
        {
          title: "Cantika Sejati",
          tag: "Eyelashes Manufacturer",
          image: "/cantika-sejati.webp",
          url: "https://cantikasejatieyelashes.com/",
          isUpcoming: false,
        },
        {
          title: "RM Tirto Mulyo",
          tag: "Restaurant & Culinary",
          image: "/tirto.webp",
          url: "https://tirto-mulyo.netlify.app/",
          isUpcoming: false,
        },
      ],
    },
    {
      id: "event",
      name: t("port_folder_tab_event"), // "Event"
      label: t("port_folder_tab_event"),
      color: "#C6F432", // Lime accent
      icon: CalendarCheck,
      badge: "Summit & Festival",
      items: [
        {
          title: "Data Slayer",
          tag: "Tech & Data Event",
          image: "/data-salyer.webp",
          url: "https://data-slayer.com/",
          isUpcoming: false,
        },
        {
          title: "",
          tag: "",
          image: null,
          url: null,
          isUpcoming: true,
        },
        {
          title: "",
          tag: "",
          image: null,
          url: null,
          isUpcoming: true,
        },
      ],
    },
    {
      id: "webapp",
      name: t("port_folder_tab_webapp"), // "Web Apps & SaaS"
      label: t("port_folder_tab_webapp"),
      color: "#C6F432", // Lime accent
      icon: LayoutDashboard,
      badge: "Dashboard & SaaS",
      items: [
        {
          title: "Finora Management",
          tag: "FinTech & Money App",
          image: "/finora.webp",
          url: "https://finora-management-money.vercel.app/",
          isUpcoming: false,
        },
        {
          title: "Cycling Analytics",
          tag: "Sports Dashboard",
          image: "/cycling-analitics.webp",
          url: "https://cycling-analytics-omega.vercel.app/",
          isUpcoming: false,
        },
        {
          title: "Marine Intelligence",
          tag: "Maritime Analytics",
          image: "/marinne.webp",
          url: "https://kelautan.netlify.app",
          isUpcoming: false,
        },
        {
          title: "Eco-Tani SaaS",
          tag: "AgriTech Platform",
          image: "/ecotani.webp",
          url: "https://eco-tani.vercel.app",
          isUpcoming: false,
        },
      ],
    },
  ];

  return (
    <section id="portfolio" className={`py-24 relative z-10 overflow-hidden transition-colors duration-300 ${
      isDark ? "bg-[#0B0B0C]" : "bg-white"
    }`}>
      {/* 1. Section Header (Centered) */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
              isDark
                ? "bg-[#121214] border border-[#C6F432]/30 text-[#C6F432] shadow-[0_0_15px_rgba(198,244,50,0.1)]"
                : "bg-lime-50 border border-lime-300 text-lime-800"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {t("port_title")} {t("port_title_highlight")}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-4 transform-gpu ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {t("port_title")}{" "}
            <span className={`italic font-serif ${isDark ? "text-[#C6F432]" : "text-[#4d7c0f]"}`}>
              {t("port_title_highlight")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-2xl mx-auto text-base md:text-lg transform-gpu mb-4 ${
              isDark ? "text-gray-400" : "text-slate-600"
            }`}
          >
            {t("port_subtitle")}
          </motion.p>
        </div>
      </div>

      {/* 2. Top Carousel Showcase */}
      {/* 2A. Desktop WebGL Liquid FlexCarousel (>= 768px) - 100% UNTOUCHED & RICH */}
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-[400px] sm:h-[470px] md:h-[520px] mb-16 md:mb-20 relative overflow-hidden"
        >
          <FlexCarousel
            items={carouselItems}
            preset="liquid"
            fit="natural"
            cardHeight={0.68}
            radius={20}
            gap={0.035}
            autoplay={true}
            interval={3500}
            captions={true}
            focusOnClick={true}
            captureWheel={false}
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* 2B. Mobile Infinite Looping Showcase (< 768px) - Zero text, infinite continuous motion, touch draggable */}
      <div className="block md:hidden mb-12 sm:mb-14 overflow-hidden w-full relative py-1">
        <LogoLoop
          logos={mobileProjectLogos}
          speed={36}
          direction="left"
          gap={16}
          logoHeight={168}
          pauseOnHover={false}
          scaleOnHover={false}
          fadeOut={true}
          fadeOutColor={isDark ? "#0B0B0C" : "#ffffff"}
          fadeOutWidth={0.08}
          labels="none"
          draggable={true}
          className="cursor-grab active:cursor-grabbing select-none"
        />
      </div>

      {/* 3. Project Folders by Category */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="pt-2">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className={`text-xl md:text-2xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              {language === "id"
                ? "Katalog Proyek Berdasarkan Kategori"
                : "Project Folders by Category"}
            </h3>
          </div>

          {/* 3. 4 Interactive 3D Folders (1 Column on Mobile "1 1", 2 Columns on Tablet, 4 Columns on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 text-left max-w-md md:max-w-none mx-auto">
            {folderCategories.map((folder, fIndex) => {
              const IconComponent = folder.icon;

              const folderItems = folder.items.map((item) => {
                if (item.isUpcoming) {
                  return {
                    title: "",
                    description: "",
                    content: (
                      <div className={`flex flex-col items-center justify-center h-full w-full p-2.5 rounded-md select-none text-center border border-dashed ${
                        isDark ? "bg-[#161618] border-white/15" : "bg-slate-50 border-slate-300"
                      }`}>
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-1 ${
                          isDark ? "bg-white/5 text-[#C6F432]" : "bg-lime-50 text-lime-700"
                        }`}>
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                        <span className={`text-[9px] font-bold tracking-wider uppercase ${
                          isDark ? "text-gray-400" : "text-slate-500"
                        }`}>
                          {t("port_status_coming_soon")}
                        </span>
                      </div>
                    ),
                  };
                }

                return {
                  title: item.title,
                  description: item.tag,
                  content: (
                    <div className={`flex flex-col h-full w-full p-2.5 select-none border ${
                      isDark ? "bg-[#161618] border-white/10" : "bg-white border-slate-200"
                    }`}>
                      <div className={`relative w-full h-[62%] rounded-md overflow-hidden mb-2 border ${
                        isDark ? "bg-black/60 border-white/10" : "bg-slate-100 border-slate-200"
                      }`}>
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            draggable={false}
                            className="w-full h-full object-cover object-top pointer-events-none"
                          />
                        )}
                      </div>
                      <div className="flex-1 flex flex-col justify-between overflow-hidden">
                        <span className={`font-bold text-[11px] truncate leading-tight ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          {item.title}
                        </span>
                        <div className="flex items-center justify-between">
                          <span className={`text-[9px] font-semibold uppercase tracking-wider truncate ${
                            isDark ? "text-[#C6F432]" : "text-lime-700"
                          }`}>
                            {item.tag}
                          </span>
                          {item.url && (
                            <span className="text-[8px] font-extrabold text-[#0B0B0C] bg-[#C6F432] px-1.5 py-0.5 rounded font-mono">
                              Live
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ),
                };
              });

              return (
                <motion.div
                  key={folder.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: fIndex * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`flex flex-col items-center rounded-3xl p-4 sm:p-5 transition-all duration-300 relative group w-full border ${
                    isDark
                      ? "bg-[#121214] border-white/10 hover:border-[#C6F432]/40 hover:shadow-[0_0_30px_rgba(198,244,50,0.1)]"
                      : "bg-[#F8FAFC] border-slate-200/90 shadow-sm hover:border-lime-400 hover:shadow-md"
                  }`}
                >
                  {/* Folder Card Header */}
                  <div className="w-full flex items-center justify-between mb-2 gap-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-[#0B0B0C] bg-[#C6F432] shadow-xs shrink-0 font-bold"
                      >
                        <IconComponent className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <span className={`font-bold text-sm tracking-tight truncate ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>
                        {folder.name}
                      </span>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 border ${
                      isDark
                        ? "bg-white/5 border-white/10 text-[#C6F432]"
                        : "bg-white border-slate-200 text-lime-800 shadow-2xs"
                    }`}>
                      {folder.items.length} Web
                    </span>
                  </div>

                  {/* 3D Interactive Folder Component */}
                  <div className="relative w-full min-h-[210px] sm:min-h-[220px] flex items-center justify-center py-2 overflow-visible">
                    <Folder
                      label={folder.label}
                      color={folder.color}
                      paperColor={isDark ? "#161618" : "#ffffff"}
                      tabPosition="center"
                      size={isMobile ? 0.72 : 0.88}
                      layout="spread"
                      openOn="click"
                      draggable={true}
                      zoomOnClick={true}
                      theme={isDark ? "dark" : "light"}
                      items={folderItems}
                      onItemClick={(_, index) => {
                        const item = folder.items[index];
                        if (item?.url) window.open(item.url, "_blank");
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
