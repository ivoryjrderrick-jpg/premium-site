import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: "YOUR BUSINESS NAME",
  description: "Premium websites with world-class motion. $465 one-time + $99/mo.",
  openGraph: { title: "YOUR BUSINESS NAME", description: "Premium websites with world-class motion." },
  twitter: { card: "summary_large_image", title: "YOUR BUSINESS NAME" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" /></head>
      <body className="antialiased">
        <LenisProvider>
          <Header />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
