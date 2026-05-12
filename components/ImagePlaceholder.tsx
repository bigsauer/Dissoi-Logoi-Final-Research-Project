import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  caption: string;
  className?: string;
};

export function ImagePlaceholder({ caption, className }: ImagePlaceholderProps) {
  return (
    <figure
      className={cn(
        "card-rise img-zoom-wrap bg-muted/40 text-muted-foreground",
        className,
      )}
    >
      <div
        className="relative aspect-[21/10] bg-[repeating-linear-gradient(315deg,var(--border)_0,var(--border)_1px,transparent_1px,transparent_10px)]"
        aria-hidden
      >
        <div className="img-zoom-inner absolute inset-0 opacity-40 blur-[2px]" />
      </div>
      <figcaption className="flex items-center gap-3 border-t border-border px-4 py-3 text-[0.8125rem] leading-snug">
        <span
          className="inline-block size-5 shrink-0 rounded-sm bg-foreground opacity-75"
          aria-hidden
        />
        <span className="tracking-tight text-foreground/80">{caption}</span>
      </figcaption>
    </figure>
  );
}
