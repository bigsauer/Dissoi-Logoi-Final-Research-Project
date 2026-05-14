import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conclusion",
};

export default function ConclusionPage() {
  return (
    <main id="conclusion" className="flex flex-1 flex-col">
      <section className="border-b border-border bg-muted/20 px-6 py-[4.25rem] sm:px-10 lg:py-[5rem] lg:px-16 xl:px-24">
        <div className="mx-auto grid w-full max-w-wide gap-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-muted-foreground">
            Neither verdict · both ledgers kept open
          </p>
          <h1 className="text-[clamp(2rem,4.85vw,2.9rem)] font-bold tracking-tight text-foreground">
            Density decisions stay unfinished business
          </h1>
          <p className="max-w-content text-[1.05rem] leading-relaxed text-muted-foreground">
            Closing a Dissoi Logoi cleanly would betray the genre — so this section braids parallels only, asking what responsible neighbors do with genuinely matched evidence.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-content gap-12 px-6 py-[4rem] sm:px-10 lg:px-[0.25rem] lg:pb-[5.375rem]">
        <ImagePlaceholder
          src="/images/clayton-evening-skyline.jpg"
          alt="Evening view over Clayton rooftops and office towers with construction cranes visible along the street grid."
          caption="Evening Clayton skyline panorama — cranes and street grid visible"
          priority
        />

        <blockquote className="border-l-[3px] border-foreground py-2 pl-6 text-[1.035rem] font-semibold leading-snug tracking-tight text-foreground">
          &ldquo;Modern Clayton isn&apos;t a battle between cities—it&apos;s a battle between developers, longtime residents and small businesses about
          what Clayton will be&rdquo; (Ihnen).
        </blockquote>

        <article className="grid gap-[1.0625rem] text-[0.975rem] leading-[1.78] text-foreground sm:text-[0.9825rem]">
          <p>
            Taken together, the evidence on these pages warrants pause more than applause. Side 1 knits credible hopes: sidewalks that stay busy once offices empty (Zimmerman), capital patching tired housing stock even when motivations are profit-shaped (Gascon and Fu),
            earnest coalitions asking planning codes to widen infill pipelines (Lippmann), plus proof apartments can climb faster today than rusty stereotypes assume (Zhao). None of that erases hardship; it only explains why serious people gamble on cranes instead of paralysis.
          </p>
          <p>
            Side 2 answers with storefront sociology, not caricature NIMBYism alone. Lung-Amam shows displacement arriving through customer rotations and brittle leases long before bulldozers rebrand skylines—and warns eviction seasons can deepen the squeeze once protections thin (Lung-Amam). Stritzel compresses symbolism into blunt fractions: affordability promises can show up microscopic beside luxury stacks (Stritzel). Investor channels can widen affordability cracks on entry homes precisely when owners need ladders most (Gascon and Fu).
          </p>
          <p>
            Institutional memory aggravates mistrust when lots sit scraped for years—a pattern Ihnen ties to slump-era freezes and revived marketing later (Ihnen). Stritzel documents how marquee proposals wobble across developer handoffs while tower heights jitter by feet after hearings—signals that spectacle outruns settled social contracts even when compromises exist (Stritzel). Occasionally communities rebuff sweetheart deals—as with a CWE high-rise stripped of hoped-for abatement—proving pushback punctures prestige narratives sometimes, if unevenly (Ihnen).
          </p>
          <p>
            Officials admit bluntly—regionally—“we need to do better” on affordability while rewriting lot rules downward to coax more dwellings from tight grids (Lippmann). Listening to confession alongside cranes clarifies overlapping truths: scarcity is real; luxury branding is real; policy can widen doors or merely decorate them. Whether the boom helps or hurts depends less on mood than on guardrails: real affordability math, tenant stability, merchant lease predictability, and transparency when plans morph (Stritzel; Lippmann).
          </p>
          <p>
            This paper stops where the assignment demands—without crowning a winner. Construction will keep arguing in steel and glass while residents, shop owners, and planners argue in meetings and mailers. The argument here is that both briefs deserve the same lighting, the same typography, the same patient reading—because Clayton&apos;s next chapter is still being negotiated one hearing, one loan, one lease at a time (Zimmerman; Lung-Amam).
          </p>
        </article>

        <nav className="flex flex-wrap gap-4 border-t border-border pt-14" aria-label="Conclusion pager">
          <ButtonLink variant="outline" href="/concerns">
             ← Side 2
          </ButtonLink>
          <ButtonLink href="/works-cited">Works Cited →</ButtonLink>
        </nav>
      </section>
    </main>
  );
}
