"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Reveal, Eyebrow } from "@/components/shared/Reveal";
import { stats, valueProps } from "@/lib/content";

export function Why() {
  return (
    <section id="why" className="px-6 py-40">
      <div className="container-x">
        <header className="mb-12 max-w-[780px]">
          <Reveal><Eyebrow>Why teams choose us</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              The numbers we are <em>quietly proud</em> of.
            </h2>
          </Reveal>
        </header>

        <div className="grid grid-cols-2 overflow-hidden rounded-[22px] border border-line bg-[linear-gradient(180deg,rgba(11,17,32,.7),rgba(5,8,22,.85))] sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <Stat
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.05}>
              <article
                data-hoverable="true"
                className="flex h-full flex-col gap-2.5 rounded-[18px] border border-line bg-[linear-gradient(180deg,rgba(20,28,56,.4),rgba(11,17,32,.6))] p-7 transition-all hover:-translate-y-1 hover:border-brand-cyan"
              >
                <i
                  className="text-[28px] not-italic text-brand-cyan"
                  style={{ textShadow: "0 0 20px rgba(34,211,238,.5)" }}
                >
                  {p.glyph}
                </i>
                <h4 className="font-display text-[22px] leading-tight tracking-[-0.01em] text-ink-0">
                  {p.title}
                </h4>
                <p className="text-sm text-ink-2">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
  isLast,
}: {
  value: number;
  suffix: string;
  label: string;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0% -10% 0%" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 0.61, 0.36, 1],
      onUpdate(v) {
        setDisplay(value % 1 === 0 ? `${Math.round(v)}` : v.toFixed(2));
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div
      ref={ref}
      data-hoverable="true"
      className={`flex flex-col gap-1.5 px-5 py-7 transition-colors hover:bg-brand-cyan/5 ${
        isLast ? "" : "border-r border-line"
      }`}
    >
      <b
        className="font-display text-[46px] font-normal leading-none tracking-[-0.02em]"
        style={{
          backgroundImage:
            "linear-gradient(120deg,#00D4FF 0%,#22D3EE 35%,#8B5CF6 75%,#E879F9 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {display}
        {suffix}
      </b>
      <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-3">
        {label}
      </span>
    </div>
  );
}
