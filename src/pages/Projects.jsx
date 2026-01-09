import { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";

export default function Projects() {
  const categories = ["All", "Real Estate", "Transport", "Electrical", "Telecom"];

  const projects = [
    {
      title: "Integrated Smart Township",
      category: "Real Estate",
      location: "Pune, Maharashtra",
      image: "/projects/township.jpg",
      map: "https://maps.google.com/maps?q=pune&t=&z=11&ie=UTF8&iwloc=&output=embed",
    },
    {
      title: "Six-Lane Expressway",
      category: "Transport",
      location: "Delhi – Jaipur",
      image: "/projects/highway.jpg",
      map: "https://maps.google.com/maps?q=delhi&t=&z=10&ie=UTF8&iwloc=&output=embed",
    },
    {
      title: "Urban Power Grid Upgrade",
      category: "Electrical",
      location: "Hyderabad",
      image: "/projects/electrical.jpg",
      map: "https://maps.google.com/maps?q=hyderabad&t=&z=11&ie=UTF8&iwloc=&output=embed",
    },
    {
      title: "Nationwide Fiber Network",
      category: "Telecom",
      location: "Pan India",
      image: "/projects/telecom.jpg",
      map: "https://maps.google.com/maps?q=india&t=&z=5&ie=UTF8&iwloc=&output=embed",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [visible, setVisible] = useState([]);

  const sectionRef = useRef([]);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  /* Scroll Animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...new Set([...prev, entry.target.dataset.index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Projects
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Landmark infrastructure projects executed with precision, quality,
            and long-term vision.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeCategory === cat
                  ? "bg-amber-500 text-black"
                  : "bg-white border hover:bg-amber-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (sectionRef.current[index] = el)}
              data-index={index}
              className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-700 ${
                visible.includes(String(index))
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Image */}
              <div
                className="relative cursor-pointer group"
                onClick={() => setLightbox(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold">
                  Click to Preview
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <span className="text-sm text-amber-500 font-semibold uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="flex items-center gap-2 text-slate-600 text-sm">
                  <FaMapMarkerAlt className="text-amber-500" />
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="bg-white max-w-4xl w-full rounded-xl overflow-hidden relative">
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-2xl text-white bg-black/60 rounded-full p-2"
            >
              <FaTimes />
            </button>

            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{lightbox.title}</h3>
              <p className="text-slate-600 mb-4">{lightbox.location}</p>

              {/* Map */}
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src={lightbox.map}
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Project Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
