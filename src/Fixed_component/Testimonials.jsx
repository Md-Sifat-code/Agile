import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Testimonials() {
  const [clients, setClients] = useState([]);

  // Fetch data from the JSON file
  useEffect(() => {
    fetch("/clients.json") // Adjust the path as needed
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Error fetching client data:", error));
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-[#1c1f22] border-t rounded-tr-[42px] rounded-tl-[42px] text-white py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center ">
          <h1 className="pop font-light text-4xl text-center">
            CLIENTS’ <span className="font-bold">TESTIMONIALS</span>
          </h1>
          <p className="text-center w-[80%] lg:w-[40%] mb-[100px]">
            <span className="text-purple-800">
              Your positive feedback is always a warmth to our souls.
            </span>{" "}
            In the modern world, there are a huge number of companies in the IT
            outsourcing market. When you choose us and express your gratitude at
            the end of a project, it means a lot to us — more than just words.
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true} // Centers the active slide
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1, // For small screens
            },
            768: {
              slidesPerView: 2, // For medium screens
            },
            1024: {
              slidesPerView: 3, // For large screens
            },
          }}
          className="mySwiper"
        >
          {clients.map((client) => (
            <SwiperSlide
              key={client.id}
              className="testimonial-card transition-transform duration-500"
            >
              <div className="card w-full h-fit bg-gray-800 shadow-xl rounded-lg p-6 flex flex-col justify-between">
                <p className="co border-b border-purple-800 py-6 text-lg ">
                  "{client.feedback}"
                </p>

                <h3 className="text-xl font-semibold text-right mt-4">
                  - {client.name}
                </h3>
                <p className="text-xl font-normal co text-right mt-4">
                  {client.company}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
