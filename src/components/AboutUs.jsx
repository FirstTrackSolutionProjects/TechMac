import React from 'react';

export default function AboutUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        
        {/* Left side - Text */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl font-extrabold mb-6 leading-snug">
            About
          </h2>
          <p className="text-slate-600 text-lg mb-6">
            Tech Mac Project Private Limited specializes in delivering
            high-quality infrastructure solutions across real estate,
            transport, electrical, and telecom sectors with a strong
            commitment to safety, quality, and timely delivery.
          </p>
          <p className="text-slate-600 text-lg">
            Our team of experts ensures each project meets the highest standards,
            combining innovation and reliability to build sustainable infrastructure
            that serves communities for years to come.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="lg:w-1/2 relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
            <img
              src="/images/about.jpg"
              alt="Tech Mac Project"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Optional overlapping accent */}
          <div className="hidden lg:block absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
}
