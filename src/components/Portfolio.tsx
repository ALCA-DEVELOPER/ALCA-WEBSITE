"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

type ProjectCategory = "all" | "landing" | "company" | "webapp";

const projects = [
  {
    title: "Al-Fakhri Portfolio",
    category: "landing",
    categoryLabel: "Landing Page",
    stack: ["Personal Branding", "React", "Tailwind CSS"],
    image: "/personal-branding.webp",
    url: "https://al-fakhri.netlify.app",
    color: "from-slate-800 to-slate-900",
  },
  {
    title: "Convivium",
    category: "company",
    categoryLabel: "Company Profile",
    stack: ["Company Profile", "Restaurant F&B", "UI/UX"],
    image: "/company-profile.webp",
    url: "https://convivium.netlify.app",
    color: "from-stone-700 to-stone-800",
  },
  {
    title: "Marine Intelligence System",
    category: "webapp",
    categoryLabel: "Web App & SaaS",
    stack: ["Web App", "Dashboard", "Analytics"],
    image: "/marinne.webp",
    url: "https://kelautan.netlify.app",
    color: "from-cyan-900 to-blue-900",
  },
  {
    title: "Eco-Tani SaaS",
    category: "webapp",
    categoryLabel: "Web App & SaaS",
    stack: ["SaaS Platform", "Green Tech", "Cloud"],
    image: "/ecotani.webp",
    url: "https://eco-tani.vercel.app",
    color: "from-green-500 to-emerald-700",
  },
];

export default function Portfolio() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: t("port_filter_all") },
    { id: "landing", label: t("port_filter_landing") },
    { id: "company", label: t("port_filter_company") },
    { id: "webapp", label: t("port_filter_webapp") },
  ];

  return (
    <section id="portfolio" className="py-24 relative z-10 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("port_title")} {t("port_title_highlight")}</span>
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
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg transform-gpu"
          >
            {t("port_subtitle")}
          </motion.p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
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

        {/* Project Grid */}
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
                      project.url ? "opacity-90" : "opacity-20"
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
                    {project.url && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-900 font-semibold text-xs group-hover:bg-sky-50 transition-colors translate-y-3 group-hover:translate-y-0 duration-200 delay-100 shadow-lg">
                        <span>{t("port_btn_visit")}</span>
                        <ExternalLink size={14} />
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
