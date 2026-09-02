"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Layers, RefreshCw } from "lucide-react";

export default function CurrentState() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 lg:py-32 bg-[#08080a] border-t border-[#18181f] relative"
      aria-labelledby="state-heading"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#f5a623]/30 bg-[#f5a623]/10 text-[#f5a623] text-[10px] font-mono tracking-[0.2em] uppercase font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse" />
              <span>CURRENTLY EVOLVING // SYSTEM ROADMAP</span>
            </div>

            <h2
              id="state-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.08] text-[#f2f2f5] mb-6"
            >
              AN EVOLVING INTELLIGENCE PLATFORM.
            </h2>

            <p className="text-[#9e9eaec] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              GrayMatter is being built incrementally as an intelligence and
              production system, with research, creation, media generation,
              rendering, packaging, and performance-learning capabilities being
              developed as interconnected layers.
            </p>

            {/* 3 Layer Status Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-5 bg-[#121217] border border-[#22222b] rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-1.5 rounded bg-[#18181f] text-[#4d9fff]">
                      <Cpu size={15} />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border border-[#4d9fff]/30 bg-[#4d9fff]/10 text-[#4d9fff]">
                      ACTIVE
                    </span>
                  </div>
                  <h3 className="text-xs font-mono font-bold text-[#f2f2f5] uppercase mb-1">
                    Intelligence Layer
                  </h3>
                  <p className="text-xs text-[#9e9eaec] leading-relaxed">
                    Channel analysis, topic opportunity scoring, research
                    corpus, and GrayMatter Brain architecture.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1f1f28] text-[9px] font-mono text-[#646475]">
                  CORE REASONING ACTIVE
                </div>
              </div>

              <div className="p-5 bg-[#121217] border border-[#22222b] rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-1.5 rounded bg-[#18181f] text-[#c2dcff]">
                      <Layers size={15} />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border border-[#4d9fff]/30 bg-[#4d9fff]/10 text-[#4d9fff]">
                      ACTIVE
                    </span>
                  </div>
                  <h3 className="text-xs font-mono font-bold text-[#f2f2f5] uppercase mb-1">
                    Production Layer
                  </h3>
                  <p className="text-xs text-[#9e9eaec] leading-relaxed">
                    Script generation with citations, visual planning, voice
                    synthesis, and FFmpeg video timeline rendering.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1f1f28] text-[9px] font-mono text-[#646475]">
                  PIPELINE CONNECTED
                </div>
              </div>

              <div className="p-5 bg-[#121217] border border-[#22222b] rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-1.5 rounded bg-[#18181f] text-[#f5a623]">
                      <RefreshCw size={15} />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border border-[#f5a623]/30 bg-[#f5a623]/10 text-[#f5a623]">
                      IN DEVELOPMENT
                    </span>
                  </div>
                  <h3 className="text-xs font-mono font-bold text-[#f2f2f5] uppercase mb-1">
                    Learning Layer
                  </h3>
                  <p className="text-xs text-[#9e9eaec] leading-relaxed">
                    YouTube Analytics API performance ingestion and automated
                    feedback calibration loops.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1f1f28] text-[9px] font-mono text-[#646475]">
                  INTEGRATION REFINEMENT
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
