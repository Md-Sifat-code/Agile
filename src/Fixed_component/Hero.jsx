import React from "react";
import face from "/icons8-wink-50.png";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import hero from "/rb_20414.png";
import { useThemeSwitcher } from "react-css-theme-switcher"; // Import theme switcher hook

export default function Hero() {
  const { currentTheme } = useThemeSwitcher(); // Get the current theme

  return (
    <section className="py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center text-center lg:text-left px-4 lg:px-0 pop">
          <h1
            className={`${
              currentTheme === "light" ? "text-black" : "text-white"
            } font-bold text-4xl lg:text-5xl mt-8 lg:mt-0`}
          >
            Your Trustworthy{" "}
            <img
              className="inline-block w-[50px] h-[50px]"
              src={face}
              alt="Smiley Face"
            />
            <br />
            <span className="font-semibold">Technology</span>
            <br />
            <span className="font-semibold">Partner</span>
          </h1>
          <p
            className={`${
              currentTheme === "light"
                ? "text-gray-700 co px-3"
                : "text-white co px-3"
            } mt-6 text-base lg:text-lg`}
          >
            From Software Development to End-to-End Digital
            <br className="hidden md:block" />
            Solutions
          </p>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 lg:gap-8 mt-8">
            <Link
              className={`btn btn-outline font-bold px-8 ${
                currentTheme === "light"
                  ? "text-black border-purple-800 hover:bg-purple-800 hover:text-white"
                  : "text-white border-purple-800 hover:bg-purple-800 hover:text-white"
              } px-8 py-3`}
            >
              Projects
              <FaArrowUp className="rotate-45 text-xl" />
            </Link>
            <Link className="btn btn-primary bg-purple-800 border-none text-white font-bold px-8 py-3 hover:bg-purple-600 flex items-center justify-center gap-2">
              Book a Call
              <FaArrowUp className="rotate-45 text-xl" />
            </Link>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex justify-center items-center mt-8 lg:mt-0 overflow-hidden">
          <img
            className="max-w-full h-auto animate-spin-slow"
            src={hero}
            alt="Hero Illustration"
          />
        </div>
      </div>
    </section>
  );
}
