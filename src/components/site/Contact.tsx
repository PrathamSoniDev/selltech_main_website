import { useState } from "react";
import { Reveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at center, oklch(0.78 0.18 155 / 0.1), transparent 70%)" }} />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Reveal>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-4">Contact</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Let's build your <span className="text-gradient">next big thing</span>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Tell us about your idea, product or platform. We'll respond within one business day with
              a tailored plan and a no-pressure quote.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, label: "hello@selltechind.com" },
                { icon: Phone, label: "+1 (415) 555-0142" },
                { icon: MapPin, label: "Remote-first · Global delivery" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3 text-sm">
                  <span className="h-10 w-10 rounded-xl glass-card flex items-center justify-center text-primary">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/90">{c.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass-card glow-border rounded-3xl p-7 md:p-9 shadow-[var(--shadow-elegant)]"
            >
              {sent ? (
                <div className="text-center py-10 animate-fade-in-up">
                  <CheckCircle2 className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold">Message received</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within one business day.</p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-muted-foreground">Name</label>
                      <Input required placeholder="Your name" className="bg-secondary/40 border-border/60 rounded-xl h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-muted-foreground">Email</label>
                      <Input required type="email" placeholder="you@company.com" className="bg-secondary/40 border-border/60 rounded-xl h-11" />
                    </div>
                  </div>
                  <div className="space-y-1.5 mt-4">
                    <label className="text-xs text-muted-foreground">Company</label>
                    <Input placeholder="Company (optional)" className="bg-secondary/40 border-border/60 rounded-xl h-11" />
                  </div>
                  <div className="space-y-1.5 mt-4">
                    <label className="text-xs text-muted-foreground">Project brief</label>
                    <Textarea required rows={4} placeholder="Tell us about your product or idea…" className="bg-secondary/40 border-border/60 rounded-xl" />
                  </div>
                  <Button
                    type="submit"
                    className="mt-6 w-full h-12 rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)] group"
                  >
                    Send message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}