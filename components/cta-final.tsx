"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CtaFinal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-32 sm:py-40 lg:py-48 bg-[#08080a] border-t border-[#18181f] relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background ambient spotlight */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[700px] h-[450px] rounded-full bg-[#4d9fff]/5 blur-[140px]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2e2e3a] bg-[#121217] text-[10px] font-mono tracking-[0.2em] uppercase text-[#4d9fff]">
              <span>[ CONCLUSION ] THE FUTURE OF CONTENT PRODUCTION</span>
            </div>
          </motion.div>

          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.96] text-[#f2f2f5] mb-8"
          >
            BUILD WITH
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2f2f5] via-[#c2dcff] to-[#4d9fff]">
              INTELLIGENCE.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#9e9eaec] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            GrayMatter is being built toward a future where content creation is
            not a collection of disconnected tasks, but a system that can
            observe, reason, create, measure, and learn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
          >
            <a
              href="#system"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.14em] uppercase bg-[#4d9fff] text-[#08080a] rounded-md hover:bg-[#6ab0ff] transition-all duration-200 shadow-[0_0_24px_rgba(77,159,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff]"
            >
              <span>Explore GrayMatter</span>
              <ArrowRight size={14} />
            </a>
            <a
              href="#architecture"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.14em] uppercase border border-[#2e2e3a] bg-[#121217] text-[#f2f2f5] rounded-md hover:border-[#4d9fff]/50 hover:bg-[#18181f] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff]"
            >
              <span>Read the Architecture</span>
              <ArrowUpRight size={14} className="text-[#9e9eaec]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
