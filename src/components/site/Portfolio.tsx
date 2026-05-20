import { Reveal } from "@/hooks/use-reveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Modern E-Commerce Ecosystem",
    category: "E-Commerce Platforms",
    description:
      "Scalable e-commerce websites and mobile applications with real-time inventory, payment gateways, analytics, and AI-powered customer experiences.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "HealthTech Patient Platform",
    category: "Healthcare Applications",
    description:
      "Digital healthcare systems with appointment booking, patient dashboards, telemedicine integration, and secure health record management.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Smart Booking & Service Apps",
    category: "Booking Solutions",
    description:
      "End-to-end booking platforms for salons, services, consultations, hotels, and local businesses with automation and live scheduling.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Jumper Learning Platform",
    category: "EdTech Solutions",
    description:
      "Interactive educational platforms for institutes and coaching systems with live classes, student dashboards, assessments, and AI-assisted learning.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container relative mx-auto px-4">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-3xl">
              <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-3">
                Industries We Build For
              </span>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Real digital solutions for{" "}
                <span className="text-gradient">
                  modern industries
                </span>
              </h2>

              <p className="mt-5 text-muted-foreground text-lg">
                From scalable SaaS ecosystems to enterprise-grade applications,
                we engineer high-performance digital products tailored for
                modern businesses and institutions.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Discuss your project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <article className="group relative overflow-hidden rounded-3xl glass-card glow-border min-h-[420px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)]">
                
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />

                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <span className="mb-3 inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                    {project.category}
                  </span>

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                      {project.title}
                    </h3>

                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}