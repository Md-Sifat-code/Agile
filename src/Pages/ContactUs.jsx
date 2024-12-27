import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDotCircle,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import banner from "/World Map.svg";

export default function ContactUs() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <div className="bg-[#08020e] min-h-screen text-white">
      {/* Banner Section */}
      <div className="relative h-[70vh] flex items-center justify-center">
        <img
          src={banner}
          alt="World Map"
          className="absolute p-22 w-full h-full object-cover opacity-50"
        />
        {/* Overlay Text */}
        <div className="absolute w-full h-full">
          <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center text-4xl lg:text-5xl font-bold text-white">
            Find US
          </h1>

          {/* Hoverable Dots */}
          <div>
            {/* Dot 1 */}
            <div className="group absolute top-[40%] left-[73%]">
              <FaDotCircle className="text-purple-600 text-xl animate-pulse shadow-[0_0_15px_rgba(147,51,234,0.8)] cursor-pointer" />
              <div className="absolute w-[250px] top-10 left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col items-center bg-[#0f0919] text-gray-300 text-sm px-6 py-4 rounded-lg shadow-lg ">
                <h3 className="font-semibold text-purple-400 text-lg">
                  Dhaka Office
                </h3>
                <p>12/G Dhanmondi, Dhaka</p>
              </div>
            </div>

            {/* Dot 2 */}
            <div className="group absolute top-[48%] left-[75%]">
              <FaDotCircle className="text-purple-600 text-xl animate-pulse shadow-[0_0_15px_rgba(147,51,234,0.8)] cursor-pointer" />
              <div className="absolute w-[250px] top-10 left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col items-center bg-[#0f0919] text-gray-300 text-sm px-6 py-4 rounded-lg shadow-lg">
                <h3 className="font-semibold text-purple-400 text-lg">
                  Chittagong Office
                </h3>
                <p>Bay Terminal, Chittagong</p>
              </div>
            </div>

            {/* Dot 3 */}
            <div className="group absolute top-[46%] left-[73%]">
              <FaDotCircle className="text-purple-600 text-xl animate-pulse shadow-[0_0_15px_rgba(147,51,234,0.8)] cursor-pointer" />
              <div className="absolute w-[250px] top-10 left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col items-center bg-[#0f0919] text-gray-300 text-sm px-6 py-4 rounded-lg shadow-lg">
                <h3 className="font-semibold text-purple-400 text-lg">
                  Sylhet Office
                </h3>
                <p>Airport Road, Sylhet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 lg:px-16">
        <div className="flex flex-col items-center p-6 bg-[#0f0919] rounded-lg shadow-lg">
          <FaPhone className="text-purple-600 text-3xl mb-4 shadow-[0_0_15px_rgba(147,51,234,0.8)] animate-pulse" />
          <h3 className="text-xl font-semibold">Call Us</h3>
          <p className="text-gray-400">+8801762746646</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-[#0f0919] rounded-lg shadow-lg">
          <FaEnvelope className="text-purple-600 text-3xl mb-4 shadow-[0_0_15px_rgba(147,51,234,0.8)] animate-pulse" />
          <h3 className="text-xl font-semibold">Email Us</h3>
          <p className="text-gray-400">agilesinformation@gmail.com</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-[#0f0919] rounded-lg shadow-lg">
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/agiles-web-services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-purple-600 text-3xl hover:text-purple-400 transition duration-300" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61571068927921"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-purple-600 text-3xl hover:text-purple-400 transition duration-300" />
            </a>
          </div>
          <h3 className="text-xl font-semibold mt-4">Follow Us</h3>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-center" />
    </div>
  );
}
