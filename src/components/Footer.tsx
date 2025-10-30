export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} YOUR BUSINESS NAME. All rights reserved.</p>
        <p>Built with Next.js • Stripe • Tailwind • Motion</p>
      </div>
    </footer>
  );
}
