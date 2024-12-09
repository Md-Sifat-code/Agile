import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaArrowUp, FaSun, FaMoon } from "react-icons/fa"; // Import the up arrow and sun/moon icons
import { useThemeSwitcher } from "react-css-theme-switcher"; // Import the theme switcher hook

export default function Navbar() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { switcher, currentTheme } = useThemeSwitcher(); // Get theme switcher and current theme

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent navigation
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown
  };

  const handleThemeToggle = () => {
    switcher({ theme: currentTheme === "light" ? "dark" : "light" }); // Toggle theme
  };

  return (
    <section>
      <div className="container mx-auto flex flex-row justify-around">
        {/* logo */}
        <div
          className={`text-5xl ${
            currentTheme === "light" ? "text-black" : "text-white"
          } ma font-bold mt-8`}
        >
          <h1>
            A<span className="fo text-purple-800">g</span>ile
          </h1>
        </div>
        <div className="mt-8 flex flex-row justify-center items-center gap-12 font-bold">
          <NavLink
            to="/"
            className={`${
              location.pathname === "/"
                ? "text-purple-600"
                : currentTheme === "light"
                ? "text-black"
                : "text-white"
            } relative border-b-2 py-6 border-transparent hover:border-purple-800 transition-all`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={`${
              location.pathname === "/about"
                ? "text-purple-600"
                : currentTheme === "light"
                ? "text-black"
                : "text-white"
            } relative border-b-2 py-6 border-transparent hover:border-purple-800 transition-all`}
          >
            About Us
          </NavLink>

          <NavLink
            to="/Projects"
            className={`${
              location.pathname === "/cases"
                ? "text-purple-600"
                : currentTheme === "light"
                ? "text-black"
                : "text-white"
            } relative border-b-2 py-6 border-transparent hover:border-purple-800 transition-all`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/testimonials"
            className={`${
              location.pathname === "/testimonials"
                ? "text-purple-600"
                : currentTheme === "light"
                ? "text-black"
                : "text-white"
            } relative border-b-2 py-6 border-transparent hover:border-purple-800 transition-all`}
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/blog"
            className={`${
              location.pathname === "/blog"
                ? "text-purple-600"
                : currentTheme === "light"
                ? "text-black"
                : "text-white"
            } relative border-b-2 py-6 border-transparent hover:border-purple-800 transition-all`}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={`${
              location.pathname === "/contact"
                ? "text-purple-600"
                : currentTheme === "light"
                ? "text-black"
                : "text-white"
            } relative border-b-2 py-6 border-transparent hover:border-purple-800 transition-all`}
          >
            Contact
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <button
            className={`btn mt-8 px-8 ${
              currentTheme === "light" ? "text-black  border" : "text-white"
            } border-2 border-transparent bg-transparent gradient-border hover:bg-gradient-to-b from-purple-400 to-purple-900 hover:border-black hover:rounded-none`}
          >
            Book a Call
            <FaArrowUp className="ml-2 transform rotate-45" />
          </button>

          {/* Theme Switcher Button */}
          <button
            onClick={handleThemeToggle}
            className="mt-8 p-2 text-white border-2 border-transparent bg-black hover:bg-gray-700 rounded-full"
          >
            {currentTheme === "light" ? (
              <FaMoon className="text-yellow-400 " />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
