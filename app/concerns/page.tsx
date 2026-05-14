import { ArgumentClusterCard } from "@/components/ArgumentClusterCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Side 2 · Luxury Redevelopment May Strain Neighborhoods",
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
              There is potential for luxury redevelopment to strain neighborhoods.
            </h1>
            <p className="max-w-content text-[1.065rem] leading-relaxed text-muted-foreground sm:text-[1.09rem]">
              Side 2 matches Side 1 aesthetically, but the evidence clusters are prosecuted the other way: storefront displacement, affordability ratios, marketing
              signals of exclusivity, and historically messy delivery timelines that damage public trust.
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
          title="Steel is yet another sign of gentrification pressure for small businesses"
          image={
            <ImagePlaceholder
              src="/images/storefront-renovation-fencing.jpg"
              alt="Ground-level façade behind temporary construction fencing at a redevelopment site — windows covered and street-level work underway."
              caption="Former independent storefront façade under renovation fencing / papered windows"
            />
          }
        >
          <p>
            Willow Lung-Amam details how long-established Black and Latino small businesses get displaced without waiting for bulldozers—through customer
            attrition. Affluent newcomers statistically favor familiar chain convenience; institutions that lived on patient loyalty lose share when spending
            patterns split in two (Lung-Amam). Clayton should listen: pricing pressure ripples outward into espresso bars and hardware stores that have anchored
            first-floor corners for decades on first-name economics.
          </p>
          <p>
            Lifting eviction-moratorium shields reopened ruthless rent hikes and legal displacement cycles just as Lung-Amam warned a possible{" "}
            <span className="italic">&ldquo;harsher wave&rdquo;</span> of upheaval could shred what buffers remained after pandemic-driven strain (Lung-Amam). Even
            street-life projects branded as uplift can destabilize triple-net tenants when lease escalations outrun what latte markup can absorb—consequences Side 1
            rosy narratives must answer instead of rinsing away in render gloss.
          </p>
          <p>
            The sociological indictment cuts deeper than Yelp caricature: barbers stocking emergency diapers, pharmacies floating neighbors credit—tacit reciprocities
            gentrification replaces with sanitized convenience aimed at mobile professionals who expect apps, not acquaintances (Lung-Amam). Side 2 argues displacement
            shreds social infrastructure, not merely aesthetic melancholy on an Instagram nostalgia feed.
          </p>
        </ArgumentClusterCard>

        <ArgumentClusterCard
          tag="Cluster B"
          title="Wedges of affordability remain alarmingly thin, adjacent to the arsenal of amenities"
          eyebrow="Equity optics"
          image={
            <ImagePlaceholder
              src="/images/high-rise-amenity-lounge.jpg"
              alt="Architectural marketing illustration: glass high-rises around a brick-patterned plaza with reflecting pools, a stylized shoe sculpture, benches, and dusk sky colors—typical upscale redevelopment promotional art."
              caption="High-rise amenity deck / fitness lounge evocative of Vanguard-era marketing palettes"
            />
          }
        >
          <p>
            Chris Stritzel&apos;s reporting on The Shaw proposal foregrounds lopsided housing math:{" "}
            <span className="font-semibold text-foreground">six affordable units against 258 total residences</span>—roughly{" "}
            <span className="font-semibold text-foreground">two percent set-aside versus ninety-eight percent luxury market rate</span> (Stritzel). Legal
            affordability definitions may nuance the math, but symbolism overpowers earnest talking points: neighbors reading ratios hear inclusive futures in ribbon
            speeches yet read exclusivity in leasing brochures.
          </p>
          <p>
            Charles Gascon and Lillian Fu statistically challenge booster tales: institutional investors can{" "}
            <span className="font-semibold text-foreground">narrow affordability horizons</span>, especially for lower-priced homes living on thin margins (Gascon and Fu).
            Side 1 honestly cited investor-driven rehabilitation wins; Side 2 trains on the opposite ledger—appreciating entry homes can flatter upstairs balance sheets
            while adjacent land costs suffocate first-time buyers still hunting ladders into ownership.
          </p>
          <p>
            Alex Ihnen&apos;s Vanguard-era file brims with marketing vocabulary—electric car chargers, saltwater lounging pools, wine storage lockers, sculpted dog runs—
            luring discretionary-income renters long before affordability debates went fully public (Ihnen). Those amenities don&apos;t morally criminalize comfort; they
            telegraph who gets invited and who gets nudged out through rent math. Side 2&apos;s equity optic insists on reading amenity arsenals politically—not voyeuristically.
          </p>
        </ArgumentClusterCard>

        <ArgumentClusterCard
          tag="Cluster C"
          title="Timelines overlap, stories turn to dust, doubt goes extinct"
          image={
            <ImagePlaceholder
              src="/images/vacant-redevelopment-lot.jpg"
              alt="Large cleared urban lot with gravel and fencing—vacant land awaiting vertical construction beside existing buildings."
              caption="Clayton vacant redevelopment lot / mothballed site awaiting vertical construction"
            />
          }
        >
          <p>
            Ihnen narrates how Vanguard&apos;s Brown Shoe tract idled for years—2008&apos;s slump shelved it until a later resurrection reframed the story (Ihnen). Community
            memory doesn&apos;t politely erase multi-year potholes; when cranes finally arrive, they carry grudges about capital treating neighborhoods as impatient option
            blocks—pausable when margins sour, bulldozing forward when tides turn. Gravel lots scored with abandoned promises map the emotional half-lives Clayton residents
            carry while kids still cut across them nightly.
          </p>
          <p>
            Stritzel documents The Shaw lineage&apos;s administrative &ldquo;whiplash&rdquo;—{" "}
            <span className="font-semibold text-foreground">three developers spinning conflicting masterplans</span>—destabilizing trust exactly when neighbors need
            transparency to bet domestic stability against dust (Stritzel). Public-comment avalanches shrink tower heights from roughly{" "}
            <span className="font-semibold text-foreground">246 feet to 244 feet</span>, optics skirmishes eating airtime that should belong to affordability substance
            (Stritzel). Side 2 hears those micro-tweaks politically: concessions counted in single feet while residents demand justice measured in hundreds of attainable
            units that never appear.
          </p>
          <p>
            Political pushback still surfaces: Ihnen cites a Central West End high-rise stripped of hoped-for tax abatements after community pressure—proof prestige bids
            don&apos;t always receive automatic red carpets (Ihnen). Rejection stories matter because they show residents can sometimes slip capital&apos;s grip, at least briefly;
            sporadic wins rarely reverse the structural drag toward luxury tallness once money regroups with sharper political playbooks.
          </p>
          <p>
            Add Lung-Amam&apos;s storefront sociology, Stritzel&apos;s numerical skew, Gascon and Fu&apos;s affordability regressions, and Ihnen&apos;s timeline theatre, and Side 2
            settles where blunt skeptics often stand—unconvinced foot traffic alone resurrects lost merchants, unconvinced two-percent carve-outs deserve standing ovations,
            unconvinced municipal patience should run forever while scraped lots mock planning maps. Still, Side 2 refuses automatic moral defeat: Dissoi Logoi duties mean
            returning readers to Side 1&apos;s pedestrian optimism before Conclusion can braid uncertainty in plain sight.
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
