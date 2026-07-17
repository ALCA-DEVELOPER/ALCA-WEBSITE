"use client";

import { motion } from "framer-motion";
import { Code2, Zap, LayoutTemplate, Headset } from "lucide-react";

const features = [
  {
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    title: "Clean Code",
    description: "Built with modern, maintainable, and scalable code architectures ensuring long-term stability.",
  },
  {
    icon: <Zap className="w-8 h-8 text-sky-400" />,
    title: "Blazing Fast Performance",
    description: "Optimized for speed. We ensure your website loads instantly to keep your users engaged.",
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-indigo-400" />,
    title: "Pixel-Perfect UI",
    description: "Stunning, responsive designs that look flawless on any device and screen size.",
  },
  {
    icon: <Headset className="w-8 h-8 text-pink-400" />,
    title: "24/7 Support",
    description: "Dedicated assistance whenever you need it. We're here to help your business grow.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative z-10 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Why Choose <span className="text-sky-500">Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            We don't just build websites; we craft digital experiences that drive results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
