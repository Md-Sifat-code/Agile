import React from "react";

export default function Footer() {
  return (
    <section className="bg-[#08020e]">
      <footer className="footer  text-base-content p-10">
        <aside className="flex flex-col gap-4">
          <div className="text-4xl text-white ma font-bold">
            <h1>
              A<span className="fo text-purple-800 text-5xl">g</span>ile
            </h1>
          </div>

          <p className="text-white">
            Agile Company Limited
            <br />
            Providing reliable tech support since 2023
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </section>
  );
}
