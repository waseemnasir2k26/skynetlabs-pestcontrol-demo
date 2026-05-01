"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { buildFaqJsonLd } from "@/lib/seo";

/**
 * Pest control bespoke FAQ — search-filter variant.
 *
 * Pest-control SEO is heavily Q-driven ("how to get rid of german roaches",
 * "are termite bonds transferable", etc). A search box lets visitors
 * type their pest or concern and instantly filter the question list —
 * the panicked visitor finds their answer in two seconds, no scrolling.
 *
 * Calm aesthetic preserved: bone surface, hairline dividers, forest accent.
 */
export function FAQSearchFilter() {
  const faqs = siteConfig.faqs ?? [];
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState<number | null>(null);

  const normalized = query.trim().toLowerCase();
  const filtered = normalized
    ? faqs.filter(
        (f) =>
          f.q.toLowerCase().includes(normalized) ||
          f.a.toLowerCase().includes(normalized),
      )
    : faqs;

  const jsonLd = buildFaqJsonLd(faqs);

  // Quick chips — common pest lookups. Click to filter.
  const QUICK_CHIPS = ["termite", "roach", "mosquito", "rodent", "botanical", "bond"];

  return (
    <section
      id="faq"
      className="py-24 md:py-32"
      style={{ background: "var(--surface, #FFFFFF)" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            Frequently asked
          </p>
          <h2
            className="text-3xl font-bold leading-tight md:text-5xl"
            style={{
              fontFamily: "var(--font-display, var(--font-heading))",
              color: "var(--ink, #13231A)",
              letterSpacing: "-0.025em",
            }}
          >
            Type your pest. Find the answer.
          </h2>
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--ink, #13231A)", opacity: 0.65 }}
          >
            Search the question library — typing &ldquo;termite&rdquo; or &ldquo;mosquito&rdquo; will narrow the list.
          </p>

          {/* Search input */}
          <div className="mt-10">
            <label htmlFor="faq-search" className="sr-only">
              Search questions
            </label>
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(null);
              }}
              placeholder="Search by pest or topic..."
              className="w-full rounded-md px-5 py-4 text-base outline-none transition-all focus:ring-2"
              style={{
                background: "var(--bg, #F5F4EE)",
                border: "1px solid rgba(31,77,47,0.18)",
                color: "var(--ink, #13231A)",
                fontFamily: "var(--font-body, Inter)",
              }}
            />

            {/* Quick chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span
                className="text-[0.65rem] font-semibold uppercase mr-1 self-center"
                style={{
                  letterSpacing: "0.16em",
                  color: "#5C6B5F",
                  fontFamily: "var(--font-body, Inter)",
                }}
              >
                Quick
              </span>
              {QUICK_CHIPS.map((chip) => {
                const isActive = normalized === chip;
                return (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => {
                      setQuery(isActive ? "" : chip);
                      setOpen(null);
                    }}
                    className="rounded-full px-3 py-1.5 text-xs font-medium transition-all"
                    style={{
                      background: isActive ? "#1F4D2F" : "transparent",
                      color: isActive ? "#F5F4EE" : "#1F4D2F",
                      border: `1px solid ${isActive ? "#1F4D2F" : "rgba(31,77,47,0.28)"}`,
                      fontFamily: "var(--font-body, Inter)",
                    }}
                  >
                    {chip}
                  </button>
                );
              })}
            </div>

            {/* Result count */}
            {normalized && (
              <p
                className="mt-4 text-xs"
                style={{
                  color: "#5C6B5F",
                  fontFamily: "var(--font-body, Inter)",
                }}
              >
                {filtered.length} of {faqs.length} questions matched &ldquo;{query}&rdquo;
              </p>
            )}
          </div>

          {/* Question list */}
          <div
            className="mt-10"
            style={{ borderTop: "1px solid rgba(31,77,47,0.18)" }}
          >
            {filtered.length === 0 && (
              <div className="py-12 text-center">
                <p
                  className="text-base"
                  style={{
                    color: "var(--ink, #13231A)",
                    opacity: 0.7,
                    fontFamily: "var(--font-body, Inter)",
                  }}
                >
                  No matches. Try &ldquo;termite&rdquo;, &ldquo;mosquito&rdquo;, or{" "}
                  <a
                    href="#contact"
                    style={{
                      color: "#1F4D2F",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    ask us directly
                  </a>
                  .
                </p>
              </div>
            )}
            {filtered.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={`${query}-${i}`}
                  style={{ borderBottom: "1px solid rgba(31,77,47,0.18)" }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-opacity hover:opacity-70"
                  >
                    <span
                      className="text-base font-medium md:text-lg"
                      style={{
                        color: "var(--ink, #13231A)",
                        fontFamily: "var(--font-display, var(--font-heading))",
                      }}
                    >
                      {f.q}
                    </span>
                    <span
                      className="shrink-0 text-xl font-light transition-transform duration-200"
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
                        <p
                          className="pb-5 pr-8 text-sm leading-relaxed md:text-base"
                          style={{
                            color: "var(--ink, #13231A)",
                            opacity: 0.72,
                            fontFamily: "var(--font-body, Inter)",
                          }}
                        >
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
