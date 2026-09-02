import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "GrayMatter AI Terms of Service — acceptable use, limitations, and user responsibilities.",
};

const LAST_UPDATED = "September 2026";
const JURISDICTION_PLACEHOLDER = "[JURISDICTION — TO BE CONFIRMED UPON PRODUCTION RELEASE]";

export default function TermsPage() {
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
          <div className="pb-8 mb-10 border-b border-[#18181f]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2e2e3a] bg-[#121217] text-[10px] font-mono tracking-[0.2em] uppercase text-[#4d9fff] mb-4">
              <FileText size={12} />
              <span>LEGAL TERMS // OPERATING AGREEMENT</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#f2f2f5] mb-3">
              Terms of Service
            </h1>
            <p className="text-xs font-mono text-[#646475]">
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          {/* Legal Notice */}
          <div className="mb-10 p-4 rounded-xl border border-[#f5a623]/30 bg-[#1f160b]/60 flex items-start gap-3">
            <AlertTriangle size={18} className="text-[#f5a623] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#f2f2f5] leading-relaxed">
              <strong>Notice:</strong> Sections marked with{" "}
              <code className="text-[#f5a623] bg-[#121217] px-1 py-0.5 rounded border border-[#2e2e3a]">
                {JURISDICTION_PLACEHOLDER}
              </code>{" "}
              represent legal jurisdiction placeholders that will be formalized upon commercial deployment.
            </p>
          </div>

          <div className="space-y-12 text-[#9e9eaec] text-sm sm:text-base leading-relaxed">
            {/* 1. About */}
            <section aria-labelledby="about">
              <h2
                id="about"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">01.</span> Agreement to Terms
              </h2>
              <p>
                By accessing or utilizing GrayMatter AI, you agree to be bound by
                these Terms of Service. If you do not agree to these terms, do
                not access or use the platform.
              </p>
              <p className="mt-3">
                GrayMatter AI is an evolving software system in active
                development. Features, capabilities, and availability are subject
                to continuous iteration.
              </p>
            </section>

            {/* 2. Acceptable Use */}
            <section aria-labelledby="acceptable-use">
              <h2
                id="acceptable-use"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">02.</span> Acceptable Use Policy
              </h2>
              <p className="mb-3">
                You agree to use GrayMatter AI solely for lawful content creation
                and channel intelligence purposes. You agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Generate abusive, defamatory, deceptive, fraudulent, or harmful content.</li>
                <li>Operate the system to produce mass-scale spam, synthetic spam networks, or derivative content mills.</li>
                <li>Violate YouTube&apos;s Terms of Service, Community Guidelines, or API Services User Data Policies.</li>
                <li>Attempt to reverse engineer, decompile, or extract proprietary system prompts or agent logic.</li>
                <li>Interfere with or disrupt the integrity or security of GrayMatter or connected third-party APIs.</li>
              </ul>
            </section>

            {/* 3. User Responsibility & Content Ownership */}
            <section aria-labelledby="responsibility">
              <h2
                id="responsibility"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">03.</span> Creator Responsibility & Content Ownership
              </h2>
              <p className="mb-3">
                You retain all rights to the creative concepts, input scripts,
                and media you provide to the platform.
              </p>
              <p>
                You are solely responsible for reviewing, fact-checking, and
                validating all AI-generated scripts, titles, thumbnails, and
                media before publishing them to public distribution channels.
              </p>
            </section>

            {/* 4. AI Limitations & Epistemic Disclaimers */}
            <section aria-labelledby="ai-limitations">
              <h2
                id="ai-limitations"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">04.</span> AI Limitations & No Performance Guarantees
              </h2>
              <p className="mb-3">
                GrayMatter utilizes artificial intelligence models that may
                produce inaccuracies, heuristic approximations, or hallucinations.
                The platform does not guarantee algorithmic distribution outcomes,
                view counts, revenue targets, or viral reach.
              </p>
              <p>
                Recommendations provided by GrayMatter represent statistical and
                qualitative hypotheses informed by historical data, not
                guaranteed predictions.
              </p>
            </section>

            {/* 5. Third-Party Dependencies */}
            <section aria-labelledby="third-parties">
              <h2
                id="third-parties"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">05.</span> Third-Party Service Dependencies
              </h2>
              <p className="mb-3">
                GrayMatter interfaces with YouTube Data APIs (Google LLC) and
                third-party media generation APIs. Platform functionality depends
                upon the continued availability, rate limits, and policies of
                these external providers.
              </p>
              <p>
                GrayMatter is an independent project and is not affiliated with,
                sponsored by, or endorsed by Google LLC or YouTube.
              </p>
            </section>

            {/* 6. Limitation of Liability */}
            <section aria-labelledby="liability">
              <h2
                id="liability"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">06.</span> Limitation of Liability
              </h2>
              <p className="mb-3">
                To the maximum extent permitted by applicable law, GrayMatter AI
                is provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis without warranties of any kind.
              </p>
              <p>
                We shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of or
                inability to use the platform.
              </p>
            </section>

            {/* 7. Governing Law */}
            <section aria-labelledby="governing-law">
              <h2
                id="governing-law"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">07.</span> Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with
                the laws of {JURISDICTION_PLACEHOLDER}.
              </p>
            </section>

            {/* 8. Contact */}
            <section aria-labelledby="contact">
              <h2
                id="contact"
                className="text-lg sm:text-xl font-bold font-mono uppercase text-[#f2f2f5] mb-4 flex items-center gap-2"
              >
                <span className="text-[#4d9fff]">08.</span> Inquiries
              </h2>
              <p>
                For questions regarding these Terms of Service, contact:{" "}
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
              <Link href="/privacy" className="hover:text-[#f2f2f5]">
                Privacy Policy
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
