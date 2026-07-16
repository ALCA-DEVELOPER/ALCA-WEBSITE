"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama proses pembuatannya?",
    answer: "Waktu pengerjaan bergantung pada kompleksitas proyek. Untuk Starter Landing Page, kami dapat menyelesaikannya dalam waktu 3 hari. Sementara untuk Company Profile sekitar 1 minggu, dan E-Commerce atau Custom Dashboard membutuhkan waktu 2-4 minggu.",
  },
  {
    question: "Apakah ada biaya maintenance bulanan?",
    answer: "Tidak ada biaya wajib bulanan. Namun, kami menyediakan layanan maintenance opsional jika Anda membutuhkan bantuan untuk update konten, backup rutin, dan pemantauan keamanan.",
  },
  {
    question: "Apakah domain dan hosting sudah termasuk?",
    answer: "Ya, untuk paket Professional dan E-Commerce, kami sudah menyertakan gratis domain (.com/.id) dan hosting untuk tahun pertama. Untuk paket Starter, kami dapat membantu menyiapkannya dengan biaya terpisah.",
  },
  {
    question: "Apakah saya bisa request desain custom?",
    answer: "Tentu saja! Semua paket kami (kecuali Starter basic) mencakup custom UI/UX design. Kami akan mendesain website yang benar-benar merepresentasikan identitas brand Anda.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative z-10 bg-black">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Frequently Asked <span className="text-blue-500">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Got questions? We've got answers.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-200">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
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
