"use client";

import { SITE_NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Button } from "@/components/ui/Button";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="shrink-0 border-border"
    >
      <span aria-hidden className="text-[13px] font-bold tracking-[0.12em]">
        {isDark ? "SUN" : "MOON"}
      </span>
    </Button>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="glass-header sticky top-0 z-[100] border-b border-border/70">
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between gap-4 px-4 py-[0.7rem] sm:px-6 lg:px-10">
        <Link
          href="/"
          className="focus-ring group shrink-0 rounded-md text-left outline-none"
        >
          <span className="block text-[11px] font-bold uppercase tracking-[0.26em] text-muted-foreground">
            Dissoi Logoi · St. Louis
          </span>
          <span className="block text-[0.95rem] font-bold tracking-tight text-foreground underline-offset-4 group-hover:underline sm:text-[1.05rem]">
            Cranes Over Clayton
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-[0.375rem] md:flex lg:gap-[0.5rem]"
        >
          {SITE_NAV.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-[0.6rem] py-2 text-[0.8rem] font-semibold uppercase tracking-[0.08em] transition-colors lg:text-[0.82rem]",
                  active
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-[0.35rem] sm:gap-2">
          <ThemeToggle />

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((x) => !x)}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
              Menu
            </span>
          </Button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-background/92 backdrop-blur md:hidden"
          aria-label="Mobile primary navigation"
        >
          <div className="mx-auto flex max-w-[90rem] flex-col px-4 py-4 sm:px-6">
            {SITE_NAV.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em]",
                    active
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
