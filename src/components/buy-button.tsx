import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

/** Dummy purchase: confirms the order in the UI, no payment is processed. */
export function BuyButton({ product, className }: { product: Product; className?: string }) {
  const [ordered, setOrdered] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function handleBuy() {
    setOrdered(true);
    toast.success("Pesanan diterima", {
      description: `${product.title} — tautan unduhan dikirim ke email Anda (demo).`,
    });
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOrdered(false), 2600);
  }

  return (
    <button
      type="button"
      onClick={handleBuy}
      className={cn(
        "w-full rounded-full bg-accent py-2.5 font-medium text-accent-ink transition-colors duration-150 hover:bg-accent/80",
        className,
      )}
    >
      {ordered ? "Pesanan diterima" : "Beli"}
    </button>
  );
}
