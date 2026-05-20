import { Reveal } from "@/hooks/use-reveal";
import { Globe2, Layers, ShieldCheck, Zap } from "lucide-react";

const pillars = [
  { icon: Zap, title: "Velocity", desc: "Ship MVPs in weeks, not quarters — with engineering rigor baked in." },
  { icon: Layers, title: "Scale", desc: "Architected for millions of users from day one, across web, mobile and cloud." },
  { icon: ShieldCheck, title: "Trust", desc: "Enterprise-grade security, observability and compliance by default." },
  { icon: Globe2, title: "Reach", desc: "Global delivery teams partnering with founders and Fortune 500s alike." },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-4">About</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              A product studio for the <span className="text-gradient">AI-native era</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              SellTech Ind. Productions is a modern software studio building scalable digital experiences
              for startups, businesses and brands. We blend senior human engineering with AI-augmented
              workflows to deliver mobile apps, SaaS platforms, websites and enterprise systems that
              compound your growth.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { k: "12+", v: "Years of craft" },
                { k: "180+", v: "Products shipped" },
                { k: "40+", v: "Global clients" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-3xl md:text-4xl font-bold text-gradient">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="glass-card glow-border rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}