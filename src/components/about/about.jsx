import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about-page-container bg-transparent min-h-screen w-full flex flex-col p-10 gap-5 items-center justify-center">
      <div className="page-content flex flex-col lg:flex-row w-full h-full">
        <div className="picture w-screen h-96 lg:h-[80vh] lg:w-1/2"></div>
        <div className="about-content flex-1 w-full lg:w-1/2 flex flex-col items-center lg:items-end p-10 text-center lg:text-end justify-center gap-10">
          <h1 className=" text-6xl 2xl:text-7xl underline decoration-2">
            About Us
          </h1>
          <h2 className=" text-3xl lg:text-5xl">
            Empowering Mental Health Professionals with Simplified CPT Coding
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl ">
            Welcome to goCPT, where the journey of revolutionizing the medical
            coding and billing landscape began with a single idea - to make
            mental health care more accessible to everyone.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl ">
            Join us on this transformative journey as we continue to innovate
            and evolve, breaking down barriers and making mental health care
            accessible to all. Together, we can shape a future where healthcare
            providers are empowered, and quality mental health care knows no
            boundaries.
          </p>
        </div>
      </div>
      <button className="btn text-4xl border pt-1  lg:w-[600px] border-white border-opacity-20">
        Sign Up Today!
      </button>
    </div>
  );
};

export default About;
