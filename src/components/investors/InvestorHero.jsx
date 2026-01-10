export default function InvestorHero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden mt-5">
      
      {/* Background Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1745056197520-50c8a6bb9f64"
        alt="Infrastructure Investment"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Investor Overview
        </h1>

        <p className="max-w-3xl mx-auto text-slate-200 text-lg">
          Scalable infrastructure platform with strong growth visibility and disciplined execution.
        </p>
      </div>

    </section>
  );
}
