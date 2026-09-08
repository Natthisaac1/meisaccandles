import Link from "next/link";
import { CandleImage } from "@/components/CandleImage";
import { aromaLabels, formatLabels, formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/producto/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        <CandleImage
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-brand text-charcoal/50">
            {aromaLabels[product.aroma]} · {formatLabels[product.format]}
          </p>
          <h3 className="mt-1 font-serif text-xl text-charcoal">{product.name}</h3>
        </div>
        <p className="pt-5 text-sm text-charcoal">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
