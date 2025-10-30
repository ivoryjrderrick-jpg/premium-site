"use client";
import { useState } from "react";

export default function PricingTable() {
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Checkout init failed");
      window.location.href = data.url;
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-3xl">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
        <h2 className="text-2xl font-semibold">Website Build + Care</h2>
        <p className="text-white/70 mt-2">
          One-time setup <b>$465</b> + <b>$99/mo</b> (hosting, updates, monitoring, priority fixes).
        </p>
        <div className="mt-6 flex items-baseline gap-3">
          <span className="text-3xl font-bold">$465</span><span className="text-white/60">one-time</span>
          <span className="text-white/40">·</span>
          <span className="text-xl font-semibold">$99</span><span className="text-white/60">/mo</span>
        </div>
        <ul className="mt-6 text-white/80 space-y-2">
          <li>• Cinematic hero & micro-interactions</li>
          <li>• Stripe checkout & analytics</li>
          <li>• Domain, SSL, SEO meta & OG image</li>
          <li>• Contact form + email handoff</li>
        </ul>
        <button onClick={handleBuy} disabled={loading}
                className="mt-8 w-full rounded-md bg-cyan-400 text-gray-900 px-6 py-3 font-semibold hover:bg-cyan-300 transition">
          {loading ? "Redirecting…" : "Buy & Subscribe"}
        </button>
        <p className="mt-3 text-xs text-white/60">Checkout shows $465 today + starts $99/mo subscription.</p>
      </div>
    </section>
  );
}
