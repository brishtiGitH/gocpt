import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ scrollToFeaturePage, scrollToAbout, scrollToContact }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar z-50 top-0 left-0 right-0 fixed  flex gap-0 lg:gap-5 justify-evenly lg:justify-between items-center py-3 bg-opacity-5 backdrop-filter backdrop-blur-2xl">
      <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-2xl font-extrabold">
        <span className="logo1">Go</span>
        <span className="logo2">CPT</span>
      </h1>
      <div>
        <nav>
          <ul className="nav flex justify-around text-2xl lg:text-3xl xl:text-4xl gap-6 ">
            <li>HOME</li>
            <li id="navbar-faq">FAQ</li>
            <li id="navbar-features" onClick={scrollToFeaturePage}>
              FEATURES
            </li>
            <li onClick={scrollToAbout}>ABOUT US</li>
            <li onClick={scrollToContact}>CONTACT US</li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-5">
        <button onClick={() => navigate("/login")} className="btn text-2xl">
          Log In
        </button>
        <button onClick={() => navigate("/signup")} className="btn text-2xl ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
