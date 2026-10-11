import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Chatbot } from "@/components/ui/Chatbot";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteData } from "@/data/site";

const outfit = Outfit({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://wahajismail.dev';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteData.name} - ${siteData.professionalTitle}`,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.shortBio,
  keywords: ["Enterprise Software Developer", "SaaS Architect", "Full Stack Developer", "Cloud Infrastructure", "Next.js", "Node.js", "Software Engineering Consultant"],
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: `${siteData.name} - ${siteData.professionalTitle}`,
    description: siteData.shortBio,
    siteName: siteData.name,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteData.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.name} - ${siteData.professionalTitle}`,
    description: siteData.shortBio,
    images: [`${baseUrl}/og-image.png`],
    creator: "@wahajismail",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteData.name,
    url: baseUrl,
    author: {
      "@type": "Person",
      name: siteData.name,
      jobTitle: siteData.professionalTitle,
      url: baseUrl,
      sameAs: [
        siteData.socialLinks.github,
        siteData.socialLinks.linkedin,
      ]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.className} min-h-screen bg-slate-50 dark:bg-[#060611] text-slate-700 dark:text-slate-300 antialiased selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300 relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <ParticleCanvas />
          <AmbientGlow />
          <Navbar />
          <main className="flex-1 pt-16 relative z-10">{children}</main>
          <Footer />
          <ScrollToTop />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
