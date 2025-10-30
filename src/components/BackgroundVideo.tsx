"use client";
export default function BackgroundVideo() {
  return (
    <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover -z-10 opacity-40">
      <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}
