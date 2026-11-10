"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function FAQ() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t("faq_q1"),
      answer: t("faq_a1"),
    },
    {
      question: t("faq_q2"),
      answer: t("faq_a2"),
    },
    {
      question: t("faq_q3"),
      answer: t("faq_a3"),
    },
    {
      question: t("faq_q4"),
      answer: t("faq_a4"),
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`py-24 relative z-10 transition-colors duration-300 ${
      isDark ? "bg-[#0B0B0C]" : "bg-white"
    }`}>
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-4 transform-gpu ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {t("faq_title")}{" "}
            <span className={`italic font-serif ${isDark ? "text-[#C6F432]" : "text-[#4d7c0f]"}`}>
              {t("faq_title_highlight")}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`text-lg transform-gpu ${isDark ? "text-gray-400" : "text-slate-600"}`}
          >
            {t("faq_subtitle")}
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden transform-gpu ${
                isDark
                  ? "border-white/10 bg-[#121214] hover:border-[#C6F432]/30"
                  : "border-slate-200/90 bg-slate-50 hover:border-lime-400 hover:bg-slate-100/70"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span className={`text-lg font-medium ${isDark ? "text-white" : "text-slate-900"}`}>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-250 ${
                    openIndex === index ? (isDark ? "text-[#C6F432] rotate-180" : "text-lime-700 rotate-180") : "text-gray-400"
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className={`px-6 pb-6 leading-relaxed border-t pt-4 ${
                      isDark ? "text-gray-300 border-white/5" : "text-slate-600 border-slate-200/60"
                    }`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
