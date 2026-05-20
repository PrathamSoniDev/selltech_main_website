const logos = [
  "Northwind", "Acme Co.", "Lumen", "Stellar", "Quantix", "Vantage", "Helios", "Orbital", "Aperture", "Nimbus",
];

export function LogoMarquee() {
  return (
    <section className="py-12 border-y border-border/40 bg-secondary/20">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trusted by ambitious teams shipping with SellTech
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-16 animate-marquee whitespace-nowrap will-change-transform">
            {[...logos, ...logos].map((name, i) => (
              <span key={i} className="text-2xl font-semibold tracking-tight text-muted-foreground/70 hover:text-foreground transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}