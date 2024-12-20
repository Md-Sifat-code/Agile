import React from "react";
import gift from "/extra-unscreen.gif";

export default function ChooseUs() {
  return (
    <section className="bg-[#1e2124]">
      <div className="flex flex-col justify-center items-center bg-[#08020e] py-8 px-4 sm:px-6 md:px-12 lg:px-16">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-light text-center pop mt-8 md:mt-12">
            Why Choose{" "}
            <span className="font-bold text-white">
              A
              <span className="text-purple-800 text-5xl sm:text-6xl md:text-7xl fo">
                g
              </span>
              ile
            </span>
          </h1>
        </div>
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 place-items-center items-center">
          {/* GIF Section */}
          <div className="flex justify-center items-center overflow-hidden">
            <img
              src={gift}
              alt="Why Choose Us GIF"
              className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] object-contain p-6 sm:p-10 md:p-14"
            />
          </div>
          {/* Text Section */}
          <div className="rounded-lg w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[70%] p-4 sm:p-6 md:p-8 shadow-xl shadow-[#430847] pop flex flex-col justify-center items-center font-medium gap-6 text-gray-300 bg-[#0f041a]">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center px-4 sm:px-6">
              Glowing universe is one of the main drivers of our constant
              progress and desire to be better in the IT business. We listen to
              our customers and ensure our software solutions help them achieve
              their tech or business goals.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center px-4 sm:px-6">
              Each scenario presents a distinct challenge and opportunity. Every
              step affects countless components of a project. Our team is united
              by a common goal:{" "}
              <span className="text-purple-800">
                helping you transform your company’s business operations and
                enhance productivity.
              </span>
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center px-4 sm:px-6">
              We believe in our capabilities and aim to turn your software
              development journey into a strategic advantage. Let us demonstrate
              our skills and craft a custom solution, even if others have said
              it’s impossible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
