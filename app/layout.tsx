import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s · Dissoi Logoi · Clayton",
    default: "Cranes Over Clayton · Dissoi Logoi Research",
  },
  description:
    "A balanced Dissoi Logoi on luxury apartment development near St. Louis and Clayton—and what it means for neighborhoods and small businesses.",
};

const themeBootstrap = `
try {
  var t = localStorage.getItem('theme');
  var d = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var root = document.documentElement;
  if (t === 'dark') {
    root.classList.add('dark');
  } else if (t === 'light') {
    root.classList.remove('dark');
  } else if (d) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  if (!(CSS && CSS.supports && CSS.supports('-webkit-backdrop-filter', 'blur(1px)'))) {
    root.classList.add('supports-no-backdrop');
  }
} catch (_) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/api1laf.css" />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {themeBootstrap}
        </Script>
        <ThemeProvider>
          <SiteHeader />
          <div className="flex flex-1 flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
