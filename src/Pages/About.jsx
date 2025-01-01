import React from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaRocket, FaHandshake } from "react-icons/fa";
import sd from "/sdaa.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import CountUp from "react-countup"; // Import CountUp
import { FaStar } from "react-icons/fa6";
export default function About() {
  return (
    <section>
      <div className="container mx-auto mb-12 mt-12 bg-[#08020e] px-4">
        {/* Breadcrumb Navigation */}
        <div className="flex justify-center items-center">
          <div className="w-full  mt-12">
            <h1 className="text-white font-normal flex flex-row justify-start items-center text-sm lg:text-lg">
              <Link to={"/"}>Home</Link>{" "}
              <IoIosArrowRoundForward className="inline-block text-lg lg:text-xl" />{" "}
              <span className="text-purple-800 text-sm lg:text-xl font-bold">
                Projects
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-start items-center mt-8">
          <div className="w-full  lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section: Text */}
            <div className=" flex flex-col justify-start items-start gap-4 px-4 md:px-0">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-start">
                About Us
              </h1>
              <p className="text-gray-300 text-sm md:text-base w-full">
                Agiles is a website and app development company that is
                passionate about coding and balancing customer needs with the
                right tech solutions. For over years, we have been creating
                custom technology solutions for clients in the Bangladesh. Our
                technological expertise, management skills, and recruitment
                model set us apart. We can help you develop any project from
                scratch, enhance your existing team with dedicated experts, or
                find specialists with specific skills and experience to help you
                get your project done.
              </p>
            </div>

            {/* Right Section: Image */}
            <div className="flex justify-center  items-center px-4 md:px-0">
              <img className="rounded-lg shadow-lg " src={sd} alt="Agiles" />
            </div>
          </div>
        </div>
        {/* Horizontal Divider */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-24">
          <div className="w-full mb-12 lg:mb-0  lg:w-[80%] pop flex justify-around items-center">
            {/* react count up part */}

            <div className="flex gap-4 flex-col justify-center items-center mt-6">
              <p className="text-white text-sm md:text-base">Projects</p>
              <h1 className="text-white text-4xl font-bold">
                <CountUp end={5} duration={5} /> {/* Projects count */}
              </h1>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center mt-6">
              <p className="text-white text-lg md:text-base">Users</p>
              <h1 className="text-purple-800 text-4xl font-bold">
                <CountUp end={500} duration={5} />+{/* Projects count */}
              </h1>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center mt-6">
              <p className="text-white text-sm md:text-base">Rating</p>
              <h1 className="text-white text-4xl flex items-center gap-2 font-bold">
                <p>4.8</p>
                <FaStar className="text-purple-800 text-[24px]" />{" "}
                {/* Projects count */}
              </h1>
            </div>
          </div>
          <div className="h-auto border border-gray-600 grid grid-cols-1 rounded-[18px] p-4 md:p-0 gap-6 md:gap-0 bg-[#210633]  shadow-2xl shadow-purple-800">
            <div className="flex flex-col justify-center items-center text-center p-4 lg:p-10">
              <h1 className="text-white text-xl md:text-2xl font-semibold">
                What makes us unique
              </h1>
            </div>
            <div className="flex flex-col gap-4 px-12 mb-8">
              <div className="p-4 lg:p-0 flex flex-col justify-center items-center text-center lg:text-start">
                <p className="text-white text-sm md:text-base font-medium">
                  At Agiles, we always strive to create solutions specifically
                  tailored to our clients’ needs. No matter the complexity of
                  your project, its duration, or the set of functions you want
                  us to integrate or develop, our mission remains the same.
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

        {/* Our Story Section */}
        <div className="container mx-auto mt-20 overflow-hidden">
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vision Card */}
            <div className="bg-[#210633]  bg-opacity-80 backdrop-blur-lg rounded-lg shadow-2xl p-8 text-center transition-transform transform hover:scale-105 will-change-transform">
              <div className="flex justify-center items-center mb-4 text-purple-800">
                <FaLightbulb className="text-4xl" />
              </div>
              <h2 className="text-purple-800 text-2xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                To empower businesses worldwide by delivering innovative and
                scalable digital solutions that bridge the gap between ambition
                and technology.
              </p>
            </div>

            {/* Dream Card */}
            <div className="bg-[#210633]  bg-opacity-80 backdrop-blur-lg rounded-lg shadow-2xl p-8 text-center transition-transform transform hover:scale-105 will-change-transform">
              <div className="flex justify-center items-center mb-4 text-purple-800">
                <FaRocket className="text-4xl" />
              </div>
              <h2 className="text-purple-800 text-2xl font-bold mb-4">
                Our Dream
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                To become a global leader in technology services, fostering a
                collaborative ecosystem that inspires innovation and excellence.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#210633]  bg-opacity-80 backdrop-blur-lg rounded-lg shadow-2xl p-8 text-center transition-transform transform hover:scale-105 will-change-transform">
              <div className="flex justify-center items-center mb-4 text-purple-800">
                <FaHandshake className="text-4xl" />
              </div>
              <h2 className="text-purple-800 text-2xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                To craft tailored websites and applications that transform ideas
                into impactful digital experiences, driven by client
                satisfaction.
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center w-full">
            <Link
              to={"/"}
              className="btn btn-outline text-white font-bold pop border-purple-800 px-8 hover:bg-purple-800"
            >
              Contact Us
            </Link>
          </div>

          <div>
            <h1></h1>
          </div>
        </div>
      </div>
    </section>
  );
}
