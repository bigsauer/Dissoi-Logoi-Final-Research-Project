import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ArgumentClusterCardProps = {
  tag: ReactNode;
  title: ReactNode;
  eyebrow?: string;
  children: ReactNode;
  image?: ReactNode;
  className?: string;
};

export function ArgumentClusterCard({
  tag,
  title,
  eyebrow,
  children,
  image,
  className,
}: ArgumentClusterCardProps) {
  return (
    <article
      className={cn(
        "card-rise flex flex-col overflow-hidden rounded-md border border-border bg-card",
        className,
      )}
    >
      {image ? <div className="border-b border-border">{image}</div> : null}
      <div className="flex flex-col gap-3 px-5 pb-5 pt-[1.125rem] sm:gap-4 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-border bg-muted/60 px-2 py-[0.0625rem] text-[11px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
            {tag}
          </span>
          {eyebrow ? (
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {eyebrow}
            </span>
          ) : null}
        </div>
        <h2 className="text-[1.375rem] font-bold leading-tight sm:text-[1.5rem]">
          {title}
        </h2>
        <div className="prose-reading text-[0.9625rem] leading-relaxed text-muted-foreground sm:text-[0.9825rem]">
          {children}
        </div>
      </div>
    </article>
  );
}
