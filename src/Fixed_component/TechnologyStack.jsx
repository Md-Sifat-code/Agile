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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 overflow-hidden">
          {/* Technologies */}
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
            {
              icon: (
                <img
                  src="https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png"
                  alt="Flutter"
                  className="w-12 h-12"
                />
              ),
              name: "Flutter",
            },
            {
              icon: (
                <img
                  src="https://famaash.com/system/files/2024-04/square_0.png"
                  alt="Three.js"
                  className="w-12 h-12 object-contain"
                />
              ),
              name: "Three.js",
            },
            {
              icon: (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
                  alt="Bootstrap"
                  className="w-12 h-12 object-contain"
                />
              ),
              name: "Bootstrap",
            },
            {
              icon: (
                <img
                  src="https://scriptverse.dev/img/tutorials/react-router.png"
                  alt="React Router"
                  className="w-12 h-12 object-contain"
                />
              ),
              name: "React Router",
            },
            {
              image:
                "https://scalac.io/wp-content/uploads/2021/02/FB_Post-Size-link-image-size-5.jpg", // Kafka
              name: "Kafka",
            },
            {
              image:
                "https://images.ctfassets.net/o7xu9whrs0u9/6qR4PTwCTfgl0tjfrz0lpy/819fecae70412dacb9b960b98f5fae3b/RabbitMQ-LOGO.png", // RabbitMQ
              name: "RabbitMQ",
            },
            {
              image: "https://saviynt.com/hubfs/aws.png", // AWS
              name: "AWS (S3, RDS, Lambda, ECS)",
            },
            {
              image:
                "https://cdn.prod.website-files.com/6449405754e757db07f25327/6656429d1776bd09704334e8_google.webp", // GCP
              name: "Google Cloud Platform (GCP)",
            },
            {
              image:
                "https://www.padok.fr/hubfs/Images/Azure/Microsoft-Azure.webp", // Azure
              name: "Microsoft Azure",
            },
            {
              image: "https://erkanerkisi.github.io/images/hystrixlogo.jpg", // Netflix Hystrix
              name: "Netflix Hystrix",
            },
            {
              image:
                "https://huongdanjava.com/wp-content/uploads/2018/04/spring-cloud-netflix.jpeg", // Netflix Eureka
              name: "Netflix Eureka",
            },
            {
              icon: <SiDocker size={36} className="text-blue-500" />,
              name: "Docker",
            },
            {
              icon: <SiKubernetes size={36} className="text-blue-300" />,
              name: "Kubernetes (K8s)",
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
              icon: <SiSpringboot size={36} className="text-green-500" />,
              name: "Spring Boot",
            },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-[#0f041a] shadow-md shadow-purple-800  hover:scale-105 transform transition-all duration-300 overflow-hidden mb-2"
            >
              {tech.image ? (
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                />
              ) : (
                tech.icon
              )}
              <span className="font-medium text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
