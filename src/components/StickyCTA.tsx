"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden transition ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <Link href="/pricing" className="btn-primary shadow-glow">Get Started — $465 + $99/mo</Link>
    </div>
  );
}
