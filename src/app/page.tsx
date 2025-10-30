"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import BentoFeatures from "@/components/BentoFeatures";
import StickyCTA from "@/components/StickyCTA";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function Home() {
  return (
    <main>
      <BackgroundVideo />
      <section className="section pt-24 md:pt-32 text-center">
        <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:1}}
          className="hero-h bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Premium websites that feel alive.
        </motion.h1>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.1,duration:.8}}
          className="subtle mt-5 text-lg max-w-2xl mx-auto">
          Launch today: <b>$465</b> one-time setup + <b>$99/mo</b> care (hosting, updates, monitoring, fixes).
        </motion.p>
        <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.7}} className="mt-8 flex items-center justify-center gap-3">
          <Link href="/pricing" className="btn-primary">Get Started</Link>
          <Link href="/reviews" className="btn-ghost">See Reviews</Link>
        </motion.div>
      </section>

      <TrustBar />
      <BentoFeatures />

      <section className="section card p-8">
        <h2 className="text-2xl font-semibold">What clients say</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { name: "Jordan", text: "Fast, gorgeous, and converts. 10/10." },
            { name: "Avery", text: "Animations feel top-tier. Setup was painless." },
            { name: "Casey", text: "Went live same day — insane value." },
          ].map((r) => (
            <div key={r.name} className="card p-6">
              <p className="text-white/90">“{r.text}”</p>
              <p className="subtle mt-3 text-sm">— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section text-center">
        <h3 className="text-2xl font-semibold">Ready to launch?</h3>
        <p className="subtle mt-2">One plan. Elite results. $465 setup + $99/mo.</p>
        <div className="mt-6">
          <Link href="/pricing" className="btn-primary">Buy & Subscribe</Link>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
