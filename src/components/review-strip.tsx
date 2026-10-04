import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/content";

export function ReviewStrip() {
  return (
    <section className="border-t border-hair py-20">
      <SectionHeading title="Ulasan" note="(b) geser →" />
      <div className="no-scrollbar mt-10 flex gap-5 overflow-x-auto pb-4">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 70} className="w-80 shrink-0">
            <blockquote className="h-full rounded-[min(1.5vw,16px)] border border-hair bg-surface p-6">
              <p className="text-muted text-pretty">“{item.quote}”</p>
              <footer className="mt-5 text-sm">
                <span className="text-foreground">{item.name}</span>
                <span className="text-faint"> · {item.role}</span>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
