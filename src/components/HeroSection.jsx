import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-[50vh] mt-5 flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/images/banner.jpg"  
        alt="Infrastructure Development"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Building Future-Ready Infrastructure
        </h1>

        {/* <p className="mt-4 text-slate-200 text-base md:text-lg">
          Township • Transport • Electrical • Telecom
        </p> */}

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/services"
            className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-lg font-medium transition"
          >
            Our Services
          </Link>

          <Link
            to="/contact"
            className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
