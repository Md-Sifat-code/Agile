import React, { useState } from "react";
import { FaArrowUp, FaSun, FaMoon } from "react-icons/fa"; // Import the up arrow and sun/moon icons
import { useThemeSwitcher } from "react-css-theme-switcher"; // Import the theme switcher hook

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { switcher, currentTheme } = useThemeSwitcher(); // Get theme switcher and current theme

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent navigation
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown
  };

  const handleThemeToggle = () => {
    switcher({ theme: currentTheme === "light" ? "dark" : "light" }); // Toggle theme
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:justify-around">
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
        <div className="mt-8 flex flex-col  lg:flex-row justify-center items-center gap-6 lg:gap-12 font-bold">
          <button
            onClick={() => scrollToSection("home")}
            className={`${
              currentTheme === "light" ? "text-black" : "text-white"
            } relative border-b-2 py-6 border-transparent hover:border-purple-800 transition-all`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`${
              currentTheme === "light" ? "text-black" : "text-white"
            } relative border-b-2 py-6 border-transparent hover:border-purple-800 transition-all`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`${
              currentTheme === "light" ? "text-black" : "text-white"
            } relative border-b-2 py-6 border-transparent hover:border-purple-800 transition-all`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className={`${
              currentTheme === "light" ? "text-black" : "text-white"
            } relative border-b-2 py-6 border-transparent hover:border-purple-800 transition-all`}
          >
            Testimonials
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={`${
              currentTheme === "light" ? "text-black" : "text-white"
            } relative border-b-2 py-6 border-transparent hover:border-purple-800 transition-all`}
          >
            Contact
          </button>
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
