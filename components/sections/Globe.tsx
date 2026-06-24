"use client";

import { useEffect, useRef } from "react";
import { Reveal, Eyebrow } from "@/components/shared/Reveal";
import { hubs } from "@/lib/content";

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = c.getBoundingClientRect();
      c.width = r.width * dpr;
      c.height = r.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(c);
    resize();

    // dotted "world map" approximation
    const dots: [number, number][] = [];
    for (let y = 0; y < 60; y++) {
      for (let x = 0; x < 120; x++) {
        const lat = (y / 60) * 180 - 90;
        const lon = (x / 120) * 360 - 180;
        const land =
          (lon > -20 &&
            lon < 55 &&
            lat > -35 &&
            lat < 60 &&
            Math.random() < 0.55) ||
          (lon > 55 &&
            lon < 150 &&
            lat > 0 &&
            lat < 70 &&
            Math.random() < 0.55) ||
          (lon > 110 &&
            lon < 155 &&
            lat > -40 &&
            lat < -10 &&
            Math.random() < 0.6) ||
          (lon > -130 &&
            lon < -60 &&
            lat > 10 &&
            lat < 70 &&
            Math.random() < 0.55) ||
          (lon > -80 &&
            lon < -35 &&
            lat > -55 &&
            lat < 12 &&
            Math.random() < 0.55);
        if (land) dots.push([x / 120, y / 60]);
      }
    }

    const hq = hubs.find((h) => (h as any).hq) ?? hubs[0];
    const arcs = hubs
      .filter((h) => !(h as any).hq)
      .map((h, idx) => ({
        x1: hq.x,
        y1: hq.y,
        x2: h.x,
        y2: h.y,
        phase: idx * 0.9,
      }));

    let raf = 0;
    const draw = (t: number) => {
      const w = c.clientWidth;
      const h = c.clientHeight;
      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = "rgba(120,160,220,.18)";
      dots.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x * w, y * h, 1.1, 0, Math.PI * 2);
        ctx.fill();
      });

      arcs.forEach((a) => {
        const x1 = a.x1 * w,
          y1 = a.y1 * h;
        const x2 = a.x2 * w,
          y2 = a.y2 * h;
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.35;

        const grd = ctx.createLinearGradient(x1, y1, x2, y2);
        grd.addColorStop(0, "rgba(0,212,255,0)");
        grd.addColorStop(0.5, "rgba(0,212,255,.6)");
        grd.addColorStop(1, "rgba(232,121,249,0)");
        ctx.strokeStyle = grd;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(mx, my, x2, y2);
        ctx.stroke();

        const k = (Math.sin(t * 0.0008 + a.phase) + 1) / 2;
        const bx = (1 - k) * (1 - k) * x1 + 2 * (1 - k) * k * mx + k * k * x2;
        const by = (1 - k) * (1 - k) * y1 + 2 * (1 - k) * k * my + k * k * y2;
        ctx.fillStyle = "rgba(34,211,238,1)";
        ctx.beginPath();
        ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(34,211,238,.25)";
        ctx.beginPath();
        ctx.arc(bx, by, 7, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <section id="globe" className="overflow-hidden px-6 py-40">
      <div className="container-x grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <Eyebrow>Global delivery · 9 markets</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              Engineering rooted in India.
              <br />
              <em>Shipped across nine time zones.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub">
              Headquartered in India with delivery cells overlapping every major
              Western and APAC time zone. Always-on, never outsourced.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 grid grid-cols-3 gap-2.5">
              {hubs.map((h) => (
                <div
                  key={h.code}
                  data-hoverable="true"
                  className="flex flex-col gap-0.5 rounded-[12px] border border-line bg-[rgba(11,17,32,.55)] p-3.5 transition-all hover:-translate-y-0.5 hover:border-brand-cyan"
                >
                  <b className="font-mono text-[12px] tracking-[0.1em] text-brand-cyan">
                    {h.code}
                  </b>
                  <span className="text-xs text-ink-1">{h.city}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div
          className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,212,255,.08), transparent 70%), linear-gradient(180deg, #06091A, #03050F)",
          }}
        >
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
          {hubs.map((h) => (
            <div
              key={h.code}
              className="absolute z-[3] -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${h.x * 100}%`, top: `${h.y * 100}%` }}
            >
              <span
                className="block h-2.5 w-2.5 rounded-full bg-brand-cyan animate-pin-pulse"
                style={{ boxShadow: "0 0 14px #22d3ee" }}
              />
              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-cyan animate-pin-ring"
              />
              <b className="absolute left-3.5 -top-0.5 rounded border border-line bg-[rgba(7,11,28,.85)] px-1.5 py-0.5 font-mono text-[10px] tracking-[0.1em] text-ink-1">
                {h.code}
              </b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
