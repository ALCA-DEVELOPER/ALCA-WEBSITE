"use client";

import { motion } from "framer-motion";
import { MessageSquare, Layout, Code2, Rocket } from "lucide-react";

const processes = [
  {
    title: "Konsultasi & Strategi",
    description: "Kami berdiskusi untuk memahami visi, target audiens, dan tujuan bisnis Anda agar website yang dibangun tepat sasaran.",
    icon: MessageSquare,
  },
  {
    title: "Desain & Prototyping",
    description: "Pembuatan wireframe dan desain visual (UI/UX) yang memukau. Anda akan melihat gambaran pasti website sebelum dikembangkan.",
    icon: Layout,
  },
  {
    title: "Pengembangan Website",
    description: "Proses coding menggunakan teknologi modern (Next.js, React) untuk memastikan website Anda cepat, responsif, dan aman.",
    icon: Code2,
  },
  {
    title: "Peluncuran & Support",
    description: "Website di-deploy ke server live, dioptimasi untuk SEO, dan kami siap memberikan dukungan teknis jika diperlukan.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="py-24 relative z-10 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Cara Kami <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Bekerja</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Langkah demi langkah transparan dari ide awal hingga website Anda siap memukau dunia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-blue-500/0 via-purple-500/50 to-blue-500/0 z-0" />

          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-purple-500/50 transition-colors duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <process.icon className="w-10 h-10 text-gray-300 group-hover:text-white transition-colors duration-500 relative z-10" />
                
                {/* Step Number */}
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {process.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[280px]">
                {process.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
