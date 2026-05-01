import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/config";

/**
 * Pest control bespoke CTA — split-photo variant.
 *
 * Left: clean kitchen photo (the "after"). NOT a bug, NOT a treatment shot.
 * Right: contact form on bone surface. Forest-green submit button.
 *
 * The photo is the promise — your kitchen, post-treatment, looks like this.
 */
export function CTASplitPhoto() {
  // Pull a clean indoor shot from the gallery — fall back to hero photo.
  const photoUrl =
    siteConfig.photos?.gallery?.[0] ??
    siteConfig.photos?.hero ??
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1280&auto=format&fit=crop&q=80";

  return (
    <section
      id="contact"
      className="relative isolate"
      style={{ background: "var(--bg, #F5F4EE)" }}
      aria-label="Schedule an inspection"
    >
      <div className="grid md:grid-cols-2">
        {/* Photo column — clean kitchen, the "after" */}
        <div className="relative min-h-[420px] md:min-h-[640px]">
          <Image
            src={photoUrl}
            alt="A clean Houston kitchen after botanical pest treatment"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={false}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(31,77,47,0.10) 0%, rgba(19,35,26,0.20) 100%)",
            }}
          />
          {/* Bottom-left caption — the promise, on the photo */}
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
            <p
              className="text-xs font-semibold uppercase"
              style={{
                letterSpacing: "0.18em",
                color: "#F5F4EE",
                opacity: 0.8,
                fontFamily: "var(--font-body, Inter)",
              }}
            >
              The result
            </p>
            <p
              className="mt-3 max-w-md text-2xl font-semibold leading-tight md:text-3xl"
              style={{
                fontFamily: "var(--font-display, var(--font-heading))",
                color: "#F5F4EE",
                letterSpacing: "-0.025em",
              }}
            >
              The kitchen you wanted. Quietly handled.
            </p>
          </div>
        </div>

        {/* Form column */}
        <div className="flex items-center px-6 py-16 md:px-16 md:py-24">
          <div className="w-full max-w-lg">
            <p
              className="leaf-divider mb-3 text-xs font-semibold uppercase"
              style={{
                letterSpacing: "0.18em",
                color: "#1F4D2F",
                fontFamily: "var(--font-body, Inter)",
              }}
            >
              Schedule an inspection
            </p>
            <h2
              className="text-3xl font-bold leading-tight md:text-5xl"
              style={{
                fontFamily: "var(--font-display, var(--font-heading))",
                color: "var(--ink, #13231A)",
                letterSpacing: "-0.025em",
              }}
            >
              Tell us what you&rsquo;re seeing.
            </h2>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{
                color: "var(--ink, #13231A)",
                opacity: 0.7,
                fontFamily: "var(--font-body, Inter)",
              }}
            >
              We respond within 24 hours with a written, line-item plan. No upsell, no
              contract, no waiting period after treatment.
            </p>

            <div className="mt-10">
              <ContactForm />
            </div>

            {siteConfig.owner.contact_phone && (
              <p
                className="mt-8 text-sm"
                style={{
                  color: "var(--ink, #13231A)",
                  opacity: 0.65,
                  fontFamily: "var(--font-body, Inter)",
                }}
              >
                Or call directly —{" "}
                <a
                  href={`tel:${siteConfig.owner.contact_phone}`}
                  className="font-medium underline underline-offset-4 decoration-1"
                  style={{ color: "#1F4D2F" }}
                >
                  {siteConfig.owner.contact_phone}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
