"use client";

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export function CursorTrail() {
  const isMobile = useIsMobile(900);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile || !dot.current || !ring.current) return;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const hoverables = document.querySelectorAll<HTMLElement>(
      'a, button, [data-hoverable="true"]'
    );
    const onEnter = () => ring.current?.classList.add("is-hover");
    const onLeave = () => ring.current?.classList.remove("is-hover");
    hoverables.forEach((el) => {
      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointerleave", onLeave);
    });

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      hoverables.forEach((el) => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointerleave", onLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;
  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="cursor-dot fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference w-1.5 h-1.5 rounded-full bg-white transition-[width,height] duration-200"
      />
      <div
        ref={ring}
        aria-hidden
        className="cursor-ring fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference w-[34px] h-[34px] rounded-full border border-white/55 transition-[width,height,border-color] duration-300"
      />
      <style jsx global>{`
        .cursor-ring.is-hover {
          width: 64px;
          height: 64px;
          border-color: #22d3ee;
        }
      `}</style>
    </>
  );
}
