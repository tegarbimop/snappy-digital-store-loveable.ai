import coverDesainSistem from "@/assets/cover-desain-sistem.jpg";
import coverFintech from "@/assets/cover-fintech.jpg";
import coverMotion from "@/assets/cover-motion.jpg";
import coverPresentasi from "@/assets/cover-presentasi.jpg";
import coverProduktivitas from "@/assets/cover-produktivitas.jpg";
import coverTipografi from "@/assets/cover-tipografi.jpg";

export const productKinds = ["E-book", "Kursus", "Template"] as const;

export type ProductKind = (typeof productKinds)[number];

export type Product = {
  id: string;
  title: string;
  kind: ProductKind;
  blurb: string;
  price: string;
  priceValue: number;
  meta: string;
  cover: string;
  included: string[];
};

export const products: Product[] = [
  {
    id: "sistem-tipografi",
    title: "Sistem Tipografi Praktis",
    kind: "E-book",
    blurb: "Panduan memilih dan memasangkan huruf untuk produk digital.",
    price: "Rp89.000",
    priceValue: 89000,
    meta: "62 halaman · PDF + EPUB",
    cover: coverTipografi,
    included: ["Skala huruf siap pakai", "12 pasangan huruf teruji", "Checklist layout halaman"],
  },
  {
    id: "desain-sistem-dari-nol",
    title: "Desain Sistem dari Nol",
    kind: "Kursus",
    blurb: "Bangun komponen, token, dan dokumentasi yang konsisten.",
    price: "Rp249.000",
    priceValue: 249000,
    meta: "12 modul · 6 jam · akses seumur hidup",
    cover: coverDesainSistem,
    included: ["12 modul video", "File contoh Figma", "Template dokumentasi token"],
  },
  {
    id: "kit-landing-fintech",
    title: "Kit Landing Fintech",
    kind: "Template",
    blurb: "Figma siap pakai: 24 halaman, responsif, siap produksi.",
    price: "Rp129.000",
    priceValue: 129000,
    meta: "24 halaman · Figma · responsif",
    cover: coverFintech,
    included: ["24 halaman siap edit", "Versi mobile & desktop", "Komponen token warna"],
  },
  {
    id: "sistem-produktivitas",
    title: "Sistem Produktivitas 2.0",
    kind: "E-book",
    blurb: "Metode mengatur energi dan waktu untuk hasil kerja yang konsisten.",
    price: "Rp99.000",
    priceValue: 99000,
    meta: "78 halaman · PDF + EPUB",
    cover: coverProduktivitas,
    included: ["Template penjadwalan", "Rutinitas 30 hari", "Panduan tinjauan mingguan"],
  },
  {
    id: "kursus-ui-motion",
    title: "Kursus UI Motion Dasar",
    kind: "Kursus",
    blurb: "Belajar animasi antarmuka yang halus dari nol hingga mahir.",
    price: "Rp449.000",
    priceValue: 449000,
    meta: "16 modul · 9 jam · akses seumur hidup",
    cover: coverMotion,
    included: ["16 modul video", "Library easing siap pakai", "Kritik tugas 2x"],
  },
  {
    id: "kit-presentasi-investor",
    title: "Kit Presentasi Investor",
    kind: "Template",
    blurb: "28 slide rapi untuk pitching: struktur, grafik, dan naskah.",
    price: "Rp159.000",
    priceValue: 159000,
    meta: "28 slide · Figma + PDF",
    cover: coverPresentasi,
    included: ["28 slide terstruktur", "Grafik siap edit", "Naskah pembuka per slide"],
  },
];

export const featuredProducts = products.slice(0, 3);

export function formatRupiah(value: number) {
  return `Rp${value.toLocaleString("id-ID")}`;
}
