import React from "react";
import face from "/icons8-wink-50.png";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import hero from "/rb_20414.png";
import ng from "/1209998-3840x2160-desktop-4k-glow-in-the-dark-background-photo.jpg";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      className="relative py-10 border-b-[1px] border-[#5618a5]"
      style={{
        backgroundImage: `url(${ng})`, // Set ng.svg as background
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        boxShadow: "0 10px 10px -5px #58065b", // Glowing effect on the bottom border
      }}
    >
      {/* Semi-transparent overlay */}
      <div
        className="absolute inset-0 bg-black opacity-30" // Adjust opacity for better visibility of the background
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 items-center">
        {/* Left Section */}
        <div className="flex flex-col justify-start items-start text-left col-span-2 space-y-6">
          <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl mt-8 lg:mt-0 leading-tight">
            Your Trustworthy{" "}
            <img
              className="inline-block w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]"
              src={face}
              alt="Smiley Face"
            />
            <br />
            <span className="font-semibold">Technology</span>
            <br />
            <span className="font-semibold">Partner</span>
          </h1>
          <p className="text-white co text-sm sm:text-base lg:text-lg">
            From Software Development to End-to-End
            <br className="hidden sm:block" /> Digital Solutions
          </p>
          <div className="flex lg:w-[70%] flex-col sm:flex-row justify-between gap-4 mt-4 sm:mt-6">
            <Link
              to={"/projects"}
              className="btn btn-outline font-bold text-sm sm:text-base px-6 sm:px-8 py-3 text-white border-purple-800 hover:bg-purple-800 hover:text-white"
            >
              Projects
              <FaArrowUp className="rotate-45 text-lg" />
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn btn-primary bg-purple-800 border-none text-sm sm:text-base font-bold px-8 sm:px-8 py-3 hover:bg-purple-600 flex text-white items-center justify-center gap-2"
            >
              Book a Call
              <FaArrowUp className="rotate-45 text-lg" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center mt-8 lg:mt-0 col-span-2">
          <img
            className="max-w-full w-[80%] sm:w-[70%] lg:w-full h-auto animate-spin-slow"
            src={hero}
            alt="Hero Illustration"
          />
        </div>
      </div>
    </section>
  );
}
