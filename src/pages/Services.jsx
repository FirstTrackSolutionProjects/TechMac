export default function Services() {
  const services = [
    {
      title: "Township & Real Estate",
      description:
        "End-to-end planning and development of residential and commercial townships with modern infrastructure, smart layouts, and sustainable design principles.",
      image: "/images/service - 1.jpg",
    },
    {
      title: "Transport Infrastructure",
      description:
        "Execution of roads, highways, bridges, and transport infrastructure projects ensuring long-term durability, safety, and operational efficiency.",
      image: "/images/service - 2.jpg",
    },
    {
      title: "Electrical Infrastructure",
      description:
        "Design and implementation of power distribution systems, substations, and electrical networks with strict compliance and reliability standards.",
      image: "/images/service - 3.jpg",
    },
    {
      title: "Telecom Infrastructure",
      description:
        "Deployment of telecom towers, fiber-optic networks, and communication infrastructure enabling seamless and scalable connectivity.",
      image: "/images/service - 4.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We provide integrated infrastructure solutions across multiple
            sectors with a strong commitment to quality, safety, and timely
            project delivery.
          </p>
        </div>

        {/* Services Sections */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid gap-10 items-center ${
                index % 2 === 0
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Text */}
              <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
