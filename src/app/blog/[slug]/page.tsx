import { notFound } from "next/navigation";
const POSTS: Record<string, { title: string; body: string; date: string }> = {
  launch: { title: "We’re live", body: "Your launch note…", date: "2025-10-30" },
  motion: { title: "Why motion sells", body: "Your thoughts on motion…", date: "2025-10-29" },
};
export default function Post({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug]; if (!post) return notFound();
  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <p className="text-xs text-white/60">{post.date}</p>
      <h1 className="text-4xl font-bold mt-2">{post.title}</h1>
      <article className="prose prose-invert mt-6">{post.body}</article>
    </div>
  );
}
