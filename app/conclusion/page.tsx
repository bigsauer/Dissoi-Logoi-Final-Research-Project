import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conclusion · Neither Verdict",
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
            The status of density decisions continues to be unachieved.
          </h1>
          <p className="max-w-content text-[1.05rem] leading-relaxed text-muted-foreground">
            Closing a Dissoi Logoi cleanly would disrespect the genre — so this section offers parallels only and asks what responsible neighbors owe when evidence
            genuinely matches across both sides.
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
            These pages of evidence combined would justify applause more than pause. Side 1 offers credible hopes: busy sidewalks when offices are closing (Zimmerman);
            profit-motivated coalitions whose incentives still tie to patching worn-down infrastructure (Gascon and Fu); reliance on planning officials to widen infill pipelines
            (Lippmann); and the added reality that apartments can move faster now than deluded stereotypes suggest (Zhao). It doesn&apos;t diminish suffering; it merely states the
            rationale behind serious people wagering on cranes rather than paralysis.
          </p>
          <p>
            Do not answer Side 2 with caricatures of NIMBYism alone. Lung-Amam shows displacement arriving before bulldozers refurbish skylines — and warns lease seasons
            can widen the squeeze as protections fade (Lung-Amam). Stritzel compresses symbolism into crude fractions: miniature affordability carve-outs beside luxury stacks
            read microscopic (Stritzel). Investor channels can gouge affordability on entry-level homes precisely when ladders matter most (Gascon and Fu).
          </p>
          <p>
            Institutional memory curdles mistrust whenever lots scrape bare for years, then resurrect under fresh marketing pitches (Ihnen). Stritzel tracks how marquee
            proposals shimmer from developer to developer while tower heights jitter by feet after hearings — spectacle oscillating past any settled social contract even when
            compromise language exists (Stritzel). Pushback still lands sometimes: a Central West End high-rise lost its hoped-for tax abatement after community heat — proof
            sweetheart deals don&apos;t always stick, however unevenly (Ihnen).
          </p>
          <p>
            Officials admit — regionally — that they need to &ldquo;do better&rdquo; on affordability while shaving lot rules to coax more dwellings from tight grids
            (Lippmann). Hearing those confessions beside crane noise clarifies overlapping truths: scarcity is real, luxury branding is real, and policy is neither a blanket
            that covers everyone nor mere decoration. Whether the boom helps or harms depends less on mood than on guardrails: honest affordability math, tenant stability,
            merchant lease predictability, and transparency when plans shift (Stritzel; Lippmann).
          </p>
          <p>
            This paper ends where the assignment calls for — without declaring a &ldquo;winner.&rdquo; Construction will keep arguing in steel and glass while folks inside and
            outside the towers — residents, shops, and planners — keep arguing in hearings, mailers, and public comment. Both briefs deserve the same candelabra: the same light,
            the same typography, the same pace of reading — one pair of eyes — because Clayton&apos;s next chapter stays open for negotiation one hearing, one loan, one lease
            at a time (Zimmerman; Lung-Amam).
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
