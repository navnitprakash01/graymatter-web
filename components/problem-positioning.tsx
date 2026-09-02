"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Unlink,
  Cpu,
  RefreshCw,
  Search,
  FileText,
  Image as ImageIcon,
  BarChart3,
} from "lucide-react";

const traditionalTools = [
  {
    icon: Search,
    name: "Research Tool",
    task: "Generates isolated topic ideas or search queries",
    problem: "Context lost immediately upon export",
  },
  {
    icon: FileText,
    name: "Scripting Tool",
    task: "Drafts text without visual or pacing metadata",
    problem: "No connection to visual plan or citations",
  },
  {
    icon: ImageIcon,
    name: "Thumbnail / Asset Tool",
    task: "Designs visuals disconnected from script narrative",
    problem: "Packaging created in isolation from content intent",
  },
  {
    icon: BarChart3,
    name: "Analytics Dashboard",
    task: "Displays trailing metrics and retention graphs",
    problem: "Data stays in the past — never informs the next script",
  },
];

const graymatterFlow = [
  {
    step: "01",
    label: "RESEARCH & SIGNALS",
    desc: "Channel history, trend evidence, and competitor signals collected into structured memory.",
  },
  {
    step: "02",
    label: "TOPIC & STRATEGY",
    desc: "Opportunities scored across multi-dimensional criteria; direction locked with context.",
  },
  {
    step: "03",
    label: "SCRIPT & VISUAL INTENT",
    desc: "Narratives drafted with synchronized visual sequences, hook optimizations, and claim citations.",
  },
  {
    step: "04",
    label: "PACKAGING & PRODUCTION",
    desc: "Titles, thumbnails, voice, and video assets rendered in alignment with narrative intent.",
  },
  {
    step: "05",
    label: "PERFORMANCE INGESTION",
    desc: "YouTube Analytics ingested directly into the channel intelligence model.",
  },
  {
    step: "06",
    label: "FEEDBACK LEARNING LOOP",
    desc: "Retention patterns and audience signals calibrated back into future content decisions.",
    isLoop: true,
  },
];

export default function ProblemPositioning() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="system"
      className="py-24 sm:py-32 lg:py-40 bg-[#08080a] border-t border-[#18181f] relative"
      aria-labelledby="problem-heading"
    >
      <div className="container-custom">
        {/* Section Header & Narrative */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2e2e3a] bg-[#121217] text-[10px] font-mono tracking-[0.2em] uppercase text-[#4d9fff]">
              <span>[ 01 ] ARCHITECTURAL PROBLEM</span>
            </div>
          </motion.div>

          <motion.h2
            id="problem-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.04] text-[#f2f2f5] mb-6"
          >
            CONTENT IS A SYSTEM.
            <br />
            <span className="text-[#646475]">
              MOST TOOLS TREAT IT AS A TASK.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#9e9eaec] text-base sm:text-lg leading-relaxed"
          >
            Creators operate across fragmented point solutions for research,
            ideas, scripts, visuals, packaging, and analytics. Each tool creates
            an isolated output. None understand the relationships between those
            decisions.
          </motion.p>
        </div>

        {/* 2-Column Comparison Grid: Fragmented vs. Connected System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Traditional Workflow (Muted, Fragmented) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl border border-[#22222b] bg-[#0e0e12]/60"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#1f1f28]">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-[#18181f] border border-[#2e2e3a]">
                    <Unlink size={15} className="text-[#646475]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold tracking-[0.14em] uppercase text-[#9e9eaec]">
                      TRADITIONAL WORKFLOW
                    </h3>
                    <p className="text-[10px] font-mono text-[#646475]">
                      Disconnected Point Tools
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded border border-[#2e2e3a] bg-[#18181f] text-[9px] font-mono uppercase tracking-widest text-[#646475]">
                  SILOED
                </span>
              </div>

              {/* Fragmented Tool Stack */}
              <div className="space-y-3">
                {traditionalTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      className="p-3.5 rounded-lg border border-[#1f1f28] bg-[#121217]/60"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <Icon size={14} className="text-[#646475]" />
                        <span className="text-xs font-mono font-medium text-[#f2f2f5]">
                          {tool.name}
                        </span>
                      </div>
                      <p className="text-xs text-[#9e9eaec] mb-1">
                        {tool.task}
                      </p>
                      <p className="text-[11px] font-mono text-[#646475]">
                        ⚠️ {tool.problem}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom summary note */}
            <div className="mt-6 pt-5 border-t border-[#1f1f28] flex items-center justify-between text-[10px] font-mono text-[#646475]">
              <span>OUTCOME: ZERO FEEDBACK</span>
              <span>ISOLATED STEPS</span>
            </div>
          </motion.div>

          {/* Right Column: GrayMatter System (Dominant, Interconnected) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-xl border border-[#4d9fff]/30 bg-[#0e131d]/70 relative overflow-hidden flex flex-col justify-between shadow-[0_0_40px_rgba(77,159,255,0.06)]"
          >
            {/* Ambient subtle glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#4d9fff]/10 blur-[90px] pointer-events-none"
              aria-hidden="true"
            />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#1a2942]">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-[#4d9fff]/15 border border-[#4d9fff]/40">
                    <Cpu size={15} className="text-[#4d9fff]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold tracking-[0.14em] uppercase text-[#f2f2f5]">
                      GRAYMATTER INTELLIGENCE SYSTEM
                    </h3>
                    <p className="text-[10px] font-mono text-[#4d9fff]">
                      Continuous Context & Feedback Loop
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#4d9fff]/30 bg-[#4d9fff]/10 text-[9px] font-mono uppercase tracking-widest text-[#4d9fff]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4d9fff] animate-pulse" />
                  <span>INTEGRATED</span>
                </div>
              </div>

              {/* Connected Spine */}
              <div className="space-y-0 relative">
                {graymatterFlow.map((step, idx) => (
                  <div key={step.label} className="relative flex items-start gap-4">
                    {/* Vertical connector line & node */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-7 h-7 rounded-md border flex items-center justify-center font-mono text-[10px] font-bold z-10 transition-all ${
                          step.isLoop
                            ? "border-[#f5a623]/60 bg-[#f5a623]/15 text-[#f5a623]"
                            : "border-[#4d9fff]/40 bg-[#121a2c] text-[#4d9fff]"
                        }`}
                      >
                        {step.isLoop ? (
                          <RefreshCw size={12} className="animate-spin" style={{ animationDuration: "10s" }} />
                        ) : (
                          step.step
                        )}
                      </div>
                      {idx < graymatterFlow.length - 1 && (
                        <div
                          className="w-px flex-1 bg-gradient-to-b from-[#4d9fff]/40 via-[#4d9fff]/20 to-[#4d9fff]/40 min-h-[32px] my-1"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Step details */}
                    <div className="flex-1 pb-5">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-xs font-mono font-bold tracking-wider uppercase ${
                            step.isLoop ? "text-[#f5a623]" : "text-[#f2f2f5]"
                          }`}
                        >
                          {step.label}
                        </span>
                        {step.isLoop && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded border border-[#f5a623]/40 bg-[#f5a623]/10 text-[#f5a623]">
                            ↺ RE-FEEDS RESEARCH
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#9e9eaec] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom highlight */}
            <div className="mt-4 pt-4 border-t border-[#1a2942] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] font-mono text-[#9e9eaec]">
              <span className="text-[#4d9fff]">
                ✓ Decisions connect across entire lifecycle
              </span>
              <span className="text-[#646475]">
                Accumulates evidence over time
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
