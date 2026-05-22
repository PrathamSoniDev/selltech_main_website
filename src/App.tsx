import { Navbar } from "@/components/site/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Hero } from "@/components/site/Hero";

import { LogoMarquee } from "@/components/site/LogoMarquee";

import { About } from "@/components/site/About";

import { Services } from "@/components/site/Services";

import { Stats } from "@/components/site/Stats";

import { WhyUs } from "@/components/site/WhyUs";

import { Process } from "@/components/site/Process";

import { Portfolio } from "@/components/site/Portfolio";

import { Testimonials } from "@/components/site/Testimonials";

import { Pricing } from "@/components/site/Pricing";

import { FAQ } from "@/components/site/FAQ";

import { Contact } from "@/components/site/Contact";

import { Footer } from "@/components/site/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Analytics />
      <main>
        <Hero />
        <LogoMarquee />
        <About />
        <Services />
        <Stats />
        <WhyUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
