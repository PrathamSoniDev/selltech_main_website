import { useEffect, useState } from "react";
import { Reveal } from "@/hooks/use-reveal";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const items = [
  {
    quote: "SellTech shipped our SaaS MVP in 7 weeks and stayed on as our platform team. It's the most aligned partnership we've had.",
    name: "Amelia Chen", role: "Co-founder, Helios Cloud",
  },
  {
    quote: "Their AI-augmented workflow genuinely compresses timelines. We launched two products in the time we'd normally take for one.",
    name: "Marcus Rivera", role: "VP Engineering, Northwind",
  },
  {
    quote: "Beautiful design, rock-solid engineering and zero hand-holding. They feel like an extension of our team.",
    name: "Priya Natarajan", role: "Head of Product, Aperture",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);
  const item = items[i];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at center, oklch(0.72 0.16 220 / 0.08), transparent 70%)" }} />
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Loved by founders, <span className="text-gradient">trusted by enterprises</span>
            </h2>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <div className="relative glass-card glow-border rounded-3xl p-8 md:p-12 text-center min-h-[280px] flex flex-col items-center justify-center">
            <Quote className="h-10 w-10 text-primary/40 mb-4" />
            <p key={i} className="text-xl md:text-2xl font-medium leading-relaxed animate-fade-in">
              “{item.quote}”
            </p>
            <div className="mt-6 flex items-center justify-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-primary" />)}
            </div>
            <div className="mt-3 text-sm">
              <span className="font-semibold">{item.name}</span>
              <span className="text-muted-foreground"> · {item.role}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous"
              onClick={() => setI((x) => (x - 1 + items.length) % items.length)}
              className="h-10 w-10 rounded-full glass-card hover:bg-secondary/60 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Go to ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"}`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => setI((x) => (x + 1) % items.length)}
              className="h-10 w-10 rounded-full glass-card hover:bg-secondary/60 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}