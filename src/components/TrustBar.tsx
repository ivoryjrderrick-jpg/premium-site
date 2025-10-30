export default function TrustBar() {
  const logos = [
    { src: "/logo.svg", alt: "Client 1" },
    { src: "/logo.svg", alt: "Client 2" },
    { src: "/logo.svg", alt: "Client 3" },
    { src: "/logo.svg", alt: "Client 4" },
    { src: "/logo.svg", alt: "Client 5" },
  ];
  return (
    <div className="section">
      <p className="text-center subtle text-sm mb-4">Trusted by modern brands</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 opacity-80">
        {logos.map((l, i) => (
          <div key={i} className="card py-4 flex items-center justify-center">
            <img src={l.src} alt={l.alt} className="h-6 opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}
