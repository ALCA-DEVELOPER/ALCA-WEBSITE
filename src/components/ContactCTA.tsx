"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Sparkles, Clock, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContactCTA() {
  const { t } = useLanguage();

  const waUrl = `https://wa.me/6281325216590?text=${encodeURIComponent(
    "Halo Nama Perusahaan, saya ingin konsultasi mengenai pembuatan website untuk bisnis saya."
  )}`;

  return (
    <section id="contact" className="py-24 relative z-10 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl md:rounded-[2.5rem] bg-slate-900 overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center text-white shadow-2xl shadow-sky-950/20 transform-gpu"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(56,189,248,0.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("contact_badge")}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              {t("contact_title")}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
                {t("contact_title_highlight")}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-300 text-base md:text-xl leading-relaxed mb-10 max-w-2xl">
              {t("contact_subtitle")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold rounded-full shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t("contact_btn_wa")}</span>
              </a>

              <a
                href="mailto:kontak@namaperusahaan.com"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-md active:scale-[0.98]"
              >
                <Mail className="w-5 h-5 text-sky-400" />
                <span>{t("contact_btn_email")}</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-xs md:text-sm text-slate-300 font-medium">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{t("contact_stat_1")}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t("contact_stat_2")}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t("contact_stat_3")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
