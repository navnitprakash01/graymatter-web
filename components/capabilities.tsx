"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  TrendingUp,
  Crosshair,
  Search,
  Map,
  Lightbulb,
  FileText,
  Eye,
  Image as ImageIcon,
  Mic,
  Film,
  Package,
  BarChart3,
  Brain,
} from "lucide-react";

interface CapabilityItem {
  n: string;
  category: "INTELLIGENCE" | "PRODUCTION" | "FEEDBACK";
  title: string;
  desc: string;
  icon: typeof Activity;
}

const capabilities: CapabilityItem[] = [
  {
    n: "01",
    category: "INTELLIGENCE",
    title: "Channel Intelligence",
    desc: "Analyze channel-level patterns, historical performance signals, and audience retention baselines.",
    icon: Activity,
  },
  {
    n: "02",
    category: "INTELLIGENCE",
    title: "Trend Intelligence",
    desc: "Identify relevant emerging topics, search velocity shifts, and competitor content movements.",
    icon: TrendingUp,
  },
  {
    n: "03",
    category: "INTELLIGENCE",
    title: "Topic Opportunities",
    desc: "Score and prioritize candidate topics using multi-dimensional opportunity criteria.",
    icon: Crosshair,
  },
  {
    n: "04",
    category: "INTELLIGENCE",
    title: "Research Intelligence",
    desc: "Collect, structure, and evaluate factual research and evidentiary claims for content decisions.",
    icon: Search,
  },
  {
    n: "05",
    category: "INTELLIGENCE",
    title: "Content Strategy",
    desc: "Convert research and evidence into deliberate positioning, angle selection, and format plans.",
    icon: Map,
  },
  {
    n: "06",
    category: "INTELLIGENCE",
    title: "Hook Optimization",
    desc: "Evaluate, stress-test, and refine opening concepts for clarity, retention intent, and pacing.",
    icon: Lightbulb,
  },
  {
    n: "07",
    category: "PRODUCTION",
    title: "Script Intelligence",
    desc: "Generate structured scripts with explicit section breaks, visual intent, and cited claims.",
    icon: FileText,
  },
  {
    n: "08",
    category: "PRODUCTION",
    title: "Visual Planning",
    desc: "Translate narrative scripts into production-ready visual sequences, b-roll prompts, and cues.",
    icon: Eye,
  },
  {
    n: "09",
    category: "PRODUCTION",
    title: "Image Generation",
    desc: "Generate high-fidelity visual assets through configured generative media provider APIs.",
    icon: ImageIcon,
  },
  {
    n: "10",
    category: "PRODUCTION",
    title: "Voice & Audio",
    desc: "Generate narration tracks, voice styling, and synchronized audio cue manifests.",
    icon: Mic,
  },
  {
    n: "11",
    category: "PRODUCTION",
    title: "Video Rendering",
    desc: "Assemble video timelines and compositions using automated FFmpeg rendering pipelines.",
    icon: Film,
  },
  {
    n: "12",
    category: "PRODUCTION",
    title: "Packaging Intelligence",
    desc: "Generate title concepts, thumbnail compositions, pairings, and YouTube metadata packages.",
    icon: Package,
  },
  {
    n: "13",
    category: "FEEDBACK",
    title: "Analytics Ingestion",
    desc: "Ingest authorized YouTube Data API and YouTube Analytics metrics directly into system context.",
    icon: BarChart3,
  },
  {
    n: "14",
    category: "FEEDBACK",
    title: "Performance Learning",
    desc: "Mine empirical performance patterns and feed calibrated weights back into future content choices.",
    icon: Brain,
  },
];

export default function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="capabilities"
      className="py-24 sm:py-32 lg:py-40 bg-[#0e0e12] border-t border-[#18181f] relative"
      aria-labelledby="capabilities-heading"
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
              <span>[ 04 ] SYSTEM CAPABILITIES</span>
            </div>
          </motion.div>

          <motion.h2
            id="capabilities-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.04] text-[#f2f2f5] mb-6"
          >
            THE CREATOR STACK.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#9e9eaec] text-base sm:text-lg leading-relaxed"
          >
            Fourteen interconnected capability layers operating as a unified
            system — from channel signals to narrative scripts, automated media
            rendering, and performance learning.
          </motion.p>
        </div>

        {/* 14 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            const isIntelligence = cap.category === "INTELLIGENCE";
            const isFeedback = cap.category === "FEEDBACK";

            return (
              <motion.article
                key={cap.n}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="group relative p-5 sm:p-6 bg-[#121217] border border-[#22222b] rounded-xl hover:border-[#4d9fff]/40 hover:bg-[#151822] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#646475] group-hover:text-[#9e9eaec]">
                      {cap.n}
                    </span>
                    <div className="p-2 rounded-md border border-[#2e2e3a] bg-[#18181f] group-hover:border-[#4d9fff]/40 group-hover:bg-[#4d9fff]/10 group-hover:text-[#4d9fff] text-[#9e9eaec] transition-colors">
                      <Icon size={15} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#f2f2f5] tracking-tight mb-2">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#9e9eaec] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                {/* Footnote Category Tag */}
                <div className="mt-5 pt-3 border-t border-[#1f1f28] flex items-center justify-between">
                  <span
                    className={`text-[9px] font-mono tracking-widest uppercase ${
                      isIntelligence
                        ? "text-[#4d9fff]"
                        : isFeedback
                          ? "text-[#f5a623]"
                          : "text-[#c2dcff]"
                    }`}
                  >
                    {cap.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#646475]">
                    GRAYMATTER // STACK
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
