import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function ChooseUs() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#1e2124]">
      <div className="flex flex-col justify-center items-center bg-[#08020e] py-16 px-6 sm:px-8 md:px-12 lg:px-20">
        {/* Heading Section */}
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-light pop">
            Why Choose
            <span className="font-bold text-white">
              {" "}
              A
              <span className="text-purple-800 text-5xl sm:text-6xl md:text-7xl fo">
                g
              </span>
              iles
            </span>
          </h1>
          <p className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-4xl mx-auto">
            Agile isn’t just a service—it’s a partner in your journey. We don’t
            just build websites and applications; we craft solutions that
            empower, inspire, and elevate your business to new heights.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl w-full">
          {/* First Feature */}
          <div
            className="flex flex-col justify-center items-center bg-[#210633] p-8 rounded-lg shadow-2xl shadow-purple-800 hover:scale-105 transition-transform duration-300"
            data-aos="fade-right"
          >
            <h2 className="text-xl sm:text-2xl text-white font-semibold text-center">
              Client-Centric Approach
            </h2>
            <p className="mt-4 text-gray-300 text-center text-sm sm:text-base">
              We put your needs first, tailoring our solutions to your vision.
              Your success fuels our passion to innovate and deliver excellence.
            </p>
          </div>

          {/* Second Feature */}
          <div
            className="flex flex-col justify-center items-center bg-[#210633] p-8 rounded-lg shadow-2xl shadow-purple-800 hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
          >
            <h2 className="text-xl sm:text-2xl text-white font-semibold text-center">
              Innovative Solutions
            </h2>
            <p className="mt-4 text-gray-300 text-center text-sm sm:text-base">
              We merge creativity and technology to design solutions that not
              only meet but exceed expectations, helping you stand out in a
              crowded market.
            </p>
          </div>

          {/* Third Feature */}
          <div
            className="flex flex-col justify-center items-center bg-[#210633] p-8 rounded-lg shadow-2xl shadow-purple-800 hover:scale-105 transition-transform duration-300"
            data-aos="fade-left"
          >
            <h2 className="text-xl sm:text-2xl text-white font-semibold text-center">
              Dedicated Support
            </h2>
            <p className="mt-4 text-gray-300 text-center text-sm sm:text-base">
              From brainstorming to implementation and beyond, we stand by your
              side, ensuring every milestone brings you closer to your goals.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
            Ready to transform your ideas into reality?
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-6 px-8 py-3 bg-purple-800 text-white font-semibold rounded-lg shadow-md hover:bg-purple-900 transition-colors duration-300"
          >
            Let’s Get Started
          </button>
        </div>
      </div>

      {/* Contact Section (for demonstration purposes) */}
    </section>
  );
}
