export const metadata = { title: "Contact — YOUR BUSINESS NAME" };
export default function Contact() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-3 text-gray-600">Email: <a className="underline" href="mailto:you@yourdomain.com">you@yourdomain.com</a></p>
      <form className="mt-8 grid gap-4 max-w-xl">
        <input className="border rounded-md px-3 py-2" placeholder="Name" required />
        <input className="border rounded-md px-3 py-2" placeholder="Email" type="email" required />
        <textarea className="border rounded-md px-3 py-2 h-32" placeholder="Message" required />
        <button className="rounded-md bg-gray-900 text-white px-5 py-2">Send</button>
      </form>
      <p className="text-xs text-gray-500 mt-3">Hook this to Resend/Nodemailer later for auto email.</p>
    </main>
  );
}
