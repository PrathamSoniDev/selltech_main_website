"use client";

import { Reveal, Eyebrow } from "@/components/shared/Reveal";
import { cases, type CaseStudy } from "@/lib/content";
import { cn } from "@/lib/utils";

const BG_STYLES: Record<CaseStudy["bg"], string> = {
  1: "radial-gradient(circle at 20% 20%, rgba(0,212,255,.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(139,92,246,.4), transparent 40%), linear-gradient(135deg,#0a1530,#1a0e2e)",
  2: "radial-gradient(circle at 70% 30%, rgba(232,121,249,.45), transparent 50%), linear-gradient(135deg,#1a0e2e,#0e1a3a)",
  3: "radial-gradient(circle at 30% 70%, rgba(0,212,255,.4), transparent 50%), linear-gradient(135deg,#06223a,#0a1530)",
  4: "conic-gradient(from 220deg at 50% 50%, rgba(255,181,71,.3), rgba(232,121,249,.3), rgba(139,92,246,.3), rgba(255,181,71,.3)), linear-gradient(135deg,#1a0e2e,#06091a)",
  5: "radial-gradient(circle at 40% 40%, rgba(34,211,238,.45), transparent 55%), linear-gradient(135deg,#0a2030,#0a1530)",
  6: "radial-gradient(circle at 60% 60%, rgba(255,181,71,.3), transparent 50%), radial-gradient(circle at 30% 30%, rgba(139,92,246,.3), transparent 50%), linear-gradient(135deg,#0e1a3a,#1a0e2e)",
};

export function Work() {
  return (
    <section id="work" className="px-6 py-40">
      <div className="container-x">
        <header className="mb-16 max-w-[780px]">
          <Reveal><Eyebrow>Selected Work · 2023 → 2026</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              The systems behind <em>category-defining</em> products.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub">
              A small selection of public engagements. Most of what we ship sits behind NDAs — ask us in a call and we will walk you through the unedited case studies.
            </p>
          </Reveal>
        </header>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal
              key={c.id}
              delay={(i % 3) * 0.05}
              className={cn(c.hero && "lg:col-span-2")}
            >
              <Case caseStudy={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Case({ caseStudy: c }: { caseStudy: CaseStudy }) {
  return (
    <article
      data-hoverable="true"
      className={cn(
        "group relative flex h-full flex-col justify-end gap-3 overflow-hidden rounded-[22px] border border-line p-7 transition-all duration-500 hover:border-line-strong",
        c.hero ? "min-h-[420px]" : "min-h-[300px]"
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 z-0 opacity-55 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
        style={{
          backgroundImage: BG_STYLES[c.bg],
          backgroundSize: "cover",
          filter: "saturate(110%) contrast(105%)",
        }}
      />

      <div className="relative z-[1] flex justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-ink-2">
        <span>
          {c.num} · {c.category}
        </span>
        <span>{c.vertical}</span>
      </div>

      <h3
        className={cn(
          "relative z-[1] max-w-[24ch] font-display font-normal leading-tight tracking-[-0.01em] text-ink-0",
          c.hero ? "text-[38px]" : "text-[26px]"
        )}
      >
        {c.title}
      </h3>

      <p className="relative z-[1] max-w-[46ch] text-sm text-ink-1">
        {c.description}
      </p>

      <div className="relative z-[1] flex flex-wrap gap-1.5">
        {c.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line-strong bg-[rgba(7,11,28,.6)] px-2.5 py-1 font-mono text-[10.5px] text-ink-1 backdrop-blur"
          >
            {t}
          </span>
        ))}
      </div>

      <span className="relative z-[1] mt-1 font-mono text-[11.5px] tracking-[0.08em] text-brand-cyan">
        {c.hero ? "Read the case study →" : "View →"}
      </span>
    </article>
  );
}
