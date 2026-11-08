"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  Briefcase,
  Building2,
  CalendarCheck,
  LayoutDashboard,
} from "lucide-react";
import Image from "next/image";
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

type ProjectCategory = "all" | "portfolio" | "company" | "event" | "webapp";

export default function Portfolio() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  // 4 Dedicated Folders with categorized web projects
  const folderCategories = [
    {
      id: "portfolio" as ProjectCategory,
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
      id: "company" as ProjectCategory,
      name: t("port_folder_tab_company"), // "Company Profil"
      label: t("port_folder_tab_company"),
      color: "#2563eb", // Royal blue
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
      id: "event" as ProjectCategory,
      name: t("port_folder_tab_event"), // "Event"
      label: t("port_folder_tab_event"),
      color: "#7c3aed", // Violet / Purple
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
      id: "webapp" as ProjectCategory,
      name: t("port_folder_tab_webapp"), // "Web Apps & SaaS"
      label: t("port_folder_tab_webapp"),
      color: "#0d9488", // Teal
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

  // Projects list for the bottom gallery grid
  const allProjects = [
    {
      title: "Al-Fakhri Portfolio",
      category: "portfolio" as ProjectCategory,
      categoryLabel: "Portofolio",
      stack: ["Personal Branding", "React", "Tailwind CSS"],
      image: "/personal-branding.webp",
      url: "https://al-fakhri.netlify.app",
      color: "from-slate-800 to-slate-900",
      isLive: true,
    },
    {
      title: "Convivium",
      category: "company" as ProjectCategory,
      categoryLabel: "Company Profile",
      stack: ["Company Profile", "Restaurant F&B", "UI/UX"],
      image: "/company-profile.webp",
      url: "https://convivium.netlify.app",
      color: "from-stone-700 to-stone-800",
      isLive: true,
    },
    {
      title: "Marine Intelligence System",
      category: "webapp" as ProjectCategory,
      categoryLabel: "Web App & SaaS",
      stack: ["Web App", "Dashboard", "Analytics"],
      image: "/marinne.webp",
      url: "https://kelautan.netlify.app",
      color: "from-cyan-900 to-blue-900",
      isLive: true,
    },
    {
      title: "Eco-Tani SaaS",
      category: "webapp" as ProjectCategory,
      categoryLabel: "Web App & SaaS",
      stack: ["SaaS Platform", "Green Tech", "Cloud"],
      image: "/ecotani.webp",
      url: "https://eco-tani.vercel.app",
      color: "from-green-500 to-emerald-700",
      isLive: true,
    },
    {
      title: "Tech Summit Indonesia",
      category: "event" as ProjectCategory,
      categoryLabel: "Event Landing",
      stack: ["Event Web", "Ticketing", "Schedule"],
      image: "/ecotani.webp",
      url: null,
      color: "from-purple-800 to-indigo-950",
      isLive: false,
    },
    {
      title: "Nusantara Supply Chain",
      category: "company" as ProjectCategory,
      categoryLabel: "Company Profile",
      stack: ["Logistics", "Fleet Monitoring", "Corporate"],
      image: "/company-profile.webp",
      url: null,
      color: "from-blue-800 to-slate-900",
      isLive: false,
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeTab);

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: t("port_filter_all") },
    { id: "portfolio", label: t("port_filter_portfolio") },
    { id: "company", label: t("port_filter_company") },
    { id: "event", label: t("port_filter_event") },
    { id: "webapp", label: t("port_filter_webapp") },
  ];

  return (
    <section id="portfolio" className="py-24 relative z-10 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
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
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg transform-gpu mb-12"
          >
            {t("port_subtitle")}
          </motion.p>

          {/* 4 Multi-Category React Bits Folders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 mb-14 text-left">
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
                  className={`flex flex-col items-center bg-gray-50/80 border rounded-3xl p-5 transition-all duration-300 relative group ${
                    activeTab === folder.id
                      ? "border-sky-500 shadow-md ring-2 ring-sky-500/20 bg-sky-50/20"
                      : "border-gray-200/80 hover:border-sky-300 hover:shadow-lg"
                  }`}
                >
                  {/* Folder Card Header */}
                  <div className="w-full flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-white shadow-xs"
                        style={{ backgroundColor: folder.color }}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-gray-900 text-sm tracking-tight">
                        {folder.name}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-600">
                      {folder.items.length} Web
                    </span>
                  </div>

                  {/* 3D Interactive Folder Component */}
                  <div className="relative w-full min-h-[220px] flex items-center justify-center py-2">
                    <Folder
                      label={folder.label}
                      color={folder.color}
                      paperColor="#ffffff"
                      tabPosition="center"
                      size={0.88}
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

                  {/* Folder Hint / Action */}
                  <button
                    onClick={() => setActiveTab(folder.id)}
                    className="w-full mt-2 pt-2.5 border-t border-gray-200/60 flex items-center justify-between text-[11px] text-gray-500 hover:text-sky-600 font-medium cursor-pointer transition-colors"
                  >
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-sky-500" />
                      <span>{t("port_folder_hint")}</span>
                    </span>
                    <span className="text-sky-600 font-semibold text-[10px]">
                      Filter ↓
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Category Filter Pills for Gallery Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 mb-10">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-gray-900 text-white shadow-md shadow-black/10 scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.a
                layout
                href={project.url || "#"}
                target={project.url ? "_blank" : "_self"}
                rel="noopener noreferrer"
                key={project.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl overflow-hidden aspect-video bg-gray-50 border border-gray-200 shadow-sm hover:shadow-xl transition-[border-color,box-shadow] duration-300 flex flex-col cursor-pointer transform-gpu"
              >
                {/* Browser Chrome (Mac OS Style) */}
                <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5 shrink-0 z-10 relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>

                  {/* URL Bar */}
                  <div className="absolute left-1/2 -translate-x-1/2 h-5 bg-white border border-gray-200 rounded-md flex items-center px-3 min-w-[120px] max-w-[200px] overflow-hidden">
                    <span className="text-[10px] text-gray-400 truncate w-full text-center font-medium">
                      {project.url ? project.url.replace("https://", "") : "localhost:3000"}
                    </span>
                  </div>

                  {/* Category Tag in header */}
                  <span className="ml-auto text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Browser Content */}
                <div className="relative flex-1 bg-white overflow-hidden">
                  {/* Fallback gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} ${
                      project.url ? "opacity-90" : "opacity-30"
                    } transition-opacity duration-300`}
                  />

                  {/* Next.js Image with lazy loading and GPU transform */}
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 transform-gpu"
                    />
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-6 text-center z-20">
                    <h3 className="text-2xl font-bold text-white mb-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-200">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2 mb-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-200 delay-75">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.url ? (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-900 font-semibold text-xs group-hover:bg-sky-50 transition-colors translate-y-3 group-hover:translate-y-0 duration-200 delay-100 shadow-lg">
                        <span>{t("port_btn_visit")}</span>
                        <ExternalLink size={14} />
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-semibold text-xs backdrop-blur-sm border border-white/30">
                        <span>{t("port_status_coming_soon")}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
