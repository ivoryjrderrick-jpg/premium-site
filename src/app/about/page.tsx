export const metadata = { title: "About — YOUR BUSINESS NAME" };
export default function About() {
  return (
    <div className="section">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="mt-4 text-white/70 max-w-2xl">
        Short founder story, your mission, and the value clients get. Mention speed to launch,
        hands-on care, and results.
      </p>
      <div className="card p-6 mt-8">
        <p className="text-white/80">Add your logo and brand colors in <code>tailwind.config.js</code> and Header.</p>
      </div>
    </div>
  );
}
