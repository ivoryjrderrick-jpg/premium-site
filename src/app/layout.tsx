import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: "SWI — Scale with Ivory",
  description: "Premium websites with world-class motion. $1,000 one-time + $99/mo.",
  openGraph: { title: "SWI — Scale with Ivory", description: "We transform your website into a revenue-generating asset." },
  twitter: { card: "summary_large_image", title: "SWI — Scale with Ivory" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-950 text-white">
        <LenisProvider>
          <Header />
          <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
