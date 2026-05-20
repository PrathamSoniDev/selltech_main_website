import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

function Counter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, to, duration]);
  return (
    <span ref={ref} className="text-4xl md:text-6xl font-bold text-gradient tabular-nums">
      {n.toLocaleString()}{suffix}
    </span>
  );
}

export function Stats() {
  const items = [
    { to: 180, suffix: "+", label: "Products shipped" },
    { to: 99, suffix: "%", label: "Client retention" },
    { to: 24, suffix: "/7", label: "Global support" },
    { to: 12, suffix: "+", label: "Years of craft" },
  ];
  return (
    <section className="py-20 md:py-24 border-y border-border/40 relative">
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at center, oklch(0.78 0.18 155 / 0.08), transparent 70%)" }} />
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {items.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2">
            <Counter to={s.to} suffix={s.suffix} />
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}