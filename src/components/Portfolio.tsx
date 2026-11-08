"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Briefcase,
  Building2,
  CalendarCheck,
  LayoutDashboard,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/i18n/LanguageContext";

const Folder = dynamic(() => import("@/components/Folder/Folder"), {
  ssr: false,
  loading: () => (
    <div className="w-[220px] h-[170px] rounded-2xl bg-sky-50/60 border border-sky-100 flex items-center justify-center animate-pulse">
      <div className="w-10 h-10 rounded-xl bg-sky-200/50" />
    </div>
  ),
});

const FlexCarousel = dynamic(
  () => import("@/components/FlexCarousel/FlexCarousel"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] sm:h-[460px] rounded-3xl bg-slate-50/70 border border-slate-100 flex items-center justify-center animate-pulse">
        <div className="w-12 h-12 rounded-full bg-slate-200/80" />
      </div>
    ),
  }
);

export default function Portfolio() {
  const { t, language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Carousel showcase items featuring the live projects & visual highlights
  const carouselItems = [
    {
      src: "/personal-branding.webp",
      alt: "Al-Fakhri Portfolio Website",
      title: "Al-Fakhri Portfolio",
      subtitle: "Personal Branding & Creative Developer",
    },
    {
      src: "/company-profile.webp",
      alt: "Convivium Italian Restaurant Profile",
      title: "Convivium Profile",
      subtitle: "Authentic Italian Restaurant & Pastry",
    },
    {
      src: "/marinne.webp",
      alt: "Marine Intelligence System Dashboard",
      title: "Marine Intelligence System",
      subtitle: "Oceanographic Real-Time Analytics",
    },
    {
      src: "/ecotani.webp",
      alt: "Eco-Tani Smart Agriculture SaaS",
      title: "Eco-Tani SaaS Platform",
      subtitle: "Precision Agriculture & Cloud Monitoring",
    },
    {
      src: "/company-profile.webp",
      alt: "Corporate Identity Web Showcase",
      title: "Bespoke Corporate Web",
      subtitle: "High-Performance Mobile-First UI/UX",
    },
    {
      src: "/personal-branding.webp",
      alt: "Creative Developer Showcase",
      title: "Creative Developer Studio",
      subtitle: "Aesthetic Layouts & Fast Load Times",
    },
    {
      src: "/marinne.webp",
      alt: "Maritime Big Data Cloud Portal",
      title: "Maritime Big Data Cloud",
      subtitle: "Real-Time Telemetry & API Integration",
    },
    {
      src: "/ecotani.webp",
      alt: "Smart Cloud Agro Platform",
      title: "Smart Cloud Agro Hub",
      subtitle: "IoT Sensors & Scalable Analytics",
    },
  ];

  // 4 Dedicated Folders with categorized web projects
  const folderCategories = [
    {
      id: "portfolio",
      name: t("port_folder_tab_portfolio"), // "Portofolio"
      label: t("port_folder_tab_portfolio"),
      color: "#0284c7", // Sky blue
      icon: Briefcase,
      badge: "Personal & Creative",
      items: [
        {
          title: "Al-Fakhri Portfolio",
          tag: "Personal Branding",
          image: "/personal-branding.webp",
          url: "https://al-fakhri.netlify.app",
          isUpcoming: false,
        },
        {
          title: "Creative Showcase",
          tag: "Art & Motion Design",
          image: "/company-profile.webp",
          url: null,
          isUpcoming: true,
        },
        {
          title: "Developer Resume Web",
          tag: "Interactive CV",
          image: "/personal-branding.webp",
          url: null,
          isUpcoming: true,
        },
      ],
    },
    {
      id: "company",
      name: t("port_folder_tab_company"), // "Company Profil"
      label: t("port_folder_tab_company"),
      color: "#0284c7", // Sky blue (same as portfolio)
      icon: Building2,
      badge: "Corporate & Business",
      items: [
        {
          title: "Convivium Restaurant",
          tag: "F&B & Hospitality",
          image: "/company-profile.webp",
          url: "https://convivium.netlify.app",
          isUpcoming: false,
        },
        {
          title: "Nusantara Logistics",
          tag: "Supply Chain & Fleet",
          image: "/marinne.webp",
          url: null,
          isUpcoming: true,
        },
        {
          title: "Artha Partner Law",
          tag: "Legal & Corporate",
          image: "/company-profile.webp",
          url: null,
          isUpcoming: true,
        },
      ],
    },
    {
      id: "event",
      name: t("port_folder_tab_event"), // "Event"
      label: t("port_folder_tab_event"),
      color: "#0284c7", // Sky blue (same as portfolio)
      icon: CalendarCheck,
      badge: "Summit & Festival",
      items: [
        {
          title: "Tech Summit Indonesia",
          tag: "Conference & Ticketing",
          image: "/ecotani.webp",
          url: null,
          isUpcoming: true,
        },
        {
          title: "SoundFest Concert Tour",
          tag: "Live Music Expo",
          image: "/personal-branding.webp",
          url: null,
          isUpcoming: true,
        },
        {
          title: "National Hackathon Hub",
          tag: "Competition Portal",
          image: "/marinne.webp",
          url: null,
          isUpcoming: true,
        },
      ],
    },
    {
      id: "webapp",
      name: t("port_folder_tab_webapp"), // "Web Apps & SaaS"
      label: t("port_folder_tab_webapp"),
      color: "#0284c7", // Sky blue (same as portfolio)
      icon: LayoutDashboard,
      badge: "Dashboard & SaaS",
      items: [
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
        {
          title: "Retail POS System",
          tag: "Cloud Cashier & Stock",
          image: "/company-profile.webp",
          url: null,
          isUpcoming: true,
        },
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative z-10 bg-white overflow-hidden">
      {/* 1. Section Header (Centered) */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4"
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
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 transform-gpu"
          >
            {t("port_title")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
              {t("port_title_highlight")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg transform-gpu mb-4"
          >
            {t("port_subtitle")}
          </motion.p>
        </div>
      </div>

      {/* 2. React Bits Flex Carousel (Full Width Edge-to-Edge across entire screen, no border/box) */}
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

      {/* 3. 4 Interactive 3D Folders (Centered in Container) */}
      <div className="container mx-auto px-3.5 sm:px-6 md:px-12">
        <div className="pt-2">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              {language === "id"
                ? "Katalog Proyek Berdasarkan Kategori"
                : "Project Folders by Category"}
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-7 text-left">
            {folderCategories.map((folder, fIndex) => {
              const IconComponent = folder.icon;

              const folderItems = folder.items.map((item) => ({
                title: item.title,
                description: item.tag,
                content: (
                  <div className="flex flex-col h-full w-full p-2.5 bg-white select-none">
                    <div className="relative w-full h-[62%] rounded-md overflow-hidden bg-slate-100 mb-2 shadow-xs border border-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        draggable={false}
                        className="w-full h-full object-cover object-top pointer-events-none"
                      />
                      {item.isUpcoming && (
                        <div className="absolute top-1 right-1 px-1.5 py-0.5 rounded-full bg-slate-900/80 text-white text-[8px] font-bold backdrop-blur-xs">
                          {t("port_status_coming_soon")}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-between overflow-hidden">
                      <span className="font-bold text-[11px] text-gray-900 truncate leading-tight">
                        {item.title}
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-semibold text-sky-600 uppercase tracking-wider truncate">
                          {item.tag}
                        </span>
                        {item.url && (
                          <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200/50">
                            Live
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ),
              }));

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
                  className="flex flex-col items-center bg-gray-50/80 border border-gray-200/80 hover:border-sky-300 hover:shadow-lg rounded-2xl sm:rounded-3xl p-3 sm:p-5 transition-all duration-300 relative group"
                >
                  {/* Folder Card Header */}
                  <div className="w-full flex items-center justify-between mb-2 gap-1">
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <div
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-white shadow-xs shrink-0"
                        style={{ backgroundColor: folder.color }}
                      >
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="font-bold text-gray-900 text-xs sm:text-sm tracking-tight truncate">
                        {folder.name}
                      </span>
                    </div>

                    <span className="text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-600 shrink-0">
                      {folder.items.length} Web
                    </span>
                  </div>

                  {/* 3D Interactive Folder Component */}
                  <div className="relative w-full min-h-[165px] sm:min-h-[220px] flex items-center justify-center py-1 sm:py-2">
                    <Folder
                      label={folder.label}
                      color={folder.color}
                      paperColor="#ffffff"
                      tabPosition="center"
                      size={isMobile ? 0.65 : 0.88}
                      layout="spread"
                      openOn="click"
                      draggable={true}
                      zoomOnClick={true}
                      theme="light"
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
