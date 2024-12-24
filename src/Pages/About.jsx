import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineSlash } from "react-icons/hi2";

export default function About() {
  return (
    <section>
      <div className="container mx-auto bg-[#08020e]">
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
      </div>
    </section>
  );
}
