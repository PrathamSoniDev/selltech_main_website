import { Reveal } from "@/hooks/use-reveal";
import {
  Smartphone, Globe, Cloud, Sparkles, Boxes, LineChart, ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Native iOS, Android and cross-platform apps built for performance, polish and app-store success.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    icon: Cloud,
    title: "SaaS Platforms",
    desc: "Multi-tenant SaaS products with billing, auth, analytics and AI baked in — from idea to scale.",
    tags: ["Multi-tenant", "Stripe", "RBAC"],
  },
  {
    icon: Boxes,
    title: "Custom Software",
    desc: "Scalable software systems and internal tools tailored to your operations and growth model.",
    tags: ["Microservices", "APIs", "DevOps"],
  },
  {
    icon: Globe,
    title: "High-Converting Websites",
    desc: "Brand-led marketing sites and storefronts engineered for speed, SEO and conversion.",
    tags: ["Next.js", "Headless CMS", "SEO"],
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    desc: "LLM copilots, agents and intelligent workflows that compound team productivity.",
    tags: ["LLMs", "RAG", "Agents"],
  },
  {
    icon: LineChart,
    title: "Enterprise Solutions",
    desc: "Enterprise-grade digital platforms with security, compliance and 24/7 support built in.",
    tags: ["Compliance", "Observability"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-4">Services</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Everything you need to <span className="text-gradient">ship & scale</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              A modular service stack covering strategy, design, engineering and growth — delivered by
              one accountable team.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group relative glass-card rounded-2xl p-7 h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground flex items-center justify-center mb-5 shadow-[var(--shadow-glow)]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold flex items-center justify-between">
                    {s.title}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-secondary/60 border border-border/40 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}