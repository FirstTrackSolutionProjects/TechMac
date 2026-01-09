import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-5">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
       
        
        {/* Company Info */}
        <div>
            <img src="/logo.png" alt="Tech Mac Project Logo" className="w-30 mb-3" />

            <p className="text-sm leading-relaxed mb-4">
            Tech Mac Project Private Limited delivers reliable and
            future-ready infrastructure solutions across township,
            transport, electrical, and telecom sectors.
          </p>

          {/* Social Media */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>

            <a
                href="#"
                className="p-2 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-black transition"
                >
                <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber-400">About Us</Link></li>
            {/* <li><Link to="/services" className="hover:text-amber-400">Services</Link></li>
            <li><Link to="/projects" className="hover:text-amber-400">Projects</Link></li> */}
            <li><Link to="/contact" className="hover:text-amber-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Township & Real Estate</li>
            <li>Transport Infrastructure</li>
            <li>Electrical Infrastructure</li>
            <li>Telecom Infrastructure</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 India</li>
            <li>📞 +91 1234567890</li>
            <li>✉️ info@techmacproject.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 py-4 text-center text-sm text-slate-400">
        © 2026 Tech Mac Project Private Limited. All Rights Reserved.
      </div>
    </footer>
  );
}
