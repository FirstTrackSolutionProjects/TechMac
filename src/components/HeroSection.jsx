import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-slate-900 text-white py-24 mt-5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Building Future-Ready Infrastructure
        </h1>

        <p className="mt-4 text-slate-300">
          Township • Transport • Electrical • Telecom
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/services"
            className="bg-amber-500 text-black px-6 py-3 rounded-lg font-medium"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="border border-white px-6 py-3 rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
