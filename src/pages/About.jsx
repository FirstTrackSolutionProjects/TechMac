import { useEffect, useState } from "react";

export default function About() {
  const [count, setCount] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    cities: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        projects: prev.projects < 120 ? prev.projects + 2 : 120,
        clients: prev.clients < 80 ? prev.clients + 1 : 80,
        experience: prev.experience < 15 ? prev.experience + 1 : 15,
        cities: prev.cities < 25 ? prev.cities + 1 : 25,
      }));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[55vh] flex items-center justify-center bg-black">
        <img
          src="/images/about.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="About Tech Mac"
        />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About Tech Mac Project
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto">
            Delivering future-ready infrastructure with trust, safety & excellence.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Company Overview
            </h2>
            <p className="max-w-3xl mx-auto text-slate-600">
              Tech Mac Project Private Limited is a professionally managed
              infrastructure company delivering integrated solutions across
              civil, transport, electrical, and telecom sectors.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Vision",
                color: "border-indigo-400",
                text:
                  "To become India’s most trusted infrastructure partner by creating sustainable, future-ready developments."
              },
              {
                title: "Mission",
                color: "border-sky-400",
                text:
                  "To deliver high-quality infrastructure through innovation, strong governance, and on-time execution."
              },
              {
                title: "Leadership",
                color: "border-pink-400",
                text:
                  "Driven by experienced leaders with 75+ years of combined industry expertise."
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl border-2 ${item.color} p-8 bg-white shadow-sm hover:shadow-lg transition`}
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1716565030617-f723a2f68ceb"
            className="rounded-2xl shadow-xl w-full h-100 object-cover"
            alt="Company"
          />
          <div>
            <h2 className="text-3xl font-bold mb-5">Who We Are</h2>
            <p className="text-slate-600 mb-4">
              Tech Mac Project Private Limited delivers infrastructure solutions
              backed by modern engineering practices and transparent execution.
            </p>
            <p className="text-slate-600">
              Our focus on safety, quality, and timely delivery has earned us
              long-term partnerships across India.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            { label: "Projects Completed", value: count.projects },
            { label: "Happy Clients", value: count.clients },
            { label: "Years Experience", value: count.experience },
            { label: "Cities Covered", value: count.cities },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-amber-500">
                {item.value}+
              </h3>
              <p className="text-slate-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
