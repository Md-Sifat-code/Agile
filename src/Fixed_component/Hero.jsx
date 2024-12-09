import React from "react";
import face from "/icons8-wink-50.png";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import hero from "/rb_20414.png";
import { useThemeSwitcher } from "react-css-theme-switcher"; // Import theme switcher hook

export default function Hero() {
  const { currentTheme } = useThemeSwitcher(); // Get the current theme

  return (
    <section>
      <div className="container mx-auto h-[800px] grid grid-cols-2 overflow-hidden">
        {/* Left Section */}
        <div className="w-full h-full flex flex-col justify-start items-center">
          <h1
            className={`${
              currentTheme === "light" ? "text-black" : "text-white"
            } font-bold text-5xl mt-44`}
          >
            Your Trustworthy{" "}
            <img className="inline-block w-[50px] h-[50px]" src={face} alt="" />
            <br />
            <span className="font-semibold">Technology</span>
            <br />
            <span className="font-semibold">Partner</span>
          </h1>
          <p
            className={`${
              currentTheme === "light" ? "text-gray-700 co" : "text-white co"
            } text-start mt-6`}
          >
            From Software Development to End-to-End Digital
            <br />
            Solutions
          </p>
          <div className="w-full flex flex-row justify-center items-start gap-24 mt-8">
            <Link
              className={`btn btn-outline px-12 font-bold ${
                currentTheme === "light"
                  ? "text-black border-purple-800 hover:bg-purple-800 hover:text-white"
                  : "text-white border-purple-800 hover:bg-purple-800 hover:text-white"
              }`}
            >
              Projects
            </Link>
            <Link className="btn btn-primary bg-purple-800 border-none text-white font-bold px-8 hover:bg-purple-600">
              Book a Call
              <FaArrowUp className="inline-block rotate-45 text-xl" />
            </Link>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex justify-center items-center">
          <img
            className="animate-spin-slow max-w-full h-auto"
            src={hero}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
