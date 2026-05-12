import { ButtonLink } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[calc(100dvh-4.75rem)] flex-col justify-center border-b border-border/80 px-6 py-[min(22vh,180px)] sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid w-full max-w-hero gap-8 lg:gap-12">
          <div className="space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-muted-foreground sm:text-[0.72rem]">
              Cranes Over Clayton
            </p>
            <h1 className="font-bold leading-[1.08] tracking-tight text-[clamp(2.125rem,5.2vw,3.825rem)] text-foreground sm:leading-[1.06]">
              Building the Future — At What Cost?
            </h1>
          </div>
          <p className="max-w-content text-[clamp(1.05rem,2.2vw,1.25rem)] font-normal leading-relaxed text-muted-foreground">
            A Dissoi Logoi on luxury development around St. Louis and Clayton: two
            full arguments held in tension, matched in tone and evidence—with no
            verdict at the finish line (because there isn&apos;t supposed to be
            one).
          </p>
          <dl className="grid gap-[0.625rem] text-sm text-muted-foreground sm:flex sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-3">
            <div>
              <dt className="sr-only">Student</dt>
              <dd className="font-semibold text-foreground">Brennan Sauer</dd>
            </div>
            <div className="hidden h-px w-full bg-border sm:block sm:h-3 sm:w-px sm:bg-border" aria-hidden />
            <div>
              <dt className="sr-only">Course</dt>
              <dd>English 370</dd>
            </div>
            <div className="hidden h-px w-full bg-border sm:block sm:h-3 sm:w-px sm:bg-border" aria-hidden />
            <div>
              <dt className="sr-only">Instructor</dt>
              <dd>Mr. Carter</dd>
            </div>
            <div className="hidden h-px w-full bg-border sm:block sm:h-3 sm:w-px sm:bg-border" aria-hidden />
            <div>
              <dt className="sr-only">Year</dt>
              <dd>2026</dd>
            </div>
          </dl>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <ButtonLink href="/introduction" size="lg">
              Begin reading →
            </ButtonLink>
            <ButtonLink href="/benefits" variant="ghost" size="lg">
               Jump to arguments
            </ButtonLink>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-10 left-0 right-0 flex flex-col items-center gap-6 sm:bottom-12">
          <div className="h-px w-12 bg-muted-foreground/45" aria-hidden />
          <a
            href="/introduction"
            className="pointer-events-auto rounded-md px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
            aria-label="Scroll to Introduction"
          >
            Intro
          </a>
          <svg
            className="text-muted-foreground/45"
            aria-hidden="true"
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.35"
              d="M14 17L2 7M14 17L26 7M14 17V2"
              stroke="currentColor"
              strokeWidth="1.35"
              className="text-muted-foreground"
            />
          </svg>
        </div>
      </section>

      <aside className="border-b border-border bg-muted/30 px-6 py-[2.125rem] sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid w-full max-w-wide gap-[0.6rem] text-center sm:text-left">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-muted-foreground">
            Dissoi Logoi framing
          </p>
          <p className="mx-auto max-w-content text-[0.9575rem] leading-relaxed text-foreground/80 sm:mx-0">
            Neither side wins this site. Side 1 and Side 2 are designed to mirror
            each other visually and structurally, so momentum never tilts toward
            a single conclusion.
          </p>
        </div>
      </aside>
    </>
  );
}
