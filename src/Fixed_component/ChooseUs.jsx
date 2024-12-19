import React from "react";
import gift from "/extra-unscreen.gif";

export default function ChooseUs() {
  return (
    <section className="bg-[#1e2124]">
      <div className="flex flex-col justify-center items-center bg-[#08020e] p-12 px-4 lg:px-8">
        <div>
          <h1 className="text-4xl lg:text-5xl text-white font-light text-center pop mt-12">
            Why Choose{" "}
            <span className="font-bold text-white">
              A<span className="text-purple-800 text-6xl fo">g</span>ile
            </span>
          </h1>
        </div>
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* GIF Section */}
          <div className="flex justify-center items-center overflow-hidden">
            <img
              src={gift}
              alt="Why Choose Us GIF"
              className="w-full lg:w-[70%] p-14 object-contain"
            />
          </div>
          {/* Text Section */}
          <div className=" rounded-[18px] w-[70%] p-4 shadow-2xl shadow-[#430847] pop flex flex-col justify-center items-center font-semibold gap-6 px-4 lg:px-8 text-gray-400 text-[] bg-[#0f041a]">
            <p className=" p-4  text-center w-full lg:w-[80%]">
              Glowing universe One of the main drivers of our constant progress
              and desire to be better in the IT business is when customers tell
              us about how our software solutions have helped them finally
              achieve their tech or business goals.
            </p>
            <p className="w-full text-center lg:w-[80%]">
              Each scenario presents a distinct challenge and opportunity, and
              every step is a decision that affects hundreds of small components
              of a project. Our team is united by a common goal:{" "}
              <span className="text-purple-800">
                helping you transform your company’s business operations and
                enhance productivity.
              </span>
            </p>
            <p className="w-full text-center lg:w-[80%]">
              We believe in our capabilities and strive to turn your software
              development journey into a strategic advantage that highlights
              your strengths and lets you fully reach your potential. We would
              be honored to demonstrate our skills and develop a custom approach
              based on what you are looking for, even if you have been told by
              others that it’s impossible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
