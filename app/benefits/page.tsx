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
              Side 1 collates redevelopment evidence, housing economics, and policy trends in support of creating new
              luxury multifamily corridors as a &ldquo;scaffold for neighborhood stamina,&rdquo; while staying alert to
              trade-offs—without drifting into blind boosterism.
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
            Dead street economies come back to life with foot traffic. It&apos;s office-canyon dwellers who save or sink retail near
            those canyons. When Mayor Michelle Harris spoke about Bemiston&apos;s redevelopment, she envisioned several hundred new
            people on sidewalks—the kinetic difference between salons surviving the winter months versus quietly dying beside ghosted
            patios (Zimmerman). Harris used the property as strategic downtown anatomy: revitalize corners when commuters go home—don&apos;t
            give blocks to parking craters (Zimmerman). That&apos;s not charity; it is the basic theory of mixed-use—density converts
            vertical housing into horizontal retail oxygen.
          </p>
          <p>
            Teenage impatience with dust surfaced at the high school level: student Sage Bernstein explained that his annoyance with
            construction doesn&apos;t outweigh the eventual benefits of street-level improvements—an attitude many adults might
            privately voice but express more diplomatically (Zimmerman). Side 2 will compare that optimism with merchants who were
            pushed out, but Side 1 owes readers the honest emotional truth that some neighbors were pro-cranes because{" "}
            &ldquo;stagnation was worse than noise.&rdquo;
          </p>
          <p>
            Beloved bookstores don&apos;t simply appear, but proponents rely on the odds—the more residents within walking distance of
            a tower, the more coffee runs, errand-stop gifts, flexible haircut bookings, and the like. Critics require proof that every dollar
            circulates locally—fair—but proponents respond with embodied presence as much as spreadsheets (Zimmerman). Density can still
            disappoint, yet nobody cures a starving corridor without bodies.
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
            Charles Gascon and Lillian Fu explore how institutional and independent investors improve aging single-family stock—capital
            improvements that visibly shift curb impressions block by block (Gascon and Fu). The pattern isn&apos;t ethically pure:
            renovation can overlap with tenancy churn. Still, Side 1 can&apos;t deny that decrepit houses don&apos;t help small businesses trying
            to convey neighborhood safety to nighttime delivery drivers or evening dog walkers worried about neglected lots.
          </p>
          <p>
            The same research cites spillovers skirting public-good space—extended lighting footprints, extra security rotations underwriting
            perceived risk reduction (Gascon and Fu). Municipalities should ideally deliver safety democratically; where budgets fall short,
            private actors sometimes illuminate what public budgets can&apos;t. Whether that reads as philanthropy or deodorizing reputational fear
            for deli workers clocking out—your call—but the ambient unease shifts on the pavement.
          </p>
          <p>
            Luxury infill parallels are messier than glass towers, yet single-house pipelines stay leak-checked against adjacent blight that spooks lease-up
            math (Gascon and Fu). A Clayton booster bets global capital recoils from visible decay crowding marketing-suite sightlines. Side 1 therefore
            frames refurbishment as entangled: capital polishes façades upfront while redistribution fights stay painfully open—the fights Side 2 names in the immediate present.
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
            Nonprofits serving immigrants, refugees, and survivors of domestic violence back tighter lot footprints because scarce legal shelter spawns cascading
            instability braided into jobs and childcare (Lippmann). That endorsement isn&apos;t a punch-line for infinity pools perched on luxury slabs—Side 2 will
            carve those coalitions cleanly—but earnest affordability crews still breathe the same legislative air as prestige developers debating identical parcels.
          </p>
          <p>
            Gascon and Fu blend blunt renter moods: roughly one-quarter see buying a home as extraordinarily difficult while more than{" "}
            <span className="font-semibold text-foreground">seven in ten renters</span> cling to ownership dreams snagged by underwriting friction (Gascon and Fu).
            Imperfect filters—luxury units easing scramble farther down ladder rungs—still complicate fairy tales that a region-wide building freeze politely freezes rents.
            Side 2 routes skepticism down that funnel; Side 1 still insists paralysis seldom manufactures bedrooms.
          </p>
          <p>
            Readers should heed compressed multifamily clocks: Midwest metros wobble near{" "}
            <span className="font-semibold text-foreground">17-month</span> delivery averages versus national baselines creeping toward roughly twenty months—meaning
            bureaucratic drag matters as much as crane counts (Zhao). Clayton&apos;s cranes may choke traffic, yet gravel lots idle for decades ferment distrust—a pattern
            Side 2 links to mothballed predecessors. Accelerating timelines doesn&apos;t grant moral innocence, but{" "}
            <span className="font-semibold text-foreground">opportunity costs</span> punish developers and renters alike.
          </p>
          <p>
            Stitching immigrant-led endorsements with quantitative renter stress and concrete delivery calendars braces Side 1&apos;s argumentative spine—not prophecy, but reasons
            serious people might welcome calibrated density pulses while still demanding affordability guardrails Side 2 catalogues ruthlessly next.
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
