"use client";

import { motion } from "framer-motion";
import { Reveal, Eyebrow } from "@/components/shared/Reveal";

const PILLARS = [
  {
    num: "01 · Mission",
    title:
      "Empowering businesses through innovative software, AI, and digital solutions.",
    body: "Our mission is to help startups, SMEs, and enterprises transform ideas into scalable digital products through custom software development, website development, mobile applications, AI solutions, and technology consulting. We combine innovation, engineering excellence, and business strategy to deliver measurable growth and long-term value.",
  },
  {
    num: "02 · Vision",
    title:
      "To become a globally trusted technology partner for the AI-driven future.",
    body: "We envision a future where intelligent software, automation, and digital transformation are accessible to every business. By leveraging artificial intelligence, cloud technologies, and modern software engineering, we aim to build solutions that help organizations innovate faster, operate smarter, and scale sustainably.",
  },
  {
    num: "03 · Principle",
    title:
      "Deliver excellence through transparency, innovation, and accountability.",
    body: "We believe successful technology projects are built on trust, collaboration, and engineering quality. Every solution we deliver is designed with performance, security, scalability, and user experience at its core, ensuring our clients receive reliable software that drives real business outcomes.",
  },
];

const CHIPS = [
  {
    className: "top-[8%] left-0",
    value: "120+",
    label: "products shipped",
    delay: 0,
  },
  {
    className: "top-0 right-[6%]",
    value: "42",
    label: "specialists",
    delay: -2,
  },
  {
    className: "bottom-[14%] left-[4%]",
    value: "9",
    label: "countries",
    delay: -4,
  },
  {
    className: "bottom-[6%] right-0",
    value: "4.9★",
    label: "client NPS",
    delay: -1,
  },
];

export function About() {
  return (
    <section id="about" className="px-6 py-40">
      <div className="container-x grid grid-cols-1 items-start gap-20 lg:grid-cols-[1.2fr_0.9fr]">
        <div>
          <Reveal>
            <Eyebrow>
              Leading Software & AI Development Company in India
            </Eyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="section-title">
              Building{" "}
              <em>
                Software, AI Solutions, SaaS Platforms & Digital Products{" "}
              </em>
              for ambitious startups and enterprises worldwide.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="section-sub">
              Sell Tech IND. Productions is a software development company based
              in India, founded by Pratham Soni. We specialize in custom
              software development, website development, mobile app development,
              AI solutions, SaaS platforms, blockchain applications, UI/UX
              design, and digital transformation services. Our team partners
              with startups, growing businesses, and enterprise organizations to
              design, develop, and scale secure, high-performance digital
              products that drive growth, automate operations, and create
              lasting competitive advantages. From MVP development to
              enterprise-grade software serving thousands of users, we deliver
              innovative technology solutions built for performance,
              scalability, and long-term success.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col gap-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={0.05 + i * 0.05}>
                <article
                  className="rounded-[18px] border border-line bg-[linear-gradient(180deg,rgba(20,28,56,.35),rgba(11,17,32,.55))] p-7 transition-all hover:-translate-y-1 hover:border-line-strong"
                  data-hoverable="true"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-cyan">
                    {p.num}
                  </span>
                  <h4 className="my-2 font-display text-[22px] leading-tight tracking-[-0.01em] text-ink-0">
                    {p.title}
                  </h4>
                  <p className="text-sm text-ink-2">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <aside className="sticky top-[120px] hidden lg:flex">
          <div className="w-full rounded-[28px] border border-line bg-[linear-gradient(180deg,rgba(20,28,56,.35),rgba(11,17,32,.75))] p-6 backdrop-blur-md">
            <div className="overflow-hidden rounded-[20px] border border-line-strong">
              <img
                src="/me.jpeg"
                alt="Pratham Soni - Founder & CEO of Sell Tech IND. Productions"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="mt-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-cyan">
                Founder & CEO
              </span>

              <h3 className="mt-2 font-display text-[34px] text-ink-0">
                Pratham Soni
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-2">
                Entrepreneur, software architect, and technology strategist
                focused on helping startups and enterprises build scalable
                software products, AI-powered solutions, SaaS platforms, and
                digital experiences that create measurable business impact.
              </p>

              <blockquote className="mt-6 border-l-2 border-brand-cyan pl-4 italic text-ink-1">
                "Technology should not just solve problems—it should create
                opportunities, unlock growth, and empower businesses to compete
                on a global scale."
              </blockquote>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-bg-1 p-3">
                  <div className="font-display text-2xl text-ink-0">24+</div>
                  <div className="text-xs text-ink-3">Projects Delivered</div>
                </div>

                <div className="rounded-xl border border-line bg-bg-1 p-3">
                  <div className="font-display text-2xl text-ink-0">9+</div>
                  <div className="text-xs text-ink-3">Core Services</div>
                </div>

                <div className="rounded-xl border border-line bg-bg-1 p-3">
                  <div className="font-display text-2xl text-ink-0">AI</div>
                  <div className="text-xs text-ink-3">Innovation Driven</div>
                </div>

                <div className="rounded-xl border border-line bg-bg-1 p-3">
                  <div className="font-display text-2xl text-ink-0">Global</div>
                  <div className="text-xs text-ink-3">Client Reach</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
