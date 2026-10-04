import type { Faq } from "@/lib/content";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <dl className="divide-y divide-hair border-y border-hair">
      {items.map((item) => (
        <div key={item.question} className="grid gap-1 py-4">
          <dt className="text-sm font-medium">{item.question}</dt>
          <dd className="text-sm text-muted text-pretty">{item.answer}</dd>
        </div>
      ))}
    </dl>
  );
}
