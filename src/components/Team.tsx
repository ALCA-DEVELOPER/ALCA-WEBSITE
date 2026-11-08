"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const SpotlightCard = dynamic(() => import("@/components/SpotlightCard/SpotlightCard"), {
  ssr: false,
  loading: () => (
    <div className="w-[340px] h-[200px] rounded-3xl bg-slate-900/60 border border-slate-800 animate-pulse flex items-center justify-center">
      <div className="w-14 h-14 rounded-full bg-slate-800/80" />
    </div>
  ),
});

export default function Team() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      id: "fatih",
      name: t("team_member_1_name"), // "Fatih Al-Fakhri Muhammad"
      title: t("team_member_1_role"), // "Full Stack Developer"
      statusColor: "#10b981",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "wahyuni",
      name: t("team_member_2_name"), // "Wahyuni Salsabila"
      title: t("team_member_2_role"), // "Full Stack Developer"
      statusColor: "#38bdf8",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
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

        {/* 2 Clean & Minimalist Spotlight Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center w-full max-w-[340px]"
            >
              <SpotlightCard
                spotlightColor="rgba(56, 189, 248, 0.35)"
                intensity={0.25}
                spotlightSize={280}
                borderGlow={0.85}
                theme="dark"
                className="w-full p-6 md:p-8 border border-white/10 rounded-3xl transition-transform duration-300 hover:-translate-y-1 shadow-xl"
              >
                {/* Avatar with Status Dot */}
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={member.avatarUrl}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/15 shadow-md ring-2 ring-sky-500/20"
                    />
                    <span
                      className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-slate-900"
                      style={{ backgroundColor: member.statusColor }}
                    />
                  </div>
                </div>

                {/* Name & Role */}
                <div className="mt-5 text-left">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-sky-400 mt-1">
                    {member.title}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
