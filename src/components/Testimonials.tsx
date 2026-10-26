"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const reviews = [
  {
    name: "Dimas Prasetyo",
    role: "Founder & CEO",
    company: "Convivium Hospitality",
    avatar: "DP",
    color: "from-blue-600 to-indigo-600",
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
    color: "from-sky-500 to-blue-700",
    rating: 5,
    text: {
      id: "Pengerjaan web dashboard data analitik diselesaikan tepat waktu. Desain pixel-perfect, bersih, dan mudah digunakan oleh seluruh stakeholder kami.",
      en: "Our data analytics web dashboard was completed on time. Pixel-perfect, crisp, and exceptionally easy for all our stakeholders to navigate.",
    },
  },
];

export default function Testimonials() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 relative z-10 bg-gray-50/60 border-t border-gray-100">
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
            <span>{t("testi_badge")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 transform-gpu"
          >
            {t("testi_title")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
              {t("testi_title_highlight")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg transform-gpu"
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
              className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-sky-200 transition-[box-shadow,border-color] duration-300 flex flex-col justify-between transform-gpu relative group"
            >
              <div>
                {/* Stars & Quote */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gray-200 group-hover:text-sky-300 transition-colors" />
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 italic">
                  &ldquo;{language === "id" ? review.text.id : review.text.en}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-gray-100">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-tr ${review.color} text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0`}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    {review.role}, <span className="text-gray-700">{review.company}</span>
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
