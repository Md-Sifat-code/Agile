import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaJava } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiHibernate,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

export default function TechnologyStack() {
  return (
    <div className="bg-[#08020e] min-h-screen py-16 px-5">
      <div className="container mx-auto text-white text-center overflow-hidden">
        {/* Header */}
        <h1 className="text-5xl font-extrabold mb-12 tracking-wide">
          Our Technology Stack
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-16 text-gray-400">
          We use a cutting-edge technology stack for both frontend and backend
          development to ensure robust, scalable, and efficient solutions for
          our clients.
        </p>

        <div className="space-y-16">
          {/* Frontend Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-200">
              Frontend Technologies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 overflow-hidden">
              {[
                {
                  icon: <FaReact size={36} className="text-blue-500" />,
                  name: "React.js",
                },
                {
                  icon: <SiTailwindcss size={36} className="text-teal-500" />,
                  name: "Tailwind CSS",
                },
                {
                  icon: <FaHtml5 size={36} className="text-orange-500" />,
                  name: "HTML5",
                },
                {
                  icon: <FaCss3Alt size={36} className="text-blue-500" />,
                  name: "CSS",
                },
                {
                  icon: <FaJs size={36} className="text-yellow-500" />,
                  name: "JavaScript",
                },
                {
                  icon: <SiTypescript size={36} className="text-blue-500" />,
                  name: "TypeScript",
                },
                {
                  icon: <BiCodeAlt size={36} className="text-purple-500" />,
                  name: "Daisy UI",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-[#0f041a] hover:scale-105 transform transition-all duration-300 overflow-hidden"
                >
                  {tech.icon}
                  <span className="font-medium text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-200">
              Backend Technologies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 overflow-hidden">
              {[
                {
                  icon: <SiSpringboot size={36} className="text-green-500" />,
                  name: "Spring Boot",
                },
                {
                  icon: <FaJava size={36} className="text-red-500" />,
                  name: "Java",
                },
                {
                  icon: <SiPostgresql size={36} className="text-blue-500" />,
                  name: "PostgreSQL",
                },
                {
                  icon: <SiMysql size={36} className="text-orange-500" />,
                  name: "MySQL",
                },
                {
                  icon: <SiMongodb size={36} className="text-green-500" />,
                  name: "MongoDB",
                },
                {
                  icon: <SiHibernate size={36} className="text-purple-500" />,
                  name: "Hibernate",
                },
                {
                  icon: <SiDocker size={36} className="text-blue-500" />,
                  name: "Docker",
                },
                {
                  icon: <SiKubernetes size={36} className="text-blue-300" />,
                  name: "Kubernetes",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-[#0f041a] hover:scale-105 transform transition-all duration-300 overflow-hidden"
                >
                  {tech.icon}
                  <span className="font-medium text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
