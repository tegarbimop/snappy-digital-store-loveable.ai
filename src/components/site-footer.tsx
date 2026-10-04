import { brand } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-hair py-8 text-center font-mono text-xs text-faint">
      {brand.name} · © 2026 · {brand.tagline}
    </footer>
  );
}
