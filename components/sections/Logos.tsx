const LOGOS = [
  "NORTHWIND",
  "◆ Apex Labs",
  "Polaris · AI",
  "Helio⁹",
  "VIRIDIAN",
  "Quanta Loop",
  "FORGE/X",
  "Lumen Health",
  "Drift ○",
  "MERIDIAN FI",
];

export function Logos() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <section id="logos" className="px-6 pb-10 pt-14">
      <div className="container-x">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-7">
          Trusted by ambitious teams building category-defining products
        </p>
        <div className="relative overflow-hidden mask-fade-x">
          <div className="inline-flex animate-ticker gap-16 whitespace-nowrap">
            {row.map((label, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 font-display text-[26px] tracking-[-0.01em] text-ink-2/70 transition-all hover:text-ink-0 hover:opacity-100"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
