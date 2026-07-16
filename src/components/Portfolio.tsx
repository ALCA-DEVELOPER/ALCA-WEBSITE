"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "EcoBrand E-Commerce",
    stack: ["Next.js", "Tailwind", "Stripe"],
    image: "/project-1.jpg", // Placeholder image, we will use a gradient div if not found
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "FinTech Dashboard",
    stack: ["React", "TypeScript", "Chart.js"],
    image: "/project-2.jpg",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Creative Agency Portfolio",
    stack: ["Next.js", "Framer Motion", "GSAP"],
    image: "/project-3.jpg",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Real Estate Platform",
    stack: ["Vue", "Node.js", "PostgreSQL"],
    image: "/project-4.jpg",
    color: "from-orange-500 to-red-500",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative z-10 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Recent <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A glimpse into the digital experiences we've crafted for our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-video bg-white/5 border border-white/10"
            >
              {/* Fallback gradient background if image is not present */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center z-20">
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                  <ExternalLink size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
