"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, Star, Trophy } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

function Counter({ from, to, suffix = "" }: { from: number; to: number; suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const duration = 2500;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // easeOutQuart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const { t } = useLanguage();

  const statsData = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      value: 120,
      suffix: "+",
      label: t("stat_projects"),
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: 85,
      suffix: "+",
      label: t("stat_clients"),
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: 3,
      suffix: "",
      label: t("stat_experience"),
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative z-10 border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center max-w-5xl mx-auto">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-sky-500">
                {stat.icon}
              </div>
              <h4 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </h4>
              <p className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
