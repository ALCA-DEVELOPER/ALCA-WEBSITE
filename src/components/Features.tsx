"use client";

import { motion } from "framer-motion";
import { Zap, Code2, LayoutTemplate, Headset, CheckCircle2, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 relative z-10 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("feat_title")} {t("feat_title_highlight")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 transform-gpu"
          >
            {t("feat_title")} <span className="text-sky-500">{t("feat_title_highlight")}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg transform-gpu"
          >
            {t("feat_subtitle")}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Bento Card 1: Speed & 100 Lighthouse (Col Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-white to-sky-50/40 border border-gray-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-[box-shadow,border-color] duration-300 flex flex-col justify-between overflow-hidden relative group transform-gpu"
          >
            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 text-amber-500">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t("feat_2_title")}
              </h3>
              <p className="text-gray-600 max-w-md text-sm md:text-base leading-relaxed">
                {t("feat_2_desc")}
              </p>
            </div>

            {/* Simulated Live Lighthouse Gauge Widget */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/80 shadow-xs">
              {[
                { label: t("feat_lighthouse_perf"), score: 100 },
                { label: t("feat_lighthouse_seo"), score: 100 },
                { label: t("feat_lighthouse_access"), score: 100 },
                { label: t("feat_lighthouse_best"), score: 100 },
              ].map((metric) => (
                <div key={metric.label} className="flex flex-col items-center p-2 text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-emerald-500 bg-emerald-50/60 flex items-center justify-center font-extrabold text-emerald-600 text-sm mb-1.5 shadow-xs">
                    {metric.score}
                  </div>
                  <span className="text-[11px] font-semibold text-gray-700">{metric.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 2: Clean Code (Col Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-1 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-sm hover:shadow-md hover:border-slate-700 transition-[box-shadow,border-color] duration-300 flex flex-col justify-between overflow-hidden relative group transform-gpu"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-5 text-sky-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t("feat_1_title")}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {t("feat_1_desc")}
              </p>
            </div>

            {/* Syntax Editor Mockup */}
            <div className="rounded-xl bg-slate-950/90 border border-slate-800 p-3.5 font-mono text-xs">
              <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-slate-800/80">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] text-slate-500 ml-auto flex items-center gap-1">
                  <Terminal className="w-3 h-3" /> app.tsx
                </span>
              </div>
              <p className="text-slate-400">
                <span className="text-purple-400">const</span> app = <span className="text-sky-400">buildFuture</span>&#40;&#41;;
              </p>
              <p className="text-emerald-400 mt-1">
                &#47;&#47; 100% scalable & modern
              </p>
            </div>
          </motion.div>

          {/* Bento Card 3: Pixel-Perfect Multi-Device (Col Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-1 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-[box-shadow,border-color] duration-300 flex flex-col justify-between overflow-hidden relative group transform-gpu"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-5 text-sky-500">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t("feat_3_title")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t("feat_3_desc")}
              </p>
            </div>

            {/* Device Badges */}
            <div className="space-y-2 pt-2">
              {["Desktop Ultra-Wide", "Tablet & iPad Retina", "Mobile iOS & Android"].map((device) => (
                <div key={device} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>{device}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 4: Support 24/7 & Guarantee (Col Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-white to-blue-50/40 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-[box-shadow,border-color] duration-300 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative group transform-gpu"
          >
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 text-blue-500">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t("feat_4_title")}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {t("feat_4_desc")}
              </p>
            </div>

            {/* Live Support Pulse Widget */}
            <div className="w-full sm:w-auto shrink-0 bg-white p-5 rounded-2xl border border-blue-100 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-gray-800">Online & Siap Membantu</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>{t("feat_support_tag")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
