"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import {
  aromaLabels,
  formatLabels,
  products,
  type Aroma,
  type Formato
} from "@/lib/products";

const aromas = Object.keys(aromaLabels) as Aroma[];
const formats = Object.keys(formatLabels) as Formato[];

export function Catalog() {
  const params = useSearchParams();
  const router = useRouter();
  const aroma = params.get("aroma") || "";
  const format = params.get("formato") || "";

  const filtered = useMemo(
    () =>
      products.filter((product) => {
        if (aroma && product.aroma !== aroma) return false;
        if (format && product.format !== format) return false;
        return true;
      }),
    [aroma, format]
  );

  function update(next: { aroma?: string; formato?: string }) {
    const query = new URLSearchParams();
    const aromaValue = next.aroma ?? aroma;
    const formatValue = next.formato ?? format;
    if (aromaValue) query.set("aroma", aromaValue);
    if (formatValue) query.set("formato", formatValue);
    const suffix = query.toString();
    router.push(suffix ? `/tienda?${suffix}` : "/tienda");
  }

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-charcoal/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-brand text-amberDeep">Catálogo</p>
          <h1 className="mt-2 font-serif text-4xl text-charcoal md:text-5xl">La tienda</h1>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-charcoal/65">
            Once velas de soya. Filtra por aroma o formato. Precios en USD.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            aria-label="Filtrar por aroma"
            value={aroma}
            onChange={(event) => update({ aroma: event.target.value })}
            className="border border-charcoal/15 bg-cream px-3 py-2 text-sm text-charcoal"
          >
            <option value="">Todos los aromas</option>
            {aromas.map((item) => (
              <option key={item} value={item}>
                {aromaLabels[item]}
              </option>
            ))}
          </select>
          <select
            aria-label="Filtrar por formato"
            value={format}
            onChange={(event) => update({ formato: event.target.value })}
            className="border border-charcoal/15 bg-cream px-3 py-2 text-sm text-charcoal"
          >
            <option value="">Todos los formatos</option>
            {formats.map((item) => (
              <option key={item} value={item}>
                {formatLabels[item]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-sm text-charcoal/60">
          No hay velas con ese filtro. Prueba otra combinación.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
