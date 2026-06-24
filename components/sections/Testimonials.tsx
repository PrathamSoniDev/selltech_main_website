"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Eyebrow } from "@/components/shared/Reveal";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const active = testimonials[i];

  return (
    <section id="testimonials" className="px-6 py-40">
      <div className="container-x">
        <header className="mb-12 max-w-[780px]">
          <Reveal><Eyebrow>The work, in their words</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              From <em>founders, CTOs</em> and product leaders.
            </h2>
          </Reveal>
        </header>

        <div
          className="relative min-h-[280px] overflow-hidden rounded-3xl border border-line p-12 sm:p-20"
          style={{
            background:
              "radial-gradient(600px 200px at 20% 0%, rgba(0,212,255,.10), transparent 60%), radial-gradient(600px 200px at 80% 100%, rgba(139,92,246,.10), transparent 60%), linear-gradient(180deg, rgba(11,17,32,.7), rgba(5,8,22,.85))",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <p className="mb-8 max-w-[52ch] font-display text-[clamp(22px,3vw,36px)] leading-tight tracking-[-0.01em] text-ink-0">
                &ldquo;{active.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3.5">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full font-mono text-[13px] font-semibold text-[#04060f]"
                  style={{ background: active.gradient }}
                >
                  {active.initials}
                </span>
                <div>
                  <b className="block text-sm font-medium text-ink-0">{active.name}</b>
                  <span className="font-mono text-[11px] tracking-[0.06em] text-ink-3">
                    {active.role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2.5">
          {testimonials.map((t, idx) => (
            <button
              key={t.name}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setI(idx)}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                idx === i
                  ? "w-[60px] bg-[linear-gradient(90deg,#22D3EE,#8B5CF6)]"
                  : "w-9 bg-line-strong"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
