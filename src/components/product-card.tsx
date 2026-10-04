import { BuyButton } from "@/components/buy-button";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-[min(1.5vw,16px)] border border-hair bg-surface p-3 transition-all duration-150 hover:-translate-y-1 hover:border-accent/40">
      <img
        src={product.cover}
        alt={`Sampul ${product.title}`}
        width={816}
        height={816}
        loading="lazy"
        className="aspect-square w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-foreground/10"
      />
      <div className="p-3">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-hair px-2 py-0.5 text-[10px] tracking-[0.15em] text-faint uppercase">
            {product.kind}
          </span>
          <span className="font-mono text-sm text-accent">{product.price}</span>
        </div>
        <h3 className="mt-3 text-lg font-medium">{product.title}</h3>
        <p className="mt-1 text-sm text-muted text-pretty">{product.blurb}</p>
        <BuyButton product={product} className="mt-4" />
      </div>
    </article>
  );
}
