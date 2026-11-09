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

export default function Process() {
  const { t, language } = useLanguage();
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
      gradient: "from-sky-500/10 to-transparent",
      accentBg: "bg-sky-500",
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
      gradient: "from-blue-500/10 to-transparent",
      accentBg: "bg-blue-500",
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
      gradient: "from-indigo-500/10 to-transparent",
      accentBg: "bg-indigo-500",
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
      gradient: "from-teal-500/10 to-transparent",
      accentBg: "bg-teal-500",
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
      gradient: "from-sky-500/10 to-transparent",
      accentBg: "bg-sky-500",
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
      gradient: "from-emerald-500/10 to-transparent",
      accentBg: "bg-emerald-500",
    },
  ];

  // Observer to track which card is active as user scrolls through the stream
  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
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
    <section id="process" className="py-20 md:py-24 relative z-10 bg-transparent">
      {/* Background ambient lighting isolated from parent overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)]" />
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
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("proc_badge")}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-gray-900 leading-[1.15]"
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
              className="text-gray-600 text-sm md:text-base leading-relaxed mb-6"
            >
              {t("proc_subtitle")}
            </motion.p>

            {/* Quick Process Index / Timeline summary with interactive scroll jump & active state */}
            <div className="hidden lg:flex flex-col gap-1.5 py-3.5 border-y border-slate-100 mb-6">
              {processes.map((p) => {
                const isActive = activeStep === p.step;
                return (
                  <button
                    key={p.step}
                    onClick={() => scrollToStep(p.step)}
                    className={`flex items-center gap-3 text-xs font-semibold px-2.5 py-1.5 rounded-xl transition-all duration-200 text-left cursor-pointer ${
                      isActive
                        ? "bg-sky-50 text-sky-700 font-bold border border-sky-200/90 shadow-2xs"
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-md font-mono font-bold flex items-center justify-center text-[10px] transition-colors ${
                        isActive
                          ? "bg-sky-500 text-white shadow-2xs"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {p.step}
                    </span>
                    <span className="truncate">{p.title}</span>
                    <span className="text-slate-300 ml-auto select-none">···</span>
                    <span
                      className={`font-medium text-[11px] shrink-0 ${
                        isActive ? "text-sky-600 font-semibold" : "text-slate-400"
                      }`}
                    >
                      {p.duration}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Compact CTA Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white shadow-xl border border-slate-800">
              <div className="flex items-center gap-2 mb-1.5 text-sky-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  {language === "id" ? "Siap Memulai Proyek?" : "Ready to Build?"}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mb-3.5 leading-relaxed">
                {language === "id"
                  ? "Konsultasikan kebutuhan website Anda secara langsung dengan tim kami dan dapatkan estimasi pengerjaan sekarang."
                  : "Discuss your website vision directly with our developers and get an accurate timeline estimate today."}
              </p>
              <a
                href="https://wa.me/6285700654110?text=Halo%20Nama%20Perusahaan%2C%20saya%20ingin%20konsultasi%20mengenai%20pembuatan%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-500/20 active:scale-95 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
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
                    className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-sky-400/90 shadow-xs hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-200 transform-gpu overflow-hidden"
                  >
                    {/* Subtle top-right ambient tint on hover */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${process.gradient} pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Card Header: Step Tag, Watermark, Timeframe */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider bg-slate-100 border border-slate-200/80 text-slate-700">
                            <span className={`w-1.5 h-1.5 rounded-full ${process.accentBg}`} />
                            <span>PHASE {process.step}</span>
                          </span>

                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/60">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span>{process.duration}</span>
                          </span>
                        </div>

                        <span className="font-mono text-2xl font-black text-slate-200 group-hover:text-sky-500/30 transition-colors select-none">
                          {process.step}
                        </span>
                      </div>

                      {/* Title & Icon */}
                      <div className="flex items-center gap-3.5 mb-5">
                        <div className="w-11 h-11 shrink-0 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-2xs group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 group-hover:scale-105 transition-all duration-200">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg md:text-xl font-extrabold text-gray-900 group-hover:text-sky-600 transition-colors tracking-tight leading-snug">
                          {process.title}
                        </h3>
                      </div>

                      {/* Checkpoint Bullets */}
                      <ul className="space-y-2.5 mb-6">
                        {process.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed"
                          >
                            <div className="w-4 h-4 rounded-full bg-sky-50 border border-sky-200/70 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover:bg-sky-100 transition-colors">
                              <CheckCheck className="w-2.5 h-2.5 stroke-[2.5]" />
                            </div>
                            <span className="group-hover:text-gray-900 transition-colors">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Bottom: Deliverable / Output Tag */}
                    <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold bg-slate-50/70 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 px-6 py-3 border-b border-transparent rounded-b-3xl">
                      <div className="flex items-center gap-1.5 truncate pr-2">
                        <Sparkles className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                        <span className="truncate">{process.deliverable}</span>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-white border border-slate-200/80 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-sky-600 group-hover:border-sky-300 transition-colors shadow-2xs">
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
