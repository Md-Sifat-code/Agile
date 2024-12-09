import React, { useEffect } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import logo_1 from "/s-1.png";
import logo_2 from "/s-2.png";

export default function AboutUs() {
  const { currentTheme, switcher } = useThemeSwitcher();

  // Detect the current theme and apply corresponding styles
  useEffect(() => {
    console.log("Current theme:", currentTheme);
  }, [currentTheme]);

  const isDarkTheme = currentTheme === "dark"; // You can check the theme to conditionally apply styles

  return (
    <section id="about">
      <div className="container mx-auto mt-[100px]">
        <div className="grid grid-cols-5 w-full h-[100px]">
          <div
            className={`col-span-2 ${
              isDarkTheme ? "bg-[#23262a]" : "bg-[#f9fafb]"
            } border-t border-l ${
              isDarkTheme ? "border-white" : "border-purple-800"
            } rounded-tl-[42px] rounded-tr-[42px]`}
          ></div>
          <div
            className={`bg-transparent col-span-3 border-b ${
              isDarkTheme ? "border-white" : "border-purple-800"
            } rounded-bl-[42px]`}
          ></div>
        </div>
        <div
          className={`${
            isDarkTheme ? "bg-[#23262a]" : "bg-[#f9fafb]"
          } w-full border-l ${
            isDarkTheme ? "border-white" : "border-purple-800"
          } h-[1800px] sm:h-[800px] lg:h-[500px] border-b rounded-bl-[42px] grid grid-cols-1 md:grid-cols-2 gap-12`}
        >
          <div className="flex flex-col justify-start items-start px-12">
            <h1
              className={`font-light text-4xl pop ${
                isDarkTheme ? "text-white" : "text-black"
              } sm:text-3xl`}
            >
              WHO{" "}
              <span
                className={`${
                  isDarkTheme ? "text-white" : "text-black"
                } font-bold pop`}
              >
                WE ARE
              </span>
            </h1>
            <div
              className={`flex flex-col mt-12 r ${
                isDarkTheme ? "text-white" : "text-black"
              } gap-8`}
            >
              <p>
                Lember is a software development company that specializes in
                creating and integrating detailed technology solutions. Our main
                goal is making businesses more advanced, structured, and
                profitable.
              </p>
              <p>
                We are lucky to have a team of truly talented and passionate
                tech professionals who possess the expertise needed to lead your
                company to digitalization. We work closely with each of our
                customers, giving them the personalized service they need and
                keeping them updated and involved throughout the entire
                development process.
              </p>
              <p>
                We’re driven by the smiles on our clients’ faces when they tell
                us that we helped them finally create the product they’ve
                dreamed about. We love what we do and constantly strive to
                provide our customers with solutions that are a mix of
                innovative and reliable approaches. This allows us to build
                systems that serve your needs for years, so you can plan for
                decades.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`${
                isDarkTheme ? "bg-[#1e2022]" : "bg-[#e1e3e5]"
              } w-full h-full lg:w-[80%] lg:h-[80%]`}
            >
              <div className="mt-[-25px] flex flex-row gap-6 justify-center items-center flex-wrap">
                <div
                  className={`flex flex-col ${
                    isDarkTheme ? "text-white" : "text-black"
                  } font-bold justify-center items-center`}
                >
                  <img
                    className="w-[80px] h-[80px] rounded-[42px]"
                    src={logo_1}
                    alt=""
                  />
                  <p className="text-center mt-2">
                    Sifat
                    <br />
                    CEO,Co-Founder
                  </p>
                </div>
                <div
                  className={`flex ${
                    isDarkTheme ? "text-white" : "text-black"
                  } font-bold flex-col justify-center items-center`}
                >
                  <img
                    className="w-[80px] h-[80px] rounded-[42px]"
                    src={logo_2}
                    alt=""
                  />
                  <p className="text-center mt-2">
                    Sajid
                    <br />
                    CEO,Co-Founder
                  </p>
                </div>
              </div>
              <div className="">
                <p
                  className={`text-gray-400 text-[15px] co px-8 mt-3 ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  We are IT professionals who, eight years ago, decided to start
                  a software development company. We both have master’s degrees
                  in engineering and have dreamed of having our own businesses
                  since we were in university. We are passionate about
                  technology and are always striving to build a company that
                  provides qualified solutions across various industries.
                  Whenever the Lember Team starts a new project, the primary
                  goal is not just to develop software, but to deliver solutions
                  that perfectly align with your business model, resources, and
                  vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
