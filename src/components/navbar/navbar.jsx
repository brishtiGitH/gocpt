import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar w-full flex justify-between items-center py-3">
      <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-2xl font-extrabold">
        <span className="logo1">Go</span>
        <span className="logo2">CPT</span>
      </h1>
      <div>
        <nav>
          <ul className="nav flex justify-around md:text-2xl lg:text-3xl xl:text-4xl gap-6 ">
            <li>HOME</li>
            <li>FAQ</li>
            <li>FEATURES</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-5">
        <button className="btn text-2xl">Log In</button>
        <button className="btn text-2xl ">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
