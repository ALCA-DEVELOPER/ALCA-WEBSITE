"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, Terminal, Bug, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const processes = [
    {
      title: t("proc_1_title"),
      points: [t("proc_1_p1"), t("proc_1_p2"), t("proc_1_p3")],
      icon: Lightbulb,
    },
    {
      title: t("proc_2_title"),
      points: [t("proc_2_p1"), t("proc_2_p2"), t("proc_2_p3")],
      icon: PenTool,
    },
    {
      title: t("proc_3_title"),
      points: [t("proc_3_p1"), t("proc_3_p2"), t("proc_3_p3")],
      icon: Terminal,
    },
    {
      title: t("proc_4_title"),
      points: [t("proc_4_p1"), t("proc_4_p2"), t("proc_4_p3")],
      icon: Bug,
    },
    {
      title: t("proc_5_title"),
      points: [t("proc_5_p1"), t("proc_5_p2"), t("proc_5_p3")],
      icon: Rocket,
    },
    {
      title: t("proc_6_title"),
      points: [t("proc_6_p1"), t("proc_6_p2"), t("proc_6_p3")],
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="process" className="py-24 relative z-10 bg-transparent overflow-hidden">
      {/* Background decoration using high-performance radial gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,165,233,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(59,130,246,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("proc_title")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 transform-gpu"
          >
            {t("proc_title")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
              {t("proc_title_highlight")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg transform-gpu"
          >
            {t("proc_subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative max-w-6xl mx-auto">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col p-8 rounded-3xl bg-white border border-gray-100 hover:border-sky-400/40 hover:shadow-xl hover:shadow-sky-500/10 shadow-sm transition-[border-color,box-shadow] duration-300 group transform-gpu overflow-hidden"
            >
              {/* Step number watermark */}
              <span className="absolute top-6 right-6 font-mono text-3xl font-extrabold text-gray-200/70 group-hover:text-sky-500/25 transition-colors duration-300 pointer-events-none select-none">
                0{index + 1}
              </span>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <process.icon className="w-6 h-6 text-sky-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-blue-600 transition-all duration-300 pr-8">
                  {process.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {process.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50 mt-1.5 shrink-0 group-hover:bg-sky-500 transition-colors" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
