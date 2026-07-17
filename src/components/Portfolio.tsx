"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

const projects = [
  {
    title: "Al-Fakhri Portfolio",
    stack: ["Personal Branding", "React", "Tailwind"],
    image: "/personal-branding.webp",
    url: "https://al-fakhri.netlify.app",
    color: "from-slate-800 to-slate-900",
  },
  {
    title: "Convivium",
    stack: ["Company Profile", "Restaurant", "UI/UX"],
    image: "/company-profile.webp",
    url: "https://convivium.netlify.app",
    color: "from-stone-700 to-stone-800",
  },
  {
    title: "Marine Intelligence System",
    stack: ["Web App", "Dashboard", "Analytics"],
    image: "/marinne.webp",
    url: "https://kelautan.netlify.app",
    color: "from-cyan-900 to-blue-900",
  },
  {
    title: "Eco-Tani SaaS",
    stack: ["SaaS", "Web App", "Green Tech"],
    image: "/ecotani.webp",
    url: "https://eco-tani.vercel.app",
    color: "from-green-500 to-emerald-700",
  },
];

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-24 relative z-10 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            {t("port_title")} <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">{t("port_title_highlight")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            {t("port_subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-video bg-gray-50 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
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
              </div>

              {/* Browser Content */}
              <div className="relative flex-1 bg-white overflow-hidden">
                {/* Fallback gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} ${project.url ? 'opacity-90' : 'opacity-20'} transition-opacity duration-500`} />
                
                {/* Actual Image if provided */}
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center z-20">
                  <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-sky-50 transition-colors translate-y-4 group-hover:translate-y-0 duration-300 delay-150 shadow-lg shadow-black/20">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
