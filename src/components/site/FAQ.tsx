import { Reveal } from "@/hooks/use-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What kind of products do you build?", a: "Modern mobile apps, scalable software systems, high-converting websites, SaaS platforms, and enterprise-grade digital solutions across industries." },
  { q: "How fast can we start?", a: "Most engagements kick off within a week of our discovery call. For sprint-based work, we typically demo something working in the first 7–10 days." },
  { q: "Do you work with non-technical founders?", a: "Absolutely. We help translate vision into a product spec, then handle design, engineering, infra and growth so you can focus on the business." },
  { q: "How do you use AI in delivery?", a: "Our internal copilots accelerate boilerplate, tests and reviews — so senior engineers can focus on architecture, quality and product thinking." },
  { q: "Who owns the code?", a: "You do. We hand over clean repositories, infrastructure and documentation from day one." },
  { q: "Do you offer ongoing support?", a: "Yes — most clients stay on a retainer for ongoing product, platform and growth work after launch." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-4">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Questions, <span className="text-gradient">answered</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="glass-card rounded-2xl border-none px-6 data-[state=open]:shadow-[var(--shadow-elegant)]"
              >
                <AccordionTrigger className="text-left text-base hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}