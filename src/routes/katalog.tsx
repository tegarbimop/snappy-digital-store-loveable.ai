import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { brand, productKinds, products, type ProductKind } from "@/lib/products";

export const Route = createFileRoute("/katalog")({
  head: () => ({
    meta: [
      { title: `Katalog Produk Digital — ${brand.name}` },
      {
        name: "description",
        content:
          "Enam produk digital siap unduh: e-book, kursus, dan template. Harga transparan dalam Rupiah, akses seumur hidup.",
      },
      { property: "og:title", content: `Katalog Produk Digital — ${brand.name}` },
      {
        property: "og:description",
        content: "Saring berdasarkan jenis: e-book, kursus, atau template. Semua siap diunduh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KatalogPage,
});

type Filter = "Semua" | ProductKind;

const filters: Filter[] = ["Semua", ...productKinds];

function KatalogPage() {
  const [active, setActive] = useState<Filter>("Semua");
  const shown = active === "Semua" ? products : products.filter((item) => item.kind === active);

  return (
    <section className="py-20">
      <SectionHeading title="Katalog" note={`(a) ${String(shown.length).padStart(2, "0")} produk`} />

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={
              active === filter
                ? "rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-ink transition-colors duration-150"
                : "rounded-full border border-hair px-4 py-1.5 text-sm text-faint transition-colors duration-150 hover:border-foreground/30 hover:text-foreground"
            }
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((product, index) => (
          <Reveal key={product.id} delay={index * 60}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hair pt-8">
        <p className="max-w-[52ch] text-sm text-muted text-pretty">
          Semua harga dalam Rupiah dan sudah termasuk lisensi komersial untuk satu tim. Tombol beli
          pada situs demo ini hanya mengonfirmasi pesanan di layar.
        </p>
        <Link
          to="/bantuan"
          className="shrink-0 rounded-full border border-hair px-5 py-2.5 text-sm text-muted transition-colors duration-150 hover:border-foreground/30 hover:text-foreground"
        >
          Cara pengiriman produk
        </Link>
      </div>
    </section>
  );
}
