import { siteConfig } from "@/lib/seo";
import Image from "next/image";
const groups = [
  {
    title: "Services",
    links: [
      ["#services", "Software Development"],
      ["#services", "SaaS Development"],
      ["#services", "AI Solutions"],
      ["#services", "Mobile Apps"],
      ["#services", "Blockchain"],
      ["#services", "Game Development"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["#products", "Custom Software"],
      ["#products", "SaaS Platforms"],
      ["#products", "AI Automation"],
      ["#products", "Enterprise Solutions"],
      ["#products", "Startup MVPs"],
    ],
  },
  {
    title: "Company",
    links: [
      ["#about", "About"],
      ["#work", "Work"],
      ["#process", "Process"],
      ["#contact", "Contact"],
      ["#", "Careers"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative z-[2] mt-16 overflow-hidden border-t border-line px-6 pb-8 pt-20">
      <div className="container-x grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
        {/* brand */}
        <div>
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
          <p className="mt-4 max-w-[36ch] text-sm text-ink-2">
            Sell Tech IND. Productions is a leading software development company
            in Jaipur, Rajasthan providing website development, mobile app
            development, AI solutions, SaaS development, blockchain development,
            UI/UX design, and digital marketing services for startups, SMEs, and
            enterprises across India, the United States, Canada, Australia, and
            the UAE.
          </p>
          <div className="mt-5 flex gap-2.5">
            {[
              ["GH", siteConfig.socials.github, "GitHub"],
              ["in", siteConfig.socials.linkedin, "LinkedIn"],
              ["X", siteConfig.socials.twitter, "X"],
              ["Is", siteConfig.socials.Instagram, "Instagram"],
            ].map(([label, href, aria]) => (
              <a
                key={aria}
                href={href}
                aria-label={aria}
                target={href !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-line-strong font-mono text-[11px] text-ink-1 transition-all hover:border-brand-cyan hover:bg-brand-cyan hover:text-[#04060f]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.title}>
            <h5 className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3 font-normal">
              {group.title}
            </h5>
            {group.links.map(([href, label]) => (
              <a
                key={label}
                href={href}
                className="block py-1 text-[13.5px] text-ink-1 transition-colors hover:text-brand-cyan"
              >
                {label}
              </a>
            ))}
          </div>
        ))}

        <div>
          <h5 className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3 font-normal">
            Contact
          </h5>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="block py-1 text-[13.5px] text-ink-1 hover:text-brand-cyan"
          >
            {siteConfig.contact.email}
          </a>
          <a
            href={siteConfig.contact.phoneHref}
            className="block py-1 text-[13.5px] text-ink-1 hover:text-brand-cyan"
          >
            {siteConfig.contact.phone}
          </a>
          <span className="block py-1 text-[13.5px] text-ink-1">
            {siteConfig.contact.address}
          </span>
          <span className="block py-1 text-[13.5px] text-ink-1">
            {siteConfig.contact.hours}
          </span>
        </div>
      </div>

      <div className="container-x mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 font-mono text-[11px] tracking-[0.06em] text-ink-3">
        <span>
          © {new Date().getFullYear()} SellTech Ind. Productions. All rights
          reserved.
        </span>
        <span>Crafted with intent in Mumbai · Shipped to the world.</span>
      </div>

      <div
        aria-hidden
        className="container-x mt-8 select-none text-center font-display font-normal leading-[0.85] tracking-[-0.04em] text-transparent bg-clip-text"
        style={{
          fontSize: "clamp(80px, 22vw, 320px)",
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,.07) 0%, rgba(34,211,238,.04) 60%, transparent 100%)",
        }}
      >
        SELLTECH
      </div>
    </footer>
  );
}
