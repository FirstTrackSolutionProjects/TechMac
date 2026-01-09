import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-10 px-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-center mt-5">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
        Looking for a Reliable <span className="text-black/90">Infrastructure Partner?</span>
      </h2>

      <p className="text-black/80 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
        We deliver top-notch solutions across real estate, transport, electrical, and telecom sectors with quality and reliability at the core.
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-3 mt-4 bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
      >
        Get In Touch <FaArrowRight />
      </Link>
    </section>
  );
}
