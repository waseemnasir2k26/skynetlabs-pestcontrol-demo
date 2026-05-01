/**
 * Pest Control — bespoke section order per brief 2026-05-01.
 *
 * sectionOrder: Hero → TrustStrip → Services → Process → CaseStudy → FAQ → CTABanner
 *
 * Variants applied:
 *   - Hero      → type-driven-no-image  (HeroPestcontrol, kinetic-text pest cycle)
 *   - Trust     → credential-row        (TrustCredentialRow)
 *   - Services  → accordion-step        (ServicesAccordionStep) + flourish below
 *   - Flourish  → InfestationSeverityMeter (lives inside Services per brief)
 *   - Process   → timeline-vertical     (ProcessTimelineVertical)
 *   - CaseStudy → numbered-narrative    (CaseStudyNumbered)
 *   - FAQ       → search-filter         (FAQSearchFilter)
 *   - CTA       → split-photo           (CTASplitPhoto)
 *
 * The page is calm — that's the brand.
 */
import { HeroPestcontrol } from "@/components/sections/HeroPestcontrol";
import { TrustCredentialRow } from "@/components/sections/TrustCredentialRow";
import { ServicesAccordionStep } from "@/components/sections/ServicesAccordionStep";
import { InfestationSeverityMeter } from "@/components/sections/InfestationSeverityMeter";
import { ProcessTimelineVertical } from "@/components/sections/ProcessTimelineVertical";
import { CaseStudyNumbered } from "@/components/sections/CaseStudyNumbered";
import { FAQSearchFilter } from "@/components/sections/FAQSearchFilter";
import { CTASplitPhoto } from "@/components/sections/CTASplitPhoto";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — type-driven, no bug photo */}
      <HeroPestcontrol />

      {/* 2. Trust — formal credential row */}
      <TrustCredentialRow />

      {/* 3. Services — accordion-step (click pest, reveal plan) */}
      <ServicesAccordionStep />

      {/* 3b. Flourish — InfestationSeverityMeter lives in Services per brief */}
      <InfestationSeverityMeter />

      {/* 4. Process — vertical timeline */}
      <ProcessTimelineVertical />

      {/* 5. Case Study — numbered narrative (only when configured) */}
      {siteConfig.case_study && <CaseStudyNumbered />}

      {/* 6. FAQ — search-filter (Q-driven SEO) */}
      {siteConfig.modules?.faq !== false && <FAQSearchFilter />}

      {/* 7. CTA — split-photo (clean kitchen + form) */}
      <CTASplitPhoto />
    </>
  );
}
