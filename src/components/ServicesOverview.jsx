import React from "react";
import { FaBuilding, FaTruck, FaBolt, FaSignal } from "react-icons/fa";

export default function ServicesOverview() {
  const services = [
    {
      name: "Township & Real Estate",
      icon: <FaBuilding className="w-10 h-10 text-indigo-500 mb-4 mx-auto" />,
    },
    {
      name: "Transport Infrastructure",
      icon: <FaTruck className="w-10 h-10 text-green-500 mb-4 mx-auto" />,
    },
    {
      name: "Electrical Infrastructure",
      icon: <FaBolt className="w-10 h-10 text-yellow-500 mb-4 mx-auto" />,
    },
    {
      name: "Telecom Infrastructure",
      icon: <FaSignal className="w-10 h-10 text-pink-500 mb-4 mx-auto" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 text-center"
            >
              {service.icon}
              <h3 className="font-semibold text-xl mt-4">{service.name}</h3>
              <p className="text-slate-500 mt-2 text-sm sm:text-base">
                We provide top-notch {service.name.toLowerCase()} solutions with
                quality and reliability at the core.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
