export const metadata = { title: "About — YOUR BUSINESS NAME" };
export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="mt-4 text-gray-600 max-w-2xl">
        Short founder story, your mission, and the value clients get. Mention speed to launch, hands-on care, and results.
      </p>
      <div className="mt-8 rounded-2xl border p-6">
        <p className="text-gray-700">Add your logo and brand colors in <code>tailwind.config.js</code> and Header.</p>
      </div>
    </main>
  );
}
