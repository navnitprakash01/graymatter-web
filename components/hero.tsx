"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

// Refined particle intelligence network canvas
function IntelligenceField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      phase: number;
      isHub?: boolean;
    }

    interface DataPulse {
      sourceIdx: number;
      targetIdx: number;
      progress: number;
      speed: number;
    }

    const NODE_COUNT = Math.min(48, Math.floor((width * height) / 22000));
    const CONNECTION_DISTANCE = 170;
    const nodes: Node[] = [];
    const pulses: DataPulse[] = [];

    // Initialize nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      const isHub = i % 8 === 0;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: isHub ? 2.4 : Math.random() * 1.2 + 0.8,
        baseAlpha: isHub ? 0.6 : Math.random() * 0.35 + 0.15,
        phase: Math.random() * Math.PI * 2,
        isHub,
      });
    }

    function spawnPulse() {
      if (nodes.length < 2 || pulses.length >= 6) return;
      const sourceIdx = Math.floor(Math.random() * nodes.length);
      // find a connected neighbor
      const neighbors: number[] = [];
      for (let j = 0; j < nodes.length; j++) {
        if (j === sourceIdx) continue;
        const dx = nodes[sourceIdx].x - nodes[j].x;
        const dy = nodes[sourceIdx].y - nodes[j].y;
        if (Math.sqrt(dx * dx + dy * dy) < CONNECTION_DISTANCE) {
          neighbors.push(j);
        }
      }
      if (neighbors.length > 0) {
        const targetIdx =
          neighbors[Math.floor(Math.random() * neighbors.length)];
        pulses.push({
          sourceIdx,
          targetIdx,
          progress: 0,
          speed: Math.random() * 0.012 + 0.008,
        });
      }
    }

    let lastPulseSpawn = 0;

    function render(timestamp: number) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Pulse generation
      if (!prefersReducedMotion && timestamp - lastPulseSpawn > 800) {
        spawnPulse();
        lastPulseSpawn = timestamp;
      }

      // Update & Draw Nodes
      for (const node of nodes) {
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          node.phase += 0.018;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        const pulseFactor = Math.sin(node.phase) * 0.2 + 0.8;
        const alpha = node.baseAlpha * pulseFactor;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isHub
          ? `rgba(77, 159, 255, ${alpha})`
          : `rgba(160, 192, 255, ${alpha * 0.75})`;
        ctx.fill();

        if (node.isHub) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(77, 159, 255, ${alpha * 0.2})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Draw Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.09;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(77, 159, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw Data Pulses
      if (!prefersReducedMotion) {
        for (let p = pulses.length - 1; p >= 0; p--) {
          const pulse = pulses[p];
          pulse.progress += pulse.speed;

          if (pulse.progress >= 1) {
            pulses.splice(p, 1);
            continue;
          }

          const n1 = nodes[pulse.sourceIdx];
          const n2 = nodes[pulse.targetIdx];
          if (!n1 || !n2) continue;

          const px = n1.x + (n2.x - n1.x) * pulse.progress;
          const py = n1.y + (n2.y - n1.y) * pulse.progress;

          ctx.beginPath();
          ctx.arc(px, py, 1.6, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(77, 159, 255, 0.85)";
          ctx.fill();
        }

        animRef.current = requestAnimationFrame(render);
      }
    }

    if (!prefersReducedMotion) {
      animRef.current = requestAnimationFrame(render);
    } else {
      render(0);
    }

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (prefersReducedMotion) render(0);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Intelligence Canvas & Vignette Layers */}
      <div className="absolute inset-0 bg-[#08080a] z-0">
        <IntelligenceField />
        {/* Subtle radial spotlight */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(77,159,255,0.05)_0%,_transparent_70%)]"
          aria-hidden="true"
        />
        {/* Top and bottom edge masks */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#08080a] via-transparent to-[#08080a]"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content Container */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl lg:max-w-5xl mx-auto flex flex-col items-center">
          {/* Eyebrow / Status Beacon */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#2e2e3a] bg-[#121217]/80 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f5a623] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f5a623]" />
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#9e9eaec]">
                GRAYMATTER AI // ARCHITECTURE
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.98] sm:leading-[0.96] text-[#f2f2f5] mb-6 sm:mb-8"
          >
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2f2f5] via-[#c2dcff] to-[#4d9fff]">
              INTELLIGENCE
            </span>
            <br />
            LAYER FOR CONTENT.
          </motion.h1>

          {/* Supporting Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#9e9eaec] text-xs sm:text-sm md:text-base font-mono tracking-[0.22em] uppercase mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            RESEARCH · STRATEGY · CREATION · PERFORMANCE · LEARNING
          </motion.p>

          {/* Main Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-[#9e9eaec] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed"
          >
            GrayMatter AI is an intelligent content operating system that
            connects the entire YouTube workflow into one continuously improving
            system.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-14"
          >
            <a
              href="#system"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase bg-[#4d9fff] text-[#08080a] rounded-md hover:bg-[#6ab0ff] transition-all duration-200 shadow-[0_0_24px_rgba(77,159,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff]"
            >
              <span>Explore the System</span>
              <ArrowRight size={14} />
            </a>
            <a
              href="#learning"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase border border-[#2e2e3a] bg-[#121217] text-[#f2f2f5] rounded-md hover:border-[#4d9fff]/50 hover:bg-[#18181f] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d9fff]"
            >
              <span>See How It Learns</span>
            </a>
          </motion.div>

          {/* System Status Footnote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-[#646475] uppercase"
          >
            <Sparkles size={11} className="text-[#f5a623]" />
            <span>INTELLIGENCE SYSTEM / IN DEVELOPMENT</span>
          </motion.div>
        </div>
      </div>

      {/* Down Arrow Anchor Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3b3b4a]"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  );
}
