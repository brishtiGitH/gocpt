import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-container border border-black bg-black bg-opacity-5 backdrop-filter backdrop-blur-2xl flex placeholder: flex-col md:flex-row justify-between items-center w-full h-auto p-5 md:p-10 lg:p-20">
      <div className="company-details w-full md:w-1/2 flex flex-col gap-5">
        <h1 className="text-6xl  font-semibold">
          <span className="logo1">Go</span>
          <span className="logo2">CPT</span>
        </h1>
        <p className="text-base md:text-xl">
          We are not here to sell you products, we sell value through our
          expertise.
        </p>
        <p className="text-base md:text-xl">
          Email:{" "}
          <a className="email-link" href="mailto:info@gocpt.ai">
            info@gocpt.ai
          </a>
        </p>
        <p className="text-base md:text-xl">
          &copy; 2024 All rights reserved gocpt.ai
        </p>
      </div>
      <div className="links w-full md:w-1/2 p-3 lg:p-10">
        <nav>
          <ul className="flex md:flex-col text-base md:text-xl md:items-end gap-4">
            <li>Home</li>
            <li>features</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
