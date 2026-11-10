"use client";

import dynamic from "next/dynamic";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import type { LogoItem } from "@/components/LogoLoop/LogoLoop";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiFramer,
  SiFigma,
  SiDocker,
  SiPython,
  SiGithub,
  SiGraphql,
} from "react-icons/si";

const LogoLoop = dynamic(() => import("@/components/LogoLoop/LogoLoop"), {
  ssr: false,
  loading: () => (
    <div className="h-16 flex items-center justify-center opacity-30 animate-pulse">
      <div className="w-1/2 h-8 bg-slate-200 rounded-full" />
    </div>
  ),
});

const techLogos: LogoItem[] = [
  {
    node: <SiNextdotjs className="w-10 h-10 transition-colors" />,
    title: "Next.js 16",
    hoverColor: "#000000",
  },
  {
    node: <SiReact className="w-10 h-10 transition-colors" />,
    title: "React 19",
    hoverColor: "#0ea5e9",
  },
  {
    node: <SiTypescript className="w-10 h-10 transition-colors" />,
    title: "TypeScript",
    hoverColor: "#2563eb",
  },
  {
    node: <SiTailwindcss className="w-10 h-10 transition-colors" />,
    title: "Tailwind CSS v4",
    hoverColor: "#06b6d4",
  },
  {
    node: <SiNodedotjs className="w-10 h-10 transition-colors" />,
    title: "Node.js",
    hoverColor: "#22c55e",
  },
  {
    node: <SiPostgresql className="w-10 h-10 transition-colors" />,
    title: "PostgreSQL",
    hoverColor: "#336791",
  },
  {
    node: <SiSupabase className="w-10 h-10 transition-colors" />,
    title: "Supabase",
    hoverColor: "#3ecf8e",
  },
  {
    node: <SiVercel className="w-10 h-10 transition-colors" />,
    title: "Vercel",
    hoverColor: "#000000",
  },
  {
    node: <SiFramer className="w-10 h-10 transition-colors" />,
    title: "Framer Motion",
    hoverColor: "#a855f7",
  },
  {
    node: <SiFigma className="w-10 h-10 transition-colors" />,
    title: "Figma",
    hoverColor: "#ec4899",
  },
  {
    node: <SiDocker className="w-10 h-10 transition-colors" />,
    title: "Docker",
    hoverColor: "#0284c7",
  },
  {
    node: <SiPython className="w-10 h-10 transition-colors" />,
    title: "Python",
    hoverColor: "#f59e0b",
  },
  {
    node: <SiGithub className="w-10 h-10 transition-colors" />,
    title: "GitHub",
    hoverColor: "#181717",
  },
  {
    node: <SiGraphql className="w-10 h-10 transition-colors" />,
    title: "GraphQL",
    hoverColor: "#e535ab",
  },
];

export default function TechStack() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-14 border-y overflow-hidden relative z-10 transition-colors duration-300 ${
      isDark ? "bg-[#0B0B0C] border-white/5" : "bg-white border-slate-200"
    }`}>
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className={`text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border ${
          isDark
            ? "text-[#C6F432] bg-[#121214] border-[#C6F432]/30 shadow-[0_0_15px_rgba(198,244,50,0.1)]"
            : "text-lime-800 bg-lime-50 border-lime-300"
        }`}>
          {t("tech_badge")}
        </span>
        <h3 className={`text-xl md:text-2xl font-bold mt-3 tracking-tight ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
          {t("tech_title")}
        </h3>
      </div>

      {/* React Bits Logo Loop Component */}
      <div className="w-full relative py-2">
        <LogoLoop
          logos={techLogos}
          speed={55}
          direction="left"
          logoHeight={42}
          gap={54}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutWidth={0.16}
          fadeOutColor={isDark ? "#0B0B0C" : "#ffffff"}
          labels="hover"
          draggable={true}
          className={`cursor-grab ${
            isDark ? "text-gray-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
          }`}
        />
      </div>
    </section>
  );
}
