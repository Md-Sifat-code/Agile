import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { ImFire } from "react-icons/im";
import pro from "/proje.png";
import project_1 from "/project-1.png";
import project_2 from "/project-2.png";
import project_3 from "/project-3.png";
import project_4 from "/project-4.png";
import project_5 from "/project-5.png";
import rock from "/rocket-1.png";
export default function Projects() {
  return (
    <section className="h-auto bg-[#08020e] mb-12 text-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Navigation Breadcrumb */}
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

        {/* Title and Description */}
        <div className="flex justify-center items-center mt-6">
          <div className="w-full ">
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
                  className="w-[150px] h-[150px] lg:w-[350px] lg:h-[350px]"
                  src={pro}
                  alt="Project"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex justify-center items-center mt-28">
          <div className="w-full ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Card-1 */}
              <div className="card bg-[#0f041a] shadow-2xl shadow-[#430847] transition-all duration-300 rounded-lg overflow-hidden">
                <div className="flex mt-8 flex-row items-center px-6 lg:px-12 mb-6">
                  <h2 className="font-bold text-lg lg:text-2xl flex-1">
                    Medi<span className="text-pink-500">C</span>
                  </h2>
                  {/* <div className="ma text-lg lg:text-2xl font-bold">
                    <h1>
                      A
                      <span className="fo text-purple-800 text-xl lg:text-3xl">
                        g
                      </span>
                      iles
                    </h1>
                  </div> */}
                </div>
                <figure className="relative group">
                  <img
                    src={project_1}
                    alt="Project"
                    className="w-full p-4 lg:p-12 h-[200px] md:h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex-col pop font-bold ">
                    <div className="flex justify-between gap-12 flex-row p-8">
                      <h1 className="flex flex-col flex-1">
                        Timeline<span className="text-gray-400">7months</span>
                      </h1>
                      <p className="flex flex-col">
                        Technologies
                        <span className="text-gray-400">
                          Custom Web application Development for Hospital
                        </span>
                      </p>
                    </div>
                    <p className="text-purple-800 text-sm lg:text-base px-8 text-start">
                      A comprehensive medical management project providing agile
                      solutions for healthcare businesses.
                    </p>
                    <div className="w-full flex justify-start px-8">
                      <Link
                        className="btn btn-outline border-purple-800 text-white font-bold pop mt-6 px-8"
                        to={"/"}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </figure>
              </div>
              {/* card-2 */}
              <div className="card bg-[#0f041a] shadow-2xl shadow-[#430847] transition-all duration-300 rounded-lg overflow-hidden">
                <div className="flex mt-8 flex-row items-center px-6 lg:px-12 mb-6">
                  <h2 className="font-bold text-lg lg:text-2xl flex-1">
                    Career<span className="text-blue-400">HUB</span>
                  </h2>
                  {/* <div className="ma text-lg lg:text-2xl font-bold">
                    <h1>
                      A
                      <span className="text-purple-800 fo text-xl lg:text-3xl">
                        g
                      </span>
                      iles
                    </h1>
                  </div> */}
                </div>
                <figure className="relative group">
                  <img
                    src={project_2}
                    alt="Project"
                    className="w-full p-4 lg:p-12 h-[200px] md:h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex-col pop font-bold ">
                    <div className="flex justify-between gap-12 flex-row p-8">
                      <h1 className="flex flex-col flex-1">
                        Timeline<span className="text-gray-400">3months</span>
                      </h1>
                      <p className="flex flex-col">
                        Technologies
                        <span className="text-gray-400">
                          Custom Web application Development for Career
                          Consaltation
                        </span>
                      </p>
                    </div>
                    <p className="text-purple-800 text-sm lg:text-base px-8 text-start">
                      A comprehensive Career Cosaltation project providing agile
                      solutions for Career Guide.
                    </p>
                    <div className="w-full flex justify-start px-8">
                      <Link
                        className="btn btn-outline border-purple-800 text-white font-bold pop mt-6 px-8"
                        to={"/"}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </figure>
              </div>
              {/* card-3 */}
              <div className="card bg-[#0f041a] shadow-2xl shadow-[#430847] transition-all duration-300 rounded-lg overflow-hidden">
                <div className="flex mt-8 flex-row items-center px-6 lg:px-12 mb-6">
                  <h2 className="font-bold text-lg lg:text-2xl flex-1">
                    Travel<span className="text-orange-500">Deabel</span>
                  </h2>
                  {/* <div className="ma text-lg lg:text-2xl font-bold">
                    <h1>
                      A
                      <span className="text-purple-800 fo text-xl lg:text-3xl">
                        g
                      </span>
                      iles
                    </h1>
                  </div> */}
                </div>
                <figure className="relative group">
                  <img
                    src={project_3}
                    alt="Project"
                    className="w-full p-4 lg:p-12 h-[200px] md:h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex-col pop font-bold ">
                    <div className="flex justify-between gap-12 flex-row p-8">
                      <h1 className="flex flex-col flex-1">
                        Timeline<span className="text-gray-400">3months</span>
                      </h1>
                      <p className="flex flex-col">
                        Technologies
                        <span className="text-gray-400">
                          Custom Web application Development for Travel Guide
                        </span>
                      </p>
                    </div>
                    <p className="text-purple-800 text-sm lg:text-base px-8 text-start">
                      A comprehensive travel Guidance project providing agile
                      solutions for Travel Guide.
                    </p>
                    <div className="w-full flex justify-start px-8">
                      <Link
                        className="btn btn-outline border-purple-800 text-white font-bold pop mt-6 px-8"
                        to={"/"}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </figure>
              </div>
              {/* card-4 */}
              <div className="card bg-[#0f041a] shadow-2xl shadow-[#430847] transition-all duration-300 rounded-lg overflow-hidden">
                <div className="flex mt-8 flex-row items-center px-6 lg:px-12 mb-6">
                  <h2 className="font-bold text-lg lg:text-2xl flex-1">
                    Aestheti<span className="text-rose-800">CS</span>
                  </h2>
                  {/* <div className="ma text-lg lg:text-2xl font-bold">
                    <h1>
                      A
                      <span className="text-purple-800 fo text-xl lg:text-3xl">
                        g
                      </span>
                      iles
                    </h1>
                  </div> */}
                </div>
                <figure className="relative group">
                  <img
                    src={project_4}
                    alt="Project"
                    className="w-full p-4 lg:p-12 h-[200px] md:h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex-col pop font-bold ">
                    <div className="flex justify-between gap-12 flex-row p-8">
                      <h1 className="flex flex-col flex-1">
                        Timeline<span className="text-gray-400">8months</span>
                      </h1>
                      <p className="flex flex-col">
                        Technologies
                        <span className="text-gray-400">
                          Custom Web application Development for E-commerace
                          shop
                        </span>
                      </p>
                    </div>
                    <p className="text-purple-800 text-sm lg:text-base px-8 text-start">
                      A comprehensive E-commerce project providing agile
                      solutions for Shopping online.
                    </p>
                    <div className="w-full flex justify-start px-8">
                      <Link
                        className="btn btn-outline border-purple-800 text-white font-bold pop mt-6 px-8"
                        to={"/"}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </figure>
              </div>
              {/* card-5 */}
              <div className="card bg-[#0f041a] shadow-2xl shadow-[#430847] transition-all duration-300 rounded-lg overflow-hidden">
                <div className="flex mt-8 flex-row items-center px-6 lg:px-12 mb-6">
                  <h2 className="font-bold text-lg lg:text-2xl flex-1">
                    Penguin<span className="text-sky-400">Cloth</span>
                  </h2>
                  {/* <div className="ma text-lg lg:text-2xl font-bold">
                    <h1>
                      A
                      <span className="text-purple-800 fo text-xl lg:text-3xl">
                        g
                      </span>
                      iles
                    </h1>
                  </div> */}
                </div>
                <figure className="relative group">
                  <img
                    src={project_5}
                    alt="Project"
                    className="w-full p-4 lg:p-12 h-[200px] md:h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex-col pop font-bold ">
                    <div className="flex justify-between gap-12 flex-row p-8">
                      <h1 className="flex flex-col flex-1">
                        Timeline<span className="text-gray-400">4months</span>
                      </h1>
                      <p className="flex flex-col">
                        Technologies
                        <span className="text-gray-400">
                          Custom Web application Development for E-commerace
                          shop
                        </span>
                      </p>
                    </div>
                    <p className="text-purple-800 text-sm lg:text-base px-8 text-start">
                      A comprehensive E-commerce project providing agile
                      solutions for Shopping online.
                    </p>
                    <div className="w-full flex justify-start px-8">
                      <Link
                        className="btn btn-outline border-purple-800 text-white font-bold pop mt-6 px-8"
                        to={"/"}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </figure>
              </div>

              {/* Add more cards below if needed */}
            </div>
          </div>
        </div>
        {/* another */}
        <div className="flex justify-center items-center mt-24 mb-24">
          <div className=" bg-[#0f041a] w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-2 border border-orange-200 rounded-[42px] shadow-2xl shadow-[#430847] ">
            <div className="p-12 lg:p-20 flex flex-col gap-4 lg:gap-8 justify-center items-center lg:items-start">
              <h1 className="uppercase ma text-6xl font-thin text-center lg:text-start  ">
                <ImFire className="text-orange-400 font-bold text-2xl lg:text-4xl inline-block" />{" "}
                Create you custom <br></br>project
              </h1>
              <p className="text-white font-normal pop text-center lg:text-start">
                Let’s start to work together on advanced solutions for your
                business
              </p>
              <Link
                to={"/"}
                className="btn btn-outline px-8 border-purple-800 font-bold text-white mt-4 hover:bg-purple-800"
              >
                Contact Us
              </Link>
            </div>
            {/* pic */}
            <div className="flex px-6 lg:px-0 justify-center items-center">
              <img
                className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
                src={rock}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
