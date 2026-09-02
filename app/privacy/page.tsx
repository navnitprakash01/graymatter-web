import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "GrayMatter AI Privacy Policy — how we handle data, YouTube authorization, and your information.",
};

const LAST_UPDATED = "September 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#08080a] text-[#f2f2f5]">
      {/* Header */}
      <header className="border-b border-[#18181f] py-5 sticky top-0 bg-[#08080a]/90 backdrop-blur-md z-40">
        <div className="container-custom flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff] rounded"
            aria-label="GrayMatter AI — Home"
          >
            <span className="text-[#f2f2f5] font-bold tracking-[0.14em] text-sm uppercase">
              GRAYMATTER
            </span>
            <span className="px-1.5 py-0.5 rounded border border-[#4d9fff]/30 bg-[#4d9fff]/10 text-[#4d9fff] font-mono font-medium tracking-widest text-[9px] uppercase">
              AI
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9e9eaec] hover:text-[#f2f2f5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff] rounded"
          >
            <ArrowLeft size={13} />
            <span>Return to System</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Page Heading */}
          <div className="pb-8 mb-12 border-b border-[#18181f]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2e2e3a] bg-[#121217] text-[10px] font-mono tracking-[0.2em] uppercase text-[#4d9fff] mb-4">
              <Shield size={12} />
              <span>LEGAL COMPLIANCE // PRIVACY DISCLOSURES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#f2f2f5] mb-3">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-[#646475]">
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          <div className="space-y-12 text-[#9e9eaec] text-sm sm:text-base leading-relaxed">
            {/* 1. What is GrayMatter */}
            <section aria-labelledby="what-is-graymatter">
              <h2
                id="what-is-graymatter"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">01.</span> What is GrayMatter AI
              </h2>
              <p className="mb-3">
                GrayMatter AI is an AI-powered content intelligence and production
                operating system designed for YouTube content creators. It provides
                capabilities including channel intelligence, research corpus
                synthesis, topic opportunity scoring, strategy formulation,
                script drafting with claim citations, visual planning, media
                generation, automated video timeline rendering, packaging,
                analytics ingestion, and performance feedback learning.
              </p>
              <p>
                GrayMatter AI is currently in active development. This Privacy
                Policy describes how data is processed when utilizing GrayMatter
                AI.
              </p>
            </section>

            {/* 2. Information We May Process */}
            <section aria-labelledby="information-processed">
              <h2
                id="information-processed"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">02.</span> Information We Process
              </h2>

              <h3 className="text-sm font-bold font-mono uppercase text-[#f2f2f5] mb-2">
                YouTube and Google Account Data
              </h3>
              <p className="mb-4">
                When you connect a YouTube channel to GrayMatter, we access data
                through the YouTube Data API v3 and YouTube Analytics API strictly
                subject to the permission scopes you explicitly authorize:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4 text-xs sm:text-sm">
                <li>
                  YouTube channel metadata (channel ID, channel name, description,
                  subscriber counts, video counts)
                </li>
                <li>
                  Video metadata (video IDs, titles, descriptions, tags, publish
                  dates, thumbnail URLs)
                </li>
                <li>
                  Video performance analytics (views, estimated watch time,
                  average view duration, click-through rates, and retention curves)
                </li>
                <li>
                  Channel-level aggregate analytics across designated reporting
                  periods
                </li>
              </ul>
              <div className="p-4 rounded-xl border border-[#4d9fff]/30 bg-[#121c2e]/70 mb-6">
                <p className="text-xs text-[#f2f2f5] font-mono leading-relaxed">
                  <strong className="text-[#4d9fff]">Strict Scope Limitation:</strong>{" "}
                  GrayMatter requests read-only permissions for its current
                  integration. GrayMatter does not publish to your channel, modify
                  existing videos, alter account settings, or perform mutations
                  beyond authorized read scopes.
                </p>
              </div>

              <h3 className="text-sm font-bold font-mono uppercase text-[#f2f2f5] mb-2">
                OAuth Credentials & Tokens
              </h3>
              <p className="mb-4">
                When you authorize GrayMatter via Google&apos;s OAuth 2.0 flow, we
                receive short-lived access tokens and refresh tokens. These tokens
                are used exclusively to perform authorized API calls on your behalf
                and are never exposed to unauthorized third parties.
              </p>

              <h3 className="text-sm font-bold font-mono uppercase text-[#f2f2f5] mb-2">
                User-Provided & Generated Content
              </h3>
              <p className="mb-4">
                Creative prompts, custom research notes, scripts, visual plans,
                and title concepts generated within GrayMatter are processed to
                provide the service and calibrate channel intelligence.
              </p>

              <h3 className="text-sm font-bold font-mono uppercase text-[#f2f2f5] mb-2">
                Operational Telemetry & Logs
              </h3>
              <p>
                System operations produce diagnostic logs (API response statuses,
                error traces, execution latencies) solely for reliability and
                debugging.
              </p>
            </section>

            {/* 3. Google API Services */}
            <section aria-labelledby="google-api">
              <h2
                id="google-api"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">03.</span> Google API Services User Data Policy
              </h2>
              <p className="mb-4">
                GrayMatter AI&apos;s use and transfer of information received from
                Google APIs to any other app will adhere to the{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4d9fff] hover:underline"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
              <p className="mb-4">
                Specifically, data obtained through YouTube or Google APIs is
                used exclusively to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4 text-xs sm:text-sm">
                <li>
                  Provide GrayMatter&apos;s channel intelligence, scripting, and
                  production recommendations directly to the authorizing user
                </li>
                <li>
                  Ingest empirical performance signals into the GrayMatter Brain
                  knowledge graph
                </li>
                <li>
                  Calibrate topic opportunity scoring and hook optimizations for the
                  authorizing creator
                </li>
              </ul>
              <div className="p-4 rounded-xl border border-[#f5a623]/30 bg-[#1f160b]/60">
                <p className="text-xs text-[#f2f2f5] font-mono leading-relaxed mb-2">
                  <strong className="text-[#f5a623]">Explicit Prohibitions:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#9e9eaec]">
                  <li>Google/YouTube data is never sold to third parties.</li>
                  <li>Google/YouTube data is never used for advertising or ad targeting.</li>
                  <li>Google/YouTube data is never used to train generalized third-party AI models.</li>
                </ul>
              </div>
            </section>

            {/* 4. Purpose of Processing */}
            <section aria-labelledby="purpose">
              <h2
                id="purpose"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">04.</span> Purpose of Processing
              </h2>
              <p className="mb-3">We process data strictly to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Operate the GrayMatter intelligence and production operating system</li>
                <li>Synthesize channel history into contextual memory for downstream agents</li>
                <li>Generate evidence-grounded scripts, visual sequences, and packaging</li>
                <li>Analyze performance data to refine future content recommendations</li>
                <li>Maintain system integrity, reliability, and security</li>
              </ul>
            </section>

            {/* 5. Local vs Deployed */}
            <section aria-labelledby="deployment">
              <h2
                id="deployment"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">05.</span> Local Development vs. Deployed Operation
              </h2>
              <p className="mb-3">
                When operated locally, GrayMatter processes data within your own
                local development environment, subject to your own machine&apos;s
                security controls.
              </p>
              <p>
                In hosted deployments, data processing occurs within isolated
                cloud infrastructure adhering to standard data protection
                protocols.
              </p>
            </section>

            {/* 6. Third-Party AI & API Providers */}
            <section aria-labelledby="third-parties">
              <h2
                id="third-parties"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">06.</span> Third-Party AI & API Providers
              </h2>
              <p className="mb-3">
                GrayMatter may utilize configured large language model APIs and
                generative media providers to perform creative synthesis. When
                interfacing with third-party providers:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Prompts and context are transmitted solely to fulfill the requested generation task.</li>
                <li>Third-party providers operate under their respective privacy terms.</li>
                <li>Raw Google/YouTube account credentials are never shared with AI model providers.</li>
              </ul>
            </section>

            {/* 7. Data Retention & Deletion Rights */}
            <section aria-labelledby="retention">
              <h2
                id="retention"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">07.</span> Data Retention & User Deletion Rights
              </h2>
              <p className="mb-3">
                Data is retained only as long as necessary to provide the service
                and maintain channel intelligence context.
              </p>
              <p className="mb-4">
                You may revoke GrayMatter&apos;s access to your YouTube data at any time
                via your{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4d9fff] hover:underline"
                >
                  Google Security Settings
                </a>
                .
              </p>
              <p>
                To request permanent deletion of your stored channel data or
                records, contact us at{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-[#4d9fff] hover:underline font-mono"
                >
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            </section>

            {/* 8. Contact Information */}
            <section aria-labelledby="contact">
              <h2
                id="contact"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">08.</span> Privacy Inquiries
              </h2>
              <p>
                For questions regarding this policy or data protection practices,
                reach out directly to:{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-[#4d9fff] hover:underline font-mono"
                >
                  {siteConfig.contactEmail}
                </a>
              </p>
            </section>
          </div>

          {/* Bottom navigation */}
          <div className="mt-16 pt-8 border-t border-[#18181f] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#646475]">
            <Link href="/" className="hover:text-[#f2f2f5]">
              ← Home
            </Link>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-[#f2f2f5]">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-[#f2f2f5]">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
