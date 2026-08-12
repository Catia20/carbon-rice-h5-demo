import Image from "next/image";
import { farmer } from "@/data/content";
import { assetPath } from "@/lib/asset-path";

export function FarmerStory() {
  return (
    <section>
      <h2 className="mx-4 mb-4 text-[17px] font-bold text-[#333]">种这袋米的人</h2>
      <div className="mx-4 rounded-2xl bg-white p-5 shadow-soft">
        <div className="flex items-center gap-3">
          <Image src={assetPath(farmer.avatar)} alt={farmer.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
          <div><h3 className="text-[15px] font-bold">{farmer.name}</h3><p className="mt-1 text-xs text-[#888]">{farmer.identity}</p></div>
        </div>
        <p className="mt-5 text-sm leading-[1.8] text-[#444]">{farmer.story}</p>
        <blockquote className="mt-4 border-l-[3px] border-leaf pl-3 text-[13px] italic leading-6 text-[#777]">“{farmer.quote}”</blockquote>
        <p className="mt-3 text-right text-[10px] text-[#999]">{farmer.source}</p>
      </div>
    </section>
  );
}
