import React from "react";
import Hero from "../Fixed_component/Hero";
import Partner from "../Fixed_component/Partner";
import AboutUs from "../Fixed_component/AboutUs";
import ChooseUs from "../Fixed_component/ChooseUs";
import Testimonials from "../Fixed_component/Testimonials";

export default function Home() {
  return (
    <section className="">
      <div>
        <Hero />
        <Partner />
        <AboutUs />
        <ChooseUs />
        <Testimonials />
      </div>
    </section>
  );
}
