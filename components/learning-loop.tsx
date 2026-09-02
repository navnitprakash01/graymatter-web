"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Send,
  BarChart3,
  Search,
  Brain,
  TrendingUp,
  RefreshCw,
} from "lucide-react";

const cycleSteps = [
  {
    num: "01",
    label: "CREATE",
    icon: Sparkles,
    desc: "Produce content informed by research evidence, hook optimizations, and visual planning.",
  },
  {
    num: "02",
    label: "PUBLISH",
    icon: Send,
    desc: "Release content to the channel with synchronized titles, thumbnails, and metadata.",
  },
  {
    num: "03",
    label: "MEASURE",
    icon: BarChart3,
    desc: "Ingest authorized YouTube Analytics data — view duration, CTR, drop-off timestamps, and reach.",
  },
  {
    num: "04",
    label: "ANALYZE",
    icon: Search,
    desc: "Isolate pattern correlations across formats, narrative structures, topics, and hooks.",
  },
  {
    num: "05",
    label: "LEARN",
    icon: Brain,
    desc: "Translate empirical telemetry into structured evidence stored in the GrayMatter Brain.",
  },
  {
    num: "06",
    label: "IMPROVE",
    icon: TrendingUp,
    desc: "Calibrate future topic opportunities and scripting parameters with accumulated evidence.",
    accent: true,
  },
];

export default function LearningLoop() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="learning"
      className="py-24 sm:py-32 lg:py-40 bg-[#0e0e12] border-t border-[#18181f] relative overflow-hidden"
      aria-labelledby="learning-heading"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Loop Visualization Progression */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-[#22222b] bg-[#121217] relative shadow-[0_0_40px_rgba(0,0,0,0.5)] order-2 lg:order-1"
            aria-label="The learning loop cycle diagram"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1f1f28]">
              <div className="flex items-center gap-2">
                <RefreshCw size={14} className="text-[#f5a623] animate-spin" style={{ animationDuration: "12s" }} />
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#f2f2f5]">
                  THE CONTINUOUS LEARNING LOOP
                </span>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-[#f5a623]/30 bg-[#f5a623]/10 text-[#f5a623]">
                ACTIVE CYCLE
              </span>
            </div>

            <div className="space-y-3">
              {cycleSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.label}
                    className={`p-3.5 rounded-xl border flex items-start gap-3.5 transition-colors ${
                      step.accent
                        ? "border-[#f5a623]/40 bg-[#1f160b]/70"
                        : "border-[#1f1f28] bg-[#18181f]/80"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        step.accent
                          ? "border-[#f5a623]/60 bg-[#f5a623]/20 text-[#f5a623]"
                          : "border-[#2e2e3a] bg-[#121217] text-[#4d9fff]"
                      }`}
                    >
                      <Icon size={14} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`text-xs font-mono font-bold uppercase tracking-wider ${
                            step.accent ? "text-[#f5a623]" : "text-[#f2f2f5]"
                          }`}
                        >
                          {step.num} · {step.label}
                        </span>
                        {step.accent && (
                          <span className="text-[9px] font-mono text-[#f5a623]">
                            ↺ RE-FEEDS CYCLE
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#9e9eaec] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-[#1f1f28] flex items-center justify-between text-[10px] font-mono text-[#646475]">
              <span>EMPIRICAL CALIBRATION</span>
              <span>HISTORICAL EVIDENCE ACCUMULATION</span>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Grounded Claims */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2e2e3a] bg-[#121217] text-[10px] font-mono tracking-[0.2em] uppercase text-[#4d9fff]">
                <span>[ 08 ] ADAPTIVE INTELLIGENCE</span>
              </div>
            </motion.div>

            <motion.h2
              id="learning-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.04] text-[#f2f2f5] mb-6"
            >
              THE SYSTEM GETS
              <br />
              BETTER BY LEARNING.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#9e9eaec] text-base leading-relaxed mb-6"
            >
              Every published video produces new evidence. Performance signals
              can be analyzed, transformed into patterns, and fed back into
              future content decisions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#9e9eaec] text-base leading-relaxed mb-8"
            >
              GrayMatter uses historical evidence and calculated signals to
              inform future decisions. It does not predict the algorithm or
              guarantee viral outcomes — it eliminates guesswork through
              rigorous empirical context.
            </motion.p>

            {/* Quote Block */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-5 rounded-xl border border-[#2e2e3a] bg-[#121217]"
            >
              <p className="text-xs sm:text-sm font-mono text-[#f2f2f5] leading-relaxed mb-2">
                &ldquo;Evidence accumulates. Context improves. Decisions become
                better informed over time.&rdquo;
              </p>
              <p className="text-[10px] font-mono text-[#646475] uppercase">
                <span>[ GrayMatter System Axiom ]</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
