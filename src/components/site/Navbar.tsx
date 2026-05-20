import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-[var(--shadow-elegant)]" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl shadow-[var(--shadow-glow)] transition-transform duration-300 group-hover:scale-110">
              <img
                src="/Sell-tech.png"
                alt="SellTech Logo"
                className="h-full w-full object-cover"
              />
            </span>

            <span className="font-semibold tracking-tight text-sm sm:text-base">
              SellTech <span className="text-muted-foreground">IND.</span> Productions
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors hover:bg-secondary/50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            {/* <Button variant="ghost" asChild>
              <a href="#contact">Sign in</a>
            </Button> */}
            <Button
              asChild
              className="bg-[image:var(--gradient-primary)] text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)] rounded-xl"
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary/50"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 animate-fade-in-up">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block px-4 py-3 rounded-lg hover:bg-secondary/60 text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  asChild
                  className="w-full bg-[image:var(--gradient-primary)] text-primary-foreground rounded-xl"
                >
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Get Started
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
