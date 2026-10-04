import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-full border border-hair bg-surface px-4 py-2.5 text-sm placeholder:text-faint focus:border-accent/50";

const empty = { name: "", email: "", subject: "", message: "" };

export function ContactForm({ className }: { className?: string }) {
  const [form, setForm] = useState(empty);

  function update(key: keyof typeof empty, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success("Pesan terkirim", {
      description: "Terima kasih — tim kami membalas dalam 1x24 jam (demo).",
    });
    setForm(empty);
  }

  return (
    <form className={cn("grid gap-4", className)} onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={fieldClass}
          aria-label="Nama"
          placeholder="Nama"
          required
          value={form.name}
          onChange={(event) => update("name", event.target.value)}
        />
        <input
          className={fieldClass}
          aria-label="Email"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
        />
      </div>
      <input
        className={fieldClass}
        aria-label="Subjek"
        placeholder="Subjek"
        value={form.subject}
        onChange={(event) => update("subject", event.target.value)}
      />
      <textarea
        className="rounded-[min(1.5vw,16px)] border border-hair bg-surface px-4 py-3 text-sm placeholder:text-faint focus:border-accent/50"
        aria-label="Pesan"
        rows={4}
        placeholder="Pesan"
        required
        value={form.message}
        onChange={(event) => update("message", event.target.value)}
      />
      <button
        type="submit"
        className="justify-self-start rounded-full bg-accent px-6 py-3 font-medium text-accent-ink transition-colors duration-150 hover:bg-accent/80"
      >
        Kirim pesan
      </button>
      <p className="font-mono text-[11px] text-faint">
        Situs demo — pesan tidak disimpan atau dikirim ke alamat mana pun.
      </p>
    </form>
  );
}
