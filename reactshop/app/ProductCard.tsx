"use client";
import Image from "next/image";
import type { Product } from "./ProductGrid";
export default function ProductCard({ productData }: { productData: Product }) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      <Image
        src={productData.thumbnail}
        alt={productData.title}
        width={320}
        height={320}
        className="h-40 w-full bg-zinc-100 object-cover"
      />
      <div className="flex flex-col gap-6 p-4">
        <h3 className="truncate text-base font-semibold text-black">
          {productData?.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-black">
            ${productData?.price}
          </span>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-sm font-medium text-amber-900">
            ★ {productData?.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
