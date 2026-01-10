export default function BusinessPortfolio() {
  const items = [
    {
      title: "Township & Real Estate",
      desc:
        "End-to-end township development including residential, commercial, and mixed-use projects with sustainable and smart infrastructure.",
      img: "/investors/township.jpg",
    },
    {
      title: "Transport Infrastructure",
      desc:
        "Highways, bridges, expressways, and urban transit systems enhancing connectivity and economic development.",
      img: "/investors/transport.jpg",
    },
    {
      title: "Electrical Infrastructure",
      desc:
        "Power transmission, distribution networks, and renewable energy integration supporting India’s energy goals.",
      img: "/investors/electrical.jpg",
    },
    {
      title: "Telecom Infrastructure",
      desc:
        "5G networks, fiber optics, substations, and tower infrastructure enabling digital transformation.",
      img: "/investors/telecom.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-14">
          Business Portfolio
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
