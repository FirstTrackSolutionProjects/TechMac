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
        projects: Math.min(prev.projects + 2, 120),
        clients: Math.min(prev.clients + 1, 80),
        experience: Math.min(prev.experience + 1, 15),
        cities: Math.min(prev.cities + 1, 25),
      }));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <img
          src="/about/about-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="About Tech Mac"
        />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About Tech Mac Project
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto">
            Building future-ready infrastructure with trust & excellence.
          </p>
        </div>
      </section>

   

      {/* STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid gap-14 md:grid-cols-2 items-center">
          <img
            src="/about/company.jpg"
            className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
            alt="Company"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-slate-600 mb-4">
              Tech Mac Project Private Limited is a professionally managed
              infrastructure development company delivering projects across
              real estate, transport, electrical, and telecom sectors.
            </p>
            <p className="text-slate-600 mb-4">
              We follow stringent quality control measures, modern engineering
              practices, and transparent execution models to deliver projects
              that stand the test of time.
            </p>
            <p className="text-slate-600">
              Our commitment to safety, innovation, and on-time delivery has
              earned us long-term relationships with clients nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Journey
          </h2>

          <div className="space-y-10 border-l-4 border-amber-500 pl-8">
            {[
              { year: "2010", text: "Company founded with focus on civil projects" },
              { year: "2014", text: "Expanded into transport & highways" },
              { year: "2018", text: "Entered telecom & electrical infrastructure" },
              { year: "2023", text: "Completed 100+ projects across India" },
            ].map((item, i) => (
              <div key={i}>
                <h4 className="text-xl font-bold text-amber-500">{item.year}</h4>
                <p className="text-slate-600 mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Leadership Team
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {["Director", "Project Head", "Engineering Lead", "Operations Manager"].map(
              (role, i) => (
                <div
                  key={i}
                  className="bg-slate-50 p-6 rounded-2xl text-center shadow hover:shadow-lg transition"
                >
                  <img
                    src={`/team/team${i + 1}.jpg`}
                    className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                    alt={role}
                  />
                  <h4 className="font-semibold text-lg">Team Member</h4>
                  <p className="text-sm text-slate-500">{role}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

         {/* COUNTERS */}
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
