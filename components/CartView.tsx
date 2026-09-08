"use client";

import Link from "next/link";
import { CandleImage } from "@/components/CandleImage";
import { useCart } from "@/lib/cart";
import { formatPrice, getProduct } from "@/lib/products";

export function CartView() {
  const { lines, ready, setQty, remove } = useCart();

  if (!ready) {
    return <p className="text-sm text-charcoal/60">Cargando el carrito…</p>;
  }

  const detailed = lines
    .map((line) => {
      const product = getProduct(line.slug);
      return product ? { ...line, product } : null;
    })
    .filter((line): line is NonNullable<typeof line> => Boolean(line));

  const total = detailed.reduce((sum, line) => sum + line.product.price * line.qty, 0);

  if (detailed.length === 0) {
    return (
      <div className="py-10">
        <h1 className="font-serif text-4xl text-charcoal">Tu carrito</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/65">
          Aún no hay velas aquí. Elige un aroma en la tienda.
        </p>
        <Link
          href="/tienda"
          className="mt-8 inline-block bg-charcoal px-6 py-3 text-sm uppercase tracking-brand text-cream"
        >
          Ver la tienda
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-serif text-4xl text-charcoal md:text-5xl">Tu carrito</h1>
      <ul className="mt-8 divide-y divide-charcoal/10">
        {detailed.map((line) => (
          <li key={line.slug} className="flex gap-4 py-6">
            <div className="h-28 w-24 shrink-0 overflow-hidden bg-sand">
              <CandleImage
                src={line.product.image}
                alt={line.product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Link href={`/producto/${line.slug}`} className="font-serif text-xl text-charcoal">
                    {line.product.name}
                  </Link>
                  <p className="mt-1 text-sm text-charcoal/60">{formatPrice(line.product.price)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => remove(line.slug)}
                  className="text-xs uppercase tracking-brand text-charcoal/45 hover:text-charcoal"
                >
                  Quitar
                </button>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center border border-charcoal/15">
                  <button
                    type="button"
                    className="px-2.5 py-1"
                    onClick={() => setQty(line.slug, line.qty - 1)}
                    aria-label="Reducir"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm">{line.qty}</span>
                  <button
                    type="button"
                    className="px-2.5 py-1"
                    onClick={() => setQty(line.slug, line.qty + 1)}
                    aria-label="Aumentar"
                  >
                    +
                  </button>
                </div>
                <p className="text-sm">{formatPrice(line.product.price * line.qty)}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-charcoal/10 pt-6 sm:flex-row sm:items-center">
        <p className="font-serif text-2xl text-charcoal">Total {formatPrice(total)}</p>
        <Link
          href="/checkout"
          className="bg-charcoal px-6 py-4 text-sm uppercase tracking-brand text-cream"
        >
          Continuar
        </Link>
      </div>
    </div>
  );
}
