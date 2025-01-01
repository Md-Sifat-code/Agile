import React from "react";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import mop from "/mop.webp";
import glow from "/glow.png";
import { Link } from "react-router-dom";
import Emai from "../Fixed_component/Emai"; // Adjust the path if necessary

export default function ContactUs() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    toast.success("Message sent successfully!"); // Display success message
    reset();
  };

  // Generate random position for each dot

  return (
    <>
      <ToastContainer /> {/* Toast container for notifications */}
      <section className="container mx-auto mb-12 mt-12 bg-[#08020e] px-4">
        {/* Breadcrumb Navigation */}
        <div className="flex justify-center items-center">
          <div className="w-full mt-12">
            <h1 className="text-white font-normal flex flex-row justify-start items-center text-sm lg:text-lg">
              <Link to={"/"}>Home</Link>{" "}
              <IoIosArrowRoundForward className="inline-block text-lg lg:text-xl" />{" "}
              <span className="text-purple-800 text-sm lg:text-xl font-bold">
                Contact
              </span>
            </h1>
          </div>
        </div>
        {/* Main Container */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 ">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left Section: Text */}
            <div className="flex flex-col justify-center items-start gap-4 px-4 md:px-0">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-start">
                Contact Us
              </h1>
              <p className="text-gray-300 text-sm pop md:text-xl w-full lg:w-[80%]">
                Seems like we are the software company you are searching for —
                fill out the form and let us exceed your expectations!
              </p>
            </div>

            {/* Right Section: Image */}
            <div className="flex justify-center items-center px-4 md:px-0 h-full">
              <img
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                src={glow}
                alt="Agiles"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Emai component */}
      <section className="container mx-auto">
        <Emai />
      </section>
      {/* mop section */}
      <section className="container mx-auto mt-[100px] mb-[100px] px-4 relative">
        <div className="flex justify-center items-center">
          <img
            className="w-full md:w-3/4 lg:w-full rounded-lg shadow-lg object-cover"
            src={mop}
            alt="Mop"
          />
        </div>

        {/* Static Card with Glassified Effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-6 bg-white/30 backdrop-blur-lg text-black rounded-lg shadow-lg w-[250px]">
          <h1 className="text-xl font-bold text-white">United City, Dhaka</h1>
          <p className="mt-2 text-sm">Agiles office</p>
        </div>
      </section>
      {/* mop */}
      <section className="container mx-auto mb-12 mt-12 bg-[#08020e] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 lg:px-16">
          <div className="flex flex-col items-center p-6 bg-[#210633] rounded-lg shadow-lg">
            <FaPhone className="text-purple-600 text-3xl mb-4 animate-pulse" />
            <h3 className="text-xl text-white font-semibold">Call Us</h3>
            <p className="text-gray-400">+8801762746646</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-[#210633] rounded-lg shadow-lg">
            <FaEnvelope className="text-purple-600 text-3xl mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold text-white">Email Us</h3>
            <p className="text-gray-400">agilesinformation@gmail.com</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-[#210633] rounded-lg shadow-lg">
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
            <h3 className="text-xl font-semibold mt-4 text-white">Follow Us</h3>
          </div>
        </div>
      </section>
    </>
  );
}
