"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice, getProduct } from "@/lib/products";

export function CheckoutForm() {
  const { lines, ready, clear } = useCart();
  const [confirmed, setConfirmed] = useState(false);

  const detailed = useMemo(
    () =>
      lines
        .map((line) => {
          const product = getProduct(line.slug);
          return product ? { ...line, product } : null;
        })
        .filter((line): line is NonNullable<typeof line> => Boolean(line)),
    [lines]
  );

  const total = detailed.reduce((sum, line) => sum + line.product.price * line.qty, 0);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clear();
    setConfirmed(true);
  }

  if (!ready) {
    return <p className="text-sm text-charcoal/60">Cargando…</p>;
  }

  if (confirmed) {
    return (
      <div className="mx-auto max-w-xl py-6">
        <p className="text-[11px] uppercase tracking-brand text-amberDeep">Pedido recibido</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
          Recibimos tu pedido. Una persona se contactará contigo.
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-charcoal/70">
          Este es un pedido de demostración. No se realizó ningún cobro. Te escribiremos al
          teléfono o correo que dejaste para coordinar el envío en Ecuador (2–5 días).
        </p>
        <Link href="/tienda" className="mt-8 inline-block text-sm uppercase tracking-brand text-charcoal">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  if (detailed.length === 0) {
    return (
      <div>
        <h1 className="font-serif text-4xl text-charcoal">Pedido</h1>
        <p className="mt-4 text-sm text-charcoal/65">Tu carrito está vacío.</p>
        <Link href="/tienda" className="mt-6 inline-block text-sm uppercase tracking-brand text-charcoal">
          Ir a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-[11px] uppercase tracking-brand text-amberDeep">Demostración</p>
        <h1 className="mt-2 font-serif text-4xl text-charcoal">Tu pedido</h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/65">
          No hay pago en línea. Deja tus datos y te contactamos para confirmar.
        </p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <Field name="name" label="Nombre" autoComplete="name" />
          <Field name="phone" label="Teléfono" type="tel" autoComplete="tel" />
          <Field name="email" label="Correo" type="email" autoComplete="email" />
          <Field name="city" label="Ciudad" autoComplete="address-level2" />
          <label className="grid gap-1.5 text-sm">
            <span className="text-charcoal/70">Dirección</span>
            <textarea
              name="address"
              required
              rows={3}
              className="border border-charcoal/15 bg-white/40 px-3 py-3 outline-none focus:border-charcoal"
            />
          </label>
          <button
            type="submit"
            className="mt-2 bg-charcoal px-6 py-4 text-sm uppercase tracking-brand text-cream"
          >
            Enviar pedido
          </button>
        </form>
      </div>
      <aside className="border border-charcoal/10 bg-sand/50 p-5">
        <p className="text-[11px] uppercase tracking-brand text-charcoal/50">Resumen</p>
        <ul className="mt-4 space-y-3 text-sm">
          {detailed.map((line) => (
            <li key={line.slug} className="flex justify-between gap-4">
              <span>
                {line.product.name} × {line.qty}
              </span>
              <span>{formatPrice(line.product.price * line.qty)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 flex justify-between border-t border-charcoal/10 pt-4 font-serif text-2xl">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </p>
      </aside>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  autoComplete
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="text-charcoal/70">{label}</span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="border border-charcoal/15 bg-white/40 px-3 py-3 outline-none focus:border-charcoal"
      />
    </label>
  );
}
