"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Palette,
  Code2,
  CheckCheck,
  Rocket,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Clock,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Process() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeStep, setActiveStep] = useState("01");

  const processes = [
    {
      step: "01",
      title: t("proc_1_title"),
      icon: Compass,
      duration: language === "id" ? "1 - 2 Hari" : "1 - 2 Days",
      deliverable:
        language === "id"
          ? "Roadmap Proyek & Spesifikasi Teknis"
          : "Project Roadmap & Tech Specs",
      points: [t("proc_1_p1"), t("proc_1_p2"), t("proc_1_p3")],
      gradient: "from-[#C6F432]/10 to-transparent",
      accentBg: "bg-[#C6F432]",
    },
    {
      step: "02",
      title: t("proc_2_title"),
      icon: Palette,
      duration: language === "id" ? "3 - 5 Hari" : "3 - 5 Days",
      deliverable:
        language === "id"
          ? "Desain Figma High-Fidelity & Prototipe"
          : "Figma High-Fidelity & Prototype",
      points: [t("proc_2_p1"), t("proc_2_p2"), t("proc_2_p3")],
      gradient: "from-[#C6F432]/10 to-transparent",
      accentBg: "bg-[#C6F432]",
    },
    {
      step: "03",
      title: t("proc_3_title"),
      icon: Code2,
      duration: language === "id" ? "7 - 14 Hari" : "7 - 14 Days",
      deliverable:
        language === "id"
          ? "Kode Bersih Next.js 16 & Integrasi API"
          : "Clean Next.js 16 & API Integration",
      points: [t("proc_3_p1"), t("proc_3_p2"), t("proc_3_p3")],
      gradient: "from-[#C6F432]/10 to-transparent",
      accentBg: "bg-[#C6F432]",
    },
    {
      step: "04",
      title: t("proc_4_title"),
      icon: CheckCheck,
      duration: language === "id" ? "2 - 3 Hari" : "2 - 3 Days",
      deliverable:
        language === "id"
          ? "Laporan QA & Skor Audit 95+ Vitals"
          : "QA Report & 95+ Core Web Vitals",
      points: [t("proc_4_p1"), t("proc_4_p2"), t("proc_4_p3")],
      gradient: "from-[#C6F432]/10 to-transparent",
      accentBg: "bg-[#C6F432]",
    },
    {
      step: "05",
      title: t("proc_5_title"),
      icon: Rocket,
      duration: language === "id" ? "1 - 2 Hari" : "1 - 2 Days",
      deliverable:
        language === "id"
          ? "Website Live di Domain & Terindeks SEO"
          : "Live Production Domain & SEO Indexed",
      points: [t("proc_5_p1"), t("proc_5_p2"), t("proc_5_p3")],
      gradient: "from-[#C6F432]/10 to-transparent",
      accentBg: "bg-[#C6F432]",
    },
    {
      step: "06",
      title: t("proc_6_title"),
      icon: ShieldCheck,
      duration: language === "id" ? "Garansi 30 Hari" : "30-Day Warranty",
      deliverable:
        language === "id"
          ? "Dukungan Teknis Prioritas & SLA 24/7"
          : "Priority Technical Support & 24/7 SLA",
      points: [t("proc_6_p1"), t("proc_6_p2"), t("proc_6_p3")],
      gradient: "from-[#C6F432]/10 to-transparent",
      accentBg: "bg-[#C6F432]",
    },
  ];

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const step = entry.target.getAttribute("data-process-step");
          if (step) {
            setActiveStep(step);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-20% 0px -45% 0px",
      threshold: 0.1,
    });

    const cards = document.querySelectorAll("[data-process-step]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const scrollToStep = (step: string) => {
    const el = document.getElementById(`proc-card-${step}`);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="process" className={`py-20 md:py-24 relative z-10 transition-colors duration-300 ${
      isDark ? "bg-[#0B0B0C]" : "bg-[#F8FAFC]"
    }`}>
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(198,244,50,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(198,244,50,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Pinned Title & Summary */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 xl:top-28 lg:self-start z-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
                isDark
                  ? "bg-[#121214] border border-[#C6F432]/30 text-[#C6F432] shadow-[0_0_15px_rgba(198,244,50,0.1)]"
                  : "bg-lime-50 border border-lime-300 text-lime-800"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("proc_badge")}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 leading-[1.15] ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {t("proc_title")}{" "}
              <span className={`italic font-serif ${isDark ? "text-[#C6F432]" : "text-[#4d7c0f]"}`}>
                {t("proc_title_highlight")}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`text-sm md:text-base leading-relaxed mb-6 ${
                isDark ? "text-gray-400" : "text-slate-600"
              }`}
            >
              {t("proc_subtitle")}
            </motion.p>

            {/* Quick Process Index / Timeline summary with interactive scroll jump & active state */}
            <div className={`hidden lg:flex flex-col gap-1.5 py-3.5 border-y mb-6 ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}>
              {processes.map((p) => {
                const isActive = activeStep === p.step;
                return (
                  <button
                    key={p.step}
                    onClick={() => scrollToStep(p.step)}
                    className={`flex items-center gap-3 text-xs font-semibold px-2.5 py-1.5 rounded-xl transition-all duration-200 text-left cursor-pointer ${
                      isActive
                        ? isDark
                          ? "bg-[#C6F432]/10 text-[#C6F432] font-bold border border-[#C6F432]/30 shadow-sm"
                          : "bg-lime-50 text-lime-800 font-bold border border-lime-300 shadow-sm"
                        : isDark
                        ? "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-md font-mono font-bold flex items-center justify-center text-[10px] transition-colors ${
                        isActive
                          ? "bg-[#C6F432] text-[#0B0B0C] shadow-sm"
                          : isDark
                          ? "bg-white/10 text-gray-300"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {p.step}
                    </span>
                    <span className="truncate">{p.title}</span>
                    <span className={`ml-auto select-none ${isDark ? "text-gray-600" : "text-slate-400"}`}>···</span>
                    <span
                      className={`font-medium text-[11px] shrink-0 ${
                        isActive
                          ? isDark ? "text-[#C6F432] font-bold" : "text-lime-800 font-bold"
                          : isDark ? "text-gray-500" : "text-slate-500"
                      }`}
                    >
                      {p.duration}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Compact CTA Box */}
            <div className={`p-4 sm:p-5 rounded-2xl shadow-xl border ${
              isDark
                ? "bg-[#121214] text-white border-white/10"
                : "bg-white text-slate-900 border-slate-200/90 shadow-md"
            }`}>
              <div className={`flex items-center gap-2 mb-1.5 ${isDark ? "text-[#C6F432]" : "text-lime-700"}`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  {language === "id" ? "Siap Memulai Proyek?" : "Ready to Build?"}
                </span>
              </div>
              <p className={`text-[11px] mb-3.5 leading-relaxed ${isDark ? "text-gray-300" : "text-slate-600"}`}>
                {language === "id"
                  ? "Konsultasikan kebutuhan website Anda secara langsung dengan tim kami dan dapatkan estimasi pengerjaan sekarang."
                  : "Discuss your website vision directly with our developers and get an accurate timeline estimate today."}
              </p>
              <a
                href={`https://wa.me/6285700654110?text=${encodeURIComponent(
                  language === "id"
                    ? "Halo MeoM, saya ingin konsultasi mengenai alur pengerjaan website."
                    : "Hello MeoM, I would like to consult about the website development process."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-extrabold text-[#0B0B0C] bg-[#C6F432] hover:bg-[#b5e028] shadow-md shadow-[#C6F432]/25 active:scale-95 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#0B0B0C]" />
                <span>{language === "id" ? "Konsultasi Gratis Sekarang" : "Start Free Consultation"}</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Scrolling 6 Step Cards Stream */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            {processes.map((process, index) => {
              const Icon = process.icon;

              return (
                <div
                  id={`proc-card-${process.step}`}
                  key={process.step}
                  data-process-step={process.step}
                  className="scroll-mt-28"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl transition-all duration-200 transform-gpu overflow-hidden ${
                      isDark
                        ? "bg-[#121214] border border-white/10 hover:border-[#C6F432]/40 shadow-xl hover:shadow-[#C6F432]/10"
                        : "bg-white border border-slate-200/90 hover:border-lime-400 shadow-md hover:shadow-xl"
                    }`}
                  >
                    {/* Subtle top-right ambient tint on hover */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${process.gradient} pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Card Header: Step Tag, Watermark, Timeframe */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider ${
                            isDark
                              ? "bg-white/5 border border-white/10 text-gray-200"
                              : "bg-slate-100 border border-slate-200 text-slate-800"
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${process.accentBg}`} />
                            <span>PHASE {process.step}</span>
                          </span>

                          <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                            isDark
                              ? "text-gray-400 bg-white/5 border border-white/10"
                              : "text-slate-600 bg-slate-100 border border-slate-200"
                          }`}>
                            <Clock className="w-3 h-3 text-[#C6F432]" />
                            <span>{process.duration}</span>
                          </span>
                        </div>

                        <span className={`font-mono text-2xl font-black transition-colors select-none ${
                          isDark
                            ? "text-white/10 group-hover:text-[#C6F432]/30"
                            : "text-slate-200 group-hover:text-lime-500/30"
                        }`}>
                          {process.step}
                        </span>
                      </div>

                      {/* Title & Icon */}
                      <div className="flex items-center gap-3.5 mb-5">
                        <div className={`w-11 h-11 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-200 ${
                          isDark
                            ? "bg-[#161618] border border-white/10 text-[#C6F432] group-hover:bg-[#C6F432] group-hover:text-[#0B0B0C]"
                            : "bg-lime-50 border border-lime-200 text-lime-800 group-hover:bg-[#C6F432] group-hover:text-[#0B0B0C]"
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className={`text-lg md:text-xl font-extrabold transition-colors tracking-tight leading-snug ${
                          isDark
                            ? "text-white group-hover:text-[#C6F432]"
                            : "text-slate-900 group-hover:text-black"
                        }`}>
                          {process.title}
                        </h3>
                      </div>

                      {/* Checkpoint Bullets */}
                      <ul className="space-y-2.5 mb-6">
                        {process.points.map((point, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                              isDark ? "text-gray-300" : "text-slate-600"
                            }`}
                          >
                            <div className="w-4 h-4 rounded-full bg-[#C6F432]/10 border border-[#C6F432]/25 text-[#C6F432] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover:bg-[#C6F432]/20 transition-colors">
                              <CheckCheck className="w-2.5 h-2.5 stroke-[2.5]" />
                            </div>
                            <span className={isDark ? "group-hover:text-white transition-colors" : "group-hover:text-slate-900 transition-colors"}>
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Bottom: Deliverable / Output Tag */}
                    <div className={`pt-3.5 border-t flex items-center justify-between text-[11px] font-semibold -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 px-6 py-3 border-b border-transparent rounded-b-3xl ${
                      isDark
                        ? "border-white/10 bg-[#161618] text-gray-400"
                        : "border-slate-200 bg-slate-50 text-slate-600"
                    }`}>
                      <div className="flex items-center gap-1.5 truncate pr-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#C6F432] shrink-0" />
                        <span className={`truncate ${isDark ? "text-gray-300" : "text-slate-700"}`}>
                          {process.deliverable}
                        </span>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors shadow-2xs ${
                        isDark
                          ? "bg-[#121214] border-white/10 text-gray-400 group-hover:text-[#C6F432]"
                          : "bg-white border-slate-200 text-slate-600 group-hover:text-black"
                      }`}>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
