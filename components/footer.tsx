import Link from "next/link";

const navSections = [
  { href: "#system", label: "System" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#architecture", label: "Architecture" },
  { href: "#learning", label: "Learning" },
  { href: "#youtube", label: "YouTube" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/contact", label: "Contact & Inquiries" },
];

export default function Footer() {
  return (
    <footer className="bg-[#08080a] border-t border-[#18181f] py-16 sm:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff] rounded"
              aria-label="GrayMatter AI — Home"
            >
              <span className="text-[#f2f2f5] font-bold tracking-[0.14em] text-sm uppercase group-hover:text-white transition-colors">
                GRAYMATTER
              </span>
              <span className="px-1.5 py-0.5 rounded border border-[#4d9fff]/30 bg-[#4d9fff]/10 text-[#4d9fff] font-mono font-medium tracking-widest text-[9px] uppercase">
                AI
              </span>
            </Link>
            <p className="text-[#9e9eaec] text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Intelligence infrastructure for creators. Connecting channel signals,
              research, strategy, scripting, production, and continuous performance learning.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22222b] bg-[#121217] text-[10px] font-mono text-[#646475]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4d9fff]" />
              <span>STATUS: IN ACTIVE DEVELOPMENT</span>
            </div>
          </div>

          {/* System Navigation Links */}
          <div className="md:col-span-3">
            <p className="text-[#646475] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
              <span>[ ARCHITECTURE ]</span>
            </p>
            <ul className="space-y-2.5">
              {navSections.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs font-mono text-[#9e9eaec] hover:text-[#f2f2f5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff] rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policy Links */}
          <div className="md:col-span-4">
            <p className="text-[#646475] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
              <span>[ LEGAL & COMPLIANCE ]</span>
            </p>
            <ul className="space-y-2.5 mb-6">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs font-mono text-[#9e9eaec] hover:text-[#f2f2f5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff] rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-[#646475] leading-relaxed">
              Not affiliated with or endorsed by Google LLC or YouTube. YouTube
              is a registered trademark of Google LLC.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#18181f] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#646475]">
          <p>&copy; 2026 GrayMatter AI. All rights reserved.</p>
          <p>Intelligence Platform Specification / v0.1.0</p>
        </div>
      </div>
    </footer>
  );
}
