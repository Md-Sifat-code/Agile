import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import banner from "/World Map.svg";

export default function ContactUs() {
  const { register, handleSubmit, reset } = useForm();
  const [hoveredDot, setHoveredDot] = useState(null);

  const onSubmit = (data) => {
    toast.success("Message sent successfully!");
    reset();
  };

  const handleHover = (dotIndex) => {
    setHoveredDot(dotIndex);
  };

  return (
    <div className="bg-[#08020e] min-h-screen text-white">
      {/* Banner Section */}
      <div className="relative h-[70vh] flex items-center justify-center">
        <img
          src={banner}
          alt="World Map"
          className="absolute w-full h-full object-cover opacity-50"
        />
        <div className="absolute flex space-x-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[1, 2, 3].map((dot, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => setHoveredDot(null)}
            >
              <span className="w-6 h-6 rounded-full bg-purple-800 animate-pulse cursor-pointer"></span>
              {hoveredDot === index && (
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-60 p-4 bg-[#1a132b] rounded-lg shadow-lg z-10">
                  {index === 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-purple-600">
                        Phone
                      </h3>
                      <p className="text-gray-400">Call us at +123-456-7890</p>
                    </div>
                  )}
                  {index === 1 && (
                    <div>
                      <h3 className="text-xl font-semibold text-purple-600">
                        Email
                      </h3>
                      <p className="text-gray-400">
                        Send an email to info@agiles.com
                      </p>
                    </div>
                  )}
                  {index === 2 && (
                    <div>
                      <h3 className="text-xl font-semibold text-purple-600">
                        Visit
                      </h3>
                      <p className="text-gray-400">
                        Visit us at 123 Agile St, Tech City
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 lg:px-16">
        <div className="flex flex-col items-center p-6 bg-[#0f0919] rounded-lg shadow-lg">
          <FaPhone className="text-purple-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold">Call Us</h3>
          <p className="text-gray-400">+8801762746646</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-[#0f0919] rounded-lg shadow-lg">
          <FaEnvelope className="text-purple-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold">Email Us</h3>
          <p className="text-gray-400">agilesinformation@gmail.com</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-[#0f0919] rounded-lg shadow-lg">
          <FaMapMarkerAlt className="text-purple-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold">Visit Us</h3>
          <p className="text-gray-400">12/G Dhanmodi, Dhaka</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="p-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-6">
          Send Us a Message
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-3xl mx-auto bg-[#0f0919] p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="p-4 bg-[#1a132b] rounded-md outline-none text-gray-300 focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className="p-4 bg-[#1a132b] rounded-md outline-none text-gray-300 focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <textarea
            placeholder="Your Message"
            {...register("message", { required: true })}
            className="w-full mt-6 p-4 bg-[#1a132b] rounded-md outline-none text-gray-300 focus:ring-2 focus:ring-purple-600"
            rows="6"
          ></textarea>
          <button
            type="submit"
            className="w-full mt-6 py-3 bg-purple-600 rounded-md text-white font-bold hover:bg-purple-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-center" />
    </div>
  );
}
