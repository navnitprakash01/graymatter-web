import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MessageSquare, Shield, Terminal } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact GrayMatter AI.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#08080a] text-[#f2f2f5] flex flex-col">
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
      <main className="container-custom flex-1 flex items-center justify-center py-20 sm:py-28">
        <div className="max-w-2xl w-full mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2e2e3a] bg-[#121217] text-[10px] font-mono tracking-[0.2em] uppercase text-[#4d9fff] mb-6">
            <Terminal size={12} />
            <span>INQUIRY CHANNELS // DIRECT CONTACT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-[-0.03em] text-[#f2f2f5] mb-6 leading-tight">
            CONTACT
            <br />
            GRAYMATTER.
          </h1>

          <p className="text-[#9e9eaec] text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-10">
            GrayMatter AI is currently in development. For research inquiries,
            architecture feedback, or privacy requests, contact us directly.
          </p>

          {/* Primary Contact Email Pill */}
          <div className="mb-12">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-[#2e2e3a] bg-[#121217] hover:border-[#4d9fff]/50 hover:bg-[#18181f] transition-all duration-200 shadow-sm hover:shadow-[0_0_24px_rgba(77,159,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff]"
              aria-label={`Email ${siteConfig.contactEmail}`}
            >
              <div className="p-2 rounded-lg bg-[#18181f] group-hover:bg-[#4d9fff]/20 text-[#4d9fff] transition-colors">
                <Mail size={18} />
              </div>
              <span className="text-sm sm:text-base font-mono font-medium text-[#f2f2f5]">
                {siteConfig.contactEmail}
              </span>
            </a>
          </div>

          {/* Contact Areas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-12">
            <div className="p-5 rounded-xl border border-[#22222b] bg-[#121217]">
              <div className="flex items-center gap-2 mb-2 text-[#4d9fff]">
                <MessageSquare size={14} />
                <h2 className="text-xs font-mono font-bold uppercase text-[#f2f2f5]">
                  General Inquiries
                </h2>
              </div>
              <p className="text-xs text-[#9e9eaec] leading-relaxed">
                Platform scope, roadmap questions, and technical collaboration.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#22222b] bg-[#121217]">
              <div className="flex items-center gap-2 mb-2 text-[#4d9fff]">
                <Shield size={14} />
                <h2 className="text-xs font-mono font-bold uppercase text-[#f2f2f5]">
                  Privacy & Data
                </h2>
              </div>
              <p className="text-xs text-[#9e9eaec] leading-relaxed">
                OAuth permission inquiries, data deletion, and policy requests.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#22222b] bg-[#121217]">
              <div className="flex items-center gap-2 mb-2 text-[#4d9fff]">
                <Terminal size={14} />
                <h2 className="text-xs font-mono font-bold uppercase text-[#f2f2f5]">
                  Technical Feedback
                </h2>
              </div>
              <p className="text-xs text-[#9e9eaec] leading-relaxed">
                Architecture evaluations, API feedback, and bug reports.
              </p>
            </div>
          </div>

          {/* Footnote Disclosures */}
          <p className="text-xs font-mono text-[#646475]">
            Not affiliated with or endorsed by Google LLC or YouTube.
          </p>
        </div>
      </main>
    </div>
  );
}
