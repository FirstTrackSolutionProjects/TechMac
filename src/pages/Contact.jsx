import React, { useState, useEffect, useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const headingRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  const [visible, setVisible] = useState({
    heading: false,
    info: false,
    form: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current)
              setVisible((prev) => ({ ...prev, heading: true }));
            if (entry.target === infoRef.current)
              setVisible((prev) => ({ ...prev, info: true }));
            if (entry.target === formRef.current)
              setVisible((prev) => ({ ...prev, form: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (infoRef.current) observer.observe(infoRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2
          ref={headingRef}
          className={`text-4xl sm:text-5xl font-extrabold text-center mb-12 transition-all duration-1000 ${
            visible.heading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get in Touch
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info + Map */}
          <div
            ref={infoRef}
            className={`flex flex-col justify-start space-y-8 transition-all duration-1000 ${
              visible.info ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-semibold">Contact Info</h3>
            <p className="text-slate-700">
              Reach out to us for any queries or project discussions.
            </p>

            <div className="flex items-center gap-3 text-slate-800">
              <FaEnvelope className="w-5 h-5 text-amber-500" />
              <span>info@techmacproject.com</span>
            </div>

            <div className="flex items-center gap-3 text-slate-800">
              <FaPhoneAlt className="w-5 h-5 text-amber-500" />
              <span>+91 1234567890</span>
            </div>

            <div className="flex items-center gap-3 text-slate-800">
              <FaMapMarkerAlt className="w-5 h-5 text-amber-500" />
              <span>123 Tech Mac Lane, Your City, India</span>
            </div>

            {/* Google Map */}
            <div className="mt-6 w-full h-64 rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Tech Mac Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8904794511337!2d90.4125!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85de0c12345%3A0xabcdef123456!2sYour%20Company%20Location!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`bg-white p-8 rounded-2xl shadow-md space-y-6 transition-all duration-1000 ${
              visible.form ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block mb-2 font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-black font-semibold py-3 rounded-xl shadow-md hover:bg-amber-600 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
