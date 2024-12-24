import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineSlash } from "react-icons/hi2";
import sd from "/sdaa.png";

export default function About() {
  return (
    <section>
      <div className="container mx-auto mt-12 bg-[#08020e] px-4">
        <div className="flex flex-row items-center space-x-2 py-4">
          <Link
            to={"/"}
            className="text-white font-bold text-xl hover:text-purple-800"
          >
            Home
          </Link>
          <HiOutlineSlash className="text-xl text-white" />
          <h1 className="text-purple-800 text-xl font-bold">About</h1>
        </div>

        {/* Main Content */}
        <div className="flex justify-center items-center">
          <div className="w-full md:w-[90%] grid grid-cols-1 md:grid-cols-2 mt-4 gap-8">
            {/* Left Section: Text */}
            <div className="flex flex-col justify-center items-start gap-4">
              <h1 className="text-4xl pop font-bold text-white">About Us</h1>
              <p className="text-gray-300 w-full md:w-[80%]">
                Agiles is a website and app development company that is
                passionate about coding and balancing customer needs with the
                right tech solutions. For over 10 years, we have been creating
                custom technology solutions for clients in the UK, Canada, and
                across South Asia countries. Our technological expertise,
                management skills, and recruitment model set us apart. We can
                help you develop any project from scratch, enhance your existing
                team with dedicated experts, or find specialists with specific
                skills and experience to help you get your project done.
              </p>
            </div>

            {/* Right Section: Image */}
            <div className="flex flex-col justify-center items-center">
              {/* Replace the text with the image */}
              <img src={sd} alt="Agiles" className="max-w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="flex justify-center items-center mt-8">
          <div className="h-52 w-full md:w-[80%] border border-gray-600"></div>
        </div>
      </div>
    </section>
  );
}
