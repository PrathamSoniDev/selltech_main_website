import { Github, Linkedin, Twitter, Sparkles } from "lucide-react";

export function Footer() {
  const cols = [
    { title: "Services", links: ["Mobile Apps", "SaaS Platforms", "Custom Software", "Websites", "AI & Automation"] },
    { title: "Company", links: ["About", "Process", "Portfolio", "Pricing", "Contact"] },
    { title: "Resources", links: ["Blog", "Case Studies", "Careers", "Security", "Status"] },
  ];
  return (
    <footer className="relative border-t border-border/40 pt-20 pb-10">
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:linear-gradient(to_top,black,transparent)]" />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-tight">SellTech <span className="text-muted-foreground">IND. Productions</span></span>
            </a>
            <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
              Building scalable digital experiences — mobile apps, SaaS platforms, websites and
              enterprise solutions for startups, businesses and brands.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Twitter, Linkedin, Github].map((I, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SellTech Ind. Productions. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}