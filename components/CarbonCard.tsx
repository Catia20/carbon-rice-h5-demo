"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { carbonMetrics } from "@/data/content";

function Counter({ value, decimals, prefix = "", suffix = "" }: { value: number; decimals: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => `${prefix}${latest.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [count, inView, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function CarbonCard() {
  return (
    <motion.section
      className="mx-4 rounded-2xl bg-white p-5 shadow-soft"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-[#333]">碳足迹报告</h2>
        <span className="flex items-center gap-1.5 text-[11px] text-leaf">
          <span className="h-1.5 w-1.5 rounded-full bg-leaf" />已核验
        </span>
      </div>
      <div className="mt-6 grid grid-cols-3">
        {carbonMetrics.map((metric, index) => (
          <div key={metric.label} className={`min-w-0 px-1 text-center ${index > 0 ? "border-l border-[#eee]" : ""}`}>
            <div className="whitespace-nowrap text-[28px] font-bold leading-none" style={{ color: metric.color }}>
              <Counter {...metric} />
            </div>
            <p className="mt-2 min-h-7 text-[10px] leading-[14px] text-[#888]">{metric.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-start gap-1.5 border-t border-[#f1f1f1] pt-3 text-[10px] leading-4 text-[#999]">
        <svg className="mt-0.5 h-3 w-3 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" /><path d="M8 7v4M8 4.5v.5" stroke="currentColor" strokeLinecap="round" />
        </svg>
        <span>以上数据基于 LCA 全生命周期模型测算 · 第三方核验中</span>
      </div>
    </motion.section>
  );
}
