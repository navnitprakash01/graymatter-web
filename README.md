# GrayMatter AI — Web

> **Intelligence infrastructure for creators.**  
> Official public landing and product architecture website for GrayMatter AI.

---

## 1. Overview

**GrayMatter AI** is an AI-powered content intelligence and production operating system designed initially around YouTube. It combines channel intelligence, research, topic opportunity analysis, strategy, hooks, scripting, visual planning, media generation, video rendering, packaging, analytics, and performance learning into one continuous system.

This repository (`graymatter-web`) is a **completely independent Next.js frontend application** designed to present the GrayMatter architecture, capabilities, and learning loop truthfully, with zero backend coupling, no fake claims or metrics, and full compliance with Google/YouTube OAuth identity requirements.

---

## 2. Technology Stack

- **Framework**: Next.js 15 (App Router, Server & Client Components)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 (Custom GrayMatter graphite/near-black theme with global `container-custom` responsive padding)
- **Animation**: Framer Motion 12 (Canvas intelligence particle field with `prefers-reduced-motion` compliance)
- **Icons**: Lucide React
- **Typography**: Geist Sans & Geist Mono (via `next/font/google`)

---

## 3. Project Structure

```
graymatter-web/
├── app/
│   ├── contact/
│   │   └── page.tsx           # Contact page (configurable email)
│   ├── privacy/
│   │   └── page.tsx           # Production-ready Privacy Policy (Google API compliant)
│   ├── terms/
│   │   └── page.tsx           # Production-ready Terms of Service
│   ├── globals.css            # Tailwind theme tokens & container-custom styles
│   ├── layout.tsx             # Root layout with comprehensive SEO metadata
│   ├── page.tsx               # Homepage assembling all system sections
│   ├── robots.ts              # Dynamic robots.txt generation
│   └── sitemap.ts             # Dynamic sitemap.xml generation
├── components/
│   ├── agent-system.tsx       # Specialized intelligence agent clusters & orchestrator
│   ├── architecture.tsx       # System topology and block diagram
│   ├── capabilities.tsx       # The 14 creator stack capabilities
│   ├── cta-final.tsx          # Final cinematic call-to-action
│   ├── current-state.tsx      # Truthful product evolution status (3 layers)
│   ├── epistemic-rigor.tsx    # Observed / Calculated / Hypothesis / Insufficient Data
│   ├── footer.tsx             # Footer with disclaimers & legal links
│   ├── graymatter-brain.tsx   # GrayMatter Brain intelligence flow schematic
│   ├── hero.tsx               # Canvas particle intelligence field & typography
│   ├── intelligence-pipeline.tsx # 12-stage continuous content loop across 3 phases
│   ├── navbar.tsx             # Responsive sticky navbar with accessible mobile drawer
│   ├── problem-positioning.tsx# Disconnected point tools vs. connected system
│   ├── product-principles.tsx # 6 core design & anti-spam principles
│   └── youtube-section.tsx    # OAuth 2.0 telemetry flow & read-only permissions
├── public/
│   ├── favicon.svg            # Minimal vector favicon
│   └── site.webmanifest       # Web application manifest
├── .env.example               # Safe environment variable template
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── README.md                  # Project documentation
└── tsconfig.json              # TypeScript configuration
```

---

## 4. Local Development Setup

### Prerequisites
- Node.js 18.18+ or 20+ (Node.js 24+ LTS supported)
- npm, pnpm, or yarn

### Installation

```bash
# Clone or navigate to the repository directory
cd graymatter-web

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 5. Environment Variables

Create a `.env.local` file from `.env.example`:

```bash
cp .env.example .env.local
```

### Supported Variables:

| Variable | Description | Default / Fallback |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL of the website for metadata, sitemaps, and Open Graph | `http://localhost:3000` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact and legal inquiry email address | `contact@example.com` |

> ⚠️ **Security Guarantee**: No API keys, OAuth secrets, database URLs, or backend credentials belong in or are used by this frontend repository.

---

## 6. Building & Linting

```bash
# Run ESLint check
npm run lint

# Build production bundle
npm run build

# Start production server locally
npm run start
```

---

## 7. How to Update Policies & Configuration

### Updating Privacy Policy
Edit [`app/privacy/page.tsx`](./app/privacy/page.tsx). It already includes accurate Google API Limited Use disclosures, OAuth token handling descriptions, and rights management.

### Updating Terms of Service
Edit [`app/terms/page.tsx`](./app/terms/page.tsx). Search for `[JURISDICTION — TO BE CONFIRMED]` to provide your legal jurisdiction before final production release.

### Updating Contact Information
Set the `NEXT_PUBLIC_CONTACT_EMAIL` environment variable in your production deployment settings (e.g. on Vercel) or edit the fallback in [`app/contact/page.tsx`](./app/contact/page.tsx).

---

## 8. Deployment to Vercel

1. Push this repository (`graymatter-web`) to GitHub / GitLab / Bitbucket.
2. Import the repository into [Vercel](https://vercel.com).
3. Set the Environment Variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-production-domain.com`
   - `NEXT_PUBLIC_CONTACT_EMAIL` = `your-contact-email@domain.com`
4. Click **Deploy**.

---

## 9. Legal & Attributions

- **GrayMatter AI** is an evolving software project.
- **YouTube** and the YouTube logo are trademarks of **Google LLC**.
- GrayMatter AI is not affiliated with or endorsed by Google LLC or YouTube.
