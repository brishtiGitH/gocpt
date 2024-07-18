import React from "react";
import Card from "../card/card";
import { titles, descriptions } from "./data";
import "./feature.css";
import Ellipses from "../ellipses";

// console.log(titles[0]);
const FeaturePage = () => {
  return (
    <div className="feature-page-container backdrop-filter backdrop-blur-xl relative bg-black min-h-screen p-10 text-white flex flex-col justify-center items-center ">
      <Ellipses />
      <div className="flex flex-col max-w-full justify-center items-center relative z-10  border border-white border-opacity-40 rounded-3xl  bg-black bg-opacity-10 backdrop-filter backdrop-blur-xl py-10 px-20 gap-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl underline decoration-2 text-center">
          Key Features of GoCPT BETA
        </h1>
        <div className="flex flex-col xl:flex-row gap-10">
          <Card title={titles[0]} desc={descriptions[0]} />
          <Card title={titles[1]} desc={descriptions[1]} />
        </div>
        <div className="flex flex-col xl:flex-row gap-10">
          <Card title={titles[2]} desc={descriptions[2]} />
          <Card title={titles[3]} desc={descriptions[3]} />
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
