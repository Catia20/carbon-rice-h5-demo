"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export function ActionArea() {
  const [toast, setToast] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showToast = (message: string) => {
    setToast(message);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 2000);
  };

  return (
    <section className="relative mt-6 px-4 pb-10">
      <motion.button whileTap={{ scale: 0.98 }} onClick={() => showToast("碳积分已存入您的碳账户（Demo）")} className="flex h-12 w-full items-center justify-center gap-2 rounded-3xl bg-forest text-sm font-medium text-white shadow-md">
        <span aria-hidden="true">🌿</span>领取我的碳积分 +12g
      </motion.button>
      <motion.button whileTap={{ scale: 0.98 }} onClick={() => showToast("分享链接已复制（Demo）")} className="mt-3 h-10 w-full rounded-3xl border border-leaf bg-transparent text-[13px] font-medium text-leaf">
        分享给好友
      </motion.button>
      <footer className="mt-8 text-center"><p className="text-[11px] text-[#999]">碳汇稻链 · 东北大米碳价值运营平台</p><p className="mt-1.5 text-[9px] text-[#bbb]">本页面为产品原型演示，数据为模型测算示例值</p></footer>
      <AnimatePresence>
        {toast && <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="fixed bottom-7 left-1/2 z-50 w-max max-w-[calc(100vw-32px)] -translate-x-1/2 rounded-lg bg-[#222]/90 px-4 py-2.5 text-center text-xs text-white shadow-lg">{toast}</motion.div>}
      </AnimatePresence>
    </section>
  );
}
