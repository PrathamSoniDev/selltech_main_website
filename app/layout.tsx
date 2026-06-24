import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/seo";
// @ts-ignore: allow global CSS import in app layout
import "./globals.css";

const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Sell Tech IND Productions",
    "SellTech India",
    "software development company India",
    "website development company",
    "mobile app development company",
    "Flutter app development",
    "React development company",
    "Next.js development",
    "custom software development",
    "SaaS development company",
    "AI solutions company",
    "artificial intelligence development",
    "blockchain development company",
    "web3 development",
    "game development company",
    "UI UX design agency",
    "digital marketing agency",
    "ecommerce website development",
    "ERP software development",
    "CRM software development",
    "startup technology partner",
    "cloud application development",
    "business automation solutions",
    "enterprise software solutions",
    "custom web applications",
    "Android app development",
    "iOS app development",
    "cross platform app development",
    "IT consulting services",
    "technology consulting",
    "software outsourcing India",
    "Jaipur software company",
    "Rajasthan software company",
    "India software company",
    "AI automation services",
    "machine learning solutions",
    "Sell Tech IND Productions Jaipur",
    "best software company India",
    "software company in Jaipur",
    "best software company in Jaipur",
    "top software company in Jaipur",
    "website development company in Jaipur",
    "web design company in Jaipur",
    "web development company in Jaipur",
    "mobile app development company in Jaipur",
    "app development company in Jaipur",
    "AI development company in Jaipur",
    "blockchain development company in Jaipur",
    "digital marketing company in Jaipur",
    "SEO company in Jaipur",
    "IT company in Jaipur",
    "custom software development Jaipur",
    "software developers in Jaipur",
    "hire software developers Jaipur",
    "hire web developers Jaipur",
    "hire app developers Jaipur",
    "startup software company Jaipur",
    "software solutions Jaipur",
    "software company in Rajasthan",
    "website development company Rajasthan",
    "app development company Rajasthan",
    "AI company Rajasthan",
    "IT services Rajasthan",
    "technology company Rajasthan",
    "software outsourcing Rajasthan",
    "software company in India",
    "best software development company India",
    "top web development company India",
    "top mobile app development company India",
    "custom software company India",
    "SaaS development company India",
    "AI automation company India",
    "offshore software development India",
    "website development services near me",
    "mobile app developers near me",
    "software company near me",
    "web development company near me",
    "SEO agency near me",
    "digital marketing agency near me",
    "AI development company near me",
    "app development company near me",
    "build website for business",
    "create business website",
    "professional website development",
    "ecommerce website development services",
    "online store development company",
    "business software development",
    "custom ERP software development",
    "CRM software development company",
    "AI chatbot development services",
    "business automation solutions",
    "enterprise software solutions",
    "cloud application development",
    "startup app development company",
    "MVP development company",
    "product development company",
    "software consulting services",
    "IT consulting company",
    "technology partner for startups",
    "digital transformation services",
    "software maintenance services",
    "React development company",
    "Next.js development company",
    "Flutter app development company",
    "Node.js development company",
    "MERN stack development company",
    "full stack development company",
    "UI UX design agency India",
    "responsive website development",
    "cross platform app development",
    "Sell Tech IND Productions",
    "SellTech India",
    "Sell Tech Jaipur",
    "SellTech software company",
    "Sell Tech web development",
    "Sell Tech mobile app development",
    "Sell Tech AI solutions",
    "Sell Tech blockchain development",
    "Sell Tech digital marketing",
    "Sell Tech software services",
    "software company Mansarovar Jaipur",
    "software company Vaishali Nagar Jaipur",
    "software company Malviya Nagar Jaipur",
    "website development Vaishali Nagar Jaipur",
    "website development Mansarovar Jaipur",
    "app development Malviya Nagar Jaipur",
    "IT company Jagatpura Jaipur",
    "software company Jagatpura Jaipur",
    "web development company Jaipur Rajasthan",
    "software company near Jaipur airport",
  ],
  authors: [{ name: "SellTech Ind. Productions" }],
  creator: "SellTech Ind. Productions",
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Sell tech.png", // Place logo.png inside /public folder
        width: 1200,
        height: 630,
        alt: "SellTech IND. Productions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/Sell tech.png"],
  },
  icons: {
    icon: "/Sell tech.png",
    shortcut: "/Sell tech.png",
    apple: "/Sell tech.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg-0 text-ink-0 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
