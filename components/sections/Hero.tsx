"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false },
);

const HERO_LINES = [
  "We build the",
  ["future", " of digital"] as const,
  "innovation.",
] as const;

const META = [
  { value: "120+", label: "Ships delivered" },
  { value: "42", label: "Engineers & designers" },
  { value: "9", label: "Countries served" },
  { value: "99.98%", label: "Uptime average" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-40"
    >
      <HeroScene />

      <div className="relative z-[2] mx-auto w-full max-w-[1100px] text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-[rgba(10,14,32,.55)] px-3.5 py-2 backdrop-blur-md font-mono text-[11.5px] tracking-[0.06em] text-ink-1"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-brand-cyan"
            style={{ boxShadow: "0 0 10px #22d3ee" }}
          />
          Engineering since 2021 · India → Global
        </motion.span>

        <h1 className="mx-auto mb-6 mt-7 max-w-[14ch] font-display font-normal leading-[0.96] tracking-[-0.02em] text-[clamp(48px,9vw,132px)]">
          {HERO_LINES.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.22, 0.61, 0.36, 1],
                delay: 0.25 + i * 0.12,
              }}
              className="block"
              style={{ transformOrigin: "bottom" }}
            >
              {Array.isArray(line) ? (
                <>
                  <em
                    className="not-italic bg-clip-text text-transparent italic"
                    style={{
                      backgroundImage:
                        "linear-gradient(120deg,#00D4FF 0%,#22D3EE 35%,#8B5CF6 75%,#E879F9 100%)",
                      textShadow: "0 0 60px rgba(34,211,238,.25)",
                    }}
                  >
                    {line[0]}
                  </em>
                  {line[1]}
                </>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="mx-auto max-w-[620px] text-[18px] leading-[1.55] text-ink-1"
        >
          Sell Tech IND. Productions helps startups, SMEs, and enterprises
          transform ideas into successful digital products through custom
          software development, AI automation, SaaS development, website
          development, mobile app development, and technology consulting. From
          MVPs to enterprise-scale platforms, we build innovative solutions that
          drive revenue, efficiency, and long-term business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.85,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="mx-auto mt-9 inline-flex flex-wrap justify-center gap-3.5"
        >
          <a href="#contact" className="btn-primary">
            Start your project
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#work" className="btn-ghost">
            <span
              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-cyan text-[#001018]"
              style={{ boxShadow: "0 0 16px rgba(34,211,238,.6)" }}
            >
              <Play className="h-2.5 w-2.5 fill-current" />
            </span>
            View our work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.0,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="mx-auto mt-20 grid max-w-[760px] grid-cols-2 gap-y-4 border-t border-line pt-6 sm:grid-cols-4"
        >
          {META.map((m, i) => (
            <div
              key={m.label}
              className={`flex flex-col items-center gap-1 px-2 ${
                i < META.length - 1 ? "sm:border-r sm:border-line" : ""
              }`}
            >
              <b className="font-display font-normal text-[30px] text-ink-0">
                {m.value}
              </b>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-3">
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3"
      >
        <span>Scroll</span>
        <i
          className="block h-8 w-px"
          style={{
            background: "linear-gradient(to bottom,#22D3EE,transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
