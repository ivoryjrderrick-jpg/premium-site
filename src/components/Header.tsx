"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <nav className="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="YOUR BUSINESS NAME" className="h-6 w-auto" />
          <span className="hidden sm:inline font-semibold tracking-tight">YOUR BUSINESS NAME</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link href="/about">About</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/pricing" className="inline-flex items-center rounded-md bg-cyan-400 px-5 py-2.5 font-semibold text-gray-900 hover:bg-cyan-300 transition">Get Started</Link>
        </div>
        <Link href="/pricing" className="md:hidden inline-flex items-center rounded-md bg-cyan-400 px-4 py-2 font-semibold text-gray-900">Buy</Link>
      </nav>
    </header>
  );
}
