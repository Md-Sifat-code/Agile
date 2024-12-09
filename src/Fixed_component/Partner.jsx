import React from "react";
import { Link } from "react-router-dom";
import { SiJirasoftware } from "react-icons/si";
import { AiOutlineTeam } from "react-icons/ai";
import { FaBrain } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
export default function Partner() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h1 className="pop text-white text-5xl font-light text-center mb-12">
          PARTNER{" "}
          <span className="text-white ma font-bold text-7xl">WITH US</span>
        </h1>
        <div className="flex flex-wrap lg:flex-row md:flex-col gap-12 justify-center items-stretch">
          {/* Card 1 */}
          <div className="border bg-[#23262a] flex flex-col justify-between w-full lg:w-1/3 md:w-2/3 p-8">
            <div className="flex flex-row gap-5 items-center">
              <SiJirasoftware className="text-5xl font-bold text-purple-800" />
              <h1 className="pop text-white font-bold text-xl">
                Custom
                <br />
                <span className="font-medium">Website/App</span>
                <br />
                Development
              </h1>
            </div>
            <p className="my-6 text-white text-start">
              At Lember, we offer custom software development services that
              encompass a full spectrum of IT solutions. By combining our
              expertise with innovative strategies, we deliver exceptional
              services. With years of experience in managing projects globally,
              we ensure our clients receive tailored software. Startups, SMEs,
              and enterprises trust us for impactful results.
            </p>
            <div className="flex justify-end">
              <Link className="btn btn-outline border-purple-800 text-white">
                Book a Call <FaArrowUp className="text-white rotate-45" />
              </Link>
            </div>
          </div>
          {/* Card 2 */}
          <div className="border bg-[#23262a] flex flex-col justify-between w-full lg:w-1/3 md:w-2/3 p-8">
            <div className="flex flex-row gap-5 items-center">
              <AiOutlineTeam className="text-5xl font-bold text-purple-800" />
              <h1 className="pop text-white font-bold text-xl">
                Team
                <br />
                <span className="font-medium">Assemblement</span>
              </h1>
            </div>
            <p className="my-6 text-white text-start">
              A team of IT specialists develops unique software products,
              helping clients reduce development costs. From React and Angular
              to Python and Node.js, we provide dedicated teams globally. Share
              your ideas, and we'll build the foundation for successful
              projects, whether you are a startup or a large business.
            </p>
            <div className="flex justify-end">
              <Link className="btn btn-outline border-purple-800 text-white">
                Book a Call <FaArrowUp className="text-white rotate-45" />
              </Link>
            </div>
          </div>
          {/* Card 3 */}
          <div className="border bg-[#23262a] flex flex-col justify-between w-full lg:w-1/3 md:w-2/3 p-8">
            <div className="flex flex-row gap-5 items-center">
              <FaBrain className="text-5xl font-bold text-purple-800" />
              <h1 className="pop text-white font-bold text-xl">
                AI
                <br />
                <span className="font-medium">Integration</span>
              </h1>
            </div>
            <p className="my-6 text-white text-start">
              AI and machine learning have revolutionized IT. Start an AI-based
              project or enhance your current software with our engineers who
              specialize in sophisticated AI solutions. Share your business
              needs, and we'll recommend AI options to make it more competitive.
            </p>
            <div className="flex justify-end">
              <Link className="btn btn-outline border-purple-800 text-white">
                Book a Call <FaArrowUp className="text-white rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
