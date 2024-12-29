import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import pro from "/proje.png";
import project_1 from "/project-1.png";
import project_2 from "/project-2.png";
import project_3 from "/project-3.png";
import project_4 from "/project-4.png";
import project_5 from "/project-5.png";

export default function Projects() {
  return (
    <section className="h-auto bg-[#08020e] mb-12 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Navigation Breadcrumb */}
        <div className="flex justify-center items-center">
          <div className="w-full mt-12">
            <h1 className="text-white font-normal flex flex-row justify-start items-center text-sm lg:text-lg">
              <Link to={"/"}>Home</Link>{" "}
              <IoIosArrowRoundForward className="inline-block text-lg lg:text-xl" />{" "}
              <span className="text-purple-800 text-sm lg:text-xl font-bold">
                Projects
              </span>
            </h1>
          </div>
        </div>

        {/* Title and Description */}
        <div className="flex justify-center items-center mt-6">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side: Title and Description */}
              <div className="flex flex-col justify-center items-start gap-6">
                <h1 className="text-3xl lg:text-5xl text-white font-bold leading-tight">
                  Projects that we co-
                  <br />
                  created with our
                  <br /> clients
                </h1>
                <p className="text-white font-normal text-sm lg:text-base leading-relaxed">
                  We developed 30+ projects for businesses in more than 8+
                  industries. Whether you’re looking for inspiration or
                  considering us as your partner, these case studies highlight
                  the quality and dedication we bring to every project.
                </p>
              </div>

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-center items-center">
                <img
                  className="w-[150px] h-[150px] lg:w-[350px] lg:h-[350px] object-cover"
                  src={pro}
                  alt="Project"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex justify-center items-center mt-28">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Card 1 */}
              <div className="bg-[#210633]  shadow-purple-800 shadow-2xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
                <div className="flex flex-row items-center px-6 py-4">
                  <h2 className="font-bold text-lg lg:text-2xl flex-1">
                    Medi<span className="text-pink-500">C</span>
                  </h2>
                </div>
                <figure className="relative">
                  <img
                    src={project_1}
                    alt="Project"
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="text-white p-6">
                      <h3 className="text-lg font-semibold">Timeline</h3>
                      <p className="text-sm text-gray-400">7 months</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Custom Web application Development for Hospital
                      </p>
                      <p className="mt-4 text-sm">
                        A comprehensive medical management project providing
                        agile solutions for healthcare businesses.
                      </p>
                      <Link
                        to={"/"}
                        className="mt-6 inline-block text-white bg-purple-600 px-6 py-2 rounded-md font-semibold hover:bg-purple-700 transition-all"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </figure>
              </div>

              {/* Card 2 */}
              <div className="bg-[#210633]  shadow-purple-800 shadow-2xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
                <div className="flex flex-row items-center px-6 py-4">
                  <h2 className="font-bold text-lg lg:text-2xl flex-1">
                    Career<span className="text-blue-400">HUB</span>
                  </h2>
                </div>
                <figure className="relative">
                  <img
                    src={project_2}
                    alt="Project"
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="text-white p-6">
                      <h3 className="text-lg font-semibold">Timeline</h3>
                      <p className="text-sm text-gray-400">3 months</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Custom Web application Development for Career
                        Consultation
                      </p>
                      <p className="mt-4 text-sm">
                        A comprehensive career consultation project providing
                        agile solutions for career guidance.
                      </p>
                      <Link
                        to={"/"}
                        className="mt-6 inline-block text-white bg-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </figure>
              </div>

              {/* Card 3 */}
              <div className="bg-[#210633]  shadow-purple-800 shadow-2xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
                <div className="flex flex-row items-center px-6 py-4">
                  <h2 className="font-bold text-lg lg:text-2xl flex-1">
                    Travel<span className="text-orange-500">Deabel</span>
                  </h2>
                </div>
                <figure className="relative">
                  <img
                    src={project_3}
                    alt="Project"
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="text-white p-6">
                      <h3 className="text-lg font-semibold">Timeline</h3>
                      <p className="text-sm text-gray-400">3 months</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Custom Web application Development for Travel Guide
                      </p>
                      <p className="mt-4 text-sm">
                        A comprehensive travel guidance project providing agile
                        solutions for travel guides.
                      </p>
                      <Link
                        to={"/"}
                        className="mt-6 inline-block text-white bg-orange-500 px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition-all"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </figure>
              </div>

              {/* Card 4 */}
              <div className="bg-[#210633]  mb-12 shadow-purple-800 shadow-2xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
                <div className="flex flex-row items-center px-6 py-4">
                  <h2 className="font-bold text-lg lg:text-2xl flex-1">
                    Aestheti<span className="text-rose-800">CS</span>
                  </h2>
                </div>
                <figure className="relative">
                  <img
                    src={project_4}
                    alt="Project"
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="text-white p-6">
                      <h3 className="text-lg font-semibold">Timeline</h3>
                      <p className="text-sm text-gray-400">1 month</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Custom Web application Development for Beauty Services
                      </p>
                      <p className="mt-4 text-sm">
                        A beauty services application connecting customers and
                        professionals through an innovative platform.
                      </p>
                      <Link
                        to={"/"}
                        className="mt-6 inline-block text-white bg-rose-600 px-6 py-2 rounded-md font-semibold hover:bg-rose-700 transition-all"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </figure>
              </div>

              {/* Card 5 */}
              <div className="bg-[#210633]  shadow-purple-800 shadow-2xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden mb-12">
                <div className="flex flex-row items-center px-6 py-4">
                  <h2 className="font-bold text-lg lg:text-2xl flex-1">
                    Penguin<span className="text-yellow-500">Cloth</span>
                  </h2>
                </div>
                <figure className="relative">
                  <img
                    src={project_5}
                    alt="Project"
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="text-white p-6">
                      <h3 className="text-lg font-semibold">Timeline</h3>
                      <p className="text-sm text-gray-400">5 months</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Custom Web application Development for Rental Services
                      </p>
                      <p className="mt-4 text-sm">
                        A rental platform helping users rent items effortlessly
                        for short periods.
                      </p>
                      <Link
                        to={"/"}
                        className="mt-6 inline-block text-white bg-yellow-500 px-6 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-all"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
