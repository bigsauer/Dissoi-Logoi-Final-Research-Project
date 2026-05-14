import { ArgumentClusterCard } from "@/components/ArgumentClusterCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Side 1 · Development Benefits Neighborhoods",
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
              Development can strengthen neighborhoods
            </h1>
            <p className="max-w-content text-[1.065rem] leading-relaxed text-muted-foreground sm:text-[1.09rem]">
              Side 1 pieces together redevelopment testimony, housing economics, and policy signals arguing that
              new luxury multifamily corridors can scaffold neighborhood stamina — acknowledging trade-offs without
              performing blind boosterism.
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
          title="Foot traffic revives dormant street economies"
          image={
            <ImagePlaceholder
              src="/images/clayton-sidewalk-cafes.webp"
              alt="Sidewalk-facing storefronts and outdoor seating along a downtown corridor with pedestrians, trees, and office towers behind."
              caption="Clayton sidewalk cafés near office towers — afternoon pedestrians"
            />
          }
        >
          <p>
            Retail near office canyons lives or dies by spillover diners. Discussing Clayton&apos;s Bemiston redevelopment,
            Mayor Michelle Harris envisioned{" "}
            <span className="font-semibold text-foreground">several hundred new residents multiplying feet on sidewalks</span>{" "}
            — the kinetic difference between salons surviving winter lulls versus quietly expiring beside ghosted patios
            (Zimmerman). Harris treated the parcel as strategic downtown anatomy: revitalizing corners that should bustle
            after commuters vanish, not surrendering blocks to parking craters (Zimmerman). That vision is not charity; it
            is standard mixed-use theory — density converts vertical housing into horizontal retail oxygen.
          </p>
          <p>
            High school reporting captured teenage impatience with dust: student Sage Bernstein argued construction annoyance
            cannot outweigh eventual street-level upgrades — a blunt generational shrug many adults share privately but phrase
            more diplomatically (Zimmerman). Side 2 will contrast that optimism with merchants priced out; Side 1 still owes
            readers the honest emotional fact that some neighbors welcome cranes because stagnation felt worse than noise.
          </p>
          <p>
            Luxury towers do not automatically mint beloved bookstores, yet proponents bank on probability: more residents within
            walking distance multiplies weekday coffee runs, last-minute gift purchases, haircut appointments tethered to flexible
            high-rise schedules. Critics demand proof each dollar circulates locally — fair — but proponents answer with embodied
            presence rather than spreadsheets alone (Zimmerman). Density might fail; scarcity of bodies definitely starves corridors.
          </p>
        </ArgumentClusterCard>

        <ArgumentClusterCard
          tag="Cluster B"
          title="Investment can renovate aging neighborhood fabric"
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
            Charles Gascon and Lillian Fu document how institutional and independent investors renovate deteriorating single-family
            channels — injecting capital upgrades that visibly change block-level curb impressions (Gascon and Fu). That pattern
            is not ethically pure: renovation can coincide with tenancy churn. Still, Side 1 must admit dilapidated homes rarely
            help small businesses projecting neighborhood safety to nightly delivery drivers or evening dog walkers fearful of poorly
            tended lots.
          </p>
          <p>
            The same research notes spillovers bordering public-good territory — enhanced lighting footprints, supplementary security rotations
            underwriting perceived risk mitigation (Gascon and Fu). Municipalities ideally deliver safety democratically; in funding gaps,
            private actors sometimes fill luminous voids. Whether that counts as philanthropy or reputational deodorant depends on vantage —
            proponents argue outcomes still reduce ambient fear for deli workers closing registers after dark.
          </p>
          <p>
            Luxury infill parallels are imperfect — glass towers exceed single-house flip logic — yet underwriting departments still scrutinize adjacent
            blight risking lease-up velocity (Gascon and Fu). Clayton boosters wager global capital distrusts visible decay bordering marketing suites.
            Side 1 therefore frames refurbishment narratives as intertwined: capital repairs visible edges even when redistribution questions remain painfully
            open — questions Side 2 foregrounds bluntly shortly.
          </p>
        </ArgumentClusterCard>

        <ArgumentClusterCard
          tag="Cluster C"
          title="Housing pressures require supply that actually completes"
          image={
            <ImagePlaceholder
              src="/images/multifamily-steel-decking-dusk.webp"
              alt="Construction site at dusk: steel floor decking, rebar, and a crane silhouette against a dimming sky."
              caption="Clayton-area multifamily steel decking / crane silhouette against dusk sky"
            />
          }
        >
          <p>
            Rachel Lippmann reports nonprofits serving immigrants, refugees, and survivors of domestic violence endorsing tighter lot footprints because
            legal shelter scarcity reproduces cascading instability inseparable from work and childcare access (Lippmann). Supporting infill tweaks is not
            identical to cheering saltwater infinity pools atop luxury slabs — morally distinct categories Side 2 will separate — yet coalition overlaps
            highlight how earnest affordability advocates occasionally share legislative oxygen with prestige developers debating the same parcels.
          </p>
          <p>
            Gascon and Fu synthesize stark renter moods: roughly a quarter perceive mortgage attainment as extraordinarily unlikely while well over{" "}
            <span className="font-semibold text-foreground">seven in ten renters maintain homeownership aspirations</span> trapped by underwriting friction
            (Gascon and Fu). Even imperfect filtering mechanisms — luxury units alleviating scramble lower down market rungs — complicate fantasies that freezing
            construction compassionately freezes rents regionwide. Side 2 will counter that funneling skepticism merits weight; Side 1 still insists paralysis
            rarely constructs bedrooms.
          </p>
          <p>
            Na Zhao underscores compressed multifamily timelines — Midwest metros hovering near roughly{" "}
            <span className="font-semibold text-foreground">17-month</span> delivery averages versus modestly longer national baselines nearing twenty months —
            implying bureaucratic lethargy, not cranes alone, dictates how swiftly keys appear (Zhao). Clayton&apos;s cranes may frustrate commuters, yet stagnating
            gravel lots incubate cynical distrust spanning decades (a motif Side 2 revisits referencing shelved predecessors). Faster completion does not equal moral
            absolution — but timelines discipline opportunity costs developers and renters jointly shoulder.
          </p>
          <p>
            Stitching immigrant-led endorsements beside quantitative renter stress plus delivery calendars yields Side 1&apos;s argumentative spine — not utopian prophecy,
            but grounded reasons serious people might welcome controlled density pulses even while demanding aggressive affordability overlays Side 2 catalogues ruthlessly next.
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
