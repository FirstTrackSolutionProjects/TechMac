import React from "react";
import { motion } from "framer-motion"; // for scroll animation

export default function Process() {
  const steps = [
    "Planning & Design",
    "Engineering & Execution",
    "Quality & Safety Checks",
    "Project Delivery",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Our Process
        </h2>

        {/* Timeline container */}
        <div className="relative flex flex-col lg:flex-row items-center lg:justify-between gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              className="flex flex-col items-center text-center lg:w-1/4 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Step circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-500 text-white font-bold text-xl shadow-md mb-4 hover:scale-110 transition-transform duration-300 z-10">
                {index + 1}
              </div>

              {/* Step description */}
              <p className="font-semibold text-lg">{step}</p>

              {/* Horizontal connector line */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-1 bg-amber-200 -translate-y-1/2 z-0"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
