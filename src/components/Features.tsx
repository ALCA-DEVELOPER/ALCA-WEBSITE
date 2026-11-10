"use client";

import { motion } from "framer-motion";
import { Zap, Code2, LayoutTemplate, Headset, CheckCircle2, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";

export default function Features() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="features" className={`py-24 relative z-10 transition-colors duration-300 ${
      isDark ? "bg-[#0B0B0C]" : "bg-white"
    }`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
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
            <span>{t("feat_title")} {t("feat_title_highlight")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-4 transform-gpu ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {t("feat_title")}{" "}
            <span className={`italic font-serif ${isDark ? "text-[#C6F432]" : "text-[#4d7c0f]"}`}>
              {t("feat_title_highlight")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-2xl mx-auto text-base md:text-lg leading-relaxed transform-gpu ${
              isDark ? "text-gray-400" : "text-slate-600"
            }`}
          >
            {t("feat_subtitle")}
          </motion.p>
        </div>

        {/* Bento Grid with React Bits AnimatedContent */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
          scale={0.97}
          blur={3}
          stagger={0.12}
          staggerFrom="start"
          threshold={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {/* Bento Card 1: Speed & 100 Lighthouse (Col Span 2) */}
          <div
            className={`md:col-span-2 p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group transform-gpu hover:-translate-y-1 ${
              isDark
                ? "bg-[#121214] border border-white/10 shadow-xl hover:border-[#C6F432]/40"
                : "bg-[#F8FAFC] border border-slate-200/90 shadow-md hover:border-lime-400 hover:shadow-xl"
            }`}
          >
            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#C6F432]/10 border border-[#C6F432]/30 flex items-center justify-center mb-5 text-[#C6F432] shadow-[0_0_15px_rgba(198,244,50,0.15)]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                {t("feat_2_title")}
              </h3>
              <p className={`max-w-md text-sm md:text-base leading-relaxed ${
                isDark ? "text-gray-400" : "text-slate-600"
              }`}>
                {t("feat_2_desc")}
              </p>
            </div>

            {/* Simulated Live Lighthouse Gauge Widget */}
            <div className={`relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl border ${
              isDark ? "bg-[#161618] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}>
              {[
                { label: t("feat_lighthouse_perf"), score: 100 },
                { label: t("feat_lighthouse_seo"), score: 100 },
                { label: t("feat_lighthouse_access"), score: 100 },
                { label: t("feat_lighthouse_best"), score: 100 },
              ].map((metric) => (
                <div key={metric.label} className="flex flex-col items-center p-2 text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#C6F432] bg-[#C6F432]/10 flex items-center justify-center font-extrabold text-[#C6F432] text-sm mb-1.5 shadow-[0_0_12px_rgba(198,244,50,0.3)]">
                    {metric.score}
                  </div>
                  <span className={`text-[11px] font-semibold ${isDark ? "text-gray-300" : "text-slate-700"}`}>
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Card 2: Clean Code (Col Span 1) */}
          <div
            className={`md:col-span-1 p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group transform-gpu hover:-translate-y-1 ${
              isDark
                ? "bg-[#121214] text-white border border-white/10 shadow-xl hover:border-[#C6F432]/40"
                : "bg-[#F8FAFC] text-slate-900 border border-slate-200/90 shadow-md hover:border-lime-400 hover:shadow-xl"
            }`}
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#C6F432]/10 border border-[#C6F432]/30 flex items-center justify-center mb-5 text-[#C6F432] shadow-[0_0_15px_rgba(198,244,50,0.15)]">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                {t("feat_1_title")}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                {t("feat_1_desc")}
              </p>
            </div>

            {/* Syntax Editor Mockup */}
            <div className="rounded-xl bg-[#0B0B0C] border border-white/10 p-3.5 font-mono text-xs text-white">
              <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#C6F432]" />
                <span className="text-[10px] text-gray-400 ml-auto flex items-center gap-1">
                  <Terminal className="w-3 h-3" /> app.tsx
                </span>
              </div>
              <p className="text-gray-300">
                <span className="text-[#C6F432]">const</span> app = <span className="text-white font-bold">buildFuture</span>&#40;&#41;;
              </p>
              <p className="text-[#C6F432]/80 mt-1">
                &#47;&#47; 100% scalable & modern
              </p>
            </div>
          </div>

          {/* Bento Card 3: Pixel-Perfect Multi-Device (Col Span 1) */}
          <div
            className={`md:col-span-1 p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group transform-gpu hover:-translate-y-1 ${
              isDark
                ? "bg-[#121214] border border-white/10 shadow-xl hover:border-[#C6F432]/40"
                : "bg-[#F8FAFC] border border-slate-200/90 shadow-md hover:border-lime-400 hover:shadow-xl"
            }`}
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#C6F432]/10 border border-[#C6F432]/30 flex items-center justify-center mb-5 text-[#C6F432] shadow-[0_0_15px_rgba(198,244,50,0.15)]">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                {t("feat_3_title")}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                {t("feat_3_desc")}
              </p>
            </div>

            {/* Device Badges */}
            <div className="space-y-2 pt-2">
              {["Desktop Ultra-Wide", "Tablet & iPad Retina", "Mobile iOS & Android"].map((device) => (
                <div
                  key={device}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold ${
                    isDark
                      ? "bg-white/5 border border-white/10 text-gray-200"
                      : "bg-white border border-slate-200 text-slate-700 shadow-2xs"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C6F432] shrink-0" />
                  <span>{device}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Card 4: Support 24/7 & Guarantee (Col Span 2) */}
          <div
            className={`md:col-span-2 p-8 rounded-3xl transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative group transform-gpu hover:-translate-y-1 ${
              isDark
                ? "bg-[#121214] border border-white/10 shadow-xl hover:border-[#C6F432]/40"
                : "bg-[#F8FAFC] border border-slate-200/90 shadow-md hover:border-lime-400 hover:shadow-xl"
            }`}
          >
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 rounded-2xl bg-[#C6F432]/10 border border-[#C6F432]/30 flex items-center justify-center mb-5 text-[#C6F432] shadow-[0_0_15px_rgba(198,244,50,0.15)]">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                {t("feat_4_title")}
              </h3>
              <p className={`text-sm md:text-base leading-relaxed ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                {t("feat_4_desc")}
              </p>
            </div>

            {/* Live Support Pulse Widget */}
            <div className={`w-full sm:w-auto shrink-0 p-5 rounded-2xl border flex flex-col gap-3 ${
              isDark ? "bg-[#161618] border-white/10 shadow-sm" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6F432] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C6F432]"></span>
                </span>
                <span className={`text-xs font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                  {language === "id" ? "Online & Siap Membantu" : "Online & Ready to Help"}
                </span>
              </div>
              <div className={`flex items-center gap-2 text-xs font-medium ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                <ShieldCheck className="w-4 h-4 text-[#C6F432]" />
                <span>{t("feat_support_tag")}</span>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
