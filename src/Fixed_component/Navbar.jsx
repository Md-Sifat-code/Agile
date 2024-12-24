import React, { useState } from "react";
import { FaArrowUp, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close menu on navigation
    }
  };

  // Helper function to determine active link
  const isActive = (path) => location.pathname === path;

  return (
    <section className="bg-[#04030c]">
      <div className="container mx-auto flex flex-row justify-between items-center px-4 py-4 lg:px-8 lg:py-6 mt-8">
        {/* Logo */}
        <div className="text-5xl lg:text-6xl text-white ma font-bold">
          <h1>
            A<span className="fo text-purple-800 text-6xl lg:text-7xl">g</span>
            iles
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-row justify-center items-center gap-8 font-bold">
          <Link
            to="/"
            className={`text-white relative border-b-2 py-2 ${
              isActive("/") ? "border-purple-800" : "border-transparent"
            } hover:border-purple-800 transition-all`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-white relative border-b-2 py-2 ${
              isActive("/about") ? "border-purple-800" : "border-transparent"
            } hover:border-purple-800 transition-all`}
          >
            About Us
          </Link>
          <Link
            to="/projects"
            className={`text-white relative border-b-2 py-2 ${
              isActive("/projects") ? "border-purple-800" : "border-transparent"
            } hover:border-purple-800 transition-all`}
          >
            Projects
          </Link>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-white relative border-b-2 py-2 border-transparent hover:border-purple-800 transition-all"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white relative border-b-2 py-2 border-transparent hover:border-purple-800 transition-all"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn px-6 text-white border-2 border-transparent bg-transparent gradient-border hover:bg-gradient-to-b from-purple-400 to-purple-900 hover:border-black hover:rounded-none"
          >
            Book a Call
            <FaArrowUp className="ml-2 transform rotate-45" />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#04030c] bg-opacity-95 z-50 flex flex-col items-center justify-center gap-6 font-bold">
          {/* Close Button */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 text-white text-3xl z-50 focus:outline-none"
          >
            <FaTimes />
          </button>

          {/* Navigation Links */}
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-white text-lg relative border-b-2 py-2 ${
              isActive("/") ? "border-purple-800" : "border-transparent"
            } hover:border-purple-800 transition-all`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-white text-lg relative border-b-2 py-2 ${
              isActive("/about") ? "border-purple-800" : "border-transparent"
            } hover:border-purple-800 transition-all`}
          >
            About Us
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-white text-lg relative border-b-2 py-2 ${
              isActive("/projects") ? "border-purple-800" : "border-transparent"
            } hover:border-purple-800 transition-all`}
          >
            Projects
          </Link>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-white text-lg relative border-b-2 py-2 border-transparent hover:border-purple-800 transition-all"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white text-lg relative border-b-2 py-2 border-transparent hover:border-purple-800 transition-all"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn px-6 text-white border-2 border-transparent bg-transparent gradient-border hover:bg-gradient-to-b from-purple-400 to-purple-900 hover:border-black hover:rounded-none"
          >
            Book a Call
            <FaArrowUp className="ml-2 transform rotate-45" />
          </button>
        </div>
      )}
    </section>
  );
}
