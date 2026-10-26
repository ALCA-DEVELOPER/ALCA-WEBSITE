"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

function Counter({ from, to, suffix = "" }: { from: number; to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    let startTimestamp: number | null = null;
    const duration = 1800; // snappier animation
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentVal = Math.floor(easeOut * (to - from) + from);

      if (ref.current) {
        ref.current.textContent = `${currentVal}${suffix}`;
      }

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else if (ref.current) {
        ref.current.textContent = `${to}${suffix}`;
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isInView, from, to, suffix]);

  return <span ref={ref}>{from}{suffix}</span>;
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
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-3 gap-2 md:gap-12 text-center max-w-5xl mx-auto">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center transform-gpu"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3 md:mb-6 text-sky-500 mx-auto">
                <div className="scale-75 md:scale-100">{stat.icon}</div>
              </div>
              <h4 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-1 md:mb-2 tracking-tight">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </h4>
              <p className="text-xs md:text-base text-gray-600 font-medium leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
