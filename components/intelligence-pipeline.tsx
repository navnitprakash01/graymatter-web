"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  TrendingUp,
  Target,
  Lightbulb,
  FileText,
  Image as ImageIcon,
  Mic,
  Film,
  Package,
  Send,
  BarChart3,
  Brain,
  ArrowRight,
} from "lucide-react";

interface PipelineStageData {
  num: string;
  id: string;
  name: string;
  phase: "INTELLIGENCE" | "PRODUCTION" | "FEEDBACK";
  icon: typeof Search;
  desc: string;
  output: string;
  isLoopBack?: boolean;
}

const stages: PipelineStageData[] = [
  {
    num: "01",
    id: "RESEARCH",
    name: "Research & Intelligence",
    phase: "INTELLIGENCE",
    icon: Search,
    desc: "Find evidence, trends, competitors, and signals.",
    output: "Verified evidence corpus & signal cluster",
  },
  {
    num: "02",
    id: "OPPORTUNITY",
    name: "Topic Opportunity Analysis",
    phase: "INTELLIGENCE",
    icon: TrendingUp,
    desc: "Identify topics worth investigating using multi-dimensional criteria.",
    output: "Ranked candidate opportunity list",
  },
  {
    num: "03",
    id: "STRATEGY",
    name: "Content Strategy",
    phase: "INTELLIGENCE",
    icon: Target,
    desc: "Turn evidence into a deliberate content plan.",
    output: "Angle, positioning, and narrative direction",
  },
  {
    num: "04",
    id: "HOOK",
    name: "Hook Optimization",
    phase: "INTELLIGENCE",
    icon: Lightbulb,
    desc: "Optimize the opening for attention and clarity.",
    output: "Multi-variant opening structures & retention intent",
  },
  {
    num: "05",
    id: "SCRIPT",
    name: "Script Intelligence",
    phase: "PRODUCTION",
    icon: FileText,
    desc: "Generate structured, evidence-aware narratives.",
    output: "Sectioned scripts with claim citations & visual cues",
  },
  {
    num: "06",
    id: "VISUALS",
    name: "Visual Planning",
    phase: "PRODUCTION",
    icon: ImageIcon,
    desc: "Translate the narrative into a visual plan.",
    output: "Scene-by-scene storyboard & asset manifests",
  },
  {
    num: "07",
    id: "AUDIO",
    name: "Audio & Narration",
    phase: "PRODUCTION",
    icon: Mic,
    desc: "Generate voice, music, and sound design.",
    output: "Narration tracks, audio mixes, and sound cues",
  },
  {
    num: "08",
    id: "VIDEO",
    name: "Video Assembly",
    phase: "PRODUCTION",
    icon: Film,
    desc: "Assemble the production timeline.",
    output: "FFmpeg-rendered video deliverables",
  },
  {
    num: "09",
    id: "PACKAGING",
    name: "Packaging Intelligence",
    phase: "PRODUCTION",
    icon: Package,
    desc: "Develop titles, thumbnails, metadata, and pairings.",
    output: "Title/thumbnail pairs & SEO-optimized metadata",
  },
  {
    num: "10",
    id: "PUBLISH",
    name: "Publishing Readiness",
    phase: "PRODUCTION",
    icon: Send,
    desc: "Review and prepare deliverables for distribution.",
    output: "Staged package ready for release",
  },
  {
    num: "11",
    id: "ANALYTICS",
    name: "Analytics Ingestion",
    phase: "FEEDBACK",
    icon: BarChart3,
    desc: "Measure actual performance.",
    output: "Empirical YouTube retention, CTR, & watch time",
  },
  {
    num: "12",
    id: "LEARNING",
    name: "Performance Learning",
    phase: "FEEDBACK",
    icon: Brain,
    desc: "Feed performance back into future decisions.",
    output: "Calibrated weights for next research cycle",
    isLoopBack: true,
  },
];

export default function IntelligencePipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section
      ref={ref}
      className="py-24 sm:py-32 lg:py-40 bg-[#0e0e12] border-t border-[#18181f] relative overflow-hidden"
      aria-labelledby="pipeline-heading"
    >
      {/* Background ambient accents */}
      <div
        className="absolute top-1/4 -left-40 w-96 h-96 bg-[#4d9fff]/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#f5a623]/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2e2e3a] bg-[#121217] text-[10px] font-mono tracking-[0.2em] uppercase text-[#4d9fff]">
              <span>[ 02 ] PIPELINE ARCHITECTURE</span>
            </div>
          </motion.div>

          <motion.h2
            id="pipeline-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.04] text-[#f2f2f5] mb-6"
          >
            ONE CONTINUOUS
            <br />
            CONTENT LOOP.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#9e9eaec] text-base sm:text-lg leading-relaxed"
          >
            Every stage in GrayMatter is connected. Evidence from research
            informs strategy. Strategy informs scripts and visuals. Performance
            signals feed back to calibrate future research.
          </motion.p>
        </div>

        {/* 12-Stage Visual Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStage === idx;
            const isIntelligence = stage.phase === "INTELLIGENCE";
            const isProduction = stage.phase === "PRODUCTION";

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                onClick={() => setActiveStage(idx)}
                className={`group relative p-5 sm:p-6 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "border-[#4d9fff]/60 bg-[#121824] shadow-[0_0_24px_rgba(77,159,255,0.12)]"
                    : "border-[#22222b] bg-[#121217] hover:border-[#2e2e3a] hover:bg-[#18181f]"
                }`}
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#646475] group-hover:text-[#9e9eaec]">
                        {stage.num}
                      </span>
                      <span
                        className={`text-[9px] font-mono tracking-widest px-2 py-0.5 rounded border uppercase ${
                          isIntelligence
                            ? "border-[#4d9fff]/30 bg-[#4d9fff]/10 text-[#4d9fff]"
                            : isProduction
                              ? "border-[#a0c0ff]/20 bg-[#a0c0ff]/5 text-[#c2dcff]"
                              : "border-[#f5a623]/30 bg-[#f5a623]/10 text-[#f5a623]"
                        }`}
                      >
                        {stage.phase}
                      </span>
                    </div>

                    <div
                      className={`p-2 rounded-md border transition-colors ${
                        isSelected
                          ? "border-[#4d9fff]/40 bg-[#4d9fff]/15 text-[#4d9fff]"
                          : "border-[#2e2e3a] bg-[#18181f] text-[#9e9eaec] group-hover:text-[#f2f2f5]"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Stage Headline */}
                  <h3 className="text-sm sm:text-base font-bold text-[#f2f2f5] tracking-tight mb-2">
                    {stage.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#9e9eaec] leading-relaxed mb-4">
                    {stage.desc}
                  </p>
                </div>

                {/* Structured Output Footnote */}
                <div className="pt-3 border-t border-[#1f1f28] flex items-center justify-between text-[11px] font-mono text-[#646475]">
                  <span className="truncate pr-2 text-[#646475]">
                    ↳ {stage.output}
                  </span>
                  {stage.isLoopBack && (
                    <span className="text-[#f5a623] flex-shrink-0 font-bold">
                      ↺ LOOPS BACK
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Progression Legend */}
        <div className="mt-10 p-5 rounded-xl border border-[#22222b] bg-[#121217]/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs font-mono text-[#9e9eaec]">
            <span className="w-2 h-2 rounded-full bg-[#4d9fff]" />
            <span>Phase 01: Intelligence</span>
            <span className="text-[#3b3b4a]">→</span>
            <span className="w-2 h-2 rounded-full bg-[#c2dcff]" />
            <span>Phase 02: Production</span>
            <span className="text-[#3b3b4a]">→</span>
            <span className="w-2 h-2 rounded-full bg-[#f5a623]" />
            <span>Phase 03: Telemetry Loop</span>
          </div>

          <a
            href="#architecture"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4d9fff] hover:underline"
          >
            <span>View Architecture Specifications</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
