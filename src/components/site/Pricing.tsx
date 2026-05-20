import { Reveal } from "@/hooks/use-reveal";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Startup MVP",
    desc: "Launch your product quickly with a lean, scalable MVP designed for rapid market validation.",
    features: [
      "UI/UX Design",
      "Frontend Development",
      "Backend APIs",
      "Deployment & Hosting",
      "Technical Consultation",
    ],
    cta: "Contact Us",
  },

  {
    name: "Growth SaaS",
    desc: "Scale your platform with advanced architecture, integrations, automation, and AI-powered workflows.",
    features: [
      "Full-Stack Development",
      "Cloud Infrastructure",
      "AI Integrations",
      "Admin Dashboards",
      "Performance Optimization",
      "Dedicated Support",
    ],
    cta: "Book Discovery Call",
    highlight: true,
  },

  {
    name: "Enterprise Solutions",
    desc: "Custom enterprise-grade systems engineered for security, scalability, and long-term growth.",
    features: [
      "Custom Architecture",
      "Enterprise Security",
      "Multi-Team Collaboration",
      "Automation Systems",
      "Scalable Infrastructure",
      "Priority Support",
    ],
    cta: "Talk to Sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-4">Pricing</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Transparent packages, <span className="text-gradient">no surprises</span>
            </h2>
            <p className="mt-5 text-muted-foreground">Pick a model that matches your stage — change it anytime.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={`relative rounded-3xl p-8 h-full transition-all duration-500 hover:-translate-y-1 ${
                  p.highlight
                    ? "glass-card glow-border shadow-[var(--shadow-elegant)] scale-[1.02]"
                    : "glass-card"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                    <Sparkles className="h-3 w-3" /> Most popular
                  </span>
                )}
                <h3 className="font-semibold">{p.name}</h3>
<div className="mt-4">
  <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
    Custom Pricing
  </span>
</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 w-full rounded-xl ${
                    p.highlight
                      ? "bg-[image:var(--gradient-primary)] text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  <a href="#contact">{p.cta}</a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}