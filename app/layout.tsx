import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteFooter from "./components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fintech Fuckery — Holding Banking Wrappers Accountable",
  description:
    "Documenting the incompetence, contradictions, and compliance loops of modern fintech. Currently tracking: Wise (TransferWise) — CFPB Case #260211-28773622.",
  keywords: [
    "fintech",
    "wise",
    "transferwise",
    "consumer protection",
    "CFPB",
    "banking",
    "fraud",
    "complaints",
  ],
  openGraph: {
    title: "Fintech Fuckery",
    description:
      "Tracking the incompetence of modern banking wrappers. They approved the payment. They assessed the fee. Then they revoked the service.",
    url: "https://fintechfuckery.org",
    siteName: "Fintech Fuckery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fintech Fuckery",
    description:
      "They approved the payment. They assessed the fee. Then they revoked the service. This is the receipts.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#09090b] text-zinc-200`}
      >
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
