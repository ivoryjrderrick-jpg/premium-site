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
    <section id="pricing" className="section">
      <h2 className="text-3xl font-bold tracking-tight">Transparent Pricing, Exceptional Value</h2>
      <p className="subtle mt-2">No hidden fees. One straightforward package designed for growth.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card p-8">
          <h3 className="text-xl font-semibold">$1,000 <span className="text-white/60 text-sm">one-time</span></h3>
          <p className="text-white/70 mt-2">Professional Website Design</p>
          <ul className="mt-4 text-white/80 space-y-2">
            <li>• Elite motion design & hero animation ready</li>
            <li>• On-brand UI kit & typography</li>
            <li>• SEO meta, OG image, analytics</li>
            <li>• Stripe checkout integrated</li>
          </ul>
          <button onClick={handleBuy} disabled={loading}
                  className="mt-8 w-full rounded-md bg-cyan-400 text-gray-900 px-6 py-3 font-semibold hover:bg-cyan-300 transition">
            {loading ? "Redirecting…" : "Get Started — $1,000 + $99/mo"}
          </button>
          <p className="mt-3 text-xs text-white/60">Checkout shows $1,000 today + starts $99/mo subscription.</p>
        </div>

        <div className="card p-8">
          <h3 className="text-xl font-semibold">$99 <span className="text-white/60 text-sm">/month</span></h3>
          <p className="text-white/70 mt-2">Ongoing Maintenance & Support</p>
          <ul className="mt-4 text-white/80 space-y-2">
            <li>• Hosting, monitoring, and backups</li>
            <li>• Content updates and small tweaks</li>
            <li>• Performance & uptime checks</li>
            <li>• Priority support</li>
          </ul>
        </div>
      </div>

      <div className="card p-6 mt-8">
        <h4 className="font-semibold mb-2">Your investment pays for itself</h4>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-white/80">
          <div className="rounded-xl border border-white/10 p-4 bg-white/5">
            <div className="text-2xl font-bold">2</div>
            <div>Customers per month to pay for care plan</div>
          </div>
          <div className="rounded-xl border border-white/10 p-4 bg-white/5">
            <div className="text-2xl font-bold">10–20×</div>
            <div>Potential ROI from better conversion</div>
          </div>
          <div className="rounded-xl border border-white/10 p-4 bg-white/5">
            <div className="text-2xl font-bold">520%</div>
            <div>Avg. increase in perceived credibility</div>
          </div>
        </div>
      </div>
    </section>
  );
}
