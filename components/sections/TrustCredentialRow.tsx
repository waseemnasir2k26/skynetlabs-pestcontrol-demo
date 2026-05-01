import { siteConfig } from "@/lib/config";

/**
 * Pest control bespoke trust strip — credential-row variant.
 *
 * Replaces the generic logo-strip with formal credentials: state license #,
 * EPA registration, family-safe certifications. Each item gets a bold label
 * + small detail pair — institutional, calm, AA-contrast.
 */
export function TrustCredentialRow() {
  // Parse trust_strip strings into label / detail pairs.
  // "Texas TPCL #08847" → { label: "Texas TPCL", detail: "#08847" }
  // "EPA-Registered Products Only" → { label: "EPA-Registered", detail: "Products Only" }
  const items = (siteConfig.trust_strip ?? []).map((raw) => {
    const m = raw.match(/^(.+?)\s+(#\S+|·.+|—.+|—.+|\(.+\))$/);
    if (m) return { label: m[1], detail: m[2] };
    // fall back: split on common delimiters
    const parts = raw.split(/\s·\s|\s—\s|\s-\s/);
    if (parts.length === 2) return { label: parts[0], detail: parts[1] };
    return { label: raw, detail: "" };
  });

  return (
    <section
      className="border-y"
      style={{
        background: "var(--surface, #FFFFFF)",
        borderColor: "rgba(31,77,47,0.12)",
      }}
      aria-label="Credentials and certifications"
    >
      <div className="container py-10 md:py-12">
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it, i) => (
            <div
              key={i}
              className="flex flex-col gap-1.5"
              style={{
                borderLeft: "1px solid rgba(31,77,47,0.18)",
                paddingLeft: "1rem",
              }}
            >
              <span
                className="text-[0.65rem] font-semibold uppercase"
                style={{
                  letterSpacing: "0.16em",
                  color: "#1F4D2F",
                  fontFamily: "var(--font-body, Inter)",
                }}
              >
                {it.label}
              </span>
              {it.detail && (
                <span
                  className="text-sm font-medium"
                  style={{
                    color: "var(--ink, #13231A)",
                    fontFamily: "var(--font-display, var(--font-heading))",
                    opacity: 0.85,
                  }}
                >
                  {it.detail}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
