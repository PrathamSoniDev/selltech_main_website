import { ArrowRight, Play, Sparkles, Cpu, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute -z-10 top-1/3 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div
        className="absolute -z-10 top-1/4 right-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            You Dream It We Build It
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            Custom software that <span className="text-gradient">scales your business</span>{" "}
            <span className="inline-flex items-center gap-3 text-3xl sm:text-4xl md:text-5xl align-middle font-medium text-muted-foreground">
              is <Fingerprint className="h-8 w-8 md:h-10 md:w-10 text-primary" /> human
              <span className="text-primary">+</span>
              <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-accent" /> AI
            </span>
          </h1>

          <p
            className="mt-7 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "260ms" }}
          >
            SellTech Ind. Productions delivers modern mobile applications, scalable software
            systems, high-converting websites, SaaS platforms, and enterprise-grade digital
            solutions designed to help startups, businesses, and brands grow faster in the digital
            world.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[image:var(--gradient-primary)] text-primary-foreground hover:opacity-90 rounded-xl shadow-[var(--shadow-glow)] h-12 px-6 group"
            >
              <a href="#contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-xl h-12 px-6 glass border border-border/60 bg-transparent text-white hover:bg-primary hover:text-white hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <a href="#portfolio">
                <Play className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">View Portfolio</span>
              </a>
            </Button>
          </div>

          {/* Floating UI preview */}
          <div
            className="mt-16 relative max-w-5xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "560ms" }}
          >
            <div className="absolute -inset-4 bg-[image:var(--gradient-primary)] opacity-20 blur-3xl rounded-3xl animate-glow-pulse" />
            <div className="relative glass-card glow-border rounded-3xl p-2 sm:p-3 shadow-[var(--shadow-elegant)]">
              <div className="rounded-2xl overflow-hidden bg-[oklch(0.13_0.02_250)] border border-border/40">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-destructive/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <span className="h-3 w-3 rounded-full bg-primary/70" />
                  </div>
                  <div className="ml-3 text-xs text-muted-foreground font-mono">
                    CRM APP / dashboard
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-3 p-4">
                  <div className="col-span-3 hidden md:flex flex-col gap-2">
                    {["Overview", "Projects", "Pipelines", "AI Agents", "Settings"].map(
                      (i, idx) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${idx === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}
                        >
                          <Cpu className="h-3 w-3" /> {i}
                        </div>
                      ),
                    )}
                  </div>
                  <div className="col-span-12 md:col-span-9 grid grid-cols-3 gap-3">
                    {[
                      { label: "MRR", value: "$148k", trend: "+24%" },
                      { label: "Active users", value: "12,480", trend: "+18%" },
                      { label: "Uptime", value: "99.99%", trend: "30d" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-border/40 bg-secondary/30 p-3 text-left"
                      >
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {s.label}
                        </div>
                        <div className="mt-1 text-lg font-semibold">{s.value}</div>
                        <div className="text-[10px] text-primary">{s.trend}</div>
                      </div>
                    ))}
                    <div className="col-span-3 rounded-xl border border-border/40 bg-secondary/20 p-4 h-40 relative overflow-hidden">
                      <div className="absolute inset-x-4 bottom-4 flex items-end gap-1.5 h-24">
                        {Array.from({ length: 28 }).map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-[image:var(--gradient-primary)] opacity-80"
                            style={{ height: `${20 + Math.abs(Math.sin(i * 0.6)) * 80}%` }}
                          />
                        ))}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Weekly velocity
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <div className="hidden md:block absolute -left-6 top-1/3 glass-card rounded-2xl px-4 py-3 animate-float">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Deploy
              </div>
              <div className="text-sm font-semibold flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> Production
              </div>
            </div>
            <div
              className="hidden md:block absolute -right-6 top-1/2 glass-card rounded-2xl px-4 py-3 animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                AI Copilot
              </div>
              <div className="text-sm font-semibold">Shipped 24 PRs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
