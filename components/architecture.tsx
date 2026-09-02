"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cpu,
  Brain,
  Bot,
  RefreshCw,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";

export default function ArchitectureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="architecture"
      className="py-24 sm:py-32 lg:py-40 bg-[#08080a] border-t border-[#18181f] relative overflow-hidden"
      aria-labelledby="architecture-heading"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Descriptive System Narrative */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2e2e3a] bg-[#121217] text-[10px] font-mono tracking-[0.2em] uppercase text-[#4d9fff]">
                <span>[ 05 ] ARCHITECTURAL FOUNDATION</span>
              </div>
            </motion.div>

            <motion.h2
              id="architecture-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.04] text-[#f2f2f5] mb-6"
            >
              BUILT AS A SYSTEM,
              <br />
              NOT A PROMPT.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#9e9eaec] text-base leading-relaxed mb-6"
            >
              GrayMatter is not a wrapper around a single chat prompt. It is an
              orchestrated operating system composed of specialized intelligence
              and production agents coordinated through structured context.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#9e9eaec] text-base leading-relaxed mb-8"
            >
              The Brain provides accumulated channel context to agents, ensuring
              that each decision is informed by empirical performance history
              rather than isolated generative guesses.
            </motion.p>

            {/* Key Architectural Tenets */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3"
            >
              {[
                "Strict Separation of Concerns Across Agent Roles",
                "Structured I/O Contracts — No Ambiguous Chat Trajectories",
                "Persistent Channel Memory Ingests Real YouTube Telemetry",
              ].map((tenet) => (
                <div key={tenet} className="flex items-start gap-2.5 text-xs text-[#f2f2f5]">
                  <CheckCircle2 size={15} className="text-[#4d9fff] flex-shrink-0 mt-0.5" />
                  <span>{tenet}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: High-Fidelity Architecture Block Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 rounded-2xl border border-[#22222b] bg-[#0e0e12] p-6 sm:p-8 relative shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            {/* Diagram Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1f1f28]">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#646475]">
                <span>[ TOPOLOGY ]</span>
              </span>
              <span className="text-[10px] font-mono text-[#4d9fff]">
                GRAYMATTER CORE
              </span>
            </div>

            <div className="space-y-4">
              {/* Level 1: GrayMatter Orchestration Core */}
              <div className="p-4 rounded-xl border border-[#4d9fff]/40 bg-[#121c2e]/90 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#4d9fff]/20 text-[#4d9fff]">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold text-[#f2f2f5] uppercase">
                      GRAYMATTER ORCHESTRATION LAYER
                    </h3>
                    <p className="text-[11px] text-[#9e9eaec]">
                      Coordinates agent execution, state management, & telemetry
                    </p>
                  </div>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-[#4d9fff]/30 bg-[#4d9fff]/10 text-[#4d9fff]">
                  PRIMARY
                </span>
              </div>

              {/* Connector Trace */}
              <div className="flex justify-center text-[#4d9fff]/60" aria-hidden="true">
                <ArrowDown size={14} />
              </div>

              {/* Level 2: Contextual Brain & Memory Engine */}
              <div className="p-4 rounded-xl border border-[#2e2e3a] bg-[#121217] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#18181f] text-[#4d9fff]">
                    <Brain size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold text-[#f2f2f5] uppercase">
                      THE GRAYMATTER BRAIN
                    </h3>
                    <p className="text-[11px] text-[#9e9eaec]">
                      Channel knowledge graph, evidence corpus, & epistemic classifier
                    </p>
                  </div>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-[#2e2e3a] bg-[#18181f] text-[#9e9eaec]">
                  CONTEXT
                </span>
              </div>

              {/* Connector Trace */}
              <div className="flex justify-center text-[#4d9fff]/60" aria-hidden="true">
                <ArrowDown size={14} />
              </div>

              {/* Level 3: Specialized Agent Fleet */}
              <div className="p-4 rounded-xl border border-[#2e2e3a] bg-[#121217]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Bot size={15} className="text-[#4d9fff]" />
                    <h3 className="text-xs font-mono font-bold text-[#f2f2f5] uppercase">
                      SPECIALIZED AGENT SYSTEM
                    </h3>
                  </div>
                  <span className="text-[9px] font-mono text-[#646475]">
                    COORDINATED WORKERS
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded border border-[#1f1f28] bg-[#0e0e12] text-center">
                    <p className="text-[10px] font-mono text-[#4d9fff] font-bold">
                      CONTENT
                    </p>
                    <p className="text-[9px] text-[#646475]">
                      Research · Script · Hook
                    </p>
                  </div>
                  <div className="p-2 rounded border border-[#1f1f28] bg-[#0e0e12] text-center">
                    <p className="text-[10px] font-mono text-[#c2dcff] font-bold">
                      MEDIA
                    </p>
                    <p className="text-[9px] text-[#646475]">
                      Visual · Audio · Render
                    </p>
                  </div>
                  <div className="p-2 rounded border border-[#1f1f28] bg-[#0e0e12] text-center">
                    <p className="text-[10px] font-mono text-[#f5a623] font-bold">
                      ANALYTICS
                    </p>
                    <p className="text-[9px] text-[#646475]">
                      YouTube Data · Learning
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector Trace */}
              <div className="flex justify-center text-[#4d9fff]/60" aria-hidden="true">
                <ArrowDown size={14} />
              </div>

              {/* Level 4: Performance Feedback Return Loop */}
              <div className="p-4 rounded-xl border border-[#f5a623]/30 bg-[#1f160b]/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#f5a623]/20 text-[#f5a623]">
                    <RefreshCw size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold text-[#f5a623] uppercase">
                      PERFORMANCE LEARNING LOOP
                    </h3>
                    <p className="text-[11px] text-[#9e9eaec]">
                      Calibrated retention telemetry loops back to refine future decisions
                    </p>
                  </div>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-[#f5a623]/40 bg-[#f5a623]/10 text-[#f5a623]">
                  ↺ CONTINUOUS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
