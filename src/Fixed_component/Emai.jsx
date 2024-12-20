import React, { useState } from "react";

export default function Emai() {
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    phone: "",
    service: "",
    freeTime: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({
      email: "",
      address: "",
      phone: "",
      service: "",
      freeTime: "",
      description: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-[#08020e] text-gray-300 py-12 px-4 sm:px-8 lg:px-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="co text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Reach Out with your
            <br /> Thoughts
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-[80%] md:w-[70%]">
            For more information, send us your details, requirements, and
            project details. We will reach out to you within 2-23 working hours.
            <span className="m-4 text-purple-600 text-base sm:text-lg md:text-xl font-bold ma">
              Happy Browsing!!
            </span>
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="bg-[#0f041a] rounded-lg shadow-lg p-4 sm:p-6 lg:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Email Address and Address Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-[#2b2f33] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="w-full bg-[#2b2f33] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
                />
              </div>
            </div>

            {/* Phone Number and Service Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full bg-[#2b2f33] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Services You Want
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#2b2f33] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Personal Website">Personal Website</option>
                  <option value="Portfolio Website">Portfolio Website</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="freeTime"
                className="block text-xs sm:text-sm font-medium mb-2"
              >
                Your Free Time for a Meeting
              </label>
              <input
                type="text"
                id="freeTime"
                name="freeTime"
                value={formData.freeTime}
                onChange={handleChange}
                placeholder="Enter your free time"
                className="w-full bg-[#2b2f33] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-xs sm:text-sm font-medium mb-2"
              >
                Describe What You Want
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Briefly describe your requirements"
                className="w-full bg-[#2b2f33] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-purple-800 text-white font-medium py-3 rounded-lg hover:bg-purple-900 transition duration-300 text-sm sm:text-base lg:text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
