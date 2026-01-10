import React, { useState, useEffect, useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // ✅ Validation logic
  const validate = () => {
    let newErrors = {};

    if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit Indian mobile number";
    }

    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log(formData);
    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current)
              setVisible((p) => ({ ...p, heading: true }));
            if (entry.target === infoRef.current)
              setVisible((p) => ({ ...p, info: true }));
            if (entry.target === formRef.current)
              setVisible((p) => ({ ...p, form: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    headingRef.current && observer.observe(headingRef.current);
    infoRef.current && observer.observe(infoRef.current);
    formRef.current && observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          ref={headingRef}
          className={`text-4xl sm:text-5xl font-extrabold text-center mb-12 transition-all duration-1000 ${
            visible.heading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get in Touch
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* LEFT INFO */}
          <div
            ref={infoRef}
            className={`space-y-8 transition-all duration-1000 ${
              visible.info ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-semibold">Contact Info</h3>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-amber-500" />
              <span>info@techmacproject.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-500" />
              <span>+91 9903020636</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-amber-500" />
              <span>123 Tech Mac Lane, India</span>
            </div>
          </div>

          {/* FORM */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`bg-white p-8 rounded-2xl shadow-md space-y-5 transition-all duration-1000 ${
              visible.form ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Name */}
            <div>
              <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Phone with +91 */}
            <div className="flex">
              <span className="px-4 py-3 border bg-gray-100 rounded-l-lg">
                +91
              </span>
              <input
                name="phone"
                maxLength="10"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-r-lg"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            {/* Subject */}
            <input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            {/* Message */}
            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 py-3 rounded-xl font-semibold hover:bg-amber-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
