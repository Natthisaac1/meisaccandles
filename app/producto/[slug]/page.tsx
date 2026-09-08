import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddToCart";
import { CandleImage } from "@/components/CandleImage";
import {
  aromaLabels,
  formatLabels,
  formatPrice,
  getProduct,
  products
} from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Vela" };
  return { title: product.name, description: product.description };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const details = [
    ["Aroma", aromaLabels[product.aroma]],
    ["Formato", formatLabels[product.format]],
    ["Cera", "Cera de soya"],
    ["Mecha", product.wick],
    ["Horas de quema", `${product.burnHours} h`],
    ["Tamaño", product.size]
  ];

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2 md:px-8 md:py-16">
      <div className="aspect-[4/5] overflow-hidden bg-sand">
        <CandleImage src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <div>
        <Link href="/tienda" className="text-[11px] uppercase tracking-brand text-charcoal/45">
          Tienda
        </Link>
        <p className="mt-4 text-[11px] uppercase tracking-brand text-amberDeep">
          {aromaLabels[product.aroma]} · {formatLabels[product.format]}
        </p>
        <h1 className="mt-2 font-serif text-4xl text-charcoal md:text-5xl">{product.name}</h1>
        <p className="mt-4 font-serif text-2xl">{formatPrice(product.price)}</p>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-charcoal/70">{product.description}</p>
        <p className="mt-3 text-sm text-charcoal/55">Notas: {product.notes}</p>
        <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-charcoal/10 pt-6">
          {details.map(([label, value]) => (
            <div key={label}>
              <dt className="text-[11px] uppercase tracking-brand text-charcoal/45">{label}</dt>
              <dd className="mt-1 text-sm text-charcoal">{value}</dd>
            </div>
          ))}
        </dl>
        <AddToCart slug={product.slug} />
      </div>
    </div>
  );
}
