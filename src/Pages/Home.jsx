import React from "react";
import Hero from "../Fixed_component/Hero";
import Partner from "../Fixed_component/Partner";
import AboutUs from "../Fixed_component/AboutUs";

export default function Home() {
  return (
    <section className="">
      <div>
        <Hero />
        <Partner />
        <AboutUs />
      </div>
    </section>
  );
}
