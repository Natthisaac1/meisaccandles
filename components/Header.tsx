"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="group min-w-0">
          <span className="block font-serif text-[1.35rem] leading-none tracking-tight text-charcoal md:text-2xl">
            MeisacCandles
          </span>
          <span className="mt-1 hidden text-[10px] uppercase tracking-brand text-charcoal/55 sm:block">
            Velas de soya · Ecuador
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-charcoal/80 md:gap-8">
          <Link href="/tienda" className="hover:text-charcoal">
            Tienda
          </Link>
          <Link href="/carrito" className="relative hover:text-charcoal">
            Carrito
            {count > 0 && (
              <span className="ml-1.5 inline-flex min-w-5 items-center justify-center rounded-full bg-charcoal px-1.5 py-0.5 text-[10px] text-cream">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
