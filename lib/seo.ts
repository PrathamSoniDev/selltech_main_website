import { Instagram } from "lucide-react";

export const siteConfig = {
  name: "Sell Tech Ind. Productions — Engineering the Future of Digital Innovation",
  shortName: "Sell Tech",
  description:
    "Sell Tech Ind. Productions builds scalable software, AI systems, SaaS platforms, mobile apps, and digital experiences that accelerate business growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://selltechindproductions.in",
  founder: {
    name: "Pratham Soni",
    github: "https://github.com/PrathamSoniDev",
  },
  contact: {
    email: "info@selltechindproductions.in",
    phone: "+91 8107734889",
    phoneHref: "tel:+918107734889",
    address: "Rajasthan · Jaipur · India",
    hours: "Mon–Fri, 09:30–19:00 IST",
  },
  socials: {
    github: "https://github.com/PrathamSoniDev",
    linkedin: "https://www.linkedin.com/company/sell-tech-ind-productions/",
    twitter: "#",
    Instagram: "https://www.instagram.com/selltechindproductions",
  },
} as const;
