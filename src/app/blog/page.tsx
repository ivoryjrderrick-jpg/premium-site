export const metadata = { title: "Blog — YOUR BUSINESS NAME" };
const POSTS = [
  { slug: "launch", title: "We’re live", excerpt: "How we launch premium sites fast.", date: "2025-10-30" },
  { slug: "motion", title: "Why motion sells", excerpt: "Thoughtful animations boost conversion.", date: "2025-10-29" },
];
export default function Blog() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {POSTS.map(p => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border p-6 hover:bg-white/50">
            <p className="text-xs text-gray-500">{p.date}</p>
            <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
