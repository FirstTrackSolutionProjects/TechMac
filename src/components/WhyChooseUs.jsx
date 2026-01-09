import React from "react";
import { FaCheck } from "react-icons/fa";

export default function WhyChooseUs() {
  const points = [
    "Experienced Professional Team",
    "High Quality & Safety Standards",
    "Timely Project Delivery",
    "Compliance with Regulations",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point}
              className="flex flex-col items-center text-center bg-slate-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white text-2xl shadow-md">
                <FaCheck />
              </div>
              <p className="font-semibold text-lg">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
