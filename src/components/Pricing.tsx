"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  const pricingTiers = [
    {
      name: t("price_tier_1_name"),
      price: "Rp 750.000",
      target: t("price_tier_1_target"),
      features: [
        t("price_tier_1_f1"),
        t("price_tier_1_f2"),
        t("price_tier_1_f3"),
        t("price_tier_1_f4"),
        t("price_tier_1_f5"),
      ],
      popular: false,
      waMessage: encodeURIComponent("Halo Nama Perusahaan, saya tertarik dengan paket Starter Landing Page."),
    },
    {
      name: t("price_tier_2_name"),
      price: "Rp 1.850.000",
      target: t("price_tier_2_target"),
      features: [
        t("price_tier_2_f1"),
        t("price_tier_2_f2"),
        t("price_tier_2_f3"),
        t("price_tier_2_f4"),
        t("price_tier_2_f5"),
      ],
      popular: true,
      waMessage: encodeURIComponent("Halo Nama Perusahaan, saya tertarik dengan paket Professional Company Profile."),
    },
    {
      name: t("price_tier_3_name"),
      price: "Rp 4.500.000+",
      target: t("price_tier_3_target"),
      features: [
        t("price_tier_3_f1"),
        t("price_tier_3_f2"),
        t("price_tier_3_f3"),
        t("price_tier_3_f4"),
        t("price_tier_3_f5"),
      ],
      popular: false,
      waMessage: encodeURIComponent("Halo Nama Perusahaan, saya ingin konsultasi paket E-Commerce / Custom Dashboard."),
    },
  ];

  return (
    <section id="pricing" className="py-24 relative z-10 bg-transparent overflow-hidden">
      {/* Background decoration with fast radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("price_title")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 transform-gpu"
          >
            {t("price_title")}{" "}
            <span className="text-sky-500">{t("price_title_highlight")}</span>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col p-8 rounded-3xl border transition-[border-color,box-shadow] duration-300 transform-gpu ${
                tier.popular
                  ? "bg-white shadow-xl shadow-sky-500/10 border-sky-400/50 lg:-translate-y-2 ring-1 ring-sky-400/20"
                  : "bg-white border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                  {t("price_most_popular")}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-sm text-gray-500 h-10 mb-4">{tier.target}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl xl:text-4xl font-extrabold text-gray-900 tracking-tight">
                    {tier.price}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/6281325216590?text=${tier.waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 mt-auto rounded-xl font-semibold text-center transition-all duration-200 active:scale-[0.98] ${
                  tier.popular
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/25"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200"
                }`}
              >
                {t("price_btn")}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Seal */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>{t("price_guarantee")}</span>
        </div>
      </div>
    </section>
  );
}
