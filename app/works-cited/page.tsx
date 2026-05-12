import { ButtonLink } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works Cited",
};

export default function WorksCitedPage() {
  return (
    <main id="works-cited" className="flex flex-1 flex-col">
      <section className="border-b border-border px-6 py-[4rem] sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid w-full max-w-wide gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-muted-foreground">
            MLA · 9th edition
          </p>
          <h1 className="text-[clamp(2rem,4.6vw,2.75rem)] font-bold tracking-tight text-foreground">
            Works Cited
          </h1>
          <p className="max-w-content text-[0.95rem] leading-relaxed text-muted-foreground">
            Entries are alphabetical. Italics mark container titles (MLA). Live links add{" "}
            <span className="font-semibold text-foreground">https://</span> for convenience.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-wide gap-[2.875rem] px-6 pb-24 pt-14 sm:px-10 lg:px-0">
        <ul className="space-y-[2.185rem] text-[0.925rem] leading-[1.85] tracking-tight text-foreground sm:text-[0.9375rem]">
          <li className="mla-hang">
            “Clayton, Missouri.”{" "}
            <cite>Wikipedia</cite>
            , Wikimedia Foundation, 1 Apr. 2026,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Clayton,_Missouri"
              className="break-words underline decoration-border underline-offset-4"
            >
              en.wikipedia.org/wiki/Clayton,_Missouri
            </a>
            . Accessed 20 Apr. 2026.
          </li>

          <li className="mla-hang">
            Gascon, Charles S., and Lillian Fu. “The Role of Single-Family Rentals in the U.S. Housing Market.”{" "}
            <cite>Federal Reserve Bank of St. Louis</cite>, 31 Oct. 2025,{" "}
            <a
              href="https://stlouisfed.org/on-the-economy/2025/oct/role-single-family-rentals-us-housing-market"
              className="break-words underline decoration-border underline-offset-4"
            >
              stlouisfed.org/on-the-economy/2025/oct/role-single-family-rentals-us-housing-market
            </a>
            .
          </li>

          <li className="mla-hang">
            Ihnen, Alex. “Clayton Building Boom: $55M Vanguard Set to Add 229 Apartments.” <cite>NextSTL</cite>, 24 Nov. 2014,{" "}
            <a
              href="https://nextstl.com/2014/11/229-unit-55m-vanguard-apartments-plan-clayton/"
              className="break-words underline decoration-border underline-offset-4"
            >
              nextstl.com/2014/11/229-unit-55m-vanguard-apartments-plan-clayton/
            </a>
            .
          </li>

          <li className="mla-hang">
            Lippmann, Rachel. “Aldermen Vote to Make Housing in St. Louis Easier to Build.”{" "}
            <cite>St. Louis Public Radio</cite>, 11 July 2025,{" "}
            <a
              href="https://stlpr.org/economy-business/2025-07-11/st-louis-aldermen-vote-to-make-housing-in-city-easier-to-build"
              className="break-words underline decoration-border underline-offset-4"
            >
              stlpr.org/economy-business/2025-07-11/st-louis-aldermen-vote-to-make-housing-in-city-easier-to-build
            </a>
            .
          </li>

          <li className="mla-hang">
            Lung-Amam, Willow. “Small Businesses Are Victims of Gentrification, Too.” <cite>Bloomberg</cite>, 19 May 2021,{" "}
            <a
              href="https://www.bloomberg.com/news/articles/2021-05-19/small-businesses-are-victims-of-gentrification-too"
              className="break-words underline decoration-border underline-offset-4"
            >
              bloomberg.com/news/articles/2021-05-19/small-businesses-are-victims-of-gentrification-too
            </a>
            .
          </li>

          <li className="mla-hang">
            Stritzel, Chris. “Proposal at 121 South Meramec Would Change Clayton&apos;s Skyline.” <cite>CitySceneSTL</cite>, 29 Oct. 2023,{" "}
            <a
              href="https://cityscene-stl.com/post/proposal-at-121-south-meramec-would-change-clayton-s-skyline"
              className="break-words underline decoration-border underline-offset-4"
            >
              cityscene-stl.com/post/proposal-at-121-south-meramec-would-change-clayton-s-skyline
            </a>
            .
          </li>

          <li className="mla-hang">
            Zhao, Na. “Shorter Apartment Construction Time in 2024.” <cite>Eye on Housing</cite>, National Association of Home Builders,
            6 Oct. 2025,{" "}
            <a
              href="https://eyeonhousing.org/2025/10/shorter-apartment-construction-time-in-2024/"
              className="break-words underline decoration-border underline-offset-4"
            >
              eyeonhousing.org/2025/10/shorter-apartment-construction-time-in-2024/
            </a>
            .
          </li>

          <li className="mla-hang">
            Zimmerman, Riley. “Clayton&apos;s Growth on the Horizon.” <cite>The Globe</cite>, Clayton High School, 6 Mar. 2024,{" "}
            <a
              href="https://www.chsglobe.com/48295/news/local-news/claytons-growth-on-the-horizon/"
              className="break-words underline decoration-border underline-offset-4"
            >
              chsglobe.com/48295/news/local-news/claytons-growth-on-the-horizon/
            </a>
            .
          </li>
        </ul>

        <nav className="flex flex-wrap gap-4 border-t border-border pt-12" aria-label="Works cited pager">
          <ButtonLink variant="outline" href="/conclusion">
             ← Conclusion
          </ButtonLink>
          <ButtonLink href="/" variant="secondary">
             Return home
          </ButtonLink>
        </nav>
      </section>
    </main>
  );
}
