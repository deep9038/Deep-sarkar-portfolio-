import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Deep Sarkar — AI & Marketplace Product Builder | Shyamanagar, West Bengal",
  description:
    "Deep Sarkar is the leading AI & Marketplace Product Builder in Shyamanagar, Barrackpore, Naihati & North 24 Parganas. Building scalable digital platforms, marketplace systems, and AI-powered tools for local businesses and startups.",
  keywords: [
    "website developer in Shyamanagar",
    "marketplace developer in Barrackpore",
    "AI developer in North 24 Parganas",
    "startup website builder near me",
    "digital platform developer in Naihati",
    "Deep Sarkar",
    "AI product builder",
    "marketplace platform developer",
    "SaaS developer Shyamanagar",
    "web developer Barrackpore",
    "startup developer West Bengal",
    "local business digital transformation",
  ],
  authors: [{ name: "Deep Sarkar" }],
  creator: "Deep Sarkar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Deep Sarkar — AI & Marketplace Product Builder",
    title:
      "Deep Sarkar — AI & Marketplace Product Builder | Shyamanagar, West Bengal",
    description:
      "Helping local businesses and startups in Shyamanagar, Barrackpore & North 24 Parganas build scalable digital platforms with AI and marketplace technology.",
    images: [
      {
        url: "/images/deep-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Deep Sarkar — AI & Marketplace Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Sarkar — AI & Marketplace Product Builder",
    description:
      "Building scalable digital platforms for local businesses in Shyamanagar & North 24 Parganas.",
    images: ["/images/deep-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://deepsarkar.dev",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Deep Sarkar — AI & Marketplace Product Builder",
  description:
    "Building scalable digital platforms, marketplace systems, and AI-powered tools for local businesses and startups in Shyamanagar, Barrackpore, Naihati & North 24 Parganas.",
  url: "https://deepsarkar.dev",
  image: "/images/deep-hero.jpg",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shyamanagar",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.7028",
    longitude: "88.3694",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Shyamanagar",
    },
    {
      "@type": "City",
      name: "Barrackpore",
    },
    {
      "@type": "City",
      name: "Naihati",
    },
    {
      "@type": "AdministrativeArea",
      name: "North 24 Parganas",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Deep Sarkar",
    jobTitle: "AI & Marketplace Product Builder",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shyamanagar",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
  },
  serviceType: [
    "AI Product Development",
    "Marketplace Platform Development",
    "Startup Technology Consulting",
    "Digital Platform Development",
    "SaaS Development",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Marketplace Platforms",
    "SaaS Development",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-primary antialiased">{children}</body>
    </html>
  );
}
