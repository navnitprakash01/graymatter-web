"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#system", label: "System" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#architecture", label: "Architecture" },
  { href: "#learning", label: "Learning" },
  { href: "#youtube", label: "YouTube" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#08080a]/90 backdrop-blur-md border-b border-[#22222b]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container-custom">
          <nav
            className="h-16 sm:h-18 flex items-center justify-between"
            aria-label="Main navigation"
          >
            {/* Wordmark */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff] rounded-md py-1 px-1.5 -ml-1.5 transition-colors"
              aria-label="GrayMatter AI — Home"
            >
              <span className="text-[#f2f2f5] font-bold tracking-[0.14em] text-sm uppercase group-hover:text-white transition-colors">
                GRAYMATTER
              </span>
              <span className="px-1.5 py-0.5 rounded border border-[#4d9fff]/30 bg-[#4d9fff]/10 text-[#4d9fff] font-mono font-medium tracking-widest text-[9px] uppercase">
                AI
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 rounded-md text-[#9e9eaec] hover:text-[#f2f2f5] hover:bg-[#18181f]/60 text-xs font-medium tracking-[0.12em] uppercase transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Right CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="px-3 py-1.5 text-xs font-medium tracking-[0.12em] uppercase text-[#9e9eaec] hover:text-[#f2f2f5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff] rounded-md"
              >
                About
              </Link>
              <a
                href="#system"
                className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs tracking-[0.12em] uppercase font-medium bg-[#121217] text-[#f2f2f5] border border-[#2e2e3a] hover:border-[#4d9fff]/60 hover:bg-[#18181f] rounded-md transition-all duration-200 shadow-sm hover:shadow-[0_0_16px_rgba(77,159,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff]"
              >
                <span>Explore GrayMatter</span>
                <ArrowUpRight
                  size={13}
                  className="text-[#4d9fff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#9e9eaec] hover:text-[#f2f2f5] hover:bg-[#18181f] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff]"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#08080a]/98 backdrop-blur-xl flex flex-col pt-20 pb-8 container-custom"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#22222b]">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#646475]">
                <span>[ Navigation Index ]</span>
              </span>
              <span className="text-[10px] font-mono text-[#4d9fff]">
                GRAYMATTER AI
              </span>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#f2f2f5] text-xl font-light tracking-[0.1em] uppercase py-2.5 px-3 rounded-lg hover:bg-[#18181f] hover:text-[#4d9fff] transition-all"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-[#f2f2f5] text-xl font-light tracking-[0.1em] uppercase py-2.5 px-3 rounded-lg hover:bg-[#18181f] hover:text-[#4d9fff] transition-all"
              >
                About
              </Link>
            </nav>

            <div className="mt-auto pt-8 border-t border-[#22222b] space-y-4">
              <a
                href="#system"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 text-center text-xs tracking-widest uppercase font-medium bg-[#4d9fff] text-[#08080a] font-semibold rounded-md hover:bg-[#6ab0ff] transition-all shadow-[0_0_20px_rgba(77,159,255,0.2)]"
              >
                <span>Explore GrayMatter</span>
                <ArrowUpRight size={14} />
              </a>
              <p className="text-center text-[#646475] text-[10px] tracking-[0.2em] uppercase font-mono">
                INTELLIGENCE SYSTEM / IN DEVELOPMENT
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
