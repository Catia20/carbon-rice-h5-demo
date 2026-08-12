"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ScanPage() {
  const router = useRouter();
  useEffect(() => { const timer = setTimeout(() => router.push("/"), 2000); return () => clearTimeout(timer); }, [router]);

  return (
    <main className="mx-auto flex min-h-screen max-w-[420px] items-center justify-center bg-forest text-white">
      <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex flex-col items-center">
        <div className="scan-spinner h-24 w-24" aria-hidden="true">
          <svg viewBox="0 0 100 100" className="h-full w-full"><circle cx="50" cy="50" r="43" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="2"/><path d="M50 7a43 43 0 0 1 37.2 21.5" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round"/><circle cx="50" cy="50" r="31" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.7)"/><text x="50" y="61" textAnchor="middle" fill="#fff" fontSize="30" fontWeight="700">碳</text></svg>
        </div>
        <p className="mt-7 text-sm tracking-wide text-white/85">正在读取碳标签信息<span className="dot-1">.</span><span className="dot-2">.</span><span className="dot-3">.</span></p>
      </motion.div>
    </main>
  );
}
