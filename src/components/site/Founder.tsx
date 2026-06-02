import { Reveal } from "@/hooks/use-reveal";
import { ArrowUpRight, Briefcase, Building2, Rocket } from "lucide-react";

export function FounderSection() {
  return (
    <section id="founder" className="relative py-24 md:py-32" aria-labelledby="founder-heading">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 items-center lg:grid-cols-2">
          {/* Founder Image */}
          <Reveal>
            <div className="glass-card glow-border overflow-hidden rounded-3xl">
              <img
                src="/me.jpeg"
                alt="Pratham Soni Founder & CEO"
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal>
            <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-primary">
              Leadership
            </span>

            <h2 id="founder-heading" className="text-3xl md:text-5xl font-bold tracking-tight">
              Building Technology That <span className="text-gradient">Scales</span>
            </h2>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Sell Tech Ind. Productions was founded with a vision to help startups, businesses, and
              enterprises transform ideas into scalable digital products.
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Led by founder Pratham Soni, we focus on building high-performance mobile
              applications, SaaS platforms, websites, AI-powered systems, and custom software
              solutions that solve real business challenges.
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our mission is simple: combine innovation, design, and engineering excellence to help
              businesses grow faster through technology.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                {
                  icon: Rocket,
                  value: "100+",
                  label: "Projects Delivered",
                },
                {
                  icon: Building2,
                  value: "25+",
                  label: "Industries Served",
                },
                {
                  icon: Briefcase,
                  value: "Global",
                  label: "Clients",
                },
                {
                  icon: ArrowUpRight,
                  value: "Startup",
                  label: "To Enterprise",
                },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-2xl p-5">
                  <item.icon className="h-5 w-5 text-primary mb-3" />

                  <div className="text-2xl font-bold text-gradient">{item.value}</div>

                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <blockquote className="glass-card glow-border mt-8 rounded-2xl p-6">
              <p className="italic text-muted-foreground">
                "Technology should not just solve today's problems—it should create opportunities
                for tomorrow."
              </p>

              <footer className="mt-4">
                <div className="font-semibold">Pratham Soni</div>

                <div className="text-sm text-muted-foreground">
                  Founder & CEO, Sell Tech Ind. Productions
                </div>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
