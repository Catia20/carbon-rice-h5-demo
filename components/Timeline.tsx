"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { timeline } from "@/data/content";
import { assetPath } from "@/lib/asset-path";

export function Timeline() {
  return (
    <section>
      <h2 className="mx-4 mb-5 text-[17px] font-bold text-[#333]">一袋米的碳旅程</h2>
      <div className="px-4">
        {timeline.map((item, index) => (
          <motion.article
            key={item.title}
            className="relative flex gap-3.5 pb-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
          >
            {index < timeline.length - 1 && <span className="absolute left-[17px] top-9 h-[calc(100%-28px)] border-l border-dashed border-[#bbb]" />}
            <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f5e8] text-lg" aria-hidden="true">{item.icon}</div>
            <div className="min-w-0 flex-1 pt-0.5">
              <h3 className="text-sm font-bold text-[#333]">{item.title}</h3>
              <p className="mt-1 text-xs leading-5 text-[#777]">{item.description}</p>
              <Image src={assetPath(item.image)} alt={`${item.title}记录`} width={80} height={60} className="mt-2 h-[60px] w-20 rounded-md object-cover" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
