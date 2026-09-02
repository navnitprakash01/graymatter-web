"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Calculator, HelpCircle, AlertCircle, ShieldAlert } from "lucide-react";

interface EpistemicLevel {
  label: string;
  category: string;
  icon: typeof Eye;
  color: string;
  bgColor: string;
  borderColor: string;
  definition: string;
  sampleTelemetry: string;
  systemBehavior: string;
}

const levels: EpistemicLevel[] = [
  {
    label: "OBSERVED",
    category: "EMPIRICAL FACT",
    icon: Eye,
    color: "#4d9fff",
    bgColor: "rgba(77, 159, 255, 0.08)",
    borderColor: "rgba(77, 159, 255, 0.3)",
    definition: "Directly verified and grounded in immutable source data.",
    sampleTelemetry:
      'Video #142 generated 48,200 views with 62.4% average retention at 0:30 marker in YouTube Analytics.',
    systemBehavior: "Treated as ground truth in channel knowledge graph.",
  },
  {
    label: "CALCULATED",
    category: "STATISTICAL DERIVATIVE",
    icon: Calculator,
    color: "#4d9fff",
    bgColor: "rgba(77, 159, 255, 0.08)",
    borderColor: "rgba(77, 159, 255, 0.3)",
    definition: "Derived deterministically from available data points using statistical formulas.",
    sampleTelemetry:
      'Topic cluster "AI Architecture" achieves 1.34x baseline watch time duration across 8 analyzed uploads.',
    systemBehavior: "Weighted by sample size and confidence interval.",
  },
  {
    label: "HYPOTHESIS",
    category: "INTERPRETIVE ESTIMATE",
    icon: HelpCircle,
    color: "#f5a623",
    bgColor: "rgba(245, 166, 35, 0.08)",
    borderColor: "rgba(245, 166, 35, 0.3)",
    definition: "An interpretive inference that requires experimental validation before adoption.",
    sampleTelemetry:
      "A fast-cut opening visual cadence may preserve initial retention for technical audience cohort.",
    systemBehavior: "Marked as candidate variant for user verification.",
  },
  {
    label: "INSUFFICIENT DATA",
    category: "EVIDENCE THRESHOLD UNMET",
    icon: AlertCircle,
    color: "#646475",
    bgColor: "rgba(100, 100, 117, 0.08)",
    borderColor: "rgba(100, 100, 117, 0.3)",
    definition: "Insufficient evidence to form a reliable statistical or qualitative conclusion.",
    sampleTelemetry:
      "Only one video exists in format cluster; cannot compute statistically meaningful baseline.",
    systemBehavior: "Conclusions intentionally withheld; flags need for data.",
  },
];

export default function EpistemicRigor() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 sm:py-32 lg:py-40 bg-[#08080a] border-t border-[#18181f] relative"
      aria-labelledby="epistemic-heading"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2e2e3a] bg-[#121217] text-[10px] font-mono tracking-[0.2em] uppercase text-[#f5a623]">
              <span>[ 09 ] EPISTEMIC METHODOLOGY</span>
            </div>
          </motion.div>

          <motion.h2
            id="epistemic-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.04] text-[#f2f2f5] mb-6"
          >
            KNOW WHAT THE
            <br />
            SYSTEM KNOWS.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#9e9eaec] text-base sm:text-lg leading-relaxed"
          >
            GrayMatter explicitly classifies the epistemic confidence of every
            signal, calculation, and recommendation. Heuristics and generated
            hypotheses are never misrepresented as observed facts.
          </motion.p>
        </div>

        {/* 4 Classification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {levels.map((lvl, idx) => {
            const Icon = lvl.icon;
            return (
              <motion.div
                key={lvl.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-xl border bg-[#121217] flex flex-col justify-between"
                style={{ borderColor: lvl.borderColor }}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1f1f28]">
                    <span
                      className="text-xs font-mono font-bold uppercase tracking-wider"
                      style={{ color: lvl.color }}
                    >
                      {lvl.label}
                    </span>
                    <Icon size={16} style={{ color: lvl.color }} />
                  </div>

                  {/* Category Tag */}
                  <p className="text-[10px] font-mono tracking-widest text-[#646475] uppercase mb-2">
                    {lvl.category}
                  </p>

                  {/* Definition */}
                  <p className="text-xs sm:text-sm text-[#f2f2f5] font-medium leading-relaxed mb-4">
                    {lvl.definition}
                  </p>

                  {/* Sample Telemetry */}
                  <div className="p-3 rounded-lg border border-[#1f1f28] bg-[#0e0e12] mb-4">
                    <p className="text-[9px] font-mono uppercase text-[#646475] mb-1">
                      <span>[ Example Telemetry ]</span>
                    </p>
                    <p className="text-xs text-[#9e9eaec] italic leading-relaxed">
                      &ldquo;{lvl.sampleTelemetry}&rdquo;
                    </p>
                  </div>
                </div>

                {/* System Rule Footnote */}
                <div className="pt-3 border-t border-[#1f1f28] flex items-center justify-between text-[10px] font-mono text-[#646475]">
                  <span>System Treatment:</span>
                  <span className="text-[#f2f2f5] truncate ml-1">{lvl.systemBehavior}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Epistemic Transparency Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 p-5 rounded-xl border border-[#22222b] bg-[#0e0e12] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <ShieldAlert size={18} className="text-[#4d9fff] flex-shrink-0" />
            <p className="text-xs text-[#9e9eaec] leading-relaxed">
              This epistemic framework prevents overconfidence and hallucination
              propagation across interconnected agents in the GrayMatter stack.
            </p>
          </div>
          <span className="text-[10px] font-mono px-3 py-1 rounded-full border border-[#2e2e3a] bg-[#121217] text-[#9e9eaec] flex-shrink-0">
            SCIENTIFIC RIGOR STANDARD
          </span>
        </motion.div>
      </div>
    </section>
  );
}
