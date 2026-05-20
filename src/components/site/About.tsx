import { Reveal } from "@/hooks/use-reveal";
import { Globe2, Layers, ShieldCheck, Zap } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Velocity",
    desc: "Ship MVPs in weeks, not quarters — with engineering rigor baked in.",
  },

  {
    icon: Layers,
    title: "Scale",
    desc: "Architected for millions of users from day one, across web, mobile and cloud.",
  },

  {
    icon: ShieldCheck,
    title: "Trust",
    desc: "Enterprise-grade security, observability and compliance by default.",
  },

  {
    icon: Globe2,
    title: "Reach",
    desc: "Global delivery teams partnering with founders and Fortune 500s alike.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <Reveal>
            <header>
              <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-primary">
                About
              </span>

              <h2 id="about-heading" className="text-3xl md:text-5xl font-bold tracking-tight">
                A product studio for the <span className="text-gradient">AI-native era</span>.
              </h2>
            </header>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              SellTech Ind. Productions is a modern software studio building scalable digital
              experiences for startups, businesses and brands. We blend senior human engineering
              with AI-augmented workflows to deliver mobile apps, SaaS platforms, websites and
              enterprise systems that compound your growth.
            </p>

            {/* SEO-friendly stats */}
            <div className="mt-8 grid grid-cols-3 gap-6" aria-label="Company statistics">
              {[
                { k: "12+", v: "Years of craft" },
                { k: "180+", v: "Products shipped" },
                { k: "40+", v: "Global clients" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-3xl md:text-4xl font-bold text-gradient">{s.k}</div>

                  <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Feature pillars */}
          <div className="grid gap-4 sm:grid-cols-2" aria-label="Core company strengths">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="glass-card glow-border h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <p.icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-semibold">{p.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
