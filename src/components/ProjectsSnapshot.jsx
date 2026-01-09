export default function ProjectsSnapshot() {
  const projects = [
    "Smart Township Development",
    "National Highway Expansion",
    "Electrical Grid Upgrade",
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Key Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="font-semibold">{project}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
