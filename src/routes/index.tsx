import { createFileRoute, Link } from "@tanstack/react-router";
import heroPreview from "@/assets/hero-preview.jpg";

import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { ReviewStrip } from "@/components/review-strip";
import { SectionHeading } from "@/components/section-heading";
import { brand, faqs } from "@/lib/content";
import { featuredProducts } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${brand.name} — Ilmu yang bisa diunduh` },
      {
        name: "description",
        content:
          "E-book, kursus, dan template siap pakai: dikemas rapi, bobot nol, dan sudah di tempatnya. Unduh, buka, kerjakan.",
      },
      { property: "og:title", content: `${brand.name} — Ilmu yang bisa diunduh` },
      {
        property: "og:description",
        content:
          "Katalog produk digital kreator Indonesia: e-book, kursus, dan template dengan harga transparan dalam Rupiah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="hero-wash pointer-events-none absolute inset-y-0 -right-1/3 w-[70%] rotate-[20deg]" />
        <div className="relative grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div
              className="clip-in rise inline-flex items-center gap-2 rounded-full border border-hair px-3 py-1 text-xs tracking-[0.2em] text-faint uppercase"
              style={{ animationDelay: "60ms" }}
            >
              <span className="size-1.5 rounded-full bg-accent" />
              Produk digital · kirim instan
            </div>
            <h1 className="mt-6 text-5xl leading-[0.92] text-balance md:text-7xl">
              <span className="sheen rise font-display tracking-tight uppercase">Ilmu yang</span>
              <br />
              <span className="rise text-foreground" style={{ animationDelay: "200ms" }}>
                bisa diunduh
              </span>
            </h1>
            <p
              className="mt-6 max-w-[46ch] text-muted text-pretty"
              style={{ animationDelay: "280ms" }}
            >
              E-book, kursus, dan template siap pakai — dikemas rapi, bobot nol, dan sudah di
              tempatnya. Unduh, buka, kerjakan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
              <Link
                to="/katalog"
                className="rise rounded-full bg-accent px-6 py-3 font-medium text-accent-ink transition-transform duration-150 hover:-translate-y-0.5"
              >
                Lihat katalog
              </Link>
              <Link
                to="/bantuan"
                className="rise rounded-full border border-hair px-6 py-3 text-muted transition-colors duration-150 hover:border-foreground/30 hover:text-foreground"
              >
                Cara kerja
              </Link>
            </div>
          </div>

          <div className="md:col-span-5" style={{ animationDelay: "320ms" }}>
            <div className="slide-in rotate-[1.5deg] rounded-[min(2vw,20px)] border border-hair bg-surface p-4">
              <img
                src={heroPreview}
                alt="Layar laptop menampilkan sampul e-book minimalis"
                width={992}
                height={672}
                className="aspect-[4/3] w-full rounded-[min(1.5vw,14px)] object-cover outline-1 -outline-offset-1 outline-foreground/10"
              />
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-medium">Kursus · Desain Sistem</div>
                  <div className="mt-1 text-xs text-faint">
                    12 modul · 6 jam · akses seumur hidup
                  </div>
                </div>
                <span className="font-mono text-sm text-accent">Rp249.000</span>
              </div>
              <div className="mt-4 h-1 rounded-full bg-hair">
                <div className="h-1 w-2/3 rounded-full bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-hair py-20">
        <SectionHeading
          title="Katalog"
          note={
            <Link to="/katalog" className="transition-colors hover:text-foreground">
              (a) 06 produk →
            </Link>
          }
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 70}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <ReviewStrip />

      <section className="grid gap-14 border-t border-hair py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl tracking-tight uppercase">Kontak</h2>
          <p className="mt-3 max-w-[38ch] text-sm text-muted">
            Punya pertanyaan sebelum membeli? Tulis ke kami.
          </p>
          <ContactForm className="mt-8" />
        </div>
        <div>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl tracking-tight uppercase">Bantuan</h2>
            <Link
              to="/bantuan"
              className="shrink-0 font-mono text-xs text-faint transition-colors hover:text-foreground"
            >
              semua pertanyaan →
            </Link>
          </div>
          <p className="mt-3 text-sm text-muted">Pertanyaan yang paling sering ditanyakan.</p>
          <div className="mt-8">
            <FaqList items={faqs.slice(0, 3)} />
          </div>
          <p className="mt-6 font-mono text-xs text-faint">
            {brand.email} · {brand.hours}
          </p>
        </div>
      </section>
    </>
  );
}
