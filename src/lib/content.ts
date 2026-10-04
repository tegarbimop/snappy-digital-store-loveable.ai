export const brand = {
  name: "LUMAS",
  tagline: "Berat nol, sudah di tempatnya",
  email: "halo@lumas.id",
  hours: "Senin–Sabtu, 09.00–18.00 WIB",
};

export const nav = [
  { to: "/", label: "Beranda" },
  { to: "/katalog", label: "Katalog" },
  { to: "/bantuan", label: "Bantuan" },
  { to: "/kontak", label: "Kontak" },
] as const;

export type NavItem = (typeof nav)[number];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Template-nya rapi, langsung bisa dipakai tim. Unduh dan pakai dalam hitungan menit.",
    name: "Rina P.",
    role: "Product Designer",
  },
  {
    quote: "Kursus desain sistemnya paling terstruktur yang pernah saya ikuti. Materinya padat.",
    name: "Bagas W.",
    role: "Frontend Dev",
  },
  {
    quote: "E-book tipografi mengubah cara saya menyusun halaman. Ringkas dan langsung diterapkan.",
    name: "Sari A.",
    role: "Editor",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Bagaimana produk dikirim?",
    answer: "Tautan unduhan langsung dikirim ke email Anda setelah pembayaran berhasil.",
  },
  {
    question: "Apakah ada garansi?",
    answer: "Ya, 14 hari uang kembali bila produk tidak sesuai harapan.",
  },
  {
    question: "Bisakah dipakai komersial?",
    answer: "Semua produk mencakup lisensi komersial untuk satu tim.",
  },
  {
    question: "Berapa lama akses kursus berlaku?",
    answer: "Akses berlaku seumur hidup, termasuk pembaruan materi berikutnya.",
  },
  {
    question: "Metode pembayaran apa saja?",
    answer: "Transfer bank, e-wallet, dan kartu debit/kredit didukung.",
  },
];
