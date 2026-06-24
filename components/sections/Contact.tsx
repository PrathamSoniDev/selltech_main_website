"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2, AlertCircle } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/shared/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig } from "@/lib/seo";
import { serviceOptions } from "@/lib/content";

type Status = "idle" | "loading" | "ok" | "err";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [service, setService] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    (data as Record<string, unknown>).service = service;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? "Something went wrong.");
      setStatus("ok");
      form.reset();
      setService("");
    } catch (err) {
      setStatus("err");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="px-6 pb-20 pt-40">
      <div className="container-x grid grid-cols-1 items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal><Eyebrow>01 · Start the conversation</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              Tell us about your <em>project.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub">
              A senior strategist will reply within one business day with a written perspective and the next step. No sales reps, no scripted discovery calls.
            </p>
          </Reveal>

          <ul className="mt-10 flex flex-col gap-4">
            {[
              ["Email",   <a key="e" href={`mailto:${siteConfig.contact.email}`} className="text-ink-0 hover:text-brand-cyan">{siteConfig.contact.email}</a>],
              ["Phone",   <a key="p" href={siteConfig.contact.phoneHref}        className="text-ink-0 hover:text-brand-cyan">{siteConfig.contact.phone}</a>],
              ["HQ",      <span key="hq" className="text-ink-0">{siteConfig.contact.address}</span>],
              ["Founder", <a key="f" href={siteConfig.founder.github} target="_blank" rel="noopener noreferrer" className="text-ink-0 hover:text-brand-cyan">github.com/PrathamSoniDev</a>],
            ].map(([label, value]) => (
              <li
                key={label as string}
                className="grid grid-cols-[90px_1fr] items-baseline gap-4 border-b border-line pb-4"
              >
                <b className="font-mono text-[11px] uppercase tracking-[0.18em] font-normal text-ink-3">
                  {label}
                </b>
                <span className="text-[15px]">{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="relative flex flex-col gap-4 rounded-3xl border border-line p-8"
            style={{
              background:
                "radial-gradient(600px 200px at 0% 0%, rgba(0,212,255,.08), transparent 60%), linear-gradient(180deg, rgba(11,17,32,.7), rgba(5,8,22,.85))",
            }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Aria Mehta" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="aria@company.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 99 9999 9999" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" placeholder="Acme Inc." />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="service">Service</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="service" aria-required>
                  <SelectValue placeholder="Select a service…" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Project details</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What are you building? Where are you stuck? What does 'good' look like in 90 days?"
              />
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-[38ch] text-xs text-ink-3">
                By submitting you agree to our{" "}
                <a href="#" className="text-ink-1 underline">privacy notice</a>. We never share contact data.
              </p>
              <button
                type="submit"
                disabled={status === "loading" || !service}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    Sending… <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send brief <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>

            {status === "ok" && (
              <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-brand-cyan/35 bg-brand-cyan/10 px-4 py-3.5 font-mono text-sm tracking-[0.04em] text-brand-cyan">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-cyan font-sans font-bold text-[#04060f]">
                  <Check className="h-3 w-3" />
                </span>
                Thanks — your brief is in. A strategist will reply within 24 hours.
              </div>
            )}
            {status === "err" && (
              <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3.5 font-mono text-sm tracking-[0.04em] text-red-300">
                <AlertCircle className="h-4 w-4" />
                {errorMsg ?? "Something went wrong. Please email us directly."}
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
