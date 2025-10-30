"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundVideo from "@/components/BackgroundVideo";
import PricingTable from "@/components/PricingTable";

const fade = (d=0) => ({ initial:{opacity:0,y:20}, whileInView:{opacity:1,y:0,transition:{duration:.6,delay:d}}, viewport:{once:true} });

export default function Home() {
  return (
    <div>
      <BackgroundVideo />

      {/* HERO */}
      <section className="section pt-24 md:pt-32">
        <motion.h1 {...fade(0)} className="hero-h bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          We transform your website into a revenue-generating asset
        </motion.h1>
        <motion.p {...fade(.05)} className="subtle mt-5 text-lg max-w-2xl">
          Professional web design that converts visitors into customers. One fixed price, continuous growth, and the online presence your business deserves.
        </motion.p>

        <motion.div {...fade(.1)} className="mt-6 max-w-2xl">
          <div className="card p-4 text-sm text-white/80">
            Stop losing customers to outdated design. Get a conversion-optimized website that builds credibility, captures leads, and scales with your business—starting at just $1000.
          </div>
        </motion.div>

        <motion.div {...fade(.15)} className="mt-8 flex items-center gap-3">
          <a href="#pricing" className="btn-primary">See Pricing</a>
          <a href="#included" className="btn-ghost">See What’s Included</a>
        </motion.div>

        <motion.p {...fade(.2)} className="mt-10 text-white/60 text-sm">
          Ready to stop losing customers to competitors?
        </motion.p>
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="included" className="section">
        <h2 className="text-2xl font-semibold">Everything You Need to Compete Online</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { t: "World-class motion", d: "Cinematic hero, micro-interactions, polished transitions." },
            { t: "Conversion-focused", d: "Clear messaging, trust signals, and lead capture." },
            { t: "Care & monitoring", d: "Hosting, updates, analytics, and performance." },
          ].map((x,i)=>(
            <motion.div key={x.t} {...fade(i*.05)} className="card p-6">
              <h3 className="font-semibold">{x.t}</h3>
              <p className="subtle mt-2">{x.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section">
        <h2 className="text-2xl font-semibold">Real Businesses, Real Results</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-4 text-center">
          {[
            { n:"200+", s:"Active Clients" },
            { n:"147%", s:"Avg. Conversion Lift" },
            { n:"8 days", s:"Time to Launch" },
            { n:"94%", s:"Satisfaction Rate" },
          ].map((x)=>(
            <div key={x.n} className="rounded-xl border border-white/10 p-6 bg-white/5">
              <div className="text-2xl font-bold">{x.n}</div>
              <div className="subtle mt-1">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <PricingTable />
    </div>
  );
}
