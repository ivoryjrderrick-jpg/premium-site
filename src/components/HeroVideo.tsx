"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  poster?: string;
  srcMp4?: string;
  srcWebm?: string;
};

export default function HeroVideo({
  title = "Elite websites with buttery-smooth animations.",
  subtitle = "One-time setup $465 · then $99/mo for hosting, updates, and priority fixes.",
  ctaHref = "/pricing",
  ctaLabel = "Buy & Subscribe",
  poster = "/videos/poster.jpg",
  srcMp4 = "/videos/landing.mp4",
  srcWebm = "/videos/landing.webm",
}: Props) {
  const [preferStatic, setPreferStatic] = React.useState(false);
  React.useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reducedData = "connection" in navigator && (navigator as any)?.connection?.saveData === true;
    if (reducedMotion || reducedData) setPreferStatic(true);
  }, []);
  return (
    <section className="relative isolate h-[80vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        {preferStatic ? (
          <img src={poster} alt="" className="h-full w-full object-cover" loading="eager" decoding="async" />
        ) : (
          <video className="h-full w-full object-cover" autoPlay muted playsInline loop preload="metadata" poster={poster}>
            {srcWebm && <source src={srcWebm} type="video/webm" />}
            <source src={srcMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <div className="max-w-2xl text-white">
          <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,ease:"easeOut"}} className="text-4xl md:text-6xl font-bold tracking-tight">{title}</motion.h1>
          <motion.p initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.08,duration:.6,ease:"easeOut"}} className="mt-4 text-lg text-white/90">{subtitle}</motion.p>
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.14,duration:.6,ease:"easeOut"}}>
            <a href={ctaHref} className="mt-8 inline-flex rounded-md bg-white px-5 py-3 font-medium text-gray-900 hover:bg-white/90">{ctaLabel}</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
