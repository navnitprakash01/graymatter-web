"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Compass,
  Layers,
  RefreshCw,
  Sparkles,
  Eye,
  Flame,
  CheckCircle2,
} from "lucide-react";

const principles = [
  {
    num: "01",
    icon: Compass,
    title: "EVIDENCE OVER GUESSWORK",
    headline: "Separate observed data from inference.",
    desc: "GrayMatter systematically distinguishes empirical evidence from statistical estimation and generative speculation.",
  },
  {
    num: "02",
    icon: Layers,
    title: "SYSTEM OVER TOOLS",
    headline: "Connect decisions instead of creating isolated outputs.",
    desc: "The value of content production lies in the contextual relationships between research, scripting, packaging, and performance.",
  },
  {
    num: "03",
    icon: RefreshCw,
    title: "FEEDBACK OVER STATIC WORKFLOWS",
    headline: "Use performance data to inform future decisions.",
    desc: "Static pipelines degrade. GrayMatter is architected around continuous performance telemetry that calibrates future recommendations.",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "QUALITY OVER VOLUME",
    headline: "Optimize for useful, original content rather than mass production.",
    desc: "GrayMatter is explicitly engineered against mass-produced spam, keyword stuffing, and derivative content mills.",
  },
  {
    num: "05",
    icon: Eye,
    title: "TRANSPARENCY OVER MAGIC",
    headline: "Make important decisions explainable.",
    desc: "Every AI-generated score, topic opportunity, and hook variant is traceable back to its underlying evidence source.",
  },
  {
    num: "06",
    icon: Flame,
    title: "ORIGINALITY OVER REPETITION",
    headline: "Build systems that help create distinctive content.",
    desc: "Algorithms change; genuine insight and distinctive storytelling endure. GrayMatter supports depth over mimicry.",
  },
];

export default function ProductPrinciples() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 sm:py-32 lg:py-40 bg-[#0e0e12] border-t border-[#18181f] relative"
      aria-labelledby="principles-heading"
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
              <span>[ 10 ] PRODUCT PHILOSOPHY</span>
            </div>
          </motion.div>

          <motion.h2
            id="principles-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.04] text-[#f2f2f5] mb-6"
          >
            DESIGNED AROUND
            <br />
            FIRST PRINCIPLES.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#9e9eaec] text-base sm:text-lg leading-relaxed"
          >
            We believe artificial intelligence should elevate creative depth and
            editorial precision — not flood distribution platforms with
            derivative noise.
          </motion.p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-xl border border-[#22222b] bg-[#121217] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1f1f28]">
                    <span className="text-xs font-mono font-bold text-[#646475]">
                      {p.num}
                    </span>
                    <div className="p-2 rounded-md border border-[#2e2e3a] bg-[#18181f] text-[#4d9fff]">
                      <Icon size={15} />
                    </div>
                  </div>

                  <h3 className="text-xs font-mono font-bold text-[#f2f2f5] uppercase tracking-wider mb-2">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#f2f2f5] mb-2 leading-snug">
                    {p.headline}
                  </p>

                  <p className="text-xs text-[#9e9eaec] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1f1f28] flex items-center justify-between text-[10px] font-mono text-[#646475]">
                  <span>CORE PRINCIPLE</span>
                  <span>GRAYMATTER AI</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Anti-Spam / Authentic Content Positioning Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl border border-[#f5a623]/30 bg-[#1f160b]/60 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#f5a623]" />
                <h4 className="text-xs font-mono font-bold text-[#f5a623] tracking-wider uppercase">
                  ANTI-SPAM POSITIONING // AI SHOULD AMPLIFY ORIGINALITY
                </h4>
              </div>
              <p className="text-sm text-[#f2f2f5] leading-relaxed max-w-3xl">
                GrayMatter is engineered specifically to support original
                research, rigorous reasoning, storytelling depth, and deliberate
                production. It is not designed to mass-generate generic video
                clones or automate derivative content farms.
              </p>
            </div>

            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#f5a623]/40 bg-[#f5a623]/10 text-[10px] font-mono text-[#f5a623]">
                <CheckCircle2 size={13} />
                <span>ORIGINALITY STANDARD</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
