"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  Search,
  BarChart3,
  Cpu,
  Layers,
  Sparkles,
  RefreshCw,
  Eye,
  Calculator,
  HelpCircle,
  AlertCircle,
  ArrowDown,
} from "lucide-react";

const inputStreams = [
  {
    icon: Activity,
    label: "CHANNEL SIGNALS",
    telemetry: "Cadence, topic clusters, subscriber retention curves",
    status: "SYNCED",
  },
  {
    icon: Search,
    label: "RESEARCH SIGNALS",
    telemetry: "Competitor benchmarks, trend signals, evidence corpus",
    status: "EVALUATED",
  },
  {
    icon: BarChart3,
    label: "PERFORMANCE DATA",
    telemetry: "YouTube Analytics CTR, watch time, drop-off markers",
    status: "INGESTING",
  },
];

const epistemicBadges = [
  {
    label: "OBSERVED",
    icon: Eye,
    desc: "Directly verified from empirical source data (e.g., YouTube Analytics)",
    color: "#4d9fff",
  },
  {
    label: "CALCULATED",
    icon: Calculator,
    desc: "Derived via mathematical or statistical modeling across data points",
    color: "#4d9fff",
  },
  {
    label: "HYPOTHESIS",
    icon: HelpCircle,
    desc: "Structured interpretation requiring experimental validation",
    color: "#f5a623",
  },
  {
    label: "INSUFFICIENT DATA",
    icon: AlertCircle,
    desc: "Evidence threshold unmet; conclusions intentionally withheld",
    color: "#646475",
  },
];

export default function GraymatterBrain() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="brain"
      className="py-24 sm:py-32 lg:py-40 bg-[#08080a] border-t border-[#18181f] relative overflow-hidden"
      aria-labelledby="brain-heading"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2e2e3a] bg-[#121217] text-[10px] font-mono tracking-[0.2em] uppercase text-[#4d9fff]">
              <span>[ 03 ] CORE INTELLIGENCE LAYER</span>
            </div>
          </motion.div>

          <motion.h2
            id="brain-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.04] text-[#f2f2f5] mb-6"
          >
            THE GRAYMATTER BRAIN.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#9e9eaec] text-base sm:text-lg leading-relaxed"
          >
            The Brain is the contextual intelligence layer that turns accumulated
            channel history, research corpus, and performance signals into
            structured context for downstream decisions. It does not merely
            generate output — it reasons with epistemic discipline.
          </motion.p>
        </div>

        {/* Central Architecture Schematic Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-2xl border border-[#22222b] bg-[#0e0e12]/80 p-6 sm:p-10 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Ambient center grid */}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#14141c_1px,transparent_1px),linear-gradient(to_bottom,#14141c_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            {/* Layer 1: Ingested Signal Streams */}
            <div className="w-full mb-8">
              <p className="text-center text-[10px] font-mono tracking-[0.2em] uppercase text-[#646475] mb-4">
                [ STAGE I // MULTI-MODAL SIGNAL INGESTION ]
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {inputStreams.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-4 rounded-xl border border-[#1f1f28] bg-[#121217]/90 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon size={14} className="text-[#4d9fff]" />
                          <span className="text-xs font-mono font-bold text-[#f2f2f5]">
                            {item.label}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-[#4d9fff]/30 bg-[#4d9fff]/10 text-[#4d9fff]">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#9e9eaec] leading-relaxed">
                        {item.telemetry}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Signal Flow Downward Traces */}
            <div className="flex flex-col items-center my-1 text-[#4d9fff]/60" aria-hidden="true">
              <div className="w-px h-8 bg-gradient-to-b from-[#4d9fff]/60 via-[#4d9fff]/30 to-[#4d9fff]/60" />
              <ArrowDown size={14} className="text-[#4d9fff]" />
            </div>

            {/* Layer 2: Central GrayMatter Brain Core */}
            <div className="w-full max-w-3xl my-6 p-6 sm:p-8 rounded-2xl border border-[#4d9fff]/40 bg-[#0e1626]/90 relative overflow-hidden shadow-[0_0_36px_rgba(77,159,255,0.1)]">
              {/* Top Core Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-[#1f2e4a] gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#4d9fff]/20 border border-[#4d9fff]/40 text-[#4d9fff]">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-mono font-bold tracking-wider text-[#f2f2f5] uppercase">
                      GRAYMATTER BRAIN // CONTEXT & REASONING CORE
                    </h3>
                    <p className="text-xs text-[#9e9eaec]">
                      Synthesizes signals into calibrated contextual memory
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4d9fff]/30 bg-[#4d9fff]/10 text-[10px] font-mono text-[#4d9fff]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4d9fff] animate-pulse" />
                  <span>ACTIVE REASONING</span>
                </div>
              </div>

              {/* Epistemic Classification Grid Inside the Brain */}
              <div>
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#9e9eaec] mb-3">
                  EPISTEMIC RIGOR CLASSIFIER:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {epistemicBadges.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <div
                        key={badge.label}
                        className="p-3 rounded-lg border border-[#1f2e4a] bg-[#121c2e]/80 flex items-start gap-2.5"
                      >
                        <Icon
                          size={14}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: badge.color }}
                        />
                        <div>
                          <p
                            className="text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5"
                            style={{ color: badge.color }}
                          >
                            {badge.label}
                          </p>
                          <p className="text-[11px] text-[#9e9eaec] leading-relaxed">
                            {badge.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Signal Flow Downward Traces */}
            <div className="flex flex-col items-center my-1 text-[#4d9fff]/60" aria-hidden="true">
              <div className="w-px h-8 bg-gradient-to-b from-[#4d9fff]/60 via-[#4d9fff]/30 to-[#4d9fff]/60" />
              <ArrowDown size={14} className="text-[#4d9fff]" />
            </div>

            {/* Layer 3: Structured Downstream Decisions & Production */}
            <div className="w-full my-4">
              <p className="text-center text-[10px] font-mono tracking-[0.2em] uppercase text-[#646475] mb-4">
                [ STAGE II // STRUCTURED CONTENT DECISIONS & PRODUCTION ]
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-[#1f1f28] bg-[#121217]/90">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers size={15} className="text-[#4d9fff]" />
                    <h4 className="text-xs font-mono font-bold uppercase text-[#f2f2f5]">
                      STRUCTURED DECISIONS
                    </h4>
                  </div>
                  <p className="text-xs text-[#9e9eaec] leading-relaxed">
                    Topic opportunities, angle positioning, and hook variants
                    ranked by calibrated evidence weight.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-[#1f1f28] bg-[#121217]/90">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={15} className="text-[#c2dcff]" />
                    <h4 className="text-xs font-mono font-bold uppercase text-[#f2f2f5]">
                      CREATIVE PRODUCTION & PACKAGING
                    </h4>
                  </div>
                  <p className="text-xs text-[#9e9eaec] leading-relaxed">
                    Script generation with claim citations, visual sequencing,
                    voice narration, and title/thumbnail packaging.
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 4: Performance Feedback Loop Back */}
            <div className="w-full mt-6 pt-6 border-t border-[#1f1f28] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#f5a623]/10 border border-[#f5a623]/30 text-[#f5a623]">
                  <RefreshCw size={16} />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-[#f5a623] uppercase">
                    STAGE III: CONTINUOUS FEEDBACK LOOP
                  </p>
                  <p className="text-xs text-[#9e9eaec]">
                    Published performance metrics feed back into the Brain to
                    calibrate future recommendations.
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono px-3 py-1 rounded-full border border-[#f5a623]/30 bg-[#f5a623]/10 text-[#f5a623]">
                ↺ EVIDENCE RE-INTEGRATED
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
