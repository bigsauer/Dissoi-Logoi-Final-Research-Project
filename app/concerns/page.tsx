import { ArgumentClusterCard } from "@/components/ArgumentClusterCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Side 2 · Neighborhood Harm & Displacement",
};

export default function ConcernsPage() {
  return (
    <main id="concerns" className="flex flex-1 flex-col bg-muted/10">
      <section className="border-b border-border bg-background px-6 py-[4.375rem] sm:px-10 lg:py-[5.375rem] lg:px-16 xl:px-24">
        <div className="mx-auto grid w-full max-w-wide gap-10">
          <div className="grid gap-[0.8rem]">
            <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-muted-foreground">
              Side 2 — structured skepticism
            </p>
            <h1 className="text-[clamp(2.05rem,4.85vw,2.95rem)] font-bold tracking-tight text-foreground">
              Neighborhoods can be strained by luxury redevelopment
            </h1>
            <p className="max-w-content text-[1.065rem] leading-relaxed text-muted-foreground sm:text-[1.09rem]">
              Side 2 mirrors Side 1 line-for-line aesthetically while prosecuting contradictory evidence clusters: storefront displacement,
              affordability ratios, marketing signals of exclusivity, and historically messy delivery timelines that erode public trust.
            </p>
          </div>
          <ImagePlaceholder
            src="/images/clayton-skyline-construction.jpg"
            alt="Urban street corner with glass office towers, a Commerce Bank branch, and a red construction crane against a blue sky."
            caption="Clayton skyline construction — crane clusters along office corridor"
            className="shadow-none lg:-mx-[4vw]"
            priority
          />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[68rem] gap-16 px-6 py-[3.925rem] sm:px-8 lg:gap-[4.875rem] lg:px-[2.25rem] lg:py-[5.375rem]">
        <ArgumentClusterCard
          tag="Cluster A"
          title="Small businesses face gentrification pressure before steel arrives"
          image={
            <ImagePlaceholder
              src="/images/storefront-renovation-fencing.jpg"
              alt="Ground-level façade behind temporary construction fencing at a redevelopment site — windows covered and street-level work underway."
              caption="Former independent storefront façade under renovation fencing / papered windows"
            />
          }
        >
          <p>
            Willow Lung-Amam documents how gentrifying demographics often starve longstanding Black and Latino small businesses silently —{" "}
            <span className="font-semibold text-foreground">displacement unfolds through customer-base turnover</span> long before bulldozers
            scrape lots (Lung-Amam). Affluent incomers statistically favor recognizable chain convenience; neighborhood institutions surviving on
            patient loyalty hemorrhage clientele when newcomer spending patterns bifurcate (Lung-Amam). Clayton&apos;s luxury wave cannot pretend
            immune: pricing pressure radiates sideways into espresso bars and hardware shops decades deep on first-name basis economics.
          </p>
          <p>
            COVID compounded fragility Lung-Amam already diagnosed pre-lockdown; removing eviction moratorium guardrails reopened pathways for ruthless
            rent hikes and legal displacement cycles targeting operators one slow quarter from insolvency — what Lung-Amam characterizes as a potentially{" "}
            <span className="italic">&quot;harsher wave&quot;</span> shredding remaining buffers (Lung-Amam). Even projects branded as uplifting street life can
            destabilize commercial tenants juggling triple-net leases escalating faster than latte markup tolerates — outcomes Side 1 optimists must grapple
            with rather than laundering via rendering gloss.
          </p>
          <p>
            The sociological indictment is sharper than caricature Yelp reviews: gentrification rewrites tacit reciprocities — barbers stocking emergency diapers,
            pharmacies floating neighbors credit — replaced by sanitized convenience packaged for mobile professionals expecting apps, not acquaintances (Lung-Amam).
            Side 2 therefore argues displacement is social infrastructure erosion, not merely aesthetic melancholy mourned on Instagram nostalgia accounts.
          </p>
        </ArgumentClusterCard>

        <ArgumentClusterCard
          tag="Cluster B"
          title="Affordability wedges stay razor-thin beside amenity arsenals"
          eyebrow="Equity optics"
          image={
            <ImagePlaceholder caption="Placeholder for photo: High-rise amenity deck / fitness lounge evocative of Vanguard-era marketing palettes" />
          }
        >
          <p>
            Chris Stritzel&apos;s granular reporting atop The Shaw proposal illustrates asymmetric housing math bluntly —{" "}
            <span className="font-semibold text-foreground">six affordable-priced units juxtaposed beside 258 total residences</span> — roughly{" "}
            <span className="font-semibold text-foreground">two percent carve-out against ninety-eight percent market-rate luxury dominance</span> (Stritzel). Even
            if legal definitions nuances affordable thresholds, symbolism crushes earnest messaging — neighbors reading ratios experience moral whiplash when ribbon
            speeches promise inclusive futures yet leasing brochures whisper exclusivity thresholds.
          </p>
          <p>
            Charles Gascon and Lillian Fu complicate triumphant redevelopment narratives statistically: institutional investor footprints often{" "}
            <span className="font-semibold text-foreground">worsen affordability horizons</span>, especially harming lower-priced home segments reliant on slender
            margin stability (Gascon and Fu). Side 1 cited investor-driven rehabilitation upsides honestly; Side 2 spotlights converse ledger lines — appreciating
            entry homes may benefit balance sheets upstairs while starving first-time buyers downstairs — tension luxury towers intensify geographically by anchoring adjacent
            land valuations upward.
          </p>
          <p>
            Alex Ihnen&apos;s Vanguard-era dossier underscores marketing vocabularies — electric car chargers, saltwater lounging pools, wine storage lockers, sculpted dog runs —{" "}
            collectively signaling renters sorted by discretionary income ladders long before affordability debates convened publicly (Ihnen). None of those amenities morally
            criminalize comfort; morally, they annotate who politicians implicitly invite versus gently nudge away through rent math alone — Side 2&apos;s equity optic demands
            reading amenity arsenals politically, not voyeuristically.
          </p>
        </ArgumentClusterCard>

        <ArgumentClusterCard
          tag="Cluster C"
          title="Timelines stagger, narratives collapse, skepticism fossilizes"
          image={<ImagePlaceholder caption="Placeholder for photo: Clayton vacant redevelopment lot / mothballed site awaiting vertical construction" />}
        >
          <p>
            Ihnen narrates Vanguard&apos;s prior Brown Shoe tract idling economically — shelved amidst 2008&apos;s cascading slump until resurrection years later rebranded fortunes
            (Ihnen). Community memory rarely deletes multi-year potholes politely; cranes eventually arrive stained by suspicion that capital treats neighborhoods as impatient
            option blocks — pausable when margins sour, ruthless when tides reverse. Clayton residents aren&apos;t wrong tracking emotional half-lives of abandoned promises etched
            into gravel lots children cut across nightly.
          </p>
          <p>
            Stritzel underscores The Shaw lineage&apos;s administrative whiplash —{" "}
            <span className="font-semibold text-foreground">three distinct developers iterating conflicting masterplans</span> — eroding procedural trust precisely when transparency
            matters most for neighbors betting domestic stability against dust (Stritzel). Even fractional height trims — shifting from roughly{" "}
            <span className="font-semibold text-foreground">246 feet to 244 feet</span> after public comment avalanches — symbolize optics skirmishes overshadowing substantive
            affordability negotiations (Stritzel). Side 2 reads those micro-adjustments politically: concessions measured in single feet insult residents demanding housing justice
            measured in hundreds of attainable units absent.
          </p>
          <p>
            Ihnen also notes outright political resistance — citing a Central West End high-rise denied tax abatements after community pressure — proof not every prestige bid
            receives automatic red carpets (Ihnen). Rejection stories matter because they reveal residents sometimes successfully resist capital capture — yet sporadic victories
            rarely solve structural trajectories dragging lots toward luxury tallness once capital regroups with refined political strategies.
          </p>
          <p>
            Synthesizing Lung-Amam&apos;s sociological storefront warnings, Stritzel&apos;s numerical skew, Gascon and Fu&apos;s affordability regressions, plus Ihnen&apos;s timeline theatre,
            Side 2 lands where honest skeptics often stand — unconvinced trickle-down foot traffic alone redeems lost merchants, unconvinced two percent affordability ratios
            deserve standing ovations, unconvinced municipal patience should extend infinitely while gravel lots mock planning maps. Yet Side 2 stops short of declaring automatic
            moral defeat — Dissoi Logoi obligations demand returning readers to Side 1&apos;s pedestrian optimism before allowing Conclusion to braid uncertainty explicitly.
          </p>
        </ArgumentClusterCard>

        <footer className="flex flex-wrap items-center justify-between gap-[0.9rem] border-t border-border pb-16 pt-12 text-sm tracking-tight">
          <p className="max-w-[30rem] text-muted-foreground">
            Side 2 refuses lazy cynicism too — evidence of harm should not erase evidence of need; Conclusion tightens the knot without cutting it.
          </p>
          <nav className="flex flex-wrap gap-3" aria-label="Side 2 pager">
            <ButtonLink variant="outline" href="/benefits">
               ← Side 1
            </ButtonLink>
            <ButtonLink href="/conclusion" size="lg">
               Conclusion →
            </ButtonLink>
          </nav>
        </footer>
      </section>
    </main>
  );
}
