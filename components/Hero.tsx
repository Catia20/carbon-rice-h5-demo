import Image from "next/image";
import { product } from "@/data/content";
import { assetPath } from "@/lib/asset-path";

export function Hero() {
  return (
    <header className="relative h-60 overflow-hidden bg-forest">
      <Image src={assetPath(product.heroImage)} alt="水稻产地" fill priority className="object-cover" sizes="(max-width: 420px) 100vw, 420px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,60,26,0.78)] via-[rgba(26,60,26,0.18)] to-transparent" />
      <span className="absolute right-4 top-4 rounded-full bg-leaf/95 px-3 py-2 text-[11px] font-medium text-white shadow-sm">
        {product.certification}
      </span>
      <div className="absolute bottom-5 left-5 text-white">
        <h1 className="text-xl font-bold">{product.name}</h1>
        <p className="mt-1 text-[13px] text-white/75">{product.origin}</p>
      </div>
    </header>
  );
}
