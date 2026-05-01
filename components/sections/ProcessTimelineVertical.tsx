import { siteConfig } from "@/lib/config";

/**
 * Pest control bespoke process — timeline-vertical variant.
 *
 * Single column, generous vertical breathing room, hairline rail with
 * forest-green dot anchors. Calm cadence — no parallax, no scroll-jack.
 */

const DEFAULT_STEPS = [
  { n: 1, title: "Inspection", blurb: "Interior, exterior, attic, slab. We identify species and entry points — not just what's visible." },
  { n: 2, title: "Custom plan", blurb: "Written treatment plan with product names + EPA registration numbers. Pet- and family-timing planned around your schedule." },
  { n: 3, title: "Quarterly visits", blurb: "Same technician each visit when possible. Written log emailed after every service." },
];

export function ProcessTimelineVertical() {
  const steps = siteConfig.process ?? DEFAULT_STEPS;

  return (
    <section className="py-24 md:py-32" style={{ background: "var(--surface, #FFFFFF)" }}>
      <div className="container">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          {/* Header rail */}
          <div className="md:col-span-4">
            <p
              className="leaf-divider mb-3 text-xs font-semibold uppercase"
              style={{
                letterSpacing: "0.18em",
                color: "#1F4D2F",
                fontFamily: "var(--font-body, Inter)",
              }}
            >
              How it works
            </p>
            <h2
              className="text-3xl font-bold leading-tight md:text-5xl"
              style={{
                fontFamily: "var(--font-display, var(--font-heading))",
                color: "var(--ink, #13231A)",
                letterSpacing: "-0.025em",
              }}
            >
              Inspection → Custom plan → Quarterly visits.
            </h2>
            <p
              className="mt-4 max-w-md text-base leading-relaxed"
              style={{ color: "var(--ink, #13231A)", opacity: 0.65 }}
            >
              Three steps. No surprises. The same technician returns every quarter so the file stays consistent.
            </p>
          </div>

          {/* Vertical timeline */}
          <ol className="relative md:col-span-8">
            {/* Continuous vertical rail */}
            <span
              aria-hidden
              className="absolute left-[15px] top-2 bottom-2 w-px"
              style={{ background: "rgba(31,77,47,0.22)" }}
            />
            {steps.map((s) => (
              <li key={s.n} className="relative pl-12 pb-10 last:pb-0">
                {/* Anchor dot */}
                <span
                  aria-hidden
                  className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full"
                  style={{
                    background: "#F5F4EE",
                    border: "1.5px solid #1F4D2F",
                    color: "#1F4D2F",
                    fontFamily: "var(--font-body, Inter)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                  }}
                >
                  {String(s.n).padStart(2, "0")}
                </span>
                <h3
                  className="text-2xl font-semibold md:text-3xl"
                  style={{
                    fontFamily: "var(--font-display, var(--font-heading))",
                    color: "var(--ink, #13231A)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3 max-w-2xl text-base leading-relaxed"
                  style={{ color: "var(--ink, #13231A)", opacity: 0.72 }}
                >
                  {s.blurb}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
