import { AccordionItem } from "@/components/Accordion";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction",
};

export default function IntroductionPage() {
  return (
    <main id="introduction" className="flex flex-1 flex-col">
      <section className="border-b border-border bg-muted/20 px-6 py-[4.125rem] sm:px-10 lg:py-[5.125rem] lg:px-16 xl:px-24">
        <div className="mx-auto grid w-full max-w-wide gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-muted-foreground">
            Setting the stakes
          </p>
          <div className="grid gap-[0.825rem]">
            <h1 className="text-[clamp(2rem,4.75vw,2.95rem)] font-bold tracking-tight text-foreground">
              Why Clayton feels like ground zero again
            </h1>
            <p className="max-w-content text-[1.08rem] leading-relaxed text-muted-foreground sm:text-[1.11rem]">
              A Dissoi Logoi withholds verdict: argue both directions with seriousness,
              not performative neutrality.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-wide gap-14 px-6 py-[3.875rem] sm:px-10 lg:gap-16 lg:px-0 lg:py-[5rem] xl:py-[5.5rem]">
        <ImagePlaceholder
          src="/images/clayton-cbd-skyline-cranes.webp"
          alt="Clayton-area central business district with multiple office towers and construction cranes against a bright sky."
          caption="Clayton central business district skyline with construction cranes visible"
          className="lg:-mx-[6vw]"
          priority
        />

        <div className="grid gap-10 lg:grid-cols-[1fr,minmax(260px,0.94fr)] lg:gap-14">
          <div className="grid gap-[0.9rem]">
            <AccordionItem
              title="How big has the Clayton construction wave been?"
              defaultOpen
            >
              <p className="prose-reading text-foreground/86">
                Encyclopedic timelines and aggregated reporting tally{" "}
                <span className="font-semibold text-foreground">
                  seven-plus major Clayton developments near $600 million by about 2022
                </span>{" "}
                (Wikipedia) — shorthand for cranes you can practically hear through traffic.
              </p>
            </AccordionItem>
            <AccordionItem title="What changed in housing policy downtown?">
              <p className="prose-reading text-foreground/86">
                Aldermen cut minimum parcel sizes from roughly{" "}
                <span className="font-semibold text-foreground">4,000 → 2,000 sq. ft.</span> to
                encourage infill affordability; advocacy groups aiding immigrants,
                refugees, and domestic violence survivors endorsed the overhaul (Lippmann).
              </p>
            </AccordionItem>
            <AccordionItem title="Which projects keep resurfacing publicly?">
              <p className="prose-reading text-foreground/86">
                <span className="font-semibold text-foreground">Bemiston Place</span> opened 2024
                with{" "}
                <span className="font-semibold text-foreground">237 units</span> (Zimmerman);{" "}
                <span className="font-semibold text-foreground">The Shaw</span>,{" "}
                <span className="font-semibold text-foreground">50 South Bemiston</span>, and{" "}
                <span className="font-semibold text-foreground">North Meramec</span> remain marquee
                names in skyline debates (Stritzel; Zimmerman).
              </p>
            </AccordionItem>
          </div>

          <aside className="rounded-md border border-border bg-muted/35 p-[1.15rem] text-[0.8125rem] leading-relaxed uppercase tracking-[0.18em] text-muted-foreground sm:p-[1.35rem] sm:text-[0.825rem]">
            <p className="text-[11px] font-bold normal-case tracking-[0.32em]">
              Assigned question · still open
            </p>
            <p className="mt-6 text-[0.86rem] font-semibold uppercase leading-snug tracking-[0.2em] text-foreground">
              Do Clayton-area luxury multifamily arrivals energize corridors for small merchants and
              longstanding residents—or pressure-replace storefronts while raising land costs?
            </p>
          </aside>
        </div>

        <article className="mx-auto grid w-full max-w-content gap-[1rem] border-t border-border pt-14 text-[0.97rem] leading-[1.75] text-foreground sm:text-[0.9825rem]">
          <p>
            Clayton reads like a contradiction on purpose: immaculate street trees shading glassy leasing
            offices, commuter parking decks humming beneath yoga studios — then, suddenly, bulldozers
            swallow familiar corners (Wikipedia). That tension is precisely where this paper plants its
            question. Roughly summarized, more than seven large-scale projects nearing{" "}
            <span className="font-semibold text-foreground">$600 million in committed investment circa 2022</span>
            concentrates attention on whether density functions as philanthropy for small business — or politely
            accelerates eviction math for anyone outside luxury spending brackets (Wikipedia).
          </p>
          <p>
            Officials and residents never argue in abstractions alone. Speaking about{" "}
            <span className="font-semibold text-foreground">Bemiston Place</span>, Mayor Michelle Harris forecast{" "}
            <span className="font-semibold text-foreground">several hundred new residents amplifying sidewalks</span>{" "}
            because additional customers keep retailers breathing through winter slumps — she anchored the redevelopment
            as a major downtown corner injecting vibrancy beyond office lunch rushes (Zimmerman). Reporters canvassing
            students recorded the predictable teenage shrug toward temporary dust: nuisance now, upgraded street life
            later (Zimmerman). Those anecdotes do not disprove opposing fears; they show optimism isn&apos;t conjured out
            of thin marketing decks — it echoes lived desire for kinetic blocks.
          </p>
          <p>
            Citywide policy chatter supplies the blunt countertone. Reporter Rachel Lippmann notes both St. Louis City
            and County leaders concede they collectively “need to do better” on affordability while simultaneously
            passing infill tweaks — including compressing permissible lot footprints — endorsed by nonprofits serving immigrant,
            refugee, and domestic violence communities who understand housing as safety infrastructure (Lippmann). Listening
            to those endorsements beside luxury ribbon cuttings resembles hearing two playlists at once.
          </p>
          <p>
            Hovering cranes matter because skylines reorganize tenancy faster than sentimental memory. Completed buildings
            like{" "}
            <span className="font-semibold text-foreground">
              Bemiston Place (&apos;24, 237 units)
            </span>{" "}
            signal capacity; pending proposals swirling around{" "}
            <span className="font-semibold text-foreground">The Shaw</span>,{" "}
            <span className="font-semibold text-foreground">50 South Bemiston</span>, and{" "}
            <span className="font-semibold text-foreground">North Meramec</span> keep morphing —
            timelines slip, elevations shift, entitlement debates recycle (Stritzel; Zimmerman). Scholars studying housing
            markets remind readers that renters increasingly feel mortgage pathways blocked while construction calendars compress
            for multifamily cranes nationwide — implying supply bottlenecks and neighborhood churn speak the same logistical
            language (Gascon and Fu; Zhao).
          </p>
          <p>
            Critics flag gentrifying consumer bases that erase independent merchants, eviction waves after protections expire,
            and microscopically thin affordability wedges inside luxury towers — evidence Side 2 unpacks systematically
            (Lung-Amam; Stritzel). The point of this opener is narrower: acknowledging both arcs before choosing neither. Thesis
            statements usually crown one narrative; Dissoi Logoi deliberately ends introductions still unresolved —
            scaffolding only. Turn the page twice: mirrored cards await, weighted equally because intellectual honesty demands it.
          </p>
        </article>

        <nav
          aria-label="Section pager"
          className="flex flex-wrap items-center justify-between gap-[0.9rem] border-t border-border pt-12 md:justify-end"
        >
          <ButtonLink href="/" variant="outline" size="default">
             ← Landing
          </ButtonLink>
          <ButtonLink href="/benefits" size="lg">
             Side 1 →
          </ButtonLink>
        </nav>
      </section>
    </main>
  );
}
