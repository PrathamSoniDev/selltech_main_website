"use client";

import { useRef } from "react";
import { Reveal, Eyebrow } from "@/components/shared/Reveal";
import { services, type Service } from "@/lib/content";
import { cn } from "@/lib/utils";

import {
  Code2, Globe, Smartphone, Brain, Boxes, Link2, Gamepad2, PenTool, TrendingUp,
} from "lucide-react";

const ICONS: Record<Service["icon"], React.ComponentType<{ className?: string }>> = {
  code: Code2,
  web: Globe,
  mobile: Smartphone,
  ai: Brain,
  saas: Boxes,
  chain: Link2,
  game: Gamepad2,
  design: PenTool,
  marketing: TrendingUp,
};

export function Services() {
  return (
    <section id="services" className="px-6 py-40">
      <div className="container-x">
        <header className="mb-16 max-w-[780px]">
          <Reveal><Eyebrow>Capabilities · 09</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              A full-stack studio for <em>everything you ship online</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub">
              Nine deeply specialised practices, one accountable team. Engage one or stack the lot — every engagement is led by a principal engineer and a product strategist.
            </p>
          </Reveal>
        </header>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const ref = useRef<HTMLElement>(null);
  const Icon = ICONS[service.icon];

  const onMove = (e: React.PointerEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r || !ref.current) return;
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article
      ref={ref}
      onPointerMove={onMove}
      data-hoverable="true"
      className={cn(
        "group relative flex flex-col gap-3.5 overflow-hidden p-9 transition-colors duration-300",
        service.feature
          ? "bg-[linear-gradient(180deg,#0E1A3A,#0A1230)]"
          : "bg-[linear-gradient(180deg,#0A1024,#06091A)]",
        "hover:bg-[linear-gradient(180deg,#0C1530,#080C20)]"
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(34,211,238,.18), transparent 60%)",
        }}
      />

      {service.feature && (
        <span
          className="absolute right-4 top-4 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#04060f]"
          style={{
            background: "linear-gradient(90deg,#22D3EE,#8B5CF6)",
          }}
        >
          Most requested
        </span>
      )}

      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
        {service.num}
      </span>

      <div
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-[14px] border border-line-strong p-2.5 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105",
          service.feature
            ? "border-brand-magenta/30 bg-brand-magenta/10 text-brand-magenta group-hover:text-white"
            : "bg-brand-cyan/5 text-brand-cyan group-hover:text-white"
        )}
      >
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="font-display text-[28px] font-normal leading-tight tracking-[-0.01em] text-ink-0">
        {service.title}
      </h3>
      <p className="text-sm text-ink-2">{service.description}</p>

      <ul className="mt-2 flex flex-col gap-1.5">
        {service.bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2 font-mono text-xs text-ink-1 before:content-['+'] before:font-mono before:text-brand-cyan"
          >
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}
