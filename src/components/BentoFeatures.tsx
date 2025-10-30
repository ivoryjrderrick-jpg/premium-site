import { ReactNode } from "react";

function Tile({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="card p-6 hover:border-white/20 transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="subtle mt-2">{children}</p>
    </div>
  );
}

export default function BentoFeatures() {
  return (
    <section className="section grid md:grid-cols-3 gap-6">
      <Tile title="World-class motion">Micro-interactions and cinematic hero effects that feel premium.</Tile>
      <Tile title="Conversion-focused">Clear CTAs, social proof, and speed tuned for sales.</Tile>
      <Tile title="Care & monitoring">$99/mo hosting, updates, analytics, and priority fixes.</Tile>
    </section>
  );
}
