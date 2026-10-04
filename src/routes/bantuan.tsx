import { createFileRoute, Link } from "@tanstack/react-router";

import { FaqList } from "@/components/faq-list";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { brand, faqs } from "@/lib/content";

export const Route = createFileRoute("/bantuan")({
  head: () => ({
    meta: [
      { title: `Pusat Bantuan — ${brand.name}` },
      {
        name: "description",
        content:
          "Cara pengiriman produk, garansi 14 hari, lisensi komersial, dan metode pembayaran. Jawaban singkat untuk pertanyaan umum.",
      },
      { property: "og:title", content: `Pusat Bantuan — ${brand.name}` },
      {
        property: "og:description",
        content:
          "Tautan unduhan dikirim otomatis, garansi 14 hari, dan akses kursus seumur hidup. Perlu bantuan lain? Kirim pesan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BantuanPage,
});

const steps = [
  { label: "01", text: "Pilih produk, lalu tekan Beli." },
  { label: "02", text: "Selesaikan pembayaran — transfer, e-wallet, atau kartu." },
  { label: "03", text: "Tautan unduhan masuk ke email Anda dalam hitungan menit." },
];

function BantuanPage() {
  return (
    <section className="grid gap-14 py-20 md:grid-cols-2">
      <div>
        <SectionHeading title="Bantuan" note="(c) 05 pertanyaan" />
        <p className="mt-4 max-w-[40ch] text-sm text-muted text-pretty">
          Semua produk digital dikirim otomatis. Kalau pertanyaan Anda belum terjawab di sini,
          tulis ke kami dan tim membalas dalam 1x24 jam.
        </p>

        <ol className="mt-8 divide-y divide-hair border-y border-hair">
          {steps.map((step) => (
            <li key={step.label} className="flex gap-4 py-4">
              <span className="font-mono text-xs text-accent">{step.label}</span>
              <span className="text-sm text-muted text-pretty">{step.text}</span>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/kontak"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-colors duration-150 hover:bg-accent/80"
          >
            Kirim pesan
          </Link>
          <Link
            to="/katalog"
            className="rounded-full border border-hair px-6 py-3 text-sm text-muted transition-colors duration-150 hover:border-foreground/30 hover:text-foreground"
          >
            Lihat katalog
          </Link>
        </div>

        <p className="mt-6 font-mono text-xs text-faint">
          {brand.email} · {brand.hours}
        </p>
      </div>

      <Reveal>
        <h2 className="font-display text-2xl tracking-tight uppercase">Pertanyaan umum</h2>
        <div className="mt-6">
          <FaqList items={faqs} />
        </div>
      </Reveal>
    </section>
  );
}
