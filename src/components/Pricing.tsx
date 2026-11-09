"use client";

import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import SpotlightCard from "@/components/SpotlightCard";

export default function Pricing() {
  const { t } = useLanguage();

  const solutions = [
    {
      id: "company-profile",
      name: t("solution_1_name"),
      desc: t("solution_1_desc"),
      popular: true,
      features: [
        t("solution_1_f1"),
        t("solution_1_f2"),
        t("solution_1_f3"),
        t("solution_1_f4"),
        t("solution_1_f5"),
      ],
      waMessage: encodeURIComponent(
        "Halo Nama Perusahaan, saya ingin konsultasi mengenai pembuatan website Company Profile untuk bisnis saya."
      ),
    },
    {
      id: "seo-optimizer",
      name: t("solution_2_name"),
      desc: t("solution_2_desc"),
      popular: false,
      features: [
        t("solution_2_f1"),
        t("solution_2_f2"),
        t("solution_2_f3"),
        t("solution_2_f4"),
        t("solution_2_f5"),
      ],
      waMessage: encodeURIComponent(
        "Halo Nama Perusahaan, saya ingin konsultasi mengenai layanan SEO Optimizer & optimasi peringkat website."
      ),
    },
    {
      id: "pos-system",
      name: t("solution_3_name"),
      desc: t("solution_3_desc"),
      popular: false,
      features: [
        t("solution_3_f1"),
        t("solution_3_f2"),
        t("solution_3_f3"),
        t("solution_3_f4"),
        t("solution_3_f5"),
      ],
      waMessage: encodeURIComponent(
        "Halo Nama Perusahaan, saya ingin konsultasi mengenai pembuatan POS System (Point of Sale) berbasis web."
      ),
    },
    {
      id: "dashboard-website",
      name: t("solution_4_name"),
      desc: t("solution_4_desc"),
      popular: false,
      features: [
        t("solution_4_f1"),
        t("solution_4_f2"),
        t("solution_4_f3"),
        t("solution_4_f4"),
        t("solution_4_f5"),
      ],
      waMessage: encodeURIComponent(
        "Halo Nama Perusahaan, saya ingin konsultasi mengenai pembuatan Dashboard Website & sistem internal."
      ),
    },
  ];

  const customWaMessage = encodeURIComponent(
    "Halo Nama Perusahaan, saya memiliki kebutuhan kustom IT Solution & Web Development untuk bisnis saya."
  );

  return (
    <section id="services" className="py-24 relative z-10 bg-transparent overflow-hidden">
      {/* Anchor alias so both #services and #pricing links work */}
      <div id="pricing" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative">
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
            <span>{t("price_badge")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 transform-gpu"
          >
            {t("price_title")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">
              {t("price_title_highlight")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg transform-gpu"
          >
            {t("price_subtitle")}
          </motion.p>
        </div>

        {/* 4 Solutions Grid with React Bits SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {solutions.map((solution, index) => {
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <SpotlightCard
                  theme="light"
                  intensity={0.45}
                  spotlightSize={280}
                  spotlightColor={
                    solution.popular
                      ? "rgba(14, 165, 233, 0.28)"
                      : "rgba(59, 130, 246, 0.16)"
                  }
                  className={`group relative flex flex-col justify-between h-full p-7 rounded-3xl transition-all duration-300 transform-gpu ${
                    solution.popular
                      ? "shadow-xl shadow-sky-500/15 border-sky-400 ring-2 ring-sky-400/30 xl:-translate-y-2 !bg-white"
                      : "border-gray-200/90 shadow-sm hover:border-sky-300 hover:shadow-lg !bg-white"
                  }`}
                >
                  {/* Popular / Recommended Tag */}
                  {solution.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full text-[11px] font-bold uppercase tracking-wider text-white shadow-md shadow-sky-500/30 z-20">
                      {t("price_popular_tag")}
                    </div>
                  )}

                  {/* Title & Description */}
                  <div className="mb-6 pt-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2.5 tracking-tight">
                      {solution.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed min-h-[64px]">
                      {solution.desc}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8 flex-1 pt-4 border-t border-gray-100">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="text-gray-700 text-xs md:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Consultation CTA Button */}
                  <a
                    href={`https://wa.me/6285700654110?text=${solution.waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 mt-auto rounded-xl font-semibold text-xs md:text-sm text-center transition-all duration-200 flex items-center justify-center gap-2 shadow-md bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-sky-500/20 active:scale-[0.98] relative z-10"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t("price_btn")}</span>
                  </a>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Custom IT Needs Callout Box with SpotlightCard */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <SpotlightCard
            theme="dark"
            intensity={0.4}
            spotlightSize={400}
            spotlightColor="rgba(56, 189, 248, 0.25)"
            className="p-6 md:p-8 rounded-2xl md:rounded-3xl !bg-slate-900 border border-slate-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4 text-center md:text-left relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 backdrop-blur-md hidden sm:flex">
                <Sparkles className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-1 tracking-tight">
                  {t("price_custom_note")}
                </h4>
                <p className="text-slate-300 text-xs md:text-sm">
                  {t("price_guarantee")}
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/6285700654110?text=${customWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 shrink-0 px-6 py-3.5 rounded-full bg-white text-gray-900 hover:bg-sky-50 font-bold text-xs md:text-sm transition-all duration-200 flex items-center gap-2 shadow-lg active:scale-95"
            >
              <span>{t("price_custom_cta")}</span>
              <ArrowRight className="w-4 h-4 text-sky-600" />
            </a>
          </SpotlightCard>
        </motion.div>

        {/* Trust badge */}
        <div className="mt-8 text-center flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>{t("price_guarantee")}</span>
        </div>
      </div>
    </section>
  );
}
