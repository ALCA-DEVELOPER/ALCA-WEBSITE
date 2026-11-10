"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sparkles, RotateCw, RotateCcw } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const TiltedCard = dynamic(() => import("@/components/TiltedCard/TiltedCard"), {
  ssr: false,
  loading: () => (
    <div className="w-full sm:w-[320px] h-[260px] sm:h-[440px] rounded-2xl sm:rounded-3xl bg-[#121214] border border-white/10 animate-pulse flex items-center justify-center">
      <div className="w-10 sm:w-16 h-10 sm:h-16 rounded-full bg-white/5" />
    </div>
  ),
});

export default function Team() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const teamMembers = [
    {
      id: "fatih",
      name: t("team_member_1_name"), // "Fatih Al-Fakhri Muhammad"
      title: t("team_member_1_role"), // "Full Stack Developer"
      statusColor: "#C6F432",
      avatarUrl: "/fatih.webp",
      skills: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Cloud Architecture",
      ],
      bio: "Fokus merancang arsitektur web modern yang berkecepatan tinggi, aman, dan scalable untuk akselerasi bisnis.",
      bioEn:
        "Focused on engineering modern, secure, and highly scalable web architectures to accelerate business growth.",
    },
    {
      id: "wahyuni",
      name: t("team_member_2_name"), // "Wahyuni Salsabila"
      title: t("team_member_2_role"), // "Full Stack Developer"
      statusColor: "#C6F432",
      avatarUrl: "/wahyuni.webp",
      skills: [
        "Full Stack Dev",
        "Next.js",
        "React",
        "TypeScript",
        "UI/UX Design",
        "Figma Systems",
      ],
      bio: "Menggabungkan logika engineering yang tangguh dengan visual berstandar global untuk pengalaman pengguna terbaik.",
      bioEn:
        "Combining resilient engineering logic with world-class aesthetics to craft exceptional digital experiences.",
    },
  ];

  return (
    <section id="team" className={`py-24 relative z-10 overflow-hidden transition-colors duration-300 ${
      isDark ? "bg-[#0B0B0C]" : "bg-white"
    }`}>
      {/* Subtle ambient gradient in background */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none ${
        isDark
          ? "bg-[radial-gradient(ellipse_at_center,rgba(198,244,50,0.06)_0%,transparent_70%)]"
          : "bg-[radial-gradient(ellipse_at_center,rgba(198,244,50,0.18)_0%,transparent_70%)]"
      }`} />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
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
            <span>{t("team_badge")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={`text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-4 transform-gpu ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {t("team_title")}{" "}
            <span className={`italic font-serif ${isDark ? "text-[#C6F432]" : "text-[#4d7c0f]"}`}>
              {t("team_title_highlight")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed transform-gpu ${
              isDark ? "text-gray-400" : "text-slate-600"
            }`}
          >
            {t("team_subtitle")}
          </motion.p>
        </div>

        {/* 2 Interactive 3D Tilted Cards (2 Columns on Mobile, Flex on Desktop) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8 md:gap-14 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex justify-center w-full"
            >
              <TiltedCard
                imageSrc={member.avatarUrl}
                altText={member.name}
                captionText={`${member.name} - ${member.title}`}
                containerWidth={isMobile ? "100%" : 320}
                containerHeight={isMobile ? 260 : 440}
                imageWidth={isMobile ? "100%" : 320}
                imageHeight={isMobile ? 260 : 440}
                radius={isMobile ? 18 : 28}
                rotateAmplitude={isMobile ? 6 : 12}
                scaleOnHover={1.03}
                glare={0.65}
                glareColor={isDark ? "#C6F432" : "#84cc16"}
                flipOnClick={true}
                className="shadow-xl sm:shadow-2xl w-full"
                backContent={
                  <div className={`relative h-full w-full flex flex-col justify-between p-3 sm:p-6 md:p-7 text-left select-none border rounded-[inherit] overflow-hidden ${
                    isDark
                      ? "bg-[#121214] border-white/10 text-white"
                      : "bg-white border-slate-200 text-slate-900 shadow-xl"
                  }`}>
                    {/* Ambient Glow */}
                    <div className="absolute top-0 right-0 w-28 sm:w-44 h-28 sm:h-44 bg-[radial-gradient(circle,rgba(198,244,50,0.15)_0%,transparent_70%)] pointer-events-none" />

                    {/* Back Header */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#C6F432]" />
                          <span className={`text-[9px] sm:text-[11px] font-bold uppercase tracking-wider ${
                            isDark ? "text-[#C6F432]" : "text-lime-800"
                          }`}>
                            {language === "id"
                              ? "Stack & Skill"
                              : "Stack"}
                          </span>
                        </div>
                        <span className={`text-[8px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full border ${
                          isDark
                            ? "bg-[#C6F432]/10 text-[#C6F432] border-[#C6F432]/20"
                            : "bg-lime-100 text-lime-800 border-lime-300"
                        }`}>
                          ● {language === "id" ? "Aktif" : "Active"}
                        </span>
                      </div>

                      <h4 className={`text-xs sm:text-lg font-bold mt-1.5 sm:mt-3 leading-snug line-clamp-1 sm:line-clamp-none ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>
                        {member.name}
                      </h4>
                      <p className={`text-[10px] sm:text-xs font-semibold ${
                        isDark ? "text-gray-400" : "text-slate-500"
                      }`}>
                        {member.title}
                      </p>
                    </div>

                    {/* Skills Pills */}
                    <div className="relative z-10 my-1 sm:my-3">
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {member.skills.slice(0, isMobile ? 3 : 6).map((skill) => (
                          <span
                            key={skill}
                            className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-xs font-medium border ${
                              isDark
                                ? "bg-white/5 border-white/10 text-gray-200"
                                : "bg-slate-100 border-slate-200 text-slate-800"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bio Quote */}
                    <div className={`relative z-10 border rounded-xl sm:rounded-2xl p-2 sm:p-3.5 backdrop-blur-sm ${
                      isDark
                        ? "bg-white/5 border-white/10 text-gray-300"
                        : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}>
                      <p className="text-[9px] sm:text-xs leading-relaxed italic line-clamp-3">
                        "{language === "id" ? member.bio : member.bioEn}"
                      </p>
                    </div>

                    {/* Flip Back Hint */}
                    <div className={`relative z-10 pt-1.5 sm:pt-3 border-t flex items-center justify-between text-[9px] sm:text-xs ${
                      isDark ? "border-white/10 text-gray-400" : "border-slate-200 text-slate-500"
                    }`}>
                      <span className={`flex items-center gap-1 font-medium ${
                        isDark ? "text-[#C6F432]" : "text-lime-800"
                      }`}>
                        <RotateCcw className="w-3 h-3" />
                        <span>
                          {language === "id"
                            ? "Balik"
                            : "Flip back"}
                        </span>
                      </span>
                      <div className={`w-5 h-5 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center ${
                        isDark
                          ? "bg-white/5 border-white/10 text-gray-300"
                          : "bg-slate-100 border-slate-200 text-slate-700"
                      }`}>
                        <RotateCcw className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </div>
                    </div>
                  </div>
                }
              >
                {/* Front Side Overlay: Name, Title, and Flip Prompt */}
                <div className="absolute inset-0 flex flex-col justify-end p-2.5 sm:p-6 z-[3] pointer-events-none select-none">
                  {/* Subtle dark gradient for high readability over photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/50 to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <span
                        className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full"
                        style={{ backgroundColor: member.statusColor }}
                      />
                      <span className="text-[8px] sm:text-[11px] font-bold text-[#C6F432] uppercase tracking-wider sm:tracking-widest truncate">
                        {member.title}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-xl md:text-2xl font-extrabold text-white tracking-tight leading-snug line-clamp-2">
                      {member.name}
                    </h3>

                    {/* Flip Invitation Prompt */}
                    <div className="mt-1.5 sm:mt-4 pt-1.5 sm:pt-3 border-t border-white/15 flex items-center justify-between text-[9px] sm:text-xs text-gray-300">
                      <span className="font-medium text-gray-300 flex items-center gap-1">
                        <RotateCw className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#C6F432]" />
                        <span>
                          {language === "id"
                            ? "Balik"
                            : "Flip"}
                        </span>
                      </span>
                      <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-md shadow-sm">
                        <RotateCw className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </TiltedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
