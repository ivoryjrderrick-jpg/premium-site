export const metadata = { title: "Contact — YOUR BUSINESS NAME" };
export default function Contact() {
  return (
    <div className="section">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-3 text-white/70">Email: <a className="underline" href="mailto:you@yourdomain.com">you@yourdomain.com</a></p>
      <form className="mt-8 grid gap-4 max-w-xl">
        <input className="border border-white/15 rounded-md px-3 py-2 bg-transparent" placeholder="Name" required />
        <input className="border border-white/15 rounded-md px-3 py-2 bg-transparent" placeholder="Email" type="email" required />
        <textarea className="border border-white/15 rounded-md px-3 py-2 bg-transparent h-32" placeholder="Message" required />
        <button className="rounded-md bg-cyan-400 text-gray-900 px-5 py-2 font-semibold hover:bg-cyan-300 transition">Send</button>
      </form>
      <p className="text-xs text-white/60 mt-3">Hook this to Resend/Nodemailer later for auto email.</p>
    </div>
  );
}
