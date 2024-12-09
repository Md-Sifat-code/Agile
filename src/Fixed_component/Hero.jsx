import React from "react";
import face from "/icons8-wink-50.png";
export default function Hero() {
  return (
    <section>
      <div className="container mx-auto h-[800px] grid grid-cols-2">
        <div
          className="w-full h-full flex flex-col justify-start
           items-center
        "
        >
          <h1 className="text-white font-bold text-5xl mt-24">
            Your Trustworthy{" "}
            <img
              className=" inline-block w-[50px] h-[50px] "
              src={face}
              alt=""
            />
            <br></br>Technology<br></br>Partner
          </h1>
        </div>
        <div></div>
      </div>
    </section>
  );
}
