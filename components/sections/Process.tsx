import { Reveal, Eyebrow } from "@/components/shared/Reveal";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="px-6 py-40">
      <div className="container-x">
        <header className="mb-16 max-w-[780px]">
          <Reveal><Eyebrow>How we work · 07 stages</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              A <em>predictable</em> path from idea to growth.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub">
              No black boxes. Every stage has named owners, written deliverables, demoable checkpoints and a definition of done. You always know exactly what is happening — and why.
            </p>
          </Reveal>
        </header>

        <ol className="relative grid grid-cols-1 gap-4 lg:grid-cols-7">
          {/* connecting line */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px opacity-40 lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, #22D3EE 10%, #8B5CF6 90%, transparent)",
            }}
          />

          {processSteps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.05} as="li">
              <div className="relative h-full border-l border-line py-6 pl-16 lg:border-l-0 lg:pl-0 lg:pt-[80px]">
                <span
                  className="absolute left-0 top-4 z-[2] flex h-[42px] w-[42px] items-center justify-center rounded-[12px] border border-line-strong bg-[rgba(7,11,28,.85)] font-mono text-[13px] text-brand-cyan lg:left-4 lg:top-4"
                  style={{ boxShadow: "0 0 24px rgba(0,212,255,.25)" }}
                >
                  {step.num}
                </span>
                <h4 className="mb-2 font-display text-[24px] font-normal leading-tight tracking-[-0.01em] text-ink-0 lg:pl-2">
                  {step.title}
                </h4>
                <p className="text-[13.5px] text-ink-2 lg:pl-2 lg:pr-2">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
