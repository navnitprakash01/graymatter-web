"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Bot } from "lucide-react";

interface AgentGroup {
  category: string;
  color: string;
  agents: string[];
}

const agentClusters: AgentGroup[] = [
  {
    category: "CHANNEL & TOPIC INTELLIGENCE",
    color: "#4d9fff",
    agents: [
      "CHANNEL INTELLIGENCE",
      "TREND INTELLIGENCE",
      "RESEARCH AGENT",
      "CONTENT STRATEGY",
      "HOOK OPTIMIZATION",
    ],
  },
  {
    category: "SCRIPTING & STORYTELLING",
    color: "#4d9fff",
    agents: [
      "SCRIPT AGENT",
      "SHORTS SCRIPT AGENT",
      "VISUAL PLANNING AGENT",
    ],
  },
  {
    category: "MEDIA GENERATION & RENDERING",
    color: "#c2dcff",
    agents: [
      "IMAGE GENERATION",
      "VOICE SYNTHESIS",
      "AUDIO & SOUND DESIGN",
      "FFMPEG RENDER AGENT",
    ],
  },
  {
    category: "PACKAGING & PERFORMANCE",
    color: "#f5a623",
    agents: [
      "TITLE GENERATION",
      "THUMBNAIL STRATEGY",
      "PACKAGING EVALUATOR",
      "METADATA OPTIMIZER",
      "ANALYTICS INGESTION",
      "PERFORMANCE LEARNING",
    ],
  },
];

export default function AgentSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 sm:py-32 lg:py-40 bg-[#0e0e12] border-t border-[#18181f] relative"
      aria-labelledby="agents-heading"
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
              <span>[ 06 ] SPECIALIZED AGENTS</span>
            </div>
          </motion.div>

          <motion.h2
            id="agents-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.04] text-[#f2f2f5] mb-6"
          >
            SPECIALIZED INTELLIGENCE,
            <br />
            ONE ORCHESTRATION LAYER.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#9e9eaec] text-base sm:text-lg leading-relaxed"
          >
            Specialized agents coordinate through the GrayMatter orchestration
            layer. Each agent operates with explicit input schemas, structured
            outputs, and contextual grounding from the central Brain.
          </motion.p>
        </div>

        {/* Central Hub & Agent Constellation Grid */}
        <div className="space-y-8">
          {/* Central Orchestration Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="p-6 rounded-xl border border-[#4d9fff]/40 bg-[#121c2e]/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_0_30px_rgba(77,159,255,0.08)]"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#4d9fff]/20 text-[#4d9fff]">
                <Cpu size={22} />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-mono font-bold tracking-wider uppercase text-[#f2f2f5]">
                  GRAYMATTER ORCHESTRATOR
                </h3>
                <p className="text-xs text-[#9e9eaec]">
                  Central dispatch, state synchronization, and inter-agent communication
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#4d9fff]/30 bg-[#4d9fff]/10 text-[10px] font-mono text-[#4d9fff]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4d9fff] animate-pulse" />
              <span>DYNAMIC COORDINATION</span>
            </div>
          </motion.div>

          {/* Categorized Agent Clusters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {agentClusters.map((cluster, i) => (
              <motion.div
                key={cluster.category}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="p-5 rounded-xl border border-[#22222b] bg-[#121217] flex flex-col justify-between"
              >
                <div>
                  <div className="pb-3 mb-4 border-b border-[#1f1f28] flex items-center gap-2">
                    <Bot size={14} style={{ color: cluster.color }} />
                    <h4
                      className="text-[10px] font-mono font-bold tracking-wider uppercase"
                      style={{ color: cluster.color }}
                    >
                      {cluster.category}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {cluster.agents.map((agent) => (
                      <div
                        key={agent}
                        className="p-2.5 rounded-lg border border-[#1f1f28] bg-[#18181f]/80 text-xs font-mono font-medium text-[#f2f2f5] hover:border-[#4d9fff]/30 transition-colors"
                      >
                        {agent}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1f1f28] flex items-center justify-between text-[10px] font-mono text-[#646475]">
                  <span>SCHEMA VALIDATED</span>
                  <span>STRUCTURED I/O</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footnote Disclosures */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 text-center text-[#646475] text-xs font-mono tracking-wider"
        >
          Specialized agents coordinate through the GrayMatter orchestration
          layer with strictly bounded operational scopes.
        </motion.p>
      </div>
    </section>
  );
}
