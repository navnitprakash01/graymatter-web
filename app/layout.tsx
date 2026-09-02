import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "GrayMatter AI — Intelligence for Content Creation",
    template: "%s | GrayMatter AI",
  },
  description: siteConfig.description,
  keywords: [
    "AI content creation",
    "YouTube intelligence",
    "content strategy AI",
    "content operating system",
    "AI video production",
    "content analytics",
    "channel intelligence",
  ],
  authors: [{ name: "GrayMatter AI" }],
  creator: "GrayMatter AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: "GrayMatter AI — Intelligence for Content Creation",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GrayMatter AI — Intelligence for Content Creation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrayMatter AI — Intelligence for Content Creation",
    description:
      "GrayMatter AI connects research, strategy, creation, production, analytics, and learning into one intelligent content system.",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#08080a] text-[#f2f2f5] antialiased overflow-x-hidden selection:bg-[#4d9fff]/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
