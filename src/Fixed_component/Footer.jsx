import React, { useState } from "react";

export default function Footer() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const policyContent = {
    terms: `
      <div class="text-left">
        <h2 class="text-2xl font-bold mb-4 text-purple-800">Terms of Use</h2>
        <p class="text-lg mb-3">Welcome to Agile Company Limited! By accessing and using our website and app services, you agree to comply with these Terms of Use...</p>
        <p><strong>1. Introduction</strong><br/>Welcome to Agile Company Limited! By accessing and using our website and app services, you agree to comply with these Terms of Use...</p>
        <p><strong>2. Services Provided</strong><br/>Agile Company Limited provides website development, tech support, and app development services...</p>
        <p><strong>3. Use of the Service</strong><br/>You agree to use our Service in accordance with all applicable laws and regulations...</p>
        <p><strong>4. Account Registration</strong><br/>Some features of the Service may require you to create an account...</p>
        <p><strong>5. Payment Terms</strong><br/>For certain paid services, you agree to provide accurate payment information...</p>
        <p><strong>6. Limitation of Liability</strong><br/>To the fullest extent permitted by law, Agile Company Limited is not liable for any direct, indirect, incidental, or consequential damages...</p>
        <p><strong>7. Termination</strong><br/>We may suspend or terminate your access to the Service at any time without notice...</p>
        <p><strong>8. Changes to Terms</strong><br/>We may modify or update these Terms of Use at any time...</p>
        <p><strong>9. Governing Law</strong><br/>These Terms of Use are governed by the laws of Bangladesh...</p>
      </div>
    `,
    privacy: `
      <div class="text-left">
        <h2 class="text-2xl font-bold mb-4 text-purple-800">Privacy Policy</h2>
        <p class="text-lg mb-3">Agile Company Limited is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information...</p>
        <p><strong>1. Information We Collect</strong><br/>We may collect the following types of information...</p>
        <p><strong>2. How We Use Your Information</strong><br/>We use the information we collect to provide and improve our services...</p>
        <p><strong>3. Data Security</strong><br/>We take appropriate security measures to protect your personal information...</p>
        <p><strong>4. Sharing Your Information</strong><br/>We do not sell or rent your personal information to third parties...</p>
        <p><strong>5. Third-Party Links</strong><br/>Our website and app may contain links to third-party websites...</p>
      </div>
    `,
    cookies: `
      <div class="text-left">
        <h2 class="text-2xl font-bold mb-4 text-purple-800">Cookies Policy</h2>
        <p class="text-lg mb-3">We use cookies to enhance your experience on our website and app...</p>
        <p><strong>1. What Are Cookies?</strong><br/>Cookies are small text files stored on your device that allow us to enhance your user experience...</p>
        <p><strong>2. Why We Use Cookies</strong><br/>We use cookies to improve the functionality of our website and app...</p>
        <p><strong>3. How to Control Cookies</strong><br/>You can manage or disable cookies through your browser settings...</p>
      </div>
    `,
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#08020e]">
      {/* Footer */}
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
            onClick={() => scrollToSection("home")}
            className="link link-hover"
          >
            Home
          </a>
          <a
            onClick={() => scrollToSection("about")}
            className="link link-hover"
          >
            About Us
          </a>
          <a
            onClick={() => scrollToSection("projects")}
            className="link link-hover"
          >
            Projects
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className="link link-hover"
          >
            Contact
          </a>
        </nav>

        {/* Legal Section */}
        <nav className="text-white">
          <h6 className="footer-title">Legal</h6>
          <a
            onClick={() => openModal("Terms of Use", policyContent.terms)}
            className="link link-hover"
          >
            Terms of Use
          </a>
          <a
            onClick={() => openModal("Privacy Policy", policyContent.privacy)}
            className="link link-hover"
          >
            Privacy Policy
          </a>
          <a
            onClick={() => openModal("Cookies Policy", policyContent.cookies)}
            className="link link-hover"
          >
            Cookie Policy
          </a>
        </nav>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal modal-open"
          onClick={closeModal} // Close modal if clicked outside
        >
          <div
            className="modal-box relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal box
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 btn btn-sm btn-circle bg-purple-800 text-white"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              {modalContent.title}
            </h2>
            <div
              className="text-lg text-black leading-relaxed"
              dangerouslySetInnerHTML={{ __html: modalContent.content }}
            ></div>
          </div>
        </div>
      )}

      {/* Copyright */}
      <div className="bg-[#08020e] text-center py-4 text-white border-t border-gray-700">
        <p>
          © {new Date().getFullYear()} Agile Company Limited. All rights
          reserved.
        </p>
        <p className="mt-2">
          Developed by <span className="text-purple-800">Md Sifat</span> &{" "}
          <span className="text-purple-800">Yeamim Sajid</span>
        </p>
      </div>
    </section>
  );
}
