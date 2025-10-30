"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <nav className="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="SWI — Scale with Ivory" className="h-6 w-auto" />
          <span className="hidden sm:inline font-semibold tracking-tight text-white/90">Scale with Ivory</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#included">What’s Included</a>
          <a href="#results">Results</a>
          <a href="#pricing">Pricing</a>
          <Link href="/media">Media</Link>
          <Link href="/contact">Contact</Link>
          <a href="#pricing" className="inline-flex items-center rounded-md bg-cyan-400 px-5 py-2.5 font-semibold text-gray-900 hover:bg-cyan-300 transition">See Pricing</a>
        </div>
        <a href="#pricing" className="md:hidden inline-flex items-center rounded-md bg-cyan-400 px-4 py-2 font-semibold text-gray-900">Buy</a>
      </nav>
    </header>
  );
}
