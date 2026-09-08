import type { Metadata } from "next";
import { CheckoutForm } from "@/components/CheckoutForm";

export const metadata: Metadata = { title: "Pedido" };

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <CheckoutForm />
    </div>
  );
}
