import React from "react";
import Swal from "sweetalert2";

export default function Footer() {
  const handleSwalClick = (title, message) => {
    Swal.fire({
      title,
      text: message,
      icon: "info",
      confirmButtonText: "Close",
    });
  };

  return (
    <section className="bg-[#08020e]">
      <footer className="footer container mx-auto flex flex-col lg:flex-row justify-around items-start lg:items-center mt-12 text-base-content p-10">
        {/* Company Section */}
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

        {/* Navigation Links */}
        <nav className="text-white">
          <h6 className="footer-title">Quick Links</h6>
          <a
            onClick={() =>
              handleSwalClick("Home", "Navigate to the home section.")
            }
            className="link link-hover"
          >
            Home
          </a>
          <a
            onClick={() =>
              handleSwalClick("About Us", "Learn more about Agile Company.")
            }
            className="link link-hover"
          >
            About Us
          </a>
          <a
            onClick={() =>
              handleSwalClick("Projects", "Explore our recent projects.")
            }
            className="link link-hover"
          >
            Projects
          </a>
          <a
            onClick={() => handleSwalClick("Contact", "Get in touch with us.")}
            className="link link-hover"
          >
            Contact
          </a>
        </nav>

        {/* Legal Section */}
        <nav className="text-white">
          <h6 className="footer-title">Legal</h6>
          <a
            onClick={() =>
              handleSwalClick(
                "Terms of Use",
                "These are the terms governing your use of Agile's services."
              )
            }
            className="link link-hover"
          >
            Terms of Use
          </a>
          <a
            onClick={() =>
              handleSwalClick(
                "Privacy Policy",
                "Learn how Agile Company handles your data."
              )
            }
            className="link link-hover"
          >
            Privacy Policy
          </a>
          <a
            onClick={() =>
              handleSwalClick(
                "Cookies Policy",
                "Details about our use of cookies on this site."
              )
            }
            className="link link-hover"
          >
            Cookie Policy
          </a>
        </nav>
      </footer>

      {/* Copyright Section */}
      <div className="bg-[#08020e] text-center py-4 text-white border-t border-gray-700">
        <p>
          © {new Date().getFullYear()} Agile Company Limited. All rights
          reserved.
        </p>
        <p className="mt-2">
          Developed by <span className="text-purple-800">Md Sifat</span> /{" "}
          <span className="text-purple-800">Yeamim Sajid</span>
        </p>
      </div>
    </section>
  );
}
