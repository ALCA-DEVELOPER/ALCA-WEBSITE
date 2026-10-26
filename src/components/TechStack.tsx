"use client";

import { useLanguage } from "@/i18n/LanguageContext";
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
} from "react-icons/si";

const techList = [
  { name: "Next.js 16", icon: SiNextdotjs, color: "text-slate-900" },
  { name: "React 19", icon: SiReact, color: "text-sky-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Tailwind CSS v4", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-600" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
  { name: "Vercel", icon: SiVercel, color: "text-slate-900" },
  { name: "Framer Motion", icon: SiFramer, color: "text-purple-500" },
  { name: "Figma", icon: SiFigma, color: "text-pink-500" },
  { name: "Docker", icon: SiDocker, color: "text-sky-600" },
  { name: "Python", icon: SiPython, color: "text-amber-500" },
];

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden relative z-10">
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className="text-xs font-bold tracking-widest text-sky-600 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
          {t("tech_badge")}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-3 tracking-tight">
          {t("tech_title")}
        </h3>
      </div>

      {/* Ticker with gradient edge mask */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee gap-6 py-2">
          {/* Double array for seamless loop */}
          {[...techList, ...techList].map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gray-50/80 hover:bg-white border border-gray-200/80 hover:border-sky-300 shadow-xs hover:shadow-sm transition-[border-color,box-shadow,background-color] duration-200 shrink-0 cursor-default group"
            >
              <tech.icon className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform duration-200`} />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
