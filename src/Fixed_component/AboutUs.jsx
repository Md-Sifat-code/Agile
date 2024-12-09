import React from "react";
import logo_1 from "/s-1.png";
import logo_2 from "/s-2.png";
export default function AboutUs() {
  return (
    <section>
      <div className="container mx-auto mt-[100px]">
        <div className="grid grid-cols-5 w-full h-[100px]">
          <div className="col-span-2 bg-[#23262a] border-t border-l rounded-tl-[42px] rounded-tr-[42px]"></div>
          <div className="bg-transparent col-span-3 border-b rounded-bl-[42px]  "></div>
        </div>
        <div className=" bg-[#23262a] w-full border-l h-[500px]  border-b rounded-bl-[42px] grid grid-cols-2  ">
          <div className="flex flex-col justify-start items-start px-12">
            <h1 className="font-light text-4xl pop text-white">
              WHO <span className="text-white font-bold pop">WE ARE</span>
            </h1>
            <div className="flex flex-col mt-12 r text-white gap-8">
              <p>
                Lember is a software development company that specializes in
                creating and integrating detailed technology solutions. Our main
                goal is making businesses more advanced, structured, and
                profitable.{" "}
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
            <div className="bg-[#1e2022] w-[80%] h-[80%]">
              <div className=" mt-[-25px] flex flex-row gap-6 justify-center items-center">
                <div className="flex flex-col text-white font-bold justify-center items-center">
                  <img
                    className="w-[80px] h-[80px] rounded-[42px]"
                    src={logo_1}
                    alt=""
                  />
                  <p
                    className="text-center mt-2
                  "
                  >
                    Sifat<br></br>CEO,Co-Founder
                  </p>
                </div>
                <div className="flex text-white font-bold flex-col justify-center items-center">
                  <img
                    className="w-[80px] h-[80px] rounded-[42px]"
                    src={logo_2}
                    alt=""
                  />
                  <p className="text-center mt-2">
                    Sajid<br></br>CEO,Co-Founder
                  </p>
                </div>
              </div>
              <div>
                <p
                  className="text-gray-400 text-[15px] co px-8 mt-3
                "
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
