/**
 * Central Public Frontend Configuration
 *
 * All values are strictly controlled via safe public environment variables.
 * Sensitive credentials, API keys, or backend secrets MUST NOT be placed here.
 */

export const siteConfig = {
  name: "GrayMatter AI",
  description:
    "GrayMatter AI is an intelligent content operating system connecting research, strategy, creation, production, analytics, and learning into one continuous system.",
  // Development fallback: http://localhost:3000
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  // Development fallback: contact@example.com
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com",
};
