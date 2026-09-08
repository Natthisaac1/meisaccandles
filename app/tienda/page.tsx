import type { Metadata } from "next";
import { Suspense } from "react";
import { Catalog } from "@/components/Catalog";

export const metadata: Metadata = {
  title: "Tienda"
};

export default function TiendaPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <Suspense fallback={<p className="text-sm text-charcoal/60">Cargando la tienda…</p>}>
        <Catalog />
      </Suspense>
    </div>
  );
}
