"use client";

import { Reveal, Eyebrow } from "@/components/shared/Reveal";
import { products } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function Products() {
  return (
    <section id="products" className="px-6 py-40">
      <div className="container-x">
        <header className="mb-16 max-w-[780px]">
          <Reveal><Eyebrow>Solutions · Built for outcomes</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              From <em>startup MVPs</em> to enterprise-grade platforms.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub">
              Pick the engagement that matches the moment. Every track ships with senior engineering, weekly demos, source-code ownership and an exit-ready stack.
            </p>
          </Reveal>
        </header>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Reveal
              key={p.id}
              className={cn(p.size === "xl" && "lg:col-span-2")}
            >
              <article
                data-hoverable="true"
                className={cn(
                  "group relative flex h-full flex-col gap-3 overflow-hidden rounded-[20px] border border-line p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-line-strong",
                  p.size === "xl"
                    ? "min-h-[340px] bg-[linear-gradient(135deg,rgba(0,212,255,.16),rgba(139,92,246,.10)_60%,rgba(7,11,28,.7))]"
                    : p.accent
                      ? "min-h-[240px] border-brand-magenta/25 bg-[linear-gradient(180deg,rgba(232,121,249,.10),rgba(139,92,246,.08)_60%,rgba(7,11,28,.7))]"
                      : "min-h-[240px] bg-[linear-gradient(180deg,rgba(20,28,56,.45),rgba(7,11,28,.65))]"
                )}
              >
                <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
                  <span>{p.num}</span>
                  <span>{p.badge}</span>
                </div>
                <h3
                  className={cn(
                    "font-display font-normal leading-tight tracking-[-0.01em] text-ink-0",
                    p.size === "xl" ? "max-w-[14ch] text-[44px]" : "text-[30px]"
                  )}
                >
                  {p.title}
                </h3>
                <p className="max-w-[48ch] text-sm text-ink-2">{p.description}</p>
                {p.bullets && (
                  <ul className="mt-auto flex flex-wrap gap-2">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[11px] text-ink-1"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                <span
                  aria-hidden
                  className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-ink-1 transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-[#04060f]"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
