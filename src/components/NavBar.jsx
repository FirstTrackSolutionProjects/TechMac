import { Link } from "react-router-dom";
import { useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <nav className="bg-gradient-to-r from-blue-500 via-sky-200 to-blue-900 text-white sticky top-0 z-50 shadow-md">
       {/* <nav className="bg-slate-400 text-white sticky top-0 z-50 shadow-md"> */}

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <img
            src="/logo.png"
            alt="Tech Mac Project Logo"
            className="h-10 sm:h-12 w-auto object-contain scale-130"
            />


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <Link to="/about" className="hover:text-amber-400">About</Link>
          <Link to="/services" className="hover:text-amber-400">Services</Link>
          <Link to="/projects" className="hover:text-amber-400">Projects</Link>
          <Link to="/investors" className="hover:text-amber-400">Investors</Link>
          <Link to="/contact" className="hover:text-amber-400">Contact</Link>
        </div>

        {/* Mobile Hamburger / Cross */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-slate-700 transition"
        >
          {isOpen ? (
            <IoCloseSharp className="text-white text-3xl" />
          ) : (
            <IoMenu className="text-white text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-800 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col">
          <Link
            onClick={() => setIsOpen(false)}
            to="/"
            className="block py-3 border-b border-slate-700 hover:text-amber-400"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/about"
            className="block py-3 border-b border-slate-700 hover:text-amber-400"
          >
            About
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/services"
            className="block py-3 border-b border-slate-700 hover:text-amber-400"
          >
            Services
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/projects"
            className="block py-3 border-b border-slate-700 hover:text-amber-400"
          >
            Projects
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/investors"
            className="block py-3 border-b border-slate-700 hover:text-amber-400"
          >
            Investors
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/contact"
            className="block py-3 hover:text-amber-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
