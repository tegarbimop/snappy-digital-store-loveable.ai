import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider, useTheme } from "@/hooks/use-theme";
import { brand } from "@/lib/content";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap";

function ThemedToaster() {
  const { theme } = useTheme();
  return <Toaster theme={theme} position="bottom-right" closeButton />;
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl tracking-tight">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Halaman tidak ditemukan</h2>
        <p className="mt-2 text-sm text-muted">
          Alamat yang Anda buka tidak ada atau sudah dipindahkan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-colors duration-150 hover:bg-accent/80"
          >
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl tracking-tight uppercase">Halaman tidak dimuat</h1>
        <p className="mt-2 text-sm text-muted">
          Ada gangguan di sisi kami. Coba muat ulang atau kembali ke beranda.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-colors duration-150 hover:bg-accent/80"
          >
            Coba lagi
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-hair px-6 py-3 text-sm font-medium text-muted transition-colors duration-150 hover:border-foreground/30 hover:text-foreground"
          >
            Ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${brand.name} — Produk digital yang bisa diunduh` },
      {
        name: "description",
        content:
          "E-book, kursus, dan template siap pakai. Dibayar sekali, diunduh selamanya — dikirim instan ke email Anda.",
      },
      { name: "author", content: brand.name },
      { property: "og:title", content: `${brand.name} — Produk digital yang bisa diunduh` },
      {
        property: "og:description",
        content:
          "E-book, kursus, dan template siap pakai dari kreator Indonesia. Ringan, cepat, dan tersusun rapi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: brand.name },
      { property: "og:locale", content: "id_ID" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: FONT_HREF },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="edge-bar h-1" />
        <SiteHeader />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <main className="mx-auto max-w-7xl px-5">
          <Outlet />
        </main>
        <SiteFooter />
        <ThemedToaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
