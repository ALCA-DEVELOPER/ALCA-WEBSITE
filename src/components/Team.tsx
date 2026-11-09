"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sparkles, RotateCw, RotateCcw } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TiltedCard = dynamic(() => import("@/components/TiltedCard/TiltedCard"), {
  ssr: false,
  loading: () => (
    <div className="w-[320px] h-[440px] rounded-3xl bg-slate-900/60 border border-slate-800 animate-pulse flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-slate-800/80" />
    </div>
  ),
});

export default function Team() {
  const { t, language } = useLanguage();

  const teamMembers = [
    {
      id: "fatih",
      name: t("team_member_1_name"), // "Fatih Al-Fakhri Muhammad"
      title: t("team_member_1_role"), // "Full Stack Developer"
      statusColor: "#10b981",
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
      statusColor: "#38bdf8",
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
    <section id="team" className="py-24 relative z-10 bg-white overflow-hidden">
      {/* Subtle ambient gradient in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("team_badge")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 transform-gpu"
          >
            {t("team_title")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
              {t("team_title_highlight")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed transform-gpu"
          >
            {t("team_subtitle")}
          </motion.p>
        </div>

        {/* 2 Interactive 3D Tilted Cards (Flip on Click) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-14 max-w-4xl mx-auto">
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
              className="flex justify-center"
            >
              <TiltedCard
                imageSrc={member.avatarUrl}
                altText={member.name}
                captionText={`${member.name} - ${member.title}`}
                containerWidth={320}
                containerHeight={440}
                imageWidth={320}
                imageHeight={440}
                radius={28}
                rotateAmplitude={12}
                scaleOnHover={1.03}
                glare={0.65}
                glareColor="#38bdf8"
                flipOnClick={true}
                className="shadow-2xl"
                backContent={
                  <div className="relative h-full w-full bg-slate-950 flex flex-col justify-between p-6 md:p-7 text-left select-none border border-white/10 rounded-[inherit] overflow-hidden">
                    {/* Ambient Glow */}
                    <div className="absolute top-0 right-0 w-44 h-44 bg-[radial-gradient(circle,rgba(56,189,248,0.18)_0%,transparent_70%)] pointer-events-none" />

                    {/* Back Header */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-sky-400" />
                          <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                            {language === "id"
                              ? "Keahlian & Stack"
                              : "Tech & Expertise"}
                          </span>
                        </div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          ● {language === "id" ? "Aktif" : "Active"}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white mt-3 leading-snug">
                        {member.name}
                      </h4>
                      <p className="text-xs font-semibold text-gray-400">
                        {member.title}
                      </p>
                    </div>

                    {/* Skills Pills */}
                    <div className="relative z-10 my-3">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                        Core Technologies
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-gray-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bio Quote */}
                    <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
                      <p className="text-xs text-gray-300 leading-relaxed italic">
                        "{language === "id" ? member.bio : member.bioEn}"
                      </p>
                    </div>

                    {/* Flip Back Hint */}
                    <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1.5 font-medium text-sky-400">
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>
                          {language === "id"
                            ? "Klik untuk kembali"
                            : "Click to flip back"}
                        </span>
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-gray-300">
                        <RotateCcw className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                }
              >
                {/* Front Side Overlay: Name, Title, and Flip Prompt */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-[3] pointer-events-none select-none">
                  {/* Subtle dark gradient for high readability over photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: member.statusColor }}
                      />
                      <span className="text-[11px] font-bold text-sky-400 uppercase tracking-widest">
                        {member.title}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-snug">
                      {member.name}
                    </h3>

                    {/* Flip Invitation Prompt */}
                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-gray-300">
                      <span className="font-medium text-gray-300 flex items-center gap-1.5">
                        <RotateCw className="w-3.5 h-3.5 text-sky-400" />
                        <span>
                          {language === "id"
                            ? "Klik untuk membalik"
                            : "Click to flip"}
                        </span>
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white backdrop-blur-md shadow-sm">
                        <RotateCw className="w-3.5 h-3.5" />
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
