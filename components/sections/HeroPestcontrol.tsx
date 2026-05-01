"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { renderItalic } from "@/lib/markdown-italic";

/**
 * Pest control bespoke hero — type-driven-no-image.
 *
 * The brand promise is "we make the problem invisible." So the design
 * makes the bug invisible too: no photo, no roach, no horror. Just
 * Bricolage Grotesque type on bone, forest-green, calm.
 *
 * A small kinetic-text loop cycles "ants → roaches → termites → mice → wasps → bed bugs"
 * below the headline. The absence of imagery IS the design.
 */
export function HeroPestcontrol() {
  const pests: string[] = siteConfig.kinetic_pests ?? [
    "ants",
    "roaches",
    "termites",
    "mice",
    "wasps",
    "bed bugs",
  ];

  const { copy, owner, hero } = siteConfig;

  const h1Text =
    copy?.h1 ??
    hero?.h1 ??
    hero?.headline ??
    "We handle the things you don't *want* to see.";
  const subText =
    copy?.sub ??
    hero?.sub ??
    "Quietly handled. Family safe. Pest-free in 48 hours.";
  const primaryCtaLabel = copy?.primary_cta ?? "Schedule an inspection →";
  const primaryCtaHref = copy?.primary_cta_href ?? "#contact";

  const [activePest, setActivePest] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => {
      setActivePest((i) => (i + 1) % pests.length);
    }, 1800);
    return () => clearInterval(t);
  }, [pests.length]);

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden"
      style={{ background: "var(--bg, #F5F4EE)" }}
    >
      {/* Sentinel for sticky tel bar */}
      <div id="hero-sentinel" className="absolute bottom-0 left-0 h-1 w-full" aria-hidden />

      {/* Soft botanical hairlines — not photo, not horror, just calm structure */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 92% 12%, rgba(31,77,47,0.06) 0, transparent 38%), radial-gradient(circle at 6% 92%, rgba(232,163,61,0.05) 0, transparent 32%)",
        }}
      />

      <div className="container relative z-10 grid min-h-[88vh] items-center py-24 md:py-32">
        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Eyebrow — botanical hairline */}
          <p
            className="leaf-divider mb-6 text-xs font-semibold uppercase"
            style={{
              letterSpacing: "0.18em",
              color: "var(--ink, #13231A)",
              fontFamily: "var(--font-body, Inter)",
              opacity: 0.6,
            }}
          >
            Houston · Botanical-first · TPCL #08847
          </p>

          {/* Display headline — Bricolage Grotesque, big */}
          <h1
            className="font-display font-bold leading-[0.95] tracking-tight"
            style={{
              fontFamily: "var(--font-display, var(--font-heading))",
              color: "var(--ink, #13231A)",
              fontSize: "clamp(2.75rem, 7.5vw, 7.5rem)",
              letterSpacing: "-0.035em",
            }}
          >
            {renderItalic(h1Text)}
          </h1>

          {/* Sub — calm, single line on desktop */}
          <p
            className="mt-8 max-w-2xl text-lg leading-relaxed md:text-xl"
            style={{
              fontFamily: "var(--font-body, Inter)",
              color: "var(--ink, #13231A)",
              opacity: 0.72,
            }}
          >
            {subText}
          </p>

          {/* Kinetic-text pest cycle — discreet, muted, lives BELOW the promise */}
          <div className="mt-10 flex items-baseline gap-3" aria-live="polite">
            <span
              className="text-xs uppercase"
              style={{
                letterSpacing: "0.2em",
                color: "var(--ink, #13231A)",
                opacity: 0.5,
                fontFamily: "var(--font-body, Inter)",
              }}
            >
              We treat for
            </span>
            <span className="relative inline-block min-w-[10ch] overflow-hidden">
              {pests.map((p, i) => (
                <motion.span
                  key={p}
                  aria-hidden={i !== activePest}
                  initial={false}
                  animate={{
                    opacity: i === activePest ? 1 : 0,
                    y: i === activePest ? 0 : -10,
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute left-0 top-0 whitespace-nowrap font-display text-base font-medium md:text-lg"
                  style={{
                    color: "#1F4D2F",
                    fontFamily: "var(--font-display, var(--font-heading))",
                    fontStyle: "italic",
                  }}
                >
                  {p}
                </motion.span>
              ))}
              {/* Spacer so the absolute layer reserves height */}
              <span className="invisible whitespace-nowrap font-display text-base md:text-lg">
                bed bugs
              </span>
            </span>
          </div>

          {/* CTAs — primary forest-green pill, secondary call link */}
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={primaryCtaHref}
              className="rounded-full px-7 py-4 text-base font-medium transition-all hover:opacity-90"
              style={{
                background: "#1F4D2F",
                color: "#F5F4EE",
                fontFamily: "var(--font-body, Inter)",
              }}
            >
              {primaryCtaLabel}
            </a>
            {owner.contact_phone && (
              <a
                href={`tel:${owner.contact_phone}`}
                className="text-sm font-medium underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity"
                style={{
                  color: "#13231A",
                  fontFamily: "var(--font-body, Inter)",
                }}
              >
                Or call {owner.contact_phone}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
