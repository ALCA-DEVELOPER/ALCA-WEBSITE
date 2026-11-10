"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Sparkles, Clock, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function ContactCTA() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const waUrl = `https://wa.me/6285700654110?text=${encodeURIComponent(
    language === "id"
      ? "Halo MeoM, saya ingin konsultasi mengenai pembuatan website untuk bisnis saya."
      : "Hello MeoM, I would like to consult about website development for my business."
  )}`;

  return (
    <section id="contact" className={`py-24 relative z-10 transition-colors duration-300 ${
      isDark ? "bg-[#0B0B0C]" : "bg-white"
    }`}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`relative rounded-3xl md:rounded-[2.5rem] overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center text-white shadow-2xl transform-gpu border ${
            isDark
              ? "bg-[#121214] border-white/10 shadow-black/50"
              : "bg-slate-950 border-slate-800 shadow-slate-900/30"
          }`}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(198,244,50,0.12)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(198,244,50,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#C6F432]/30 text-[#C6F432] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(198,244,50,0.1)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("contact_badge")}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
              {t("contact_title")}{" "}
              <span className="text-[#C6F432] italic font-serif">
                {t("contact_title_highlight")}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-base md:text-xl leading-relaxed mb-10 max-w-2xl">
              {t("contact_subtitle")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#C6F432] hover:bg-[#b5e028] text-[#0B0B0C] font-extrabold rounded-full shadow-[0_0_25px_rgba(198,244,50,0.35)] transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 text-[#0B0B0C] stroke-[2.5]" />
                <span>{t("contact_btn_wa")}</span>
              </a>

              <a
                href="mailto:hello@meom.id"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/15 hover:border-[#C6F432]/40 transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-md active:scale-[0.98]"
              >
                <Mail className="w-5 h-5 text-[#C6F432]" />
                <span>{t("contact_btn_email")}</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-xs md:text-sm text-gray-400 font-medium">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-[#C6F432] shrink-0" />
                <span>{t("contact_stat_1")}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-[#C6F432] shrink-0" />
                <span>{t("contact_stat_2")}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C6F432] shrink-0" />
                <span>{t("contact_stat_3")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
