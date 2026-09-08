import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-2xl">MeisacCandles</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/70">
            Velas de soya vertidas en lotes pequeños. Quito y el resto del Ecuador.
          </p>
        </div>
        <div className="text-sm text-cream/75">
          <p className="text-[11px] uppercase tracking-brand text-amber">Envíos</p>
          <p className="mt-3 leading-relaxed">
            2–5 días hábiles a las principales ciudades. Precios en dólares.
          </p>
        </div>
        <div className="text-sm">
          <p className="text-[11px] uppercase tracking-brand text-amber">Visitar</p>
          <div className="mt-3 flex flex-col gap-2 text-cream/75">
            <Link href="/tienda" className="hover:text-cream">
              Tienda
            </Link>
            <Link href="/carrito" className="hover:text-cream">
              Carrito
            </Link>
            <Link href="/checkout" className="hover:text-cream">
              Pedido
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
