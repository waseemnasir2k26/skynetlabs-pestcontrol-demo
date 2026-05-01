"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Pest control bespoke flourish — InfestationSeverityMeter.
 *
 * Interactive 5-step meter that:
 *  1. Reduces panic-visitor anxiety (quantifies "how bad is this really?")
 *  2. Qualifies leads (a "Swarm" or "Structural" gets called same-day)
 *  3. Educates without showing gross macro photos (the brief's mandate)
 *
 * UX: user clicks their level → meter fills + amber glow on warning levels →
 *     a recommended response timeline appears with a routing CTA.
 *
 * Color rule from the brief: warning amber is used ONLY here + emergency.
 */

const LEVELS = [
  {
    label: "1 sighting",
    detail: "One or two seen in a week.",
    response: "Schedule a standard inspection. We'll be there within 5–7 days.",
    cta: "Schedule inspection",
    severity: 1,
  },
  {
    label: "Trail",
    detail: "Visible trail or a handful in one area.",
    response: "Quarterly botanical perimeter starts the work — we'll be on-site within 48–72 hours.",
    cta: "Book within 72h",
    severity: 2,
  },
  {
    label: "Active nest",
    detail: "Found a nest, hive, or breeding cluster.",
    response: "Targeted treatment within 24 hours. Same technician returns at day 14 for follow-up.",
    cta: "Book within 24h",
    severity: 3,
  },
  {
    label: "Swarm",
    detail: "Wasp swarm, bed-bug spread, multi-room roach.",
    response: "Same-day dispatch where Houston traffic allows. Skip the form — call.",
    cta: "Call now",
    severity: 4,
  },
  {
    label: "Structural",
    detail: "Termite damage, rodent gnawing in walls, slab issues.",
    response: "Sentricon termite team + sealing inspector dispatched. We coordinate with your contractor.",
    cta: "Call structural team",
    severity: 5,
  },
] as const;

export function InfestationSeverityMeter() {
  const [active, setActive] = React.useState<number | null>(null);

  const fillPct = active === null ? 0 : ((active + 1) / LEVELS.length) * 100;
  const isUrgent = active !== null && active >= 2;
  const fillColor = isUrgent ? "#E8A33D" /* amber */ : "#1F4D2F" /* forest */;

  return (
    <section
      id="severity-meter"
      className="py-20 md:py-24"
      style={{ background: "var(--surface, #FFFFFF)" }}
    >
      <div className="container">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <p
            className="leaf-divider mb-3 text-xs font-semibold uppercase"
            style={{
              letterSpacing: "0.18em",
              color: "#1F4D2F",
              fontFamily: "var(--font-body, Inter)",
            }}
          >
            How bad is it, really?
          </p>
          <h2
            className="text-3xl font-bold leading-tight md:text-5xl"
            style={{
              fontFamily: "var(--font-display, var(--font-heading))",
              color: "var(--ink, #13231A)",
              letterSpacing: "-0.025em",
            }}
          >
            Tell us where you are. We'll tell you how fast we can be there.
          </h2>
          <p
            className="mt-4 max-w-xl text-base leading-relaxed"
            style={{ color: "var(--ink, #13231A)", opacity: 0.65 }}
          >
            No panic. Pick the level that matches what you're seeing — your response timeline appears below.
          </p>

          {/* Meter track */}
          <div className="mt-12">
            {/* The fill bar */}
            <div
              className="relative h-2 w-full overflow-hidden rounded-full"
              style={{ background: "#E8EAE0" }}
              aria-hidden
            >
              <div
                className="severity-fill h-full rounded-full"
                style={{ width: `${fillPct}%`, background: fillColor }}
              />
            </div>

            {/* Step buttons */}
            <div
              className="mt-6 grid grid-cols-5 gap-2"
              role="radiogroup"
              aria-label="Infestation severity level"
            >
              {LEVELS.map((lvl, i) => {
                const isActive = active === i;
                const isPast = active !== null && i < active;
                const isUrgentTier = i >= 2;
                return (
                  <button
                    key={lvl.label}
                    type="button"
                    role="radio"
                    aria-checked={isActive}
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-start gap-2 rounded-md p-3 text-left transition-all hover:bg-[#E8EAE0]/40 focus:outline-none focus:ring-2 focus:ring-[#1F4D2F]/40"
                  >
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition-all"
                      style={{
                        background: isActive
                          ? isUrgentTier
                            ? "#E8A33D"
                            : "#1F4D2F"
                          : isPast
                          ? "#1F4D2F"
                          : "transparent",
                        border: `1.5px solid ${
                          isActive || isPast ? "transparent" : "#5C6B5F"
                        }`,
                        color: isActive || isPast ? "#F5F4EE" : "#5C6B5F",
                        fontFamily: "var(--font-body, Inter)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className="text-sm font-semibold leading-tight"
                      style={{
                        color: isActive ? "var(--ink, #13231A)" : "#5C6B5F",
                        fontFamily: "var(--font-display, var(--font-heading))",
                      }}
                    >
                      {lvl.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Response card */}
          <AnimatePresence mode="wait">
            {active !== null && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="mt-10 rounded-xl border p-6 md:p-8"
                style={{
                  background: "#F5F4EE",
                  borderColor: isUrgent ? "#E8A33D" : "#1F4D2F",
                  borderWidth: 1,
                }}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
                  <div className="flex-1">
                    <p
                      className="text-xs font-semibold uppercase"
                      style={{
                        letterSpacing: "0.18em",
                        color: isUrgent ? "#E8A33D" : "#1F4D2F",
                        fontFamily: "var(--font-body, Inter)",
                      }}
                    >
                      {isUrgent ? "Priority response" : "Standard response"}
                    </p>
                    <h3
                      className="mt-2 text-xl font-semibold md:text-2xl"
                      style={{
                        fontFamily: "var(--font-display, var(--font-heading))",
                        color: "var(--ink, #13231A)",
                      }}
                    >
                      {LEVELS[active].detail}
                    </h3>
                    <p
                      className="mt-3 text-base leading-relaxed"
                      style={{ color: "var(--ink, #13231A)", opacity: 0.72 }}
                    >
                      {LEVELS[active].response}
                    </p>
                  </div>
                  <a
                    href={isUrgent ? "tel:+17135550214" : "#contact"}
                    className="inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all hover:opacity-90"
                    style={{
                      background: isUrgent ? "#E8A33D" : "#1F4D2F",
                      color: isUrgent ? "#13231A" : "#F5F4EE",
                      fontFamily: "var(--font-body, Inter)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {LEVELS[active].cta} →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
