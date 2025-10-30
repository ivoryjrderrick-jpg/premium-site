export const metadata = { title: "Reviews — YOUR BUSINESS NAME" };
const REVIEWS = [
  { name: "Jordan", rating: 5, text: "Fast, gorgeous, and converts. 10/10." },
  { name: "Avery", rating: 5, text: "Animations feel top-tier. Setup was painless." },
  { name: "Casey", rating: 5, text: "Went live same day — insane value." },
];
export default function Reviews() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl font-bold">Reviews</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {REVIEWS.map(r => (
          <div key={r.name} className="rounded-2xl border p-6 bg-white/60">
            <p className="text-yellow-500">{"★★★★★".slice(0, r.rating)}</p>
            <p className="text-gray-700 mt-3">“{r.text}”</p>
            <p className="text-sm text-gray-500 mt-2">— {r.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
