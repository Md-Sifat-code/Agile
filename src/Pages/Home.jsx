import React from "react";
import Hero from "../Fixed_component/Hero";
import Partner from "../Fixed_component/Partner";

import ChooseUs from "../Fixed_component/ChooseUs";
import Testimonials from "../Fixed_component/Testimonials";
import Emai from "../Fixed_component/Emai";

export default function Home() {
  return (
    <section className="">
      <div>
        <Hero />
        <Partner />

        <ChooseUs />
        <Testimonials />
        <Emai />
      </div>
    </section>
  );
}
