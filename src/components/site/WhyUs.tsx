import { Reveal } from "@/hooks/use-reveal";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Senior-only engineering", desc: "No juniors learning on your dime — every line written by experienced engineers." },
  { title: "AI-augmented delivery", desc: "Our internal copilots compress timelines without compromising quality or ownership." },
  { title: "Fixed-scope, fixed-price", desc: "Transparent sprints with clear milestones, demos and predictable budgets." },
  { title: "Product, not just code", desc: "Design, analytics and growth thinking baked into every build, not bolted on later." },
  { title: "Long-term partnership", desc: "Most clients stay for years — we ship v2, v3 and beyond with you." },
  { title: "Enterprise-grade security", desc: "SOC 2-aligned practices, observability and zero-trust patterns out of the box." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-4">Why SellTech</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              The unfair advantage <br /><span className="text-gradient">for digital teams</span>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We combine the speed of a startup studio with the discipline of an enterprise partner,
              so you move faster without breaking what matters.
            </p>
            <div className="mt-8 glass-card rounded-2xl p-6 glow-border">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Average outcome</div>
              <div className="mt-2 text-3xl font-bold">3.4× faster <span className="text-gradient">time-to-market</span></div>
              <div className="mt-1 text-sm text-muted-foreground">vs. industry benchmark across 180+ shipped products</div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="flex gap-3 p-5 rounded-2xl glass-card h-full hover:bg-secondary/40 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">{r.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}