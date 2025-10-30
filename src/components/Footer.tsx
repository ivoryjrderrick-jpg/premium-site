export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60 flex items-center justify-between">
        <p>© {new Date().getFullYear()} SWI — Scale with Ivory. All rights reserved.</p>
        <p>Built with Next.js • Stripe • Tailwind • Motion</p>
      </div>
    </footer>
  );
}
