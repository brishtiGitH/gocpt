import React from "react";
import "./card.css";
const Card = ({ title, desc }) => {
  return (
    <div className="card-container border border-white border-opacity-30 rounded-3xl lg:max-w-[720px] lg:h-[400px] p-10 text-center flex flex-col justify-around gap-8  bg-white bg-opacity-10 hover:bg-opacity-25 backdrop-filter backdrop-blur-xl">
      <h1 className="text-4xl">{title}</h1>
      <p className=" text-sm lg:text-base 2xl:text-xl  leading-7">{desc}</p>
    </div>
  );
};

export default Card;
