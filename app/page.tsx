import { Atmosphere } from "@/components/layout/Atmosphere";
import { CursorTrail } from "@/components/layout/CursorTrail";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Stack } from "@/components/sections/Stack";
import { Process } from "@/components/sections/Process";
import { Work } from "@/components/sections/Work";
import { Why } from "@/components/sections/Why";
import { Testimonials } from "@/components/sections/Testimonials";
import { Globe } from "@/components/sections/Globe";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

import { siteConfig } from "@/lib/seo";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      url: siteConfig.founder.github,
    },
    sameAs: [siteConfig.founder.github],
  };

  return (
    <>
      <Atmosphere />
      <CursorTrail />
      <Nav />
      <main id="top" className="relative z-[1]">
        <Hero />
        <Logos />
        <About />
        <Services />
        <Products />
        <Stack />
        <Process />
        <Work />
        <Why />
        <Testimonials />
        <Globe />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
