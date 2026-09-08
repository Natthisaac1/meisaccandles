import type { Metadata } from "next";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = { title: "Carrito" };

export default function CartPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
      <CartView />
    </div>
  );
}
