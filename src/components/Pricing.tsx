"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter Landing Page",
    price: "Rp 750.000",
    target: "Personal portfolio, event promotion, or single-product showcase.",
    features: [
      "Single page design",
      "Responsive layout",
      "Basic SEO setup",
      "Contact form integration",
      "3 days delivery",
    ],
    popular: false,
  },
  {
    name: "Professional Company Profile",
    price: "Rp 1.850.000",
    target: "Small to medium businesses needing a strong corporate identity.",
    features: [
      "Up to 5 pages (Home, About, Services, Blog, Contact)",
      "Custom UI/UX design",
      "CMS integration for articles",
      "Advanced SEO",
      "1-week delivery",
    ],
    popular: true,
  },
  {
    name: "E-Commerce / Custom Dashboard",
    price: "Rp 4.500.000+",
    target: "Online stores or complex data analytics tracking.",
    features: [
      "Unlimited product listings",
      "Payment gateway integration",
      "User authentication",
      "Admin dashboard (sales/stock tracking)",
      "Premium support",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative z-10 bg-transparent overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Simple, Transparent <span className="text-sky-500">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Choose the perfect plan for your digital needs. No hidden fees, just great value.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 hover:scale-105 ${
                tier.popular
                  ? "bg-white shadow-xl shadow-blue-900/5 border-blue-500/30 scale-105"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-sm text-gray-500 h-10 mb-4">{tier.target}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/25"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200"
                }`}
              >
                Pilih Paket Ini
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
