"use client";

import { cn } from "@/lib/utils";
import { type ReactNode, useId, useState } from "react";

type AccordionItemProps = {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const panelId = `${id}-panel`;
  const headingId = `${id}-heading`;

  const transitionStyle = open
    ? {
        transition:
          "grid-template-rows 0.2s ease-out, opacity 0.2s ease-out",
      }
    : {
        transition:
          "grid-template-rows 0.15s ease-in, opacity 0.15s ease-in",
      };

  return (
    <div className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
      <h4 className="text-base leading-tight font-bold">
        <button
          type="button"
          id={headingId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-4 px-4 py-[0.9rem] text-left hover:bg-muted/40"
        >
          <span>{title}</span>
          <span
            aria-hidden
            className={cn(
              "text-muted-foreground transition-transform duration-200",
              open && "rotate-45",
            )}
          >
            +
          </span>
        </button>
      </h4>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        className={cn(
          "grid overflow-hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
        style={transitionStyle}
      >
        <div className="min-h-0">
          <div className="border-t border-border px-4 py-5 text-[0.9575rem] leading-relaxed text-foreground/86">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
