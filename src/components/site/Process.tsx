import { Reveal } from "@/hooks/use-reveal";
import { Compass, PencilRuler, Code2, Rocket, LineChart } from "lucide-react";

const steps = [
  { icon: Compass, title: "Discover", desc: "We map your goals, users and constraints into a sharp product brief." },
  { icon: PencilRuler, title: "Design", desc: "Interaction, brand and systems design that's both beautiful and shippable." },
  { icon: Code2, title: "Build", desc: "Senior engineers + AI copilots iterate weekly with live demos and previews." },
  { icon: Rocket, title: "Launch", desc: "We ship to production with CI/CD, observability and a polished go-live." },
  { icon: LineChart, title: "Scale", desc: "Ongoing product, growth and platform partnership as you compound." },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-4">Process</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              A workflow built for <span className="text-gradient">momentum</span>
            </h2>
            <p className="mt-5 text-muted-foreground">From kickoff to scale in five disciplined stages.</p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="text-center">
                  <div className="relative mx-auto h-24 w-24">
                    <div className="absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-2xl animate-glow-pulse" />
                    <div className="relative h-24 w-24 rounded-full glass-card glow-border flex items-center justify-center">
                      <s.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground text-xs font-semibold flex items-center justify-center shadow-[var(--shadow-glow)]">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}