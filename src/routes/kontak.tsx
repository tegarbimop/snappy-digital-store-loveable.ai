import { createFileRoute, Link } from "@tanstack/react-router";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { brand } from "@/lib/content";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: `Hubungi Kami — ${brand.name}` },
      {
        name: "description",
        content:
          "Pertanyaan sebelum membeli, permintaan lisensi tim, atau kendala unduhan — kirim pesan dan kami balas dalam 1x24 jam.",
      },
      { property: "og:title", content: `Hubungi Kami — ${brand.name}` },
      {
        property: "og:description",
        content:
          "Formulir kontak resmi LUMAS. Balasan dalam 1x24 jam pada jam kerja, Senin–Sabtu 09.00–18.00 WIB.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KontakPage,
});

const details = [
  { label: "Email", value: brand.email },
  { label: "Jam kerja", value: brand.hours },
  { label: "Balasan", value: "Maksimal 1x24 jam" },
];

function KontakPage() {
  return (
    <section className="grid gap-14 py-20 md:grid-cols-2">
      <div>
        <SectionHeading title="Kontak" note="(d) formulir" />
        <p className="mt-4 max-w-[38ch] text-sm text-muted text-pretty">
          Punya pertanyaan sebelum membeli, atau butuh bantuan soal unduhan? Tulis ke kami.
        </p>
        <ContactForm className="mt-8" />
      </div>

      <Reveal delay={80}>
        <dl className="divide-y divide-hair border-y border-hair">
          {details.map((item) => (
            <div key={item.label} className="grid gap-1 py-4">
              <dt className="font-mono text-xs tracking-[0.15em] text-faint uppercase">
                {item.label}
              </dt>
              <dd className="text-sm">{item.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-muted text-pretty">
          Butuh jawaban cepat? Many a pertanyaan sudah terjawab di pusat bantuan.
        </p>
        <Link
          to="/bantuan"
          className="mt-4 inline-flex rounded-full border border-hair px-5 py-2.5 text-sm text-muted transition-colors duration-150 hover:border-foreground/30 hover:text-foreground"
        >
          Buka pusat bantuan
        </Link>
      </Reveal>
    </section>
  );
}
