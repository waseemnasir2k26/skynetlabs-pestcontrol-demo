"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

/**
 * Pest control bespoke services — accordion-step variant.
 *
 * Click a pest → reveals the treatment plan, price band, and visit cycle.
 * No bug photos. Just clean type, generous spacing, calm motion.
 *
 * The InfestationSeverityMeter lives BELOW this list — services + flourish
 * are paired in the same section per the brief ("Lives in Services").
 */

const PRICE_BANDS: Record<string, { band: string; cycle: string }> = {
  "termite-bait": { band: "$1,200 – $1,800 install · $325/yr monitoring", cycle: "Annual inspections + transferable bond" },
  "mosquito-misting": { band: "$2,800 – $4,200 install · $185/quarter refill", cycle: "Quarterly system refill, May–Oct" },
  "roach-protocol": { band: "$385 single-visit treatment", cycle: "1 visit + 14-day follow-up" },
  "rodent-exclusion": { band: "$485 – $1,250 sealing scope-dependent", cycle: "1-time exclusion + 30-day return" },
  "botanical-quarterly": { band: "$165/quarter · no contract", cycle: "4 visits/yr, same technician" },
  "pre-construction": { band: "$0.85 – $1.40 / sqft slab", cycle: "Single application during pour" },
};

export function ServicesAccordionStep() {
  const services = siteConfig.services.map((s) => ({
    slug: s.slug ?? "",
    title: s.title ?? s.name ?? "",
    blurb: s.blurb ?? s.description ?? "",
  }));

  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section id="services" className="py-24 md:py-32" style={{ background: "var(--bg, #F5F4EE)" }}>
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <p
            className="leaf-divider mb-3 text-xs font-semibold uppercase"
            style={{
              letterSpacing: "0.18em",
              color: "#1F4D2F",
              fontFamily: "var(--font-body, Inter)",
            }}
          >
            What we treat
          </p>
          <h2
            className="text-3xl font-bold leading-tight md:text-5xl"
            style={{
              fontFamily: "var(--font-display, var(--font-heading))",
              color: "var(--ink, #13231A)",
              letterSpacing: "-0.025em",
            }}
          >
            Click your pest. We'll show you the plan.
          </h2>
          <p
            className="mt-4 max-w-xl text-base leading-relaxed"
            style={{ color: "var(--ink, #13231A)", opacity: 0.65 }}
          >
            Six treatment programs. Every one written, EPA-documented, and pet-safe within the windows below.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="mx-auto max-w-4xl"
          style={{ borderTop: "1px solid rgba(31,77,47,0.18)" }}
        >
          {services.map((svc, i) => {
            const isOpen = open === i;
            const meta = PRICE_BANDS[svc.slug] ?? {
              band: "Quoted on inspection",
              cycle: "Custom plan",
            };
            return (
              <div
                key={svc.slug || i}
                style={{ borderBottom: "1px solid rgba(31,77,47,0.18)" }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-baseline justify-between gap-6 py-6 text-left transition-opacity hover:opacity-80 md:py-7"
                >
                  <div className="flex items-baseline gap-5">
                    <span
                      className="text-sm font-medium tabular-nums"
                      style={{
                        color: "#5C6B5F",
                        fontFamily: "var(--font-body, Inter)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-xl font-semibold leading-tight md:text-3xl"
                      style={{
                        fontFamily: "var(--font-display, var(--font-heading))",
                        color: "var(--ink, #13231A)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {svc.title}
                    </span>
                  </div>
                  <span
                    className="shrink-0 text-2xl font-light transition-transform duration-200"
                    style={{
                      color: "#1F4D2F",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-8 md:grid-cols-12 md:gap-10">
                        <p
                          className="text-base leading-relaxed md:col-span-7 md:text-lg"
                          style={{
                            color: "var(--ink, #13231A)",
                            opacity: 0.78,
                          }}
                        >
                          {svc.blurb}
                        </p>
                        <div
                          className="md:col-span-5"
                          style={{
                            borderLeft: "1px solid rgba(31,77,47,0.18)",
                            paddingLeft: "1.25rem",
                          }}
                        >
                          <p
                            className="text-[0.65rem] font-semibold uppercase"
                            style={{
                              letterSpacing: "0.18em",
                              color: "#5C6B5F",
                              fontFamily: "var(--font-body, Inter)",
                            }}
                          >
                            Price band
                          </p>
                          <p
                            className="mt-1.5 text-sm font-medium"
                            style={{
                              color: "var(--ink, #13231A)",
                              fontFamily: "var(--font-display, var(--font-heading))",
                            }}
                          >
                            {meta.band}
                          </p>
                          <p
                            className="mt-5 text-[0.65rem] font-semibold uppercase"
                            style={{
                              letterSpacing: "0.18em",
                              color: "#5C6B5F",
                              fontFamily: "var(--font-body, Inter)",
                            }}
                          >
                            Visit cycle
                          </p>
                          <p
                            className="mt-1.5 text-sm font-medium"
                            style={{
                              color: "var(--ink, #13231A)",
                              fontFamily: "var(--font-display, var(--font-heading))",
                            }}
                          >
                            {meta.cycle}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
