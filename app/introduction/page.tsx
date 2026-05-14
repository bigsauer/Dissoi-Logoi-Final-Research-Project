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
            Clayton is purposefully a paradox: clean streets, clear windows, and siloed parking lots beneath yoga
            studios, and then some bulldozing (Wikipedia). It&apos;s that tension that&apos;s where this paper sets its
            question. In brief, about seven big schemes, with over $600m invested, around 2022, focus on whether density
            can be a kind of philanthropy to small business or — let&apos;s be polite — a handy speeding-up of the
            eviction math for anybody not in the luxury spending brackets (Wikipedia).
          </p>
          <p>
            None of the officials or the residents ever argue in abstractions only. On Bemiston Place, Mayor Michelle
            Harris predicted several hundred new residents will be breathing on the sidewalks as more people continue to
            come to the downtown corner retailers during winter doldrums (Zimmerman). Temporary dust — upgraded street life
            later (Zimmerman); the student apathy reporters heard repeatedly in the face of this flurry of dust. But those
            anecdotes do not refute opposing fears, they demonstrate that optimism is not magic out of thin marketing decks
            — it&apos;s a reflection of desire lived.
          </p>
          <p>
            The blunt countertone is provided by chatter from city-wide policy. St. Louis City and County officials both
            admit they &ldquo;should do better&rdquo; on affordability, while at the same time enacting
            &ldquo;infill&rdquo; tweaks, such as reducing lot footprints allowed under development, that nonprofits
            representing domestic violence, immigrant, and refugee communities recognize as components of housing as safety
            infrastructure (Lippmann). It&apos;s like listening to two playlists at once, when you hear those endorsements
            next to the luxury ribbon cuts.
          </p>
          <p>
            Hovering cranes are important as they reshape tenancy quicker than sentiment. Completed buildings, such as
            Bemiston Place (&apos;24, 237 units) indicate capacity; pending proposals continue to morph as timelines
            shuffle, elevations shuffle, and entitlement discussions shuffle (Stritzel; Zimmerman). As renters grow more
            frustrated with the restricted options for homeownership, and construction schedules tighten for multifamily
            cranes across the country, scholars of the housing market remind readers that the supply constraints are
            identical: supply bottlenecks and neighborhood churn are doing the same thing (Gascon and Fu; Zhao).
          </p>
          <p>
            Gentrifying customer bases that wipe out independent businesses, waves of evictions when protections lapse,
            and affordability wedges so thinly spread within luxury towers are all evidence that Side 2 systematically
            unpacks (Lung-Amam; Stritzel). This is an opener that is narrower: the recognition of both arches just prior
            to making no selection. Usually, thesis statements cap one narrative; Dissoi Logoi is a deliberate ending to
            introductions that aren&apos;t concluded. Turn over two cards, a mirrored two cards, weighted equally —
            intellectual integrity requires it.
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
