import React, { useState, useEffect } from "react";
import { FaProjectDiagram, FaClock, FaBuilding, FaSmile } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      label: "Projects Completed",
      value: 50,
      icon: FaProjectDiagram,
    },
    {
      label: "Years Experience",
      value: 10,
      icon: FaClock,
    },
    {
      label: "Infrastructure Domains",
      value: 4,
      icon: FaBuilding,
    },
    {
      label: "Happy Clients",
      value: 40,
      icon: FaSmile,
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
        {stats.map((stat) => (
          <AnimatedStat key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}

// Animated counter component
function AnimatedStat({ stat }) {
  const [count, setCount] = useState(0);
  const Icon = stat.icon; 
  useEffect(() => {
    let start = 0;
    const end = stat.value;
    const duration = 2000; 
    const increment = end / (duration / 50); // update every 50ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, [stat.value]);

  return (
    <div className="bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
      <Icon className="w-10 h-10 text-amber-400 mb-2 mx-auto" />
      <h3 className="text-4xl font-bold text-amber-400">{count}+</h3>
      <p className="mt-2 text-slate-300 font-medium">{stat.label}</p>
    </div>
  );
}
