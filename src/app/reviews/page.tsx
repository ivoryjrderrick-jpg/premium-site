export const metadata = { title: "Reviews — YOUR BUSINESS NAME" };
const REVIEWS = [
  { name: "Jordan", rating: 5, text: "Fast, gorgeous, and converts. 10/10." },
  { name: "Avery", rating: 5, text: "Animations feel top-tier. Setup was painless." },
  { name: "Casey", rating: 5, text: "Went live same day — insane value." },
];
export default function Reviews() {
  return (
    <div className="section">
      <h1 className="text-4xl font-bold">Reviews</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {REVIEWS.map(r => (
          <div key={r.name} className="card p-6">
            <p className="text-white/90">“{r.text}”</p>
            <p className="subtle mt-3 text-sm">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
