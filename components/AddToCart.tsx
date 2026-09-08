"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";

export function AddToCart({ slug }: { slug: string }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="mt-8">
      <div className="flex items-center gap-3">
        <label className="text-sm text-charcoal/70" htmlFor="qty">
          Cantidad
        </label>
        <div className="flex items-center border border-charcoal/15">
          <button
            type="button"
            className="px-3 py-2 text-charcoal"
            onClick={() => setQty((value) => Math.max(1, value - 1))}
            aria-label="Reducir cantidad"
          >
            −
          </button>
          <input
            id="qty"
            type="number"
            min={1}
            value={qty}
            onChange={(event) => setQty(Math.max(1, Number(event.target.value) || 1))}
            className="w-12 bg-transparent text-center text-sm outline-none"
          />
          <button
            type="button"
            className="px-3 py-2 text-charcoal"
            onClick={() => setQty((value) => value + 1)}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          add(slug, qty);
          setAdded(true);
        }}
        className="mt-5 w-full bg-charcoal px-6 py-4 text-sm uppercase tracking-brand text-cream transition hover:bg-ink md:w-auto"
      >
        Añadir al carrito
      </button>
      {added && <p className="mt-3 text-sm text-charcoal/70">Listo. La vela está en tu carrito.</p>}
    </div>
  );
}
