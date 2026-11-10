"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const reviews = [
  {
    name: "Dimas Prasetyo",
    role: "Founder & CEO",
    company: "Convivium Hospitality",
    avatar: "DP",
    color: "from-[#1a1a1c] to-[#0B0B0C] border border-[#C6F432]/40 text-[#C6F432]",
    rating: 5,
    text: {
      id: "Website company profile yang dibuat sangat elegan dan responsif. Pengunjung restoran kami naik signifikan dan konversi reservasi online meningkat hingga 40%.",
      en: "The company profile website built for us is extraordinarily elegant and responsive. Restaurant visitors and table reservations went up by 40%.",
    },
  },
  {
    name: "Sarah Wijaya",
    role: "Co-Founder & CMO",
    company: "Eco-Tani Green Tech",
    avatar: "SW",
    color: "from-emerald-500 to-teal-600",
    rating: 5,
    text: {
      id: "Hasil coding Next.js sangat rapi dan kecepatan loading-nya luar biasa! Tim sangat responsif dan memahami estetika UI/UX modern sesuai ekspektasi kami.",
      en: "The Next.js code quality is impeccable and loading speeds are lightning fast! The team was highly responsive and understood modern UI/UX aesthetics perfectly.",
    },
  },
  {
    name: "Reza Anindito",
    role: "Lead Product Manager",
    company: "Marine Intelligence System",
    avatar: "RA",
    color: "from-lime-400 to-emerald-600",
    rating: 5,
    text: {
      id: "Pengerjaan web dashboard data analitik diselesaikan tepat waktu. Desain pixel-perfect, bersih, dan mudah digunakan oleh seluruh stakeholder kami.",
      en: "Our data analytics web dashboard was completed on time. Pixel-perfect, crisp, and exceptionally easy for all our stakeholders to navigate.",
    },
  },
];

export default function Testimonials() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-24 relative z-10 border-t transition-colors duration-300 ${
      isDark ? "bg-[#0B0B0C] border-white/5" : "bg-[#F8FAFC] border-slate-200"
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
            <span>{t("testi_badge")}</span>
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
            {t("testi_title")}{" "}
            <span className={`italic font-serif ${isDark ? "text-[#C6F432]" : "text-[#4d7c0f]"}`}>
              {t("testi_title_highlight")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-2xl mx-auto text-base md:text-lg transform-gpu ${
              isDark ? "text-gray-400" : "text-slate-600"
            }`}
          >
            {t("testi_subtitle")}
          </motion.p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between transform-gpu relative group ${
                isDark
                  ? "bg-[#121214] border border-white/10 shadow-xs hover:border-[#C6F432]/40 hover:shadow-[0_0_30px_rgba(198,244,50,0.12)]"
                  : "bg-white border border-slate-200/90 shadow-sm hover:border-lime-400 hover:shadow-xl"
              }`}
            >
              <div>
                {/* Stars & Quote */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C6F432] text-[#C6F432]" />
                    ))}
                  </div>
                  <Quote className={`w-6 h-6 transition-colors ${
                    isDark ? "text-white/20 group-hover:text-[#C6F432]" : "text-slate-300 group-hover:text-lime-600"
                  }`} />
                </div>

                {/* Testimonial text */}
                <p className={`text-sm md:text-base leading-relaxed mb-8 italic ${
                  isDark ? "text-gray-300" : "text-slate-700"
                }`}>
                  &ldquo;{language === "id" ? review.text.id : review.text.en}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className={`flex items-center gap-3.5 pt-6 border-t ${
                isDark ? "border-white/10" : "border-slate-100"
              }`}>
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-tr ${review.color} text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0`}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className={`font-bold text-sm ${isDark ? "text-white" : "text-slate-900"}`}>{review.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6F432]" />
                  </div>
                  <p className={`text-xs font-medium ${isDark ? "text-gray-400" : "text-slate-500"}`}>
                    {review.role}, <span className={isDark ? "text-gray-200" : "text-slate-700"}>{review.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
