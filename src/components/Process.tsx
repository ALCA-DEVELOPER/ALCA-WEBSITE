"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code2, Bug, Rocket, ShieldCheck } from "lucide-react";

const processes = [
  {
    title: "1. Discovery & Strategy",
    points: ["Goal definition", "Target audience analysis", "Project roadmap"],
    icon: Lightbulb,
  },
  {
    title: "2. Wireframing & UI/UX",
    points: ["Visual mockups", "User flow mapping", "Design approval"],
    icon: PenTool,
  },
  {
    title: "3. Development & Coding",
    points: ["Frontend & Backend", "Responsive design", "CMS Integration"],
    icon: Code2,
  },
  {
    title: "4. Testing & QA",
    points: ["Bug squashing", "Performance checks", "Cross-browser testing"],
    icon: Bug,
  },
  {
    title: "5. Deployment & Launch",
    points: ["Server setup", "Domain configuration", "Go-live execution"],
    icon: Rocket,
  },
  {
    title: "6. Maintenance & Support",
    points: ["Regular updates", "Security patches", "24/7 monitoring"],
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section className="py-24 relative z-10 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            How We <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A proven, step-by-step process to transform your ideas into a stunning digital reality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative max-w-6xl mx-auto">
          {/* Decorative Connecting Lines (Desktop only) */}
          <div className="hidden lg:block absolute top-[64px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-500/0 via-purple-500/50 to-blue-500/0 z-0 pointer-events-none" />
          <div className="hidden lg:block absolute bottom-[calc(50%-10px)] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-500/0 via-purple-500/50 to-blue-500/0 z-0 pointer-events-none" />

          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300 group overflow-hidden"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 relative group-hover:border-purple-500/50 transition-colors duration-500 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <process.icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {process.title}
                </h3>
              </div>

              <ul className="space-y-3 mt-auto">
                {process.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
