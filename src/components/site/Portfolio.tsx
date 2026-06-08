import { Reveal } from "@/hooks/use-reveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Website Development",
    category: "Web Solutions",
    description:
      "Custom corporate websites, business portals, landing pages, e-commerce platforms, and enterprise web applications built for performance, scalability, and conversion.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Mobile App Development",
    category: "iOS • Android • Flutter • React Native",
    description:
      "High-performance cross-platform and native mobile applications with modern UI, secure architecture, real-time features, and seamless user experiences.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "SaaS Development",
    category: "Cloud Platforms",
    description:
      "Scalable SaaS platforms with subscription management, multi-tenant architecture, dashboards, analytics, automation, and enterprise-grade infrastructure.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Blockchain Development",
    category: "Web3 Solutions",
    description:
      "Smart contracts, decentralized applications (DApps), token ecosystems, NFT platforms, and blockchain-powered business solutions with secure implementation.",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Game Development",
    category: "2D • 3D • Multiplayer",
    description:
      "Immersive mobile, web, and desktop games with engaging gameplay, multiplayer systems, monetization features, and high-quality graphics.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "UI/UX Design",
    category: "Product Design",
    description:
      "User-centered design systems, wireframes, prototypes, dashboards, mobile interfaces, and modern digital experiences focused on usability and engagement.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Digital Marketing",
    category: "Growth & Branding",
    description:
      "SEO, social media marketing, paid advertising, lead generation, content strategy, and performance-driven campaigns to accelerate business growth.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Custom Software Development",
    category: "Enterprise Solutions",
    description:
      "Tailor-made software systems, CRMs, ERPs, business automation platforms, and enterprise applications designed around your operational requirements.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container relative mx-auto px-4">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-3xl">
              <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-3">
                Industries We Build For
              </span>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Real digital solutions for <span className="text-gradient">modern industries</span>
              </h2>

              <p className="mt-5 text-muted-foreground text-lg">
                From scalable SaaS ecosystems to enterprise-grade applications, we engineer
                high-performance digital products tailored for modern businesses and institutions.
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
