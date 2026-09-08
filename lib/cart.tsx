"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { products } from "@/lib/products";

const STORAGE_KEY = "meisaccandles-cart";

export type CartLine = { slug: string; qty: number };

type CartContextValue = {
  lines: CartLine[];
  ready: boolean;
  count: number;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) {
          setLines(
            parsed.filter(
              (line) =>
                typeof line.slug === "string" &&
                typeof line.qty === "number" &&
                line.qty > 0 &&
                products.some((product) => product.slug === line.slug)
            )
          );
        }
      }
    } catch {
      setLines([]);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const add = useCallback((slug: string, qty = 1) => {
    setLines((current) => {
      const existing = current.find((line) => line.slug === slug);
      if (!existing) return [...current, { slug, qty }];
      return current.map((line) =>
        line.slug === slug ? { ...line, qty: line.qty + qty } : line
      );
    });
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setLines((current) =>
      qty <= 0
        ? current.filter((line) => line.slug !== slug)
        : current.map((line) => (line.slug === slug ? { ...line, qty } : line))
    );
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((current) => current.filter((line) => line.slug !== slug));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const count = lines.reduce((sum, line) => sum + line.qty, 0);

  const value = useMemo(
    () => ({ lines, ready, count, add, setQty, remove, clear }),
    [lines, ready, count, add, setQty, remove, clear]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
}
