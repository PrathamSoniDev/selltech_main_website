"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";
import Image from "next/image";
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-4 top-4 z-[100] mx-auto flex max-w-[1240px] items-center justify-between rounded-full border border-line px-5 py-3.5 backdrop-blur-xl transition-all duration-300",
        scrolled ? "bg-bg-0/85 border-line-strong" : "bg-[rgba(7,11,28,.55)]",
      )}
      style={{ backdropFilter: "blur(20px) saturate(140%)" }}
    >
      <a
        href="#top"
        className="inline-flex items-center gap-3 font-mono text-[13px]"
      >
        <Image
          src="/Sell tech.png"
          alt="Sell Tech IND. Productions Logo"
          width={50}
          height={50}
          className="object-contain"
          priority
        />

        <div className="flex flex-col leading-tight">
          <div className="font-semibold text-ink-0 text-lg">
            Sell<span className="text-brand-cyan">Tech</span>
            <sup className="ml-0.5 text-[9px] text-ink-3">®</sup>
          </div>

          <span className="text-[11px] text-ink-3 tracking-[0.12em] uppercase">
            IND. Productions
          </span>
        </div>
      </a>

      <nav
        aria-label="Primary"
        className="hidden md:flex gap-7 text-[13px] text-ink-1"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative py-1.5 transition-colors hover:text-ink-0 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-brand-cyan after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold text-[#04060f] transition-transform hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(180deg,#fff,#dfe9ff)",
            boxShadow:
              "0 10px 30px rgba(0,212,255,.18), inset 0 -1px 0 rgba(0,0,0,.18)",
          }}
        >
          <span>Start a project</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-ink-1"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute left-0 right-0 top-[calc(100%+12px)] mx-auto flex flex-col gap-1 rounded-2xl border border-line bg-bg-0/95 p-2 backdrop-blur-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[15px] text-ink-1 hover:bg-white/5 hover:text-ink-0"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-block h-[22px] w-[22px] rounded-[6px]",
        className,
      )}
      style={{
        background:
          "conic-gradient(from 220deg, #22D3EE, #8B5CF6, #00D4FF, #22D3EE)",
        boxShadow:
          "0 0 22px rgba(34,211,238,.55), inset 0 0 8px rgba(255,255,255,.4)",
      }}
    >
      <span
        className="absolute inset-1 rounded-[4px]"
        style={{ background: "rgba(5,8,22,.85)", backdropFilter: "blur(3px)" }}
      />
    </span>
  );
}
