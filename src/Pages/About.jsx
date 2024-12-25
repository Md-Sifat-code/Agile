import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineSlash } from "react-icons/hi2";
import sd from "/sdaa.png";

export default function About() {
  return (
    <section>
      <div className="container mx-auto mt-12 bg-[#08020e] px-4">
        <div className="flex flex-wrap items-center space-x-2 py-4">
          <Link
            to={"/"}
            className="text-white font-bold text-lg md:text-xl hover:text-purple-800"
          >
            Home
          </Link>
          <HiOutlineSlash className="text-lg md:text-xl text-white" />
          <h1 className="text-purple-800 text-lg md:text-xl font-bold">
            About
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8">
          <div className="w-full md:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section: Text */}
            <div className="flex flex-col justify-center items-start gap-4 px-4 md:px-0">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-start">
                About Us
              </h1>
              <p className="text-gray-300 text-sm md:text-base w-full">
                Agiles is a website and app development company that is
                passionate about coding and balancing customer needs with the
                right tech solutions. For over 10 years, we have been creating
                custom technology solutions for clients in the UK, Canada, and
                across South Asia countries. Our technological expertise,
                management skills, and recruitment model set us apart. We can
                help you develop any project from scratch, enhance your existing
                team with dedicated experts, or find specialists with specific
                skills and experience to help you get your project done.
              </p>
            </div>

            {/* Right Section: Image */}
            <div className="flex  justify-center lg:justify-end items-center  px-4 md:px-0">
              <img className="" src={sd} alt="Agiles" />
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="flex justify-center items-center mt-12">
          <div className="h-auto lg:h-52 w-full md:w-[70%] border border-gray-600 grid grid-cols-1 lg:grid-cols-3 rounded-[42px] p-4 md:p-0 gap-6 md:gap-0 bg-[#0f041a] shadow-2xl shadow-[#430847] ">
            <div className="flex flex-col justify-center items-center text-center p-4 lg:p-0">
              <h1 className="text-white text-xl md:text-2xl font-semibold">
                What makes us unique
              </h1>
            </div>
            <div className="p-4 lg:p-0 flex flex-col justify-center items-center text-center lg:text-start">
              <p className="text-white text-sm md:text-base font-medium">
                At Agiles, we always strive to create solutions specifically
                tailored to our clients’ needs. No matter the complexity of your
                project, its duration, or the set of functions you want us to
                integrate or develop, our mission remains the same.
              </p>
            </div>
            <div className="p-4 lg:p-0 flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-purple-800">
                1+
              </h1>
              <p className="text-white text-sm md:text-base">
                years in business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
