import { useState } from "react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { brand, nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const match = useMatchRoute();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="font-display text-xl tracking-wide" onClick={() => setOpen(false)}>
          {brand.name}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden gap-8 text-sm md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "transition-colors duration-150",
                match({ to: item.to }) ? "text-foreground" : "text-faint hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/katalog"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-colors duration-150 hover:bg-accent/80"
          >
            Beli sekarang
          </Link>
          <button
            type="button"
            className="grid size-8 place-items-center rounded-full border border-hair text-faint transition-colors duration-150 hover:text-foreground md:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-hair px-5 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-full px-3 py-2 text-sm transition-colors duration-150",
                match({ to: item.to })
                  ? "bg-elevated text-foreground"
                  : "text-faint hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
