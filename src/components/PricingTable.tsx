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
    } finally { setLoading(false); }
  }
  return (
    <section className="mx-auto max-w-4xl px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tight">Pricing</h1>
      <p className="text-gray-600 mt-3">One plan. Elite results.</p>
      <div className="mt-8 rounded-2xl border p-8 bg-white/60">
        <h2 className="text-2xl font-semibold">Website Build + Care</h2>
        <p className="text-gray-600 mt-2">
          One-time setup <b>$465</b> · then <b>$99/mo</b> for hosting, updates, monitoring, and priority fixes.
        </p>
        <div className="mt-6 flex items-baseline gap-3">
          <span className="text-3xl font-bold">$465</span><span className="text-gray-500">one-time</span>
          <span className="text-gray-400">·</span>
          <span className="text-xl font-semibold">$99</span><span className="text-gray-500">/mo</span>
        </div>
        <ul className="mt-6 text-gray-700 space-y-2">
          <li>• Premium motion design (hero, sections, micro-interactions)</li>
          <li>• Stripe checkout & analytics</li>
          <li>• Domain, SSL, SEO meta & OG image</li>
          <li>• Contact form + email handoff</li>
        </ul>
        <button onClick={handleBuy} disabled={loading}
                className="mt-8 w-full rounded-md bg-gray-900 text-white px-6 py-3 hover:bg-gray-800">
          {loading ? "Redirecting…" : "Buy & Subscribe"}
        </button>
        <p className="mt-3 text-xs text-gray-500">Stripe shows $465 today + starts $99/mo subscription.</p>
      </div>
    </section>
  );
}
