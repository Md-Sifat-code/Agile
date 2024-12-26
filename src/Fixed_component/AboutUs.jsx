import React from "react";
import frontend from "/s-1.png";
import backend from "/s-2.jpg";

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#08020e] py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-12">
          About{" "}
          <span className="font-bold text-white">
            {" "}
            <span className="text-purple-800 text-5xl sm:text-6xl md:text-7xl ma">
              Our
            </span>
          </span>
          <span className="px-4">Team</span>
        </h1>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Frontend - Md Sifat Bin Jibon */}
          <div className="flex flex-col items-center bg-[#0f041a] rounded-lg shadow-md p-8 transition-transform hover:scale-105">
            <img
              src={frontend}
              alt="Md Sifat Bin Jibon"
              className="w-40 h-40 object-cover rounded-full border-4 border-purple-800 mb-6"
            />
            <h2 className="text-2xl font-bold text-white mb-2">
              Md Sifat Bin Jibon
            </h2>
            <h3 className="text-purple-500 text-lg font-medium mb-4">
              Co-Owner | Frontend Developer
            </h3>
            <p className="text-gray-300 text-sm">
              Sifat, a passionate frontend developer, built the stunning user
              interface of Agiles using React.js. Currently pursuing a
              Bachelor's degree in Computer Science at{" "}
              <span className="text-purple-800 font-semibold">
                United International University
              </span>
              , Sifat brings a creative vision to every project. His dedication
              to crafting intuitive and engaging web experiences sets him apart
              as a leader and innovator.
            </p>
          </div>

          {/* Backend - Yeamim Hossain Sajid */}
          <div className="flex flex-col items-center bg-[#0f041a] rounded-lg shadow-md p-8 transition-transform hover:scale-105">
            <img
              src={backend}
              alt="Yeamim Hossain Sajid"
              className="w-40 h-40 object-cover rounded-full border-4 border-purple-800 mb-6"
            />
            <h2 className="text-2xl font-bold text-white mb-2">
              Yeamim Hossain Sajid
            </h2>
            <h3 className="text-purple-500 text-lg font-medium mb-4">
              Co-Owner | Backend Developer
            </h3>
            <p className="text-gray-300 text-sm">
              Sajid, the mastermind behind Agiles' backend, developed a robust
              and scalable system using Spring Boot. As a Computer Science
              student at{" "}
              <span className="text-purple-800 font-semibold">
                United International University
              </span>
              , Sajid is a problem solver and visionary. His expertise ensures
              that Agiles runs smoothly and securely, enabling seamless user
              experiences.
            </p>
          </div>
        </div>

        {/* Emotionally Impactful Closing */}
        <div className="mt-12">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-300 mb-4">
            Together, we are building a future of innovation, excellence, and
            impact. Welcome to Agiles.
          </h2>
          <p className="text-gray-400 text-sm">
            Our mission is to transform ideas into reality with passion,
            precision, and professionalism.
          </p>
        </div>
      </div>
    </section>
  );
}
