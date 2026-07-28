import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: `${portfolio.personal.name} | ${portfolio.personal.role}`,
  description: portfolio.personal.description,
  openGraph: {
    title: `${portfolio.personal.name} | ${portfolio.personal.role}`,
    description: portfolio.personal.description,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: portfolio.personal.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.personal.name} | ${portfolio.personal.role}`,
    description: portfolio.personal.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} min-h-screen bg-[#09090b] text-zinc-100 antialiased selection:bg-blue-500/30`}
      >
        {children}
      </body>
    </html>
  );
}
