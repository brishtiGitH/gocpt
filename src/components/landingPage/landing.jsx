import React from "react";
import "./landing.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container w-full min-h-full flex items-center">
      <div className="content p-10 flex flex-col 2xl:flex-row w-full items-center justify-center gap-10">
        <div className="left-content w-full 2xl:w-1/2 h-full flex flex-col justify-center gap-10 p-10 m-5 items-start">
          <h1 className="text-5xl">
            Welcome to <span className="logo1">Go</span>
            <span className="logo2">CPT</span> BETA Your Path to Effortless CPT
            Coding!
          </h1>
          <p className="text-3xl">
            We’re excited to introduce you to the BETA version of GoCPT Your
            free pass to a simplified and efficient CPT coding experience
            designed exclusively for mental health professionals like you.
          </p>
          <button className="btn text-3xl lg:w-[375px]">Start Testing</button>
        </div>
        <div className="rightw-full 2xl:w-1/2"></div>
      </div>
    </div>
  );
};

export default LandingPage;
