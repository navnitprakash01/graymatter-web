"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Youtube,
  ShieldCheck,
  Lock,
  UserCheck,
  KeyRound,
  Database,
  LineChart,
  Brain,
  Sparkles,
} from "lucide-react";

const flowNodes = [
  {
    icon: UserCheck,
    label: "CREATOR ACCOUNT",
    desc: "Authorized channel owner initiates secure connection",
  },
  {
    icon: KeyRound,
    label: "GOOGLE OAUTH 2.0",
    desc: "Granular consent screen with read-only permission scopes",
  },
  {
    icon: Database,
    label: "CHANNEL METADATA",
    desc: "Historical videos, publish timestamps, tags, and titles",
  },
  {
    icon: LineChart,
    label: "PERFORMANCE SIGNALS",
    desc: "YouTube Analytics retention metrics, CTR, and watch time",
  },
  {
    icon: Brain,
    label: "GRAYMATTER BRAIN",
    desc: "Calibrated channel context stored in structured memory",
    highlight: true,
  },
  {
    icon: Sparkles,
    label: "EVIDENCE-BASED DECISIONS",
    desc: "Future scripts and strategy grounded in historical evidence",
    accent: true,
  },
];

export default function YouTubeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="youtube"
      className="py-24 sm:py-32 lg:py-40 bg-[#08080a] border-t border-[#18181f] relative overflow-hidden"
      aria-labelledby="youtube-heading"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Security Narrative & Policy Disclosures */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2e2e3a] bg-[#121217] text-[10px] font-mono tracking-[0.2em] uppercase text-[#4d9fff]">
                <span>[ 07 ] CHANNEL INTEGRATION</span>
              </div>
            </motion.div>

            <motion.h2
              id="youtube-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.04] text-[#f2f2f5] mb-6"
            >
              CONNECT THE CHANNEL.
              <br />
              LEARN FROM REAL
              <br />
              PERFORMANCE.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#9e9eaec] text-base leading-relaxed mb-8"
            >
              GrayMatter can connect to YouTube through standard OAuth 2.0 and
              use authorized channel metadata and performance analytics as
              empirical inputs to its intelligence and learning systems.
            </motion.p>

            {/* Strict Security Statements */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="space-y-3.5 mb-8"
            >
              <div className="flex items-start gap-3 p-4 rounded-xl border border-[#4d9fff]/20 bg-[#121c2e]/70">
                <ShieldCheck
                  size={18}
                  className="text-[#4d9fff] flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-xs font-mono font-bold text-[#f2f2f5] uppercase mb-1">
                    READ-ONLY OAUTH PERMISSIONS
                  </p>
                  <p className="text-xs text-[#9e9eaec] leading-relaxed">
                    Access is requested through Google&apos;s OAuth authorization
                    flow. GrayMatter uses read-only YouTube permissions for the
                    current integration. No automatic publishing or video
                    mutation occurs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl border border-[#22222b] bg-[#121217]">
                <Lock
                  size={18}
                  className="text-[#646475] flex-shrink-0 mt-0.5"
                />
                <p className="text-xs text-[#646475] leading-relaxed">
                  GrayMatter is not affiliated with or endorsed by YouTube or
                  Google LLC. YouTube and the YouTube logo are registered
                  trademarks of Google LLC.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#system"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase bg-[#4d9fff]/10 text-[#4d9fff] border border-[#4d9fff]/30 rounded-md hover:bg-[#4d9fff]/20 hover:border-[#4d9fff]/60 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff]"
              >
                <Youtube size={15} />
                <span>Explore the System</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: High-Fidelity Data Flow Progression */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-[#22222b] bg-[#0e0e12] relative shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            aria-label="YouTube OAuth and data flow diagram"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1f1f28]">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#646475]">
                <span>[ TELEMETRY FLOW ]</span>
              </span>
              <span className="text-[10px] font-mono text-[#4d9fff]">
                OAUTH 2.0 PROTOCOL
              </span>
            </div>

            <div className="space-y-0">
              {flowNodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <div key={node.label} className="flex items-start gap-4">
                    {/* Node connector */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-7 h-7 rounded-md border flex items-center justify-center flex-shrink-0 z-10 ${
                          node.accent
                            ? "border-[#f5a623]/60 bg-[#f5a623]/15 text-[#f5a623]"
                            : node.highlight
                              ? "border-[#4d9fff]/60 bg-[#4d9fff]/20 text-[#4d9fff]"
                              : "border-[#2e2e3a] bg-[#18181f] text-[#9e9eaec]"
                        }`}
                      >
                        <Icon size={14} />
                      </div>
                      {i < flowNodes.length - 1 && (
                        <div
                          className="w-px flex-1 bg-gradient-to-b from-[#2e2e3a] to-[#22222b] my-1 min-h-[28px]"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Node details */}
                    <div
                      className={`flex-1 p-3.5 rounded-xl border mb-3 ${
                        node.accent
                          ? "border-[#f5a623]/30 bg-[#1f160b]/60"
                          : node.highlight
                            ? "border-[#4d9fff]/30 bg-[#121c2e]/70"
                            : "border-[#1f1f28] bg-[#121217]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`text-xs font-mono font-bold uppercase tracking-wider ${
                            node.accent
                              ? "text-[#f5a623]"
                              : node.highlight
                                ? "text-[#4d9fff]"
                                : "text-[#f2f2f5]"
                          }`}
                        >
                          {node.label}
                        </span>
                        <span className="text-[9px] font-mono text-[#646475]">
                          0{i + 1}
                        </span>
                      </div>
                      <p className="text-xs text-[#9e9eaec] leading-relaxed">
                        {node.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
