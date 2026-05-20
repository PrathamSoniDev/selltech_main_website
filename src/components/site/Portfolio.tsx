import { Reveal } from "@/hooks/use-reveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { name: "Helios Cloud", tag: "SaaS Platform", desc: "Multi-tenant analytics suite scaled to 2.4M MAU.", grad: "from-emerald-500/30 to-cyan-500/20" },
  { name: "Northwind Mobile", tag: "iOS / Android", desc: "Fintech app processing $80M+ in monthly volume.", grad: "from-cyan-500/30 to-blue-500/20" },
  { name: "Aperture Commerce", tag: "Web · Headless", desc: "Headless storefront with +62% conversion lift.", grad: "from-violet-500/30 to-fuchsia-500/20" },
  { name: "Orbital AI", tag: "AI Copilot", desc: "LLM-powered ops copilot for a Fortune 500 team.", grad: "from-amber-500/30 to-rose-500/20" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-3">Selected work</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Products our partners <span className="text-gradient">love to ship</span>
              </h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              See full portfolio <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="group relative rounded-3xl overflow-hidden glass-card glow-border h-72 cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.grad} opacity-80 transition-transform duration-700 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="relative h-full p-7 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary mb-2">{p.tag}</span>
                  <h3 className="text-2xl font-semibold flex items-center justify-between">
                    {p.name}
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}