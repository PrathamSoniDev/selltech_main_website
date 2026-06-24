import { ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/shared/Reveal";
import { siteConfig } from "@/lib/seo";

export function CTA() {
  return (
    <section id="cta" className="px-6 py-32">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-[32px] border border-line-strong px-[8%] py-24 text-center"
          style={{
            background:
              "radial-gradient(800px 300px at 50% 0%, rgba(0,212,255,.15), transparent 60%), radial-gradient(800px 300px at 50% 100%, rgba(139,92,246,.15), transparent 60%), linear-gradient(180deg, rgba(11,17,32,.7), rgba(5,8,22,.85))",
          }}
        >
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[60%] w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-60"
            style={{
              filter: "blur(40px)",
              background:
                "conic-gradient(from 0deg, transparent, rgba(34,211,238,.15), transparent, rgba(139,92,246,.15), transparent)",
              animation: "spin 20s linear infinite",
            }}
          />

          <div className="relative z-[2]">
            <Reveal><Eyebrow>Let&apos;s build</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mx-auto my-5 max-w-[18ch] font-display text-[clamp(40px,6vw,84px)] font-normal leading-[1.02] tracking-[-0.02em]">
                Ready to build something{" "}
                <em
                  className="italic bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg,#00D4FF 0%,#22D3EE 35%,#8B5CF6 75%,#E879F9 100%)",
                  }}
                >
                  extraordinary?
                </em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto max-w-[580px] text-base text-ink-1">
                Tell us about the product. We will reply within one business day with a written perspective, a shortlist of risks, and a delivery plan.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 inline-flex flex-wrap justify-center gap-3.5">
                <a href="#contact" className="btn-primary">
                  Start your project
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="btn-ghost">
                  {siteConfig.contact.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
