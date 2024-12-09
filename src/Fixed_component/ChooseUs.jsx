import React from "react";
import logo from "/download.png";

export default function ChooseUs() {
  return (
    <section className="bg-[#1e2124]">
      <div className="flex border-t rounded-tl-[42px] rounded-tr-[42px] flex-col justify-center items-center mt-[100px] p-12 px-4 lg:px-8">
        <div>
          <h1 className="text-4xl lg:text-5xl font-light text-white text-center pop">
            Why Choose{" "}
            <span className="font-bold text-white">
              A<span className="text-purple-800 fo">g</span>ile
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center items-center overflow-hidden">
            <img
              className="max-w-full h-auto animate-spin-slow"
              src={logo}
              alt="Agile Logo"
            />
          </div>
          {/* Text Section */}
          <div className="text-white pop flex flex-col font-semibold gap-6 px-4 lg:px-8">
            <p className="w-full lg:w-[80%]">
              Glowing universe One of the main drivers of our constant progress
              and desire to be better in the IT business is when customers tell
              us about how our software solutions have helped them finally
              achieve their tech or business goals.
            </p>
            <p className="w-full lg:w-[80%]">
              Each scenario presents a distinct challenge and opportunity, and
              every step is a decision that affects hundreds of small components
              of a project. Our team is united by a common goal:{" "}
              <span className="text-purple-800">
                helping you transform your company’s business operations and
                enhance productivity.
              </span>
            </p>
            <p className="w-full lg:w-[80%]">
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
