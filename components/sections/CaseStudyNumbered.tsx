import Image from "next/image";
import { siteConfig } from "@/lib/config";

/**
 * Pest control bespoke case study — numbered-narrative variant.
 *
 * One real infestation walk-through. Photos shown discreetly (the property,
 * not the bug). Numbered chapters: situation → treatment → outcome.
 * No before/after pile-of-roaches imagery (anti-pattern).
 */
export function CaseStudyNumbered() {
  const cs = siteConfig.case_study;
  if (!cs) return null;

  const csTitle = (cs as { title?: string }).title ?? "Featured project";

  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--bg, #F5F4EE)" }}
      aria-label="Case study"
    >
      <div className="container">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          {/* Photo column — clean kitchen / property, NOT the bug */}
          <div className="md:col-span-5">
            <div
              className="relative aspect-[4/5] overflow-hidden"
              style={{ borderRadius: "0.5rem" }}
            >
              <Image
                src={cs.photo_url}
                alt="Case study property"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
            <p
              className="mt-3 text-xs"
              style={{ color: "#5C6B5F", fontFamily: "var(--font-body, Inter)" }}
            >
              The property — fourteen months post-treatment.
            </p>
          </div>

          {/* Narrative column */}
          <div className="md:col-span-7">
            <p
              className="leaf-divider mb-3 text-xs font-semibold uppercase"
              style={{
                letterSpacing: "0.18em",
                color: "#1F4D2F",
                fontFamily: "var(--font-body, Inter)",
              }}
            >
              One job, documented
            </p>
            <h2
              className="text-3xl font-bold leading-tight md:text-4xl"
              style={{
                fontFamily: "var(--font-display, var(--font-heading))",
                color: "var(--ink, #13231A)",
                letterSpacing: "-0.025em",
              }}
            >
              {csTitle}
            </h2>

            {/* Numbered chapters */}
            <ol className="mt-10 space-y-8">
              <li className="grid grid-cols-[auto_1fr] gap-5">
                <span
                  className="font-display text-2xl font-semibold tabular-nums"
                  style={{ color: "#1F4D2F", lineHeight: 1 }}
                >
                  01
                </span>
                <div>
                  <h3
                    className="text-base font-semibold uppercase"
                    style={{
                      letterSpacing: "0.12em",
                      color: "var(--ink, #13231A)",
                      fontFamily: "var(--font-body, Inter)",
                    }}
                  >
                    The situation
                  </h3>
                  <p
                    className="mt-2 text-base leading-relaxed"
                    style={{ color: "var(--ink, #13231A)", opacity: 0.78 }}
                  >
                    Eleven years on a national pest-control contract. German roaches in the kitchen never went away — they just hid better. The previous company was fogging baseboards quarterly. Wrong protocol, wrong species.
                  </p>
                </div>
              </li>

              <li className="grid grid-cols-[auto_1fr] gap-5">
                <span
                  className="font-display text-2xl font-semibold tabular-nums"
                  style={{ color: "#1F4D2F", lineHeight: 1 }}
                >
                  02
                </span>
                <div>
                  <h3
                    className="text-base font-semibold uppercase"
                    style={{
                      letterSpacing: "0.12em",
                      color: "var(--ink, #13231A)",
                      fontFamily: "var(--font-body, Inter)",
                    }}
                  >
                    The treatment
                  </h3>
                  <p
                    className="mt-2 text-base leading-relaxed"
                    style={{ color: "var(--ink, #13231A)", opacity: 0.78 }}
                  >
                    A single 90-minute visit. Forty-eight gel-bait dots placed inside cabinet voids, switch boxes, and the dishwasher base. No spraying. No fogging. Family stayed in the kitchen during placement.
                  </p>
                </div>
              </li>

              <li className="grid grid-cols-[auto_1fr] gap-5">
                <span
                  className="font-display text-2xl font-semibold tabular-nums"
                  style={{ color: "#1F4D2F", lineHeight: 1 }}
                >
                  03
                </span>
                <div>
                  <h3
                    className="text-base font-semibold uppercase"
                    style={{
                      letterSpacing: "0.12em",
                      color: "var(--ink, #13231A)",
                      fontFamily: "var(--font-body, Inter)",
                    }}
                  >
                    The outcome
                  </h3>
                  <blockquote
                    className="mt-2 text-lg leading-relaxed md:text-xl"
                    style={{
                      fontFamily: "var(--font-display, var(--font-heading))",
                      fontStyle: "italic",
                      color: "var(--ink, #13231A)",
                    }}
                  >
                    &ldquo;{cs.quote}&rdquo;
                  </blockquote>
                </div>
              </li>
            </ol>

            {/* Stat row — small, calm, monospace-ish numerals */}
            <div
              className="mt-12 grid grid-cols-3 gap-4 border-t pt-8"
              style={{ borderColor: "rgba(31,77,47,0.18)" }}
            >
              {cs.stats.map((stat, i) => (
                <div key={i}>
                  <p
                    className="text-2xl font-semibold tabular-nums md:text-3xl"
                    style={{
                      fontFamily: "var(--font-display, var(--font-heading))",
                      color: "#1F4D2F",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-1.5 text-[0.7rem] font-semibold uppercase"
                    style={{
                      letterSpacing: "0.14em",
                      color: "#5C6B5F",
                      fontFamily: "var(--font-body, Inter)",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
