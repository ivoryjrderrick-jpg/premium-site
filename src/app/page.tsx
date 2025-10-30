"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function Home() {
  return (
    <div>
      <BackgroundVideo />
      <section className="pt-24 md:pt-32 text-center">
        <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:1}}
          className="hero-h bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Premium websites that feel alive.
        </motion.h1>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.1,duration:.8}}
          className="subtle mt-5 text-lg max-w-2xl mx-auto">
          Launch today: <b>$465</b> one-time setup + <b>$99/mo</b> care (hosting, updates, monitoring, fixes).
        </motion.p>
        <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.7}}
          className="mt-8 flex items-center justify-center gap-3">
          <Link href="/pricing" className="btn-primary">Get Started</Link>
          <Link href="/reviews" className="btn-ghost">See Reviews</Link>
        </motion.div>
      </section>
    </div>
  );
}
