import { ArgumentClusterCard } from "@/components/ArgumentClusterCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Side 1 · Development Can Enhance Communities",
};

export default function BenefitsPage() {
  return (
    <main id="benefits" className="flex flex-1 flex-col bg-muted/10">
      <section className="border-b border-border bg-background px-6 py-[4.375rem] sm:px-10 lg:py-[5.375rem] lg:px-16 xl:px-24">
        <div className="mx-auto grid w-full max-w-wide gap-10">
          <div className="grid gap-[0.8rem]">
            <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-muted-foreground">
              Side 1 — structured optimism
            </p>
            <h1 className="text-[clamp(2.05rem,4.85vw,2.95rem)] font-bold tracking-tight text-foreground">
              Development can enhance communities.
            </h1>
            <p className="max-w-content text-[1.065rem] leading-relaxed text-muted-foreground sm:text-[1.09rem]">
              Side 1 collates redevelopment evidence, housing economics, and policy trends in support of the creation of
              new luxury multifamily corridors as a{' '}
              <span className="font-semibold text-foreground/90">&ldquo;scaffold for neighborhood stamina&rdquo;</span>
              {' '}while maintaining an awareness of—but not indulgence in—blind boosterism.
            </p>
          </div>
          <ImagePlaceholder
            src="/images/bemiston-place-exterior.webp"
            alt="Multifamily building exterior along a tree-lined Clayton street corner in warm daylight—façade, balconies, and ground-floor entries visible."
            caption="Bemiston Place exterior at ribbon-cutting or golden-hour façade detail"
            className="shadow-none lg:-mx-[4vw]"
            priority
          />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[68rem] gap-16 px-6 py-[3.925rem] sm:px-8 lg:gap-[4.875rem] lg:px-[2.25rem] lg:py-[5.375rem]">
        <ArgumentClusterCard
          tag="Cluster A"
          title="Walking revitalizes dead street economies"
          image={
            <ImagePlaceholder
              src="/images/clayton-sidewalk-cafes.webp"
              alt="Sidewalk-facing storefronts and outdoor seating along a downtown corridor with pedestrians, trees, and office towers behind."
              caption="Clayton sidewalk cafés near office towers — afternoon pedestrians"
            />
          }
        >
          <p>
            Dead street economies come back to life with foot traffic. It&apos;s the office canyon dwellers who save or
            sink retail near office canyons. When Mayor Michelle Harris spoke about Bemiston&apos;s redevelopment, she
            envisioned{' '}
            <span className="font-semibold text-foreground">several hundred new people on the sidewalks</span>
            —the kinetic difference between salons surviving the winter months and quietly dying beside ghosted patios
            (Zimmerman). Harris used the property as strategic downtown anatomy: revitalize corners when commuters go home;
            don&apos;t give blocks to parking craters (Zimmerman). That&apos;s not charity; it&apos;s just the basic theory of
            mixed-use—density changes vertical housing into horizontal retail oxygen.
          </p>
          <p>
            Teenage impatience with dust was discussed at the high school level: student Sage Bernstein explained that his
            annoyance with construction doesn&apos;t outweigh the eventual benefits of street-level improvements — an attitude
            that many adults might privately voice but express more diplomatically (Zimmerman). Side 2 will compare that
            optimism with merchants who were pushed out, but Side 1 owes readers the honest emotional truth that some
            neighbors were pro-cranes because &ldquo;stagnation was worse than noise.&rdquo;
          </p>
          <p>
            Beloved bookstores don&apos;t simply appear, of course, but proponents rely on the odds: the more people who live
            within walking distance of a tower, the more the likelihood of coffee runs, errands for gifts, flexible haircut
            appointments and the like. Critics require proof of every dollar that circulates locally — fair — but proponents
            respond by embodying the presence, not necessarily just the spreadsheets (Zimmerman). Densities can prove to be
            unreliable, but no one gets hungry for lack of bodies.
          </p>
        </ArgumentClusterCard>

        <ArgumentClusterCard
          tag="Cluster B"
          title="Renovating the aging neighborhood fabric is possible through investment"
          eyebrow="Material stewardship"
          image={
            <ImagePlaceholder
              src="/images/rehabilitated-residential-facades.jpg"
              alt="Street-level view of renovated residential façades alongside newer multifamily corners—porches, siding, and mature trees."
              caption="Rehabilitated Clayton residential façades beside newer multifamily corners"
            />
          }
        >
          <p>
            Charles Gascon and Lillian Fu explore the process of institutional and independent investors improving aging single-family lots
            by investing in capital improvements that can clearly alter curb appeal at the block level (Gascon and Fu). That pattern isn&apos;t
            ethically simple: renovation can overlap with the churn of tenants. Nevertheless, Side 1 can&apos;t deny that decrepit houses do
            not assist small businesses trying to convey a picture of neighborhood safety to nightly delivery drivers or evening dog walkers
            who are afraid of poorly-kept lots.
          </p>
          <p>
            In the same research, spillovers adjacent to public-good space — lighting footprints, additional security rotations underwriting
            perceived risk mitigation (Gascon and Fu) — are mentioned. Ideally, municipalities provide safety democratically; when they don&apos;t,
            private actors can fill empty spaces that remain alight. As for whether it&apos;s philanthropy or a way of defusing ambient fear for
            deli workers before they close the registers at night, that&apos;s up to you.
          </p>
          <p>
            While luxury infill parallels aren&apos;t quite as tidy as glass towers, single-house flip logic still gets underwritten—and still
            leak-checked for adjacent blight (Gascon and Fu). A Clayton booster bets against visible decay around marketing-suite walls.
            Side 1 thus constructs refurbishment stories as entangled: capital repairs visible faces while questions of redistribution linger
            painfully on the horizon — questions Side 2 makes explicit in the immediate present.
          </p>
        </ArgumentClusterCard>

        <ArgumentClusterCard
          tag="Cluster C"
          title="Housing pressures demand completion of supply"
          image={
            <ImagePlaceholder
              src="/images/multifamily-steel-decking-dusk.webp"
              alt="Construction site at dusk: steel floor decking, rebar, and a crane silhouette against a dimming sky."
              caption="Clayton-area multifamily steel decking / crane silhouette against dusk sky"
            />
          }
        >
          <p>
            Nonprofits that provide services to immigrants, refugees, and domestic violence survivors support tighter lot footprints, as limited legal shelter
            creates cascading instability that is inextricably linked to work and childcare availability (Lippmann). It&apos;s not quite cheering saltwater infinity
            pools atop luxury slabs — morally distinct turf Side 2 will map — yet sometimes the same parcels get debated both by affordability coalitions and by prestige
            developers.
          </p>
          <p>
            Gascon and Fu combine raw renter sentiments: about one-quarter see purchasing a home as extremely difficult while more than seven in ten renters have
            homeownership ambitions{' '}
            <span className="font-semibold text-foreground">stuck behind underwriting friction</span> (Gascon and Fu). Luxury filters easing pressure lower on the ladder
            are imperfect—but freezing construction outright rarely freezes rents kindly regionwide either. Side 2 will funnel skepticism heavily; Side 1 insists that
            stasis rarely delivers bedrooms either.
          </p>
          <p>
            Take note of compressed multifamily timelines, though: Midwest metros hover near roughly{' '}
            <span className="font-semibold text-foreground">17 months</span> while modestly longer national averages approach roughly twenty months — implying slowness
            of process matters as much as cranes (Zhao). Clayton&apos;s cranes may cause traffic woes, while inactivity on gravel lots can fester mistrust across decades
            (Side 2 reminds readers of predecessors that sat scraped and shelved). Faster delivery doesn&apos;t mean moral absolution—but timelines discipline{' '}
            <span className="font-semibold text-foreground">opportunity costs</span> shared by developers and renters.
          </p>
          <p>
            When stitched together with immigrant-led endorsements beside quantitative renter stress plus delivery calendars, that scaffolding forms Side 1&apos;s
            argumentative spine — not prophecy, but reasons serious people should welcome measured density pulses while demanding the aggressive affordability overlays
            Side 2 catalogues ruthlessly next.
          </p>
        </ArgumentClusterCard>

        <footer className="flex flex-wrap items-center justify-between gap-[0.9rem] border-t border-border pb-16 pt-12 text-sm tracking-tight">
          <p className="max-w-[30rem] text-muted-foreground">
            Structured optimism admits homework: carve-outs protecting legacy merchants, tenancy safeguards, affordability ratios — Side 2 claims the prosecutorial podium now.
          </p>
          <nav className="flex flex-wrap gap-3" aria-label="Side 1 pager">
            <ButtonLink variant="outline" href="/introduction">
               ← Introduction
            </ButtonLink>
            <ButtonLink href="/concerns" size="lg">
               Side 2 →
            </ButtonLink>
          </nav>
        </footer>
      </section>
    </main>
  );
}
